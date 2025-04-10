import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Character } from "../types/Character"
import * as characterService from "../services/characterService"
import "../styles/Home.css";

function Home() {
  const [characters, setCharacters] = useState<Character[]>([])

  const loadCharacters = async () => {
    const res = await characterService.getCharacters()
    setCharacters(res.data)
  }

  useEffect(() => {
    loadCharacters()
  }, []);

  const handleDelete = async (id: number) => {
    await characterService.deleteCharacter(id)
    loadCharacters()
  }

  return (
    <div className="container">
      <header>
        <div className="header">
          <h1>Character Manager</h1>
          <Link to="/create">
            <button className="create-button">Create New Character</button>
          </Link>
        </div>
      </header>
      
      <table className="character-table">
        <tr>
          <th colSpan={4}>Characters Submitted</th>
        </tr>
        <tr id="table-top">
          <th>Name</th>
          <th>Series</th>
          <th>Origin</th>
          <th>Actions</th>
        </tr>

        {characters.map((char) => (
          <tr key={char.id}>
            <th>{char.name}</th>
            <th>{char.series}</th>
            <th>{char.origin}</th>
            <th>
              <Link to={`/edit/${char.id}`}>
                <button className="basic-button">Edit</button>
              </Link>
              <button onClick={() => handleDelete(char.id)} className="basic-button">Delete</button>
            </th>
          </tr>
        ))}
        
      </table>
    </div>
  );
}

export default Home;

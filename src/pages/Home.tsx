import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Character } from "../types/Character"
import * as characterService from "../services/characterService"
import "../App.css";

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
      <h1>Character Manager</h1>
      <Link to="/create">
        <button>Create New Character</button>
      </Link>

      <ul>
        {characters.map((char) => (
          <li key={char.id}>
            <strong>{char.name}</strong> from <em>{char.series}</em> ({char.origin})

            <Link to={`/edit/${char.id}`}>
              <button style={{ marginLeft: "0.5rem" }}>Edit</button>
            </Link>
            
            <button onClick={() => handleDelete(char.id)} style={{ marginLeft: "0.5rem" }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;

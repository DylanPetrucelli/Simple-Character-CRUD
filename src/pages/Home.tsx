import { useEffect, useState } from "react"
import { Character } from "../types/Character"
import * as characterService from "../services/characterService"
import CharTable from "../components/CharTable"
import Header from "../components/Header"
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

      <Header />

      <CharTable characters={characters} onDelete={handleDelete} />
      
    </div>
  );
}

export default Home;

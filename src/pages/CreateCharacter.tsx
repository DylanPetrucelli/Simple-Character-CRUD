import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Character } from "../types/Character"
import * as characterService from "../services/characterService"
import Header from "../components/Header"
import CharacterForm from "../components/CharForm"
import "../styles/Create.css"

function CreateCharacter() {
  const [form, setForm] = useState<Omit<Character, "id">>({
    name: "",
    series: "",
    origin: ""
  })

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await characterService.getCharacters()
    const characters = res.data

    const maxId = characters.length > 0 ? Math.max(...characters.map(c => c.id)) : 0;
    const newCharacter = {
      id: (maxId + 1).toString(),
      ...form
    }

    await characterService.createCharacter(newCharacter)
    navigate("/")
  }

  return (
    <div>

      <Header />

      <div className="create-input">
        <h2>Add New Character</h2>

        <CharacterForm
          form={form}
          handleChange={handleChange}
          onSubmit={handleSubmit}
          submitText="Add Character"
        />

      </div>
    </div>

  );
}

export default CreateCharacter;

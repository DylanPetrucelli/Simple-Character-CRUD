import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Character } from "../types/Character"
import * as characterService from "../services/characterService"
import Header from "../components/Header"
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

        <form onSubmit={handleSubmit} className="input-form">
          <input
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            required
            className="basic-text-input"
          />
          <input
            name="series"
            placeholder="Series"
            value={form.series}
            onChange={handleChange}
            required
            className="basic-text-input"
          />
          <input
            name="origin"
            placeholder="Origin"
            value={form.origin}
            onChange={handleChange}
            required
            className="basic-text-input"
          />
          <button type="submit" className="basic-button">Add Character</button>

        </form>
      </div>
    </div>

  );
}

export default CreateCharacter;

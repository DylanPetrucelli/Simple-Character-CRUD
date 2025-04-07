import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Character } from "../types/Character"
import * as characterService from "../services/characterService"
import "../App.css"

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
      ...form,
      id: maxId + 1,
    }

    await characterService.createCharacter(newCharacter)
    navigate("/")
  }

  return (
    <div className="container">
      <h2>Create New Character</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          name="series"
          placeholder="Series"
          value={form.series}
          onChange={handleChange}
          required
        />
        <input
          name="origin"
          placeholder="Origin"
          value={form.origin}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Character</button>
      </form>
    </div>
  );
}

export default CreateCharacter;

import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Character } from "../types/Character"
import * as characterService from "../services/characterService"
import Header from "../components/Header"
import CharacterForm from "../components/CharForm"

import "../App.css"

function EditCharacter() {
  const [form, setForm] = useState<Omit<Character, "id">>({
    name: "",
    series: "",
    origin: ""
  })

  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const loadCharacter = async () => {
      if (!id) return;
      const res = await characterService.getCharacter(parseInt(id))
      setForm({
        name: res.data.name,
        series: res.data.series,
        origin: res.data.origin
      });
    }
    loadCharacter();
  }, [id])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!id) return;
    await characterService.updateCharacter(parseInt(id), form)
    navigate("/");
  }

  return (

    <div>

      <Header />

      <div className="create-input">

        <h2>Edit Character</h2>

        <CharacterForm
          form={form}
          handleChange={handleChange}
          onSubmit={handleSubmit}
          submitText="Update Character"
        />

      </div>
    </div>

  );
}

export default EditCharacter;

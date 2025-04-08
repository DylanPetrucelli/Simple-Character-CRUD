import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { Character } from "../types/Character"
import * as characterService from "../services/characterService"
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
      <header>
              <Link to="/" style={{ textDecoration: 'none' }}>
                <div className="header">
                  <h1>Character Manager</h1>
                </div>
              </Link>
            </header>
      <div className="create-input">

        <h2>Edit Character</h2>

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
          <button type="submit" className="basic-button">Update Character</button>
        </form>
      </div>
    </div>

  );
}

export default EditCharacter;

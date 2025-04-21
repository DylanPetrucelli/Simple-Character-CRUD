import React from "react"
import "../styles/Create.css"

type CharacterFormProps = {
  form: {
    name: string
    series: string
    origin: string
  }
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onSubmit: (e: React.FormEvent) => void
  submitText: string
}

function CharacterForm({ form, handleChange, onSubmit, submitText }: CharacterFormProps) {
  return (
    <form onSubmit={onSubmit} className="input-form">
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
      <button type="submit" className="basic-button">{submitText}</button>
    </form>
  )
}

export default CharacterForm

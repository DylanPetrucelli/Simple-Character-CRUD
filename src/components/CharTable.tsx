import { Link } from "react-router-dom"
import { Character } from "../types/Character"

type Props = {
  characters: Character[]
  onDelete: (id: number) => void
}

const CharTable = ({characters, onDelete}: Props) => {

    return (
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
            <button onClick={() => onDelete(char.id)} className="basic-button">Delete</button>
          </th>
        </tr>
      ))}
    </table>
    )
}


export default CharTable;
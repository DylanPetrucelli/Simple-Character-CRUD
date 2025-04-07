import axios from "axios";
import { Character } from "../types/Character";

const API_URL = "http://localhost:3001/characters";

export const getCharacters = () => axios.get<Character[]>(API_URL);
export const getCharacter = (id: number) => axios.get<Character>(`${API_URL}/${id}`);
export const createCharacter = (character: Omit<Character, "id">) => axios.post<Character>(API_URL, character);
export const updateCharacter = (id: number, character: Omit<Character, "id">) => axios.put<Character>(`${API_URL}/${id}`, character);
export const deleteCharacter = (id: number) => axios.delete(`${API_URL}/${id}`);

import axios from 'axios';

interface Game {
  id: number;
  nome: string;
  descricao: string;
  nota: number;
  lancamento: Date | null;
}

const baseURL = 'http://localhost:5249/api/Controller';

// Método GET para buscar todos os jogos
async function getAllGames() {
  try {
    const response = await axios.get<Game[]>(`${baseURL}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar jogos:', error);
    throw error;
  }
}

// Método POST para criar um novo jogo
async function createGame(newGame: Game) {
  try {
    const response = await axios.post<Game>(`${baseURL}`, newGame);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar jogo:', error);
    throw error;
  }
}

// Método PUT para atualizar um jogo existente por ID
async function updateGame(id: number, updatedGame: Game) {
  try {
    const response = await axios.put<Game>(`${baseURL}/${id}`, updatedGame);
    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar jogo:', error);
    throw error;
  }
}

// Método DELETE para excluir um jogo por ID
async function deleteGame(id: number) {
  try {
    const response = await axios.delete<Game>(`${baseURL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao excluir jogo:', error);
    throw error;
  }
}


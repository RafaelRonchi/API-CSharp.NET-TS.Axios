"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const baseURL = 'http://localhost:5249/api/Controller';
// Método GET para buscar todos os jogos
function getAllGames() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.get(`${baseURL}`);
            return response.data;
        }
        catch (error) {
            console.error('Erro ao buscar jogos:', error);
            throw error;
        }
    });
}
// Método POST para criar um novo jogo
function createGame(newGame) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.post(`${baseURL}`, newGame);
            return response.data;
        }
        catch (error) {
            console.error('Erro ao criar jogo:', error);
            throw error;
        }
    });
}
// Método PUT para atualizar um jogo existente por ID
function updateGame(id, updatedGame) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.put(`${baseURL}/${id}`, updatedGame);
            return response.data;
        }
        catch (error) {
            console.error('Erro ao atualizar jogo:', error);
            throw error;
        }
    });
}
// Método DELETE para excluir um jogo por ID
function deleteGame(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.delete(`${baseURL}/${id}`);
            return response.data;
        }
        catch (error) {
            console.error('Erro ao excluir jogo:', error);
            throw error;
        }
    });
}

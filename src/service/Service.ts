import axios from 'axios';
import UserLogin from '../models/UserLogin';

export const api = axios.create({
    baseURL:'https://bloggeneration.herokuapp.com'
})

export const login = async(url: any, dados: any, setToken: any) => {
    const resposta = await api.post(url,dados);
    setToken(resposta.data.token);
}
export const cadastroUsuario = async(url: any, dados: any, setDado: any) => {
    const resposta = await api.post(url,dados);
    setDado(resposta.data);
}
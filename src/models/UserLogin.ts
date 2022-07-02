interface UserLogin{
    id: number;
    usuario: String;
    senha: String;
    token?: String|null;
}

export default UserLogin;
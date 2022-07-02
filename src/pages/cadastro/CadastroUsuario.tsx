import React, { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import User from '../../models/User';
import { cadastroUsuario } from '../../service/Service';
import { Link } from 'react-router-dom';
import { Grid, Box, Typography, TextField, Button } from '@material-ui/core';
import './CadastroUsuario.css'

function CadastroUsuario() {

    let navigate = useNavigate(); //Permite que o usuario seja redirecionado
    const [confirmarSenha,setConfirmarSenha] = useState<String>("") 
    const [user, setUser] = useState<User>(//Define o modelo a ser preenchido pelo usuario no cadastro
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: ''
        })

    const [userResult, setUserResult] = useState<User>(// Armazena o objeto devolvido pelo servidor
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: ''
        })

    useEffect(() => { //Confere se o cadastro foi criado, se sim redireciona para login
        if (userResult.id != 0) {
            navigate("/login")
        }
    }, [userResult])


    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>){
        setConfirmarSenha(e.target.value)
    }


    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

    }// Preenche a model usuario e salva
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if(confirmarSenha == user.senha){
        cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)//envia a requisição para a api
        alert('Usuario cadastrado com sucesso')
        console.log('user login:'+Object.values(userResult))
        }else{
            alert('Dados inconsistentes. Favor verificar as informações de cadastro.')
        }
    }
    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid xs={6} item justifyContent='center' alignItems='center' className='heroImg'></Grid>

            <Grid xs={6} item justifyContent='center' alignItems='center'>
                <Box paddingX={20}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='h1Title'>Cadastre-se</Typography>
                        <TextField id='nome' value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} label='nome' variant='outlined' name='nome' margin='normal' fullWidth />
                        <TextField id='usuario' value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}  label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField id='senha' value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                        <TextField id='confirmarSenha' value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} label='confirmar senha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth />
                        <Box marginTop={2} textAlign='center'>
                            <Button type='submit' variant='contained' color='primary'>
                                Cadastrar
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Grid>
        </Grid>
    );
}
export default CadastroUsuario;
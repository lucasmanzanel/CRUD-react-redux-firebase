import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { register } from '../actions/Auth'

const RegisterScreen = () => {

    const dispatch = useDispatch()

    const [data, setData] = useState({
        email: '',
        password: '',
        password2: '',
        username: ''
    })

    const {email,username,password,password2} = data

    const handleChange = (e) => {
        const value= e.target.value;

        setData({
            ...data,[e.target.name]: value,
        })

    }

    const handleRegister = (e) => {
        e.preventDefault();

        if (email.trim() === '' || !email.trim().includes('@')) {

            return;  
        }

        if (username.trim().length < 2) {

            return;
        }

        if (password.trim().length < 6) {

            return;
         
        }else{
            if (password.trim() !== password2.trim()) {

                return;
            }
        }

        dispatch(register(email,password,username))
    }

    return (
        <div className='container mt-4 animate__animated animate__slideInUp'>
            <h3 className='text-center'>REGISTRARSE</h3>
            <hr />

            <form onSubmit={handleRegister} className='mt-4'>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                <input 
                onChange={handleChange}
                value={email}
                type="email" 
                className="form-control" 
                id="exampleInputEmail1" 
                aria-describedby="emailHelp"
                name='email'
                />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Nombre de usuario</label>
                <input
                value={username}
                onChange={handleChange} 
                type="text" 
                className="form-control" 
                name='username'
                />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                <input 
                value={password}
                onChange={handleChange}
                type="password" 
                className="form-control" 
                name='password'
                />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Confirmar contraseña</label>
                <input 
                value={password2}
                onChange={handleChange}
                type="password" 
                className="form-control" 
                name='password2'
                />
            </div>
            <button type="submit" className="btn btn-success">Enviar</button>
            <hr />
            <Link to='/auth/login'>Ingresar con tu cuenta</Link>
            </form>




        </div>
    )
}

export default RegisterScreen

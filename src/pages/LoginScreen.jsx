import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import GoogleButton from 'react-google-button'
import { Link } from 'react-router-dom'

import { googleLogin,emailAndPasswordLogin } from '../actions/Auth'

const LoginScreen = () => {


    const [data, setData] = useState({
        email: '',
        password: ''
    })

    const {email,password} = data


    const handleChange = (e) => {
        const value= e.target.value;

        setData({
            ...data,[e.target.name]: value,
        })

    }

    const dispatch = useDispatch();

    const handleGoogleLogin = () => {
        dispatch(googleLogin())
    };

    const handleEmailLogin = (e) => {
        e.preventDefault()

        if (email.trim() === '' || !email.trim().includes('@')) {
            return;  
        }

        if (password.trim().length < 6) {
            return;
         
        }

        dispatch(emailAndPasswordLogin(email,password))


    }


    return (

        <div className='container mt-4 animate__animated animate__zoomIn'>
            <h3 className='text-center'>LOGIN </h3>
            <hr />

            <form onSubmit={handleEmailLogin}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                <input 
                onChange={handleChange}
                value={email}
                name='email'
                type="email" 
                className="form-control" 
                id="exampleInputEmail1" 
                aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                <input 
                onChange={handleChange}
                value={password}
                name='password'  
                type="password" 
                className="form-control" 
                id="exampleInputPassword1" />
            </div>
            <button type="submit" className="btn btn-success">Ingresar</button>
            <hr />
            <p>Inicia sesión con tu cuenta de Google</p>
            <GoogleButton onClick={handleGoogleLogin}  />
            <hr />
            <Link to='/auth/register'>¿No tienes una cuenta? Registrate aquí</Link>



            </form>


        </div>


    

  


                
 

    )
}

export default LoginScreen

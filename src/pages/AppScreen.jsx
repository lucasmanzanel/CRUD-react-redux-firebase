import React from 'react'
import { useSelector } from 'react-redux'
import Element from '../components/Element'

import FormAdd from '../components/FormAdd'
import Navbar from '../components/Navbar'

const AppScreen = () => {

    const {auth} = useSelector(state => state)

    const data = useSelector(state => state.nomina.data)


    return (
        <>
            <Navbar />
            <div className="container mt-3 animate_animated animate__backInUp">
                <h1 className='text-center'>Bienvenido {auth.displayName}</h1>
            <hr/>

            <FormAdd />

            <table className='table'>
            <thead>
                <tr>
                    <th scope="col">Fecha</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Borrar</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((elemento) => {
                        return <tr 
                        className='animate__animated animate__fadeInUp' 
                        key={elemento.id}>
                        <Element data={elemento}/>
                        </tr>

                    })
                }

            </tbody>                
            </table>
            </div>
        </>
    )
}

export default AppScreen

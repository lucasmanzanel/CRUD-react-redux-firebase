import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {crearRegistro} from '../actions/nomina'


const FormAdd = () => {

    const dispatch = useDispatch()
    const [viewForm, setViewForm] = useState(false)


    const [cantidadPago,setCantidadPago] = useState(
        {
        precioHora:0,
        horas:0,
        }

    )

    const {precioHora,horas} = cantidadPago


    const handleAdd = () => {
        setViewForm(!viewForm)
    }

    const handleChange = (e) => {
        setCantidadPago({
            ...cantidadPago,
            [e.target.name]: e.target.value
        })

    }


    const handleSave = () => {

        const cantidadFinal = horas * precioHora

        dispatch(crearRegistro(cantidadFinal))
        setCantidadPago(  
            {
            precioHora:0,
            horas:0,
            }
        )
    }

    return (
        <div>
            <button 
                onClick={handleAdd} 
                className='btn btn-sm btn-dark'>
                    {
                        !viewForm ? 'Agregar rutina' : 'Cerrar formulario'
                    }

            </button>
            {
                viewForm && (
                <div className='animate__animated animate__backInDown'>
                    <input className='form-control mt-2' 
                    type="text" 
                    placeholder='Ingresa cantidad de pago por hora' 
                    value={precioHora}
                    onChange={handleChange}
                    name='precioHora' 
                    />
                    <input className='form-control mt-2' 
                    type="text" 
                    placeholder='Ingrese cantidad de horas' 
                    value={horas}
                    onChange={handleChange} 
                    name='horas'
                    />
                    <button 
                    onClick={handleSave} 
                    className='btn btn-sm btn-success mt-2'>
                        Guardar
                    </button>
                </div>
     
                )}
        </div>
    )
}

export default FormAdd

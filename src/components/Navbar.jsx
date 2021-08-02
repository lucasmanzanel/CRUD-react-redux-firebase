import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../actions/Auth'
import { limpiar } from '../actions/nomina'

const Navbar = () => {

    const dispatch = useDispatch()

    const handleLogout = () => {

        dispatch(limpiar())
        dispatch(logout())
    }

   
     return (
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href='#top'>
            <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/gym-96-291320.png" alt="" width={30} height={24} className="d-inline-block align-text-top" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <button onClick={handleLogout} className="nav-link active btn" aria-current="page">Salir</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>


    )
}

export default Navbar

import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <NavLink className="navbar-brand" href="#">Navbar</NavLink>
            <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/login">Login</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" to="/register">Register</NavLink>
                    </li>

                    <li className="nav-item dropdown">
                        <NavLink className="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Hooks</NavLink>
                        <div className="dropdown-menu" aria-labelledby="dropdownId">
                            <NavLink className="nav-link text-success" to="/use-state-demo">Use State Demo</NavLink>
                            <NavLink className="nav-link text-success" to="/use-effect-demo">Use Effect Demo</NavLink>
                            <NavLink className="nav-link text-success" to="/use-callback-demo">Use CallBack Demo</NavLink>
                            <NavLink className="nav-link text-success" to="/use-memo-demo">Use Memo Demo</NavLink>
                            <NavLink className="nav-link text-success" to="/use-ref-demo">Use Ref Demo</NavLink>
                            <NavLink className="nav-link text-success" to="/hook-redux-demo">Hook Redux Demo</NavLink>
                            <NavLink className="nav-link text-success" to="/use-search-params">Use Search Params</NavLink>

                        </div>
                    </li>
                </ul>
                <form className="d-flex my-2 my-lg-0">
                    <input className="form-control me-sm-2" type="text" placeholder="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>

    )
}

export default Header
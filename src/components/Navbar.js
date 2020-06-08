import React from 'react'

export const Navbar = (props) => {
    return (
        <div className="navbar">
             <a href="#" className="modalBtn" onClick={()=>props.openfn()}>Login</a>
        </div>
    )
}

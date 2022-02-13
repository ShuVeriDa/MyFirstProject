import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Navbar.module.css'

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false)
  return (
    <nav className={classes.navbar}>
        <h1 className={classes.logo}>With Redux</h1>
        <ul 
            className={isMobile ? classes.nav_links_mobile : classes.nav_links}
            onClick={() => setIsMobile(false)}
        >
            <NavLink className={classes.navLink} to={'/'}><li>Home</li></NavLink>
            <NavLink className={classes.navLink} to={'/todos'}><li>Todos</li></NavLink>
            <NavLink className={classes.navLink} to={'/count'}><li>Count</li></NavLink>
            <NavLink className={classes.navLink} to={'/dinamicForms2'}><li>dinamicForms2</li></NavLink>
            <NavLink className={classes.navLink} to={'/forpractice'}><li>forPractice</li></NavLink>
            <NavLink className={classes.navLink} to={'/signup'}><li className={classes.signup}>Sign Up</li></NavLink>
        </ul>
        <button 
            className={classes.mobile_menuBtn}
            onClick={() => setIsMobile(!isMobile)}>
                {isMobile ? (
                    <i className='fas fa-times'></i> 
                ) : (
                    <i className='fas fa-bars'></i>
                )}
         </button>
        
    </nav>
  )
}

export {Navbar}
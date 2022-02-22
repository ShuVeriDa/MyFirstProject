import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import classes from './FooterNavbar.module.css'

const FooterNavbar = () => {
    const [isMobile, setIsMobile] = useState(false)
  return (
    <nav className={classes.navbar}>
        <h1 className={classes.logo}>With Hooks</h1>
        <ul 
            className={isMobile ? classes.nav_links_mobile : classes.nav_links}
            onClick={() => setIsMobile(false)}
        >
        <NavLink className={classes.navLink} to={'/'}><li>Home</li></NavLink>
        <NavLink className={classes.navLink} to={'/todos2'}><li>Todos</li></NavLink>
        <NavLink className={classes.navLink} to={'/todosTwo'}><li>Todos2</li></NavLink>
        <NavLink className={classes.navLink} to={'/count2'}><li>Count</li></NavLink>
        <NavLink className={classes.navLink} to={'/dinamicForms'}><li>DinamicForms</li></NavLink>
        <NavLink className={classes.navLink} to={'/arrayChange1'}><li>ArrayChange1</li></NavLink>
        <NavLink className={classes.navLink} to={'/arrayChange2'}><li>ArrayChange2</li></NavLink>
        <NavLink className={classes.navLink} to={'/arrayChange3'}><li>ArrayChange3</li></NavLink>
        <NavLink className={classes.navLink} to={'/forPractice'}><li>forPractice</li></NavLink>
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

export {FooterNavbar}
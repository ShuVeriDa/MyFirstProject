import React from 'react';
import classes from './Layout.module.css'
import { NavLink, Outlet } from 'react-router-dom';
import { Navbar } from '../Navbar/Navbar';

const Layout = () => {
  return (
    <div className={classes.layout}>
      {/* <header className={classes.header}>
        <h1>With Redux</h1>
        <NavLink className={classes.navLink} to={'/'}>Home</NavLink>
        <NavLink className={classes.navLink} to={'/todos'}>Todos</NavLink>
        <NavLink className={classes.navLink} to={'/count'}>Count</NavLink>
      </header> */}
      <header>
        <Navbar />
      </header>

      <main>
        <Outlet />
      </main>

      <footer className={classes.footer}>
        <div className={classes.footer__inner}>
          <h1>With Hooks</h1>
          <NavLink className={classes.navLink} to={'/'}>Home</NavLink>
          <NavLink className={classes.navLink} to={'/todos2'}>Todos</NavLink>
          <NavLink className={classes.navLink} to={'/count2'}>Count</NavLink>
          <NavLink className={classes.navLink} to={'/dinamicForms'}>DinamicForms</NavLink>
          <NavLink className={classes.navLink} to={'/forPractice'}>forPractice</NavLink>
        </div>
      </footer>
    </div>
  )
}

export {Layout};

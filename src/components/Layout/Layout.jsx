import React from 'react';
import classes from './Layout.module.css'
import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className={classes.layout}>
      <header className={classes.header}>
        <NavLink className={classes.navLink} to='/'>Home</NavLink>
        <NavLink className={classes.navLink} to={'/todos'}>Todos</NavLink>
        <NavLink className={classes.navLink} to={'/about'}>About</NavLink>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className={classes.container}>2022</footer>
    </div>
  )
}

export {Layout};

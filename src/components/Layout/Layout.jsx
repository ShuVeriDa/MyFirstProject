import React from 'react';
import classes from './Layout.module.css'
import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className={classes.layout}>
      <header className={classes.header}>
        <h1>With Redux</h1>
        <NavLink className={classes.navLink} to={'/'}>Home</NavLink>
        <NavLink className={classes.navLink} to={'/todos'}>Todos</NavLink>
        <NavLink className={classes.navLink} to={'/count'}>Count</NavLink>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className={classes.footer}>
        <div className={classes.footer__inner}>
          <h1>Without Redux</h1>
          <NavLink className={classes.navLink} to={'/2'}>Home</NavLink>
          <NavLink className={classes.navLink} to={'/todos2'}>Todos</NavLink>
          <NavLink className={classes.navLink} to={'/count2'}>Count</NavLink>
        </div>
      </footer>
    </div>
  )
}

export {Layout};

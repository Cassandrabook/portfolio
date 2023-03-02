import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.scss';
import { About } from './components/About/About';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Navmenu } from './components/Nav/Nav';

function App() {
  return (
    <>
      <header>
        <Navmenu />
      </header>
      <main>
        <Outlet/>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;

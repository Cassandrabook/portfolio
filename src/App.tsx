import React from 'react';
import './App.scss';
import { Header } from './components/Header/Header';
import { Navmenu } from './components/Nav/Nav';

function App() {
  return (
    <>
      <header>
        <Navmenu />
      </header>
      <main>
        <Header />
      </main>
      <footer>

      </footer>
    </>
  );
}

export default App;

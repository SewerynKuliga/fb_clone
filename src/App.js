import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import Login from './Login';

function App() {
  const user = "seweryn";  // to see Login page you have to change "Seweryn" to null

  return (
    <div className="app">
      {!user ? (
      <Login />
      ) : (
        <>
          <Header />

          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </>
      )}


    </div>
  );
}

export default App;

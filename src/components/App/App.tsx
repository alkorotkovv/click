import './App.scss';
import React from 'react';
import Header from '..//Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';


const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;

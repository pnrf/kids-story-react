import './App.css';
import { useEffect, useState } from 'react';
import { Routes, Route, useLocation, useNavigate, Navigate, redirect } from "react-router-dom";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import PageNotFound from '../PageNotFound/PageNotFound';

function App() {
  const [currentUser, setCurrentUser] = useState({});

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Main />}/>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;

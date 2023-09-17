import { LoginedPath } from 'layout/LoginedPath/LoginedPath';
import { NotLoginedPath } from 'layout/NotLoginedPath/NotLoginedPath';
import Contacts from 'pages/Contacts/Contacts';
import Home from 'pages/Home/Home';
import LoginPage from 'pages/LoginPage/LoginPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header/Header';

export const App = () => {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/register"
          element={
            <NotLoginedPath
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <NotLoginedPath
              redirectTo="/contacts"
              component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <LoginedPath
              redirectTo="/login"
              component={<Contacts />} />
          }
        />
      </Routes>
    </>
  );
};

export default App;

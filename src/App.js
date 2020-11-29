
import React from 'react';
// Components
import Header from './components/Header';
import Routes from './config/Routes';
import Footer from './components/Footer';
// Styling
import './App.css';
// ContextProviders
import AuthContextProvider from './contexts/AuthContext';
function App() {
  return (
    <div className="App">
    <AuthContextProvider>
      <Header />
      <Routes />
      <Footer />
    </AuthContextProvider>
    </div>
  );
}
export default App;


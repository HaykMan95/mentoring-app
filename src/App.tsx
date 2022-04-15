import { useReducer } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Store, reducer, initialState } from 'store';
import Main from 'pages/Main';
import Registration from 'pages/Registration';
import Settings from 'pages/Settings';
import NotFound from 'pages/NotFound';
import Header from 'sections/Header';

import './App.css';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log('App');

  return (
    <Store.Provider value={{ state, dispatch }}>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="registration" element={<Registration />} />
            <Route path="settings" element={<Settings />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Store.Provider>
  );
}

export default App;

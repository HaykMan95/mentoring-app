import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from 'pages/Main';
import Registration from 'pages/Registration';
import Settings from 'pages/Settings';
import NotFound from 'pages/NotFound';
import Header from 'sections/Header';

import './App.css';

function App() {
  console.log('App');

  return (
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
  );
}

export default App;

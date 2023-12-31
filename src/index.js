import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AddNewCard from './AddNewCard'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/add-new-card' element={<AddNewCard />} />
        </Routes>
      </Router>
  </React.StrictMode>
);

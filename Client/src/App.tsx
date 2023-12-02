import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import CardList from './components/CardList/CardList';
import { CardDetail } from './components/CardDetail/CardDetail';
import NotFound from './components/NotFound/NotFound';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/items" element={<CardList />} />
          <Route path="/no-found" element={<NotFound />} />
          <Route path="/items/:id" element={<CardDetail/>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
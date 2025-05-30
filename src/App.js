import logo from './logo.svg';
import './App.css';
import CommentsList from './componets/CommentsList';
import TemperatureConverter from './componets/TemperatureConverter';
import TodoList from './componets/TodoList';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './componets/HomePage';
import AboutPage from './componets/AboutPage';


function App() {
  return (
    <div className="App">
      <CommentsList />
      <TemperatureConverter />
      <TodoList />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

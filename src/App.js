import logo from './logo.svg';
import './App.css';
import CommentsList from './componets/CommentsList';
import TemperatureConverter from './componets/TemperatureConverter';
import TodoList from './componets/TodoList';

function App() {
  return (
    <div className="App">
      <CommentsList />
      <TemperatureConverter />
      <TodoList />
    </div>
  );
}

export default App;

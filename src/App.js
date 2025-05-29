import logo from './logo.svg';
import './App.css';
import CommentsList from './componets/CommentsList';
import TemperatureConverter from './componets/TemperatureConverter';

function App() {
  return (
    <div className="App">
      <CommentsList />
      <TemperatureConverter />
    </div>
  );
}

export default App;

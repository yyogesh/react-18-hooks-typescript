import './App.css';
import UseIDExample from './components/UseIDExample';
import TransitionExample from './components/TransitionExample';
import StateBatchExample from './components/StateBatchExample';

function App() {
  return (
    <div className="App">
      <UseIDExample />
      <hr />
      <TransitionExample />
      <hr />
      <StateBatchExample />
    </div>
  );
}

export default App;

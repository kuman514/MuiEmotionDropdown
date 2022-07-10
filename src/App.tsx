import './App.css';
import Dropdown from './components/Dropdown';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Dropdown
          options={[{
            value: 'koishi',
            visual: 'Koishi Komeiji'
          }, {
            value: 'hoshino',
            visual: 'Hoshino Takanashi'
          }, {
            value: 'nitori',
            visual: 'Nitori Kawashiro'
          }, {
            value: 'yuuka',
            visual: 'Yuuka Hayase'
          }, {
            value: 'yasuo',
            visual: 'Yasuo'
          },]}
        />
      </header>
    </div>
  );
}

export default App;

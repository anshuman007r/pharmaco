import { store } from '../src/storage/store'
import { Provider } from 'react-redux'
import { Home } from './component/Home'
import './App.css';

function App() {
  return (
    <Provider store ={store}>
      <div className="App">
        <h1>Welcome to online med store pharmaco</h1>
        <Home/>
      </div>
    </Provider>
  );
}

export default App;

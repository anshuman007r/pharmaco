import { store } from '../src/storage/store'
import { Provider } from 'react-redux'
import './App.css';
import Navigation from './component/Navigation'
function App() {
  return (
    <Provider store ={store}>
      <div className="App">
        <h1>Welcome to online med store pharmaco</h1>
          <Navigation/>
      </div>
    </Provider>
  );
}

export default App;
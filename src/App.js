import './App.css';
import { Provider } from 'react-redux';
import { store } from './Store/Store';
import Songs from './Components/Songs';
import Movies from './Components/Movies';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Movies />
      <br/>
      <Songs/>
    </div>
    </Provider>
  );
}

export default App;

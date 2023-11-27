import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {

  return (
    <div >
   <Provider store={store}>
   <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element= {<Home/> }/>
        <Route path='cart' element= {<Cart/>}/>
      </Routes>
      </BrowserRouter>
   </Provider>
    </div>
  );
}

export default App;

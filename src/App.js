import { BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import Cart from './Component/Cart';
import Home from "./Component/Home"
import Header from "./Component/Header"

function App() {
  return (
    
    <BrowserRouter>
      <Header/>
      <div className="App">
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/cart' element={<Cart />}/>
        </Routes>
      </div>
      </BrowserRouter>
  );
}

export default App;

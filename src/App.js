import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Product from './confirg/Product';
import Purchase from './confirg/Purchase';


function App() {

  return (
   <div>
     <BrowserRouter>
     <Routes>
       <Route path={'product'} element={<Product />} />
       <Route path={'purchase'} element={<Purchase />} />
     </Routes>
     </BrowserRouter>
   </div>
  );
}

export default App;

import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom' 
import Homepage from './pages/Homepage'
import UserPage from './pages/UserPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Searchpage from './pages/searchpage';
import Request from './pages/Requestpage';
import Recipespage from './pages/Recipespage';

function App() {
  return (
    <BrowserRouter>

        <Navbar></Navbar>
        
          <Routes>
            <Route path='/' element={<Homepage></Homepage>}/>
            <Route path='/home' element={<Homepage></Homepage>}/>
            
            <Route path='/user' element={<UserPage></UserPage>}/>
            <Route path='/recipes' element={<Recipespage></Recipespage>}/>

            <Route path='/search' element={<Searchpage></Searchpage>}/>

            <Route path='*' element={<Request></Request>} ></Route>
          </Routes>
       
        <Footer></Footer>
        
    </BrowserRouter>
  );
}

export default App;

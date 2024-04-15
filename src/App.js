// import logo from './logo.svg';
import { BrowserRouter , Route, Routes} from 'react-router-dom';
import './App.css';
import Navbar from './compo/Layout/Navbar'
import Home from './compo/Pages/Home'
import About from './compo/Pages/About'
import Contact from './compo/Pages/Contact'
import Add from './compo/Pages/Add'
import Show from './compo/Pages/Show'
import Update from './compo/Pages/Update'
import Delete from './compo/Pages/Delete.js'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'

function App() {
  return (
    <BrowserRouter>
    <Navbar></Navbar>
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/add' element={<Add/>}></Route>
        <Route path='/show' element={<Show/>}></Route>
        <Route path='/update/:userId' element={<Update/>}></Route>
        <Route path='/delete/:userId' element={<Delete/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

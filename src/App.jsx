import './index.css'
import Todo from './pages/Todo';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Budget from './pages/budget-analysis';
import Home from './pages/home';


function App() {
  return(
    <div className='container mx-auto'>
    <Router>

    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/todo' element={<Todo/>}/>
    <Route path='/budget-analysis' element={<Budget/>}/>
    </Routes>

    </Router>
    </div>
  )
}

export default App

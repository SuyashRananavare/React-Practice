import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import Layout from '../components/Layout'
import Explore from '../pages/Explore'
import MyComp from './MyComp'
import MyComp2 from './MyComp2'
import MyComp3 from './MyComp3'
import Counter from './Counter'
import Counter2 from './Counter2'
import Timer from './Timer'
import MyForm from '../pages/MyForm'
import Form2 from '../pages/Form2'
import ValidationForm from './ValidationForm'

function App() {

  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path='/' element = {<Layout />}>
    //     <Route index element = {<Home />} />
    //     <Route path='/about' element = {<About />} />
    //     <Route path='/contact' element = {<Contact />} />
    //     <Route path='/explore' element = {<Explore />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>    

     <ValidationForm />
  );
}

export default App 

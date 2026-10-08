
import Laptop from '../Components/Laptop'
import Player from '../Components/Player'
import './App.css'

function App() {

  return (
    <div className='d-flex p-5'>
    <Laptop
      name = "Lenovo LOQ"
      ram ='16 GB'
      storage = '512 GB'
      price ='₹78999'
     />

     <Player
      name = "Kohli"
      jersey = '18'
      country ="India"     
     />
    </div>
  )
}

export default App

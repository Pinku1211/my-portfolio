
import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar/Navbar'
import About from './components/About'
import Experience from './components/Experience'
import Services from './components/Services'
import Education from './components/Education/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'



function App() {

  return (
    <div className='min-h-screen'>
      <div className='w-3/4 mx-auto text-white flex flex-col justify-center items-center'>
        {/* <Header></Header> */}
        <Navbar></Navbar>
        <About></About>
        <Experience></Experience>
        <Services></Services>
        <Contact></Contact>  
      </div>
    </div>
  )
}

export default App

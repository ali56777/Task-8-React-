


import './assets/css/master.css'
import Navbar from './componenets/Navbar'
import Hero from  './componenets/Hero'
import Services from './componenets/Services'
import Hosting from './componenets/Hosting'
import Footer from './componenets/Footer/Footer'




function App() {


  const services = [{ image: 'https://cdn.pixabay.com/photo/2017/07/25/06/05/drip-2537039_640.jpg', title: "service" },
  { image: 'https://cdn.pixabay.com/photo/2017/07/25/06/05/drip-2537039_640.jpg', title: "service" },
  { image: 'https://cdn.pixabay.com/photo/2017/07/25/06/05/drip-2537039_640.jpg', title: "service" },]

  return (
    <>

    
        <Navbar />
        <Hero />
      <Services />
      <Hosting />
      <Footer />
    




    </>
  )
}

export default App

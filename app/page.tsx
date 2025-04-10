import Image from 'next/image'
import News from './Components/News'
import { Button, Drawer } from '@mui/material'
import FedNow from './Components/Fednow'
import Hero from './Components/Hero'
import ContactHeader from './Components/Contact/ContactHeader'
import ContactForm from './Components/Contact/ContactForm'
import Contact from './pages/Contact'
import Home1 from './pages/Home1'

export default function Home() {
  return (
    <main className='bg-[#ffffff]'> 
          {/* <Contact/> */}
           {/* <Hero/> 
          {/* FEDNOW */}
          {/* <FedNow/> */}
          {/* <News/> */}
          <Home1/>
    </main>
  )
}

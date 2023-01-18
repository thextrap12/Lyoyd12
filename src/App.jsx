import React from "react"
import About from "./components/about/About"
import Header from "./components/Header/Header"
import Nav from "./components/nav/Nav"
import Experience from "./components/experience/experience"
import Services from "./components/services/Services"
import Portfolio from "./components/portfolio/Portfolio"
import Testemonials from "./components/testemonials/Testemonials"
import Contacts from "./components/contacts/contacts"
import Footer from "./components/footer/Footer"

function App() {

  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Experience/>
    <Services/>
    <Portfolio/>
    <Testemonials/>
    <Contacts/>
    <Footer/>
    </>
  )
}

export default App

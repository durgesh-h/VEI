import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import ContactUs from "./pages/ContactUs";


function App() {
  return (
    <>
    {/* <BrowserRouter>
    
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}> </Route>
      <Route path='/aboutUs' element={<AboutUs/>}> </Route>
      <Route path='/services' element={<Services/>}> </Route>
      <Route path='/Projects' element={<Projects/>}> </Route>
      <Route path='/ContactUs' element={<ContactUs/>}> </Route>
    </Routes>
    <Footer/>
    </BrowserRouter> */}
      <h1>ERROR 404 | Go For Premium Hosting </h1>
    </>
  );
}

export default App;

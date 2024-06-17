import React  from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './componentes/PaginaInicio.js';
import About from './componentes/About.js';
import Projects from './componentes/Projects.js';
import ContactUs from './componentes/Contact.js';
import Header from './elementos/Header';
import styled from 'styled-components';
import Footer from  './elementos/Footer.js';

const ContenedorPrincipal = styled.div`
      padding: 20px 20px 0px 0px;
      margin:  10px 10px 0px 0px;
      width: 100%;
     // max-width:700px;
     background: #d9f1f5;
    `;
    const Main = styled.main`
    background: #d9f1f5;
    padding:  0px 5px 100px 10px;
    margin:  0px 0px 0px 0px;
    border-radius: 10px 10px 0 0;
    box-shadow: 5px 0px 5px rgba(129, 129, 129, 0.1);
    `;

    const App = () => {
      return (
          <>
              <BrowserRouter>
                  <ContenedorPrincipal>
                      <Main>
                          <Header />
                          <Routes>
                              <Route path="/" element={<Home />} />
                              <Route path="/About" element={<About />} />
                              <Route path="/projects" element={<Projects />} />
                              <Route path="/Contact" element={<ContactUs />} />
                          </Routes>
                      <Footer />
                      </Main>
                  </ContenedorPrincipal>
              </BrowserRouter>
          </>
      );
  };

export default App;
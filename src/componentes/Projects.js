import React from "react";
import styled from 'styled-components';
import Job1 from './../img/Gallery.png'; // replace with your actual image path
import Job2 from './../img/shop.png'; // replace with your actual image path
import Job3 from './../img/register.png'; // replace with your actual image path
const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
 
    box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.1);
    padding: 20px 250px;
    margin: 2px 0;
`;

const ProjectContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
`;

const Icono = styled.img`
    width: 7rem;
    height: 7rem;
    margin-right: 20px;
    border-radius: 50px;
`;

const Title = styled.h2`
    margin-bottom: 20px;
    font-size: 2.5rem;
    color: #000;
`;

const SubTitulo1 = styled.h2`
    margin-bottom: 20px;
    font-size: 24px;
    color: #0077b5;
`;

const TextContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: left;
    padding: 20px;
    color: black; // Adjust this based on your background color
`;

const Projects = () => {
    return (
        <AboutContainer>
            <Title>See some projects I've worked on</Title>
            <SubTitulo1>Selection of Projects</SubTitulo1>
            
            <ProjectContainer>
                <Icono src={Job1} alt="Gallery Project" /> 
                <TextContainer>
                    <p>This web shows a gallery of photos from different places all around the world. Check here: <a href="https://trinigch.github.io/Galery/">https://trinigch.github.io/Galery/</a> or download <a href="https://github.com/Trinigch/Galery">https://github.com/Trinigch/Galery</a></p>
                </TextContainer>
            </ProjectContainer>
            
            <ProjectContainer>
                <Icono src={Job2} alt="Shop Project" /> 
                <TextContainer>
                    <p>This e-commerce shows the products and sends them  to the cart. Check here: <a href="https://trinigch.github.io/Shop/">https://trinigch.github.io/Shop/</a> or download <a href="https://github.com/Trinigch/Shop">https://github.com/Trinigch/Shop</a></p>
                </TextContainer>
            </ProjectContainer>  

            

            <ProjectContainer>
                <Icono src={Job3} alt="Register App" /> 
                <TextContainer>
                    <p>This App helps you to record all your purchases and  organize them in categories. 
                    Check here:  <a href="https://curso-react-app-lista-ga-a835b.web.app" > https://curso-react-app-lista-ga-a835b.web.app </a></p>
                </TextContainer>
            </ProjectContainer>  
        </AboutContainer>
    );
};

export default Projects;

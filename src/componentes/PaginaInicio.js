import React from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import backgroundImage from './../img/bg.jpg'; // replace with your actual image path

const AboutContainer = styled.div`
    display: flex;
    background: #8bccfd; 
    height: 500px;
    padding: 2px 2px 2px 275px;
    margin: 2px 0;
`;

const ImageContainer = styled.div`
    flex: 1;
    background-image: url(${backgroundImage});
    background-size: cover;
    background-position: center;
`;

const Title = styled.h2`
    margin-bottom: 20px;
    font-size: 2.5rem;
    color: #fd8be8;
`;

const SubTitulo1 = styled.h2`
    margin-bottom: 20px;
    flex-direction: column;
    font-size: 24px;
    color: #fdfd8b;
`;

const SubTitulo = styled.h2`
    margin-bottom: 80px;
    flex-direction: column;
    font-size: 24px;
    color: #0077b5;
`;

const TextContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: left;
    padding: 20px;
    color: black;
`;

const Bubble = styled(Link)`
    background: #a6eeb2;
   
    padding: 20px 100px  20px  100px ;
    border-radius: 100px;
    color: #fff;
    position: absolute;
    top:200px;
    left:80%
    font-size: 24px;
    font-weight: 600;
    text-align: center;
    user-select: none;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    /* Adjust position as needed 
    left: 50%;
    upper: 100%*/
    transform: translateX(-50%);
    opacity: 100;
    transition: opacity 0.3s ease-in-out;
    text-decoration: none;

    &:hover {
        background-color: #dd55cb;
    }
`;

const Home = () => {
    return (
        <AboutContainer>
            <TextContainer>
                <Title>Hi! I am Maria Renata</Title>
                <SubTitulo1>a Full Stack Web Developer</SubTitulo1>
                <SubTitulo>See some projects I've worked on.</SubTitulo>
            </TextContainer>
            <ImageContainer />  
            <Bubble to="/projects">Show me</Bubble>
        </AboutContainer>
    );
};

export default Home;
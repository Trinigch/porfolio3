import React from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import backgroundImage from './../img/bg.jpg'; // replace with your actual image path

const AboutContainer = styled.div`
    display: flex;
    background:#0077b5; 
    height: 500px;
    padding: 2px 2px 2px 275px;
    margin: 2px 0;
    position: relative; /* Added */
`;

const ImageContainer = styled.div`
    flex: 1;
    background-image: url(${backgroundImage});
    background-size: cover;
    background-position: center;
`;

const Title = styled.h2`
    margin-bottom: 10px;
    font-size: 2.5rem;
    color: #fff;
`;

const SubTitulo1 = styled.h2`
    margin-bottom: 40px;
    flex-direction: column;
    font-size: 24px;
    color: #fff;
`;

const SubTitulo = styled.h2`
    margin-bottom: 40px;
    flex-direction: column;
    font-size: 30px;
    color: #fff;
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
    background: #a8cee4;
    padding: 20px 100px;
    color: #fff;
    top: 70%; /* Center vertically */
    left: 50%;
    position: absolute;
    font-size: 24px;
    font-weight: 600;
    text-align: center;
    user-select: none;
    transform: translate(-50%, -50%); 
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
    text-decoration: none;
    border-radius: 50px;

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
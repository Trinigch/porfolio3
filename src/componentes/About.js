import React from "react";
import styled from 'styled-components';
import backgroundImage from './../img/ToDo.jpeg'; // replace with your actual image path

const Container = styled.div`
    width: 60%;
    padding: 2px;
    margin: 2px auto;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden; /* Ensure the container respects rounded corners */
    display: flex;
`;

const ImageContainer = styled.div`
    flex: 1;
    width:700px;
    background-image: url(${backgroundImage});
    background-position: center left;
    background-size: cover;
        
`;

const TextContainer = styled.div`
    flex: 1;
    padding: 20px;
    color: black; // Adjust this based on your background color
    display: flex;
    flex-direction: column;
    justify-content: right;
`;
const Title = styled.h2`
    margin-bottom: 20px;
    font-size: 2.5rem;
    color:#333;
`;

const Paragraph = styled.p`
    font-size: 1.2rem;
    
`;

const About = () => {
    return (
        <>
        <ImageContainer/>
        <Container>
            <TextContainer>
            <Title>About me</Title>
            
            <Paragraph>   
          My name is Maria Renata. I'm familiar and comfortable using
          a wide range of different technologies including, but not limited to:
          Javascript, Node.js, React, Firebase, Express, MySQL, MongoDB, HTML, and CSS.</Paragraph>
          <Paragraph> 
          I grew up in  Buenos Aires. A  big city where I had the oportunity to graduate from 
          the University of Buenos Aires with the master degree in Electronic Engineer.
          In 2019 I completed Deep Learning curse/102hs at the Technological Institute ITBA. Then I moved to  the country        
          in Brainerd, MN where I live in a farm with chickens, dairy sheeps and more,
           where there is always something to do.
          </Paragraph>
         
            </TextContainer>
            <ImageContainer/>
        </Container>
        </>
    )
} 

export default About;
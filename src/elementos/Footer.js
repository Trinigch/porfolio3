import React  from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ContenedorFooter = styled.footer`
    background:  #d9f1f5;;    
    width: 90%;
	max-width: 1000px;
	margin: auto;
	text-align: center;
	padding: 40px 0px;
`;


const ButtonLink = styled(Link)`
    display: inline-block;
    font-size: 24px;
    color: #0077b5;
    text-decoration: none;
    background: #d9f1f5;
    padding: 10px 20px;
    border-radius: 5px;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
        color: #fff;
        background-color: #0077b5;
    }
`;


   const SubTitulo = styled.h2`
            margin-bottom: 40px;
            font-size: 18px;
            color: #0077b5;
            `;     
 
      
    const Footer = () => {
        return (      
        <> <ContenedorFooter >      
            <ButtonLink to="/contact" > Contact me   </ButtonLink>
            <SubTitulo>~  Talk me about your projects ~ </SubTitulo> 
           
                 
            </ContenedorFooter>   
        </>         
        );
      }
      
      export default Footer;

import React from "react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import heroImage from './../img/hero1.jpeg';

const Icono = styled.img`
    width: 7rem;
    max-height: 7rem;
    margin-bottom: 0.25rem;
    border-radius: 50px;
`;

const ContenedorHeader = styled.header`
    width: 100%;
    padding: 20px;
    background: #141414;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px 10px 0 0;
`;

const Titulo = styled.h1`
    font-size: 26px;
    font-weight: 700;
    color: #f9cc83;
    margin: 40px 20px;
    display: flex;
`;

const Menu = styled.nav`
    font-size: 26px;
    font-weight: 700;
    margin: 40px 20px;
    display: flex;
    align-items: center;
    a {
        display: inline-block;
        list-style: none;
        gap: 25px;
        color: #fff;
        margin: 0px 20px;
        text-decoration: none;
    }
    a:hover {
        color: #f9cc83;
    }
    a.active {
        border-bottom: 3px solid #165168;
        padding-bottom: 10px;
    }
`;

const Header = () => {
    return (
        <ContenedorHeader>
            <Icono src={heroImage} alt="Hero" />
            <Titulo>Maria Renata Peterson</Titulo>
            <Menu>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About me</NavLink>
                <NavLink to="/projects">Projects</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </Menu>
        </ContenedorHeader>
    );
};

export default Header;
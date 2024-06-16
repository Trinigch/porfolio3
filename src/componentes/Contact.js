import React, { useState } from "react";
import styled from 'styled-components';

const ContactContainer = styled.div`
    padding:  5px 5px 50px 2px;
    margin: 1px;
    background: #99bfd3;
    border-radius: 0 0px 10px 10px;
    box-shadow: 0 4px 2px rgba(0, 0, 0, 0.1);
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.h2`
    color: #07293b;
    text-align: center;
`;
const SubTitle = styled.p`
    color: #07293b;
    text-align: center;
    font-size: 20px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    padding:  50px 50px 10px 50px;
  
   
`;
const FlexContainer = styled.div`
    display: flex;
    justify-content: space-between;
   
`;

const Label = styled.label`
    margin: 10px 0 5px;
    color: #07293b;
`;

const Input = styled.input`
    padding:  50px 50px 10px 50px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

const Textarea = styled.textarea`
    padding:  50px 50px 10px 50px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

const Button = styled.button`
    padding: 10px 15px;
    background-color:#07293b;
    color: white;
    border: none;
    border-radius: 5px;
    margin-bottom: 20px;
    cursor: pointer;

    &:hover {
        background-color: #45a049;
    }
`;

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form data submitted:', formData);
    };

    return (
        <ContactContainer>
        <Title> Contact</Title>
            <SubTitle> Feel free to contact me if there's any projects you need help with! </SubTitle>
            <Form onSubmit={handleSubmit}>
            <FlexContainer>
                <div style={{ flex: 1, marginRight: '20px' }}>
                <Label htmlFor="name"></Label>
                <Input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                </div>
                <div style={{ flex: 1}} >
                <Label htmlFor="email"></Label>
                <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                </div>
                  </FlexContainer>
                <Label htmlFor="message"></Label>
                <Textarea
                    id="message"
                    name="message"
                    placeholder="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
                <Button type="submit">Send Message</Button>
            </Form>
        </ContactContainer>
    );
}

export default Contact;
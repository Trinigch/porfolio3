import React, { useRef , useState } from "react";
import styled from 'styled-components';
import emailjs from '@emailjs/browser';


const ContactContainer = styled.div`
    padding:  5px 5px 50px 2px;
    margin: 1px;
    height:450px;
    
    border-radius: 0 0px 10px 10px;
    box-shadow: 0 4px 2px 2px rgba(0, 0, 0, 0.3);
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
    flex-direction: row;
    padding:  0px 50px 10px 50px;
    width: 100%;
    max-width: 500px;
    margin-bottom:5px;
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
    padding:  10px 10px 10px 40px;
    margin:10px 10px 0 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 0px;
 
`;

const Textarea = styled.textarea`
    padding:  50px 240px 50px 50px;
    margin-bottom: 10px  20px  20px  0px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 10px;
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
export const ContactUs = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_d8ezhy7', 'template_3alafqd', form.current, {
          publicKey: 'GbZqgE6bPlxyMYKCX',
        })
        .then(
          () => {
            console.log('SUCCESS');
            setFormData({ name: '', email: '', message: '' }); // Limpiar el formulario
          },
          (error) => {
            console.log('FAILED...', error.text);
            setFormData({ name: '', email: '', message: '' }); // Limpiar el formulario
            alert('Failed to send email. Please try again later.'); // Mensaje de alerta en caso de fallo
                
          },
        );
    };
  

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <ContactContainer>
        <Title> Contact</Title>
        <SubTitle> Feel free to contact me if there's any projects you need help with! </SubTitle>
        <Form ref={form} onSubmit={sendEmail}>
            <FlexContainer>
                <div style={{ flex: 1 , marginLeftt: '20px'}}>
                <Label htmlFor="name"></Label>
                <Input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="name:"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                </div>   
                
                
            </FlexContainer>
            <div style={{ flex: 2}} >
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
                </Form>      
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
          
        </ContactContainer>
    );
}

export default ContactUs;
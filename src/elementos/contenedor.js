import styled from 'styled-components';

const encabezado = styled.div`
    width: 100%;
	margin: 40px auto 0 auto;
	background: #141414;
	padding: 40px 65px;
	display: flex;
	justify-content: space-between;
	align-items: justify content;
	border-radius: 20px 20px 0 0;
    `; 
	

const titulo =  styled.h1`
		font-size: 26px;
		font-weight: 700;
		color: #f9cc83;
		margin: 20px 
	`;

const menu =  styled.div`
		display: flex;
		gap: 50px;
		color: #f69191;
		margin: 20px;
	`;

// This could be react-router-dom's Link for example
    const Link = ({ className, children }) => (
     <a className={className}>
      {children}
     </a>
     );
  
    const StyledLink = styled(Link)`
     color: #BF4F74;
     font-weight: bold;
     `;
  
	
export {encabezado, titulo, menu,Link,StyledLink}

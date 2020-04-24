import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
width: 100%;
max-width: 1120px; 
margin-top: 25px;
display: flex;
align-items: center;
justify-content: center;
`

const loading = keyframes`
from {
  transform: rotate(0deg);
}
to{
  transform: rotate(360deg);
}`

export const Content = styled.div`
  @media (max-width: 650px) {
    flex-direction: column;
    padding: 15px;   
  }

  width: 100%;
  padding: 96px;
  background: ${props => props.theme.theme.backgroundLi};
  box-shadow: 0 0 100px rgba(0,0,0,0.1);
  border-radius: 8px;

  display: flex;
  justify-content: space-between;
  align-items: center;


  section {  
    width: 100%;
    max-width: 300px;    

    a {
      display: flex;
      align-items: center;
      margin-top: 40px;
      color: #41414d;
      font-size: 1.8rem;
      text-decoration: none;
      font-weight: 500;
      transition: opacity 0.2s;
  
      svg {
        margin-right: 8px;
      }
  
    &:hover {
      opacity: 0.8;
    }
    }

    h1 {
      @media (max-width: 650px) {
        text-align: center;
        margin-top: 35px;
      }

      margin-bottom: 15px;   
      font-size: 3.2rem;
      color: ${props => props.theme.theme.h1};
    }

    p {
      @media (max-width: 650px) {
        text-align: center;
      }
     
      font-size: 18px;
      color: ${props => props.theme.theme.text};
      line-height: 3.2rem;
    }
  }

  form { 
    width: 100%;
    max-width: 450px; 

    label {    
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      cursor: pointer;  
      width: 100%;
      height: 200px;     
      border-radius: 10px;

      strong {
        margin-top: 20px;
        color: #777;
      }

      img {
        height: 200px;      
      }

      input {
        display: none;        
      }
    }

 button {
  color: #fff;
  font-weight: bold;
  border-radius: 4px;
  margin-top: 15px;
  padding: 10px 0;
  border: 0;
  background: #B22222;
  width: 100%;

  svg {
    animation: ${loading} 1s linear infinite;
  }
 }   

    input {    
      margin-top: 8px;  
      border-radius: 4px;  
      margin-top: 8px;  
      display: block;
      width: 100%;   
      padding: 10px 20px;
      background: ${props => props.theme.theme.inputColor};      
    }
    div {      
      display: flex;      
    }   
  }
`

import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto; 
  display: flex;
  align-items: center;
  justify-content: space-between;
 

  @media (max-width: 650px) {       
    display: flex;
    align-items: center;
    justify-content: center;
    
    > img {
      display: none;       
    }

    img#logo {      
      margin-left: 5.0rem;
    }
  }
  
`

const loading = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}`

export const Content = styled.div`
width: 100%;
max-width: 350px; 


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

form { 
  @media (max-width: 650px) {
      display: flex;
      align-items: center;
      flex-direction: column;
      padding: 10px;
    }

    p {
      text-align: justify;
      line-height: 26px;
    }    
 
  margin-top: 100px;

  input {
    margin-top: 10px;
    display: block;
    width: 100%;  
    padding: 10px 20px;
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

 
}
`

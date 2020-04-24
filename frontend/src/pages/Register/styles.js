import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
width: 100%;
max-width: 1120px;
height: 100%; 
margin: 0 auto; 
display: flex;
align-items: center;
justify-content: center;  
`

const loading = keyframes`
  from{
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg)
  }
`

export const Content = styled.div`
@media (max-width: 650px) {
  display: flex;
  flex-direction: column;
  padding: 10px;   
}

  width: 100%;
  padding: 96px;
  background: #f0f0f5;  
  border-radius: 8px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  section {
    @media (max-width: 650px) {
      display: flex;
      flex-direction: column;
    }

    width: 350px;

    img {
      @media (max-width: 650px) {
        margin-top: 20px;
      }
    }
 

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
       
      }

      margin: 64px 0 32px;
      font-size: 3.2rem;
    }

    p {
      @media (max-width: 650px) {
        text-align: center;
      }

      font-size: 1.8rem;
      color: #737380;
      line-height: 3.2rem;
    }    
 }

 form {
    @media (max-width: 650px) {
      margin-top: 20px;
      width: 100%;    
    }

   width: 450px; 
   display: flex;
   flex-direction: column;

   button {
    @media (max-width: 650px) {
      margin-top: 20px;      
    }

     margin-top: 10px;
     background:#B22222;
     border-radius: 4px;
     border: 0;
     color: #eee;
     padding: 10px 10px;


     svg {
       animation: ${loading} 1s linear infinite;
     }
   }

   input {
     width: 100%;
     margin-top: 10px;
     border-radius: 4px;    
     padding: 10px 10px;
   }

   
   span {     
      display: flex;
      align-items: center;
   

      div#city {      
        width: 60%;
        margin-right: 10px;
      }

      div#uf {     
        width: 50%;        
        
      }
 
   }
 }
`

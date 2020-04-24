import styled from 'styled-components'
import banner from '../../assets/banner.png'
export const Container = styled.div`  
@media (max-width: 650px) {
  padding: 20px;
}

width: 100%;
 
display: flex;
flex-direction: column; 
align-items: center;
 
 header { 
   @media (max-width: 650px) {
     background: transparent;
   }
   
   width: 100%;
   height: 250px;
   background: url(${banner}) no-repeat;
   background-size: cover;
   background-position-y: 35%;
   margin-top: 50px;
   margin-bottom: 15px; 
   display: flex;
   align-items: center;
   justify-content: center;

   h1 {
  color: #FFFFFF;     
}
 }
 

div#message {
  margin-top: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    height: 100px;
    width: 100px;
    margin-bottom: 15px;
    color: #777777;
  }

  p {
    font-size: 3.5rem;
    color: #777777;
  }
}

> p {
  margin-top: 50px;
}


`

export const List = styled.ul`
    @media (max-width: 650px) {
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    }

    display: grid;
    grid-template-columns: repeat(3, minmax(350px, 1fr));
    grid-gap: 20px;
    list-style: none;    
    max-width: 1120px;  
 
      li {            
      background: ${props => props.theme.theme.list.background};       
      display: flex;
      flex-direction: column;
      border-radius: 15px 15px 0 0;
      position: relative;
 

      strong {
        font-size: 1.0rem;
        color: ${props => props.theme.theme.list.strong}
      }

      div#file {            
        margin-bottom: 10px;
        height: 200px;        
        display: flex;
        align-items: center;
        justify-content: center;      

        div {
          background: #C0C0C0;
          width: 100%;
          height: 200px; 
          border-radius: 15px 15px 0 0;  

          display: flex;
          justify-content: center;
          align-items: center;

          svg {
            color: #EEEEEE;
            height: 30%;
            width: 30%;
          }
        }     

        img {         
          border-radius: 15px 15px 0 0;         
          height: 100%;        
          width: 100%;        
        }
      }

      div#title {  
        background: ${props => props.theme.theme.list.paragraphBg};
        padding-right: 5px;
        border-radius: 0 25px 25px 0;    
        position: absolute;       
        top: 180px;  
        left: 0;   
        padding: 10px 10px;
        font-weight: bold; 

      p {
        color: ${props => props.theme.theme.list.paragraph};
      }   
      } 

      button#update {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        right: 10px;
        top: 50px;          
        border-radius: 50%;      
        border: 0;  
        width: 3.0rem;
        height: 3.0rem;
        background:  ${props => props.theme.theme.list.background}; 
        color: ${props => props.theme.theme.trash};
      } 
      
      button#delete {
        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        right: 10px;
        top: 10px;          
        border-radius: 50%;      
        border: 0;  
        width: 3.0rem;
        height: 3.0rem;
        background:  ${props => props.theme.theme.list.background}; 
        color: ${props => props.theme.theme.trash};
      } 

      section {
        padding: 15px;

      div#desc {     
        margin-top: 10px;      
        
       div {      
          background: ${props => props.theme.theme.list.paragraphBg};     
          height: 100px;  
          word-wrap: break-word;         
        }
      }

      div#price {
        margin-top: 5px;   
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;

        strong {
            margin-right: 5px;
        }

        p {
          background: ${props => props.theme.theme.list.paragraphBg};
        }
      }  

      p {
        padding: 0.8rem;
        color: ${props => props.theme.theme.list.paragraph};
        line-height: 2.1rem;       
        font-size: 1.3rem;      
        border-radius: 4px;
      }

      }  
    }  
`

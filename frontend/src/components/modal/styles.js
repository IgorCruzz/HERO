import styled, { css } from 'styled-components'

export const Container = styled.div`
top: 0;
width: 100%;
height: 100%;
background: rgba(0, 0, 0, 0.9);
position: fixed;
z-index: 5;
align-items: center;
justify-content: center;

display: ${props => props.active ? 'flex' : 'none'};

${props =>
props.close &&
css`
    display: none;
    `}

`

export const Content = styled.div`
padding: 15px;
width: 400px; 
background: ${props => props.theme.theme.modal.background};
border-radius: 10px;
display: flex;
flex-direction: column;

 > button {
    background: transparent;
    border: 0;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 10px;
    color: #777777;

    
}
`

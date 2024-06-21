import styled from "styled-components";

export const SquareContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px ${props => props.borderStyle ? props.borderStyle : "solid"} black;
    width: 600px;
    height: 600px;
    
`

export const SquareLink = styled.a`
    text-decoration: none;
    font-size: 18px;
    color: black;
`
import styled from "styled-components";

export const Button = styled.button<any>`
    background-color: purple;
    padding: 10px 15px;
    border-radius: 10px;
    color: white;
    transition: all 0.2s ease-in;
    
    &:hover {
        opacity: 0.85;
    }
`;
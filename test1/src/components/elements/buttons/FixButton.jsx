import React from "react";
import styled from "styled-components";



const FixButton = ({ content, onClick, version }) => {
    return(
        <STbutton className='btn' onClick={onClick} version={version}>
            <span>{content}</span>
        </STbutton>
    )
}

export default FixButton;

const STbutton = styled.button`
    wdith: 100%;
    postion: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    background: ${(props)=> 
    props.version === 2 ? props.theme.gray : props.theme.mainColor};
    padding: 1rem;
    border: none;
    cursor: pointer;
    z-index: 40;
    span {
        font-wegiht: 700;
        font-size: 1.6rem;
        line-height: 2.3rem;
        text-align: center;
        color: #ffffff;
    } 
`;


import styled from "styled-components";
import { FontAwesomIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components";


function GlobalButton({
    content,
    icon,
    onClick,
    size,
    mobileWidth,
    width,
    mobileHeight,
    hegiht,
    fontWeight,
    fontSize,
    mobileFontSize,
    color,
    padding = "1rem",
}) {
    return (
        <Wrapper onClick = {onClick}>
            {icon && <Icon icon={icon} size={size}/>}
            {content && (
                <Btn 
                    size={size}
                    fontWeight={fontWeight}
                    width={width}
                    mobileWidth={mobileWidth}
                    hegiht={hegiht}
                    mobileHeight={mobileHeight}
                    fontSize={fontSize}
                    mobileFontSize={mobileFontSize}
                    color={color}
                    padding={padding}
                >
                    {content}
                </Btn>
            )}
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: ${(props) => props.width};
`;
const Icon = styled(FontAwesomIcon)`
    color: ${(props) => props.theme.mainColor};
    padding: 1rem 2rem;
`;
const Btn =styled.button`
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${(props) => props.padding};
    width: ${(props) => props.width};
    height: ${(props) => props.hegiht};
    font-weight: ${(props) => props.fontWeight};
    color: ${(props) =>
        props.color === "subColor" ? props.theme.mainColor : props.theme.white}
    boarder-radius: 0.5rem;
    transition: ${(props) => props.theme.transition};
    border: ${(props)=>
        props.color === "subColor" ? `1px solid ${props.theme.mainColor}`: "none"};
    background-color: ${(props) => 
    
    props.color === "subColor"
        ? props.theme.white
        : props.color === "gray"
        ? props.theme.gray
        : props.theme.mainColor};
    cursor: pointer;
    @meida (max-width: 767px) {
        /* Mobile */
        font-size: ${(props) => props.theme.mobileWidth};
        height: ${(props) => props.theme.mobileHeight};
        border-radius: 0.5rem;
        font-size: ${(props) => props.mobileFontSize}; 
    }
`;

export default GlobalButton;
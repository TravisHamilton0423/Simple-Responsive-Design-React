import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'


const dynamicStyle = props =>
  css`
    color: ${props.color};
    background-color: ${props.backgroundColor};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 139px;
    height: 33px;
    border-radius: 100px;
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 92px;
    cursor: pointer;
  `

const Container = styled.div`
  ${dynamicStyle};
`

const Button = ({
  text,
  backgroundColor,
  color,
  link,
  icon
}) => {
  const onClick = (e) => {
    e.preventDefault();
    if(link) window.location.href = link;
  }
  return (
    <>
    <Container color={color} backgroundColor={backgroundColor} onClick={onClick}>
      {text}
      {icon && <div style={{paddingLeft: "10px"}}></div>}
      {icon && <FontAwesomeIcon icon={faAngleRight}/>}
    </Container>
    </>
  )
}

export default Button;
import styled from "styled-components"

const Button = styled.button`
  width: 200px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border-radius: 50px;
  font-size: 0.7em;
  transition: box-shadow 0.3s ease;
  color: white;
  background-color: #663399;
  margin-top: 50px;
  margin-bottom: 50px;

  :hover {
    box-shadow: 0 10px 30px -15px black;
  }
`

export default Button

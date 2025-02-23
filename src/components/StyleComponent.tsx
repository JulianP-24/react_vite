import styled from "@emotion/styled";

export const Titulo = styled.h1`
  font-size: 20px;
`

export const Circulo = styled.div`
    background-color: red;
    color: #fff;
    text-align: center;
    padding: 90px 0px 10px 0px;
    width: 200px;
    height: 100px;
    border: 5px solid blue;
    border-radius: 50%;
`

export const Caja = styled.input<{colorCustom : string}>`
    padding: 0.5em;
    margin: 0.5em;
    background: papayawhip;
    border: none;
    border-radius: 3px;
    color: ${props => props.colorCustom || "green"}
`
const StyleComponent = () => {
  return (
    <>
        <Titulo>Styled Component renovado</Titulo>
        <hr />
        <Circulo>Circulo</Circulo>
        <hr />
        <Caja type="text" defaultValue="test" placeholder="texto" colorCustom="red"/>
    </>
  )
}

export default StyleComponent
import styled from 'styled-components'

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    justify-content: center;
    div {
        border: 1px solid black;
        text-align: center;
    }
`

export const Container = styled.div`
    width: 50%;
    height: 300px;
    overflow: scroll;
    margin 0 auto;
    margin-top: 40px;
`

export const TableHeader = styled.div`
    background-color: lightblue;
    font-size: 30px;
`
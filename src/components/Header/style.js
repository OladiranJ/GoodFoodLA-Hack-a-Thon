import styled from 'styled-components'

export const Head = styled.header`
    display: flex;
    justify-content: space-between;
    font-family: "Helvetica Neue",Arial,sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: 16px;
    letter-spacing: 0em;
    line-height: 1.8em;
    text-transform: none;
    color: #fff;
    padding: 50px 67px;
    li {
        display: inline;
        text-decoration: none;
        text-transform: uppercase;
        margin: 0 1.09em;
        padding: .618em 0;
    }
`

export const Container = styled.div`
    color: #fff;
    text-align: center;
    padding: 30px 70px;
`

export const Hero = styled.div`
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url("/images/hero.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    padding-bottom: 28px;
`

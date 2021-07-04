import React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom";
import { device } from '../devices'

const StyledCard = styled.div`
width: 270px;
height: 350px;
background: ${props => props.theme.element};
box-shadow: ${props => props.theme.boxShadow};
border-radius: 5px;

@media ${device.mobile} { 
    margin-right: 30px;
}`

const StyledImageLayer = styled.div`
height: 50%;`

const StyledImage = styled.img`
height: 100%;
width: 100%;
border-radius: 5px 5px 0 0;
object-fit: cover;
`

const StyledCountryNameLayer = styled.div`
padding: 5px 0 0 10px;
text-align: start;`

const StyledCountryName = styled.p`
margin-top: 5px;
color: ${props => props.theme.font};
font-weight: bold;`

const StyledCountryPropsOuter = styled.div`
padding: 0 10px;
text-align: start;`

const StyledCountryProp = styled.p`
color: ${props => props.theme.font};
margin: 0;`

const CountryCard = (props) => {

    return (
       
        <StyledCard>
             <Link to={`/${props.name}`} style={{ textDecoration: 'none' }}>
            <StyledImageLayer>
                <StyledImage src={props.flag}/>
            </StyledImageLayer>
            <StyledCountryNameLayer>
    <StyledCountryName>{props.name}</StyledCountryName>
            </StyledCountryNameLayer>
            <StyledCountryPropsOuter>
        <StyledCountryProp>Population: {props.population}</StyledCountryProp>
        <StyledCountryProp>Region: {props.region}</StyledCountryProp>
        <StyledCountryProp>Capital: {props.capital}</StyledCountryProp>
            </StyledCountryPropsOuter>
            </Link>
        </StyledCard>
       
    )
}

export default CountryCard
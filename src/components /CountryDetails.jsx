import React, {useState, useEffect}  from 'react'
import {Link, useHistory} from "react-router-dom";
import { fetchCountry, fetchBorderCountry } from '../api'
import styled from 'styled-components'
import { device } from '../devices'


const StyledContainer = styled.div``

const StyledRow = styled.div`
height: 100%`

const StyledCol = styled.div`
display: flex;`

const StyledBackButtonWrapper = styled.div`
margin: 50px 0;`

const StyledBackButton = styled.button`
border: none;
padding: 5px 40px 5px 40px;
background: ${props => props.theme.element};
box-shadow:${props => props.theme.boxShadow};
color: ${props => props.theme.font};`

const StyledImageWrapper = styled.div`
width: 100%;`

const StyledImage = styled.img`
width: 100%;
height: 250px;
object-fit: cover;

@media ${device.desktop} { 
    height: 400px;
  }`

const StyledDetailsWrapper = styled.div``

const StyledNameWrapper = styled.div``

const StyledName = styled.h2`
margin: 50px 0 20px 0;
color: ${props => props.theme.font};`

const StyledPropsWrapper = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
height: inherit;

@media ${device.desktop} { 
    height: 250px;
    width: 100%;
  }`

const StyledProps = styled.p`
margin-right: 30px;
color: ${props => props.theme.font};`

const StyledBorderCountriesWrapper = styled.div``

const StyledBorderHeading = styled.p``

const StyledBorderCountry = styled.button`
text-decoration: none;
padding: 5px 30px 5px 30px;
margin: 10px 10px 0 0;
border: none;
box-shadow: ${props => props.theme.boxShadow};
background: ${props => props.theme.element};
color: ${props => props.theme.font}`

const CountryDetails = ({match}) => {

    const [country, setCountry] = useState({})
    const [languages, setLanguages] = useState([])
    const [currencies, setCurrencies] = useState([])
    const [borderCountries, setBorderCountries] = useState([])
    let history = useHistory();

    useEffect(() => {
        const fetchData = async () => {
            const {data} = await fetchCountry(match.params.name)
            console.log(data[0])
            setCountry(data[0])
            setLanguages(data[0].languages.map(({name}) => name))
            setCurrencies(data[0].currencies.map(({name}) => name))
            setBorderCountries(data[0].borders)
            // setCountryData(data)
        }

        const fetchBorder = async (c) => {
            const {data} = await fetchBorderCountry(c || match.params.code)
            setCountry(data)
            setLanguages(data.languages.map(({name}) => name))
            setCurrencies(data.currencies.map(({name}) => name))
            setBorderCountries(data.borders)
            console.log(data)
        }

       if(!match.params.code){
        fetchData()
       }
       else{
           fetchBorder()
       }
    }, [match.params.code, match.params.name])

    const fetchBorder = async (c) => {
        const {data} = await fetchBorderCountry(c || match.params.code)
        setCountry(data)
        setLanguages(data.languages.map(({name}) => name))
        setCurrencies(data.currencies.map(({name}) => name))
        setBorderCountries(data.borders)
        console.log(data)
    }

    const D = (
        country? ( <StyledRow className='row align-items-center'>
        <StyledCol className='col-12 col-lg-6'>
        <StyledImageWrapper>
            <StyledImage src={country.flag}/>
        </StyledImageWrapper>
        </StyledCol>
        <StyledCol className='col-12 col-lg-6'>
        <StyledDetailsWrapper>
            <StyledNameWrapper>
                    <StyledName>{country.name}</StyledName>
            </StyledNameWrapper>
            <StyledPropsWrapper>
                <StyledProps>Native Name: {country.nativeName}</StyledProps>
                <StyledProps>Population: {country.population}</StyledProps>
                <StyledProps>Region: {country.region}</StyledProps>
                 <StyledProps>Sub Region: {country.subregion}</StyledProps>
                <StyledProps>Captial: {country.capital}</StyledProps>
                <StyledProps>Top Level Domain: {country.topLevelDomain}</StyledProps>
                 <StyledProps>Currencies: {currencies.join(', ')}</StyledProps>
                 <StyledProps>Languages: {languages.join(', ')}</StyledProps>
            </StyledPropsWrapper>

            <StyledBorderCountriesWrapper>
                <StyledBorderHeading>Border Countries: </StyledBorderHeading>
    { borderCountries.length? borderCountries.map(c => (
    <StyledBorderCountry onClick={() => fetchBorder(c)} >
        <Link to={`/country-code/${c}`} style={{ textDecoration: 'none', color: 'inherit' }}> {c}</Link>
        </StyledBorderCountry>)) : <p>None</p> }
            </StyledBorderCountriesWrapper>
        </StyledDetailsWrapper>
        </StyledCol>
    </StyledRow> ) : <p>Loading...</p>
    )

    return (
        
        <StyledContainer className='container'>
            <StyledBackButtonWrapper>
                <StyledBackButton onClick={() => history.goBack()}>Back</StyledBackButton>
            </StyledBackButtonWrapper>
            {D} 
        </StyledContainer>
    )
}

export default CountryDetails
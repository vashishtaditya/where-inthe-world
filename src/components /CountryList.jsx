import React from 'react'
import styled from 'styled-components'
import CountryCard from './CountryCard'

const StyledContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
margin-top: 50px;`

const CountryList = ({countries}) => {

    const COUNTRIES = (
       countries? countries.map(({flag, name, population, region, capital}) => (
             <CountryCard 
            flag={flag}
            name={name} 
            population={population} 
            region={region}
            capital={capital}/> 
    )) : <div>not found</div>
    )
        

    return (
        <StyledContainer className='container'>
           {COUNTRIES}
        </StyledContainer>
    )
}

export default CountryList

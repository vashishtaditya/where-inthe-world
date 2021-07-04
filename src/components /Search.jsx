import React from 'react'
import { device } from '../devices'
import styled from 'styled-components'

const StyledInput = styled.input`
width: 100%;
padding: 15px 30px 15px 30px;
box-shadow: ${props => props.theme.boxShadow};
border: none;
background: ${props => props.theme.element};
color: ${props => props.theme.font};
&::placeholder {
    color: ${props => props.theme.font};
  }`

const Search = ({handleSearch}) => {
    return (
        <div>
            <StyledInput type="text" placeholder="Search.." onChange={(e) => handleSearch(e.target.value)}/>
        </div>
    )
}

export default Search
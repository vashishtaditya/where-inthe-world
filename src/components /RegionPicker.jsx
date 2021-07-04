import React from 'react'
import { device } from '../devices'
import styled from 'styled-components'

const StyledSelect = styled.select`
padding: 15px 30px 15px 30px;
box-shadow: ${props => props.theme.boxShadow};
background: ${props => props.theme.element};
border: none;
margin-top: 20px;
color: ${props => props.theme.font};

    @media ${device.mobile} { 
        margin-top: inherit;
  }
`
const REGIONS = ['Africa', 
                 'Americas', 
                 'Asia', 
                 'Europe',
                 'Oceania']

const RegionPicker = ({handleRegionChange}) => {
    return (
        <div>
              <StyledSelect name="regions" id="regions"
               onChange={(e) => handleRegionChange(e.target.value)} 
               >
                <option value="">Filter by Region</option>
                {REGIONS.map((region, i) => <option key={i} value={region}>{region}</option>)}
            </StyledSelect>
        </div>
    )
}

export default RegionPicker

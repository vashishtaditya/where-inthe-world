import React from 'react'

import styled from 'styled-components'

const StyledSelect = styled.select`
padding: 15px 30px 15px 30px;
box-shadow: ${props => props.theme.bosShadow};
background: ${props => props.theme.element};
border: none;
color: ${props => props.theme.font}
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

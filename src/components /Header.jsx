import React, {useState, useEffect}  from 'react'
import styled from 'styled-components'
import { Switch } from 'antd';
import { Button } from 'antd';

import 'antd/dist/antd.css';

const StyledHeader = styled.header`
height: 80px;
background: ${props => props.theme.element};
box-shadow: ${props => props.theme.boxShadow}`

const StyledContainer = styled.div`
display: flex;
height: 100%;
justify-content: space-between;
align-items: center;`

const StyledBrand = styled.span`
font-weight: bold;
font-size: 20px;
color: ${props => props.theme.font};`

const StyledModeWrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 90px;`

const StyledMode = styled.span`
color: ${props => props.theme.font};`

const Header = ({themeToggler, theme}) => {
    return (
        <StyledHeader>
            <StyledContainer className='container'>
            <StyledBrand>Where in the world?</StyledBrand>
            <StyledModeWrapper>
            {theme === 'light' ? <StyledMode>Dark</StyledMode> : <StyledMode>Light</StyledMode>}
            <Switch size="small" onChange={() => themeToggler()} />
            </StyledModeWrapper>
       </StyledContainer>
        </StyledHeader>
    )
}

export default Header

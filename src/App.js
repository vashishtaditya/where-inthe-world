import React, {useState, useEffect}  from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {fetchCountries, searchCountry} from './api/index'
import Header from './components /Header'
import Search from './components /Search';
import RegionPicker from './components /RegionPicker';
import CountryList from './components /CountryList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CountryDetails from './components /CountryDetails';
import styled, {ThemeProvider} from 'styled-components'
import {light, dark, GlobalStyles} from './theme.js'


const StyledOptionsDiv = styled.div`
display: flex;
justify-content: space-between;
margin-top: 50px`

const App = () => {

  const [theme, setTheme] = useState('light')
  const [countries, setCountries] = useState([])

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  useEffect( () => {

    const fetchData = async () => {

      const data = await fetchCountries()

      setCountries(data.data)
    }

    fetchData()

  }, [])

  const handleRegionChange = async (region) => {

    const data = await fetchCountries(region)

    setCountries(data.data)

  }

  const handleSearch = async (country) => {
    const data = await searchCountry(country)
   setCountries(data.data)

  }

  return (
   
    <Router>
       <ThemeProvider theme={theme === 'light' ? light : dark}>
      <GlobalStyles/>
    <div className="App">
     <Header themeToggler={themeToggler} theme={theme}/>
     <Switch>
       <Route path='/' exact>
         <StyledOptionsDiv className='container'>
     <Search handleSearch={handleSearch}/>
     <RegionPicker handleRegionChange={handleRegionChange}/>
     </StyledOptionsDiv>
     <CountryList countries={countries}/>
     </Route>
     <Route path='/:name' exact component={CountryDetails}/>
     <Route path='/country-code/:code' exact component={CountryDetails}/>
     </Switch>
    </div>
    </ThemeProvider>
    </Router>
  );
}

export default App;

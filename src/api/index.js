import axios from 'axios'

const URL = 'https://restcountries.eu/rest/v2'

export const fetchCountries = async (region) => {

    let dynamicURL = URL

    if(region){
        dynamicURL = `${URL}/region/${region}`
    }

    try{
        const data = await axios.get(dynamicURL)
        return data
    }
    catch(err){
        alert(err)
    }
}

export const searchCountry = async (country) => {

    if(!country){
        const data = await axios.get(URL)
        return data
    } 

    try{
            return await axios.get(`${URL}/name/${country}`)
    }
    catch(err){
            return(err)
    }
}

export const fetchCountry = async (country) => {
    
    try{
        return await axios.get(`https://restcountries.eu/rest/v2/name/${country}?fullText=true`)
        
    }
    catch(err){
        console.log(err)
    }
}

export const fetchBorderCountry = async (code) => {
    try{
        return await axios.get(`${URL}/alpha/${code}`)
    }
    catch(err){
        console.log(err)
    }
}
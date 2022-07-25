import axios from "axios";

export const baseUrl="https://bayut.p.rapidapi.com";


  export const fetchApi=async (url)=>{
      const {data} = await axios.get((url),{
        headers: {
            'X-RapidAPI-Key': 'f47bb711bamsh0b623b872f01ed0p1ccd39jsn505aca062526',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
      });
      return data;  
  }
import axios from 'axios';
import Variables from '../api/variables'

export const call = async ({config, isAuthenticated = true, isJSON = true}) => {
 
  try { 
    
    const options = {
      headers: generateHeader(isAuthenticated, isJSON),
      method: config.method,
      data: config.data,
      url: `${Variables.API.LOCAL_BASE_URL}${config.url}`,
    };
    
    let response = await axios(options);
 
    return response;
  } catch (error) {
    return error.response;
  }
}
export const generateHeader = async (isAuthenticated, isJSON) => {
  let initialHeader = {
    "Access-Control-Allow-Origin":  "*",
  };
  if(isAuthenticated) {
    let token = await localStorage.getItem('token');
  
    initialHeader = {
      ...initialHeader,
      Authorization: `Bearer ${token}`
    }
  }
  if(!isJSON) {
    initialHeader["Content-Type"] = "multipart/form-data";
  } else {
    initialHeader["Content-Type"] = "application/json";
  }

  return initialHeader;
}


// const api = axios.create({
    
//     headers: {
//         'Content-Type': 'application/json',
//       },
// })

// export default api;
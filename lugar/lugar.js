const axios = require('axios').default





const getLugarLatLng = async (direccion) => {


     const apiKey = 'pk.96f9b7f6586343d9e79571727b810397'
     const encondeUrl = encodeURI(direccion)
     
  const resp =  await axios.get(`
     https://us1.locationiq.com/v1/search.php?key=${apiKey}&q=${encondeUrl}&format=json`)


const location = resp.data[0]
  
     return{
          direccion:location.display_name,
          lat:location.lat,
          lng:location.lon
     }
}

module.exports =  {
     getLugarLatLng
}

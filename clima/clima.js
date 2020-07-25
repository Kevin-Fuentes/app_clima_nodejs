const axios = require('axios').default

const getClima = async(lat,lng)=>{

     const apiKey='e83aa2e4ed7b91a27e8b057c11834f6c'
     const units = 'metric'
const resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=${units}&appid=${apiKey}`)

return resp.data.main.temp
}


module.exports = {
     getClima
}
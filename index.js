const { getLugarLatLng } = require("./lugar/lugar");
const { getClima } = require("./clima/clima");
const color = require("colors");
const argv = require("yargs").options({
  direccion: {
    alias: "d",
    desc: "Direccion de la ciudad para obtener el clima",
    demand: true,
  },
}).argv;

const getInfo = async(direccion) => {
try {
     const coors= await getLugarLatLng(direccion)
     const temp = await getClima(coors.lat,coors.lng)

     return `El clima en ${coors.direccion} es de ${temp} Grados F`

} catch (error) {
     return `No se puedo determinar el clima en ${direccion}`
}
    
}

getInfo(argv.direccion).then(mensaje=>console.log(mensaje))
.catch(e=>console.log(e))
'use strict';

const express = require ('express');
require('dotenv').config(); 
const cors = require ('cors');
const server = express();
const PORT=process.env.PORT; 
server.use(cors());
const axios = require("axios");
const { request } = require('express');
const getWeatherHandler = require ('./data/weather.js');
const getMoveHandler = require ('./data/movie.js');
// const weatherData = require('./data/weather.json')


// ROUTES

// https://backendlab07.herokuapp.com/weather?searchQuery=Amman
// http://localhost:3001/weather?searchQuery=Amman
// http://localhost:3001/movie?searchQuery=Amman
server.get('/weather',getWeatherHandler);
server.get('/movie',getMoveHandler);


server.get('/',(request,response) => {
request.send("Home Route")

});




// FUNCTIONS



//  async function getWeatherHandler (request,response){
// let searchQuery = request.query.searchQuery;
// let url = `https://api.weatherbit.io/v2.0/forecast/daily?key=${process.env.WEATHER_API_KEY}&city=${searchQuery}`

// try {
//     axios.get(url).then((weatherResult)=> {
//     let weatherArray = weatherResult.data.data.map((item)=>{

//         return new country (item);
    
//     });
//     response.send(weatherArray)
// });
// } catch(error) {
//     console.log('error from axios',error)
//     response.send(error)

// }
// }

// class country  {
//     constructor(countryData){

//         this.description = countryData.weather.description;
//         this.date = countryData.valid_date;
       
//     }
// }
// ===============================================FunctiomMovie=======

//  async function getMoveHandler(request,response){
//     let searchQuery = request.query.searchQuery;
//     let url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_API_KEY}&query=${searchQuery}&include_adult=false`
//     try {
//         axios.get(url).then((weatherResult)=> {
//         let moviesArray = weatherResult.data.results.map((item) => {
    
//             return new Movies(item);
//         });
    
//         response.send(moviesArray)
//     });
// }catch(error) {
//         console.log('error from axios',error)
//         response.send(error)
    
//     }
// }

// class Movies {
//     constructor(movieData){

//         this.title = movieData.title;
//         this.poster = `https://image.tmdb.org/t/p/original/${movieData.poster_path}`;

//     }
// }






server.get('*',(request,response)=>{
    response.status(404).send('Not Found')

})




server.listen (PORT,()=> {
console.log(`listning on PORT ${PORT}`)
})



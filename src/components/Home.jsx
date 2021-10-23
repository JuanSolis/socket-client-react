import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';


const Home  = () => {
    const url = "https://accf-190-148-252-125.ngrok.io/";
    const [allDataResponse, setallDataRespons] = useState([]);

    const allData = () =>{
        axios.get(url).then((response) => {
            setallDataRespons(response.data);
           
        }).catch(error => console.log(error));
    }

    useEffect(() => {
        allData();
   }, []);

      return(
        <div>
            {
               allDataResponse.map((element) => {
                   return(
                       <div key={element.key}>
                           <h3>{element.id}</h3>
                           <p>{element.mensaje}</p>
                       </div>
                   )
               })
            }
        </div>
      );
  }

  export default Home;
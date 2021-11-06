import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';


const Home  = () => {
    const url = "https://fcab-190-148-157-205.ngrok.io/";
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
        <div class="text-center">
            
           <table class="table table table-striped">
                <thead class="">
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Numero Hexadecimal</th>
                    </tr>
                </thead>
                <tbody>
                    

                    {
                    allDataResponse.map((element) => {
                        return(
                            <tr key={element.key}>
                                <th scope="row">{element.id}</th>
                                <td>{element.hexa}</td>
                            </tr>
                        )
                    })
                    }
                   
                </tbody>
            </table>
 
        </div>
      );
  }

  export default Home;
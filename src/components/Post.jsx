import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import io  from 'socket.io-client';


const Post  = () => {
    const urlRasp = "https://ba79-190-56-50-34.ngrok.io/data_rasp";
    const urlmodWifi = "https://ba79-190-56-50-34.ngrok.io/data_ModWifi";
    const [postData, setPostData] = useState("");

    const handlerClick = (e) => {
        e.preventDefault();
        const socket = io('https://ba79-190-56-50-34.ngrok.io', {});
        socket.emit('sendActivation',{empezar_conteo: "True"});
        console.log("Activacion Enviada");

        axios.post(urlmodWifi, {modWifi_Activation: "True"})
        .then(response => console.log(response));

        // axios.post(url, {hexa: postData})
        // .then(response => console.log(response));
    }

    // const handlerListener = () => {
    //     const socket = io('https://fcab-190-148-157-205.ngrok.io/', {});
    //     socket.on('sendDataLigth', function(state) {
    //         console.log(state);
    //         setPostData(state);
    //         console.log(postData);
    //     });
    // }

    

    const handleChange = (e) => {
        console.log(e.target.checked);
        //handlerListener()
        // setPostData(e.target.value);
    }

      return(
        <form className="p-4">
            {/* <h1 className="d-4 text-center">Envia un número Hexadecimal</h1>
            <div class="form-group">
            <label for="exampleInputEmail1">Número hexadecimal</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="dataParamForm" onChange={handleChange}/>
            <small id="emailHelp" class="form-text text-muted">Número entre 0 y F</small>
            </div>
            <div className="text-center">
            <button type="submit" class="btn btn-primary mt-3 col-md-4"  value="Boton" onClick={handlerClick} >Submit</button>
            </div> */}

            <h1 className="d-4 text-center">Foco {postData}</h1>
            <div className="form-check form-switch ">
                {/* <input className="form-check-input " type="checkbox" id="flexSwitchCheckChecked" name="dataParamForm" onChange={handleChange} /> */}
                {/* <label className="form-check-label " htmlFor="flexSwitchCheckChecked">Encender Luz</label> */}
            </div>
            <div className="text-center">
                <button type="submit" className="btn btn-primary mt-3 col-md-4"  value="Boton" onClick={handlerClick} >Submit</button>
            </div>
            
      </form>
      );
  }

  export default Post;
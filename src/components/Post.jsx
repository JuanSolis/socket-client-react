import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import io  from 'socket.io-client';


const Home  = () => {
    const url = "https://accf-190-148-252-125.ngrok.io/post_data";
    const [postData, setPostData] = useState("");

    const handlerClick = (e) => {
        e.preventDefault();
        const socket = io('https://accf-190-148-252-125.ngrok.io', {});
        socket.emit('stateChanged',{mensaje: postData});

        axios.post(url, {postDataParam: postData})
        .then(response => console.log(response));
    }

    const handleChange = (e) => {
        setPostData(e.target.value);
    }

      return(
        <div>
            <input type="text" name="dataParamForm" onChange={handleChange}/>
            <input type="submit" value="Boton" onClick={handlerClick} />
        </div>
      );
  }

  export default Home;
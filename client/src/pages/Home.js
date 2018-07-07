import React, {Component} from 'react'
import { Container, Image } from 'semantic-ui-react'
import {Redirect} from 'react-router-dom';
import title from "../images/title.jpg";

const imageStyle = {
  width: "500px",
}

const Home = () => 
<Container>
<Image centered='ture' style={imageStyle} src={title}/>
</Container>


export default Home;
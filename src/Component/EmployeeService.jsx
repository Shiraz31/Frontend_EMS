import React from "react";
import axios, { Axios } from "axios";

const baseUrl ='http://localhost:8080/emp';

  const getUrl =()=>{

    return axios.get(baseUrl)

  }

export default  getUrl;
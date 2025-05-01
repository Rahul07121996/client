import axios from 'axios'
import React from 'react'

const agent = axios.create({
    baseURL:process.env.REACT_APP_API_URL
});

const sleep = (delay) =>{
    return new Promise(reslove=>{
        setTimeout(reslove,delay);
    })
}
agent.interceptors.response.use(async response =>{
    try{
         await sleep(1000);
         return response;
    }
    catch(error){
        console.log(error);
        return Promise.reject(error)
    }
})


export default agent;
//require dependencies
require('dotenv').config()
const express = require('express');
const bodyParse = require('body-parser');
const axios = require('axios');
const app = express();


//define the enviornment
const  {TOKEN, SERVER_URL} = process.env
const BotAPI = `https://api.telegram.org/bot${TOKEN}`
const URL =    `/webhook/${TOKEN}`
const WEBHOOK = SERVER_URL+URL

app.use(bodyParse.json())

const HOOk = async() =>{
    const res = await axios.get(`${BotAPI}/setWebhook?url=${WEBHOOK}`)
    console.log(res.data)
} 

app.post(URL, async(req, res)=>{
    console.log(res.body)

    const chatId = req.body.message.chat.id 
    const text = req.body.message.text
    
    await axios.post(`${BotAPI}/sendMessage`, {
        chat_id: chatId,
        text: text
    })
    return res.send()
})

app.listen(process.env.PORT || 8080, async()=>{
    console.log(`Server is running on port ${process.env.PORT} || 8080`)
    await HOOk()
})


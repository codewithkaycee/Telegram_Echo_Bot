// const axios = require('axios')
// const { BotAPI } = require ('./config')

// const commandHandle = async(chatId,commands) => {
//     if (commands === '/start'){
//         await axios.post(`${BotAPI}/sendMessage`,{
//             chat_id: chatId,
//             text: 'Welcome to the bot!'
//         });
//     }else if(commands === '/help'){
//         await axios.post(`${BotAPI}/sendMessage`,{
//             chat_id: chatId,
//             text: 'How can I help you?'
//         });
//     }else if (commands === '/settings'){
//         await axios.post(`${BotAPI}/sendMessage`, {
//             chat_id : chatId,
//             text : 'Edit Bot'
//         })
//     }else{
//         await axios.post(`${BotAPI}/sendMessage`,{
//             chat_id : chatId,
//             text: 'Unknown Command.'
//         })
//     }
// };

// module.exports = {handCommands}
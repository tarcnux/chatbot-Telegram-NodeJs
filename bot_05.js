const env = require('./.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

const gifTelegram = 'https://media.giphy.com/media/ya4eevXU490Iw/giphy.gif'

bot.use(async (ctx, next) => {
    const start = new Date()
    await next()
    const ms = new Date - start
    const dataEHora = new Date().toLocaleString();
    console.log(`${dataEHora} \n Tempo de resposta: ${ms}ms`)
})

//Diferentes tipos de respostas
bot.start(async ctx => {
    //Resposta do tipo texto
    await ctx.reply(`Seja bem vindx, ${ctx.message.from.first_name}!😎`)

    //Resposta com vídeo do Youtube
    await ctx.reply('Veja o vídeo: https://www.youtube.com/watch?v=psN1DORYYV0')

    //Resposta com HTML
    await ctx.replyWithHTML(`Pode ser usado tags <strong>para negrito</strong> ou para <em>Itálico</em>. <a href="http://sc.senai.br">SENAI</a> <code>Código</code>`)

    //Resposta com Markdown
    await ctx.replyWithMarkdown('Dá para escrever *em negrito*, _em itálico_  `em código` ou ``` bloco de código```. Também é possível Link [SENAI](http://sc.senai.br) ')

    //Resposta com Foto
    await ctx.replyWithPhoto('https://picsum.photos/200/300/?random',{caption: 'Foto Aleatória'})

    //Resposta com Localização
    await ctx.replyWithLocation(-27.1156927, -48.9123907)

    //Resposta com Gif Animado
    await ctx.replyWithAnimation(gifTelegram)



})

bot.launch()
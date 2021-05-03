//KALO MAU PAKE KASIH CREDIT GW YA HEHEHE
//DONASI?BISA KE GOPAY GW DM IG GW AJA @nguengwiuw
//TENKYU MEN

//MAU MASUK VANDEV? SKUY LAH GW JUGA SENDIRI WKWKWK

const { Telegraf } = require('telegraf')
const axios = require('axios')
const fetch = require('node-fetch');
const cheerio = require("cheerio");
const bot = new Telegraf('ISI TOKEN BOT KAMU')

bot.start((ctx) => {
    let startMessage = `Hai Selamat Datang Kak ${ctx.from.first_name} Di Bot Truth Or Dare\n\nKetik /help ya kak buat bermain\n\nSemoga Terhibur Kak\n\nDibuat Oleh: VanDev`
    bot.telegram.sendMessage(ctx.chat.id, startMessage, {
        reply_markup: {
            inline_keyboard: [
                [{ text: 'Owner VanDev', callback_data: 'owner'}],
            ]
        }
    });
})



bot.help((ctx) => {
    let message = `Halo Kak ${ctx.from.first_name}, Untuk Bermain Silahkan Pilih Salah Satu Opsi Dibawah Atau Ketik /truth or /dare\nSelamat Bermain\n\nCreated By: VanDev`
    bot.telegram.sendMessage(ctx.chat.id, message, {
        reply_markup: {
            inline_keyboard: [
                [{ text: 'Truth 🤙', callback_data: 'truth'}],
                [{ text: 'Dare 🤙', callback_data: 'dare'}],
            ]
        }
    });
})

bot.command('out', (ctx) => {
    // Explicit usage
    ctx.reply('Dadah')
  
    // Using context shortcut
    ctx.leaveChat()
  })

bot.action('owner', (ctx) => {
    ctx.answerCbQuery('Process....')

    let ownerMessage = `
Instagram: https://instagram.com/rafael.alx

Telegram: @rafaelaghm

Untuk para pengguna jika ada kendala silahkan hubungi owner ya luv u <3

Ingin Berkontribunsi?Silahkan Chat Owner Yaaa
    `

    bot.telegram.sendMessage(ctx.chat.id, ownerMessage);

})

bot.action('truth', (ctx) => {
    ctx.answerCbQuery('Truth....')
    let getData = async() => {
        try{
            fetch('https://raw.githubusercontent.com/AlvioAdjiJanuar/random/main/truth.txt')
            .then(res => res.text())
            .then(body =>
            {
               let tod = body.split("\n");
               const randomTod = tod[Math.floor(Math.random() * tod.length)];
               ctx.reply("Kamu Memilih Truth")
               bot.telegram.sendMessage(ctx.chat.id, randomTod);
            });
        } catch (error) {
            console.log('error' + error)
        }
    }

    getData();

})
bot.command('truth', (ctx) => {
    let getData = async() => {
        try{
            fetch('https://raw.githubusercontent.com/AlvioAdjiJanuar/random/main/truth.txt')
            .then(res => res.text())
            .then(body =>
            {
               let tod = body.split("\n");
               const randomTod = tod[Math.floor(Math.random() * tod.length)];
               bot.telegram.sendMessage(ctx.chat.id, randomTod);
            });
        } catch (error) {
            console.log('error' + error)
        }
    }

    getData();

})

// bot.command('wiki', (ctx) => {
//     let getData = async() => {
//         try {
//             const teks = replace(/wiki /, " ")
//             axios.get(`https://alfians-api.herokuapp.com/api/wiki?q=${teks}`).then((res) => {
//                 bot.telegram.sendMessage(ctx.chat.id, '[WAIT]')
//                 let hasil = `Menurut Wikipedia: \n\n${res.data.result}`;
//                 bot.telegram.sendMessage(ctx.chat.id, hasil)
//             })
//         } catch (error) {
//             console.log('error' + error)
//         }
//     }

//     getData();
// })
// bot.command(wiki, (ctx) => {
//     let getData = async() => {
//         try {
//             const teks = text.replace(/.wiki /, "")
// axios.get(`https://alfians-api.herokuapp.com/api/wiki?q=${teks}`).then((res) => {
// 	conn.sendMessage(id, '[ WAIT ] Searching...⏳ silahkan tunggu', MessageType.text, { quoted: m } )
//     let hasil = `Menurut Wikipedia:\n\n${res.data.result}`;
//     conn.sendMessage(id, hasil ,MessageType.text, { quoted: m } )
//         } catch (error) {
//             console.error('error ' + error)
//         }
// )}

//     getData();
    

// }
// })


bot.action('dare', (ctx) => {
    ctx.answerCbQuery('Dare...')
    let getData = async() => {
        try{
            fetch('https://raw.githubusercontent.com/AlvioAdjiJanuar/random/main/dare.txt')
            .then(res => res.text())
            .then(body =>
            {
               let tod = body.split("\n");
               const randomTod = tod[Math.floor(Math.random() * tod.length)];
               ctx.reply("Kamu Memilih Dare")
               bot.telegram.sendMessage(ctx.chat.id, randomTod);
            });
        } catch (error) {
            console.log('error' + error)
        }
    }

    getData();
})

bot.command('dare', (ctx) => {
    let getData = async() => {
        try{
            fetch('https://raw.githubusercontent.com/AlvioAdjiJanuar/random/main/dare.txt')
            .then(res => res.text())
            .then(body =>
            {
               let tod = body.split("\n");
               const randomTod = tod[Math.floor(Math.random() * tod.length)];
               bot.telegram.sendMessage(ctx.chat.id, randomTod);
            });
        } catch (error) {
            console.log('error' + error)
        }
    }

    getData();
})

bot.launch();

//TINGGAL EDIT SESUKA DAN SE KREATIF KALIAN YA!!!!
exports.wait = () => {
    return `tunggu bntr.`
}

exports.ok = () => {
    return `✅ Done.`
}

exports.err = () => {
    return `⚠️ Fitur sedang Error`
}
exports.erorLink = () => {
    return `⚠️ Link nya error`
}
exports.media = () => {
    return `pilih media yg ingin kamu download`
}
exports.replyImg = (prefix, command) => {
    return `Kirim/Reply Foto Dengan Caption ${prefix + command}`
}

exports.wrongFormat = (prefix) => {
    return `Format slh, Silakan cek cara penggunaan di *${prefix}allmenu*.`
}

exports.emptyMess = () => {
    return `masukin pesan yg mau di sampai kan.`
}

exports.cmdNotFound = (cmd, prefix) => {
    return `Command *${cmd}* tidak terdaftar di *${prefix}allmenu*`
}

exports.ownerOnly = () => {
    return `khusus Owner.`
}

exports.doneOwner = () => {
    return `️Sdh selesai.`
}

exports.groupOnly = () => {
    return `gc only.`
}

exports.adminOnly = () => {
    return `admin gc only.`
}

exports.nhFalse = () => {
    return `Kode tidak valid!`
}

exports.listBlock = (blockNumber) => {
    return `*── 「 HALL OF SHAME 」 ──*
    
Total diblokir: *${blockNumber.length}* user\n`
}

exports.notAdmin = () => {
    return `Lu bkn admin.`
}

exports.adminAlready = () => {
    return `udh jdi admin sebelumnya.`
}

exports.botNotAdmin = () => {
    return `Bkn admin.`
}

exports.received = (pushname) => {
    return `
Halo ${pushname}!
Laporanmu akan dibaca doang oleh owner karna ownernya so dingin.`
}

exports.videoLimit = () => {
    return `size ny kegedean`
}

exports.notNum = (q) => {
    return `"${q}", bukan angka!`
}
exports.menunya = () => {
	return`Hi saya Handra v2 Beta.
`
}
exports.listMenu = (time, salam, pushname, prefix) => {
    return `*Selamat ${salam} ${pushname} 😖*
*⌚Time Server : ${time}*
*📚 LIST MENH HANDRA V2 :*

「 Bot Info 」 
𐁘. ${prefix}owner
𐁘. ${prefix}rules
𐁘. ${prefix}botstatus
𐁘. ${prefix}donate


「 Owner 」 
𐁘. < evaluate
𐁘. > evaluate
𐁘. $ exec
𐁘. => exec
𐁘. ${prefix}setmenu [query]
𐁘. ${prefix}setmenu templateLocation
𐁘. ${prefix}setmenu templateTenor
𐁘. ${prefix}sendsesi
𐁘. ${prefix}join [link]
𐁘. ${prefix}self
𐁘. ${prefix}public [only bot]
𐁘. ${prefix}del [pesan bot]
𐁘. ${prefix}setppbot [reply image]

「 Group 」 
𐁘. ${prefix}antilink [on/off]
𐁘. ${prefix}revoke
𐁘. ${prefix}leave
𐁘. ${prefix}add [62***]
𐁘. ${prefix}kick @tag
𐁘. ${prefix}leave
𐁘. ${prefix}linkgc
𐁘. ${prefix}group [open/close]
𐁘. ${prefix}tagall [text]
𐁘. ${prefix}hidetag [text]

「 Anime 」 
𐁘. ${prefix}quotesanime
𐁘. ${prefix}anime [query]
𐁘. ${prefix}manga [query]
𐁘. ${prefix}character [query]


「 Search 」 
𐁘. ${prefix}ytsearch [query]
𐁘. ${prefix}film [query]
𐁘. ${prefix}wallpaper [query]
𐁘. ${prefix}wikimedia [query]
𐁘. ${prefix}hentai
𐁘. ${prefix}wattpad [query]
𐁘. ${prefix}webtoons [query]
𐁘. ${prefix}drakor [query]
𐁘. ${prefix}pinterest [query]


「 Converter 」 
𐁘. ${prefix}stiker [reply image]
𐁘. ${prefix}tourl [image/video]
𐁘. ${prefix}togif [sticker]
𐁘. ${prefix}tomp4 [sticker]
𐁘. ${prefix}toimg [reply sticker]


「 Image Effect 」 
𐁘. ${prefix}wanted [reply image]
𐁘. ${prefix}utatoo [reply image]
𐁘. ${prefix}unsharpen [reply image]
𐁘. ${prefix}thanos [reply image]
𐁘. ${prefix}sniper [reply image]
𐁘. ${prefix}sharpen [reply image]
𐁘. ${prefix}sepia [reply image]
𐁘. ${prefix}scary [reply image]
𐁘. ${prefix}rip [reply image]
𐁘. ${prefix}redple [reply image]
𐁘. ${prefix}rejected [reply image]
𐁘. ${prefix}posterize [reply image]
𐁘. ${prefix}ps4 [reply image]
𐁘. ${prefix}pixelize [reply image]
𐁘. ${prefix}missionpassed [reply image]
𐁘. ${prefix}moustache [reply image]
𐁘. ${prefix}lookwhatkarenhave [reply image]
𐁘. ${prefix}jail [reply image]
𐁘. ${prefix}invert [reply image]
𐁘. ${prefix}instagram [reply image]
𐁘. ${prefix}greyscale [reply image]
𐁘. ${prefix}glitch [reply image]
𐁘. ${prefix}gay [reply image]
𐁘. ${prefix}frame [reply image]
𐁘. ${prefix}fire [reply image]
𐁘. ${prefix}distort [reply image]
𐁘. ${prefix}dictator [reply image]
𐁘. ${prefix}deepfry [reply image]
𐁘. ${prefix}ddungeon [reply image]
𐁘. ${prefix}circle [reply image]
𐁘. ${prefix}challenger [reply image]
𐁘. ${prefix}burn [reply image]
𐁘. ${prefix}brazzers [reply image]
𐁘. ${prefix}beautiful [reply image]
𐁘. ${prefix}jail [reply image]
𐁘. ${prefix}red [reply image]
𐁘. ${prefix}gay [reply image]
𐁘. ${prefix}bloo [reply image]
𐁘. ${prefix}blue [reply image]
𐁘. ${prefix}sepia [reply image]
𐁘. ${prefix}green [reply image]
𐁘. ${prefix}glass [reply image]
𐁘. ${prefix}invert [reply image]
𐁘. ${prefix}blurple [reply image]
𐁘. ${prefix}blurple2 [reply image]
𐁘. ${prefix}wasted [reply image]
𐁘. ${prefix}passed [reply image]
𐁘. ${prefix}triggered [reply image]
𐁘. ${prefix}comrade [reply image]
𐁘. ${prefix}greyscale [reply image]
𐁘. ${prefix}threshold [reply image]
𐁘. ${prefix}brightness [reply image]
𐁘. ${prefix}invertgreyscale [reply image]


「 Download 」 
𐁘. ${prefix}tiktok [link]
𐁘. ${prefix}tiktoknowm [link]
𐁘. ${prefix}tiktokwm [link]
𐁘. ${prefix}tiktokaudio [link]
𐁘. ${prefix}ytdl [link]
𐁘. ${prefix}play [query]
𐁘. ${prefix}ytmp3 [link]
𐁘. ${prefix}ytshortmp3 [link]
𐁘. ${prefix}ytmp4 [link]
𐁘. ${prefix}ytshorts [link]
𐁘. ${prefix}facebook [link]
𐁘. ${prefix}facebooksd [link]
𐁘. ${prefix}facebookhd [link]
𐁘. ${prefix}fbaudio [link]
𐁘. ${prefix}igstory [username]
𐁘. ${prefix}igdl [link]
𐁘. ${prefix}igphoto [link]
𐁘. ${prefix}igvideo [link]
𐁘. ${prefix}igreels [link]
𐁘. ${prefix}igtv [link]
𐁘. ${prefix}twitter link


「 Random Anime 」
𐁘. ${prefix}loli
𐁘. ${prefix}neko
𐁘. ${prefix}waifu
𐁘. ${prefix}shinobu
𐁘. ${prefix}megumin
𐁘. ${prefix}bully
𐁘. ${prefix}cuddle
𐁘. ${prefix}cry
𐁘. ${prefix}hug
𐁘. ${prefix}awoo
𐁘. ${prefix}kiss
𐁘. ${prefix}lick
𐁘. ${prefix}pat
𐁘. ${prefix}smug
𐁘. ${prefix}bonk
𐁘. ${prefix}yeet
𐁘. ${prefix}blush
𐁘. ${prefix}smile
𐁘. ${prefix}wave
𐁘. ${prefix}highfive
𐁘. ${prefix}handhold
𐁘. ${prefix}nom
𐁘. ${prefix}bite
𐁘. ${prefix}glomp
𐁘. ${prefix}slap
𐁘. ${prefix}kill
𐁘. ${prefix}happy
𐁘. ${prefix}wink
𐁘. ${prefix}poke
𐁘. ${prefix}dance
𐁘. ${prefix}cringe

「 Nsfw & Sfw 」
𐁘. ${prefix}ahegao
𐁘. ${prefix}ass
𐁘. ${prefix}bdsm
𐁘. ${prefix}blowjob
𐁘. ${prefix}cuckold
𐁘. ${prefix}cum
𐁘. ${prefix}ero
𐁘. ${prefix}femdom
𐁘. ${prefix}foot
𐁘. ${prefix}gangbang
𐁘. ${prefix}glasses
𐁘. ${prefix}jahy
𐁘. ${prefix}manga
𐁘. ${prefix}masturbation
𐁘. ${prefix}neko
𐁘. ${prefix}orgy
𐁘. ${prefix}panties
𐁘. ${prefix}pussy
𐁘. ${prefix}tentacles
𐁘. ${prefix}thighs
𐁘. ${prefix}yuri
𐁘. ${prefix}feet
𐁘. ${prefix}lewdkemo
𐁘. ${prefix}woof
𐁘. ${prefix}gasm
𐁘. ${prefix}solo
𐁘. ${prefix}8ball
𐁘. ${prefix}goose
𐁘. ${prefix}avatar
𐁘. ${prefix}hololewd
𐁘. ${prefix}gecg
𐁘. ${prefix}holo
𐁘. ${prefix}fox_girl
𐁘. ${prefix}tits
𐁘. ${prefix}eroyuri
𐁘. ${prefix}holoyero
𐁘. ${prefix}lizard
𐁘. ${prefix}keta
𐁘. ${prefix}eron
𐁘. ${prefix}erok
𐁘. ${prefix}kemonomimi
𐁘. ${prefix}cum_jpg
𐁘. ${prefix}nsfw_avatar
𐁘. ${prefix}erofeet
𐁘. ${prefix}meow
𐁘. ${prefix}wallpaper
𐁘. ${prefix}waifu
𐁘. ${prefix}trap
𐁘. ${prefix}lewd
𐁘. ${prefix}pussy_jpg
𐁘. ${prefix}futanari
𐁘. ${prefix}lewdk
𐁘. ${prefix}solog
𐁘. ${prefix}smug
𐁘. ${prefix}cum
𐁘. ${prefix}slap
𐁘. ${prefix}les
𐁘. ${prefix}erokemo
𐁘. ${prefix}bj
𐁘. ${prefix}pwankg
𐁘. ${prefix}pat
𐁘. ${prefix}poke
𐁘. ${prefix}feed
𐁘. ${prefix}nsfw_neko_gif
𐁘. ${prefix}pussy
𐁘. ${prefix}feetg
𐁘. ${prefix}baka
𐁘. ${prefix}hug
𐁘. ${prefix}kiss
𐁘. ${prefix}tickle
𐁘. ${prefix}spank
𐁘. ${prefix}kuni
𐁘. ${prefix}classic
𐁘. ${prefix}boobs
𐁘. ${prefix}anal
𐁘. ${prefix}ngif
𐁘. ${prefix}cuddle
𐁘. ${prefix}zettai

「 Textpro Menu 」
𐁘. ${prefix}halloween2 text|text2
𐁘. ${prefix}horror text|text2
𐁘. ${prefix}game8bit text|text2
𐁘. ${prefix}layered text|text2
𐁘. ${prefix}glitch2 text|text2
𐁘. ${prefix}coolg text|text2
𐁘. ${prefix}coolwg text|text2
𐁘. ${prefix}realistic text|text2
𐁘. ${prefix}space3d text|text2
𐁘. ${prefix}gtiktok text|text2
𐁘. ${prefix}stone text|text2
𐁘. ${prefix}marvel text|text2
𐁘. ${prefix}marvel2 text|text2
𐁘. ${prefix}pornhub text|text2
𐁘. ${prefix}avengers text|text2
𐁘. ${prefix}metalr text|text2
𐁘. ${prefix}metalg text|text2
𐁘. ${prefix}metalg2 text|text2
𐁘. ${prefix}halloween2 text|text2
𐁘. ${prefix}lion text|text2
𐁘. ${prefix}wolf_bw text|text2
𐁘. ${prefix}wolf_g text|text2
𐁘. ${prefix}ninja text|text2
𐁘. ${prefix}3dsteel text|text2
𐁘. ${prefix}horror2 text|text2
𐁘. ${prefix}lava text|text2
𐁘. ${prefix}bagel text|text2
𐁘. ${prefix}blackpink text
𐁘. ${prefix}rainbow2 text
𐁘. ${prefix}water_pipe text
𐁘. ${prefix}halloween text
𐁘. ${prefix}sketch text
𐁘. ${prefix}sircuit text
𐁘. ${prefix}discovery text
𐁘. ${prefix}metallic2 text
𐁘. ${prefix}fiction text
𐁘. ${prefix}demon text
𐁘. ${prefix}transformer text
𐁘. ${prefix}berry text
𐁘. ${prefix}thunder text
𐁘. ${prefix}magma text
𐁘. ${prefix}3dstone text
𐁘. ${prefix}neon text
𐁘. ${prefix}glitch text
𐁘. ${prefix}harry_potter text
𐁘. ${prefix}embossed text
𐁘. ${prefix}broken text
𐁘. ${prefix}papercut text
𐁘. ${prefix}gradient text
𐁘. ${prefix}glossy text
𐁘. ${prefix}watercolor text
𐁘. ${prefix}multicolor text
𐁘. ${prefix}neon_devil text
𐁘. ${prefix}underwater text
𐁘. ${prefix}bear text
𐁘. ${prefix}wonderfulg text
𐁘. ${prefix}christmas text
𐁘. ${prefix}neon_light text
𐁘. ${prefix}snow text
𐁘. ${prefix}cloudsky text
𐁘. ${prefix}luxury2 text
𐁘. ${prefix}gradient2 text
𐁘. ${prefix}summer text
𐁘. ${prefix}writing text
𐁘. ${prefix}engraved text
𐁘. ${prefix}summery text
𐁘. ${prefix}3dglue text
𐁘. ${prefix}metaldark text
𐁘. ${prefix}neonlight text
𐁘. ${prefix}oscar text
𐁘. ${prefix}minion text
𐁘. ${prefix}holographic text
𐁘. ${prefix}purple text
𐁘. ${prefix}glossyb text
𐁘. ${prefix}deluxe2 text
𐁘. ${prefix}glossyc text
𐁘. ${prefix}fabric text
𐁘. ${prefix}neonc text
𐁘. ${prefix}newyear text
𐁘. ${prefix}newyear2 text
𐁘. ${prefix}metals text
𐁘. ${prefix}xmas text
𐁘. ${prefix}blood text
𐁘. ${prefix}darkg text
𐁘. ${prefix}joker text
𐁘. ${prefix}wicker text
𐁘. ${prefix}natural text
𐁘. ${prefix}firework text
𐁘. ${prefix}skeleton text
𐁘. ${prefix}balloon text
𐁘. ${prefix}balloon2 text
𐁘. ${prefix}balloon3 text
𐁘. ${prefix}balloon4 text
𐁘. ${prefix}balloon5 text
𐁘. ${prefix}balloon6 text
𐁘. ${prefix}balloon7 text
𐁘. ${prefix}steel text
𐁘. ${prefix}gloss text
𐁘. ${prefix}denim text
𐁘. ${prefix}decorate text
𐁘. ${prefix}decorate2 text
𐁘. ${prefix}peridot text
𐁘. ${prefix}rock text
𐁘. ${prefix}glass text
𐁘. ${prefix}glass2 text
𐁘. ${prefix}glass3 text
𐁘. ${prefix}glass4 text
𐁘. ${prefix}glass5 text
𐁘. ${prefix}glass6 text
𐁘. ${prefix}glass7 text
𐁘. ${prefix}glass8 text
𐁘. ${prefix}captain_as2 text
𐁘. ${prefix}robot text
𐁘. ${prefix}equalizer text
𐁘. ${prefix}toxic text
𐁘. ${prefix}sparkling text
𐁘. ${prefix}sparkling2 text
𐁘. ${prefix}sparkling3 text
𐁘. ${prefix}sparkling4 text
𐁘. ${prefix}sparkling5 text
𐁘. ${prefix}sparkling6 text
𐁘. ${prefix}sparkling7 text
𐁘. ${prefix}decorative text
𐁘. ${prefix}chocolate text
𐁘. ${prefix}strawberry text
𐁘. ${prefix}koifish text
𐁘. ${prefix}bread text
𐁘. ${prefix}matrix text
𐁘. ${prefix}blood2 text
𐁘. ${prefix}neonligth2 text
𐁘. ${prefix}thunder2 text
𐁘. ${prefix}3dbox text
𐁘. ${prefix}neon2 text
𐁘. ${prefix}roadw text
𐁘. ${prefix}bokeh text
𐁘. ${prefix}gneon text
𐁘. ${prefix}advanced text
𐁘. ${prefix}dropwater text
𐁘. ${prefix}wall text
𐁘. ${prefix}chrismast text
𐁘. ${prefix}honey text
𐁘. ${prefix}drug text
𐁘. ${prefix}marble text
𐁘. ${prefix}marble2 text
𐁘. ${prefix}ice text
𐁘. ${prefix}juice text
𐁘. ${prefix}rusty text
𐁘. ${prefix}abstra text
𐁘. ${prefix}biscuit text
𐁘. ${prefix}wood text
𐁘. ${prefix}scifi text
𐁘. ${prefix}metalr text
𐁘. ${prefix}purpleg text
𐁘. ${prefix}shiny text 
𐁘. ${prefix}jewelry text
𐁘. ${prefix}jewelry2 text
𐁘. ${prefix}jewelry3 text
𐁘. ${prefix}jewelry4 text
𐁘. ${prefix}jewelry5 text
𐁘. ${prefix}jewelry6 text
𐁘. ${prefix}jewelry7 text
𐁘. ${prefix}jewelry8 text
𐁘. ${prefix}metalh text
𐁘. ${prefix}golden text
𐁘. ${prefix}glitter text
𐁘. ${prefix}glitter2 text
𐁘. ${prefix}glitter3 text
𐁘. ${prefix}glitter4 text
𐁘. ${prefix}glitter5 text
𐁘. ${prefix}glitter6 text
𐁘. ${prefix}glitter7 text
𐁘. ${prefix}metale text
𐁘. ${prefix}carbon text
𐁘. ${prefix}candy text
𐁘. ${prefix}metalb text
𐁘. ${prefix}gemb text
𐁘. ${prefix}3dchrome text
𐁘. ${prefix}metalb2 text
𐁘. ${prefix}metalg text
𐁘. ${prefix}metalg text


「 Others 」
𐁘. ${prefix}kalkulator
𐁘. ${prefix}smeme [text]
𐁘. ${prefix}memegen [text|text]

「 TqTo 」 
𐁘. My God
𐁘. Fatih A.
𐁘. Handramz
𐁘. DikaArdnt
𐁘. Alien team
𐁘. Spacex team

    `
}

exports.rules = (prefix) => {
    return `
*── 「 RULES AND FAQ 」 ──*

1. Jangan spam bot. 🙅
Sanksi: *ga ada banh*

2. Jangan telepon bot. ☎️
Sanksi: *Block*

3. Jangan mengeksploitasi bot.😖
Sanksi: *Parah sih auto block*

🗯️ Bot lambat merespon ?
➡️ Ini Kampoeng anjg.

🗯️ Boleh saya menambah ke grup?
➡️ Izin Owner.

🗯️ Prefixnya?
➡️ Multi prefix.

🗯️ Woy Bot, ko gw chat owner ga di respon?
➡️ Ownernya so dingin.


Jika sudah dipahami rules-nya, silakan ketik *${prefix}allmenu* untuk memulai!

⚠️ Bot ini masih dalam tahap pengembangan.
`
}
exports.welcome = () =>{
	return`Intro dulu dong banh
	
🪦 𝖭𝖺𝗆𝖺 :
⚰️ 𝖴𝗆𝗎𝗋 :
👫 𝖦𝖾𝗇𝖽𝖾𝗋 :
💢 kalau sudah intro silahkan keluar ~`
}
exports.leave = () =>{
	return`Semoga setelah meninggalkan group secepatnya meninggalkan dunia`
}
exports.source = () =>{
return`*── 「 SOURCE 」 ──*

Base : https://github.com/handrameizaluna
`
}
exports.tos = (ownernomer) => {
    return `
*── 「 OWNER 」 ──*

Contact person Owner:
wa.me/${ownernomer} (Owner)

    `
}

exports.ownermenu = (prefix) =>{
return`*Owner*
𐁘. < evaluate
𐁘. > evaluate
𐁘. $ exec
𐁘. => exec
𐁘. ${prefix}setmenu [query]
𐁘. ${prefix}setmenu templateLocation
𐁘. ${prefix}setmenu templateTenor
𐁘. ${prefix}sendsesi
𐁘. ${prefix}join [link]
𐁘. ${prefix}self
𐁘. ${prefix}public [only bot]
𐁘. ${prefix}del [pesan bot]
𐁘. ${prefix}setppbot [reply image]
`}

exports.group = (prefix) =>{
	return`*Group* 
𐁘. ${prefix}antilink [on/off]
𐁘. ${prefix}revoke
𐁘. ${prefix}leave
𐁘. ${prefix}add [62***]
𐁘. ${prefix}kick @tag
𐁘. ${prefix}leave
𐁘. ${prefix}linkgc
𐁘. ${prefix}group [open/close]
𐁘. ${prefix}tagall [text]
𐁘. ${prefix}hidetag [text]
`}

exports.anime = (prefix) =>{
	return`*Anime*
𐁘. ${prefix}quotesanime
𐁘. ${prefix}anime [query]
𐁘. ${prefix}manga [query]
𐁘. ${prefix}character [query]
`}

exports.search = (prefix) =>{
	return`*Search*
𐁘. ${prefix}ytsearch [query]
𐁘. ${prefix}film [query]
𐁘. ${prefix}wallpaper [query]
𐁘. ${prefix}wikimedia [query]
𐁘. ${prefix}hentai
𐁘. ${prefix}wattpad [query]
𐁘. ${prefix}webtoons [query]
𐁘. ${prefix}drakor [query]
𐁘. ${prefix}pinterest [query]
`}

exports.converter = (prefix) =>{
	return`*Converter*
𐁘. ${prefix}stiker [reply image]
𐁘. ${prefix}tourl [image/video]
𐁘. ${prefix}togif [sticker]
𐁘. ${prefix}tomp4 [sticker]
𐁘. ${prefix}toimg [reply sticker]
`}

exports.effect = (prefix) =>{
	return`*Image Effect*
𐁘. ${prefix}wanted [reply image]
𐁘. ${prefix}utatoo [reply image]
𐁘. ${prefix}unsharpen [reply image]
𐁘. ${prefix}thanos [reply image]
𐁘. ${prefix}sniper [reply image]
𐁘. ${prefix}sharpen [reply image]
𐁘. ${prefix}sepia [reply image]
𐁘. ${prefix}scary [reply image]
𐁘. ${prefix}rip [reply image]
𐁘. ${prefix}redple [reply image]
𐁘. ${prefix}rejected [reply image]
𐁘. ${prefix}posterize [reply image]
𐁘. ${prefix}ps4 [reply image]
𐁘. ${prefix}pixelize [reply image]
𐁘. ${prefix}missionpassed [reply image]
𐁘. ${prefix}moustache [reply image]
𐁘. ${prefix}lookwhatkarenhave [reply image]
𐁘. ${prefix}jail [reply image]
𐁘. ${prefix}invert [reply image]
𐁘. ${prefix}instagram [reply image]
𐁘. ${prefix}greyscale [reply image]
𐁘. ${prefix}glitch [reply image]
𐁘. ${prefix}gay [reply image]
𐁘. ${prefix}frame [reply image]
𐁘. ${prefix}fire [reply image]
𐁘. ${prefix}distort [reply image]
𐁘. ${prefix}dictator [reply image]
𐁘. ${prefix}deepfry [reply image]
𐁘. ${prefix}ddungeon [reply image]
𐁘. ${prefix}circle [reply image]
𐁘. ${prefix}challenger [reply image]
𐁘. ${prefix}burn [reply image]
𐁘. ${prefix}brazzers [reply image]
𐁘. ${prefix}beautiful [reply image]
𐁘. ${prefix}jail [reply image]
𐁘. ${prefix}red [reply image]
𐁘. ${prefix}gay [reply image]
𐁘. ${prefix}bloo [reply image]
𐁘. ${prefix}blue [reply image]
𐁘. ${prefix}sepia [reply image]
𐁘. ${prefix}green [reply image]
𐁘. ${prefix}glass [reply image]
𐁘. ${prefix}invert [reply image]
𐁘. ${prefix}blurple [reply image]
𐁘. ${prefix}blurple2 [reply image]
𐁘. ${prefix}wasted [reply image]
𐁘. ${prefix}passed [reply image]
𐁘. ${prefix}triggered [reply image]
𐁘. ${prefix}comrade [reply image]
𐁘. ${prefix}greyscale [reply image]
𐁘. ${prefix}threshold [reply image]
𐁘. ${prefix}brightness [reply image]
𐁘. ${prefix}invertgreyscale [reply image]
`
}

exports.download = (prefix) =>{
return`*Download*
𐁘. ${prefix}tiktok [link]
𐁘. ${prefix}tiktoknowm [link]
𐁘. ${prefix}tiktokwm [link]
𐁘. ${prefix}tiktokaudio [link]
𐁘. ${prefix}ytdl [link]
𐁘. ${prefix}play [query]
𐁘. ${prefix}ytmp3 [link]
𐁘. ${prefix}ytshortmp3 [link]
𐁘. ${prefix}ytmp4 [link]
𐁘. ${prefix}ytshorts [link]
𐁘. ${prefix}facebook [link]
𐁘. ${prefix}facebooksd [link]
𐁘. ${prefix}facebookhd [link]
𐁘. ${prefix}fbaudio [link]
𐁘. ${prefix}igstory [username]
𐁘. ${prefix}igdl [link]
𐁘. ${prefix}igphoto [link]
𐁘. ${prefix}igvideo [link]
𐁘. ${prefix}igreels [link]
𐁘. ${prefix}igtv [link]
𐁘. ${prefix}twitter link
`
}

exports.ranime = (prefix) =>{
	return`*Random Anime*
𐁘. ${prefix}loli
𐁘. ${prefix}neko
𐁘. ${prefix}waifu
𐁘. ${prefix}shinobu
𐁘. ${prefix}megumin
𐁘. ${prefix}bully
𐁘. ${prefix}cuddle
𐁘. ${prefix}cry
𐁘. ${prefix}hug
𐁘. ${prefix}awoo
𐁘. ${prefix}kiss
𐁘. ${prefix}lick
𐁘. ${prefix}pat
𐁘. ${prefix}smug
𐁘. ${prefix}bonk
𐁘. ${prefix}yeet
𐁘. ${prefix}blush
𐁘. ${prefix}smile
𐁘. ${prefix}wave
𐁘. ${prefix}highfive
𐁘. ${prefix}handhold
𐁘. ${prefix}nom
𐁘. ${prefix}bite
𐁘. ${prefix}glomp
𐁘. ${prefix}slap
𐁘. ${prefix}kill
𐁘. ${prefix}happy
𐁘. ${prefix}wink
𐁘. ${prefix}poke
𐁘. ${prefix}dance
𐁘. ${prefix}cringe
`
}

exports.textpro = (prefix) =>{
	return`*Textpro*
𐁘. ${prefix}halloween2 text|text2
𐁘. ${prefix}horror text|text2
𐁘. ${prefix}game8bit text|text2
𐁘. ${prefix}layered text|text2
𐁘. ${prefix}glitch2 text|text2
𐁘. ${prefix}coolg text|text2
𐁘. ${prefix}coolwg text|text2
𐁘. ${prefix}realistic text|text2
𐁘. ${prefix}space3d text|text2
𐁘. ${prefix}gtiktok text|text2
𐁘. ${prefix}stone text|text2
𐁘. ${prefix}marvel text|text2
𐁘. ${prefix}marvel2 text|text2
𐁘. ${prefix}pornhub text|text2
𐁘. ${prefix}avengers text|text2
𐁘. ${prefix}metalr text|text2
𐁘. ${prefix}metalg text|text2
𐁘. ${prefix}metalg2 text|text2
𐁘. ${prefix}halloween2 text|text2
𐁘. ${prefix}lion text|text2
𐁘. ${prefix}wolf_bw text|text2
𐁘. ${prefix}wolf_g text|text2
𐁘. ${prefix}ninja text|text2
𐁘. ${prefix}3dsteel text|text2
𐁘. ${prefix}horror2 text|text2
𐁘. ${prefix}lava text|text2
𐁘. ${prefix}bagel text|text2
𐁘. ${prefix}blackpink text
𐁘. ${prefix}rainbow2 text
𐁘. ${prefix}water_pipe text
𐁘. ${prefix}halloween text
𐁘. ${prefix}sketch text
𐁘. ${prefix}sircuit text
𐁘. ${prefix}discovery text
𐁘. ${prefix}metallic2 text
𐁘. ${prefix}fiction text
𐁘. ${prefix}demon text
𐁘. ${prefix}transformer text
𐁘. ${prefix}berry text
𐁘. ${prefix}thunder text
𐁘. ${prefix}magma text
𐁘. ${prefix}3dstone text
𐁘. ${prefix}neon text
𐁘. ${prefix}glitch text
𐁘. ${prefix}harry_potter text
𐁘. ${prefix}embossed text
𐁘. ${prefix}broken text
𐁘. ${prefix}papercut text
𐁘. ${prefix}gradient text
𐁘. ${prefix}glossy text
𐁘. ${prefix}watercolor text
𐁘. ${prefix}multicolor text
𐁘. ${prefix}neon_devil text
𐁘. ${prefix}underwater text
𐁘. ${prefix}bear text
𐁘. ${prefix}wonderfulg text
𐁘. ${prefix}christmas text
𐁘. ${prefix}neon_light text
𐁘. ${prefix}snow text
𐁘. ${prefix}cloudsky text
𐁘. ${prefix}luxury2 text
𐁘. ${prefix}gradient2 text
𐁘. ${prefix}summer text
𐁘. ${prefix}writing text
𐁘. ${prefix}engraved text
𐁘. ${prefix}summery text
𐁘. ${prefix}3dglue text
𐁘. ${prefix}metaldark text
𐁘. ${prefix}neonlight text
𐁘. ${prefix}oscar text
𐁘. ${prefix}minion text
𐁘. ${prefix}holographic text
𐁘. ${prefix}purple text
𐁘. ${prefix}glossyb text
𐁘. ${prefix}deluxe2 text
𐁘. ${prefix}glossyc text
𐁘. ${prefix}fabric text
𐁘. ${prefix}neonc text
𐁘. ${prefix}newyear text
𐁘. ${prefix}newyear2 text
𐁘. ${prefix}metals text
𐁘. ${prefix}xmas text
𐁘. ${prefix}blood text
𐁘. ${prefix}darkg text
𐁘. ${prefix}joker text
𐁘. ${prefix}wicker text
𐁘. ${prefix}natural text
𐁘. ${prefix}firework text
𐁘. ${prefix}skeleton text
𐁘. ${prefix}balloon text
𐁘. ${prefix}balloon2 text
𐁘. ${prefix}balloon3 text
𐁘. ${prefix}balloon4 text
𐁘. ${prefix}balloon5 text
𐁘. ${prefix}balloon6 text
𐁘. ${prefix}balloon7 text
𐁘. ${prefix}steel text
𐁘. ${prefix}gloss text
𐁘. ${prefix}denim text
𐁘. ${prefix}decorate text
𐁘. ${prefix}decorate2 text
𐁘. ${prefix}peridot text
𐁘. ${prefix}rock text
𐁘. ${prefix}glass text
𐁘. ${prefix}glass2 text
𐁘. ${prefix}glass3 text
𐁘. ${prefix}glass4 text
𐁘. ${prefix}glass5 text
𐁘. ${prefix}glass6 text
𐁘. ${prefix}glass7 text
𐁘. ${prefix}glass8 text
𐁘. ${prefix}captain_as2 text
𐁘. ${prefix}robot text
𐁘. ${prefix}equalizer text
𐁘. ${prefix}toxic text
𐁘. ${prefix}sparkling text
𐁘. ${prefix}sparkling2 text
𐁘. ${prefix}sparkling3 text
𐁘. ${prefix}sparkling4 text
𐁘. ${prefix}sparkling5 text
𐁘. ${prefix}sparkling6 text
𐁘. ${prefix}sparkling7 text
𐁘. ${prefix}decorative text
𐁘. ${prefix}chocolate text
𐁘. ${prefix}strawberry text
𐁘. ${prefix}koifish text
𐁘. ${prefix}bread text
𐁘. ${prefix}matrix text
𐁘. ${prefix}blood2 text
𐁘. ${prefix}neonligth2 text
𐁘. ${prefix}thunder2 text
𐁘. ${prefix}3dbox text
𐁘. ${prefix}neon2 text
𐁘. ${prefix}roadw text
𐁘. ${prefix}bokeh text
𐁘. ${prefix}gneon text
𐁘. ${prefix}advanced text
𐁘. ${prefix}dropwater text
𐁘. ${prefix}wall text
𐁘. ${prefix}chrismast text
𐁘. ${prefix}honey text
𐁘. ${prefix}drug text
𐁘. ${prefix}marble text
𐁘. ${prefix}marble2 text
𐁘. ${prefix}ice text
𐁘. ${prefix}juice text
𐁘. ${prefix}rusty text
𐁘. ${prefix}abstra text
𐁘. ${prefix}biscuit text
𐁘. ${prefix}wood text
𐁘. ${prefix}scifi text
𐁘. ${prefix}metalr text
𐁘. ${prefix}purpleg text
𐁘. ${prefix}shiny text 
𐁘. ${prefix}jewelry text
𐁘. ${prefix}jewelry2 text
𐁘. ${prefix}jewelry3 text
𐁘. ${prefix}jewelry4 text
𐁘. ${prefix}jewelry5 text
𐁘. ${prefix}jewelry6 text
𐁘. ${prefix}jewelry7 text
𐁘. ${prefix}jewelry8 text
𐁘. ${prefix}metalh text
𐁘. ${prefix}golden text
𐁘. ${prefix}glitter text
𐁘. ${prefix}glitter2 text
𐁘. ${prefix}glitter3 text
𐁘. ${prefix}glitter4 text
𐁘. ${prefix}glitter5 text
𐁘. ${prefix}glitter6 text
𐁘. ${prefix}glitter7 text
𐁘. ${prefix}metale text
𐁘. ${prefix}carbon text
𐁘. ${prefix}candy text
𐁘. ${prefix}metalb text
𐁘. ${prefix}gemb text
𐁘. ${prefix}3dchrome text
𐁘. ${prefix}metalb2 text
𐁘. ${prefix}metalg text
𐁘. ${prefix}metalg text
`
}

exports.nsfw = (prefix) =>{
	return`*Nsfw & Sfw*
𐁘. ${prefix}ahegao
𐁘. ${prefix}ass
𐁘. ${prefix}bdsm
𐁘. ${prefix}blowjob
𐁘. ${prefix}cuckold
𐁘. ${prefix}cum
𐁘. ${prefix}ero
𐁘. ${prefix}femdom
𐁘. ${prefix}foot
𐁘. ${prefix}gangbang
𐁘. ${prefix}glasses
𐁘. ${prefix}jahy
𐁘. ${prefix}manga
𐁘. ${prefix}masturbation
𐁘. ${prefix}neko
𐁘. ${prefix}orgy
𐁘. ${prefix}panties
𐁘. ${prefix}pussy
𐁘. ${prefix}tentacles
𐁘. ${prefix}thighs
𐁘. ${prefix}yuri
𐁘. ${prefix}feet
𐁘. ${prefix}lewdkemo
𐁘. ${prefix}woof
𐁘. ${prefix}gasm
𐁘. ${prefix}solo
𐁘. ${prefix}8ball
𐁘. ${prefix}goose
𐁘. ${prefix}avatar
𐁘. ${prefix}hololewd
𐁘. ${prefix}gecg
𐁘. ${prefix}holo
𐁘. ${prefix}fox_girl
𐁘. ${prefix}tits
𐁘. ${prefix}eroyuri
𐁘. ${prefix}holoyero
𐁘. ${prefix}lizard
𐁘. ${prefix}keta
𐁘. ${prefix}eron
𐁘. ${prefix}erok
𐁘. ${prefix}kemonomimi
𐁘. ${prefix}cum_jpg
𐁘. ${prefix}nsfw_avatar
𐁘. ${prefix}erofeet
𐁘. ${prefix}meow
𐁘. ${prefix}wallpaper
𐁘. ${prefix}waifu
𐁘. ${prefix}trap
𐁘. ${prefix}lewd
𐁘. ${prefix}pussy_jpg
𐁘. ${prefix}futanari
𐁘. ${prefix}lewdk
𐁘. ${prefix}solog
𐁘. ${prefix}smug
𐁘. ${prefix}cum
𐁘. ${prefix}slap
𐁘. ${prefix}les
𐁘. ${prefix}erokemo
𐁘. ${prefix}bj
𐁘. ${prefix}pwankg
𐁘. ${prefix}pat
𐁘. ${prefix}poke
𐁘. ${prefix}feed
𐁘. ${prefix}nsfw_neko_gif
𐁘. ${prefix}pussy
𐁘. ${prefix}feetg
𐁘. ${prefix}baka
𐁘. ${prefix}hug
𐁘. ${prefix}kiss
𐁘. ${prefix}tickle
𐁘. ${prefix}spank
𐁘. ${prefix}kuni
𐁘. ${prefix}classic
𐁘. ${prefix}boobs
𐁘. ${prefix}anal
𐁘. ${prefix}ngif
𐁘. ${prefix}cuddle
𐁘. ${prefix}zettai
`
}

exports.other = (prefix) =>{
return`*Others*
𐁘. ${prefix}kalkulator
𐁘. ${prefix}smeme [text]
𐁘. ${prefix}memegen [text|text]

`
}

exports.tqto = () =>{
	return`*Thanks To*
𐁘.. My God
𐁘.. Fatih A.
𐁘.. Handramz
𐁘.. DikaArdnt
𐁘.. Alien team
𐁘.. Spacex team
`
}
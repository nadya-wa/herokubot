let handler = async (m, { conn, usedPrefix, command }) => {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (/image/.test(mime)) {
        let img = await q.download()
        if (!img) throw 'Gambar ๐๐บ๐ข ๐ฎ๐ข๐ฏ๐ข??'
        await conn.updateProfilePicture(m.chat, img)
    } else throw `kirim/bal๐ฆ๐ด ๐จ๐ข๐ฎ๐ฃ๐ข๐ณ ๐ด๐ข๐ฎ๐ข caption *${usedPrefix + command}*`
}
handler.help = ['setpp']
handler.tags = ['group']

handler.command = /^setpp$/i

handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler

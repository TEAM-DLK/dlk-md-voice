const { sck,tlang } = require('../../lib')

module.exports = {
   name: 'solo',
   category:'nsfw',
   desc: 'Sends solo adult pic.',
   use: '<query>',
   async exec(citel, Void, args) {
      try {

        var solod = "Solo Porn HD PICS";
			let gis = require("g-i-s");
			let zerogroup = (await sck.findOne({
				id: citel.chat,
			})) || (await new sck({
					id: citel.chat,
				})
				.save());
			let mongoschemas = zerogroup.nsfw || "false";
            if (mongoschemas == "false") return citel.reply("*NSFW* is not active.");
			gis(solod, async (error, result) => {
				n = result;
				images = n[Math.floor(Math.random() * n.length)].url;
				let buttonMessage = {
					image: {
						url: images,
					},
					caption: `*----「 Solo 」----*`,
					footer: Void.user.name,
					headerType: 4,
					contextInfo: {
						externalAdReply: {
							title: tlang().title,
							body: `Secktor-NSFW`,
							thumbnail: log0,
							mediaType: 2,
							mediaUrl: ``,
							sourceUrl: ``,
						},
					},
				};
				Void.sendMessage(citel.chat, buttonMessage, {
					quoted: citel,
				});
            })
         } catch (e) {
           console.log(e)
      }
   }
}

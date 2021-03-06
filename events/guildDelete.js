exports.run = (client, guild) => {
  if (guild.forceLeave) return
  var embed = new client.methods.Embed()
  var pic = guild.iconURL ? guild.iconURL : client.users.get(guild.ownerID).avatarURL
  if (!pic) pic = client.user.avatarURL
  var moment = require('moment')
  embed.setAuthor('Guild Left / Kicked')
  .addField('Name', guild.name)
  .addField('ID', guild.id)
  .addField('Owner', `${client.users.get(guild.ownerID).tag} (${client.users.get(guild.ownerID).id})`)
  .setTimestamp()
  .setThumbnail(pic)
  .setColor("#E71515")
  client.guilds.get("280285147805384704").channels.get("280288162876751873").send(
    '', {
      embed: embed,
      disableEveryone: true
    }

  )
  client.funcs.log("Left a guild " + `${guild.name} \| ${guild.id} and the owner id is ${guild.owner.id}`)
}

// .addField("Guild Name", `${guild.name}`, true)
// .addField("Guild ID", `${guild.id}`, true)
// .setColor("#E71515")
// .setTimestamp()
// .addBlankField()
// .addField("Owner Name", `${guild.owner.user.username}`, true)
// .addField("Owner ID", `${guild.owner.id}`, true)

module.exports.run = async (client, msg, args) => {

    if(client.slotbot.has(client.user.id)) {
      client.slotbot.delete(client.user.id)
      return msg.channel.send('Turned off `slotbot` auto grab.')
    } 
    client.slotbot.set(client.user.id, true)
    return msg.channel.send('Turned on `slotbot` auto grab.')
}
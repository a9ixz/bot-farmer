module.exports.run = async (client, msg, args) => {

    msg.channel.send(`\`\`\`Bots Status\n💚 = Enabled\n🔴 = Disabled\n\nDankMemer: ${client.dankmemer.has(client.user.id) ? "💚" : "🔴"}\nGiveaways: ${client.giveaways.has(client.user.id) ? "💚" : "🔴"}\nNitroSniper: ${client.nitrosniper.has(client.user.id) ? "💚" : "🔴"}\nOwOBot: ${client.owobot.has(client.user.id) ? "💚" : "🔴"}\nPokeCord: ${client.pokecord.has(client.user.id) ? "💚" : "🔴"}\nPollux: ${client.pollux.has(client.user.id) ? "💚" : "🔴"}\nSlotBot: ${client.slotbot.has(client.user.id) ? "💚" : "🔴"} \`\`\``)
}
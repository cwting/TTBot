const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName(`tthelp`)
    .setDescription(`Shows the list of commands for TTBot`)
    .setDMPermission(true),

  async execute(interaction) {
    await interaction.reply(`
List of commands:
/about
/ap
/apq
/ask
/calcnx
/channel
/choose
/coinflip
/cwkbon
/dice
/gacha
/gpqbon
/gpqs3guide
/hpwash
/leech
/mpwash (WIP)
/palaht
/palant
/palazak
/tthelp
/zakum

*Use the commands for more info :)
    `);
  },
};
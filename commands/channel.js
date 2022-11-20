const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName(`channel`)
    .setDescription(`Randomly chooses a channel`)
    .setDMPermission(true),

  async execute(interaction) {
    var randomCh = Math.floor(Math.random() * 20) + 1;
    await interaction.reply(`I have picked Channel ${randomCh} for you!`);
  },
};
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName(`coinflip`)
    .setDescription(`Flips a coin`)
    .setDMPermission(true),

  async execute(interaction) {
    const coinFlipOutcomeArray = ['heads', 'tails']
    var coinFlipOutcomeNum = Math.floor(Math.random() * coinFlipOutcomeArray.length);
    await interaction.reply(`You got **${coinFlipOutcomeArray[coinFlipOutcomeNum]}**`);
  },
};
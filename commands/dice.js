const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName(`dice`)
    .setDescription(`Rolls a dice`)
    .addIntegerOption(dice => dice.setName(`dice`).setDescription(`Enter a value`).setRequired(true))
    .setDMPermission(true),

  async execute(interaction) {
    var dice = await interaction.options.getInteger(`dice`);
    var randomDice = Math.floor(Math.random() * dice) + 1;
    
    await interaction.reply(`Roll~ Spin~ You got ${randomDice}!`);
  },
};
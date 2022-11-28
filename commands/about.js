const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName(`about`)
    .setDescription(`About TTBot`)
    .setDMPermission(true),

  async execute(interaction) {
    await interaction.reply(`TTBot is made by TingTongBell~ Feel free to leave any feedback on discord @Ting#4335.`);
  },
};
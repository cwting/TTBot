const { SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
  data: new SlashCommandBuilder()
    .setName(`gpqs3`)
    .setDescription(`GPQ Stage 3 Guide`)
    .setDMPermission(true),

  async execute(interaction) {
    await interaction.reply(`https://cwting.github.io/TTBot`);
  },
};
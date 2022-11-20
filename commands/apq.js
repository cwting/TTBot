const { SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
  data: new SlashCommandBuilder()
    .setName(`apq`)
    .setDescription(`APQ Stage 2 Guide`)
    .setDMPermission(true),

  async execute(interaction) {
    var apqguide = [
      { attachment: `https://i.ibb.co/LN00p9q/apq1.jpg` },
      { attachment: `https://i.ibb.co/1JDzZxQ/apq2.png` }
    ]
    await interaction.deferReply();
    await wait(3000);
    await interaction.editReply({ files: apqguide });
  },
};
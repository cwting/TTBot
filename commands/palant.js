const { SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
  data: new SlashCommandBuilder()
    .setName(`palant`)
    .setDescription(`Paladin Elemental Weakness Guide (Neo Tokyo)`)
    .setDMPermission(true),

  async execute(interaction) {
    var palant = [
      { attachment: `https://i.ibb.co/7jWy3hZ/palant.png` }
    ]
    await interaction.deferReply();
    await wait(3000);
    await interaction.editReply({ files: palant });
  },
};
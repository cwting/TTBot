const { SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
  data: new SlashCommandBuilder()
    .setName(`palaht`)
    .setDescription(`Paladin Elemental Weakness Guide (Horntail)`)
    .setDMPermission(true),

  async execute(interaction) {
    var palaht = [
      { attachment: `https://i.ibb.co/19ZRGbH/palaht.png` }
    ]
    await interaction.deferReply();
    await wait(3000);
    await interaction.editReply({ files: palaht });
  },
};
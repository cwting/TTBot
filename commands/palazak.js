const { SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
  data: new SlashCommandBuilder()
    .setName(`palazak`)
    .setDescription(`Paladin Elemental Weakness Guide (Zakum)`)
    .setDMPermission(true),

  async execute(interaction) {
    var palazak = [
      { attachment: `https://i.ibb.co/pfmDs8s/palazak.png` }
    ]
    await interaction.deferReply();
    await wait(3000);
    await interaction.editReply({ files: palazak });
  },
};
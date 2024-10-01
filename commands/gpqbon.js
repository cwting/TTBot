const { SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
  data: new SlashCommandBuilder()
    .setName(`gpqbon`)
    .setDescription(`GPQ Bonus Stage Guide`)
    .setDMPermission(true),

  async execute(interaction) {
    var gpqbonguide = [
      // { attachment: `https://i.ibb.co/Jm33f7S/gpq-bon.png` }
      { attachment: `https://imgur.com/S7CiGNC.png` }
    ]
    await interaction.deferReply();
    await wait(3000);
    await interaction.editReply({ files: gpqbonguide });
    await interaction.followUp(`
Red/Cyan markings - Hidden Teleporters (from circle to X)
Purple - Spawn Point
    `)
  },
};
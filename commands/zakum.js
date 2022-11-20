const { SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
  data: new SlashCommandBuilder()
    .setName(`zakum`)
    .setDescription(`Zakum Guide`)
    .setDMPermission(true),

  async execute(interaction) {
    var zakumguide = [
      { attachment: `https://i.ibb.co/2gRQxw0/zak-stg1.png` }
    ]
    await interaction.deferReply()
    await wait(3000);
    await interaction.editReply({ files: zakumguide });
    await interaction.followUp(`
11-1 (chest)
9-2 (chest)
14-1 (chest)
4-2 (rock)
16-3 (chest)
16-2 (chest)
16-5 (rock)
*In order to gain access to Area 16, you need to go through room 10 or 7 until you reach Area 16.
    `)
  },
};
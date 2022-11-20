const { SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
  data: new SlashCommandBuilder()
    .setName(`cwkbon`)
    .setDescription(`CWK Bonus Guide`)
    .setDMPermission(true),

  async execute(interaction) {

    var cwkbonguide = [
      { attachment: `https://i.ibb.co/TB1mRbs/cwk-3manbon.png` },
      { attachment: `https://i.ibb.co/yQZsNgb/cwk-4manbon.png` },
      { attachment: `https://i.ibb.co/VqPpzyg/cwk-5manbon.png` },
      { attachment: `https://i.ibb.co/StY5LC3/cwk-6manbon.png` }
    ]

    await interaction.deferReply();
    await wait(5000);
    await interaction.editReply({ files: cwkbonguide });
  },
};
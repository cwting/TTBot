const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName(`gacha`)
    .setDescription(`Randomy chooses a gacha location`)
    .setDMPermission(true),

  async execute(interaction) {
    const gachLocationArray = ['CBD', 'Ellinia', 'Henesys', 'Kerning City', 'Nautilus', 'NLC', 'Perion', 'Showa', 'Mushroom Shrine', 'Sleepywood'];
    var gachLocationArrayNum = Math.floor(Math.random() * gachLocationArray.length);
    await interaction.reply(
      `I have picked ${gachLocationArray[gachLocationArrayNum]} for you! Good Luck!\n` +
      'Disclaimer: TTBot is not to be held accountable for any "bad gach run". uwu'
    );
  },
};
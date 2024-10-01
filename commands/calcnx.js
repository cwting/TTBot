const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName(`calcnx`)
    .setDescription(`Calculates the total NX you have with the amount of NX Cash Card you have`)
    .addIntegerOption(nx100 => nx100.setName(`nx100`).setDescription(`Number of NX Cash Card - 100 Points (Minimum Value is 0)`).setMinValue(0).setRequired(true))
    .addIntegerOption(nx250 => nx250.setName(`nx250`).setDescription(`Number of NX Cash Card - 250 Points (Minimum Value is 0)`).setMinValue(0).setRequired(true))
    .addIntegerOption(nx1000 => nx1000.setName(`nx1000`).setDescription(`Number of NX Cash Card - 1000 Points (Minimum Value is 0)`).setMinValue(0).setRequired(true))
    .addIntegerOption(nx5000 => nx5000.setName(`nx5000`).setDescription(`Number of NX Cash Card - 5000 Points (Minimum Value is 0)`).setMinValue(0).setRequired(true))
    .setDMPermission(true),

  async execute(interaction) {
    var nx100 = await interaction.options.getInteger(`nx100`);
    var nx250 = await interaction.options.getInteger(`nx250`);
    var nx1000 = await interaction.options.getInteger(`nx1000`);
    var nx5000 = await interaction.options.getInteger(`nx5000`);

    var totalNX = (100 * nx100) + (250 * nx250) + (1000 * nx1000) + (5000 * nx5000);

    await interaction.reply(
      `Amount of 100 NX Cash Card(s) - ${nx100}.\n` +
      `Amount of 250 NX Cash Card(s) - ${nx250}.\n` +
      `Amount of 1000 NX Cash Card(s) - ${nx1000}.\n` +
      `Amount of 5000 NX Cash Card(s) - ${nx5000}.\n` +
      `Your total accumulated NX - **${totalNX.toLocaleString()}**\n`
    );
  },
};
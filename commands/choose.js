const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName(`choose`)
    .setDescription(`Chooses an option out of a given list`)
    .addStringOption(options => options.setName(`options`).setDescription(`List the options`).setRequired(true))
    .setDMPermission(true),

  async execute(interaction) {
    var options = await interaction.options.getString(`options`);
    var optionsArray = options.split(' ');
    var optionsRandomiser = Math.floor(Math.random() * optionsArray.length);
    await interaction.reply(
        `Your options: ${options}.\n` +
        `From these options, I choose: **${optionsArray[optionsRandomiser]}**\n`
    );
  },
};
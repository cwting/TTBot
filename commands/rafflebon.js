const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName(`rafflebon`)
    .setDescription(`Raffles BON for you/your team`)
    .addStringOption(igns => igns.setName(`igns`).setDescription(`List the IGNs (seperated with comma [,])`).setRequired(true))
    .addIntegerOption(bonNum => bonNum.setName(`bonnum`).setDescription(`Input the number of BON to split up`).setRequired(true))
    .setDMPermission(true),

  async execute(interaction) {
    var igns = await interaction.options.getString(`igns`);
    var bonNum = await interaction.options.getInteger('bonnum');
    // var ignsArray = igns.split(',');
    var reorderedIgns = [];

      for (let i = 0; i < bonNum; i++) {
        var ignRandomizer = Math.floor(Math.random() * ignsArray.length);
        // reorderedIgns.push(ignsArray[ignRandomizer]);
        ignsArray.splice(ignRandomizer, 1);

        await interaction.reply(
        `Position ${i + 1}: + ${ignRandomizer}\n` 
      );
    }
  }
};
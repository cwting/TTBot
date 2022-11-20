const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName(`ap`)
    .setDescription(`Calculates your AP`)
    .addIntegerOption(lvl => lvl.setName(`level`).setDescription(`Enter a value between 1 and 200`).setMinValue(1).setMaxValue(200).setRequired(true))
    .addIntegerOption(str => str.setName(`str`).setDescription(`Enter a value between 4 and 999`).setMinValue(4).setMaxValue(999).setRequired(true))
    .addIntegerOption(dex => dex.setName(`dex`).setDescription(`Enter a value between 4 and 999`).setMinValue(4).setMaxValue(999).setRequired(true))
    .addIntegerOption(int => int.setName(`int`).setDescription(`Enter a value between 4 and 999`).setMinValue(4).setMaxValue(999).setRequired(true))
    .addIntegerOption(luk => luk.setName(`luk`).setDescription(`Enter a value between 4 and 999`).setMinValue(4).setMaxValue(999).setRequired(true))
    .setDMPermission(true),

  async execute(interaction) {
    var level = await interaction.options.getInteger(`level`);
    var str = await interaction.options.getInteger(`str`);
    var dex = await interaction.options.getInteger(`dex`);
    var int = await interaction.options.getInteger(`int`);
    var luk = await interaction.options.getInteger(`luk`);
    var AP = 0;

    if (level < 70) {
      AP = 4 + (level * 5);
    }
    // 3rd job
    else if (level >= 70 && level < 120) {
      AP = 4 + (level * 5) + 5;
    }
    // 4th job
    else {
      AP = 4 + (level * 5) + 10;
    }

    var unusedAP = AP - str - dex - int - luk + 16;
    if (unusedAP < 0) {
      return interaction.reply(`Your AP that is unassigned, or assigned to HP/MP is negative. \nPlease check that your str/dex/int/luk is not inclusive of any stat added by equipments.`)
    } 

    await interaction.reply(`You have ${unusedAP} unassigned AP, or assigned to HP/MP.`);
  },
};
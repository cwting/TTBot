const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName(`choose`)
    .setDescription(`Choose option(s) out of a given list`)
    .addStringOption(options => options.setName(`options`).setDescription(`List the options (seperate options with comma [,])`).setRequired(true))
    .addIntegerOption(amount => amount.setName(`number_of_options`).setDescription(`Choose the number of options to be chosen (Default: 1)`).setRequired(false))
    .addStringOption(repeat => repeat.setName(`allow_repeat`).setDescription(`Choose whether options provided will repeat (Default: NO)`).setRequired(false).addChoices(
      { name: 'NO', value: 'NO' },
      { name: 'YES', value: 'YES' }
    ))
    .setDMPermission(true),

  async execute(interaction) {
    var options = await interaction.options.getString(`options`);
    var amount = await interaction.options.getInteger(`number_of_options`);
    var repeat = await interaction.options.getString(`allow_repeat`);

    var repeatChoice = "";
    var amountChoice = 1;

    var optionsArray = options.split(',');

    if (amount > optionsArray.length) {
      return await interaction.reply(`Error! The number of options to be chosen is higher than the number of options provided. Please check again.`);
    }

    if (repeat !== null) { repeatChoice = repeat; }
    else { repeatChoice = "NO"; }

    if (amount !== null) { amountChoice = amount; }
    else { amountChoice = 1 }

    var finalOptions = [];
    for (let i = 0; i < amountChoice; i++) {
      var optionsRandomiser = Math.floor(Math.random() * optionsArray.length);
      if (repeatChoice == "YES") {
        finalOptions.push(optionsArray[optionsRandomiser]);
      } else if (repeatChoice == "NO") {
        let spliceOptionsArray = optionsArray;
        finalOptions.push(optionsArray[optionsRandomiser]);
        spliceOptionsArray.splice(optionsRandomiser, 1);
      }
    }

    await interaction.reply(
      `Your options: ${options}.\n` +
      `From these options, I choose: **${finalOptions}**\n`
    );
  },
};
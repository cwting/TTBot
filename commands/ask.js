const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName(`ask`)
    .setDescription(`Ask a question`)
    .addStringOption(question => question.setName(`question`).setDescription(`Ask a question`).setRequired(true))
    .setDMPermission(true),

  async execute(interaction) {
    var question = await interaction.options.getString(`question`);
    const askArray = [
      'Hell yes!', 'Yes.',

      'Probably.', 'Maybe.', 'Probably not.',

      'No.', 'Hell no!',

      'Uhm...', 'I don\'t know, what do you think? 🤔', 'I hope not!', 'Hmm...'
    ];
    var askArrayNum = Math.floor(Math.random() * askArray.length);
    await interaction.reply(`You asked: **${question}** \nTTBot replies: **${askArray[askArrayNum]}** \nDisclaimer: Please do not take TTBot's answer too seriously, TTBot is a bigtime skem.`);
  },
};
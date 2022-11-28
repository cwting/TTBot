const { SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
  data: new SlashCommandBuilder()
  .setName(`cwkbon`)
  .setDescription(`CWK Bonus Guide`)
  .addIntegerOption(men => men.setName(`men`).setDescription(`Enter a value between 3 to 6`).setMinValue(3).setMaxValue(6).setRequired(true))
  .setDMPermission(true),

  async execute(interaction) {
    var men = await interaction.options.getInteger(`men`)

    var man3 = [{ attachment: `https://i.ibb.co/TB1mRbs/cwk-3manbon.png` }];
    var man4 = [{ attachment: `https://i.ibb.co/yQZsNgb/cwk-4manbon.png` }];
    var man5 = [{ attachment: `https://i.ibb.co/VqPpzyg/cwk-5manbon.png` }];
    var man6 = [{ attachment: `https://i.ibb.co/StY5LC3/cwk-6manbon.png` }];

    if (men == 3) {
      await interaction.deferReply();
      await wait(3000);
      await interaction.editReply({ files: man3 });
    } else if (men == 4) {
      await interaction.deferReply();
      await wait(3000);
      await interaction.editReply({ files: man4 });
    } else if (men == 5) {
      await interaction.deferReply();
      await wait(3000);
      await interaction.editReply({ files: man5 });
    } else if (men == 6) {
      await interaction.deferReply();
      await wait(3000);
      await interaction.editReply({ files: man6 });
    }
  },
};
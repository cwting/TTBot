const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName(`hpwash`)
    .setDescription(`Calculates your HP gain`)
    .addStringOption(job => job.setName(`job`).setDescription(`Enter your class`).setRequired(true).addChoices(
      { name: 'Beginner', value: 'beginner' },
      { name: 'Dark Knight', value: 'dark knight' },
      { name: 'Hero', value: 'hero' },
      { name: 'Bowmaster', value: 'bowmaster' },
      { name: 'Marksman', value: 'marksman' },
      { name: 'Night Lord', value: 'night lord' },
      { name: 'Shadower', value: 'shadower' },
      { name: 'Buccaneer', value: 'buccaneer' },
      { name: 'Corsair', value: 'corsair' },
      { name: 'Mage', value: 'mage' },
    ))
    .addIntegerOption(lvl => lvl.setName(`level`).setDescription(`Enter your level (value between 1 and 200)`).setMinValue(1).setMaxValue(200).setRequired(true))
    .addIntegerOption(mp => mp.setName(`cleanmp`).setDescription(`Enter your clean MP (value between 1 and 30000)`).setMinValue(1).setMaxValue(30000).setRequired(true))
    .setDMPermission(true),

  async execute(interaction) {
    var job = await interaction.options.getString(`job`);
    var level = await interaction.options.getInteger(`lvl`);
    var cleanMP = await interaction.options.getInteger(`mp`);

    var vote = 8000;
    var aprNX = 3100;
    var aprMeso = 10000000;

    switch (job) {
      case 'beginner':
        var minHPGain = 8;
        var avgHPGain = 10;
        var mpLoss = 8;
        var minMP = (10 * level) + 2;
        var extraMP = cleanMP - minMP
        var numOfWash = Math.floor(extraMP / mpLoss);
        var minHPGained = numOfWash * minHPGain;
        var avgHPGained = numOfWash * avgHPGain;
        break;

      case 'dark knight':
        var minHPGain = 50;
        var avgHPGain = 52;
        var mpLoss = 4;
        var minMP = (4 * level) + 156;
        var extraMP = cleanMP - minMP
        var numOfWash = Math.floor(extraMP / mpLoss);
        var minHPGained = numOfWash * minHPGain;
        var avgHPGained = numOfWash * avgHPGain;
        break;

      case 'hero':
        var minHPGain = 50;
        var avgHPGain = 52;
        var mpLoss = 4;
        var minMP = (4 * level) + 56;
        var extraMP = cleanMP - minMP
        var numOfWash = Math.floor(extraMP / mpLoss);
        var minHPGained = numOfWash * minHPGain;
        var avgHPGained = numOfWash * avgHPGain;
        break;

      case 'paladin':
        var minHPGain = 50;
        var avgHPGain = 52;
        var mpLoss = 4;
        var minMP = (4 * level) + 156;
        var extraMP = cleanMP - minMP
        var numOfWash = Math.floor(extraMP / mpLoss);
        var minHPGained = numOfWash * minHPGain;
        var avgHPGained = numOfWash * avgHPGain;
        break;

      case 'bowmaster':
      case 'marksman':
        var minHPGain = 16;
        var avgHPGain = 18;
        var mpLoss = 12;
        var minMP = (14 * level) + 148;
        var extraMP = cleanMP - minMP
        var numOfWash = Math.floor(extraMP / mpLoss);
        var minHPGained = numOfWash * minHPGain;
        var avgHPGained = numOfWash * avgHPGain;
        break;

      case 'night lord':
      case 'shadower':
        var mpLoss = 12;
        var minMP = (14 * level) + 148;
        var extraMP = cleanMP - minMP
        var numOfWash = Math.floor(extraMP / mpLoss);
        // fresh
        var minHPGainFresh = 20;
        var avgHPGainFresh = 22;
        var minHPGainedFresh = numOfWash * minHPGainFresh;
        var avgHPGainedFresh = numOfWash * avgHPGainFresh;
        // apr
        var minHPGainAPR = 16;
        var avgHPGainAPR = 18;
        var minHPGainedAPR = numOfWash * minHPGainAPR;
        var avgHPGainedAPR = numOfWash * avgHPGainAPR;

        if (cleanMP < minMP) {
          return await interaction.reply(
            `Your MP is below the minimum MP for your job. Please check your Clean MP again`
          )
        } else {
          return await interaction.reply(
            `\nYou have ${extraMP.toLocaleString()} extra MP.\n` +
            `You can wash ${numOfWash.toLocaleString()} times.\n` +
            `**If you use Fresh APs:**\n` +
            `You can gain at least ${Math.floor(minHPGainedFresh).toLocaleString()} HP and on average ${Math.floor(avgHPGainedFresh).toLocaleString()} HP.\n` +
            `**If you use APRs:**\n` +
            `You can gain at least ${Math.floor(minHPGainedAPR).toLocaleString()} HP and on average ${Math.floor(avgHPGainedAPR).toLocaleString()} HP.\n` +
            `The cost of AP resets is: ${Math.ceil(aprNX * numOfWash).toLocaleString()} NX (${Math.ceil(aprNX * numOfWash / vote).toLocaleString()} days of voting) or ${Math.ceil(aprMeso * numOfWash).toLocaleString()} mesos (${aprMeso.toLocaleString()} mesos / AP Reset)`
          )
        }

      case 'buccaneer':
        var mpLoss = 16;
        var minMP = (18 * level) + 111;
        var extraMP = cleanMP - minMP
        var numOfWash = Math.floor(extraMP / mpLoss);
        // fresh
        var minHPGainFresh = 36;
        var avgHPGainFresh = 38;
        var minHPGainedFresh = numOfWash * minHPGainFresh;
        var avgHPGainedFresh = numOfWash * avgHPGainFresh;
        // apr
        var HPGainAPR = 40;
        var HPGainedAPR = numOfWash * HPGainAPR;

        if (cleanMP < minMP) {
          return await interaction.reply(
            `Your MP is below the minimum MP for your job. Please check your Clean MP again`
          )
        } else {
          return await interaction.reply(
            `\nYou have ${extraMP.toLocaleString()} extra MP.\n` +
            `You can wash ${numOfWash.toLocaleString()} times.\n` +
            `**If you use Fresh APs:**\n` +
            `You can gain at least ${Math.floor(minHPGainedFresh).toLocaleString()} HP and on average ${Math.floor(avgHPGainedFresh).toLocaleString()} HP.\n` +
            `**If you use APRs:**\n` +
            `You can gain ${Math.floor(HPGainedAPR).toLocaleString()} HP.\n` +
            `The cost of AP resets is: ${Math.ceil(aprNX * numOfWash).toLocaleString()} NX (${Math.ceil(aprNX * numOfWash / vote).toLocaleString()} days of voting) or ${Math.ceil(aprMeso * numOfWash).toLocaleString()} mesos (${aprMeso.toLocaleString()} mesos / AP Reset)`
          )
        }

      case 'corsair':
        var mpLoss = 16;
        var minMP = (18 * level) + 111;
        var extraMP = cleanMP - minMP
        var numOfWash = Math.floor(extraMP / mpLoss);
        // fresh
        var minHPGainFresh = 16;
        var avgHPGainFresh = 18;
        var minHPGainedFresh = numOfWash * minHPGainFresh;
        var avgHPGainedFresh = numOfWash * avgHPGainFresh;
        // apr
        var HPGainAPR = 20;
        var HPGainedAPR = numOfWash * HPGainAPR;

        if (cleanMP < minMP) {
          return await interaction.reply(
            `Your MP is below the minimum MP for your job. Please check your Clean MP again`
          )
        } else {
          return await interaction.reply(
            `\nYou have ${extraMP.toLocaleString()} extra MP.\n` +
            `You can wash ${numOfWash.toLocaleString()} times.\n` +
            `**If you use Fresh APs:**\n` +
            `You can gain at least ${Math.floor(minHPGainedFresh).toLocaleString()} HP and on average ${Math.floor(avgHPGainedFresh).toLocaleString()} HP.\n` +
            `**If you use APRs:**\n` +
            `You can gain ${Math.floor(HPGainedAPR).toLocaleString()} HP.\n` +
            `The cost of AP resets is: ${Math.ceil(aprNX * numOfWash).toLocaleString()} NX (${Math.ceil(aprNX * numOfWash / vote).toLocaleString()} days of voting) or ${Math.ceil(aprMeso * numOfWash).toLocaleString()} mesos (${aprMeso.toLocaleString()} mesos / AP Reset)`
          )
        }

      case 'mage':
        var minHPGain = 10;
        var avgHPGain = 15;
        var mpLossS0 = 20;
        var mpLossS10 = 30;
        var minMP = (22 * level) + 488;
        var extraMP = cleanMP - minMP
        // Improved MapMP = 0
        var numOfWashS0 = Math.floor(extraMP / mpLossS0);
        var minHPGainedS0 = numOfWashS0 * minHPGain;
        var avgHPGainedS0 = numOfWashS0 * avgHPGain;
        // Improved MapMP = 10
        var numOfWashS10 = Math.floor(extraMP / mpLossS10);
        var minHPGainedS10 = numOfWashS10 * minHPGain;
        var avgHPGainedS10 = numOfWashS10 * avgHPGain;

        if (cleanMP < minMP) {
          return await interaction.reply(
            `Your MP is below the minimum MP for your job. Please check your Clean MP again`
          )
        } else {
          return await interaction.reply(
            `\nYou have ${extraMP.toLocaleString()} extra MP.\n` +
            '**If your `Improved MaxMP Increase skill` is level 0:**\n' +
            `You can wash ${numOfWashS0.toLocaleString()} times and gain at least ${Math.floor(minHPGainedS0).toLocaleString()} HP and on average ${Math.floor(avgHPGainedS0).toLocaleString()} HP.\n` +
            `The cost of AP resets will be: ${Math.ceil(aprNX * numOfWashS0).toLocaleString()} NX (${Math.ceil(aprNX * numOfWashS0 / vote).toLocaleString()} days of voting) or ${Math.ceil(aprMeso * numOfWashS0).toLocaleString()} mesos (${aprMeso.toLocaleString()} mesos / AP Reset)\n` +
            '**If your `Improved MaxMP Increase skill` is level 10:**\n' +
            `You can wash ${numOfWashS10.toLocaleString()} times and gain at least ${Math.floor(minHPGainedS10).toLocaleString()} HP and on average ${Math.floor(avgHPGainedS10).toLocaleString()} HP.\n` +
            `The cost of AP resets will be: ${Math.ceil(aprNX * numOfWashS10).toLocaleString()} NX (${Math.ceil(aprNX * numOfWashS10 / vote).toLocaleString()} days of voting) or ${Math.ceil(aprMeso * numOfWashS10).toLocaleString()} mesos (${aprMeso.toLocaleString()} mesos / AP Reset)`
          )
        }
    }

    if (cleanMP < minMP) {
      return await interaction.reply(
        `Your MP is below the minimum MP for your job. Please check your Clean MP again`
      )
    } else {
      return await interaction.reply(
        `\nYou have ${extraMP.toLocaleString()} extra MP.\n` +
        `You can wash ${numOfWash.toLocaleString()} times and gain at least ${Math.floor(minHPGained).toLocaleString()} HP and on average ${Math.floor(avgHPGained).toLocaleString()} HP.\n` +
        `The cost of AP resets is: ${Math.ceil(aprNX * numOfWash).toLocaleString()} NX (${Math.ceil(aprNX * numOfWash / vote).toLocaleString()} days of voting) or ${Math.ceil(aprMeso * numOfWash).toLocaleString()} mesos (${aprMeso.toLocaleString()} mesos / AP Reset)`
      )
    }
  },
};
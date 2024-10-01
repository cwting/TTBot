const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName(`mpwash`)
    .setDescription(`Calculates MP wash`)
    .addStringOption(job => job.setName(`job`).setDescription(`Enter your job`).setRequired(true).addChoices(
      { name: 'Beginner', value: 'beginner' },
      { name: 'Bowmaster', value: 'bowmaster' },
      { name: 'Marksman', value: 'marksman' },
      { name: 'Night Lord', value: 'night lord' },
      { name: 'Shadower', value: 'shadower' },
      { name: 'Buccaneer', value: 'buccaneer' },
      { name: 'Corsair', value: 'corsair' },
      // { name: 'Magician', value: 'magician' },
    ))
    .addIntegerOption(level => level.setName(`level`).setDescription(`Enter your level (value between 1 and 200)`).setMinValue(1).setMaxValue(200).setRequired(true))
    .addIntegerOption(baseINT => baseINT.setName(`baseint`).setDescription(`Enter your base int (value between 4 and 999)`).setMinValue(4).setMaxValue(999).setRequired(true))
    .addIntegerOption(hpGoal => hpGoal.setName(`hpgoal`).setDescription(`Enter your HP Goal (max value 30000)`).setMaxValue(30000).setRequired(true))
    .addIntegerOption(cleanHP => cleanHP.setName(`cleanhp`).setDescription(`Enter your clean HP (value between 1 and 30000)`).setMinValue(1).setMaxValue(30000).setRequired(true))
    .addIntegerOption(cleanMP => cleanMP.setName(`cleanmp`).setDescription(`Enter your clean MP (value between 1 and 30000)`).setMinValue(1).setMaxValue(30000).setRequired(true))
    .setDMPermission(true),

  async execute(interaction) {
    var job = await interaction.options.getString(`job`);
    var level = await interaction.options.getInteger(`level`);
    var baseINT = await interaction.options.getInteger(`baseint`);
    var hpGoal = await interaction.options.getInteger(`hpgoal`);
    var cleanHP = await interaction.options.getInteger(`cleanhp`);
    var cleanMP = await interaction.options.getInteger(`cleanmp`);
    var mpFromBaseINT = Math.floor(baseINT / 10);
    var minTotalWash = 0;
    var avgTotalWash = 0;

    switch (job) {
      case 'beginner':
        var minHPGain = 8;
        var avgHPGain = 10;
        var mpLoss = 8;
        var minMP = (10 * level) + 2;
        var extraMP = cleanMP - minMP;
        var minMPGain = 6; // beginner gains 6-8 mp
        var avgMPGain = 7; // beginner gains 6-8 mp

        // calculates HP in extra MP
        var minHPinExtraMP = extraMP / mpLoss * minHPGain;
        var avgHPinExtraMP = extraMP / mpLoss * avgHPGain;

        // calculates extra MP needed for HP goal
        var minHPToGoal = hpGoal - minHPinExtraMP - cleanHP;
        var avgHPToGoal = hpGoal - avgHPinExtraMP - cleanHP;
        var minMPforHPGoal = minHPToGoal / minHPGain * mpLoss;
        var avgMPforHPGoal = avgHPToGoal / avgHPGain * mpLoss;
        var minMPWashes = minMPforHPGoal / (mpFromBaseINT + minMPGain);
        var avgMPWashes = avgMPforHPGoal / (mpFromBaseINT + avgMPGain);

        // calculates extra MP needed for adding stats back
        var minMPforStat = minMPWashes * mpLoss;
        var avgMPforStat = avgMPWashes * mpLoss;
        var minStatWashes = minMPforStat / (mpFromBaseINT + minMPGain);
        var avgStatWashes = avgMPforStat / (mpFromBaseINT + avgMPGain);

        // total MP needed for washing HP + stats
        var totalMinWashes = minMPWashes + minStatWashes;
        var totalAvgWashes = avgMPWashes + avgStatWashes;
        break;

      case 'bowmaster':
      case 'marksman':
        var minHPGain = 16;
        var avgHPGain = 18;
        var mpLoss = 12;
        var minMP = (14 * level) + 148;
        var extraMP = cleanMP - minMP;
        var minMPGain = 10; // archer gains 10-12 mp
        var avgMPGain = 11; // archer gains 10-12 mp

        // calculates HP in extra MP
        var minHPinExtraMP = extraMP / mpLoss * minHPGain;
        var avgHPinExtraMP = extraMP / mpLoss * avgHPGain;

        // calculates extra MP needed for HP goal
        var minHPToGoal = hpGoal - minHPinExtraMP - cleanHP;
        var avgHPToGoal = hpGoal - avgHPinExtraMP - cleanHP;
        var minMPforHPGoal = minHPToGoal / minHPGain * mpLoss;
        var avgMPforHPGoal = avgHPToGoal / avgHPGain * mpLoss;
        var minMPWashes = minMPforHPGoal / (mpFromBaseINT + minMPGain);
        var avgMPWashes = avgMPforHPGoal / (mpFromBaseINT + avgMPGain);

        // calculates extra MP needed for adding stats back
        var minMPforStat = minMPWashes * mpLoss;
        var avgMPforStat = avgMPWashes * mpLoss;
        var minStatWashes = minMPforStat / (mpFromBaseINT + minMPGain);
        var avgStatWashes = avgMPforStat / (mpFromBaseINT + avgMPGain);

        // total MP needed for washing HP + stats
        var totalMinWashes = minMPWashes + minStatWashes;
        var totalAvgWashes = avgMPWashes + avgStatWashes;
        break;

      case 'night lord':
      case 'shadower':
        var minHPGainFresh = 20;
        var avgHPGainFresh = 22;
        var mpLoss = 12;
        var minMP = (14 * level) + 148;
        var extraMP = cleanMP - minMP;
        var minMPGain = 10; // thief gains 10-12 mp
        var avgMPGain = 11; // thief gains 10-12 mp

        // calculates HP in extra MP
        var minHPinExtraMP = extraMP / mpLoss * minHPGainFresh;
        var avgHPinExtraMP = extraMP / mpLoss * avgHPGainFresh;

        // calculates extra MP needed for HP goal
        var minHPToGoal = hpGoal - minHPinExtraMP - cleanHP;
        var avgHPToGoal = hpGoal - avgHPinExtraMP - cleanHP;
        var minMPforHPGoal = minHPToGoal / minHPGainFresh * mpLoss;
        var avgMPforHPGoal = avgHPToGoal / avgHPGainFresh * mpLoss;
        var minMPWashes = minMPforHPGoal / (mpFromBaseINT + minMPGain);
        var avgMPWashes = avgMPforHPGoal / (mpFromBaseINT + avgMPGain);

        // calculates extra MP needed for adding stats back
        var minMPforStat = minMPWashes * mpLoss;
        var avgMPforStat = avgMPWashes * mpLoss;
        var minStatWashes = minMPforStat / (mpFromBaseINT + minMPGain);
        var avgStatWashes = avgMPforStat / (mpFromBaseINT + avgMPGain);

        // total MP needed for washing HP + stats
        var totalMinWashes = minMPWashes + minStatWashes;
        var totalAvgWashes = avgMPWashes + avgStatWashes;


        if (cleanMP < minMP) {
          return await interaction.reply(
            `Your MP is below the minimum MP for your job. Please check your Clean MP again`
          )
        } else {
          return await interaction.reply(
            `**Values are calculated under the assumption that Fresh AP is being used, instead of APR\n**` +
            `job = ${job}\n` +
            `level = ${level}\n` +
            `baseINT = ${baseINT}\n` +
            `hpGoal = ${hpGoal}\n` +
            `cleanHP = ${cleanHP}\n` +
            `cleanMP = ${cleanMP}\n` +
            `mpFromBaseINT = ${mpFromBaseINT}\n` +
            `minHPinExtraMP = ${minHPinExtraMP}\n` +
            `avgHPinExtraMP = ${avgHPinExtraMP}\n` +
            `minMPWashes = ${minMPWashes}\n` +
            `avgMPWashes = ${avgMPWashes}\n` +
            `minStatWashes = ${minStatWashes}\n` +
            `avgStatWashes = ${avgStatWashes}\n` +
            `totalMinWashes = ${totalMinWashes}\n` +
            `totalAvgWashes = ${totalAvgWashes}\n`
          )
        }

      case 'buccaneer':
        var hpGainAPR = 40;
        var mpLoss = 16;
        var minMP = (18 * level) + 111;
        var extraMP = cleanMP - minMP;
        var minMPGain = 10; // bucc gains 10-12 mp
        var avgMPGain = 11; // bucc gains 10-12 mp

        // calculates HP in extra MP
        var HPinExtraMP = extraMP / mpLoss * hpGainAPR;

        // calculates extra MP needed for HP goal
        var HPToGoal = hpGoal - HPinExtraMP - cleanHP;
        var MPforHPGoal = HPToGoal / hpGainAPR * mpLoss;
        var minMPWashes = MPforHPGoal / (mpFromBaseINT + minMPGain);
        var avgMPWashes = MPforHPGoal / (mpFromBaseINT + avgMPGain);

        // calculates extra MP needed for adding stats back
        var minMPforStat = minMPWashes * mpLoss;
        var avgMPforStat = avgMPWashes * mpLoss;
        var minStatWashes = minMPforStat / (mpFromBaseINT + minMPGain);
        var avgStatWashes = avgMPforStat / (mpFromBaseINT + avgMPGain);

        // total MP needed for washing HP + stats
        var totalMinWashes = minMPWashes + minStatWashes;
        var totalAvgWashes = avgMPWashes + avgStatWashes;

        if (cleanMP < minMP) {
          return await interaction.reply(
            `Your MP is below the minimum MP for your job. Please check your Clean MP again`
          )
        } else {
          return await interaction.reply(
            `**Values are calculated under the assumption that APR is being used, instead of Fresh AP**\n` +
            `job = ${job}\n` +
            `level = ${level}\n` +
            `baseINT = ${baseINT}\n` +
            `hpGoal = ${hpGoal}\n` +
            `cleanHP = ${cleanHP}\n` +
            `cleanMP = ${cleanMP}\n` +
            `mpFromBaseINT = ${mpFromBaseINT}\n` +
            `minMPWashes = ${minMPWashes}\n` +
            `avgMPWashes = ${avgMPWashes}\n` +
            `minStatWashes = ${minStatWashes}\n` +
            `avgStatWashes = ${avgStatWashes}\n` +
            `totalMinWashes = ${totalMinWashes}\n` +
            `totalAvgWashes = ${totalAvgWashes}\n`
          )
        }

      case 'corsair':
        var hpGainAPR = 20;
        var mpLoss = 16;
        var minMP = (18 * level) + 111;
        var extraMP = cleanMP - minMP;
        var minMPGain = 10; // corsair gains 10-12 mp
        var avgMPGain = 11; // corsair gains 10-12 mp

        // // calculates HP in extra MP
        // var HPinExtraMP = extraMP / mpLoss * hpGainAPR;

        // // calculates extra MP needed for HP goal
        // var HPToGoal = hpGoal - HPinExtraMP - cleanHP;
        // var MPforHPGoal = HPToGoal / hpGainAPR * mpLoss;
        // var minMPWashes = MPforHPGoal / (mpFromBaseINT + minMPGain);
        // var avgMPWashes = MPforHPGoal / (mpFromBaseINT + avgMPGain);

        // // calculates extra MP needed for adding stats back
        // var minMPforStat = minMPWashes * mpLoss;
        // var avgMPforStat = avgMPWashes * mpLoss;
        // var minStatWashes = minMPforStat / (mpFromBaseINT + minMPGain);
        // var avgStatWashes = avgMPforStat / (mpFromBaseINT + avgMPGain);

        // // total MP needed for washing HP + stats
        // var totalMinWashes = minMPWashes + minStatWashes;
        // var totalAvgWashes = avgMPWashes + avgStatWashes;

        // calculates HP in extra MP from levels
        var hpInExtraMP = Math.floor(extraMP / mpLoss * hpGainAPR);

        // calculates extra MP needed for HP goal
        var additionalHPToGoal = hpGoal - hpInExtraMP - cleanHP;
        var extraMPforAdditionalHP = additionalHPToGoal / hpGainAPR * mpLoss;
        var minMPWashForAdditionHP = Math.floor(extraMPforAdditionalHP / (mpFromBaseINT + minMPGain));
        var avgMPWashForAdditionHP = Math.floor(extraMPforAdditionalHP / (mpFromBaseINT + avgMPGain));

        // calculates extra MP needed for adding back stat
        var minExtraMPforAdditionalStat = minMPWashForAdditionHP * mpLoss;
        var avgExtraMPforAdditionalStat = avgMPWashForAdditionHP * mpLoss;
        var minMPWashforStats = Math.ceil(minExtraMPforAdditionalStat / (mpFromBaseINT + minMPGain));
        var avgMPWashforStats = Math.ceil(avgExtraMPforAdditionalStat / (mpFromBaseINT + avgMPGain));

        minTotalWash += minMPWashforStats;
        avgTotalWash += avgMPWashforStats;

        let minTotalWashBEFOREWHILE = minTotalWash;
        let avgTotalWashBEFOREWHILE = avgTotalWash;

        while (minMPWashforStats > 1) {
          minMPWashforStats = Math.ceil(minMPWashforStats * mpLoss / (mpFromBaseINT + minMPGain));
          minTotalWash += minMPWashforStats;
        }

        while (avgMPWashforStats > 1) {
          avgMPWashforStats = Math.ceil(avgMPWashforStats * mpLoss / (mpFromBaseINT + avgMPGain));
          avgTotalWash += avgMPWashforStats;
        }

        minTotalWash += minMPWashForAdditionHP;
        avgTotalWash += avgMPWashForAdditionHP;

        if (cleanMP < minMP) {
          return await interaction.reply(
            `Your MP is below the minimum MP for your job. Please check your Clean MP again`
          )
        } else {
          return await interaction.reply(
            `Last updated 2 aug meep\n`+
            `**Values are calculated under the assumption that APR is being used, instead of Fresh AP**\n` +
            `job = ${job}\n` +
            `level = ${level}\n` +
            `baseINT = ${baseINT}\n` +
            `hpGoal = ${hpGoal}\n` +
            `cleanHP = ${cleanHP}\n` +
            `cleanMP = ${cleanMP}\n` +
            `mpFromBaseINT = ${mpFromBaseINT}\n` +
            `hpInExtraMP: ${hpInExtraMP}\n` +
            `additionalHPToGoal: ${additionalHPToGoal}\n` +
            `minMPWashForAdditionHP: ${minMPWashForAdditionHP}\n` +
            `avgMPWashForAdditionHP: ${avgMPWashForAdditionHP}\n` +
            `minExtraMPforAdditionalStat: ${minExtraMPforAdditionalStat}\n` +
            `avgExtraMPforAdditionalStat: ${avgExtraMPforAdditionalStat}\n` +
            `minMPWashforStats: ${minMPWashforStats}\n` +
            `avgMPWashforStats: ${avgMPWashforStats}\n` +
            `minTotalWashBEFOREWHILE: ${minTotalWashBEFOREWHILE}\n` +
            `avgTotalWashBEFOREWHILE: ${avgTotalWashBEFOREWHILE}\n` +
            `minTotalWash: ${minTotalWash}\n` +
            `avgTotalWash: ${avgTotalWash}\n`
          )
        }


      // case 'magician':
      //   var minHPGain = 10;
      //   var avgHPGain = 15;
      //   var mpLossS0 = 20;
      //   var mpLossS10 = 30;
      //   var minMP = (22 * level) + 488;
      //   var extraMP = cleanMP - minMP;
      //   // Improved MaxMP = 0
      //   var numOfWashS0 = Math.floor(extraMP / mpLossS0);
      //   var minHPGainedS0 = numOfWashS0 * minHPGain;
      //   var avgHPGainedS0 = numOfWashS0 * avgHPGain;
      //   // Improved MaxMP = 10
      //   var numOfWashS10 = Math.floor(extraMP / mpLossS10);
      //   var minHPGainedS10 = numOfWashS10 * minHPGain;
      //   var avgHPGainedS10 = numOfWashS10 * avgHPGain;

      //   if (cleanMP < minMP) {
      //     return await interaction.reply(
      //       `Your MP is below the minimum MP for your job. Please check your Clean MP again`
      //     )
      //   } else {
      //     return await interaction.reply(
      //       `\nYou have ${extraMP.toLocaleString()} extra MP.\n` +
      //       '**If your `Improved MaxMP Increase skill` is level 0:**\n' +
      //       `You can wash ${numOfWashS0.toLocaleString()} times and gain at least ${Math.floor(minHPGainedS0).toLocaleString()} HP and on average ${Math.floor(avgHPGainedS0).toLocaleString()} HP.\n` +
      //       `The cost of AP resets will be: ${Math.ceil(aprNX * numOfWashS0).toLocaleString()} NX (${Math.ceil(aprNX * numOfWashS0 / vote).toLocaleString()} days of voting) or ${Math.ceil(aprMeso * numOfWashS0).toLocaleString()} mesos (${aprMeso.toLocaleString()} mesos / AP Reset)\n` +
      //       '**If your `Improved MaxMP Increase skill` is level 10:**\n' +
      //       `You can wash ${numOfWashS10.toLocaleString()} times and gain at least ${Math.floor(minHPGainedS10).toLocaleString()} HP and on average ${Math.floor(avgHPGainedS10).toLocaleString()} HP.\n` +
      //       `The cost of AP resets will be: ${Math.ceil(aprNX * numOfWashS10).toLocaleString()} NX (${Math.ceil(aprNX * numOfWashS10 / vote).toLocaleString()} days of voting) or ${Math.ceil(aprMeso * numOfWashS10).toLocaleString()} mesos (${aprMeso.toLocaleString()} mesos / AP Reset)`
      //     )
      //   }
    }

    if (cleanMP < minMP) {
      return await interaction.reply(
        `${cleanMP} ${minMP}Your MP is below the minimum MP for your job. Please check your Clean MP again.`
      )
    } else {
      return await interaction.reply(
        `job = ${job}\n` +
        `level = ${level}\n` +
        `baseINT = ${baseINT}\n` +
        `hpGoal = ${hpGoal}\n` +
        `cleanHP = ${cleanHP}\n` +
        `cleanMP = ${cleanMP}\n` +
        `mpFromBaseINT = ${mpFromBaseINT}\n` +
        `minHPinExtraMP = ${minHPinExtraMP}\n` +
        `avgHPinExtraMP = ${avgHPinExtraMP}\n` +
        `minMPWashes = ${minMPWashes}\n` +
        `avgMPWashes = ${avgMPWashes}\n` +
        `minStatWashes = ${minStatWashes}\n` +
        `avgStatWashes = ${avgStatWashes}\n` +
        `totalMinWashes = ${totalMinWashes}\n` +
        `totalAvgWashes = ${totalAvgWashes}\n`
      )
    }
  }
}

// function calculateMinAvgMP() {

// }

// function calculateAPRMP() {

// }

// function calculateFreshAPMP() {
  
// }
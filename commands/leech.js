const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName(`leech`)
    .setDescription(`Leeching Guide`)
    .setDMPermission(true),

  async execute(interaction) {
    await interaction.reply(`
Lv 10-20: Bubbling [Kerning City Subway: Line 1 Area <1>
Lv 20-25: Wild Boar [Hidden Street: The Land of WildBoar I]
Lv 21-30: Genin [Zipangu: Castle Corridor (First map after Zipangu: Inside the Castle Gate)]
Lv 25-30: Brown Teddy, Pink Teddy [Ludibrium: Terrace Hall]
Lv 30-36: Jr. Wraith [Kerning Line 1 Area 2]
Lv 36-41: Platoon Chronos [Ludibrium: The Path of Time <1>]
Lv 41-43: Master Chronos [Ludibrium: The Path of Time <4>]
Lv 43-51: Wraith [Kerning City Subway: Line 1 Area <4>]
Lv 51-53: Oly Oly, Dark Fission [Malaysia: Muddy Banks 1]
Lv 53-56: Neo Huroid [Alcadno Research Institute: Lab - Area C-3]
Lv 56-65: Rodeo [Malaysia: Muddy Banks 2]
Lv 65-67: Windraiders [Crimsonwood Keep: Tornado Corridor]
Lv 67-75: Froscola, Jester Scarlion [Malaysia: Fantasy Theme Park 1]
Lv 75-78: Stormbreaker [Crimsonwood Keep: Stormhall]
Lv 78-85: Harp, Blood Harp [Leafre: Sky Nest II]
Lv 85-90: Berserkie, Veetron [Singapore: Ulu Estate 1]
Lv 90-105: Veetron, Slygie [Singapore: Ulu Estate 2]
Lv 105+: Petrifighter [Singapore: Ulu City Center]
Lv 108+: Skelegon, Skelosaurus [Leafre: The Dragon Nest Left Behind]\n
**Details from: https://mapleroyals.com/forum/threads/leeching-guide-updated-2021.145533/**
    `);
  },
};
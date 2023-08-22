const fs = require('fs');
const path = require('path');
const { Client, Collection, GatewayIntentBits } = require('discord.js');
const cron = require('cron');


const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	// Set a new item in the Collection
	// With the key as the command name and the value as the exported module
	client.commands.set(command.data.name, command);
}

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
  client.user.setActivity('/tthelp');

	/* CRONJOB TIMEZONE = UTC */
  /* ------------------------------- Channels ------------------------------- */

  /*
    // get channel id
    const eventCh = client.channels.cache.get('CH_ID');
    const event1 = new cron.CronJob('ss mm hh * * *', () => {
        eventCh.send(`<@&${'ROLE_ID'}>, hi!`);
    });

    event1.start();
  */

    // HEROIC'S VOTE REMINDER
    const heroicVoteCh = client.channels.cache.get('1044984117646872636');
    const heroicVoteReminder = new cron.CronJob('0 0 0 * * *', () => {
      heroicVoteCh.send(`<@&${'1044610951917342790'}>, it's time to vote!`)
    });
    heroicVoteReminder.start();

  /* ------------------------------- DMs ------------------------------- */

  // // Mike 
  // let mikeVote = new cron.CronJob('0 0 0 * * *', () => {
  //   client.users.fetch('245522553173442560').then(mikeVoteMsg => {
  //     mikeVoteMsg.send('Time to vote :3')
  //   })
  // })
  // mikeVote.start();

  // // Ant
  // let antVote = new cron.CronJob('0 0 16 * * *', () => {
  //   client.users.fetch('518100094839685130').then(antVoteMsg => {
  //     antVoteMsg.send('Time to vote UwU')
  //   })
  // })
  // antVote.start();
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const command = interaction.client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});

const heroicArray = [`king`, `queen`];
client.on('messageCreate', async message => {
  if (message.author.bot) return
  var heroicChance = Math.random();
  if (heroicChance <= 0.4 && heroicArray.some(heroic => message.content.toLowerCase().includes(heroic))) {
    return await message.reply(`No you!`)
  }
})

// Login to Discord with your client's token
client.login(process.env.TOKEN);
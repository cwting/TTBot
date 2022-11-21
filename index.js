const fs = require('node:fs');
const path = require('node:path');
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

	// My Test 
  let bellVote = new cron.CronJob('0 0 0 * * *', () => {
    client.users.fetch('409686858826514432').then(bellVoteMsg => {
      bellVoteMsg.send('Time to vote :3')
    })
  })
  bellVote.start();

	/* CRONJOB TIMEZONE = UTC */
  /* ------------------------------- Channels ------------------------------- */

  /*
      // get channel id
      const eventCh = bot.channels.cache.get('CH_ID');
      const event1 = new cron.CronJob('ss mm hh * * *', () => {
          eventCh.send(`<@&${'ROLE_ID'}>, hi!`);
      });

      event1.start();
  */

  /* ------------------------------- DMs ------------------------------- */

  // // Mike 
  // let mikeVote = new cron.CronJob('0 0 0 * * *', () => {
  //   bot.users.fetch('245522553173442560').then(mikeVoteMsg => {
  //     mikeVoteMsg.send('Time to vote :3')
  //   })
  // })
  // mikeVote.start();

  // // Ant
  // let antVote = new cron.CronJob('0 0 16 * * *', () => {
  //   bot.users.fetch('518100094839685130').then(antVoteMsg => {
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

// Login to Discord with your client's token
client.login(process.env.TOKEN);
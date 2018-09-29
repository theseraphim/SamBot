const commando = require('discord.js-commando');

class DiceRollCommand extends commando.Command
{
    constructor(client)
    {
        super(client, {
            name: 'roll',
            group: 'simple',
            memberName: 'roll',
            description: 'Rolls a six-sided dice'
        });
    }

    async run(message, args)
    {
        var diceRoll = Math.floor(Math.random() * 100) + 1;
        message.reply("You rolled a " + diceRoll);
    }
}

module.exports = DiceRollCommand;
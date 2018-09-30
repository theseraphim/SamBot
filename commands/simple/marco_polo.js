const commando = require('discord.js-commando');

class marcoPoloCommand extends commando.Command
{
    constructor(client)
    {
        super(client, {
            name: 'marco',
            group: 'simple',
            memberName: 'marco',
            description: 'Plays Marco Polo!'
        });
    }

    async run(message, args)
    {
        message.reply("Polo!");
    }
}

module.exports = marcoPoloCommand;
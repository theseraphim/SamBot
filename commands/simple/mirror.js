const commando = require('discord.js-commando');

class MirrorCommand extends commando.Command
{
    constructor(client)
    {
        super(client, {
            name: 'mirror',
            group: 'simple',
            memberName: 'mirror',
            description: 'Looks at your reflection in a mirror!'
        });
    }

    async run(message, args)
    {
        message.reply(message.author.avatarURL);
    }
}

module.exports = MirrorCommand;
module.exports = {
    name: 'poll',
    description: '',
    aliases: ['p'],
    args_needed: true,
    args_min_length: 2,
    usage: '[question] [option1] [option2] ...',
    guild_only: true,
    need_permission: ['SEND_MESSAGES', 'ADD_REACTIONS'],
    disabled: false,
    enable_slash: true,
    async execute(msg, args) {

    },
};

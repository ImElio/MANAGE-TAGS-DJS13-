const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS] });

// Insert roles ID in '' - (Example: '1211717727899615293': '[TAG_NAME] ',)
const rolePrefixMap = {
    '': '[VIP] ',
    '': '[VIP+] ',
    '': '[VIP+++] ',
    '': '[MVP] ',
    '': '[MVP+] ',
    '': '[MVP++] ',
    '': '[MVP+++] ',
    '': '[RICH MEMBER] ',
    '': '[DISCORD MODS] ',
    '': '[SUPREME] ',
    '': '[BIG VIP] ',
    '': '[??] ',
    '': '[PASS VIP] ',
    '': '[BATTLEPASS] ',
    '': '[BUYING] ',
    '': '[PASS+] ',
    '': '[PASS+++] ',
    '': '[NoVIP] ',
    '': '[MASTER] ',
//                    <--- Add Here More Prefix!
};

    // LIST TEMPLATE

    //'': '[TAG_NAME] ',
    //'': '[TAG_NAME] ',
    //'': '[TAG_NAME] ',
    //'': '[TAG_NAME] ',
    //'': '[TAG_NAME] ',
    //'': '[TAG_NAME] ',
    //'': '[TAG_NAME] ',
    //'': '[TAG_NAME] ',
    //'': '[TAG_NAME] ',
    //'': '[TAG_NAME] ',



client.on('guildMemberUpdate', async (oldMember, newMember) => {
    const addedRoles = newMember.roles.cache.filter(role => !oldMember.roles.cache.has(role.id));
    const removedRoles = oldMember.roles.cache.filter(role => !newMember.roles.cache.has(role.id));
    const globalName = newMember.user.global_name || newMember.user.username;

    const updateNickname = async (prefix) => {
        const newNickname = `${prefix}${globalName}`;
        try {
            if (newMember.guild.members.me.permissions.has('MANAGE_NICKNAMES')) {
                await newMember.setNickname(newNickname);
                console.log(`Updated nickname for ${globalName} to ${newNickname}`);
            } else {
                console.error(`Bot does not have permission to manage nicknames in this guild.`);
            }
        } catch (error) {
            console.error(`Failed to update nickname for ${globalName}:`, error);
        }
    };


    const resetNickname = async () => {
        try {
            if (newMember.guild.members.me.permissions.has('MANAGE_NICKNAMES')) {
                await newMember.setNickname('');
                console.log(`Reset nickname for ${newMember.user.username}`);
            } else {
                console.error(`Bot does not have permission to manage nicknames in this guild.`);
            }
        } catch (error) {
            console.error(`Failed to reset nickname for ${newMember.user.username}:`, error);
        }
    };

    for (const [roleId, prefix] of Object.entries(rolePrefixMap)) {
        if (addedRoles.has(roleId)) {
            await updateNickname(prefix);
        } else if (removedRoles.has(roleId)) {
            const otherRoles = newMember.roles.cache.filter(role => Object.keys(rolePrefixMap).includes(role.id));
            if (otherRoles.size === 0) {
                await resetNickname();
            }
        }
    }
});

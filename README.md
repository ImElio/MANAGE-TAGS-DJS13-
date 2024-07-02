# Discord Role Prefix Bot

This Discord bot automatically updates user nicknames based on assigned roles in a Discord server. It adds specified prefixes to nicknames when users gain certain roles and removes them when those roles are removed.

## How It Works

The bot listens for `guildMemberUpdate` events, which trigger whenever a member's roles are modified. It then checks for added or removed roles compared to the member's previous state and updates the nickname accordingly.

## Setup

### Prerequisites

- Node.js installed on your local machine.
- Discord Bot token obtained from the Discord Developer Portal.

### Installation

1. Clone the repository or create a new Node.js project.

Put this in the terminal (`Ctrl+ò`)
1. `git clone https://github.com/imelio/manage-tags-djs13-.git`
2. `cd discord-role-bot`

Install dependencies using npm:


### Configuration

1. Replace placeholders in the `rolePrefixMap` object in `index.js` with actual role IDs and corresponding prefixes.

```javascript
const rolePrefixMap = {
    'role_id_here': '[VIP] ',
    'another_role_id_here': '[MVP] ',
    // Add more role IDs and prefixes as needed
};
```
After this run the bot by simply command in the terminal (`Ctrl+ò`)
`node index.js`


# Feel free to use this Markdown template directly for your GitHub repository.

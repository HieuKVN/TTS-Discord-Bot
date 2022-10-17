# Simple Discord TTS Bot
This Discord bot allows users to talk in a voice chat without the use of a microphone. With the use of a Text to Speech service such as IBM Watson, it's possible to convert a Discord user's text messages to speech.

-----------
## **Installation**
These steps will get you up and running as soon as possible.

**General installation**:

Follow these steps to install the bot regardless of your platform.

1. Clone this repository.
2. Install the NodeJS dependencies by running the `npm i` command in a terminal window. This will install all of the needed NodeJS libraries that are listed in the `package.json` file.
3. Edit the following variables in the `index.js` file:
    - `PREFIX`: Changing this is optional, but you can change your Discord bot's prefix if you want
    - `TOKEN`: Your Discord bot's token
        - Can be found on your [Discord developer portal](https://discord.com/developers/applications)
        
## Notes
- Dependencies: [discord.js](https://www.npmjs.com/package/discord.js), [ffmpeg](https://www.npmjs.com/package/ffmpeg-static), [google-tts-api](https://www.npmjs.com/package/google-tts-api) and [libsodium-wrappers](https://www.npmjs.com/package/libsodium-wrappers)
-----------
## Bot commands

`"PREFIX"say <text>` - Says text out loud

-----------
## END

From HieuK With Love <3

# Simple Discord TTS Bot

This Discord bot allows users to communicate in a voice chat without needing a microphone. By utilizing a Text to Speech service, such as Google TTS, the bot can convert a user's text messages into speech.

---

## **Installation**

Follow these steps to get the bot up and running quickly.

### General Installation:

1. Clone this repository to your local machine.
2. Open a terminal window and navigate to the cloned directory.
3. Install the required NodeJS dependencies by running the command:
   ```
   npm install
   ```
4. Configure the bot by editing the `config.json` file:
   - `TOKEN`: Your Discord bot's token, which can be found on your [Discord developer portal](https://discord.com/developers/applications)
   - `PREFIX`: (Optional) Change the bot's command prefix if desired

## **Dependencies**

The bot relies on the following NodeJS libraries:

- [discord.js](https://www.npmjs.com/package/discord.js)
- [ffmpeg-static](https://www.npmjs.com/package/ffmpeg-static)
- [google-tts-api](https://www.npmjs.com/package/google-tts-api)
- [libsodium-wrappers](https://www.npmjs.com/package/libsodium-wrappers)

## **Bot Commands**

- `"PREFIX"ping` - Responds with "Pong!"
- `"PREFIX"speak <text>` - Converts the provided text to speech and plays it in the voice channel

## **Notes**

- Ensure that the bot has the necessary permissions to join and speak in voice channels.
- The text for the `speak` command should be less than 200 characters.

## **Credits**

From HieuK With Love <3

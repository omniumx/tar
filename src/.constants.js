module.exports = Object.freeze({
  TOKEN: '2006627581:AAFhZYx2OD7Q-PZ_XeB8sjCPQ-Yt472xhPY',
  ARIA_SECRET: 'stazholicindustries42069',
  ARIA_DOWNLOAD_LOCATION: 'downloads/',
  ARIA_DOWNLOAD_LOCATION_ROOT: '/', //The mountpoint that contains ARIA_DOWNLOAD_LOCATION
  ARIA_FILTERED_DOMAINS: ['yts', 'YTS', 'cruzing.xyz', 'eztv.ag', 'YIFY'], // Prevent downloading from URLs containing these substrings
  ARIA_FILTERED_FILENAMES: ['YIFY'], // Files/top level directories with these substrings in the filename won't be downloaded
  ARIA_PORT: 8210, // Port for aria2c RPC server, if you change this here, make sure to update aria.sh as well
  GDRIVE_PARENT_DIR_ID: '1z_K2WUF2sHpnN1jTY1pIqPfUAeCUx72P',
  SUDO_USERS: [1997340590, 912107101],	// Telegram user IDs. These users can use the bot in any chat.
  AUTHORIZED_CHATS: [-1001220179392],	// Telegram chat IDs. Anyone in these chats can use the bot.
  STATUS_UPDATE_INTERVAL_MS: 5000, // A smaller number will update faster, but might cause rate limiting
  DRIVE_FILE_PRIVATE: {
    ENABLED: false,
    EMAILS: ['someMail@gmail.com', 'someOtherMail@gmail.com']
  },
  DOWNLOAD_NOTIFY_TARGET: {  // Information about the web service to notify on download completion.
    enabled: True,   // Set this to true to use the notify functionality
    host: 'hostname.domain',
    port: 80,
    path: '/botNotify'
  },
  COMMANDS_USE_BOT_NAME: {
    ENABLED: True,  // If true, all commands except '/list' has to have the bot username after the command
    NAME: "@mommyboa_bot"
  },
  IS_TEAM_DRIVE: True,
  USE_SERVICE_ACCOUNT: True,
  INDEX_DOMAIN: "" // add an extra / at the end, for example https://www.gdindex.url/
});

module.exports = class MessageHandler {

    constructor() {
        /**
         *
         * @type {TextChannel}
         */
        this.mainChannel = null;

        /**
         *
         * @type {VoiceConnection}
         */
        this.connection = null;
    }

    /**
     *
     * @param message {Message}
     * @returns {Promise<void>}
     */
    async handle(message) {
        if (message.author.bot) {
            return;
        }

        if (message.content === '/t2s connect') {
            if (message.member.voice.channel) {
                this.connection = await message.member.voice.channel.join();
                this.mainChannel = message.channel;
            }

            return;
        }

        if (message.content === '/t2s disconnect') {
            if (this.connection) {
                this.connection.disconnect();
            }

            return;
        }

        if (message.channel === this.mainChannel && this.connection) {
            let content = message.content;
            await this.mainChannel.send(content);

            return;
        }
    }
}
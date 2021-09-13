const Helper = codecept_helper;
const twilio = require('twilio');

class TwilioHelper extends Helper {

    constructor(config) {
        super(config);
        if (!config.accountID) {
            throw new Error('Twilio Helper is not configured! Please provide accountID');
        }

        if (!config.authToken) {
            throw new Error('Twilio Helper is not configured! Please provide authToken');
        }
        this.accountSid = this.config.accountID;
        this.authToken = this.config.authToken;
    }

    async readSMS(sentAfter, sentTo){
        const client = twilio(this.accountSid, this.authToken);
        let message = await client.messages
            .list({
                to: sentTo,
                direction: 'inbound',
                dateSentAfter: sentAfter
            })
            .then(messages => messages[0].body)
            .catch(e => { console.error('Got an error:', e.code, e.message); });
        return message;
    }
}
module.exports = TwilioHelper;
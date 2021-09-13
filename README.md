# Twilio Helper for CodeceptJS
Helper for using Twilio library to use Twilio Online Mobile Numbers and OTP based Authentication

## Installation
```
npm i codeceptjs-twiliohelper --save
```

## Configuration
```
{
  //...
   helpers: {
    TwilioHelper: {
          require: "codeceptjs-twiliohelper",
          accountID: process.env.TWILIO_ACCOUNT_ID,
          authToken: process.env.TWILIO_ACCOUNT_AUTH_TOKEN,
        },
  //...
}
```

## Usage

After installing the node modules, inside your codeceptjs tests, use:
```
I.readSMS(sentAfter, "+XXXXXX");
```
The first parameter is a timestamp when the SMS OTP was triggered, the second parameter
is the mobile number to which the SMS is sent, this will allow Twilio SDK to read
Inbound SMS for this number post the timestamp.

Please Note: readSMS returns only the most recent SMS post timestamp.

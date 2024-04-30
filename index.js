const functions = require('firebase-functions');
const africastalking = require('africastalking')({
  apiKey: process.env.API_KEY, // Replace with your Africa's Talking API key
  username: process.env.USERNAME // Replace with your Africa's Talking username
});

// Initialize the SMS service
const sms = africastalking.SMS;

// Define your Cloud Function
exports.sendSMS = functions.https.onRequest((req, res) => {
  // Extract the phone number and message from the request body
  const {phoneNumber, message} = req.body;
  
  // Send the SMS
  sms.send({
      to: phoneNumber,
      message: message
    })
    .then(response => {
      console.log('SMS sent:', response);
      res.status(200).send('SMS sent successfully');
    })
    .catch(error => {
      console.error('Error sending SMS:', error);
      res.status(500).send('Error sending SMS');
    });
});
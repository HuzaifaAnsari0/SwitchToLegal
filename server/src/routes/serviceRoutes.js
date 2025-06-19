const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const twilio = require('twilio');
const Service = require('../models/Service');

// Configure email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Configure Twilio client for WhatsApp
const twilioClient = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

const twilioNumber = process.env.TWILIO_WHATSAPP_NUMBER
  .replace(/[\u200E\u200F\u200B]/g, '')  // remove invisible characters
  .replace(/[^\d+]/g, '')                // allow only + and digits
  .trim();

const adminNumber = process.env.ADMIN_WHATSAPP_NUMBER
  .replace(/[\u200E\u200F\u200B]/g, '')  // remove invisible characters
  .replace(/[^\d+]/g, '')                // allow only + and digits
  .trim();
  
router.post('/submit-service', async (req, res) => {
  try {
    const { name, mobile, email, address, referralCode, serviceType } = req.body;

    // Save to database
    const service = new Service({
      name,
      mobile,
      email,
      address,
      referralCode,
      serviceType,
      submissionDate: new Date()
    });
    await service.save();

    // Send email
    const emailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: `New ${serviceType} Service Request`,
      html: `
        <h2>New Service Request</h2>
        <p><strong>Service Type:</strong> ${serviceType}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Address:</strong> ${address}</p>
        ${referralCode ? `<p><strong>Referral Code:</strong> ${referralCode}</p>` : ''}
      `
    };
    await transporter.sendMail(emailOptions);

    // Send WhatsApp message
    await twilioClient.messages.create({
      body: `New ${serviceType} Service Request\nName: ${name}\nMobile: ${mobile}\nEmail: ${email}\nAddress: ${address}\n${referralCode ? `Referral Code: ${referralCode}` : ''}`,
      from: `whatsapp:${twilioNumber}`,
      to: `whatsapp:${adminNumber}`
    });

    res.status(200).json({ message: 'Service request submitted successfully' });
  } catch (error) {
    console.error('Error submitting service request:', error);
    res.status(500).json({ error: 'Failed to submit service request' });
  }
});

module.exports = router; 
const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const twilio = require('twilio');
const Service = require('../models/Service');

// // Configure email transporter
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS
//   }
// });

// // Configure Twilio client for WhatsApp
// const twilioClient = twilio(
//   process.env.TWILIO_ACCOUNT_SID,
//   process.env.TWILIO_AUTH_TOKEN
// );

// // Get all services
// router.get('/', async (req, res) => {
//     try {
//         const services = await Service.find({ isActive: true });
//         res.json(services);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });

// // Get service by URL slug
// router.get('/:urlSlug', async (req, res) => {
//     try {
//         const service = await Service.findOne({ 
//             urlSlug: req.params.urlSlug,
//             isActive: true 
//         });
        
//         if (!service) {
//             return res.status(404).json({ message: 'Service not found' });
//         }
        
//         res.json(service);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });

// // Create new service
// router.post('/', async (req, res) => {
//     try {
//         const service = new Service(req.body);
//         const newService = await service.save();
//         res.status(201).json(newService);
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// });

// // Update service
// router.put('/:id', async (req, res) => {
//     try {
//         const service = await Service.findByIdAndUpdate(
//             req.params.id,
//             req.body,
//             { new: true }
//         );
        
//         if (!service) {
//             return res.status(404).json({ message: 'Service not found' });
//         }
        
//         res.json(service);
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// });

// // Delete service
// router.delete('/:id', async (req, res) => {
//     try {
//         const service = await Service.findByIdAndDelete(req.params.id);
        
//         if (!service) {
//             return res.status(404).json({ message: 'Service not found' });
//         }
        
//         res.json({ message: 'Service deleted successfully' });
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });

// router.post('/submit-service', async (req, res) => {
//   try {
//     const { name, mobile, email, address, referralCode, serviceType } = req.body;

//     // Save to database
//     const service = new Service({
//       name,
//       mobile,
//       email,
//       address,
//       referralCode,
//       serviceType,
//       submissionDate: new Date()
//     });
//     await service.save();

//     // Send email
//     const emailOptions = {
//       from: process.env.EMAIL_USER,
//       to: process.env.ADMIN_EMAIL,
//       subject: `New ${serviceType} Service Request`,
//       html: `
//         <h2>New Service Request</h2>
//         <p><strong>Service Type:</strong> ${serviceType}</p>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Mobile:</strong> ${mobile}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Address:</strong> ${address}</p>
//         ${referralCode ? `<p><strong>Referral Code:</strong> ${referralCode}</p>` : ''}
//       `
//     };
//     await transporter.sendMail(emailOptions);

//     // Send WhatsApp message
//     await twilioClient.messages.create({
//       body: `New ${serviceType} Service Request\nName: ${name}\nMobile: ${mobile}\nEmail: ${email}`,
//       from: `whatsapp:${process.env.TWILIO_WHATSAPP_NUMBER}`,
//       to: `whatsapp:${process.env.ADMIN_WHATSAPP_NUMBER}`
//     });

//     res.status(200).json({ message: 'Service request submitted successfully' });
//   } catch (error) {
//     console.error('Error submitting service request:', error);
//     res.status(500).json({ error: 'Failed to submit service request' });
//   }
// });

module.exports = router; 
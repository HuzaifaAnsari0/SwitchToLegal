const express = require('express');
const router = express.Router();
const ServiceInfo = require('../models/serviceDetails');

// Get all service information
router.get('/', async (req, res) => {
    try {
        const services = await ServiceInfo.find({});
        res.json(services);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get service information by URL slug
router.get('/:serviceSlug', async (req, res) => {
    try {
        const serviceSlug = req.params.serviceSlug;
        //console.log('Looking for service with slug:', serviceSlug);
        
        const service = await ServiceInfo.findOne({ 
            urlSlug: serviceSlug
        });
        
        if (!service) {
            //console.log('Service not found for slug:', serviceSlug);
            return res.status(404).json({ message: 'Service not found' });
        }

        //console.log('Service found:', service);
        res.json(service);
    } catch (error) {
        console.error('Error finding service:', error);
        res.status(500).json({ message: error.message });
    }
});

// Create new service information
router.post('/', async (req, res) => {
    try {
        const service = new ServiceInfo(req.body);
        const newService = await service.save();
        res.status(201).json(newService);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Update service information
router.put('/:id', async (req, res) => {
    try {
        const service = await ServiceInfo.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        
        if (!service) {
            return res.status(404).json({ message: 'Service not found' });
        }
        
        res.json(service);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete service information
router.delete('/:id', async (req, res) => {
    try {
        const service = await ServiceInfo.findByIdAndDelete(req.params.id);
        
        if (!service) {
            return res.status(404).json({ message: 'Service not found' });
        }
        
        res.json({ message: 'Service deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router; 
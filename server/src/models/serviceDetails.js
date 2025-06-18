const mongoose = require('mongoose');

const serviceInfoSchema = new mongoose.Schema({
    serviceName: {
        type: String,
        required: true,
        unique: true,
    },

    urlSlug: {
        type: String,
        required: true,
        unique: true,
    },

    requiredDocuments: {
        type: [String], // Array of strings
        required: true,
    },

    faqs: [
        {
            question: { type: String, required: true },
            answer: { type: String, required: true },
        }
    ],
    description: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model('ServiceInfo', serviceInfoSchema);

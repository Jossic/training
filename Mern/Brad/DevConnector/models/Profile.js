const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },
    entreprise: {
        type: String,
    },
    website: {
        type: String,
    },
    adresse: {
        type: String,
    },
    // Junior, senior, formateur, etc
    statut: {
        type: String,
        required: true,
    },
    competences: {
        type: [String],
        required: true,
    },
    bio: {
        type: String,
    },
    github: {
        type: String,
    },
    experience: [
        {
            nom: {
                type: String,
                required: true,
            },
            entreprise: {
                type: String,
                required: true,
            },
            adresse: {
                type: String,
            },
            de: {
                type: Date,
                required: true,
            },
            a: {
                type: Date,
            },
            actuel: {
                type: Boolean,
                default: false,
            },
            description: {
                type: String,
            },
        }
    ],
    formation: [
        {
            etablissement: {
                type: String,
                required: true,
            },
            niveau: {
                type: String,
                required: true,
            },
            domaine: {
                type: String,
                required: true,
            },
            de: {
                type: Date,
                required: true,
            },
            a: {
                type: Date,
            },
            actuel: {
                type: Boolean,
                required: true,
            },
            description: {
                type: String,
            },
        }
    ],
    social: {
        youtube: {
            type: String
        },
        twitter: {
            type: String
        },
        facebook: {
            type: String
        },
        linkedin: {
            type: String
        },
        instagram: {
            type: String
        },
    },
    date: {
        type: Date,
        default: Date.now
    }
});


module.exports = Profile = mongoose.model('profile', ProfileSchema);
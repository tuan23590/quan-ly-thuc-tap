import mongoose from 'mongoose'

const internSchema = new mongoose.Schema({
        internId: {type: String},
        userId: {type: String},
        internName: {type: String},
        dateOfBirth: {type: String},
        classOfIntern: {type: String},
        department: {type: String},
        phone: {type: String},
        email: {type: String},
        avatarUrl: {type: String},
        status: {type: String},
},{timestamps: true})

const internModel = mongoose.model('intern',internSchema);
export default internModel;
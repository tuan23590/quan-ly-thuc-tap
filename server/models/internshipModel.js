import mongoose from 'mongoose'

const internshipSchema = new mongoose.Schema({
        internshipId: {type: String},
        companyId: {type: String},
        companyName: {type: String},
        position: {type: String},
        information: {type: String},
        subscribers:[{ type: String }],
        avatarUrl: {type: String},
},{timestamps: true})

const internshipModel = mongoose.model('internship',internshipSchema);
export default internshipModel;

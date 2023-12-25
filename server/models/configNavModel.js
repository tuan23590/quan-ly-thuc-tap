import mongoose from 'mongoose'

const navSchema = new mongoose.Schema({
        title: {type: String},
        path: {type: String},
        icon: {type: String},
        type:{type: String}
},{timestamps: true})

const configNavModel = mongoose.model('nav',navSchema);
export default configNavModel;
import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
        userId: {type: String, required: true},
        userName: {type: String},
        token: {type: String},
        sessionKey: {type: String},
        email: {type: String},
        type: {type: String}
},{timestamps: true})

const userModel = mongoose.model('user',userSchema);
export default userModel;
import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
        userId: {type: String, required: true},
        username: {type: String},
        token: {type: String},
        sessionKey: {type: String},
        type: {type: String}
},{Timestamp: true})

const userModel = mongoose.model('user',userSchema);
export default userModel;
import mongoose from 'mongoose'

const companySchema = new mongoose.Schema({
    companyId: { type :String, required: true},
    companyName: { type :String},
    email: { type :String},
    phone: { type :String},
    activityStatus: { type :String},
    businessRegistrationNumber: { type :String},
    legalEntityType: { type :String},
    incorporationDate: { type :String},
    nameOfLegalRepresentative: { type :String},
    mainOfficeAddress: { type :String},
    introduction: { type :String}
},{timestamps: true})

const companyModel = mongoose.model('company',companySchema);
export default companyModel;
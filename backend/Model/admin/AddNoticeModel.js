import mongoose from 'mongoose';


const NoticeSchema = new mongoose.Schema({
    notice1: {
        type: String,
        required: true,
        
    },
    notice2: {
        type: String,
       
        
    },
    notice3: {
        type: String,
       
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Notice = mongoose.model('Notice', NoticeSchema);

export default Notice;

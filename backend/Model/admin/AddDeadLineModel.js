import mongoose from 'mongoose';


const DeadLineSchema = new mongoose.Schema({
    deadline1: {
        type: String,
        required: true,
        
    },
    deadline2: {
        type: String,
       
        
    },
    deadline3: {
        type: String,
       
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const DeadLine = mongoose.model('DeadLine', DeadLineSchema);

export default DeadLine;

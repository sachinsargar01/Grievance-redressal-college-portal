import DeadLine from "../../Model/admin/AddDeadLineModel.js";



export const AddDeadLine = async (req, res) => {
    try {
        const {deadline1 , deadline2,  deadline3 } = req.body;

        console.log('Request received with data:', req.body);  // Log incoming data for debugging

     
        // Create a new complaint
        const newDeadLine = new DeadLine({
            deadline1,
            deadline2,
            deadline3,
        });

        // Save the complaint to the DB
        await newDeadLine.save();

        console.log('DeadLine saved successfully');  // Log successful save
        // Respond with a success message
        res.status(201).json({ msg: 'DeadLine submitted successfully!' });
    } catch (err) {
        console.error('Error submitting DeadLine:', err);  // Log the error for better debugging
        res.status(500).json({ msg: 'Failed to submit DeadLine. Please try again later.' });
    }
};



// GET endpoint to retrieve all complaints
export const getDeadLine = async (req, res) => {
    try {
        const deadLine = await DeadLine.find()
        .sort({createdAt:-1})  // Sort by 'throughput_date' in descending order
        .limit(1); 

        if (deadLine) {
            res.status(200).json(deadLine);
        } else {
            res.status(500).json({ msg: 'No DeadLine Found' });
        }

    } catch (err) {
        console.error('Error fetching DeadLine:', err);  // Log the error for better debugging
        res.status(500).json({ msg: 'Failed to retrieve DeadLine.' });
    }
};



// GET endpoint to retrieve all complaints
export const getAllDeadLine = async (req, res) => {
    try {
        const deadLine = await DeadLine.find();
    

        if (deadLine) {
            res.status(200).json(deadLine);
        } else {
            res.status(500).json({ msg: 'No DeadLine Found' });
        }

    } catch (err) {
        console.error('Error fetching DeadLine:', err);  // Log the error for better debugging
        res.status(500).json({ msg: 'Failed to retrieve DeadLine.' });
    }
};

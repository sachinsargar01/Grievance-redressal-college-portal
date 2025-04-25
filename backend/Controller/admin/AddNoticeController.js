import Notice from "../../Model/admin/AddNoticeModel.js";


export const AddNotice = async (req, res) => {
    try {
        const {notice1 , notice2,  notice3 } = req.body;

        console.log('Request received with data:', req.body);  // Log incoming data for debugging

     
        // Create a new complaint
        const newNotice = new Notice({
          notice1,
          notice2,
          notice3,
        });

        // Save the complaint to the DB
        await newNotice.save();

        console.log('Notice saved successfully');  // Log successful save
        // Respond with a success message
        res.status(201).json({ msg: 'Notice submitted successfully!' });
    } catch (err) {
        console.error('Error submitting Notice:', err);  // Log the error for better debugging
        res.status(500).json({ msg: 'Failed to submit Notice. Please try again later.' });
    }
};



// GET endpoint to retrieve all complaints
export const getNotice = async (req, res) => {
    try {
        const notice = await Notice.find()
        .sort({createdAt:-1})  // Sort by 'throughput_date' in descending order
        .limit(1); 

        if (notice) {
            res.status(200).json(notice);
        } else {
            res.status(500).json({ msg: 'No notice Found' });
        }

    } catch (err) {
        console.error('Error fetching notice:', err);  // Log the error for better debugging
        res.status(500).json({ msg: 'Failed to retrieve notice.' });
    }
};




// GET endpoint to retrieve all complaints
export const getAllNotice = async (req, res) => {
    try {
        const notice = await Notice.find();
       

        if (notice) {
            res.status(200).json(notice);
        } else {
            res.status(500).json({ msg: 'No notice Found' });
        }

    } catch (err) {
        console.error('Error fetching notice:', err);  // Log the error for better debugging
        res.status(500).json({ msg: 'Failed to retrieve notice.' });
    }
};



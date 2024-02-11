const record = require('../models/record')

exports.deleteRecord = async (req, res)=>{
    const { id } = req.params;
    try{
        const deletedRecord = await record.findByIdAndDelete(id);

        if (!deletedRecord) {
            return res.status(404).json({ message: 'Record not found' });
        }

        res.json({ message: 'Record deleted successfully' });
        
    }catch(err){
        res.status(500).send({status:"error with delete record", error:err.message})
    }
}
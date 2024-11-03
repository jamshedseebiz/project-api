const mongoose=require('mongoose');

const dbconnection  = async ()=>{

    try {  
        await mongoose.connect('mongodb://localhost:27017/mycrud',{
            
        });
        console.log('db is connected')
        
    } catch (error) {
console.log('Not connected')        
    }
};

module.exports =dbconnection;   
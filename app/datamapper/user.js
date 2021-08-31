const { signIn } = require('../controllers/userContoller.js');
const userModel = require('../models/userModels.js');
module.exports ={
    async findOne(name) {
        try {
            const result = await userModel.find({  name  });
            return result;
        } catch (error) {
            console.log(error)

        }
    },async checkUser(name){
        try {
            const result = await userModel.find({  name  });
            return result;
        } catch (error) {
            console.log(error)

        } 
    },async checkEmail(email){
        try {
            const result = await userModel.find({  email });
            return result;
        } catch (error) {
            console.log(error)

        } 
    }, async update(id){
        try {
            const password = "Tabernacle";
            const result = await userModel.findByIdAndUpdate(id, {password});
            await result.save();
            return result;
        } catch (error) {
            console.log(error)
        }
    }, async deleteAccount(id){
        try {            
        const result = await userModel.findByIdAndDelete(id);
        return result
        
        } catch (error) {
            console.log(error);
        }

    }

}
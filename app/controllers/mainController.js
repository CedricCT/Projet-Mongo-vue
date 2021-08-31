const userModel = require('../models/userModels.js');
module.exports ={
     async homePage (_, response)  {
        try {
            const test = await userModel.find({});
            response.json({
                nb: test.length,
                test
            });
        console.log(test)
        } catch (error) {
            console.log(error)
        }
    }
}
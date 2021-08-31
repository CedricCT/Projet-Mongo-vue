const userDatamapper = require('../datamapper/user');
const userModel = require('../models/userModels.js');
module.exports = {
    async getOne(req, res) {
        try {
            const user = await userDatamapper.findOne(req.params.name);
            res.json(user[0]);
        } catch (error) {
            console.log(error);

        }
    },
    async getAll(req, res) {
        try {
            const test = await userModel.find({});
            res.json(test);
            console.log(test);
        } catch (error) {
            console.log(error);
        }
    },
    async createUser(req, res) {
        // search if user name exist in database
        try {
            const findUser = await userDatamapper.checkUser(req.body.user);
            const findMail = await userDatamapper.checkEmail(req.body.email);

            if (findMail.length === 0 && findUser.length === 0) {
                console.log("Utilisateur create")
                const userCreate = new userModel(req.body);
                await userCreate.save();
                res.json({
                    message: "user create"
                });
            } else {
                res.status(500).json({
                    error: "email or username already use"
                });
            }

        } catch (error) {
            console.log(error);;
        }


    },
    async updateUser(req, res) {
        try {
            const result = await userDatamapper.update(req.params.id);

            res.json({
                message: "user update",
                result
            });
        } catch (error) {
            console.log(error);
        }
    },
    async signIn(req, res) {
        try {

            const mailCheck = await userDatamapper.checkEmail(req.body.email);

            if (mailCheck.length > 0) {
                console.log(mailCheck[0].password);
                if (mailCheck[0].password === req.body.password) {
                    const user = {
                        id: mailCheck[0].id,
                        name: mailCheck[0].name,
                        email: mailCheck[0].biography
                    }
                    res.json({
                        message: "user connecté",
                        user
                    });
                } else {
                    res.json({
                        message: "Email ou mot de passe incorrect"
                    });
                }

            } else {
                res.json({
                    message: "Email ou mot de passe incorrect"
                });
            }

        } catch (error) {
            console.log(error);
        }
    },
    async deleteUser(req, res) {
        try {
            const result = await userDatamapper.deleteAccount(req.params.id);
            if (result) {
                res.json({
                    message: "user delete"
                });
            } else {
                res.json({
                    message: "User not found"
                });
            }

        } catch (error) {
            console.log(error)
        }
    }
}
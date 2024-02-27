import * as usersService from "../../models/users/usersBD.js"

const signup = async (req, res) => {
    const user = await usersService.createUser(req.body)
    res.status(201).json({
        email: user.email,
    })
}

export default signup
import User from "../models/User.js";

export const callback = async (req, res, next) => {
    try {
        const {id, firstName, lastName, imageUrl} = req.body;

        const user = await User.findOne({clerkId: id});
        if(!user) {
            await User.create({
                clerkId: id,
                fullName: `${firstName} ${lastName}`,
                imageUrl
            });
        }
        return res.status(201).json({success:true, message: "User created"});
    } catch (error) {
        next(error);
    }
}
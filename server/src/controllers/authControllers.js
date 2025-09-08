import User from "../models/User.js";

export const callback = async (req, res) => {
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
        console.log(error);
        return res.status(500).json({success:false, error: error.message || "Internal server error"}); 
    }
}
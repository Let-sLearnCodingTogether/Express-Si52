import UserModel from "../models/userModel.js";

export const publicProfile = (req, res) => {
	const username = req.params.username;
	res.render("public-profile", {
		title: username,
		username: username,
		bio: "Test 1234",
	});
};

export const privateProfile = async (req, res) => {
	try {
		const userId = req.user?.id;

		const user = await UserModel.findById(userId);

		if (!user) {
			return res.status(404).json({
				message: "User not found",
				data: null,
			});
		}

		return res.status(200).json({
			message : "User Profile",
			data : user
		});
	} catch (error) {
		res.status(500).json({
			message: error.message,
			data: null,
		});
	}
};

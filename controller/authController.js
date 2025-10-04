export const register = (_req, res) => {
	try {
		res.status(201).json({
			message: "Berhasil register, silahkan login",
			data: null,
		});
	} catch (error) {
		res.status(500).json({
			message: error.message,
			data: null,
		});
	}
};

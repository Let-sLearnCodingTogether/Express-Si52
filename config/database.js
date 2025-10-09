import mongoose from "mongoose";

export const database = async () => {
	try {
		console.log("Connection start...");

		const response = await mongoose.connect(
			"mongodb://127.0.0.1:27017/celvine?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.5.8",
		);

		console.log(
			`Connection successfully on host : ${response.connection.host}`,
		);
	} catch (error) {
		console.error(`Database connection failed : ${error}`);

		process.exit(1);
	}
};

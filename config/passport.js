import passport from "passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import UserModel from "../models/userModel.js";

const opts = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: "JWT_SECRET",
};

passport.use(
	new Strategy(opts, async (payload, done) => {
		try {
			const user = await UserModel.findOne({
				email: payload.email,
			});

			if (!user) {
				return done(null, false);
			}

			return done(null, user);
		} catch (error) {
			return done(error, false);
		}
	}),
);

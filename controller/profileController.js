import { fakeUser } from "../models/fakeUser.js"

export const publicProfile = (req, res) => {
    const username = req.params.username

    res.render('public-profile', {
        user : fakeUser.user,
        profile : fakeUser.profile,
        links : fakeUser.links
    })
}
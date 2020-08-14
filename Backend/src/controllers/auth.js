const jwt = require('jsonwebtoken');
// models
const Admin = require('../models/admin');
const bcrypt = require('bcrypt');

const verifyAuthToken = (authorization) => {
    const token = authorization.replace('Bearer', '').trim();
    return jwt.verify(token, process.env.JWT_SECRET_KEY);
};

const alreadySignedInAdmin = (authorization, response) => {
    try {
        const verifyToken = verifyAuthToken(authorization);
        const { id, email, role } = verifyToken;
        response.status(200).json({success: true, id, email, role, token});
    } catch (err) {
        response.status(400).json({success: false, error: err});
    }
};

const verifyCredentials = async (request, response) => {
    try {
        let { email, password } = request.body;
        const admin = await Admin.findOne({ email });
        const isAdminValid = bcrypt.compareSync(password, admin.password);
        console.log('*********** THE BODY *******')
        console.log(request.body)
        return isAdminValid ? admin : Promise.reject('Bad credentials');
    } catch (err) {
        response.status(401).json({success: false, error: 'Bad credentials'});
    }
};

const signToken = (email, id) => {
    const jwtPayload = { email, id };
    return jwt.sign(jwtPayload, process.env.JWT_SECRET_KEY, {expiresIn: '7 days'});
}

const provideToken = (user) => {
    const { email, id } = user;
    return signToken(email, id);
};

const provideTokenIfValid = async (request, response) => {
    try {
        const verifiedAdmin = await verifyCredentials(request, response);
        if (verifiedAdmin) {
            const token = provideToken(verifiedAdmin);
            response.status(200).json({
                success: true,
                token,
                id: verifiedAdmin.id
            });
        }
    } catch(err) {
        response.status(401).json({success: false, error: err});
    }
};

const authenticateAdmin = async(request, response) => {
    const { authorization } = request.headers;
    if (authorization) {
        alreadySignedInAdmin(authorization, response);
    } else {
        provideTokenIfValid(request, response);
    }
};

module.exports = {
    authenticateAdmin
};
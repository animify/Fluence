import mongoose, { Schema } from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';
import bcrypt from 'bcrypt-nodejs';

const User = new Schema({
    avatar: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    ip_address: {
        type: String
    },
    useragent: {
        type: Array
    },
    hashedPassword: {
        type: String,
        required: true
    },
    salt: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    },
    resetPasswordToken: String,
    resetPasswordExpires: Date
});

User.plugin(passportLocalMongoose);

User.virtual('userId')
    .get(function () {
        return this.id;
    });

User.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, this.salt, null);
};

User.virtual('password')
    .set(function (password) {
        this._plainPassword = password;
        this.salt = bcrypt.genSaltSync(64);
        this.hashedPassword = this.generateHash(password);
    })
    .get(function () { return this.hashedPassword; });

User.methods.checkPassword = function (password) {
    return bcrypt.compareSync(password, this.hashedPassword);
};

export default mongoose.model('User', User);

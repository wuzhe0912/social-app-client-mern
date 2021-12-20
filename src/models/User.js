const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      min: 2,
      max: 20,
      unique: true, // only value
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    profilePicture: {
      type: String,
      default: '',
    },
    coverPicture: {
      type: String,
      default: '',
    },
    followers: {
      type: Array,
      default: [],
    },
    followings: {
      type: Array,
      default: [],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    // desc: {
    //   type: String,
    //   max: 50,
    // },
    // city: {
    //   type: String,
    //   max: 50,
    // },
    // from: {
    //   type: String,
    //   max: 50,
    // },
    // relationship: {
    //   type: Number,
    //   enum: [1, 2, 3],
    // },
  },
  { timestamps: true } // record data create time & update time
);

module.exports = mongoose.model('User', UserSchema);

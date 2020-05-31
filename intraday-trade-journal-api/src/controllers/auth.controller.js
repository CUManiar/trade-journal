const UserModel = require('../models/users.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
// const redis = require('redis');

// const redisClient = redis.createClient();

const register = async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const crypticPassword = bcrypt.hashSync(password, 11);
    const user = new UserModel({
      email: email,
      username: username,
      password: crypticPassword
    });
    await user.save();
    res.json({
      status: true,
      message: "Success",
      data: null
    });
  } catch (error) {
    res.json({
      status: false,
      message: error
    });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const _user = await UserModel.findOne({ username: username });
    const matchPassword = await bcrypt.compare(password, _user.password);
    if (!_user || !matchPassword) {
      return res.json({
        status: false,
        message: "Invalid email or password"
      });
    }
    // const jwtPayload = { username };
    // const token = jwt.sign(jwtPayload, 'INTRADAY_SECRET', { expiresIn: '1 days' });
    // console.log(token);
    // const session = UserModel.findByIdAndUpdate(_user._id, { session: token });
    res.json({
      status: true,
      message: "Login successful!",
      data: _user
    });

  } catch (error) { }
};

const authenticate = async (req, res) => {
  const { headers } = req.headers;

}

module.exports = { login, register, authenticate }

require('dotenv').config();
const mongoose = require('mongoose');
const User = mongoose.model('users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

module.exports = (app) => {

    app.get(`/api/user`, async (req, res) => {
        let users = await User.find();
        return res.status(200).send(users);
      });

    app.post(`/api/user`, async (req, res) => {
    try{
        const hashpass = await bcrypt.hash(req.body.password, 10);
        const user = {id: 1, userName: req.body.userName, password: hashpass, token: ""}
        User.create(user);
        res.sendStatus(201) 
    } catch{
        res.status(500).send('Failed to create user')
        }
    });
    app.post('/api/auth/login', async (req, res) => {
        const user = await ((await User.findOne({userName: req.body.userName})).populate('password','userName'));
        if (user == null) {
          return res.status(400).send("Something's not right")
        }
        try {
          if(await bcrypt.compare(req.body.password, user.password)) {
            const accessToken = jwt.sign(user.userName, process.env.ACCESS_TOKEN_SECRET)  
            res.status(201).send({accessToken: accessToken, userName: req.body.userName})
          } else {
            res.send({err:'Access denied'})
          }
        } catch {
          res.status(500).send('It"s all over')
        }
      })
    
      app.delete('/logout', (req, res) => {
        refreshTokens = refreshTokens.filter(token => token !== req.body.token)
        res.sendStatus(204)
      })
}

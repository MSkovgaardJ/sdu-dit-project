require('dotenv').config();
const mongoose = require('mongoose');
const Post = mongoose.model('posts');
const jwt = require('jsonwebtoken')


module.exports = (app) => {

  app.get(`/api/post`, async (req, res) => {
    let posts = await Post.find();
    return res.status(200).send(posts);
  });

  app.get(`/api/post/:id`, async (req, res) => {
    let {id} = req.params;
    let post = await Post.findById(id);
    return res.status(200).send(post);
  });

  app.post(`/api/post`, async (req, res) => {
    console.log(req.body)
    let post = await Post.create(req.body);
    return res.status(201).send({
      error: false,
      post
    })
  })

  app.put(`/api/post/:id`, async (req, res) => {
    const {id} = req.params;
    let post = await Post.findByIdAndUpdate(id, req.body);
    return res.status(202).send({
      error: false,
      post
    })

  });

  app.delete(`/api/post/:id`, async (req, res) => {
    const {id} = req.params;
    let post = await Post.findByIdAndDelete(id);
    return res.status(202).send({
      error: false,
      post
    })

  })
  function authenticateToken(req, res, next) {
    const authHeader = req.body.authtoken;
    const decode = jwt.decode(authHeader, {complete: true})
    if (authHeader == null) return res.sendStatus(401)
        jwt.verify(authHeader, process.env.ACCESS_TOKEN_SECRET, (err, userName) => {
            console.log("Error",err)
            if (err) return res.sendStatus(403)
            req.body.userName = userName
            next()
        })
    }
}
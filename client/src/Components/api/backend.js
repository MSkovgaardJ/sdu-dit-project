import Axios from "axios";
import uuid from "react-uuid";

Axios.create({
  baseURL: "http://localhost:5000"
});

var users = [
  {name: 'Jens',
  password: 'HHeEE'
}
]

var comments = [
  {
    id: uuid(),
    toId: 1,
    author: "Jens",
    comment: "Awesome post",
    date: new Date().toDateString()
  },
  {
    id: uuid(),
    toId: 0,
    author: "Peter",
    comment: "Awesome post",
    date: new Date().toDateString()
  }
];
var posts = [
  {
    id: uuid(),
    author: "Ulle",
    content: "This is some bullshit",
    date: new Date().toDateString()
  },
  {
    id: uuid(),
    author: "Morten",
    content: "Er ulle den klogeste person i verden? Det tror jeg nok lige",
    date: new Date().toDateString()
  }
];
const fetchPosts = async (page, pageSize) => {
  //var res = await axios.get("/api/posts?");
  return posts;
};
const fetchPost = async id => {
  //var res = await axios.get("/api/post/id");
  var post = posts.filter(value => value.id === id);
  if (post.length > 0) {
    return post[0];
  }
  return post;
};
const fetchComments = async id => {
  console.log(comments);
  return comments;
  //console.log("fetching comments for id: " + id);
};

const upvote = async id => {
  console.log("Upvoting: " + id);
};

const downvote = async id => {
  console.log("Downvoting: " + id);
};
const createUser111 = async (userName, password) => {
  //var res = await axios.post("/api/post/id");
  //e.preventDefault();
  users.push({
    id: uuid(),
    userName: userName,
    password: password
  });
};
const createPost = async (author, content) => {
  //var res = await axios.post("/api/post/id");
  //e.preventDefault();
  posts.push({
    id: uuid(),
    author: author,
    content: content,
    date: new Date().toDateString()
  });
};

const createComment = async (toId, author, comment) => {
  comments.push({
    id: uuid(),
    toId: toId,
    author: author,
    comment: comment,
    date: new Date().toDateString()
  });
  console.log(
    `Create comment for id: ${toId} from author: ${author} with comment: ${comment}`
  );
};
export {
  fetchPosts,
  fetchPost,
  createPost,
  createComment,
  fetchComments,
  upvote,
  downvote,
  createUser111
};

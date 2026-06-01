import PostType from "./PostType.js";
import RestClient from "./RestClient.js";

RestClient.getPosts();

const post: PostType = {
    title: "My New Post",
    views: 230,
};
RestClient.addPost(post);
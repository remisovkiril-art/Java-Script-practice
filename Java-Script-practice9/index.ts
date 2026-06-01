import PostType from "./PostType.js";
import RestClient from "./RestClient.js";
const form = document.getElementById("form");
const posts = document.getElementById("posts");
showPosts();
form?.addEventListener("submit", addPost);
async function addPost(e: Event) {
    e.preventDefault();
    const title = (document.getElementById("title") as any).value;
    const views = Number((document.getElementById("views") as any).value);
    const post: PostType = {
        title: title,
        views: views
    };
    await RestClient.addPost(post);
    showPosts();
}
async function showPosts() {
    const data = await RestClient.getPosts();
    if (posts) {
        posts.innerHTML = "";
    }
    data.forEach((post: PostType) => {
        const div = document.createElement("div");
        const text = document.createElement("p");
        text.innerText = post.title + " | " + post.views;
        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        deleteBtn.addEventListener("click",async () => {
                await RestClient.deletePost(post.id!);
                showPosts();
            }
        );
        const editBtn = document.createElement("button");
        editBtn.innerText = "Edit";
        editBtn.addEventListener(
            "click",
            async () => {
                const newTitle = prompt("New title",post.title);
                if (newTitle == null) {
                    return;
                }
                const updatedPost: PostType = {
                    id: post.id,
                    title: newTitle,
                    views: post.views
                };
                await RestClient.updatePost(updatedPost);
                showPosts();
            }
        );
        div.append(text);
        div.append(deleteBtn);
        div.append(editBtn);
        posts?.append(div);
    });
}
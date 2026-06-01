import PostType from "./PostType.js";
class RestClient {
    private static readonly URL = "http://localhost:3000/posts";
    public static async getPosts() {
        const response = await fetch(RestClient.URL);
        const data = await response.json();
        return data;
    }
    public static async addPost(
        post: PostType
    ) {
        await fetch(RestClient.URL, {
            method: "POST",
            headers: {
                "Content-Type":
                    "application/json"
            },
            body: JSON.stringify(post)
        });
    }
    public static async deletePost(
        id: number
    ) {
        await fetch(
            RestClient.URL + "/" + id,
            {
                method: "DELETE"
            }
        );
    }
    public static async updatePost(
        post: PostType
    ) {
        await fetch(
            RestClient.URL + "/" + post.id,
            {
                method: "PUT",
                headers: {
                    "Content-Type":
                        "application/json"
                },
                body: JSON.stringify(post)
            }
        );
    }
}
export default RestClient;
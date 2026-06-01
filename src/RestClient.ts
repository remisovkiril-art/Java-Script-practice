import PostType from "./PostType.js";
class RestClient {
    private static readonly _URL: string = " http://localhost:3000/posts";
    public static async getPosts(): Promise<void> {
        const response = await fetch(RestClient._URL);
        const data = await response.json();
        console.log(data);
    }

    public static async addPost(post: PostType): Promise<void> {
        const response = await fetch(RestClient._URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(post),
        });
        const data = await response.json();
        console.log(data);
    }
}

export default RestClient;
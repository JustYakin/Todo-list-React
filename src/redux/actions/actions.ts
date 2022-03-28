export const ADD_POSTS = "ADD_POSTS";
export const DELETE_POST = "DELETE_POST";

const addPosts = (payload: any) => {
    return {
        type: ADD_POSTS,
        payload
    }
}

const deletePost = (payload: any) => {
    return {
        type: DELETE_POST,
        payload
    }
}

export { addPosts, deletePost};
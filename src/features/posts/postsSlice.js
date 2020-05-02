import { createSlice } from "@reduxjs/toolkit";
import posts from "../../api/posts";

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    onePost: 1,
    selected: {},
  },
  reducers: {
    getPosts: (state, action) => {
      state.posts = action.payload;
    },
    getOnePost: (state, action) => {
      state.selected = state.posts[action.payload];
    },
    updatePostNum: (state, action) => {
      state.onePost = action.payload;
    },
  },
});

export const { getPosts, getOnePost, updatePostNum } = postsSlice.actions;

export const getPostsFromApi = () => async (dispatch) => {
  try {
    const allPosts = await posts.get("/posts");

    dispatch(getPosts(allPosts.data));
  } catch (error) {
    console.log({ error });
  }
};

export const selectPosts = (state) => state.posts.posts;
export const selectOnePost = (state) => state.posts.selected;
export const postNumber = (state) => state.posts.onePost;

export default postsSlice.reducer;

import axios from "axios";
import { observable, action, makeAutoObservable } from "mobx";
import { Post, User } from "./types";

class PostsStore {
  posts: Post[] = [];
  totalPages = 0;
  currentPage = 1;
  currentPost?: Post;
  constructor() {
    makeAutoObservable(this);
  }

  setPosts(posts: Post[]) {
    this.posts = posts;
  }

  setPost(post: Post) {
    this.currentPost = post;
  }

  setTotalPage(totalPages: number) {
    this.totalPages = totalPages;
  }
  async getPosts(page: number, pageSize?: number) {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?_limit=${pageSize}&_page=${page}`
    );

    this.setPosts(response.data);

    this.setTotalPage(10); //hardcoded not returned from the api

    this.currentPage = page;
  }

  async getPost(postId: string) {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    this.setPost(response.data);
  }
}
export const postsStore = new PostsStore();

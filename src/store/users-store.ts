import axios from "axios";
import { makeAutoObservable } from "mobx";
import { User } from "./types";

class UsersStore {
  users: User[] = [];
  user?: User;
  constructor() {
    makeAutoObservable(this);
  }

  setUsers(users: User[]) {
    this.users = users;
  }

  setUser(user: User) {
    this.user = user;
  }

  async getUsers() {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users`
    );
    this.setUsers(response.data);
  }

  findUser(userId: number) {
    return this.users.find((user) => user.id === userId);
  }

  async getUser(id: number) {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    this.setUser(response.data);
  }
}
export const usersStore = new UsersStore();

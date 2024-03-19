import axios from "axios";
import { SERVER } from "./../../../config";

export default class LoginController {
  username: string | null = null;
  password: string | null = null;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }

  async getToken() {
    try {
      const { data } = await axios.post(`${SERVER}/auth`, {
        username: this.username,
        password: this.password,
      });
      return data;
    } catch (err) {
      return false;
    }
  }

  saveToLocalStorage(token: string, refreshToken: string) {
    window.localStorage.setItem("user", token);
    window.localStorage.setItem("refresh_token", refreshToken);
  }
}

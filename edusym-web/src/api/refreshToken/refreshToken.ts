import axios from "axios";
import { SERVER } from "./../../../config";

export default class RefreshTokenController {
  token: string | null = null;

  constructor(token: string) {
    this.token = token;
  }

  async getToken() {
    try {
      const { data } = await axios.post(`${SERVER}/api/refresh-token`, {
        refresh_token: this.token,
      });
      return data.token;
    } catch (err) {
      return false;
    }
  }

  saveToLocalStorage(token: string) {
    window.localStorage.setItem("user", token);
  }
}

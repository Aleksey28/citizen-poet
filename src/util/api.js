import { apiSettings } from "./constants.js";

class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _getProxy(relativePath, method, body = "") {
    const options = {
      method,
      headers: this._headers,
    };

    if (localStorage.getItem("jwt")) {
      const jwt = localStorage.getItem("jwt");
      options.headers["authorization"] = `Bearer ${jwt}`;
    }

    if (!!body) {
      options.body = body;
    }

    return fetch(`${this._baseUrl}${relativePath}`, options);
  }

  async _handleResponse(response) {

    const description = await response.json();

    if (response.ok) {
      return description;
    } else {
      return Promise.reject(`Ошибка: ${response.status}\nОписание: ${description.message}`);
    }
  }

  async signIn({ email, password }) {
    const response = await this._getProxy("/signin", "POST", JSON.stringify({ email, password }));
    return await this._handleResponse(response);
  }

  async signUp({ email, password, firstName, secondName, middleName, birthDate, avatar }) {
    const response = await this._getProxy(
      "/signup",
      "POST",
      JSON.stringify({
                       email,
                       password,
                       firstName,
                       secondName,
                       middleName,
                       birthDate,
                       avatar,
                     }),
    );
    return await this._handleResponse(response);
  }

  async getUsers() {
    const response = await this._getProxy("/users", "GET");
    return await this._handleResponse(response);
  }

  async getUserData() {
    const response = await this._getProxy("/users/me", "GET");
    return await this._handleResponse(response);
  }

  async setUserData({ name, about }) {
    const response = await this._getProxy("/users/me", "PATCH", JSON.stringify({ name, about }));
    return await this._handleResponse(response);
  }

  async setAvatar({ link }) {
    const response = await this._getProxy("/users/me/avatar", "PATCH", JSON.stringify({ avatar: link }));
    return await this._handleResponse(response);
  }

  async getCardList() {
    const response = await this._getProxy("/cards", "GET");
    return await this._handleResponse(response);
  }

  async addCard({ name, link }) {
    const response = await this._getProxy("/cards", "POST", JSON.stringify({ name, link }));
    return await this._handleResponse(response);
  }

  async deleteCard(id) {
    const response = await this._getProxy(`/cards/${id}`, "DELETE");
    return await this._handleResponse(response);
  }

  async toggleCardLike(id, like) {
    const response = await this._getProxy(`/cards/likes/${id}`, like ? "PUT" : "DELETE");
    return await this._handleResponse(response);
  }
}

export const apiObject = new Api(apiSettings);

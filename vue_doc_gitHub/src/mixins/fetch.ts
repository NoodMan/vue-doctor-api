import type { User } from "../types/userType";
// utiliser avec option api
export default {
  methods: {
    async fetchLogin(user: User) {
      return await fetch("https://apidoctor.quidam.re/api/login_check", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((promise) => promise.json())
        .catch((e) => {
          console.warn("error", e);
        });
    },

    async fetchConsults(token: string) {
      return await fetch("https://apidoctor.quidam.re/api/consultations", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((promise) => promise.json())
        .catch((e) => {
          console.warn("error", e);
        });
    },
  },
};

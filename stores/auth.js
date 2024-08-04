import { defineStore } from "pinia";

export const useAuth = defineStore("auth", {
  state: () => ({
    token: null,
    currentUser: null,
    infos: {
      company: "주식회사 마카모디",
      compnayNumber: "337-86-02020",
      manager: "김미나",
      phone: "052-252-5200",
      email: "ulsanworkation@gmail.com",
      address: "울산 동구 해수욕장 10길 38 5",
      time: {
        offline: "평일 09:00-18:00(공휴일 휴무)",
        online: "평일 09:00-18:00(공휴일 휴무)"
      }
    }
  }),
  getters: {
    isAuthenticated: state => !!state.token,
    currentUserInfo: state => state.currentUser,
    getInfos: state => state.infos
  },
  actions: {
    setToken(newToken) {
      if (process.client) {
        // 클라이언트 사이드에서만 실행
        sessionStorage.setItem("::on::and::off::token", newToken);
        this.token = newToken;
      }
    },
    clearToken() {
      this.token = null;
      if (process.client) {
        // 클라이언트 사이드에서만 실행
        sessionStorage.removeItem("::on::and::off::token");
      }
    },
    setUser(user) {
      this.currentUser = user[0];
      // console.log("this.currentUser :", this.currentUser);
    },
    clearUser() {
      this.currentUser = null;
      this.clearToken();
    }
  },
  persist: {
    enabled: true,
    strategies: [
      {
        storage: persistedState.sessionStorage,
        paths: ["token", "currentUser"]
      }
    ]
  }
});

export default {
    setIDToken(context, payload) {
      context.commit("setIDToken", payload);
    },
    setAccessToken(context, payload) {
      context.commit("setAccessToken", payload);
    },
    setUsername(context, payload) {
      context.commit("setUsername", payload);
    },
    setIsAuthenticated(context, payload) {
      context.commit("setIsAuthenticated", payload);
    },
    setEmail(context, payload) {
      context.commit("setEmail", payload);
    },
    setSession(context, payload) {
      context.commit("setSession", payload);
    },
  };
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      scope: 'user-modify-playback-state',
      redirectUri: 'http://localhost:8080/callback',
      clientId: '018968456e2d446dba93d59f090a5034',
      token: null,
      loaded: false,
    }
  },
  mounted() {
    if (this.$route.path !== "/callback") {
      this.token = this.$cookies.get("token");
      if (!this.token) {
        this.login();
      }
      this.loaded = true;
    }
  },
  methods: {
    login() {
      let url = 'https://accounts.spotify.com/authorize?client_id=' + this.clientId + '&response_type=token&scope=' + this.scope + '&redirect_uri=' + encodeURIComponent(this.redirectUri);
      window.location = url;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

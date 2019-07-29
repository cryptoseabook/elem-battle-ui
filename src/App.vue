<template>
  <div id="app">
    <div class='main status-login'>
      <Game v-if="isLoggedIn" />
      <Login v-if="!isLoggedIn" />
    </div>
  </div>
</template>

<script>
import Login from './components/Login.vue'
import Game from './components/Game.vue'

export default {
  name: 'app',
  components: {
    Login,
    Game
  },
  data () {
    return {
      name: ''
    }
  },
  computed: {
    isLoggedIn() {
      return false
    }
  }
}
</script>

<style>
@font-face {
  font-family: 'Almendra';
  src: url("./assets/fonts/almendra-regular-webfont.woff") format("woff2"), url("./assets/fonts/almendra-regular-webfont.woff") format("woff");
  font-weight: normal;
  font-style: normal; }

@font-face {
  font-family: 'Almendra Bold';
  src: url("./assets/fonts/almendra-bold-webfont.woff2") format("woff2"), url("./assets/fonts/almendra-bold-webfont.woff") format("woff");
  font-weight: normal;
  font-style: normal; }

body {
  font-family: 'Almendra Bold';
  font-size: 14px;
  letter-spacing: 2px;
  user-select: none;
  overflow: hidden; }

.main {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
  background-image: url("./assets/images/Game_background.jpg");
  background-size: cover; 
}
.main .loading {
  opacity: 0; 
}

.main.status-login {
  background-image: url("./assets/images/Game_Login_background.jpg"); 
}
.main.status-profile {
  background-image: url("./assets/images/Game_Profile_background.jpg"); 
}
</style>

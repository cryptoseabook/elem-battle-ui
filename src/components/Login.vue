<template>
  <div class="login">
    <div class="title">Elemental Battles - powered by EOSIO VueJs Build</div>
    <div class="description">Please use the Account Name and Private Key generated in the previous page to log into the game.</div>
    <form name="form" @submit="onSubmit">
      <div class="field">
        <label>Account name</label>
        <input
          type="text"
          name="username"
          placeholder="All small letters, a-z, 1-5 or dot, max 12 characters"              
          pattern="[\.a-z1-5]{2,12}"
          required
          v-model="loginData.username"
        />
      </div>
      <div class="field">
        <label>Private key</label>
        <input
          type="password"
          name="key"
          v-model="loginData.key"         
          pattern="^.{51,}$"
          required
        />
      </div>
      <div class="field form-error">
        <span class="error">{{ getError }}</span>
      </div>
      <div class="bottom">
        <Button text="CONFIRM"></Button>
      </div>
    </form>
  </div>
</template>

<script>
import Button from './Button.vue'

export default {
  name: 'Login',
  components: {
    Button
  },
  data() {
      return {
        loginData: {
          username: '',
          key: ''
        }      
      }
  },
  props: {
    
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      console.log('logginning now ...')
      this.$store.dispatch('login', this.loginData);
    }
  },
   computed: {
    // a computed getter
    getError: function () {
      return this.$store.getters.getError
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
  position: relative;
  margin: 0 auto;
  width: 1366px;
  height: 768px;
  background: url("../assets/images/popup_bg.png") center no-repeat;
  background-size: 800px;
  color: #d4cfba;
  font-size: 14.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transform-origin: top left;
  transition: all 500ms ease-in-out !important; }
  .login > * {
    margin: 0 auto;
    padding: 0 72px;
    width: 615px; }
  .login .title {
    position: absolute;
    top: 60px;
    width: 392px;
    height: 163.5px;
    background: url("../assets/images/Game_logo.png");
    background-size: 100%;
    color: transparent; }
  .login .description {
    margin-top: 50px;
    margin-bottom: 25px;
    line-height: 1.5em; }
  .login .field {
    margin-bottom: 15px; }
    .login .field label {
      color: #ffe4a9;
      text-transform: uppercase;
      text-shadow: 2px 2px 2px black; }
    .login .field input {
      margin: 5px 0;
      padding: 4px 20px 0;
      width: 471.5px;
      height: 42px;
      background: url("../assets/images/Game_Login_form.png");
      background-size: 471.5px;
      color: #312a25;
      letter-spacing: 3px;
      /* https://stackoverflow.com/a/37432260 */ }
      .login .field input::placeholder {
        color: #666;
        letter-spacing: 2px; }

@-webkit-keyframes autofill {
  to {
    background: url("../assets/images/Game_Login_form.png");
    background-size: 471.5px; } }
      .login .field input:-webkit-autofill {
        -webkit-animation-name: autofill;
        -webkit-animation-fill-mode: both; }
  .login .form-error {
    height: 1em;
    font-size: 14.5px;
    white-space: nowrap;
    overflow: hidden; }
    .login .form-error .error {
      width: 100%;
      color: #ff5400;
      text-overflow: ellipsis;
      overflow: hidden;
      display: inline-block; }
  .login .bottom {
    margin-top: 5px;
    text-align: center; }
</style>

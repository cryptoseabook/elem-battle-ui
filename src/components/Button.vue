<template>
  <div>
      <button
        class=''
        onClick={{ this.handleClick }}
      >{{ text }}</button>
  </div>
</template>

<script>
export default {
  name: 'Button',
  data() {
    return {
        
    }
  },
  props: {
    
  },
  methods: {
    handleClick() {
        alert('handle Click');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.button {
  position: relative;
  margin: 0 6px;
  padding-bottom: 3px;
  width: 188.5px;
  height: 58px;
  background-size: 100%;
  background-image: url("../assets/images/Game_buttons2.png");
  color: #fff;
  font-family: 'Almendra Bold';
  font-size: 15.4px;
  letter-spacing: 2.5px;
  text-shadow: 0 0 15px rgba(244, 229, 191, 0.6);
  cursor: pointer; }
  .button.green {
    background-image: url("../assets/images/Game_buttons2.png"); }
  .button.red {
    background-image: url("../assets/images/Game_buttons1.png"); }
  .button.blue {
    background-image: url("../assets/images/Game_buttons3.png"); }
  .button:hover {
    background-position: 0 -58px; }
  .button:active {
    background-position: 0 -116px; }
  .button.loading:after {
    content: "";
    position: absolute;
    left: 24px;
    top: 11px;
    width: 138px;
    height: 31px;
    background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0) 100%);
    background-size: 600% 100%;
    display: inline-block;
    animation: boadingButton 3s normal infinite; }

@keyframes boadingButton {
  from {
    background-position: 0% 50%; }
  50% {
    background-position: 100% 50%; }
  to {
    background-position: 0% 50%; } }

.button.small {
  padding-bottom: 2px;
  width: 162.5px;
  height: 50px;
  font-size: 14px;
  line-height: 20px; }
  .button.small:hover {
    background-position: 0 -50px; }
  .button.small:active {
    background-position: 0 -100px; }
  .button.small.loading:after {
    left: 22px;
    top: 10px;
    width: 116px;
    height: 27px; }

</style>

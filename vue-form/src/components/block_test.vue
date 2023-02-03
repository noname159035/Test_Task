<template>
  <div class="root">
    <p class="text">{{inp}}</p>
    <input type="text" id="login">
    <p class="err" id="txt1"></p>
  </div>
</template>

<script>
export default {
  name: "block_test",
  props: ["inp"],
  data(){
    return {

    }
  }
}
</script>

<style scoped>
  input {
    margin-left: 4vw;
    border-radius: 3px;
    box-shadow: 0px 0px 1px 0px black inset;
    outline:none;
    border: solid #F0F0F0 1px;
    width: 260px;
    height: 30px;
    padding-left: 10px;
  }

  p {
    font-family: sans-serif;
    font-weight: 600;
    margin-left: 4vw;
  }

  .err {
    font-size: 10px;
    color: red;
  }
</style>
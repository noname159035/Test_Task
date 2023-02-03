<template>
  <div id="root">
    <block_test inp="Логин"></block_test>
    <block_test inp="Пароль"></block_test>
    <block_test inp="Телефон"></block_test>
    <button id="button">Войти</button>
  </div>
</template>

<script>
import block_test from './components/block_test.vue'

export default {
  name: 'App',
  components: {
    block_test
  }
}
</script>

<style>
  button {
    margin-left: 4vw;
    margin-top: 15px;
    width: 80px;
    height: 35px;
    background-color: white;
    box-shadow: 0px 0px 1px 0px black inset;
    border: solid #F0F0F0 1px;
    border-radius: 3px;
    font-size: 15px;
    transition-property: background-color;
    transition-duration: .15s;
  }

  button:hover {
    background-color: #F3F3F3;
  }

  button:active {
    background-color: #E7E7E7;
  }
</style>

<template>
  <div id="app">
    <div class="header">vue3 header</div>
    <div class="body">
      <div class="left" v-show="!isQianKun">
        <router-link to="/home">Home</router-link>
        <router-link to="/about">About</router-link>
      </div>
      <div class="content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  
  },
  created() {

  },
  mounted() {
   
  },
  methods: {

  },
  computed: {
    isQianKun() {
      return window?.__POWERED_BY_QIANKUN__ || false
    }
  }
};
</script>

<style lang="less">
.header{
  text-align: center;
}
.body{
  margin-top: 20px;
  display: flex;
  padding: 20px;
}
.left{
  display: flex;
  flex-direction: column;
  padding: 20px;
}
.content{
  width: 100%;
  text-align: center;
}
</style>

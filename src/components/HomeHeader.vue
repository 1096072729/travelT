<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe685;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe651;</span>
    </div>
    <div class="header-right">城市
      <span class="iconfont arrow-icon">&#xe688;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homeHeader',
  data () {
    return {
      msg: 'homeHeader'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped>
/* @import '~@/assets/styles/varibles.styl'; */
.header {
  background-color: #00bcd4;
  display: flex;
  line-height: 0.86rem;
  color: #fff;
  /* height: 43px; */
}
.header .header-left {
  width: 0.64rem;
  float: left;
}
.header .header-left .back-icon {
  text-align: center;
  font-size: 0.4rem;
}
.header .header-input {
  height: 0.64rem;
  line-height: 0.64rem;
  background-color: #fff;
  border-radius: 0.1rem;
  margin-left: 0.2rem;
  margin-top: 0.12rem;
  padding-left: 0.2rem;
  flex: 1;
  color: #ccc;
}
.header .header-right {
  width: 1.24rem;
  float: right;
  text-align: center;
}
.header .header-right .arrow-icon {
  margin-left: -0.04rem;
  font-size: 0.24rem;
}
</style>

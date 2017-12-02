<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
 data() {
          return {
              chartDom: null,
              data: {
                  title: 'IT趋势',
                  subtext: '子标题描述信息',
              },
          }
      },
      mounted: function() {
      	
      }
      
}
</script>

<style>
body{
	margin: 0px;
	padding: 0px;
	background-image:url(../static/bg.jpg);
	opacity: 0.8;
	height: 100%;
	overflow: hidden;
	
}
</style>

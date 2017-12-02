<template>
<div>
 <el-row :gutter="20">
  <el-col :span="6"><div class="grid-content bg-purple">
  	 <section class="chart">
	    <el-row>
	      <el-col :span="24">
	        <div id="chartDomA" style="width:100%; height:400px;"></div>
	      </el-col>
	    </el-row>
	  </section>
  </div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple">
  	<section class="chart">
	    <el-row>
	      <el-col :span="24">
	        <div id="chartDomB" style="width:100%; height:400px;"></div>
	      </el-col>
	    </el-row>
	  </section>
  </div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple">3</div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple">4</div></el-col>
</el-row>
</div>
</template>

<script>
	import browserJS from './browser.js';
    export default browserJS;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

<template>
<div id="map">
 <el-row :gutter="20">
  <el-col :span="24">
  	<div class="grid-content bg-purple">
  	 <section class="chart">
	    <el-row>
	      <el-col :span="24">
	        <div id="mapechart"></div>
	      </el-col>
	    </el-row>
	  </section>
  </div>
  </el-col>
</el-row>
</div>
</template>

<script>
	import mapJS from './map.js';
    export default mapJS;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#map{
	width: 100%;
	overflow: hidden;
}
.line{
	position: relative;
	
}
</style>

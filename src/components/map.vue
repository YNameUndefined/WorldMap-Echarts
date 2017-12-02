<template>
<div id="map">
	<div class="mapButton">
		<el-button size="mini" icon="el-icon-d-arrow-left" @click="mapButton"></el-button>	
	</div>
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
	background-color: #fff;
	background-image: url(../assets/t.jpg);
}
.line{
	position: relative;
	
}
.mapButton{
	position: fixed;
	left: 20px;
	top: 20px;
	color: darkgrey;
	background-color:dimgray;
	z-index: 999;
}
</style>

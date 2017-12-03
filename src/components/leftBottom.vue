<template>
<div  style="height: 100%;">
	<div style="background-color: #0C397A; text-align: center;padding-bottom: 10px;">
		<el-button type="info" round style="background-color: #0F365D;border: none;">发动机工作情况</el-button>
	</div>
    <div id="leftBottom" >
    </div>
    <div id="chart-panel" style="height: 100%;min-height: 300px;"></div>
</div>
</template>

<script>
	import leftBottomJS from './leftBottom.js';
    export default leftBottomJS;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

<template>
	<div>
		<router-view></router-view>
		<FooterGuide v-show='$route.meta.showfoot'></FooterGuide>
	</div>
</template>

<script>
	import FooterGuide from './components/FooterGuide.vue'
	export default{
		components:{
			FooterGuide
		}
	}
</script>

<style>
</style>

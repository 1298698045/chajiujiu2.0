<template>
    <router-view></router-view>
</template>
<script>
	require('./scss/index.scss');
	import navtitle from  './../../compontens/navtitle'
	export default {
		name: 'index',
		components: {
			navtitle
		},
		computed: {},
		data() {
			return {
			}
		},
		mounted() {
		},
		methods: {
        },
		watch: {
		}
	}
</script>
<template>
<div class="Bg-Lines">
	<div class="Bg-Line Bg-Line-1 "></div>
	<div class="Bg-Line Bg-Line-2 "></div>
	<div class="Bg-Line Bg-Line-3 "></div>
	<div class="Bg-Line Bg-Line-4 "></div>
	<div class="Bg-Line Bg-Line-5 "></div>
	<div class="Bg-Line Bg-Line-6 "></div>
	<div class="Bg-Line Bg-Line-7 "></div>
</div>
</template>

<script>
export default {
	name: 'BgLines',
	props: {
		ButtonText: {
			type: String,
			default () {
				return ""
			}
		},
	},
	components: {},
	data() {
		return {}
	},
	created() {

	},
	watch: {

	},
	computed: {

	},
	methods: {

	},

	mounted() {

	}
}
</script>

<style lang="scss">@import "../style/style.scss";
.Bg-Line {
    position: absolute;
    top: 0;
    width: 1px;
    height: 100%;
    z-index: 1;
    background-color: color(border);
}

$elements: 8;
@for $i from 1 to $elements {
    .Bg-Line:nth-child(#{$i}) {
        left: calc(#{$i} * 12.5vw - 1px);
    }
}
</style>

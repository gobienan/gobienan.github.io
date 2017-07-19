<template>
<div id="app">
	<About></About>
	<Contact></Contact>
</div>
</template>

<script>
import About from './views/About.vue';
import Contact from './views/Contact.vue';

export default {
	name: 'app',
	components: {
		About,
		Contact
	}
}
</script>

<style lang="scss">@import "./style/style.scss";
#app {
    .BG-Line {
        position: absolute;
        top: 0;
        width: 1px;
        height: 100%;
        z-index: 1;
        background-color: color(border);
    }
}

$elements: 8;
@for $i from 1 to $elements {
    .BG-Line:nth-child(#{$i}) {
        left: calc(#{$i} * 12.5vw - 1px);
    }
}
</style>

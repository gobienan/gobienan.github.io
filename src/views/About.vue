<template>
<section class="About">
	<BgLines></BgLines>
	<div class="Logo">
		<img src="../../static/logo.svg" alt="">
	</div>
	<div class="Section-Wrapper">
		<span>Introduction</span>
		<h1>
			<span>Gobie&nbsp;</span><span>Nanthakumar&nbsp;</span><span>—&nbsp;</span><span>webdeveloper&nbsp;</span><span>from&nbsp;</span><span>Germany</span><span>,&nbsp;</span><span>currently&nbsp;</span><span>working&nbsp;</span><span>for&nbsp;</span><span class="ClearCanvas">ClearCanvas&nbsp;</span><span>in&nbsp;</span><span>lovely&nbsp;</span><span>Berlin</span><span>.&nbsp;</span>
		</h1>
		<h2>
			<span>I&nbsp;</span><span>am&nbsp;</span><span>currently&nbsp;</span><span>working&nbsp;</span><span>on&nbsp;</span><a href="http://www.taxifusion.de" target="_blank" class="Taxifusion">TaxiFusion</a><span>,&nbsp;</span><a href="http://www.lumencase.com" target="_blank" class="Lumencase">Lumencase&nbsp;</a><span>and&nbsp;</span><a href="http://www.slected.me" target="_blank" class="Slected">Slected&nbsp;</a>
		</h2>
	</div>
</section>
</template>

<script>
import BgLines from '../components/BgLines.vue';

export default {
	name: 'About',
	props: {
		ButtonText: {
			type: String,
			default () {
				return ""
			}
		},
	},
	components: {
		BgLines
	},
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
.About {
    width: 100%;
    height: 100vh;
    background-color: color(bg-start);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;

    &::after {
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        right: 0;
        height: 5px;
        background: color(prime);
        z-index: zIndex(default)+1;
    }
    &::before {
        content: "about";
        position: absolute;
        font-size: 550px;
        font-weight: 700;
        color: color(text-lighter);
        z-index: zIndex(default)-1;
        pointer-events: none;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
    @media (max-width: 1420px) {
        &::before {
            font-size: 450px;
        }
    }
    @media (max-width: 1200px) {
        &::before {
            font-size: 350px;
        }
    }
    @media (max-width: 800px) {
        &::before {
            font-size: 250px;
        }
    }
    @media (max-width: 500px) {
        &::before {
            font-size: 120px;
        }
    }
    .Logo {
        position: absolute;
        top: 0;
        left: 0;
        margin: 35px;

        img {
            display: block;
            width: 50px;
            height: 50px;
            object-fit: contain;
        }
    }
    .Section-Wrapper {
        max-width: 1000px;
        margin: 0 auto;
        padding: 25px;
        box-sizing: border-box;
        > span {
            font-weight: 600;
            color: color(text-light);
            display: block;
        }
    }
    h1 {
        font-size: 70px;
        color: color(text);
        margin: 0;
        @media (max-width: 1200px) {
            font-size: 50px;
        }
        @media (max-width: 800px) {
            font-size: 35px;
        }
        @media (max-width: 500px) {
            font-size: 30px;
        }
        span {
            display: inline-block;
            &.ClearCanvas {
                cursor: pointer;
                color: color(clearcanvas);
            }
        }
    }
    h2 {
        margin-top: 50px;
        font-size: 36px;
        font-weight: 600;
        @media (max-width: 1200px) {
            font-size: 30px;
        }
        @media (max-width: 800px) {
            font-size: 25px;
        }
        @media (max-width: 500px) {
            font-size: 20px;
        }
        a,
        span {
            display: inline-block;
            &.Lumencase,
            &.Slected,
            &.Taxifusion {
                cursor: pointer;
            }
            &.Taxifusion {
                color: color(taxifusion);
            }
            &.Lumencase {
                color: color(lumencase);
            }
            &.Slected {
                color: color(slected);
            }
        }
    }
}
</style>

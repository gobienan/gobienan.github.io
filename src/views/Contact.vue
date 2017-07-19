<template>
<section class="Contact">
	<div class="Section-Wrapper">
		<BgLines></BgLines>
		<span>Email</span>
		<h2>
			Get in touch with me.
			<br>
			<span class="Mail">hi@gobie.io</span>
		</h2>
	</div>
</section>
</template>

<script>
import BgLines from '../components/BgLines.vue';

export default {
	name: 'Contact',
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

.Contact {
    width: 100%;
    height: 100vh;
    background-color: color(bg-end);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    &::before {
        content: "conta\00000act";
        position: absolute;
        font-size: 550px;
        line-height: 420px;
        font-weight: 700;
        color: rgba(color(text-negative),0.03);
        z-index: zIndex(default)-1;
        pointer-events: none;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
    @media (max-width: 1420px) {
        &::before {
            font-size: 450px;
            line-height: 380px;
        }
    }
    @media (max-width: 1200px) {
        &::before {
            font-size: 350px;
            line-height: 320px;

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
            line-height: 120px;

        }
    }
    .Section-Wrapper {
        max-width: 1000px;
        margin: 0 auto;
        > span {
            font-weight: 600;
            color: color(text-negative);
            display: block;
            margin-bottom: -10px;
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
            font-size: 70px;
            font-weight: 600;
            color: color(text-negative);
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
                &.Mail {
                    cursor: pointer;
                    color: color(prime);
                }
            }
        }
    }
    .Bg-Line {
        background-color: color(border-light);
    }
}
</style>

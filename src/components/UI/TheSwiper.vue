<template>
	<swiper
		  :modules="modules"
		  :slides-per-view="1"
		  :space-between="50"
		  navigation
		  :autoplay="true"
		  :pagination="{ clickable: true }"
		  @swiper="onSwiper"
		  @slideChange="onSlideChange"
		  style="--swiper-pagination-color: #DA1D3A;
		   --swiper-navigation-color: #DA1D3A;"
	>
		<swiper-slide><div class="bg-[url('/slider/slide1.png')] bg-cover h-96"></div></swiper-slide>
		<swiper-slide><div class="bg-[url('/slider/slide2.webp')] bg-cover h-96"></div></swiper-slide>
		<swiper-slide><div class="bg-[url('/slider/slide3_.avif')] bg-cover h-96"></div></swiper-slide>
		...
	</swiper>
</template>
<script>
// import Swiper core and required modules
import { Navigation, Pagination, A11y, Autoplay  } from 'swiper/modules';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Import Swiper styles
export default {
	components: {
		Swiper,
		SwiperSlide,
	},
	setup() {
		return {
			modules: [Navigation, Pagination, A11y, Autoplay ],
		};
	},
};
</script>
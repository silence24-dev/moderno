import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();

import $ from "jquery";

import "slick-carousel";
import mixitup from 'mixitup';
import '@rateyo/jquery/lib/es/jquery.rateyo.js';
import '@fancyapps/fancybox/dist/jquery.fancybox.js';

$(function () {

	var mixer = mixitup('.products__inner-box');

	$('.product-slider__inner').slick({
		dots: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		arrows: false,
	});

	$(".rate-star").rateYo({
		rating: 3.6,
		starWidth: "12px"
	});
});


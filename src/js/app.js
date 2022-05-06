import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();

import $ from "jquery";
import "slick-carousel";
import mixitup from 'mixitup';
import "./modules/rating.js"



$(function () {

	var mixer = mixitup('.products__inner-box');

	$('.product-slider__inner').slick({
		dots: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		arrows: false,
	});

});


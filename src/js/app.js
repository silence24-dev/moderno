import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();

/* import $ from "jquery"; */

import * as $ from 'jquery';

import "slick-carousel";
import mixitup from 'mixitup';
import '@rateyo/jquery/lib/es/jquery.rateyo.js';
import '@fancyapps/fancybox/dist/jquery.fancybox.js';
import '../../node_modules/jquery-form-styler/dist/jquery.formstyler.js'



$(function () {

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

	$('.menu__btn').on('click', function () {
		$('.menu__list').slideToggle();
	});

	$('.header__btn-menu').on('click', function () {
		$('.header__box').toggleClass('active');
	});

	$('.product-one__tabs .tab, .settings__tabs .tab').on('click', function (event) {
		var id = $(this).attr('data-id');
		$('.product-one__tabs, .settings__tabs').find('.tab-item').removeClass('active-tab').hide();
		$('.product-one__tabs .tabs, .settings__tabs .tabs').find('.tab').removeClass('active');
		$(this).addClass('active');
		$('#' + id).addClass('active-tab').fadeIn();
		return false;
	});

	$('input[type="file"], select').styler();

	/* писать самым последним потому что он в DOM только на главной странице */
	var mixer = mixitup('.products__inner-box');
});

/* ; (function ($) {
	// your code
})(jQuery); */
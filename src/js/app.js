import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();

import $ from "jquery";


import "slick-carousel";
import mixitup from 'mixitup';
import '@rateyo/jquery/lib/es/jquery.rateyo.js';
import '@fancyapps/fancybox/dist/jquery.fancybox.js';
import '../../node_modules/jquery-form-styler/dist/jquery.formstyler.js'
import 'ion-rangeslider'



$(function () {

	$('.product-slider__inner').slick({
		dots: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		arrows: false,
		responsive: [
			{
				breakpoint: 1900,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				}
			},
			{
				breakpoint: 1441,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 801,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
		]
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

	if ($('.products__inner-box').length > 0) {
		var mixer = mixitup('.products__inner-box');
	}

	$('.icon-th-list').on('click', function () {
		$('.product__item').addClass('list');
		$('.icon-th-list').addClass('active');
		$('.icon-th-large').removeClass('active');
	});
	$('.icon-th-large').on('click', function () {
		$('.product__item').removeClass('list');
		$('.icon-th-large').addClass('active');
		$('.icon-th-list').removeClass('active');
	});

	$('.js-range-slider').ionRangeSlider({
		type: "double",
		min: 0,
		max: 1000,
		from: 0,
		to: 600,
		prefix: "$"
	});

	$('.page').on('click', function () {
		$('.page').removeClass('active');
		$(this).addClass('active');
	});

/* 	$(window).on('resize', function () {
		var size = $(window).width();//get updated width when window is resized
		$('.product__item').toggleClass('list', size > 600);//remove class only in less or equal to 1067
	}).resize();//trigger resize on load */

});


'use strict';

$(function () {
	var state = false;
	var bluState = false;
	var redState = false;
	
	nodecg.listenFor('mapvoteIn', ShowMapVote);
	nodecg.listenFor('mapvoteOut', function (data) {
		HideMapVote();
	});
	nodecg.listenFor('bluturn', ToggleBluPick);
	nodecg.listenFor('redturn', ToggleRedPick);
	
	nodecg.listenFor('blu_pick', function(id) {
	if (state == true) {
	if ($('#' + id).children('.left').text().length > 0) {
	$('#'+ id).children('.left').text("");
	var t1 = new TimelineLite({paused: true});
	t1.to($('#' + id), 0.5, { opacity: '1', ease:Power3.easeOut}, '0');
	t1.to($('#' + id), 0.5, { boxShadow: 'inset 0px 0px 0px 0px black', ease:Power3.easeOut}, '0');
	t1.play();
	
	}
	else {
	$('#'+ id).children('.left').text(" PICK");
	$('#'+ id).children('.right').text("");
	var t1 = new TimelineLite({paused: true});
	
	t1.to($('#' + id), 0.5, {  opacity: '1', boxShadow: 'inset 0px 0px 50px 12px white', ease:Power3.easeOut}, '0');
	t1.to($('#' + id).children('.left'), 0, { color: '#4799dc', ease:Power3.easeOut}, '0');
	t1.play();
	}
	}
	});
	
	nodecg.listenFor('blu_ban', function(id) {
	if (state == true) {
	if ($('#' + id).children('.left').text().length > 0) {
	$('#'+ id).children('.left').text("");
	var t1 = new TimelineLite({paused: true});
	t1.to($('#' + id), 0.5, { opacity: '1', ease:Power3.easeOut}, '0');
	t1.to($('#' + id), 0.5, { boxShadow: 'inset 0px 0px 0px 0px black', ease:Power3.easeOut}, '0');
	t1.play();
	}
	else {
	$('#'+ id).children('.left').text(" BAN");
	$('#'+ id).children('.right').text("");
	var t1 = new TimelineLite({paused: true});
	t1.to($('#' + id), 0.5, { boxShadow: 'inset 0px 0px 50px 12px black', ease:Power3.easeOut}, '0');
	t1.to($('#' + id), 0.5, { opacity: '0.5', ease:Power3.easeOut}, '0');
	t1.to($('#' + id).children('.left'), 0, { color: 'red', ease:Power3.easeOut}, '0');
	t1.play();
	}
	}
	});	
	nodecg.listenFor('red_pick', function(id) {
	if (state == true) {
	if ($('#' + id).children('.right').text().length > 0) {
	$('#'+ id).children('.right').text("");
	var t1 = new TimelineLite({paused: true});
	t1.to($('#' + id), 0.5, { opacity: '1', ease:Power3.easeOut}, '0');
	t1.to($('#' + id), 0.5, { boxShadow: 'inset 0px 0px 0px 0px black', ease:Power3.easeOut}, '0');
	t1.play();
	}
	else {
	$('#'+ id).children('.right').text("PICK");
	$('#'+ id).children('.left').text("");
	var t1 = new TimelineLite({paused: true});
	t1.to($('#' + id), 0.5, { opacity:'1', boxShadow: 'inset 0px 0px 50px 12px white', ease:Power3.easeOut}, '0');
	t1.to($('#' + id).children('.right'), 0, { color: '#4799dc', ease:Power3.easeOut}, '0');
	t1.play();
	}
	}
	});	
	nodecg.listenFor('red_ban', function(id) {
	if (state == true) {
	if ($('#' + id).children('.right').text().length > 0) {
	$('#'+ id).children('.right').text("");
	var t1 = new TimelineLite({paused: true});
	t1.to($('#' + id), 0.5, { opacity: '1', ease:Power3.easeOut}, '0');
	t1.to($('#' + id), 0.5, { boxShadow: 'inset 0px 0px 0px 0px black', ease:Power3.easeOut}, '0');
	t1.play();
	}
	else {
	$('#'+ id).children('.right').text("BAN");
	$('#'+ id).children('.left').text("");
	var t1 = new TimelineLite({paused: true});
	t1.to($('#' + id), 0.5, { boxShadow: 'inset 0px 0px 50px 12px black', ease:Power3.easeOut}, '0');
	t1.to($('#' + id), 0.5, { opacity: '0.5', ease:Power3.easeOut}, '0');
	t1.to($('#' + id).children('.right'), 0, { color: 'red', ease:Power3.easeOut}, '0');
	t1.play();
	}
	}
	});	
	
	function ShowMapVote(data) {
	
	$('#blu').text(data.blu);
	$('#red').text(data.red);
	
	$('#map1-name').text(data.mapID1);
	$('#map2-name').text(data.mapID2);
	$('#map3-name').text(data.mapID3);
	$('#map4-name').text(data.mapID4);
	$('#map5-name').text(data.mapID5);
	$('#map6-name').text(data.mapID6);
	$('#map7-name').text(data.mapID7);
	$('#map8-name').text(data.mapID8);

	$('#m1').addClass(data.mapID1);
	$('#m2').addClass(data.mapID2);
	$('#m3').addClass(data.mapID3);
	$('#m4').addClass(data.mapID4);
	$('#m5').addClass(data.mapID5);
	$('#m6').addClass(data.mapID6);
	$('#m7').addClass(data.mapID7);
	$('#m8').addClass(data.mapID8);	
	
	var t1 = new TimelineLite({paused: true});
	t1.to($('#mapvote'), 0, { visibility: 'visible', ease:Power3.easeOut}, '0');
	t1.to($('#blu'), 0, { visibility: 'visible', ease:Power3.easeOut}, '0');
	t1.to($('#red'), 0, { visibility: 'visible', ease:Power3.easeOut}, '0');
	t1.to($('#m1'), 0.5, { opacity: '1', ease:Power3.easeOut}, '0');
	t1.to($('#m2'), 0.5, { opacity: '1', ease:Power3.easeOut}, '0.1');
	t1.to($('#m3'), 0.5, { opacity: '1', ease:Power3.easeOut}, '0.2');
	t1.to($('#m4'), 0.5, { opacity: '1', ease:Power3.easeOut}, '0.3');
	t1.to($('#m5'), 0.5, { opacity: '1', ease:Power3.easeOut}, '0.4');
	t1.to($('#m6'), 0.5, { opacity: '1', ease:Power3.easeOut}, '0.5');
	t1.to($('#m7'), 0.5, { opacity: '1', ease:Power3.easeOut}, '0.6');
	
	
	
	//t1.to($('#m8'), 0.25, { opacity: '1', ease:Power3.easeOut}, '0');
	
	t1.play();
	state = true;
	
	
	
	}
	
	function HideMapVote() {
	
	var t1 = new TimelineLite({paused: true});
	t1.to($('#mapvote'), 0, { visibility: 'hidden', ease:Power3.easeOut}, '0.79');
	t1.to($('#blu'), 0, { visibility: 'hidden', ease:Power3.easeOut}, '0.75');
	t1.to($('#red'), 0, { visibility: 'hidden', ease:Power3.easeOut}, '0.75');
	t1.to($('#m1'), 0.5, { opacity: '0', boxShadow: 'inset 0px 0px 0px 0px black', ease:Power3.easeOut}, '0.7');
	t1.to($('#m2'), 0.5, { opacity: '0', boxShadow: 'inset 0px 0px 0px 0px black', ease:Power3.easeOut}, '0.6');
	t1.to($('#m3'), 0.5, { opacity: '0', boxShadow: 'inset 0px 0px 0px 0px black', ease:Power3.easeOut}, '0.5');
	t1.to($('#m4'), 0.5, { opacity: '0', boxShadow: 'inset 0px 0px 0px 0px black', ease:Power3.easeOut}, '0.4');
	t1.to($('#m5'), 0.5, { opacity: '0', boxShadow: 'inset 0px 0px 0px 0px black', ease:Power3.easeOut}, '0.3');
	t1.to($('#m6'), 0.5, { opacity: '0', boxShadow: 'inset 0px 0px 0px 0px black', ease:Power3.easeOut}, '0.2');
	t1.to($('#m7'), 0.5, { opacity: '0', boxShadow: 'inset 0px 0px 0px 0px black', ease:Power3.easeOut}, '0.1');
	//t1.to($('#m8'), 0.25, { opacity: '0', ease:Power3.easeOut}, '0');
	t1.to($('.left').text(''), 0, {}, '0.75' );
	t1.to($('.right').text(''), 0, {}, '0.75' );
	t1.play();
	state = false;
	}
	
	function ToggleBluPick() {
	if (bluState == false) {
		bluState = true;
		redState = false;
		var t1 = new TimelineLite({paused: true});
		t1.fromTo($('#blu'), 0.7, { textShadow: "0px 0px 0px 0px rgba(255,255,255,0.3)"}, {
									 textShadow: "0px 0px 20px 10px rgba(255,255,255,0.7)",
									 repeat: -1,
									 yoyo: true,
									ease: Linear.easeNone
									});
		t1.to($('#blu'), 0, { color: 'white', textShadow: "0px 0px 0px 0px white", ease:Power3.easeOut}, '0');
		t1.to($('#red'), 0, { color: 'white', textShadow: "0px 0px 0px 0px white", ease:Power3.easeOut}, '0');
		t1.play();
		
	}
	else {
		bluState = false;
		var t1 = new TimelineLite({paused: true});
		t1.to($('#blu'), 0, { color: 'white', textShadow: "0px 0px 0px 0px white", ease:Power3.easeOut}, '0');
		t1.to($('#red'), 0, { color: 'white', textShadow: "0px 0px 0px 0px white", ease:Power3.easeOut}, '0');
		t1.play();
		
	}
	}
	
	function ToggleRedPick () {
	if (redState == false) {
		redState = true;
		bluState = false;
		var t1 = new TimelineLite({paused: true});
		t1.fromTo($('#red'), 0.7, { textShadow: "0px 0px 0px 0px rgba(255,255,255,0.3)"}, {
									 textShadow: "0px 0px 20px 10px rgba(255,255,255,0.7)",
									 repeat: -1,
									 yoyo: true,
									ease: Linear.easeNone
									});
		t1.to($('#red'), 0, { color: 'white', ease:Power3.easeOut}, '0');
		t1.to($('#blu'), 0, { color: 'white', textShadow: "0px 0px 0px 0px white", ease:Power3.easeOut}, '0');
		t1.play();
		
	}
	else {
		redState = false;
		var t1 = new TimelineLite({paused: true});
		t1.to($('#red'), 0, { color: 'white', textShadow: "0px 0px 0px 0px white", ease:Power3.easeOut}, '0');
			t1.to($('#blu'), 0, { color: 'white', textShadow: "0px 0px 0px 0px white", ease:Power3.easeOut}, '0');
		t1.play();
		console.log("else" + bluState);
	}
	}


});
'use strict';

$('#mapvote_in').click(function () {
	nodecg.sendMessage('mapvoteIn', updateData());
	
});
$('#mapvote_out').click(function () {
	nodecg.sendMessage('mapvoteOut');
	$('.btn').removeClass( "selected" );
});
$('.blu_pick').click(function () {
	var id = $(this).closest('.row').attr('id');
	nodecg.sendMessage('blu_pick', id);
	
	if ($(this).hasClass("selected") || $(this).closest('.row').children('.col-sm-2').children('.btn').hasClass("selected")) {
	$(this).closest('.row').children('.col-sm-2').children('.btn').removeClass('selected'); }
	
	else {
	$(this).closest('.row').children('.col-sm-2').children('.btn').removeClass('selected');
	$(this).toggleClass( "selected" ); }

});
$('.blu_ban').click(function () {

	var id = $(this).closest('.row').attr('id');
	nodecg.sendMessage('blu_ban', id);
	

	$(this).closest('.row').children('.col-sm-2').children('.btn').removeClass('selected');
	$(this).toggleClass( "selected" ); 
	
});
$('.red_pick').click(function () {
	var id = $(this).closest('.row').attr('id');
	nodecg.sendMessage('red_pick', id);
	

	$(this).closest('.row').children('.col-sm-2').children('.btn').removeClass('selected');
	$(this).toggleClass( "selected" ); 
});
$('.red_ban').click(function () {
	var id = $(this).closest('.row').attr('id');
	nodecg.sendMessage('red_ban', id);

	$(this).closest('.row').children('.col-sm-2').children('.btn').removeClass('selected');
	$(this).toggleClass( "selected" ); 
	
});
$('#blu-toggle').click(function () {
	nodecg.sendMessage('bluturn')
	
});
$('#red-toggle').click(function () {
	nodecg.sendMessage('redturn');
	
});








function updateData() {
	return {
	'blu' : $('#blu-team').val(),
	'red' : $('#red-team').val(),
	'mapID1' : $('#map1').val(),
	'mapID2' : $('#map2').val(),
	'mapID3' : $('#map3').val(),
	'mapID4' : $('#map4').val(),
	'mapID5' : $('#map5').val(),
	'mapID6' : $('#map6').val(),
	'mapID7' : $('#map7').val(),
	'mapID8' : $('#map8').val()
	 		
	};
}
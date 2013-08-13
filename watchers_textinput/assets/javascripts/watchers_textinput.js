var WatchersTextInput = (function() {
    var checkboxes;
    var select_box;

    function init() {
	$(function() {
		checkboxes  = $("#watchers_inputs input");
		select_box =  $("#watchers_select_box");
		//alert('started');
		var autocomplete_box = select_box.select2();
		autocomplete_box.change(function(val) {
			//console.log('change');
			sync_checkboxes();
		    });
	    });
    }

    function sync_checkboxes() {
	var selected_userids = select_box.val();
	
	//	selected_userids = select_box.val();
	//	console.log(select_box.val());
	//console.log(selected_userids);
	checkboxes.prop('checked', false);  // clear all boxes first
	if (selected_userids && selected_userids.length) {
	    for (var i=0; i < selected_userids.length; i++) {
		var userid = selected_userids[i];
		//console.log('selected user is:' + userid);
		
		$("#issue_watcher_user_ids_" + userid).find('input').prop('checked', true);
		    
	    }
	}

    }
    
    return {
	init: init
    }

})();

var AddWatchersTextInput = (function() {
    var checkbox_parent;
    var checkboxes;
    var select_box;



    function init() {
	$(function() {
		checkbox_parent  = $("#users_for_watcher");
		checkboxes =  $("#users_for_watcher input");
		select_box =  $("#add_watchers_select_box");
		//alert('started');
		var autocomplete_box = select_box.select2({'width': 350});
		autocomplete_box.change(function(val) {
			sync_checkboxes();
		    });

		fix_modal_overflow();
		/*
		setTimeout(function() {
			console.log($(".modal"));
			$(".modal").css("overflow", "visible");
		    }, 500);
		*/
	    });
    }

    function sync_checkboxes() {
	selected_userids = select_box.val();
	//console.log(selected_userids);
	checkboxes.prop('checked', false);  // clear all boxes first
	if (selected_userids && selected_userids.length) {
	    for (var i=0; i < selected_userids.length; i++) {
		var userid = selected_userids[i];
		//console.log('selected user is:' + userid);
		
		//$("#issue_watcher_user_ids_" + userid).find('input').prop('checked', true);
		checkbox_parent.find('input[value=' + userid + ']').prop('checked', true);
	    }
	}

    }
    
    function fix_modal_overflow() {
	// have to poll until the modal element  exists..
	var modal = $(".modal");
	if (modal.length) {
	    modal.css("overflow", "visible");
	} else {
	    setTimeout(fix_modal_overflow, 100);
	    //console.log('try again');
	}
    }

    return {
	init: init
    }

})();


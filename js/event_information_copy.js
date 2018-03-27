// var eventCategory;
// var eventCategory;
var minInterest = 2;
var maxInterest = 5;

var feststartDate;
var festendDate;
var feststartTime;
var festendTime;
var festName;
var festLocation='';
var festDescription='';


var title="";
var name="";
var email="";
var category="";
var agenda="";
var s_description="";
var l_description="";
var twitter_link="";
var linkedin_link ="";

var id="";        /*event id or festival id*/
var type="";    /* type (single or multiple)*/

$(document).ready(function() {
    id=$("#id").val();
    type=$("#type").val();

    iconClickShowHide();
    nextPrevIconClick();
    getRegistrationForm();
    saveRegistrationForm();
    saveWebSocialLinks();
    saveContactDetails();
    basicInfoDefaultAction();
    editCategoryIcon();
    editInterestIcon();
    saveBasicInfo();
    speakerDefaultAction();
    sponsorDefaultAction();
    saveSpeakerDetails();
    addSpeakerCategory();
    editSpeaker();
    editSponsor();
    deleteSpeaker();
    deleteSponsor();
    refreshSpeakerForm();
    refreshSponsorForm();
    saveSponsor();
    addSponsorCategory();
    initializeEventIdAgenda();
    scrollAgendaDetailDiv();
    loadAgenda();
    onClickAgendaIcon();
    getFAqFormList();
    addFAqField();
    removeFAqField();
    saveFAqForm();
    deleteFAqField();
    getStakeholderFormList();
    addStakeholderField();
    removeStakeholderField();
    saveStakeholderForm();
    deleteStakeholderField();
    exhibitorDefaultAction();
    refreshExhibitorForm();
    deleteExhibitor();
    editExhibitor();
    addExhibitorCategory();
    saveExhibitor();

    $("#error_label").hide(); /*error tag for create hastag*/

    $('#load').click(function (e) {
        event.preventDefault();
        $("#gallery-modal").modal();
    });

//  load('plugins/tinymce4/lioniteimages/lioniteimages.html')

});/*Document ready ends here*/


/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ icon click Show hide starts~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

function iconClickShowHide(){
    $(".basic_information").on("click", function(e){
        $("#information-icons").hide();
        $("#basic_information").show();
    });

    $(".social_links").on("click", function(e){
        $("#information-icons").hide();
        $("#social_links").show();
    });
    $(".contact_details").on("click", function(e){
        $("#information-icons").hide();
        $("#contact_details").show();
    });
    $(".contact_details").on("click", function(e){
        $("#information-icons").hide();
        $("#contact_details").show();
    });
    $(".registration-form-icon").on("click", function(e){
        $("#information-icons").hide();
        $("#registration-form").show();
    });

    $(".agenda-form-icon").on("click", function(e){
        $("#information-icons").hide();
        $("#agenda-form").show();
    });

    $(".logo-banner-icon").on("click", function(e){
        $("#information-icons").hide();
        $("#logo-banner-form").show();
    });

    $(".event_faqs").on("click", function(e){
        $("#information-icons").hide();
        $("#event_faqs").show();
    });

    $(".stakeholders_icon").on("click", function(e){
        $("#information-icons").hide();
        $("#stakeholders").show();
    });

    $(".speaker_details").on("click", function(e){
        $("#information-icons").hide();
        $("#speaker_details").show();
        var dataString='id='+id+'&type='+type;
        $.ajax({
            dataType: "json",
            type: "POST",
            data: dataString,
            url: "getAgendaList_json.php",
            success: function(data) {
                if(data["status"]=='Success'){
                    var arr = [];
                    for (var prop in data) {
                        if(prop != 'status'){
                            arr.push(data[prop]);
                        }
                    }
                    var agenda_id='';
                    var agenda_name='';
                    for(var p=0;p<arr.length;p++){
                        agenda_id=arr[p]['agenda_id'];
                        agenda_name=arr[p]['agenda_name'];
                        $('#speaker_agenda').append('<option value="'+agenda_id+'">'+agenda_name+'</option>');
                    }
                }
                else{

                }
            }
        });
        $("#speaker_category").change(function() {
            if($("#speaker_category").val()=="add_category"){
                $("#custom_input_field_speaker").show();
            }
            else{
                $("#custom_input_field_speaker").hide();
            }
        });
    });

    $(".sponsor_details").on("click", function(e){
        $("#information-icons").hide();
        $("#sponsor_details").show();
        $("#sponsor_category").change(function() {
            if($("#sponsor_category").val()=="add_category"){
                $("#custom_input_field_sponsor").show();
            }
            else{
                $("#custom_input_field_sponsor").hide();
            }
        });
    });

    $(".exhibitor_details").on("click", function(e){
        $("#information-icons").hide();
        $("#exhibitor_details").show();
        //$("#custom_input_field_exhibitor").hide();
        $("#exhibitor_category").change(function() {
            if($("#exhibitor_category").val()=="add_category"){
                $("#custom_input_field_exhibitor").show();
            }
            else{
                $("#custom_input_field_exhibitor").hide();
            }
        });
    });
}

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ icon click Show hide ends~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ next previous click starts here~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

function nextPrevIconClick(){
//back and next actions
    $("#editable-basic-info-back").on("click", function(e){
        $("#information-icons").show();
        $("#basic_information").hide();
    });
    $("#social-links-back").on("click", function(e){
        $("#basic_information").show();
        $("#social_links").hide();
    });
    $("#editable-basic-info-next").on("click", function(e){
        $("#social_links").show();
        $("#basic_information").hide();
    });
    $("#social-links-next").on("click", function(e){
        $("#information-icons").show();
        $("#social_links").hide();
    });
    $("#speaker-details-back").on("click", function(e){
        $("#information-icons").show();
        $("#speaker_details").hide();
    })
    ;$("#speaker-details-next").on("click", function(e){
        $("#sponsor_details").show();
        $("#speaker_details").hide();
        $("#sponsor_category").change(function() {
            if($("#sponsor_category").val()=="add_category"){
                $("#custom_input_field_sponsor").show();
            }
            else{
                $("#custom_input_field_sponsor").hide();
            }
        });
    });
    $("#sponsor-details-back").on("click", function(e){
        $("#speaker_details").show();
        $("#sponsor_details").hide();
        $("#speaker_category").change(function() {
            if($("#speaker_category").val()=="add_category"){
                $("#custom_input_field_speaker").show();
            }
            else{
                $("#custom_input_field_speaker").hide();
            }
        });
    })
    ;$("#sponsor-details-next").on("click", function(e){
        $("#information-icons").show();
        $("#sponsor_details").hide();
    });
//back and next actions ends

}

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ next previos action ends  here ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/


/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Speaker form starts here ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
var url_speaker="insertSpeakerDetails_json.php";
var placeholder_str='<li class="select2-search select2-search--inline">' +
    '<input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" placeholder="Click to select Agenda" style="width: 296px;">' +
    '</li>';
function speakerDefaultAction(){
    resetAllVal();
    setListName("#event_speakers");
    setResultPageName('getEventSpeakerList_json.php');
    getresult('getEventSpeakerList_json.php',0,'','#event_speakers',id,type);
    resetAllVal1();
    setListName1("#user_speakers");
    setResultPageName1('getUserSpeakerList_json.php');
    getresult1('getUserSpeakerList_json.php',0,'','#user_speakers',id,type);
    $("#speaker-details-form").validate({
        rules: {
            speaker_email:
            {
                required: true,
                email: true
            },
            speaker_name:
            {
                required:true,
                minlength:3
            },
            speaker_short_description:
            {
                required: true,
                minlength:3
            },
            speaker_agenda:
            {
                required:true,
            }
        },
        messages: {
            speaker_email: {
                required: "Enter Speaker's email please",
                email: "Enter valid email please"
            },
            speaker_name: {
                required: "Enter Speaker's name please",
                minlength:"Enter minimum 3 characters"
            },
            speaker_short_description: {
                required: 'Enter Short Description please',
                minlength:"Enter minimum 3 characters"
            },
            speaker_agenda:
            {
                required: "Please select agenda"
            }
        },
        errorPlacement: function(error, element) {
            if (element.is(":radio") || element.is(":checkbox")) {
                element.closest('.option-group').after(error);
            }
            else {
                error.insertAfter(element);
            }
        },
        onsubmit: true
    });
}

function saveSpeakerDetails(){
    $("#submit-speaker-details").live("click",function(e){

        if($("#speaker-details-form").valid()){
            var title = encodeURIComponent(document.getElementById("speaker_title").value);
            var name = encodeURIComponent(document.getElementById("speaker_name").value);
            var email = encodeURIComponent(document.getElementById("speaker_email").value);
            var category = encodeURIComponent(document.getElementById("speaker_category").value);
            var s_description = encodeURIComponent(document.getElementById("speaker_short_description").value);
            var l_description = encodeURIComponent(document.getElementById("speaker_long_description").value);
            var linkedin_raw = document.getElementById("speaker_linkedin_link").value.replace("https://","");
            var linkedin_link= encodeURIComponent(checkForBlanksocailvalue('http://'+ linkedin_raw.replace("http://","")));
            var twitter_raw = document.getElementById("speaker_twitter_link").value.replace("https://","");
            var twitter_link = encodeURIComponent(checkForBlanksocailvalue('http://'+ twitter_raw.replace("http://","")));
            var display_email = encodeURIComponent(document.getElementById("speaker_email_switch").checked);


            var agenda = [];
            var array = [];
            $('#speaker_agenda :selected').each(function(i, selected){
                agenda[i] = $(selected).val();
            });

            $("#submit-speaker-details span").text("Saving...");
            $("#submit-speaker-details").prop('disabled', true);
            $('.button-loader').show();

            var dataString ='id='+id+'&type='+type+'&title='+title+'&name='+name+'&email='+email+'&display_email='+display_email+'&category='+category+'&agenda='+agenda+'&s_description='+s_description+'&l_description='+l_description+'&twitter_link='+twitter_link+'&linkedin_link='+linkedin_link;
            /*alert(dataString);*/
            $.ajax({
                dataType: "json",
                type: "POST",
                data: dataString,
                url:url_speaker,
                complete:function(){

                },
                success: function(data) {
                    if(data["status"]=="Success") {
                        $('.button-loader').hide();
                        $("#submit-speaker-details span").text("Save Changes");
                        $("#submit-speaker-details").prop('disabled', false);
                        $("#speaker-details-form").find("input,textarea,select").val("");
                        $("#speaker_agenda").each(function (){
                            $(this).select2('val', '');
                        });
                        $("#speaker_email_switch").attr('checked', 'checked');

                        var raw_name = "";
                        var str = "";
                        var str1 = "";
                        if (data["name"].length > parseInt($("#characterLimit_speaker_name").val())) {
                            raw_name = data["name"].substring(0, parseInt($("#characterLimit_speaker_name").val()));
                            raw_name += "...";
                        } else {
                            raw_name = data["name"];
                        }
                        for (var i = 0; i < data['agenda'].length; ++i) {
                            str += '<input type="hidden" id="' + data["id"] + '_agenda_id_' + i + '" value="' + data["agenda"][i] + '">';
                            str1 += '<input type="hidden" id="' + data["id"] + '_agenda_name_' + i + '" value="' + data["agenda_name"][i] + '">';
                        }
                        data["linkedin_link"] = data["linkedin_link"].substring(7);
                        data["twitter_link"] = data["twitter_link"].substring(7);

                        var mainStr = '<div class="col-md-3 col-sm-4 col-xs-6" id="event-speaker-' + data["id"] + '" style="margin-top:2%;">\
                                <div class="row" id="event-speaker-box">\
                                <div class="row text-center" id="event-speaker-image-holder">\
                                <img id="event_speaker_img" data-toggle="popover" class="' + data["id"] + '" src="images/profile_default.png"></img>\
                                </div>\
                                <input type="hidden" id="' + data["id"] + '_name" value="' + data["name"] + '">\
                                <input type="hidden" id="' + data["id"] + '_title" value="' + data["title"] + '">\
                                <input type="hidden" id="' + data["id"] + '_category" value="' + data["category"] + '">\
                                <input type="hidden" id="' + data["id"] + '_position" value="' + data["position"] + '">\
                                <input type="hidden" id="' + data["id"] + '_id" value="' + data["id"] + '">\
                                <input type="hidden" id="' + data["id"] + '_emailid" value="' + data["emailid"] + '">\
                                <input type="hidden" id="' + data["id"] + '_long_description" value="' + data["long_description"] + '">\
                                <input type="hidden" id="' + data["id"] + '_short_description" value="' + data["short_description"] + '">\
                                <input type="hidden" id="' + data["id"] + '_display_email" value="' + data["display_email"] + '">\
                                <input type="hidden" id="' + data["id"] + '_twitter_link" value="' + data["twitter_link"] + '">\
                                <input type="hidden" id="' + data["id"] + '_linkedin_link" value="' + data["linkedin_link"] + '">\
                                ' + str + ' ' + str1 + '<div class="row event-speaker-text">\
                                <h5>' + data["title_name"] + " " + raw_name + '</h5>\
                                <div class="row text-center">\
                                <a href="#speaker_details" class="' + data["id"] + '" id="edit-speaker">edit</a>\
                                <span class="' + data["id"] + '" id="delete-speaker">delete</span>\
                                </div>\
                                </div>\
                                </div>\
                                </div>';
                        if(data['operation']=="insert"){
                            $("#event_speakers").prepend(mainStr);
                        }else if(data['operation']=="update"){
                            $("#event-speaker-"+data['id']).remove();
                            $("#event_speakers").prepend(mainStr);
                        }else if(data['operation']=="add"){
                            $("#event_speakers").prepend(mainStr);
                            $("#user-speaker-"+data['id']).remove();
                        }

                        url_speaker="insertSpeakerDetails_json.php";
                    }
                    else{
                        alert("Unable to put speaker into database");
                    }
                }
            });
        }else{
            window.location = "#speaker_details";
        }
    });
}

function addSpeakerCategory(){
    $("#add-speaker-category").on("click", function(e){
        var categoryName = $("#custom_speaker_category").val();
        if(categoryName !== ''){
            $.ajax({
                dataType: "json",
                type: "POST",
                data: 'categoryName='+categoryName+'&type=speaker',
                url: "addCategory_json.php",
                success: function(data) {
                    if(data["status"]=='Success'){
                        var newOption = "<option value='"+categoryName+"'>"+categoryName+"</option>";
                        $("#speaker_category").append(newOption);
                        $('select[name="speaker_category"]').find('option:contains("'+categoryName+'")').attr("selected",true);
                        $("#custom_input_field_speaker").hide();
                    }
                    else{
                        alert("Unable to add speaker category to Database");
                    }
                }
            });
        }
        else{
            alert("else");
        }
    });
}

function editSpeaker(){
    $("#edit-speaker").live("click",function(){
        $("#speaker_agenda").each(function (){
            $(this).select2('val', '')
        });
        $(".select2-selection__rendered li").remove();
        var speaker_id=this.className.split(" ")[0];
        var k="";
        var p=0;
        var str='';
        var arr=[];
        var arr2 = [];
        var arr3 = [];
        var index = 0;

        $("#speaker_title").val($("#"+speaker_id+"_title").val());
        $("#speaker_category").val($("#"+speaker_id+"_category").val());
        $("#speaker_name").val($("#"+speaker_id+"_name").val());
        $("#speaker_email").val($("#"+speaker_id+"_emailid").val());
        $("#speaker_short_description").val($("#"+speaker_id+"_short_description").val());
        $("#speaker_long_description").val($("#"+speaker_id+"_long_description").val());
        $("#speaker_linkedin_link").val($("#"+speaker_id+"_linkedin_link").val());
        $("#speaker_twitter_link").val($("#"+speaker_id+"_twitter_link").val());

        /*The below if and else is for setting the display email switch*/
        if($("#"+speaker_id+"_display_email").val() == 1){
            $("#speaker_email_switch").attr('checked', 'checked');
        }else{
            $("#speaker_email_switch").attr('checked', false);
        }

        p=$('input[id^="'+speaker_id+'_agenda_id_"]').length; /*Number of agendas*/
        console.log(p);
        for(var i=0;i<p;++i){
            k=$('#'+speaker_id+'_agenda_id_'+i).val();
            l=$('#'+speaker_id+'_agenda_name_'+i).val();
            str+='<li class="select2-selection__choice" title="'+l+'"><span class="select2-selection__choice__remove" role="presentation">x</span>'+l+'</li>';
            arr.push(k);
            arr2.push(l);
        }

        $('#speaker_agenda').val(arr); /*this will select value in select2 multiselect box*/

        arr3 = arr;
        $('.select2-selection__choice__remove').live("click",function(e){
            $(this).parent().remove();
            index = arr2.indexOf($(this).parent().attr("title"));
            if(index != -1){
                arr3.splice(index, 1);
            }
            if($('.select2-selection__rendered li').length == 0){
                $(".select2-selection__rendered").append(placeholder_str);
            }
            $('#speaker_agenda').val(arr3);

        }); /*The above block was for manual action on clicking cross button on selected item*/



        $(".select2-selection__rendered").prepend(str);
        $(".select2-search select2-search--inline").remove();
        url_speaker="editSpeakerDetails_json.php?speaker_id="+speaker_id+"&";
    });

    $("#user_speakers #user_speaker_img").live("click",function(){
        var speaker_id=this.className.split(" ")[0];
        $("#speaker_title").val($("#"+speaker_id+"_title").val());
        $("#speaker_category").val($("#"+speaker_id+"_category").val());
        $("#speaker_name").val($("#"+speaker_id+"_name").val());
        $("#speaker_email").val($("#"+speaker_id+"_emailid").val());
        $("#speaker_short_description").val($("#"+speaker_id+"_short_description").val());
        $("#speaker_long_description").val($("#"+speaker_id+"_long_description").val());
        $("#speaker_linkedin_link").val($("#"+speaker_id+"_linkedin_link").val());
        $("#speaker_twitter_link").val($("#"+speaker_id+"_twitter_link").val());

        /*The below check is for editing appended speaker after deleting in event speaker list*/
        if ( $('.select2-selection__rendered').children().length == 0 ) {
            var str='<li class="select2-search select2-search--inline">' +
                '<input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" placeholder="Click to select Agenda" style="width: 296px;">' +
                '</li>';
            $(".select2-selection__rendered").append(str);
        }
        url_speaker="insertSpeakerDetails_json.php";
    });

}
function deleteSpeaker(){
    var speaker_id="";

    $("#delete-speaker").live("click",function(e){
        speaker_id=this.className.split(" ")[0];
        $("#delete-speaker-confirmation-modal").modal("show");
    });
    $("#delete-speaker-yes").live("click",function(e){
        var title = $("#"+speaker_id+"_title").val();
        var name = $("#"+speaker_id+"_name").val();
        var email = $("#"+speaker_id+"_emailid").val();
        var s_description = $("#"+speaker_id+"_short_description").val();
        var l_description = $("#"+speaker_id+"_long_description").val();
        var linkedin_link = $("#"+speaker_id+"_linkedin_link").val();
        var twitter_link = $("#"+speaker_id+"_twitter_link").val();
        var title_name = $("#event-speaker-"+speaker_id+" h5").html().split(" ")[0];
        var name_raw = '';
        for(var i=1;i<4;i++)
        {
            if($("#event-speaker-"+speaker_id+" h5").html().split(" ")[i] != undefined){
                name_raw+= $("#event-speaker-"+speaker_id+" h5").html().split(" ")[i];
                name_raw+=' ';
            }
        }

        $.ajax({
            dataType: "json",
            type: "POST",
            data: 'id='+id+'&type='+type+'&speaker_id='+speaker_id,
            url: "deleteEventSpeaker_json.php",
            success: function(data) {
                if(data['status'] =='Success'){
                    $("#delete-speaker-confirmation-modal").modal("hide");
                    $("#event-speaker-"+speaker_id).remove();
                    if(data['operation']=='append'){
                        var mainStr = '<div class="col-md-6 col-sm-6 col-xs-12" id="event-speaker-' + speaker_id + '" style="margin-top:2%;">\
                                <div class="row" id="event-speaker-box">\
                                <div class="row text-center" id="event-speaker-image-holder">\
                                <img id="user_speaker_img" data-toggle="popover" class="' + speaker_id + '" src="images/profile_default.png"></img>\
                                </div>\
                                <input type="hidden" id="' + speaker_id + '_name" value="' + name + '">\
                                <input type="hidden" id="' + speaker_id + '_title" value="' + title + '">\
                                <input type="hidden" id="' + speaker_id + '_id" value="' + speaker_id + '">\
                                <input type="hidden" id="' + speaker_id + '_emailid" value="' + email + '">\
                                <input type="hidden" id="' + speaker_id + '_long_description" value="' + l_description + '">\
                                <input type="hidden" id="' + speaker_id + '_short_description" value="' + s_description + '">\
                                <input type="hidden" id="' + speaker_id + '_twitter_link" value="' + twitter_link + '">\
                                <input type="hidden" id="' + speaker_id + '_linkedin_link" value="' + linkedin_link + '">\
                                <div class="row event-speaker-text">\
                                <h5>' + title_name + " " + name_raw + '</h5>\
                                </div>\
                                </div>\
                                </div>';
                        $("#user_speakers").prepend(mainStr);
                    }
                }
                else{
                    alert("Unable to delete the speaker");
                }
            }
        });

    });
}

function refreshSpeakerForm(){
    $("#refresh-speaker-details").live("click",function(e){
        $("#speaker-details-form").find("input,textarea,select").val("");
        $(".select2-selection__rendered li").remove();
        var str='<li class="select2-search select2-search--inline">' +
                '<input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" placeholder="Click to select Agenda" style="width: 296px;">' +
                '</li>';
        $(".select2-selection__rendered").append(str);
        $("#speaker_email_switch").attr('checked', 'checked');
    });
}
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Speaker form ends here ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Sponsor form starts here ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
var url_sponsor="insertSponsorDetails_json.php";
function sponsorDefaultAction(){
    resetAllVal();
    setListName("#event_sponsors");
    setResultPageName('getEventSponsorList_json.php');
    getresult('getEventSponsorList_json.php',0,'','#event_sponsors',id,type);
    resetAllVal1();
    setListName1("#user_sponsors");
    setResultPageName1('getUserSponsorList_json.php');
    getresult1('getUserSponsorList_json.php',0,'','#user_sponsors',id,type);
    $("#sponsor-details-form").validate({
        rules: {
            sponsor_email:
            {
                required: true,
                email: true
            },
            sponsor_name:
            {
                required:true,
                minlength:3
            },
            sponsor_title:
            {
                required: true,
                minlength:3
            }
        },
        messages: {
            sponsor_email: {
                required: "Enter Sponsor's email please",
                email: "Enter valid email please"
            },
            sponsor_name: {
                required: "Enter Sponsor's name please",
                minlength:"Enter minimum 3 characters"
            },
            sponsor_title: {
                required: 'Select Title please',
                minlength:"Enter minimum 3 characters"
            }
        },
        errorPlacement: function(error, element) {
            if (element.is(":radio") || element.is(":checkbox")) {
                element.closest('.option-group').after(error);
            }
            else {
                error.insertAfter(element);
            }
        },
        onsubmit: true
    });
}

function saveSponsor(){
    $("#submit-sponsor-details").on("click",function(e){
        if($("#sponsor-details-form").valid()){
            var title = encodeURIComponent(document.getElementById("sponsor_title").value);
            var name = encodeURIComponent(document.getElementById("sponsor_name").value);
            var email = encodeURIComponent(document.getElementById("sponsor_email").value);
            var category = encodeURIComponent(document.getElementById("sponsor_category").value);
            var description = encodeURIComponent(document.getElementById("sponsor_description").value);
            var fb_raw = document.getElementById("sponsor_fb_link").value.replace("https://","");
            var fb_link= encodeURIComponent(checkForBlanksocailvalue('http://'+ fb_raw.replace("http://","")));
            var twitter_raw = document.getElementById("sponsor_twitter_link").value.replace("https://","");
            var twitter_link = encodeURIComponent(checkForBlanksocailvalue('http://'+ twitter_raw.replace("http://","")));
            var website_raw = document.getElementById("sponsor_website_link").value.replace("https://","");
            var website_link = encodeURIComponent(checkForBlanksocailvalue('http://'+ website_raw.replace("http://","")));

            $("#submit-sponsor-details span").text("Saving...");
            $("#submit-sponsor-details").prop('disabled', true);
            $('.button-loader').show();

            var dataString ='id='+id+'&type='+type+'&title='+title+'&name='+name+'&email='+email+'&category='+category+'&description='+description+'&description='+description+'&twitter_link='+twitter_link+'&fb_link='+fb_link+'&website_link='+website_link;
            alert(dataString);
            $.ajax({
                dataType: "json",
                type: "POST",
                data: dataString,
                url: url_sponsor,
                success: function(data) {
                    if(data["status"]=='Success'){
                        $('.button-loader').hide();
                        $("#submit-sponsor-details span").text("Save Changes");
                        $("#submit-sponsor-details").prop('disabled', false);
                        $("#sponsor-details-form").find("input,textarea,select").val("");
                        var raw_name = "";
                        if (data["name"].length > parseInt($("#characterLimit_sponsor_name").val())) {
                            raw_name = data["name"].substring(0, parseInt($("#characterLimit_sponsor_name").val()));
                            raw_name += "...";
                        } else {
                            raw_name = data["name"];
                        }
                        data["fb_link"] = data["fb_link"].substring(7);
                        data["twitter_link"] = data["twitter_link"].substring(7);
                        data["website_link"] = data["website_link"].substring(7);

                         var mainStr = '<div class="col-md-3 col-sm-4 col-xs-6" id="event-sponsor-' + data["id"] + '" style="margin-top:2%;">\
                                        <div class="row" id="event-sponsor-box">\
                                        <div class="row text-center" id="event-sponsor-image-holder">\
                                        <img id="event_sponsor_img" data-toggle="popover" class="' + data["id"] + '" src="images/profile_default.png"></img>\
                                        </div>\
                                        <input type="hidden" id="' + data["id"] + '_name" value="' + data["name"] + '">\
                                        <input type="hidden" id="' + data["id"] + '_title" value="' + data["title"] + '">\
                                        <input type="hidden" id="' + data["id"] + '_category" value="' + data["category"] + '">\
                                        <input type="hidden" id="' + data["id"] + '_id" value="' + data["id"] + '">\
                                        <input type="hidden" id="' + data["id"] + '_emailid" value="' + data["emailid"] + '">\
                                        <input type="hidden" id="' + data["id"] + '_description" value="' + data["description"] + '">\
                                        <input type="hidden" id="' + data["id"] + '_twitter_link" value="' + data["twitter_link"] + '">\
                                        <input type="hidden" id="' + data["id"] + '_fb_link" value="' + data["fb_link"] + '">\
                                        <input type="hidden" id="' + data["id"] + '_website_link" value="' + data["website_link"] + '">\
                                        <div class="row event-sponsor-text">\
                                        <h5>' + raw_name + '</h5>\
                                        <div class="row text-center">\
                                        <a href="#sponsor_details" class="' + data["id"] + '" id="edit-sponsor">edit</a>\
                                        <span class="' + data["id"] + '" id="delete-sponsor">delete</span>\
                                        </div>\
                                        </div>\
                                        </div>\
                                        </div>';
                        if(data['operation']=="insert"){
                            $("#event_sponsors").prepend(mainStr);
                        }else if(data['operation']=="update"){
                            $("#event-sponsor-"+data['id']).remove();
                            $("#event_sponsors").prepend(mainStr);
                        }else if(data['operation']=="add"){
                            $("#event_sponsors").prepend(mainStr);
                            $("#user-sponsor-"+data['id']).remove();
                        }

                        url_sponsor="insertSponsorDetails_json.php";
                    }
                    else{
                        alert("Unable to Insert Contact details to Database");
                    }
                }
            });
        }else{
            window.location = "#sponsor_details";
        }
    });
}

function addSponsorCategory(){
    $("#add-sponsor-category").on("click", function(e){
        var categoryName = $("#custom_sponsor_category").val();
        if(categoryName !== ''){
            $.ajax({
                dataType: "json",
                type: "POST",
                data: 'categoryName='+categoryName+'&type=sponsor',
                url: "addCategory_json.php",
                success: function(data) {
                    if(data["status"]=='Success'){
                        var newOption = "<option value='"+categoryName+"'>"+categoryName+"</option>";
                        $("#sponsor_category").append(newOption);
                        $('select[name="sponsor_category"]').find('option:contains("'+categoryName+'")').attr("selected",true);
                        $("#custom_input_field_sponsor").hide();
                    }
                    else{
                        alert("Unable to add sponsor category to Database");
                    }
                }
            });
        }
    });

}
function editSponsor(){
    $("#edit-sponsor").live("click",function(){

        var sponsor_id=this.className.split(" ")[0];
        $("#sponsor_title").val($("#"+sponsor_id+"_title").val());
        $("#sponsor_category").val($("#"+sponsor_id+"_category").val());
        $("#sponsor_name").val($("#"+sponsor_id+"_name").val());
        $("#sponsor_email").val($("#"+sponsor_id+"_emailid").val());
        $("#sponsor_description").val($("#"+sponsor_id+"_description").val());
        $("#sponsor_fb_link").val($("#"+sponsor_id+"_fb_link").val());
        $("#sponsor_twitter_link").val($("#"+sponsor_id+"_twitter_link").val());
        $("#sponsor_website_link").val($("#"+sponsor_id+"_website_link").val());

        url_sponsor="editSponsorDetails_json.php?sponsor_id="+sponsor_id+"&";
    });

    $("#user_sponsors #user_sponsor_img").live("click",function(){
        var sponsor_id=this.className.split(" ")[0];
        $("#sponsor_name").val($("#"+sponsor_id+"_name").val());
        $("#sponsor_email").val($("#"+sponsor_id+"_emailid").val());
        $("#sponsor_description").val($("#"+sponsor_id+"_description").val());
        $("#sponsor_fb_link").val($("#"+sponsor_id+"_fb_link").val());
        $("#sponsor_twitter_link").val($("#"+sponsor_id+"_twitter_link").val());
        $("#sponsor_website_link").val($("#"+sponsor_id+"_website_link").val());
        url_sponsor="insertSponsorDetails_json.php";
    });

}
function deleteSponsor(){
    var sponsor_id="";
    $("#delete-sponsor").live("click",function(e){
        sponsor_id=this.className.split(" ")[0];
        $("#delete-sponsor-confirmation-modal").modal("show");
    });
    $("#delete-sponsor-yes").live("click",function(e){
        var title = $("#"+sponsor_id+"_title").val();
        var name = $("#"+sponsor_id+"_name").val();
        var email = $("#"+sponsor_id+"_emailid").val();
        var description = $("#"+sponsor_id+"_description").val();
        var fb_link = $("#"+sponsor_id+"_linkedin_link").val();
        var twitter_link = $("#"+sponsor_id+"_twitter_link").val();
        var website_link = $("#"+sponsor_id+"_website_link").val();
        var name_raw = '';
        for(var i=0;i<3;i++)
        {
            if($("#event-sponsor-"+sponsor_id+" h5").html().split(" ")[i] != undefined){
                name_raw+= $("#event-sponsor-"+sponsor_id+" h5").html().split(" ")[i];
                name_raw+=' ';
            }
        }
        $.ajax({
            dataType: "json",
            type: "POST",
            data: 'id='+id+'&type='+type+'&sponsor_id='+sponsor_id,
            url: "deleteEventSponsor_json.php",
            success: function(data) {
                if(data['status'] =='Success'){
                    $("#delete-sponsor-confirmation-modal").modal("hide");
                    $("#event-sponsor-"+sponsor_id).remove();
                    if(data['operation']=='append'){
                        var mainStr = '<div class="col-md-6 col-sm-6 col-xs-12" id="event-sponsor-' + sponsor_id + '" style="margin-top:2%;">\
                                <div class="row" id="event-sponsor-box">\
                                <div class="row text-center" id="event-sponsor-image-holder">\
                                <img id="user_sponsor_img" data-toggle="popover" class="' + sponsor_id + '" src="images/profile_default.png"></img>\
                                </div>\
                                <input type="hidden" id="' + sponsor_id + '_name" value="' + name + '">\
                                <input type="hidden" id="' + sponsor_id + '_title" value="' + title + '">\
                                <input type="hidden" id="' + sponsor_id + '_id" value="' + sponsor_id + '">\
                                <input type="hidden" id="' + sponsor_id + '_emailid" value="' + email + '">\
                                <input type="hidden" id="' + sponsor_id + '_short_description" value="' + description + '">\
                                <input type="hidden" id="' + sponsor_id + '_twitter_link" value="' + twitter_link + '">\
                                <input type="hidden" id="' + sponsor_id + '_fb_link" value="' + fb_link + '">\
                                <input type="hidden" id="' + sponsor_id + '_website_link" value="' + website_link + '">\
                                <div class="row event-sponsor-text">\
                                <h5>' + name_raw + '</h5>\
                                </div>\
                                </div>\
                                </div>';
                        console.log(mainStr);
                        $("#user_sponsors").prepend(mainStr);
                    }
                }else{
                        alert("Unable to delete the sponsor");
                }

            }
        });

    });
}
function refreshSponsorForm(){
    $("#refresh-sponsor-details").live("click",function(e){
        $("#sponsor-details-form").find("input,textarea,select").val("");
    });
}
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Sponsor form ends here ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/



/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Exhibitor form starts here ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
var url_exhibitor="insertExhibitorDetails_json.php";
function exhibitorDefaultAction(){
    resetAllVal();
    setListName("#event_exhibitors");
    setResultPageName('getEventExhibitorList_json.php');
    getresult('getEventExhibitorList_json.php',0,'','#event_exhibitors',id,type);
    resetAllVal1();
    setListName1("#user_exhibitors");
    setResultPageName1('getUserExhibitorList_json.php');
    getresult1('getUserExhibitorList_json.php',0,'','#user_exhibitors',id,type);
    $("#exhibitor-details-form").validate({
        rules: {
            exhibitor_email:
            {
                required: true,
                email: true
            },
            exhibitor_name:
            {
                required:true,
                minlength:3
            },
            exhibitor_phone_number:
            {
                minlength:10,
                maxlength:10,
                digits:true
            }
        },
        messages: {
            exhibitor_email: {
                required: "Enter Exhibitor's email please",
                email: "Enter valid email please"
            },
            exhibitor_name: {
                required: "Enter Exhibitor's name please",
                minlength:"Enter minimum 3 characters"
            },
            exhibitor_phone_number:{
                minlength:"Number Should be of 10 Digits",
                maxlength:"Number Should be of 10 Digits",
                digits:"Only Numbers Allowed"
            }
        },
        errorPlacement: function(error, element) {
            if (element.is(":radio") || element.is(":checkbox")) {
                element.closest('.option-group').after(error);
            }
            else {
                error.insertAfter(element);
            }
        },
        onsubmit: true
    });
}

function saveExhibitor(){
    $("#submit-exhibitor-details").on("click",function(e){
        if($("#exhibitor-details-form").valid()){

            var name = encodeURIComponent(document.getElementById("exhibitor_name").value);
            var email = encodeURIComponent(document.getElementById("exhibitor_email").value);
            var category = encodeURIComponent(document.getElementById("exhibitor_category").value);
            var description = encodeURIComponent(document.getElementById("exhibitor_description").value);
            var fb_raw = document.getElementById("exhibitor_fb_link").value.replace("https://","");
            var fb_link= encodeURIComponent(checkForBlanksocailvalue('http://'+ fb_raw.replace("http://","")));
            var twitter_raw = document.getElementById("exhibitor_twitter_link").value.replace("https://","");
            var twitter_link = encodeURIComponent(checkForBlanksocailvalue('http://'+ twitter_raw.replace("http://","")));
            var website_raw = document.getElementById("exhibitor_website_link").value.replace("https://","");
            var website_link = encodeURIComponent(checkForBlanksocailvalue('http://'+ website_raw.replace("http://","")));
            var phone_number = encodeURIComponent(checkForBlanksocailvalue('+91'+ document.getElementById("exhibitor_phone_number").value.replace("+91","")));

            $("#submit-exhibitor-details span").text("Saving...");
            $("#submit-exhibitor-details").prop('disabled', true);
            $('.button-loader').show();

            var dataString ='id='+id+'&type='+type+'&name='+name+'&email='+email+'&category='+category+'&description='+description+'&description='+description+'&twitter_link='+twitter_link+'&fb_link='+fb_link+'&phone_number='+phone_number+'&website_link='+website_link;
            alert(dataString);
            $.ajax({
                dataType: "json",
                type: "POST",
                data: dataString,
                url: url_exhibitor,
                success: function(data) {
                    if(data["status"]=='Success'){
                        $('.button-loader').hide();
                        $("#submit-exhibitor-details span").text("Save Changes");
                        $("#submit-exhibitor-details").prop('disabled', false);
                        $("#exhibitor-details-form").find("input,textarea,select").val("");
                        var raw_name = "";
                        if (data["name"].length > parseInt($("#characterLimit_exhibitor_name").val())) {
                            raw_name = data["name"].substring(0, parseInt($("#characterLimit_exhibitor_name").val()));
                            raw_name += "...";
                        } else {
                            raw_name = data["name"];
                        }
                        data["fb_link"] = data["fb_link"].substring(7);
                        data["twitter_link"] = data["twitter_link"].substring(7);
                        data["twitter_link"] = data["twitter_link"].substring(7);
                        data["website_link"] = data["website_link"].substring(7);
                        data["phone_number"] = data["phone_number"].substring(3);

                        var mainStr = '<div class="col-md-3 col-sm-4 col-xs-6" id="event-exhibitor-' + data["id"] + '" style="margin-top:2%;">\
                                        <div class="row" id="event-exhibitor-box">\
                                        <div class="row text-center" id="event-exhibitor-image-holder">\
                                        <img id="event_exhibitor_img" data-toggle="popover" class="' + data["id"] + '" src="images/profile_default.png"></img>\
                                        </div>\
                                        <input type="hidden" id="' + data["id"] + '_name" value="' + data["name"] + '">\
                                        <input type="hidden" id="' + data["id"] + '_category" value="' + data["category"] + '">\
                                        <input type="hidden" id="' + data["id"] + '_id" value="' + data["id"] + '">\
                                        <input type="hidden" id="' + data["id"] + '_emailid" value="' + data["emailid"] + '">\
                                        <input type="hidden" id="' + data["id"] + '_description" value="' + data["description"] + '">\
                                        <input type="hidden" id="' + data["id"] + '_twitter_link" value="' + data["twitter_link"] + '">\
                                        <input type="hidden" id="' + data["id"] + '_fb_link" value="' + data["fb_link"] + '">\
                                        <input type="hidden" id="' + data["id"] + '_website_link" value="' + data["website_link"] + '">\
                                        <input type="hidden" id="' + data["id"] + '_phone_number" value="' + data["phone_number"] + '">\
                                        <div class="row event-exhibitor-text">\
                                        <h5>' + raw_name + '</h5>\
                                        <div class="row text-center">\
                                        <a href="#exhibitor_details" class="' + data["id"] + '" id="edit-exhibitor">edit</a>\
                                        <span class="' + data["id"] + '" id="delete-exhibitor">delete</span>\
                                        </div>\
                                        </div>\
                                        </div>\
                                        </div>';
                        if(data['operation']=="insert"){
                            $("#event_exhibitors").prepend(mainStr);
                        }else if(data['operation']=="update"){
                            $("#event-exhibitor-"+data['id']).remove();
                            $("#event_exhibitors").prepend(mainStr);
                        }else if(data['operation']=="add"){
                            $("#event_exhibitors").prepend(mainStr);
                            $("#user-exhibitor-"+data['id']).remove();
                        }

                        url_exhibitor="insertExhibitorDetails_json.php";
                    }
                    else{
                        alert("Unable to Insert Contact details to Database");
                    }
                }
            });
        }else{
            window.location = "#exhibitor_details";
        }
    });
}

function addExhibitorCategory(){
    $("#add-exhibitor-category").on("click", function(e){
        var categoryName = $("#custom_exhibitor_category").val();
        if(categoryName !== ''){
            $.ajax({
                dataType: "json",
                type: "POST",
                data: 'categoryName='+categoryName+'&type=exhibitor',
                url: "addCategory_json.php",
                success: function(data) {
                    if(data["status"]=='Success'){
                        var newOption = "<option value='"+categoryName+"'>"+categoryName+"</option>";
                        $("#exhibitor_category").append(newOption);
                        $('select[name="exhibitor_category"]').find('option:contains("'+categoryName+'")').attr("selected",true);
                        $("#custom_input_field_exhibitor").hide();
                    }
                    else{
                        alert("Unable to add exhibitor category to Database");
                    }
                }
            });
        }
    });

}
function editExhibitor(){
    $("#edit-exhibitor").live("click",function(){

        var exhibitor_id=this.className.split(" ")[0];
        $("#exhibitor_category").val($("#"+exhibitor_id+"_category").val());
        $("#exhibitor_name").val($("#"+exhibitor_id+"_name").val());
        $("#exhibitor_email").val($("#"+exhibitor_id+"_emailid").val());
        $("#exhibitor_description").val($("#"+exhibitor_id+"_description").val());
        $("#exhibitor_fb_link").val($("#"+exhibitor_id+"_fb_link").val());
        $("#exhibitor_twitter_link").val($("#"+exhibitor_id+"_twitter_link").val());
        $("#exhibitor_website_link").val($("#"+exhibitor_id+"_website_link").val());
        $("#exhibitor_phone_number").val($("#"+exhibitor_id+"_phone_number").val());

        url_exhibitor="editExhibitorDetails_json.php?exhibitor_id="+exhibitor_id+"&";
    });

    $("#user_exhibitors #user_exhibitor_img").live("click",function(){
        var exhibitor_id=this.className.split(" ")[0];
        $("#exhibitor_name").val($("#"+exhibitor_id+"_name").val());
        $("#exhibitor_email").val($("#"+exhibitor_id+"_emailid").val());
        $("#exhibitor_description").val($("#"+exhibitor_id+"_description").val());
        $("#exhibitor_fb_link").val($("#"+exhibitor_id+"_fb_link").val());
        $("#exhibitor_twitter_link").val($("#"+exhibitor_id+"_twitter_link").val());
        $("#exhibitor_website_link").val($("#"+exhibitor_id+"_website_link").val());
        $("#exhibitor_phone_number").val($("#"+exhibitor_id+"_phone_number").val());
        url_exhibitor="insertExhibitorDetails_json.php";
    });

}
function deleteExhibitor(){
    var exhibitor_id="";
    $("#delete-exhibitor").live("click",function(e){
        exhibitor_id=this.className.split(" ")[0];
        $("#delete-exhibitor-confirmation-modal").modal("show");
    });
    $("#delete-exhibitor-yes").live("click",function(e){
        var title = $("#"+exhibitor_id+"_title").val();
        var name = $("#"+exhibitor_id+"_name").val();
        var email = $("#"+exhibitor_id+"_emailid").val();
        var description = $("#"+exhibitor_id+"_description").val();
        var fb_link = $("#"+exhibitor_id+"_linkedin_link").val();
        var twitter_link = $("#"+exhibitor_id+"_twitter_link").val();
        var website_link = $("#"+exhibitor_id+"_website_link").val();
        var phone_number = $("#"+exhibitor_id+"_phone_number").val();
        var name_raw = '';
        for(var i=0;i<3;i++)
        {
            if($("#event-exhibitor-"+exhibitor_id+" h5").html().split(" ")[i] != undefined){
                name_raw+= $("#event-exhibitor-"+exhibitor_id+" h5").html().split(" ")[i];
                name_raw+=' ';
            }
        }
        $.ajax({
            dataType: "json",
            type: "POST",
            data: 'id='+id+'&type='+type+'&exhibitor_id='+exhibitor_id,
            url: "deleteEventExhibitor_json.php",
            success: function(data) {
                if(data['status'] =='Success'){
                    $("#delete-exhibitor-confirmation-modal").modal("hide");
                    $("#event-exhibitor-"+exhibitor_id).remove();
                    if(data['operation']=='append'){
                        var mainStr = '<div class="col-md-6 col-sm-6 col-xs-12" id="event-exhibitor-' + exhibitor_id + '" style="margin-top:2%;">\
                                <div class="row" id="event-exhibitor-box">\
                                <div class="row text-center" id="event-exhibitor-image-holder">\
                                <img id="user_exhibitor_img" data-toggle="popover" class="' + exhibitor_id + '" src="images/profile_default.png"></img>\
                                </div>\
                                <input type="hidden" id="' + exhibitor_id + '_name" value="' + name + '">\
                                <input type="hidden" id="' + exhibitor_id + '_id" value="' + exhibitor_id + '">\
                                <input type="hidden" id="' + exhibitor_id + '_emailid" value="' + email + '">\
                                <input type="hidden" id="' + exhibitor_id + '_short_description" value="' + description + '">\
                                <input type="hidden" id="' + exhibitor_id + '_twitter_link" value="' + twitter_link + '">\
                                <input type="hidden" id="' + exhibitor_id + '_fb_link" value="' + fb_link + '">\
                                <input type="hidden" id="' + exhibitor_id + '_website_link" value="' + website_link + '">\
                                <input type="hidden" id="' + exhibitor_id + '_phone_number" value="' + phone_number + '">\
                                <div class="row event-exhibitor-text">\
                                <h5>' + name_raw + '</h5>\
                                </div>\
                                </div>\
                                </div>';
                        console.log(mainStr);
                        $("#user_exhibitors").prepend(mainStr);
                    }
                }else{
                    alert("Unable to delete the exhibitor");
                }

            }
        });

    });
}
function refreshExhibitorForm(){
    $("#refresh-exhibitor-details").live("click",function(e){
        $("#exhibitor-details-form").find("input,textarea,select").val("");
    });
}
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Exhibitor form ends here ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/



/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Basic Info forms starts here~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

var editableinterestId = [];
var interest_id;
var categoryId = [];
var preSelectedCategory;
var preSelectedInterests = [];
var preSelectedInterests_string;
var startTime;
var endDate;
var startDate;
var endTime;
var eventName='';
var description='';
var address='';
var city='';
var state='';
var country='';
var lat='';
var longi='';
var location_id;
var eventLocation='';
var loc_updated;


function basicInfoDefaultAction(){
    $(".basic_information").on("click", function(e){

        if(type == "multiple"){
            $("#festival_events_tab").show();
            $("#basic-info-form-category-container").hide();
            $('#basic-info .basic-info-form-interest-container').css('margin-top','0%');
        }else{
            $("#festival_events_tab").hide();
        }

        preSelectedCategory = document.getElementById("preselected_category").className;
        categoryId.push(preSelectedCategory);
        preSelectedInterests_string = document.getElementById("preselected_interests").className;
        preSelectedInterests = preSelectedInterests_string.split(', ');
        $("#editable-category-img."+preSelectedCategory).removeClass("icon-grayscale");
        $("#editable-category-img."+preSelectedCategory).addClass("selected");

        for (var a in preSelectedInterests){
            editableinterestId.push(preSelectedInterests[a]);
            $("#editable-interest-icon."+preSelectedInterests[a]).removeClass("icon-grayscale");
            $("#editable-interest-icon."+preSelectedInterests[a]).addClass("selected");
        }

        $("#editable-basic-info-form").validate({
            rules: {
                name:
                {
                    required: true,
                    minlength: 2
                },
                description:{
                    required:true,
                    minlength:30
                },
                start_date:
                {
                    required: true,
                    date: true
                },
                end_date: {
                    required: true
                },
                location: {
                    required: true
                }
            },
            messages: {
                name: {
                    required: 'Enter Event name please'
                },
                description: {
                    required: 'Enter Event Description please'

                },
                start_date: {
                    required: 'Enter start date please',
                },
                end_date: {
                    required: 'Enter end date please'
                },
                location: {
                    required: 'Select your location please'
                }
            },
            errorPlacement: function(error, element) {
                if (element.is(":radio") || element.is(":checkbox")) {
                    element.closest('.option-group').after(error);
                }
                else {
                    error.insertAfter(element);
                }
            },
            onsubmit: true
        });

        $('#editable_startDate').datetimepicker({format:'Y-m-d',
            timepicker:false,
            formatDate:'Y-m-d',
            minDate:0,
            onShow:function( ct ){
                this.setOptions({
                    maxDate:jQuery('#editable_endDate').val()?jQuery('#editable_endDate').val():false
                });
            },
            scrollMonth: false,
            closeOnDateSelect:true
        });
        $('#editable_endDate').datetimepicker({format:'Y-m-d',
            timepicker:false,
            formatDate:'Y-m-d',
            closeOnDateSelect:true,
            onShow:function( ct ){
                if(jQuery('#editable_startDate').val()!=='')
                {
                    this.setOptions({
                        minDate:jQuery('#editable_startDate').val()?jQuery('#editable_startDate').val():false
                    });
                }
                else{
                    this.setOptions({
                        minDate:0
                    });
                }
            },
            scrollMonth: false
        });
        $('#editable_startTime').datetimepicker({
            step:30,
            format:'H:i',
            datepicker:false,
            closeOnTimeSelect:true,
            onShow:function( ct ){
                if(jQuery('#editable_startDate').val() == jQuery('#editable_endDate').val()){
                    this.setOptions({
                        maxTime:'07:30:00'
                    });
                }
            }
        });
        $('#editable_endTime').datetimepicker({
            format:'H:i',
            datepicker:false,
            closeOnTimeSelect:true,
            step:30,
            onShow:function( ct ){
                if(jQuery('#editable_startDate').val() == jQuery('#editable_endDate').val()){
                    this.setOptions({
                        minTime:jQuery('#editable_startTime').val()?jQuery('#editable_startTime').val():false
                    });
                }
            }
        });
    });

}

function editInterestIcon(){
    $('#editable-interest-icon').live('click', function(){
        if (editableinterestId.length < maxInterest || editableinterestId.indexOf(this.className.split(" ")[0]) >-1){
            $("#editable-interest-error").css("display", "none");
            var $this = $(this);
            $this.toggleClass('selected');
            $this.toggleClass('icon-grayscale');
            if($this.hasClass('selected')){
                editableinterestId.push(this.className.split(" ")[0]);
                $this.next(':hidden').val($this.data('id'));
            }else{
                var index = editableinterestId.indexOf(this.className.split(" ")[0]);
                editableinterestId.splice(index, 1);
                $this.next(':hidden').val('');
            }
        }else{
            $("#editable-interest-error").css("display", "block");
            $('#editable-interest-error').addClass('animated slideInUp visible');
        }
    });
}

function editCategoryIcon(){
    $('#editable-category-img').live('click', function(){
        var $this = $(this);
        $('.'+categoryId[0]+'.selected.category').addClass('icon-grayscale');
        $('.'+categoryId[0]+'.selected.category').removeClass('selected');
        var index = categoryId.indexOf(categoryId[0]);
        categoryId.splice(index, 1);
        $this.toggleClass('selected');
        $this.toggleClass('icon-grayscale');
        categoryId.push(this.className.split(" ")[0]);
        $this.next(':hidden').val($this.data('id'));
    });
}

function saveBasicInfo(){
    $("#submit-editable-basic-info").on("click",function(e){
        if(categoryId.length !=1){
            $("#editable-category-error").css("display", "block");
            $('#editable-category-error').addClass('animated slideInUp visible');
            return;
        }
        if(editableinterestId.length < 2 ){
            $("#editable-interest-error").css("display", "block");
            $('#editable-interest-error').addClass('animated slideInUp visible');
            return;
        }

        if($("#editable-basic-info-form").valid()){
            $("#editable-interest-error").css("display", "none");
            $("#editable-category-error").css("display", "none");

            eventName = encodeURIComponent(document.getElementById("editable_eventName").value);
            startDate = encodeURIComponent(document.getElementById("editable_startDate").value);
            endDate = encodeURIComponent(document.getElementById("editable_endDate").value);
            startTime = encodeURIComponent(document.getElementById("editable_startTime").value);
            endTime = encodeURIComponent(document.getElementById("editable_endTime").value);
            description = encodeURIComponent(document.getElementById("editable_description").value);
            interest_id = encodeURIComponent(editableinterestId.join(", "));
            var panel1= $(locationfield1);
            var loc1 = panel1.find("input");
            for(var i=2;i<7;i++){
                if(loc1[i].value!==""){
                    loc1[i].value = loc1[i].value.concat(", ");}
            }
            address = encodeURIComponent(loc1[2].value.concat(loc1[3].value.concat(loc1[4].value.concat(loc1[5].value, loc1[6].value))));//loc_addr.join(", ");
            city = encodeURIComponent(loc1[7].value);
            state = encodeURIComponent(loc1[8].value);
            country = encodeURIComponent(loc1[9].value);
            lat = encodeURIComponent(document.getElementById("lat").value);
            longi = encodeURIComponent(document.getElementById("long").value);
            location_id = encodeURIComponent(document.getElementById("location_id").value);
            eventLocation = encodeURIComponent(document.getElementById("editable_location").value);
            if(document.getElementById("editable_location").value == document.getElementById("address_old").value)
            {
                loc_updated = '0';
            }
            else
            {
                loc_updated = '1';
            }
            var dataString ='id='+id+'&type='+type+'&loc_updated='+loc_updated+'&event_location='+eventLocation+'&event_location_id='+location_id+'&event_category='+categoryId+'&event_name='+eventName+'&event_startDate='+startDate+'&event_endDate='+endDate+'&event_interest='+interest_id+'&event_startTime='+startTime+'&event_endTime='+endTime+'&event_address='+address+'&event_description='+description+'&event_city='+city+'&event_state='+state+'&event_country='+country+'&event_lat='+lat+'&event_long='+longi;
            $("#submit-editable-basic-info span").text("Saving...");
            $("#submit-editable-basic-info").prop('disabled', true);
            $('.button-loader').show();

            $.ajax({
                dataType: "json",
                type: "POST",
                data: dataString,
                url: "updatebasicinfo_json.php",
                success: function(data) {
                    if(data["status"]=='Success'){
                        $("#submit-editable-basic-info span").text("Save Changes");
                        $("#submit-editable-basic-info").prop('disabled', false);
                        $('.button-loader').hide();
                    }
                    else{
                        alert("Unable to Insert event basic info to Database");
                    }
                }
            });

        }
    });
}

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Basic Info forms starts here~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/


/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Contact forms starts here~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
var event_phone;
var event_mail;

function saveContactDetails(){
    $("#submit-contact-details").on("click",function(e){
        if($("#contact-details-form").valid()){
            var contact_phone = document.getElementById("contactDetails_phone").value;
            if(isNaN(contact_phone)){
                $("#contact-error").css("display", "block");
                $('#contact-error').addClass('animated slideInUp visible');
                return;
            }
            $("#contact-error").css("display", "none");
            $("#submit-contact-details span").text("Saving ...");
            $("#submit-contact-details").prop('disabled', true);
            $('.button-loader').show();

            event_phone = encodeURIComponent(contact_phone);
            event_email = encodeURIComponent(document.getElementById("contactDetails_email").value);
            var dataString ='id='+id+'&type='+type+'&event_phone='+event_phone+'&event_email='+event_email;
            $.ajax({
                dataType: "json",
                type: "POST",
                data: dataString,
                url: "updateContactDetails_json.php",
                success: function(data) {
                    if(data["status"]=='Success'){
                        $("#submit-contact-details span").text("Save Changes");
                        $("#submit-contact-details").prop('disabled', false);
                        $('.button-loader').hide();
                    }
                    else{
                        $("#submit-contact-details span").text("Save Changes");
                        $("#submit-contact-details").prop('disabled', false);
                        $('.button-loader').hide();
                        alert("Unable to Insert Contact details to Database");
                    }
                }
            });
        }
    });
}

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Contact forms ends here~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/


/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`Registration forms starts here~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

var registrationFormArray='';
var savedregistrationform;

/*get registration data form from database*/
function getRegistrationForm(){
    var dataString='id='+id+'&type='+type;
    $.ajax({
        dataType: "json",
        type: "POST",
        data: dataString,
        url: "getRegistrationForm_json.php",
        success: function(data) {
            if(data !=null){
                if(data["status"]=='Success'){
                    savedregistrationform=data["registration_form_json"];
                    savedregistrationform=JSON.parse("[" + savedregistrationform + "]")
                    savedregistrationform=savedregistrationform[0]['fields'];
                }else{
                    savedregistrationform=[];
                }
                $(function(){
                    fb = new Formbuilder({
                        selector: '.fb-main',
                        bootstrapData: savedregistrationform
                    });
                    fb.on('save', function(payload){
                        registrationFormArray=payload;
                    })
                });
            }
        }
    });
}

function saveRegistrationForm(){
    /*Saving registration form into database*/
    $("#save-registration-form").on("click",function(e){
        $("#save-registration-form span").text("Saving...");
        $("#save-registration-form").prop('disabled', true);
        $('.button-loader').show();
        //saving registration form data after waitinfg for 5 seconds
        setTimeout(function () {
            $.ajax({
                dataType: "json",
                type: "POST",
                data: '&registration_form_json='+registrationFormArray+'&id='+id+'&type='+type,
                url: "registrationForm_json.php",
                complete: function(){
                    $('.button-loader').hide();
                    $("#save-registration-form span").text("Save");
                    $("#save-registration-form").prop('disabled', false);
                },
                success: function(data) {
                    if(data !=null){
                        if(data["status"]=='Success'){
                            savedregistrationform=data["registration_form_json"];
                        }
                        else{
                            alert("Unable to Insert event basic info to Database");
                        }

                    }
                }
            });
        }, 5000);
    });
}

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`Registration forms ends here~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/


/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Social links forms Starts here~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
var event_hashtag ="";
var event_website = "";
var event_registration_website = "";
var event_fb = "";
var event_twitter = "";

function checkForBlanksocailvalue(value){
    if (value.trim() == 'http://' || value.trim() == 'https://' || value.trim() == '#'){
        return '';
    }else{
        return value;
    }
}

function saveWebSocialLinks(){
    $("#submit-social-links").on("click",function(e){
        var event_website_raw = document.getElementById("event_website").value.replace("https://","");
        var event_registration_website_raw = document.getElementById("event_registration_website").value.replace("https://","");
        var event_fb_raw = document.getElementById("event_fb").value.replace("https://","");
        var event_twitter_raw = document.getElementById("event_twitter").value.replace("https://","");
        event_website = checkForBlanksocailvalue('http://'+ event_website_raw.replace("http://",""));
        event_registration_website = checkForBlanksocailvalue('http://'+ event_registration_website_raw.replace("http://",""));
        event_fb = checkForBlanksocailvalue('https://'+ event_fb_raw.replace("http://",""));
        event_twitter = checkForBlanksocailvalue('https://'+ event_twitter_raw.replace("http://",""));
        event_hashtag = document.getElementById("event_hashtag").value;
        if(event_hashtag.match(/^[a-zA-Z0-9]*$/)){
            event_hashtag = checkForBlanksocailvalue('#'+ event_hashtag);
            $("#error_label").hide();
            $("#social-info-form .editable_hashtag label").css('top','22%');
            var dataString ='id='+id+'&type='+type+'&event_website='+encodeURIComponent(event_website)+'&event_registration_website='+encodeURIComponent(event_registration_website)+'&event_fb='+encodeURIComponent(event_fb)+'&event_twitter='+encodeURIComponent(event_twitter)+'&event_hashtag='+encodeURIComponent(event_hashtag);
            $('.button-loader').show();
            $("#submit-social-links span").text("Saving....");
            $("#submit-social-links").prop('disabled', true);

            $.ajax({
                dataType: "json",
                type: "POST",
                data: dataString,
                url: "updateSocialLinks_json.php",
                success: function(data) {
                    if(data["status"]=='Success'){
                        $('.button-loader').hide();
                        $("#submit-social-links span").text("Save Changes");
                        $("#submit-social-links").prop('disabled', false);
                    }
                    else{
                        $('.button-loader').hide();
                        $("#submit-social-links span").text("Save Changes");
                        $("#submit-social-links").prop('disabled', false);
                        alert("error in social");
                    }
                }
            });
        }
        else{
            $("#error_label").show();
            $("#social-info-form .editable_hashtag label").css('top','14%');
        }

    });
}

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Social Links ends here~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~FAQ starts  here~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
var count=1;    /*value set for one default field */
var delFaqId=[];

function addFAqField(){
    $('#add-faq-field').live('click', function(e){
        count=count+1;
        $('#faq-text-fields').append('<div class="form-group">\
            <label class="col-sm-3 control-label">Question\
            </label>\
            <div class="col-sm-7 prepend-icon">\
              <textarea type="text" rows="2" name="faq_question_'+count+'" class="form-control" id="faq_question_'+count+'" placeholder="Enter question for faq" value=""></textarea>\
              <label id="faq-question-error-'+count+'" class="error" style="display:none">Please write Question also</label>\
              <input type="hidden" id="faq_id_'+count+'" value="">\
            </div>\
            <span id="del-faq-'+count+'" class="col-sm-2 del-faq">delete</span>\
          </div>\
          <div class="form-group">\
            <label class="col-sm-3 control-label">Answer\
            </label>\
            <div class="col-sm-7 prepend-icon">\
              <textarea type="text" rows="4" name="faq_answer_'+count+'" class="form-control" id="faq_answer_'+count+'" placeholder="Enter answer for faq" value=""></textarea>\
              <label id="faq-answer-error-'+count+'" class="error" style="display:none">Please write Answer also</label>\
            </div>\
          </div>');
    });
}

function removeFAqField(){
    $('#remove-faq-field').live('click', function(e){
        if (count > 1) {
            var faq_id_val = $("#faq_id_"+count+"").val();
            $('#faq-text-fields').children().last().remove();
            $('#faq-text-fields').children().last().remove();
            if(!isNaN(faq_id_val)){
                delFaqId.push(faq_id_val);
            }
            count=count-1;
        }
    });
}

function deleteFAqField(){
    $(document).on('click', '.del-faq', function (){
        var element = $(this);
        var del_id = element.attr("id").split('-')[2];
        if(!isNaN(del_id)){
            delFaqId.push(del_id);
        }
        $('#faq_question_'+del_id).parent().parent().hide();
        $('#faq_answer_'+del_id).parent().parent().hide();
    });
}


function saveFAqForm(){
    $("#submit-event-faqs").on("click",function(e){
        var faq_question="";
        var faq_answer="";
        var faq_id;
        var data={};
        var deleteIdData={};
        console.log(delFaqId);
        for(var i=1;i<=count;i++){
            var arr={};
            faq_question = $("#faq_question_"+i+"").val();
            faq_answer = $("#faq_answer_"+i+"").val();
            faq_id = $("#faq_id_"+i+"").val();

            if(delFaqId.indexOf(""+i+"") > -1){
                if(!isNaN(faq_id)){
                    deleteIdData[i]=faq_id;
                }
                continue;
            }

            if((count==1 && faq_question.trim() == '' && faq_answer.trim() == '')||(faq_question.trim() == '' && faq_answer.trim() == '')){
                $('#faq-answer-error-'+i).show();
                $('#faq-question-error-'+i).show();
                return;
            }else if(faq_question.trim() == '' && faq_answer.trim() != ''){
                $('#faq-answer-error-'+i).hide();
                $('#faq-question-error-'+i).show();
                return;
            }else if(faq_question.trim() != '' && faq_answer.trim() == ''){
                $('#faq-question-error-'+i).hide();
                $('#faq-answer-error-'+i).show();
                return;
            }else{
                $('#faq-question-error-'+i).hide();
                $('#faq-answer-error-'+i).hide();
                arr["faq_question"]=faq_question;
                arr["faq_answer"]=faq_answer;
                arr["faq_id"]=faq_id;
                data[i]=arr;
            }
        }
        $("#submit-event-faqs span").text("Saving...");
        $("#submit-event-faqs").prop('disabled', true);
        $('.button-loader').show();

        var dataString='id='+id+'&type='+type+'&data='+JSON.stringify(data)+'&deleteId='+JSON.stringify(deleteIdData);
        $.ajax({
            dataType: "json",
            type: "POST",
            data: dataString,
            url: "updateFAQs_json.php",
            success: function(data) {
                if(data["status"]=='Success'){
                    delFaqId=[];
                    $('.button-loader').hide();
                    $("#submit-event-faqs span").text("Save Changes");
                    $("#submit-event-faqs").prop('disabled', false);
                }
                else{
                    alert(data["failCount"]);
                }
            }
        });
    });

}

function getFAqFormList(){
    $.ajax({
        dataType: "json",
        type: "POST",
        data: 'id='+id+'&type='+type,
        url: "getFAQs_json.php",
        success: function(data) {
            if(data["status"]=='Success'){
                var arr = [];
                for (var prop in data) {
                    if(prop != 'status'){
                        arr.push(data[prop]);
                    }
                }
                $('#faq_question_1').val(arr[0]["faq_question"]);
                $('#faq_answer_1').val(arr[0]["faq_answer"]);
                $('#faq_id_1').val(arr[0]["faq_id"]);
                for(var p=1;p<arr.length;p++){
                    var count2=p+1;
                    var question = arr[p]["faq_question"];
                    var answer = arr[p]["faq_answer"];
                    var faq_id = arr[p]["faq_id"];
                    $('#faq-text-fields').append('<div class="form-group">\
                    <label class="col-sm-3 control-label">Question\
                    </label>\
                    <div class="col-sm-7 prepend-icon">\
                      <textarea type="text" rows="2" name="faq_question_'+count2+'" class="form-control" id="faq_question_'+count2+'" placeholder="Enter question for faq">'+question+'</textarea>\
                      <label id="faq-question-error-'+count2+'" class="error" style="display:none">Please write Question also</label>\
                      <input type="hidden" id="faq_id_'+count2+'" value="'+faq_id+'">\
                    </div>\
                    <span id="del-faq-'+count2+'" class="col-sm-2 del-faq">delete</span>\
                  </div>\
                  <div class="form-group">\
                    <label class="col-sm-3 control-label">Answer\
                    </label>\
                    <div class="col-sm-7 prepend-icon">\
                      <textarea type="text" rows="4" name="faq_answer_'+count2+'" class="form-control" id="faq_answer_'+count2+'" placeholder="Enter answer for faq" >'+answer+'</textarea>\
                      <label id="faq-answer-error-'+count2+'" class="error" style="display:none">Please write Answer also</label>\
                    </div>\
                  </div>');
                }
                count=arr.length;
            }

        }
    });

}





/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~FAQ ends  here~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/



/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Stakeholders starts  here~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

var stakeholder_count=1;    /*value set for one default field */
var delStakeholderId=[];

function addStakeholderField(){
    $('#add-stakeholder-field').live('click', function(e){
        stakeholder_count=stakeholder_count+1;
        $('#stakeholder-text-fields').append('<div class="form-group">\
                <label class="col-sm-3 control-label">Name\
                </label>\
                <div class="col-sm-7 prepend-icon">\
                  <textarea type="text" rows="2" name="stakeholder_name_'+stakeholder_count+'" class="form-control" id="stakeholder_name_'+stakeholder_count+'" placeholder="Enter Name for a Stakeholder" value=""></textarea>\
                  <label id="stakeholder-name-error-'+stakeholder_count+'" class="error" style="display:none">Please write Name also</label>\
                  <input type="hidden" id="stakeholder_id_'+stakeholder_count+'" value="">\
                </div>\
                <span id="del-stakeholder-'+stakeholder_count+'" class="col-sm-2 del-stakeholder">delete</span>\
              </div>\
              <div class="form-group">\
                <label class="col-sm-3 control-label">Description\
                </label>\
                <div class="col-sm-7 prepend-icon">\
                  <textarea type="text" rows="4" name="stakeholder_description_'+stakeholder_count+'" class="form-control" id="stakeholder_description_'+stakeholder_count+'" placeholder="Enter Description for the Stakeholder" value=""></textarea>\
                  <label id="stakeholder-description-error-'+stakeholder_count+'" class="error" style="display:none">Please write Description also</label>\
                </div>\
              </div>');
    });
}

function removeStakeholderField(){
    $('#remove-stakeholder-field').live('click', function(e){
        if (stakeholder_count > 1) {
            var stakeholder_id_val = $("#stakeholder_id_"+stakeholder_count+"").val();
            $('#stakeholder-text-fields').children().last().remove();
            $('#stakeholder-text-fields').children().last().remove();
            if(!isNaN(stakeholder_id_val)){
                delStakeholderId.push(stakeholder_id_val);
            }
            stakeholder_count=stakeholder_count-1;
        }
    });
}

function deleteStakeholderField(){
    $(document).on('click', '.del-stakeholder', function (){
        var stakeholder_element = $(this);
        var delete_id = stakeholder_element.attr("id").split('-')[2];
        if(!isNaN(delete_id)){
            delStakeholderId.push(delete_id);
        }
        $('#stakeholder_name_'+delete_id).parent().parent().hide();
        $('#stakeholder_description_'+delete_id).parent().parent().hide();
    });
}


function saveStakeholderForm(){
    $("#submit-event-stakeholders").on("click",function(e){
        var stakeholder_name="";
        var stakeholder_description="";
        var stakeholder_id;
        var stakeholder_data={};
        var deleteStakeholderIdData={};
        console.log(delStakeholderId);
        for(var i=1;i<=stakeholder_count;i++){
            var arr={};
            stakeholder_name = $("#stakeholder_name_"+i+"").val();
            stakeholder_description = $("#stakeholder_description_"+i+"").val();
            stakeholder_id = $("#stakeholder_id_"+i+"").val();

            if(delStakeholderId.indexOf(""+i+"") > -1){
                if(!isNaN(stakeholder_id)){
                    deleteStakeholderIdData[i]=stakeholder_id;
                }
                continue;
            }

            if((stakeholder_count==1 && stakeholder_name.trim() == '' && stakeholder_description.trim() == '')||(stakeholder_name.trim() == '' && stakeholder_description.trim() == '')){
                $('#stakeholder-description-error-'+i).show();
                $('#stakeholder-name-error-'+i).show();
                return;
            }else if(stakeholder_name.trim() == '' && stakeholder_description.trim() != ''){
                $('#stakeholder-description-error-'+i).hide();
                $('#stakeholder-name-error-'+i).show();
                return;
            }else if(stakeholder_name.trim() != '' && stakeholder_description.trim() == ''){
                $('#stakeholder-name-error-'+i).hide();
                $('#stakeholder-description-error-'+i).show();
                return;
            }else{
                $('#stakeholder-name-error-'+i).hide();
                $('#stakeholder-description-error-'+i).hide();
                arr["stakeholder_name"]=stakeholder_name;
                arr["stakeholder_description"]=stakeholder_description;
                arr["stakeholder_id"]=stakeholder_id;
                stakeholder_data[i]=arr;
            }
        }
        $("#submit-event-stakeholders span").text("Saving...");
        $("#submit-event-stakeholders").prop('disabled', true);
        $('.button-loader').show();

        var dataString='id='+id+'&type='+type+'&data='+JSON.stringify(stakeholder_data)+'&deleteId='+JSON.stringify(deleteStakeholderIdData);
        $.ajax({
            dataType: "json",
            type: "POST",
            data: dataString,
            url: "updateStakeholders_json.php",
            success: function(data) {
                if(data["status"]=='Success'){
                    delStakeholderId=[];
                    $('.button-loader').hide();
                    $("#submit-event-stakeholders span").text("Save Changes");
                    $("#submit-event-stakeholders").prop('disabled', false);
                }
                else{
                    alert(data["failCount"]);
                }
            }
        });
    });

}

function getStakeholderFormList(){

    $.ajax({
        dataType: "json",
        type: "POST",
        data: 'id='+id+'&type='+type,
        url: "getStakeholders_json.php",
        success: function(data) {
            if(data["status"]=='Success'){
                var arr_stakeholder = [];
                for (var prop in data) {
                    if(prop != 'status'){
                        arr_stakeholder.push(data[prop]);
                    }
                }
                $('#stakeholder_name_1').val(arr_stakeholder[0]["stakeholder_name"]);
                $('#stakeholder_description_1').val(arr_stakeholder[0]["stakeholder_description"]);
                $('#stakeholder_id_1').val(arr_stakeholder[0]["stakeholder_id"]);
                for(var p=1;p<arr_stakeholder.length;p++){
                    var stakeholder_count2=p+1;
                    var stakeholders_name = arr_stakeholder[p]["stakeholder_name"];
                    var stakeholders_description = arr_stakeholder[p]["stakeholder_description"];
                    var stakeholders_id = arr_stakeholder[p]["stakeholder_id"];
                    $('#stakeholder-text-fields').append('<div class="form-group">\
                        <label class="col-sm-3 control-label">Name\
                        </label>\
                        <div class="col-sm-7 prepend-icon">\
                          <textarea type="text" rows="2" name="stakeholder_name_'+stakeholder_count2+'" class="form-control" id="stakeholder_name_'+stakeholder_count2+'" placeholder="Enter Name for a Stakeholder">'+stakeholders_name+'</textarea>\
                          <label id="stakeholder-name-error-'+stakeholder_count2+'" class="error" style="display:none">Please write Name also</label>\
                          <input type="hidden" id="stakeholder_id_'+stakeholder_count2+'" value="'+stakeholders_id+'">\
                        </div>\
                        <span id="del-stakeholder-'+stakeholder_count2+'" class="col-sm-2 del-stakeholder">delete</span>\
                      </div>\
                      <div class="form-group">\
                        <label class="col-sm-3 control-label">Description\
                        </label>\
                        <div class="col-sm-7 prepend-icon">\
                          <textarea type="text" rows="4" name="stakeholder_description_'+stakeholder_count2+'" class="form-control" id="stakeholder_description_'+stakeholder_count2+'" placeholder="Enter description for the Stakeholder" >'+stakeholders_description+'</textarea>\
                          <label id="stakeholder-description-error-'+stakeholder_count2+'" class="error" style="display:none">Please write Description also</label>\
                        </div>\
                      </div>');
                }
                stakeholder_count=arr_stakeholder.length;
            }

        }
    });

}


/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Stakeholders ends  here~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/



/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Agenda Form starts here~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

var eventsdefaultarray=[];
var event_id;
var festival_id;
function initializeEventIdAgenda(){
    if(type=='single'){
        event_id=id;
        festival_id='0';
    }else{
        event_id='0';
        festival_id=id;
    }
}
function scrollAgendaDetailDiv(){
    $(window).scroll(function(){
        if(window.innerWidth >940){
            $(".agenda-dialog-box").stop().animate({"marginTop": ($(window).scrollTop() +12) + "px", "marginLeft":($(window).scrollLeft()) + "px"}, "slow" );
        }else{
            $(".agenda-dialog-box").stop().animate({"marginTop": "12px"});
        }
    });
}

function loadAgenda(){
    $.ajax({
        dataType: "json",
        type: "POST",
        data: '&id='+id+'&type='+type,
        url: "getAgenda.php",
        success: function(data) {
            eventsdefaultarray=data;
        }
    });
}

function onClickAgendaIcon(){

    $('.agenda-form-icon').click(function() {
        $('.agenda-dialog-box').find('input, textarea, button, select').prop('disabled',true);
        window.all_agenda_id_arr = [];
        window.rand_id = 'newAgenda';
        /* initialize the calendar
         -----------------------------------------------------------------*/
        call_cal();

        /*get all days and trigger the calendar to particualr dcate on any day click*/
        var event_initial_date=$('#event-date').val();
        var res1 = event_initial_date.split("-");
        $('#calendar').fullCalendar( 'gotoDate',res1[0],res1[1]-1,res1[2]);

        $( "#agenda-date-list li" ).click(function() {
            var date=$(this).find('input').val();
            var res = date.split("-");
            $('#calendar').fullCalendar( 'gotoDate',res[0],res[1]-1,res[2]);
        });


        function set_event_again(calEvent, jsEvent, view){
            var d1 = new Date(calEvent.start);
            var d2 = new Date(calEvent.end);
            var yyyymmdd = d1.getFullYear() +'-'+ pad(d1.getMonth()+1) +'-'+ pad(d1.getDate());
            var start_time = pad(d1.getHours()) + ":" + pad(d1.getMinutes());
            var end_time = pad(d2.getHours()) + ":" + pad(d2.getMinutes());
            $("#agenda-date").val(yyyymmdd);
            $("#agenda-start-time").val(start_time);
            $("#agenda-end-time").val(end_time);
            $("#agenda-id").val(calEvent.id);
            $("#agenda-title").val(calEvent.title);
            $("#agenda-description").val(calEvent.description);
            $("#agenda-featured")[0].checked= calEvent.featured;
        }

        function changeEventOnTimeChange(){
            var d1 = new Date($("#agenda-date").val());
            var str1 = $("#agenda-start-time").val();
            var res1 = str1.split(":");
            d1.setHours(res1[0]);
            d1.setMinutes(res1[1]);
            var d2 = new Date($("#agenda-date").val());
            var str2 = $("#agenda-end-time").val();
            var res2 = str2.split(":");
            d2.setHours(res2[0]);
            d2.setMinutes(res2[1]);
            var yyyymmdd = d2.getFullYear() +'-'+ pad(d2.getMonth()+1) +'-'+ pad(d2.getDate());
            $("#agenda-date").val(yyyymmdd);
            var is_featrured;
            if ($('#agenda-featured').is(":checked")){
                is_featrured=true;
            }else{
                is_featrured=false;
            }

            var newAgenda = cr_obj;
            newAgenda.id = $("#agenda-id").val();
            newAgenda.title = $("#agenda-title").val();
            newAgenda.description = $("#agenda-description").val();
            newAgenda.main_date = new Date($("#agenda-date").val());
            newAgenda.start = d1;
            newAgenda.end = d2;
            newAgenda.eventid = event_id;
            newAgenda.festivalid = festival_id;
            newAgenda.allDay = false;
            newAgenda.featured= is_featrured;

            $('#calendar').fullCalendar('updateEvent', cr_obj);
            $("#title").removeClass('input_error');
        }

        $('#agenda-start-time').datetimepicker({
            step:30,
            format:'H:i',
            datepicker:false,
            closeOnTimeSelect:true,
            onShow:function( ct ){
                this.setOptions({
                    maxTime:jQuery('#agenda-end-time').val()?jQuery('#agenda-end-time').val():false
                });

            },
            onChangeDateTime: function( ct){
                changeEventOnTimeChange();
            }
        });
        $('#agenda-end-time').datetimepicker({
            step:30,
            format:'H:i',
            datepicker:false,
            closeOnTimeSelect:true,
            onShow:function( ct ){
                this.setOptions({
                    minTime:jQuery('#agenda-start-time').val()?jQuery('#agenda-start-time').val():false
                });
            },
            onChangeDateTime: function( ct){
                changeEventOnTimeChange();
            }
        });

        /*on entering agenda title and description*/
        $("#agenda-title, #agenda-description").keyup( function(){

            var d1 = $("#agenda-start-time").val();
            var d2 = $("#agenda-end-time").val();
            var start = new Date($("#agenda-date").val());
            var end = new Date($("#agenda-date").val());
            var is_featrured;
            if ($('#agenda-featured').is(":checked")){
                is_featrured=true;
            }else{
                is_featrured=false;
            }

            var res1 = d1.split(":");
            start.setHours(res1[0]);
            start.setMinutes(res1[1]);

            var res2 = d2.split(":");
            end.setHours(res2[0]);
            end.setMinutes(res2[1]);
            var newAgenda = cr_obj;
            newAgenda.borderColor = '';
            newAgenda.id = $("#agenda-id").val();
            newAgenda.title = $("#agenda-title").val();
            newAgenda.description = $("#agenda-description").val();
            newAgenda.start = start;
            newAgenda.end = end;
            newAgenda.eventid = event_id;
            newAgenda.festivalid = festival_id;
            newAgenda.allDay = false;
            newAgenda.featured = is_featrured;


            if(newAgenda.title == '')
                newAgenda.borderColor = 'red';
            $('#calendar').fullCalendar('updateEvent', cr_obj);
        });

        $("#agenda-featured").click( function(){

            var d1 = $("#agenda-start-time").val();
            var d2 = $("#agenda-end-time").val();
            var start = new Date($("#agenda-date").val());
            var end = new Date($("#agenda-date").val());
            var is_featrured;
            if ($('#agenda-featured').is(":checked")){
                is_featrured=true;
            }else{
                is_featrured=false;
            }

            var res1 = d1.split(":");
            start.setHours(res1[0]);
            start.setMinutes(res1[1]);

            var res2 = d2.split(":");
            end.setHours(res2[0]);
            end.setMinutes(res2[1]);
            var newAgenda = cr_obj;
            newAgenda.borderColor = '';
            newAgenda.id = $("#agenda-id").val();
            newAgenda.title = $("#agenda-title").val();
            newAgenda.description = $("#agenda-description").val();
            newAgenda.start = start;
            newAgenda.end = end;
            newAgenda.eventid = event_id;
            newAgenda.festivalid = festival_id;
            newAgenda.allDay = false;
            newAgenda.featured = is_featrured;


            if(newAgenda.title == '')
                newAgenda.borderColor = 'red';
            $('#calendar').fullCalendar('updateEvent', cr_obj);
        });

        function call_cal(){
            $('#calendar').fullCalendar({
                slotDuration: '00:05:00',
                minTime: '00:00:00',
                maxTime: '24:00:00',

                handleWindowResize: true,
                height: $(window).height() - 200,
                header: {
                    left: '',
                    center: '',
                    right: ''
                },
                selectable: true,
                unselectAuto: true,
                height: 1200,
                eventBackgroundColor:'#34D3A4',
                eventTextColor  :'#4A3D3D',
                defaultView: 'agendaDay',
                selectHelper: true,
                editable: true,
                eventDrop: function(event,dayDelta,minuteDelta,allDay,revertFunc) {
                    /*Its called on droping a agenda from one place to another*/
                    $('.agenda-dialog-box').find('input, textarea, button, select').prop('disabled',false);

                    var d1 = new Date(event.start);
                    var d2 = new Date(event.end);
                    var start_time = pad(d1.getHours()) + ":" + pad(d1.getMinutes());
                    var end_time = pad(d2.getHours()) + ":" + pad(d2.getMinutes());
                    var yyyymmdd = d1.getFullYear() +'-'+ pad(d1.getMonth()+1) +'-'+ pad(d1.getDate());

                    $("#agenda-start-time").val(start_time);
                    $("#agenda-end-time").val(end_time);
                    $("#agenda-id").val(event.id);
                    $("#agenda-title").val(event.title);
                    $("#agedna-description").val(event.description);
                    $("#agenda-date").val(yyyymmdd);
                    $("#agenda-featured")[0].checked= event.featured;

                },
                eventResize: function(event,dayDelta,minuteDelta,allDay,revertFunc) {
                    /*on resizing the exisit[ing agenda*/
                    $('.agenda-dialog-box').find('input, textarea, button, select').prop('disabled',false);
                    var d1 = new Date(event.start);
                    var d2 = new Date(event.end);

                    var end_time = pad(d2.getHours()) + ":" + pad(d2.getMinutes());
                    var start_time = pad(d1.getHours()) + ":" + pad(d1.getMinutes());
                    var yyyymmdd = d1.getFullYear() +'-'+ pad(d1.getMonth()+1) +'-'+ pad(d1.getDate());

                    $("#agenda-start-time").val(start_time);
                    $("#agenda-end-time").val(end_time);
                    $("#agenda-id").val(event.id);
                    $("#agenda-title").val(event.title);
                    $("#agenda-description").val(event.description);
                    $("#agenda-date").val(yyyymmdd);
                    $("#agenda-featured")[0].checked= event.featured;
                },
                eventRender: function(event, element) {
                    element.find('.fc-event-title').append("<br/>" + event.description);
                },

                eventClick: function(calEvent, jsEvent, view) {
                    $('.agenda-dialog-box').find('input, textarea, button, select').prop('disabled',false);
                    window.cr_obj = calEvent;
                    set_event_again(calEvent, jsEvent, view);
                },

                select: function( start, end, jsEvent, view ){
                    //on clicking the calendar
                    $('.agenda-dialog-box').find('input, textarea, button, select').prop('disabled',false);
                    date = $("#calendar").fullCalendar('getDate');
                    var d1 = new Date(start);
                    var d2 = new Date(end);

                    var yyyymmdd = d1.getFullYear() +'-'+ pad(d1.getMonth()+1) +'-'+ pad(d1.getDate());
                    $("#agenda-date").val(yyyymmdd);

                    var start_time = pad(d1.getHours()) + ":" + pad(d1.getMinutes());
                    $("#agenda-start-time").val(start_time);

                    var end_time = pad(d2.getHours()) + ":" + pad(d2.getMinutes());
                    $("#agenda-end-time").val(end_time);

                    $("#agenda-title").val("");
                    $("#agenda-description").val("");
                    $("#agenda-featured")[0].checked= false;

                    $.post( "gen_agenda_uniq_id.php", function( data ) {
                        rand_id = data;
                    });

                    all_agenda_id_arr.push(rand_id);
                    var newAgenda = new Object();
                    newAgenda.id = rand_id;
                    newAgenda.eventid = event_id;
                    newAgenda.festivalid = festival_id;
                    newAgenda.title = '';
                    newAgenda.description = '';
                    newAgenda.start = start;
                    newAgenda.end = d2;
                    newAgenda.main_date = new Date($("#agenda-date").val());
                    newAgenda.allDay = false;
                    newAgenda.featured = false;

                    $('#calendar').fullCalendar( 'renderEvent', newAgenda );
                    window.cr_obj = newAgenda;

                    set_event_again(newAgenda, jsEvent, view);

                    $("#agenda-id").val(rand_id);
                    $('#calendar').fullCalendar( 'unselect' );
                },
                dayRender:function( date, cell ) {
                },
                events: eventsdefaultarray

            });
        }/*function callcal() ends*/

        /*delete a particular agenda*/
        $("#delete-agenda").click( function(){
            if ($("#agenda-date").val() != ''){
                var newAgenda = cr_obj;
                $("#agenda-delete-modal").modal();
                $("#delete-agenda-button").click(function(){
                    $('#calendar').fullCalendar('removeEvents', newAgenda.id);
                    if(!isNaN(newAgenda.id)){
                        for(i in eventsdefaultarray){
                            if(eventsdefaultarray[i]['id']==newAgenda.id)
                                eventsdefaultarray.splice(i,1);
                        }
                        $.post( "delAgenda.php", {agenda_id:cr_obj.id,event_id:event_id,festival_id:festival_id} );
                    }
                    clearbox();
                });
            }
        });

        /*save all the agenda*/
        $("#save-agenda").click(function(){
            var empty_agenda_list=[];
            var agenda_index=[];
            x = $('#calendar').fullCalendar( 'clientEvents' );
            for (i in x) {
                if(x[i]["title"].trim()==""){
                    empty_agenda_list.push(x[i]["id"]);
                }else{
                    agenda_index.push(i);
                }
            }
            if(empty_agenda_list.length >0){
                $("#agenda-empty-modal").modal();
            }else{
                saveAgenda(x);
                clearbox();
            }
            $("#save-agenda-modal").click(function(){
                var y=[]
                for(i in agenda_index){
                    y.push(x[agenda_index[i]])
                }
                saveAgenda(y);
                for(i in empty_agenda_list) {
                    $('#calendar').fullCalendar('removeEvents', empty_agenda_list[i]);
                    if (!isNaN(empty_agenda_list[i])){
                        $.post( "delAgenda.php", {agenda_id: empty_agenda_list[i],event_id:event_id,festival_id:festival_id} );
                    }
                }
                clearbox();
            });/*save agenda modal ends*/
        });/*save agenda ends*/

        function clearbox(){
            $('#agenda-date').val('');
            $('#agenda-id').val('');
            $('#agenda-start-time').val('');
            $('#agenda-end-time').val('');
            $('#agenda-title').val('');
            $('#agenda-description').val('');
            $("#agenda-featured")[0].checked= false;
            $('.agenda-dialog-box').find('input, textarea, button, select').prop('disabled',true);
        }

        function saveAgenda(data){
            showSaveLoader();
            var agendaDataArray=[]
            for(i in data){
                agendaDataArray.push({'id':data[i]['id'],'eventid':data[i]['eventid'],'festivalid':data[i]['festivalid']
                    ,'title':data[i]['title'],'description':data[i]['description'],'start':new Date(data[i]['start']).toString()
                    ,'end':new Date(data[i]['end']).toString(),'main_date':data[i]['main_date'],'featured':data[i]['featured']});
            }
            $.ajax({
                type: "POST",
                data: '&save_agendaDataArray='+JSON.stringify(agendaDataArray),
                url: "saveAgenda.php",
                success: function(data) {
                    loadAgendaAgain();

                },
                error: function() {
                    hideSaveLoader();
                }
            });
        } /*save agenda ajax ends*/

        function loadAgendaAgain(){
            $.ajax({
                dataType: "json",
                type: "POST",
                data: '&id='+id+'&type='+type,
                url: "getAgenda.php",
                success: function(data) {
                    eventsdefaultarray=data;
                    $('#calendar').fullCalendar('removeEvents');
                    $('#calendar').fullCalendar( 'addEventSource', eventsdefaultarray );
                    hideSaveLoader();
                    clearbox();

                },
                error: function() {
                    hideSaveLoader();
                }
            });
        }/*load agenda after saving ends*/

        function showSaveLoader(){
            $("#save-agenda span").text("Saving...");
            $("#save-agenda").prop('disabled', true);
            $("#delete-agenda").prop('disabled', true);
            $('.agenda-save').show();

        }

        function hideSaveLoader(){
            $("#save-agenda span").text("Save");
            $("#save-agenda").prop('disabled', false);
            $("#delete-agenda").prop('disabled', false);
            $('.agenda-save').hide();
        }

        function pad(value) {
            if(value < 10) {
                return '0' + value;
            } else {
                return value;
            }
        }





    });
}




/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Agenda Form ends here~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/


/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Google map code starts here~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

var placeSearch, source;
var componentForm = {
    premise: 'long_name',
    route: 'long_name',
    sublocality_level_2: 'long_name',
    sublocality_level_1: 'long_name',
    locality: 'long_name',
    administrative_area_level_2: 'long_name',
    administrative_area_level_1: 'long_name',
    country: 'long_name'
};

function initialize_edit_info() {
    var autocompletesWraps = ['locationfield1'];
    source = new google.maps.places.Autocomplete(document.getElementById("editable_location"));
    google.maps.event.addListener(source, 'place_changed', function() {
        fillInAddress(autocompletesWraps);
    });
}

/*get data from auto complete and fills in respective input fields*/
function fillInAddress(autocompletesWraps) {
    var place = source.getPlace();
    for (var component in componentForm) {
        $('#'+autocompletesWraps[0]+' #'+component).val('');
        $('#'+autocompletesWraps[0]+' #'+component).attr('disabled', false);
    }
    for (var i = 0; i < place.address_components.length; i++) {
        var addressType = place.address_components[i].types[0];
        if (componentForm[addressType]) {
            var val = place.address_components[i][componentForm[addressType]];
            $('#'+autocompletesWraps[0]+' #'+addressType).val(val);
        }
    }
    $('#'+autocompletesWraps[0]+' #lat').val(place.geometry.location.lat());
    $('#'+autocompletesWraps[0]+' #long').val(place.geometry.location.lng());
}

function geolocate() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var geolocation = new google.maps.LatLng(
                position.coords.latitude, position.coords.longitude);
            var circle = new google.maps.Circle({
                center: geolocation,
                radius: position.coords.accuracy
            });
            source.setBounds(circle.getBounds());
        });
    }
}
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Google map code ends here~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

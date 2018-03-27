var interestId = [];
var interest_id;
var eventType='';
var eventCategory;
var minInterest = 1;
var maxInterest = 5;
var startDate;
var startDate1;
var startDate2;
var feststartDate;
var endDate;
var endDate1;
var endDate2;
var festendDate;
var startTime;
var startTime1;
var startTime2;
var feststartTime;
var endTime;
var endTime1;
var endTime2;
var festendTime;
var eventName='';
var eventName1='';
var eventName2='';
var festName;
var eventLocation='';
var eventLocation1='';
var eventLocation2='';
var festLocation='';
var description='';
var description1='';
var description2='';
var festDescription='';
var address='';
var address1='';
var address2='';
var city='';
var state='';
var country='';
var lat='';
var long='';


function addSocialPost(eventKey,eventType,postType,postTypeId,postAction){
  // $.post( "addSocialPost.php", {
  //   eventKey: eventKey,
  //   eventType:eventType,
  //   postType:postType,
  //   postTypeId:postTypeId,
  //   postAction:postAction
  // });

   var dataString ='eventKey='+eventKey+'&eventType='+eventType+'&postType='+postType+'&postTypeId='+postTypeId+'&postAction='+postAction;
   $.ajax({
            async: true,
            dataType: "json",
            type: "POST",
            data: dataString,
            url: "addSocialPost.php",
            success: function(data) {
            }
  });

}

function getNum(val)
{
   if (isNaN(val)) 
     return 0;
   else
     return val;
}
function getDateFromString(datestring) {
    var d = new Date(datestring);
    var curr_date = getNum(d.getDate());
    var curr_month = getNum(d.getMonth());
    if(curr_month){curr_month++;}
    var curr_year = getNum(d.getFullYear());
    return curr_year + "-" + curr_month + "-" + curr_date;
}
function getTimeFromString(datestring) {
    var d = new Date(datestring);
    var curr_hours = getNum(d.getHours());
    var curr_minutes = getNum(d.getMinutes());
    var curr_seconds = getNum(d.getSeconds());
    return curr_hours + ":" + curr_minutes + ":" + curr_seconds;
}

$(document).ready(function() {
	$("#interest-next").attr("disabled", "disabled");
	$("#interest-next").css('cursor','not-allowed');
	$("#interest-next").css('pointer-events','all');
        $("#basic-info-form").validate({
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
                  required: true
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
      $("form").submit(function( event ) {
            event.preventDefault();
      });
      $("#multiple-event-basic-info-form").validate({
            rules: {
              name1:
              {
                  required: true,
                  minlength: 2
              },
              name2:
              {
                  required: true,
                  minlength: 2
              },
              description1:{
                  required:true,
                  minlength:30
              },
              description2:{
                  required:true,
                  minlength:30
              },
              start_date1:
              {
                  required: true
              },
              end_date1: {
                  required: true
              },
              start_date2:
              {
                  required: true
              },
              end_date2: {
                  required: true
              },
              location1: {
                  required: true
              },
              location2: {
                  required: true
              }
          },
          messages: {
              name1: {
                  required: 'Enter Event name please'
              },
              name2: {
                  required: 'Enter Event name please'
              },
              description1: {
                  required: 'Enter Event Description please',
                  minlength: 'Enter atleast 30 characters'
              },
              description2: {
                  required: 'Enter Event Description please',
                  minlength: 'Enter atleast 30 characters'
              },
              start_date1: {
                  required: 'Enter start date please',
              },
              end_date1: {
                  required: 'Enter end date please'
              },
              start_date2: {
                  required: 'Enter start date please',
              },
              end_date2: {
                  required: 'Enter end date please'
              },
              location1: {
                  required: 'Select your location please'
              },
              location2: {
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
      /*'input[id^=startDat]' for multiple ids with similar name characters*/
      $('#startDate').datetimepicker({format:'Y-m-d',
                                      timepicker:false,
                                      formatDate:'Y-m-d',
                                      minDate:0,
                                      onShow:function( ct ){
                                        this.setOptions({
                                        maxDate:jQuery('#endDate').val()?jQuery('#endDate').val():false
                                        });
                                      },
                                      scrollMonth: false,
                                      closeOnDateSelect:true
                                      });
      $('#endDate').datetimepicker({format:'Y-m-d',
                                      timepicker:false,
                                      formatDate:'Y-m-d',
                                      closeOnDateSelect:true,
                                      onShow:function( ct ){
                                        if(jQuery('#startDate').val()!=='')
                                        {
                                            this.setOptions({
                                            minDate:jQuery('#startDate').val()?jQuery('#startDate').val():false
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
      $('#startTime').datetimepicker({ 
                                      format:'H:i',
                                      datepicker:false,
                                      //formatTime:'g:i A', for am pm time
                                      closeOnTimeSelect:true,
                                      step:30,
                                      onShow:function( ct ){
                                        if(jQuery('#startDate').val() === jQuery('#endDate').val()){
                                            this.setOptions({
                                            maxTime:jQuery('#endTime').val()?jQuery('#endTime').val():false
                                            });
                                        }
                                      }
                                   });
      $('#endTime').datetimepicker({ 
                                      format:'H:i',
                                      datepicker:false,
                                      closeOnTimeSelect:true,
                                      //formatTime:'g:i A', for am pm time
                                      step:30,
                                      onShow:function( ct ){
                                        if(jQuery('#startDate').val() === jQuery('#endDate').val()){
                                            if(jQuery('#startTime').val()!='')
                                            {
                                                this.setOptions({
                                                minTime:jQuery('#startTime').val()?jQuery('#startTime').val():false
                                                });
                                            }
                                        }
                                      }
                                   });
      $('#startDate-1').datetimepicker({format:'Y-m-d',
                                      timepicker:false,
                                      formatDate:'Y-m-d',
                                      minDate:0,
                                      onShow:function( ct ){
                                        this.setOptions({
                                        maxDate:jQuery('#endDate-1').val()?jQuery('#endDate-1').val():false
                                        });
                                      },
                                      scrollMonth: false,
                                      closeOnDateSelect:true
                                      });
      $('#endDate-1').datetimepicker({format:'Y-m-d',
                                      timepicker:false,
                                      formatDate:'Y-m-d',
                                      closeOnDateSelect:true,
                                      onShow:function( ct ){
                                        if(jQuery('#startDate-1').val()!=='')
                                        {
                                            this.setOptions({
                                            minDate:jQuery('#startDate-1').val()?jQuery('#startDate-1').val():false
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
      $('#startTime-1').datetimepicker({ 
                                      format:'H:i',
                                      datepicker:false,
                                      closeOnTimeSelect:true,
                                      step:30,
                                      onShow:function( ct ){
                                        if(jQuery('#startDate-1').val() === jQuery('#endDate-1').val()){
                                            this.setOptions({
                                            maxTime:jQuery('#endTime-1').val()?jQuery('#endTime-1').val():false
                                            });
                                        }
                                      }
                                   });
      $('#endTime-1').datetimepicker({ 
                                      format:'H:i',
                                      datepicker:false,
                                      closeOnTimeSelect:true,
                                      step:30,
                                      onShow:function( ct ){
                                        if(jQuery('#startDate-1').val() === jQuery('#endDate-1').val()){
                                            if(jQuery('#startTime-1').val()!=='')
                                            {
                                                this.setOptions({
                                                minTime:jQuery('#startTime-1').val()?jQuery('#startTime-1').val():false
                                                });
                                            }
                                        }
                                      }
                                   });
      $('#startDate-2').datetimepicker({format:'Y-m-d',
                                      timepicker:false,
                                      formatDate:'Y-m-d',
                                      minDate:0,
                                      onShow:function( ct ){
                                        this.setOptions({
                                        maxDate:jQuery('#endDate-2').val()?jQuery('#endDate-2').val():false
                                        });
                                      },
                                      scrollMonth: false,
                                      closeOnDateSelect:true
                                      });
      $('#endDate-2').datetimepicker({format:'Y-m-d',
                                      timepicker:false,
                                      formatDate:'Y-m-d',
                                      closeOnDateSelect:true,
                                      onShow:function( ct ){
                                        if(jQuery('#startDate-2').val()!=='')
                                        {
                                            this.setOptions({
                                            minDate:jQuery('#startDate-2').val()?jQuery('#startDate-2').val():false
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
      $('#startTime-2').datetimepicker({ 
                                      format:'H:i',
                                      datepicker:false,
                                      closeOnTimeSelect:true,
                                      step:30,
                                      onShow:function( ct ){
                                        if(jQuery('#startDate-2').val() === jQuery('#endDate-2').val()){
                                            this.setOptions({
                                            maxTime:jQuery('#endTime-2').val()?jQuery('#endTime-2').val():false
                                            });
                                        }
                                      }
                                   });
      $('#endTime-2').datetimepicker({ 
                                      format:'H:i',
                                      datepicker:false,
                                      closeOnTimeSelect:true,
                                      step:30,
                                      onShow:function( ct ){
                                        if(jQuery('#startDate-2').val() === jQuery('#endDate-2').val()){
                                            if(jQuery('#startTime-2').val()!=='')
                                            {
                                                this.setOptions({
                                                minTime:jQuery('#startTime-2').val()?jQuery('#startTime-2').val():false
                                                });
                                            }
                                        }
                                      }
                                   }); 
      

});

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`Modal Select Button Action~~~~~~~~~~~~~~~~~~```*/

$(".single").on("click", function(e){
  eventType='event';
   $("#select-category").modal("show");
   $("#select-Event").modal("hide");
});

/*$(".multiple").on("click", function(e){
  eventType='festival';
    $("#select-interest").modal("show");
    $("#select-Event").modal("hide");  
});*/

$("#category-img").live("click", function(e){
  eventCategory = this.className; //set value of event category
    $("#select-interest").modal("show");
    $("#select-category").modal("hide");  
});

$('#interest-icon').live('click', function(){
    tinymce.init({
        mode : "specific_textareas",
        editor_selector : "description",
        menubar: false,
        statusbar: false,
        plugins:'link paste placeholder',
        paste_as_text: true,
        paste_strip_class_attributes: "all",
        browser_spellcheck : true,
        theme: "modern",
        height: 170,
	size : 13,
        toolbar1: "bold italic underline | bullist numlist | link | fontsizeselect",
        setup : function(ed) {
                    /*ed.on('keyup', function(ed) {
                      if(tinyMCE.get('description').getContent().length <= 30){
                        $('#eventDescription-error').show();
                      }else{
                        $('#eventDescription-error').hide();
                      }
                  });*/
                }
    });

    if (interestId.length < maxInterest || interestId.indexOf(this.className.split(" ")[0]) >-1){
      $("#interest-error").css("display", "none");
      var $this = $(this);
      $this.toggleClass('selected');
      $this.toggleClass('icon-grayscale');
      if($this.hasClass('selected')){
        interestId.push(this.className.split(" ")[0]);
          $this.next(':hidden').val($this.data('id'));
      }else{
        var index = interestId.indexOf(this.className.split(" ")[0]);
        interestId.splice(index, 1);
          $this.next(':hidden').val('');
      }
  }else{
    $("#interest-error").css("display", "block");
  }

  if (interestId.length < minInterest){
    $("#interest-next").attr("disabled", "disabled");
    $("#interest-next").css('cursor','not-allowed');
    $("#interest-next").css('pointer-events','all');

  }else{
    $("#interest-next").removeAttr('disabled');
    $("#interest-next").css('cursor','pointer');
  }
});


/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`Modal Close Button Action~~~~~~~~~~~~~~~~~~```*/

$("#close-interest").on("click", function(e){
   interestId.length=0;
   $('.interest-row img').each(function(){
      $(this).removeClass('selected');
      $(this).addClass('icon-grayscale');
   });
   $("#basic-info-form").find("input,textarea,select").val("");
   $("#multiple-event-basic-info-form").find("input,textarea,select").val("");
   $(".interest-error").css('display','none');
   $('label[class^=error]').remove();
   $("#select-interest").modal("hide");
   $("#select-category").modal("hide");
   $("#select-Event").modal("hide");
   $("#interest-next").attr("disabled", "disabled");
   tinyMCE.get('description').setContent('');
   tinyMCE.get('description-1').setContent('');
   tinyMCE.get('description-2').setContent('');
});

$("#close-category").on("click", function(e){
   interestId.length=0;
   $('.interest-row img').each(function(){
      $(this).removeClass('selected');
      $(this).addClass('icon-grayscale');
   });
   $("#basic-info-form").find("input,textarea,select").val("");
   $("#multiple-event-basic-info-form").find("input,textarea,select").val("");
   $(".interest-error").css('display','none');
   $('label[class^=error]').remove();
   $("#select-category").modal("hide");
   $("#select-Event").modal("hide");
   $("#interest-next").attr("disabled", "disabled");
   tinyMCE.get('description').setContent('');
   tinyMCE.get('description-1').setContent('');
   tinyMCE.get('description-2').setContent('');
});

$("#close-basic-info").on("click", function(e){
   interestId.length=0;
   $('.interest-row img').each(function(){
      $(this).removeClass('selected');
      $(this).addClass('icon-grayscale');
   });
   $("#basic-info-form").find("input,textarea,select").val("");
   $("#multiple-event-basic-info-form").find("input,textarea,select").val("");
   $(".interest-error").css('display','none');
   $('label[class^=error]').remove();
   $("#select-basic-info").modal("hide");
   $("#select-interest").modal("hide");
   $("#select-category").modal("hide");
   $("#select-Event").modal("hide");
   $("#interest-next").attr("disabled", "disabled");
   tinyMCE.get('description').setContent('');
   tinyMCE.get('description-1').setContent('');
   tinyMCE.get('description-2').setContent('');
});

$("#close-basic-event-info").on("click",function(e){
   interestId.length=0;
   $('.interest-row img').each(function(){
      $(this).removeClass('selected');
      $(this).addClass('icon-grayscale');
   });
   $("#basic-info-form").find("input,textarea,select").val("");
   $("#multiple-event-basic-info-form").find("input,textarea,select").val("");
   $(".interest-error").css('display','none');
   $('label[class^=error]').remove();
   $("#select-Event").modal("hide"); 
   $("#interest-next").attr("disabled", "disabled");
   tinyMCE.get('description').setContent('');
   tinyMCE.get('description-1').setContent('');
   tinyMCE.get('description-2').setContent('');
});

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`Modal Next Button Action~~~~~~~~~~~~~~~~~~```*/
$("#interest-next").on("click",function(e){
   $("#select-interest").modal("hide");
   $("#eventDescription-error").hide();
   $("#select-basic-info").modal("show");
});

function checkforDateTimeError(){
   if($("#startDate").val()== ''){
        $('#eventStartDate-error').show();
        return false;
   }else if ($("#startTime").val() == ''){
        $('#eventStartDate-error').hide();
        $('#eventStartTime-error').show();
        return false;

   }else if($("#endTime").val() == ''){
        $('#eventStartDate-error').hide();
        $('#eventStartTime-error').hide();
        $('#eventEndTime-error').show();
        return false;

   }else if($("#endDate").val() == ''){
        $('#eventStartDate-error').hide();
        $('#eventStartTime-error').hide();
        $('#eventEndTime-error').hide();
        $('#eventEndDate-error').show();
        return false;

   }else{
        $('#eventStartDate-error').hide();
        $('#eventStartTime-error').hide();
        $('#eventEndTime-error').hide();
        $('#eventEndDate-error').hide(); 
        return true;   
   }  
}

function checkDescription(){
  if(tinyMCE.get('description').getContent().length <= 30){
    $('#eventDescription-error').show();
    console.log("if");
    return false;    
  }else{
    console.log("else");
    $('#eventDescription-error').hide();
    return true;
  }
}

$("#submit-basic-info").on("click",function(e){

   if($("#basic-info-form").valid()){
     if(!checkforDateTimeError()){
        return;
     }
     if(!checkDescription()){
        return; 
     } 
     eventName = encodeURIComponent(document.getElementById("eventName").value);
     startDate = encodeURIComponent(document.getElementById("startDate").value);
     endDate = encodeURIComponent(document.getElementById("endDate").value);
     startTime = encodeURIComponent(document.getElementById("startTime").value);
     endTime = encodeURIComponent(document.getElementById("endTime").value);
     description = encodeURIComponent(tinyMCE.get('description').getContent());
     interest_id = encodeURIComponent(interestId.join(", "));
     var panel1= $("#locationfield1");
     var loc1 = panel1.find("input");
     city = encodeURIComponent(loc1[1].value);
     state = encodeURIComponent(loc1[2].value);
     country = encodeURIComponent(loc1[3].value);
     lat = encodeURIComponent(document.getElementById("lat").value);
     long = encodeURIComponent(document.getElementById("long").value);
     eventLocation = encodeURIComponent(document.getElementById("location").value);
     if(eventType==='event'){
     var dataString ='event_location='+eventLocation+'&event_category='+eventCategory+'&event_name='+eventName+'&event_startDate='+startDate+'&event_endDate='+endDate+'&event_interest='+interest_id+'&event_startTime='+startTime+'&event_endTime='+endTime+'&event_address='+eventLocation+'&event_description='+description+'&event_city='+city+'&event_state='+state+'&event_country='+country+'&event_lat='+lat+'&event_long='+long;
     $.ajax({
              dataType: "json",
              type: "POST",
              data: dataString,
              url: "insertbasicinfo_json.php",
              success: function(data) {
                  if(data["status"]==='Success'){
                    addSocialPost(data["event_id"],'single','new','','add');
                    window.location.href = "information.php?id="+data["event_id"]+"&type=single";
                  }
                  else{
                    alert("Unable to Insert event basic info to Database");
                  }
              }            
            });
    }else{  
        festName = eventName;
        feststartDate = startDate;
        festendDate = endDate;
        feststartTime = startTime;
        festendTime =endTime;
        festDescription = description;
        festLocation = eventLocation;
        fest_address = address;
        fest_city = city;
        fest_state = state;
        fest_country = country;
        fest_lat = lat;
        fest_long = long;
        fest_interest_id = interestId.join(", ");
        $("#select-basic-event-info").modal("show");
        $("#select-basic-info").modal("hide");      
    }
  }     
});

function checkforDateTimeErrorFestival(){
   if($("#startDate-1").val()== ''){
        $('#eventStartDate-error-1').show();
        return false;
   }else if ($("#startTime-1").val() == ''){
        $('#eventStartTime-error-1').show();
        return false;

   }else if($("#endTime-1").val() == ''){
        $('#eventEndTime-error-1').show();
        return false;

   }else if($("#endDate-1").val() == ''){
        $('#eventEndDate-error-1').show();
        return false;

   }else if($("#startDate-2").val()== ''){
        $('#eventStartDate-error-2').show();
        return false;
   }else if ($("#startTime-2").val() == ''){
        $('#eventStartTime-error-2').show();
        return false;

   }else if($("#endTime-2").val() == ''){
        $('#eventEndTime-error-2').show();
        return false;

   }else if($("#endDate-2").val() == ''){
        $('#eventEndDate-error-2').show();
        return false;
   }else{
        $('#eventStartDate-error-1').hide();
        $('#eventStartDate-error-1').hide();
        $('#eventStartDate-error-1').hide();
        $('#eventStartDate-error-1').hide(); 
        $('#eventStartDate-error-2').hide();
        $('#eventStartDate-error-2').hide();
        $('#eventStartDate-error-2').hide();
        $('#eventStartDate-error-2').hide(); 
        return true;   
   }  
}

$("#submit-basic-event-info").on("click",function(e){

   if($("#multiple-event-basic-info-form").valid()){
      if(!checkforDateTimeErrorFestival()){
        return;
      } 

     eventName1 = encodeURIComponent(document.getElementById("eventName-1").value);
     startDate1 = encodeURIComponent(document.getElementById("startDate-1").value); 
     endDate1 = encodeURIComponent(document.getElementById("endDate-1").value);
     startTime1 = encodeURIComponent(document.getElementById("startTime-1").value);
     endTime1 = encodeURIComponent(document.getElementById("endTime-1").value);
     description1 = encodeURIComponent(tinyMCE.get('description-1').getContent());
     eventName2 = encodeURIComponent(document.getElementById("eventName-2").value);
     startDate2 = encodeURIComponent(document.getElementById("startDate-2").value);
     endDate2 = encodeURIComponent(document.getElementById("endDate-2").value);
     startTime2 = encodeURIComponent(document.getElementById("startTime-2").value);
     endTime2 = encodeURIComponent(document.getElementById("endTime-2").value);
     description2 = encodeURIComponent(tinyMCE.get('description-2').getContent());
     
     var panel2= $("#locationfield2");
     var loc2 = panel2.find("input");
     var panel3= $("#locationfield3");
     var loc3 = panel3.find("input");
     city1 = encodeURIComponent(loc2[1].value);
     state1 = encodeURIComponent(loc2[2].value);
     country1 = encodeURIComponent(loc2[3].value);
     lat1 = encodeURIComponent(document.getElementById("lat1").value);
     long1 = encodeURIComponent(document.getElementById("long1").value);
     city2 = encodeURIComponent(loc3[1].value);
     state2 = encodeURIComponent(loc3[2].value);
     country2 = encodeURIComponent(loc3[3].value);
     lat2 = encodeURIComponent(document.getElementById("lat2").value);
     long2 = encodeURIComponent(document.getElementById("long2").value);
     eventLocation1 = encodeURIComponent(document.getElementById("location-1").value);
     eventLocation2 = encodeURIComponent(document.getElementById("location-2").value);
     var dataString_1 ='&fest_name='+festName+'&fest_location='+festLocation+'&fest_startDate='+feststartDate+'&fest_interest='+fest_interest_id+'&fest_address='+festLocation+'&fest_city='+fest_city+'&fest_state='+fest_state+'&fest_country='+fest_country+'&fest_lat='+fest_lat+'&fest_long='+fest_long+'&fest_endDate='+festendDate+'&fest_startTime='+feststartTime+'&fest_endTime='+festendTime+'&fest_description='+festDescription;
     var dataString_2 ='&event_name1='+eventName1+'&event_location1='+eventLocation1+'&event_startDate1='+startDate1+'&event_endDate1='+endDate1+'&event_startTime1='+startTime1+'&event_address1='+address1+'&event_endTime1='+endTime1+'&event_description1='+description1+'&event_address1='+eventLocation1+'&event_city1='+city1+'&event_state1='+state1+'&event_country1='+country1+'&event_lat1='+lat1+'&event_long1='+long1;
     var dataString_3 ='&event_name2='+eventName2+'&event_location2='+eventLocation2+'&event_startDate2='+startDate2+'&event_endDate2='+endDate2+'&event_startTime2='+startTime2+'&event_address2='+address2+'&event_endTime2='+endTime2+'&event_description2='+description2+'&event_address2='+eventLocation2+'&event_city2='+city2+'&event_state2='+state2+'&event_country2='+country2+'&event_lat2='+lat2+'&event_long2='+long2;
     var dataString = dataString_1.concat(dataString_2);
     dataString = dataString.concat(dataString_3);
     $.ajax({
                  dataType: "json",
                  type: "POST",
                  data: dataString,
                  url: "insertfestinfo_json.php?",
                  success: function(data) {
                      console.log(data);
                      if(data["status"]==='Success'){
                          window.location.href = "information.php?id="+data["event_id"]+"&type=multiple";
                      }
                      else{
                          alert("Unable to Insert event basic info to Database");
                      }
                  },
                  error: function(error){
                      console.log(error);
                  }
            });
    }
});

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`Modal Next Button Action~~~~~~~~~~~~~~~~~~```*/

$("#back-category").on("click",function(e){
   $("#select-category").modal("hide");  
   $("#select-Event").modal("show");		
});

$("#back-interest").on("click",function(e){
   $("#select-interest").modal("hide");
   if(eventType==='event'){
	   $("#select-category").modal("show");     	
   }else{
	   $("#select-Event").modal("show");     	
   }
});

$("#back-basic-info").on("click",function(e){
   $("#select-interest").modal("show");  
});


$("#back-basic-event-info").on("click",function(e){
   $("#select-basic-info").modal("show");  
});

    var placeSearch, source;
    var componentForm = {
      /*premise: 'long_name',
      route: 'long_name',
      sublocality_level_2: 'long_name',
      sublocality_level_1: 'long_name',*/
      locality: 'long_name',
      /*administrative_area_level_2: 'long_name',*/
      administrative_area_level_1: 'long_name',
      country: 'long_name'
    };
    var componentForm1 = {
      /*premise: 'long_name',
      route: 'long_name',
      sublocality_level_2: 'long_name',
      sublocality_level_1: 'long_name',*/
      locality: 'long_name',
      /*administrative_area_level_2: 'long_name',*/
      administrative_area_level_1: 'long_name',
      country: 'long_name'
    };
    var componentForm2 = {
      /*premise: 'long_name',
      route: 'long_name',
      sublocality_level_2: 'long_name',
      sublocality_level_1: 'long_name',*/
      locality: 'long_name',
      /*administrative_area_level_2: 'long_name',*/
      administrative_area_level_1: 'long_name',
      country: 'long_name'
    };
    function initialize() {
        var autocompletesWraps = ['locationfield1', 'locationfield2','locationfield3'];
        source = new google.maps.places.Autocomplete(document.getElementById("location"));
        source1 = new google.maps.places.Autocomplete(document.getElementById("location-1"));
        source2 = new google.maps.places.Autocomplete(document.getElementById("location-2"));
      google.maps.event.addListener(source, 'place_changed', function() {
        fillInAddress(autocompletesWraps);
      });
      google.maps.event.addListener(source1, 'place_changed', function() {
        fillInAddress1(autocompletesWraps);
      });
      google.maps.event.addListener(source2, 'place_changed', function() {
        fillInAddress2(autocompletesWraps);
      });
    }
    function fillInAddress(autocompletesWraps) {
      
      var place = source.getPlace();
      for (var component in componentForm) {
            $('#'+autocompletesWraps[0]+' #'+component).val('');
$('#'+autocompletesWraps[0]+' #'+component).attr('disabled', false);
       
      }
      for (var i = 0; i < place.address_components.length; i++) {
        var addressType = place.address_components[i].types[0];
        console.log(place.address_components[i]);
        if (componentForm[addressType]) {
          var val = place.address_components[i][componentForm[addressType]];
             $('#'+autocompletesWraps[0]+' #'+addressType).val(val);
        }
      }
      $('#'+autocompletesWraps[0]+' #lat').val(place.geometry.location.lat());
      $('#'+autocompletesWraps[0]+' #long').val(place.geometry.location.lng());
    }
    function fillInAddress1(autocompletesWraps) {
      
      var place = source1.getPlace();
      for (var component in componentForm1) {
            $('#'+autocompletesWraps[1]+' #'+component).val('');
$('#'+autocompletesWraps[1]+' #'+component).attr('disabled', false);
       
      }
      for (var i = 0; i < place.address_components.length; i++) {
        var addressType = place.address_components[i].types[0];
        console.log(place.address_components[i]);
        if (componentForm1[addressType]) {
          var val = place.address_components[i][componentForm1[addressType]];
             $('#'+autocompletesWraps[1]+' #'+addressType).val(val);
        }
      }
      $('#'+autocompletesWraps[1]+' #lat1').val(place.geometry.location.lat());
       $('#'+autocompletesWraps[1]+' #long1').val(place.geometry.location.lng());
    }
    function fillInAddress2(autocompletesWraps) {
      
      var place = source2.getPlace();
      for (var component in componentForm2) {
            $('#'+autocompletesWraps[2]+' #'+component).val('');
$('#'+autocompletesWraps[2]+' #'+component).attr('disabled', false);
       
      }
      for (var i = 0; i < place.address_components.length; i++) {
        var addressType = place.address_components[i].types[0];
        console.log(place.address_components[i]);
        if (componentForm2[addressType]) {
          var val = place.address_components[i][componentForm2[addressType]];
             $('#'+autocompletesWraps[2]+' #'+addressType).val(val);
        }
      }
       $('#'+autocompletesWraps[2]+' #lat2').val(place.geometry.location.lat());
       $('#'+autocompletesWraps[2]+' #long2').val(place.geometry.location.lng());
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

function GoogleGeocode() {
  geocoder = new google.maps.Geocoder();
  this.geocode = function(address, callbackFunction) {
      geocoder.geocode( { 'address': address}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          var result = {};
          result.latitude = results[0].geometry.location.lat();
          result.longitude = results[0].geometry.location.lng();
          callbackFunction(result);
        } else {
          callbackFunction(null);
        }
      });
  };
}

//Process form input lat lang for source
$(function() {
  $('#location').focusout(function(e){
    e.preventDefault();
    var userinput = $('form #location').val();
      if (userinput == "")
      {
        return false;
      }
      var g = new GoogleGeocode();
      var address = userinput;
      g.geocode(address, function(data) {
        if(data != null) {
          olat = data.latitude;
          olng = data.longitude;
        } else {
          
        }
      });
  });
});


  var total_count_left=$("#total_count_left").val();


  function initEmail(previous_groupArr,previous_eventArr,previous_festivalArr){
   
    if(previous_groupArr){
      previous_groupArr=previous_groupArr.split(',');
      for(var g=0;g<previous_groupArr.length;g++)
        $('#group-select').selectMultiple('select', [previous_groupArr[g]]);
    }
    if(previous_festivalArr){
      previous_festivalArr=previous_festivalArr.split(',');
      for(var g=0;g<previous_festivalArr.length;g++)
        $('#events-select').selectMultiple('select', [previous_festivalArr[g]+'_multiple']);
    }
    if(previous_eventArr){
      previous_eventArr=previous_eventArr.split(',');
      for(var g=0;g<previous_eventArr.length;g++)
        $('#events-select').selectMultiple('select', [previous_eventArr[g]+'_single']);
    }
  }


//function to add tags on selection
  function addTag(value,valueHtml,option){
      if(value=='all'){
        if(option=='choose-events'){
          $('#events-select').selectMultiple('select_all');
        }else if(option=='choose-group'){
          $('#group-select').selectMultiple('select_all');
        }
      }else{
        if(option=='choose-events'){
          var dynamicTagDiv='<span id="'+option+'_'+value+'" style="padding:2%"><a class="tags event-tags"><span>'+valueHtml+'</span>&nbsp;<i class="fa fa-times"></i></a></span>';
        }else{
          var dynamicTagDiv='<span id="'+option+'_'+value+'" style="padding:2%"><a class="tags group-tags"><span>'+valueHtml+'</span>&nbsp;<i class="fa fa-times"></i></a></span>';        
        }        
        $('#tags-body').append(dynamicTagDiv);
        var valueHtmlArray=valueHtml.split(' ');
        var outreachVal=valueHtmlArray[valueHtmlArray.length -1].replace(/["'()]/g,"");
        outreach('ADD',outreachVal);
      }
  }

  function removeTag(value,valueHtml,option){
    if(value=='all'){
      if(option=='choose-events'){
        $('#events-select').selectMultiple('deselect_all');
      }else if(option=='choose-group'){
        $('#group-select').selectMultiple('deselect_all');
      }
    }else{
      $('#'+option+'_'+value).remove();
      var valueHtmlArray=valueHtml.split(' ');
      var outreachVal=valueHtmlArray[valueHtmlArray.length -1].replace(/["'()]/g,"");
      outreach('SUB',outreachVal);
    }
  }

//function to deselect the selectied option in the list
  function onTagClose(){    
    $('span[id^="choose-group_"]').live('click',function(){
        var that = this;
        var divId=that.id
        var value=divId.split('_')[1];
        $(divId).remove();
        $('#group-select').selectMultiple('deselect', [value] );
    });

    $('span[id^="choose-events_"]').live('click',function(){
        var that = this;
        var divId=that.id
        $(divId).remove();
        $('#events-select').selectMultiple('deselect', [divId.split('_')[1]+'_'+divId.split('_')[2]] );
    });

  }


  function outreach(factorType,value){
    if(value != "Group"){
      var previousVal=$('#outreach').text();      
      var newVal; 
      if(factorType=='ADD'){
          newVal=parseInt(previousVal)+parseInt(value);
          $('#outreach').text(newVal);
      }else if(factorType=='SUB'){
          newVal=parseInt(previousVal)-parseInt(value);
          $('#outreach').text(newVal);

      }
      if(total_count_left>newVal){
        $("#outreach").css('color','green');
        $("#error").hide();      
      }else{
        $("#outreach").css('color','red');
        $("#error").text("You have ("+total_count_left+") emails left in your account to send. Contact us at meghna@hubilo.com to extend the email limit")
        $("#error").show();
      }      
    }
  }

  function onClickUploadslider(){
    $('.upload-data').slideUp();           
    $('#upload-data').on('click',function(e){
      if($('#upload-data').hasClass("down")){
        $('#upload-data').children().removeClass('arrowactive');
        $('.upload-data').slideUp();  
        $('#upload-data').removeClass("down")
      }else{
        $('#upload-data').children().addClass('arrowactive');
        $('.upload-data').slideDown();  
        $('#upload-data').addClass("down")
      }  
    });


  }

  function uploadCSV(){
    $('#upload-csv-file-button').on('click',function(e){
        if($("#group_name").val() == "selectGroup" || $("#group_name").val() == "addGroup"){
          $("#group-error").show();
        }else{
            $("#group-error").hide();
            $('#fileinput').trigger('click');
        }
    });

    $('body').on('change', '#fileinput', function () {
      $("#upload-csv-file-button span").text("  Uploading...");
      $("#upload-csv-file-button").prop('disabled', true);
      $('#loader-csv').show(); 
      var formData = new FormData(); 
      formData.append("csv_file", $("#fileinput")[0].files[0]);
      var groupId = $("#group_name").val();
      var groupname = $( "#group_name option:selected" ).text();
      $.ajax({
            url: 'upload_organizerAttendee_csv_json.php?groupName='+groupId+'&',
            data: formData,
            context: document.body,
            cache: false,
            contentType: false,
            processData: false,
            type: 'POST',
            success: function(data) {
                data = JSON.parse(data);
                if(data['status'] == 'Success'){
                  $("#file_upload_failure_msg").hide();
                  $('#loader-csv').hide();
                  $("#upload-csv-file-button span").text("Upload CSV");
                  $("#upload-csv-file-button").prop('disabled', false);
                  $("#group-select option[value="+groupId+"]").text(groupname+' ('+data['total']+')');
                  if(!$('#choose-group_'+groupId).length){
                      $('#group-select').selectMultiple('select', [groupId]);
                  }
                  var groupSpanTag=$('#choose-group_'+groupId+' a span').text();
                  $('#choose-group_'+groupId+' a span').text(groupname+' ('+data['total']+')');
                  var valueHtmlArray=groupSpanTag.split(' ');
                  var outreachVal=valueHtmlArray[valueHtmlArray.length -1].replace(/["'()]/g,"");
                  outreach('SUB',outreachVal);
                  outreach('ADD',data['total']);

                }else{
                  $("#file_upload_failure_msg").text(data["message"]);
                  $("#file_upload_failure_msg").show();
                  $('#loader-csv').hide();
                  $("#upload-csv-file-button span").text("Upload CSV");
                  $("#upload-csv-file-button").prop('disabled', false);
                }
            }
        });
        $('#loader-csv').hide();
        $('#fileinput').val(null);
    });

  }

  function saveEmail(id,type){
    $('#save').on('click',function(){
      document.getElementById('error').style.display='none';
      document.getElementById('success').style.display='none';
      deactivate('#loader-1');
      saving(0,'#loader-1','saved');
    });
  }

  function sendEmail(id,type){
    $('#send').on('click',function(){
      document.getElementById('error').style.display='none';
      document.getElementById('success').style.display='none';
      deactivate('#loader-2'); 
      saving(1,'#loader-2','sent');

    });

    $('#resend-mails').on('click',function(){
      document.getElementById('error').style.display='none';
      document.getElementById('success').style.display='none';
      $('#resend-mails').prop('disabled','true');
      $('#resend-mails img').show();
      $('#resend-mails span').text('Resending..');
      resending();
    });
  }


/*resending*/
  function resending(){
      $.ajax({
          dataType: "json",
          type: "POST",
          data: 'id='+id+'&type='+type+'&requestid='+emailRequestId,
          url: "resendEmail_json.php",
          complete: function(data){
            $('#resend-mails').hide();
          },
          success: function(data) {
              if(data["status"]=='Success'){
                 if(data["error"]==1){
                  document.getElementById('error').style.display='block';
                  document.getElementById('error').innerHTML='Email will be sent to ('+data["emailCountLeft"]+') as you have exceeded the email limit';
                  document.getElementById('success').style.display='block';
                  document.getElementById('success').innerHTML='Resent successfully';
                 }else{
                  document.getElementById('success').style.display='block';
                  document.getElementById('success').innerHTML='Resent successfully';
                 }

                 $('#emailOpen').text(data['emailOpen']);
                 $('#emailResend').text(data['emailResent']);

                 $("#status_top span").attr("class", "");
                 $("#status_top span").attr("class", "status-grey");
                 if(data['email_status']==5){
                   $('#status-resent').removeClass('status-grey');                                    
                   $('#status-resent').addClass('status-blue');                                    
                   $('#status-resent').text('Resending');
                 }
              }else{
                document.getElementById('error').style.display='block';
                document.getElementById('error').innerHTML=data['msg'];
              }
          }
        });
}
/*resending*/




  function saving(sendSave,loader_id,text){

      if(sendSave==1 && themeBought==0){
        $("#buyTheme").modal();
        activate(loader_id);
        return;
      }

      var eventArray=[];
      var groupArray=[];
      var festivalArray=[];
      var eventGroupArr = $('#tags-body > span').map(function(){
          return this.id;
      }).get();

      if(eventGroupArr.length==0 & sendSave == 1){
        document.getElementById('error').style.display='block';
        document.getElementById('error').innerHTML='Please select an option';
        activate(loader_id);
        return 
      }

      for(var i=0;i<eventGroupArr.length;i++){
        if(eventGroupArr[i].indexOf("choose-events") > -1){
            var eventarrSplit=eventGroupArr[i].split('_');
            if(eventarrSplit[2]=='single'){
              eventArray.push(eventarrSplit[1]);
            }else{
              festivalArray.push(eventarrSplit[1]);
            }
        }else if(eventGroupArr[i].indexOf("choose-group") > -1){
            groupArray.push(eventGroupArr[i].split('_')[1]);
        }
      }

      var totalEmail=$('#outreach').text();

      $.ajax({
          dataType: "json",
          type: "POST",
          data: 'id='+id+'&type='+type+'&eventArray='+eventArray+'&festivalArray='+festivalArray+'&groupArray='+groupArray+'&totalEmail='+totalEmail+'&sent='+sendSave+'&requestid='+emailRequestId,
          url: "saveSendEmail_json.php",
          success: function(data) {
              activate(loader_id);
              if(data["status"]=='Success'){
                 if(totalEmail>data["emailCountLeft"]){
                  document.getElementById('error').style.display='block';
                  document.getElementById('error').innerHTML='Email will be sent to ('+data["emailCountLeft"]+') as you have exceeded the email limit';
                  document.getElementById('success').style.display='block';
                  document.getElementById('success').innerHTML=text +' successfully';
                 }else{
                  document.getElementById('success').style.display='block';
                  document.getElementById('success').innerHTML=text +' successfully';
                 }

                 $("#status_top span").attr("class", "");
                 $("#status_top span").attr("class", "status-grey");
                 if(data['email_status']==1){
                   $('#status-initial').removeClass('status-grey');                                    
                   $('#status-initial').addClass('status-blue');                                    
                 }else if(data['email_status']==2){
                   $('#status-queued').removeClass('status-grey');                                    
                   $('#status-queued').addClass('status-blue');                                    
                 }else if(data['email_status']==3){
                   $('#status-sent').removeClass('status-grey');                                    
                   $('#status-sent').addClass('status-blue');                                    
                   $('#status-sent').text('Sending');
                 }
                 if(text=='sent'){
                   $('#saveSend-button').hide();
                 }
              }else{
                document.getElementById('error').style.display='block';
                document.getElementById('error').innerHTML=data['msg'];
              }i
          }
        });
}

function deactivate(loader_id){
  $(loader_id).show();
  $('.email_buttons button').prop('disabled', true);
}

function activate(loader_id){
  $(loader_id).hide();
  $('.email_buttons button').prop('disabled', false);
}


/*~~~~~~~~~~~~~~~~~~~what to send~~~~~~~~~~~~~~~~~~~~~```*/

$("#send-test-mail").on('click',function(){
  email=$("#test-email").val();
  $("#test-mail-success").hide();
  $("#test-mail-error").hide();
  if(email==''){
    $("#test-mail-error").html("Please enter your email address");
    $("#test-mail-error").show();
    return;
  }
  $("#test-mail-loader").show();
  $("#test-mail-loader span").text('');
  $("#send-test-mail").prop('disabled',true);
  $.ajax({
      dataType: "json",
      type: "POST",
      data: 'id='+id+'&type='+type+'&email='+encodeURIComponent(email)+'&emailRequestId='+emailRequestId,
      url: "sendTestEmail_json.php",
      success: function(data) {
          $("#test-mail-loader").hide();
          $("#test-mail-loader span").text('Send');
          $("#send-test-mail").prop('disabled',false);
          if(data["status"]=='Success'){
            $("#test-mail-error").hide();
            $("#test-mail-success").html('Sent successfully');
            $("#test-mail-success").show();
          }else{
            $("#test-mail-success").hide();
            $("#test-mail-error").html(data['msg']);
            $("#test-mail-error").show();
          }
      }
  });  

});

function chooseSpeaker(){
  $('.speaker-dropdown').slideUp();  
  $('#choose-speaker').on('click',function(e){
    if($('#choose-speaker').hasClass("down")){
      $('#choose-speaker').children().removeClass('arrowactive');
      $('.speaker-dropdown').slideUp();  
      $('#choose-speaker').removeClass("down")
    }else{
      $('#choose-speaker').children().addClass('arrowactive');
      $('.speaker-dropdown').slideDown();  
      $('#choose-speaker').addClass("down")
    }  
  });

  $(".choose-speaker label").on('click',function(e){
    e.preventDefault();
    speakerValueCount=$(this).children().val();
    $('.choose-speaker').find('span').remove()
    $(this).append('<span style="float:right;font-family: Arial Unicode MS, Lucida Grande">&#10004;</span>');
  });

}


function chooseSponsor(){
   $('.sponsor-dropdown').slideUp();  
  $('#choose-sponsor').on('click',function(e){
    if($('#choose-sponsor').hasClass("down")){
      $('#choose-sponsor').children().removeClass('arrowactive');
      $('.sponsor-dropdown').slideUp();  
      $('#choose-sponsor').removeClass("down")
    }else{
      $('#choose-sponsor').children().addClass('arrowactive');
      $('.sponsor-dropdown').slideDown();  
      $('#choose-sponsor').addClass("down")
    }  
  });


  $(".choose-sponsor label").on('click',function(e){
    e.preventDefault();
    sponsorValueCount=$(this).children().val();
    $('.choose-sponsor').find('span').remove()
    $(this).append('<span style="float:right;font-family: Arial Unicode MS, Lucida Grande">&#10004;</span>');

  });



}

function chooseSession(){
  
  $('.agenda-dropdown').slideUp(); 
  $('#choose-session').on('click',function(e){
    if($('#choose-session').hasClass("down")){
      $('#choose-session').children().removeClass('arrowactive');
      $('.agenda-dropdown').slideUp(); 
      $('#choose-session').removeClass("down")
    }else{
      $('#choose-session').children().addClass('arrowactive');
      $('.agenda-dropdown').slideDown(); 
      $('#choose-session').addClass("down")
    }  
  });

$('.session-type input').on('change', function() {
    if($(".session-type input[type=radio]:checked").val()=='0'){
      $("#agenda-all").hide();
    }else{
      $("#agenda-all").show();
    }
});

  $(".choose-session label").on('click',function(e){
    e.preventDefault();
    sessionValueCount=$(this).children().val();
    $('.choose-session').find('span').remove()
    $(this).append('<span style="float:right;font-family: Arial Unicode MS, Lucida Grande">&#10004;</span>');
  });
}

function addAbout(){
   $('.about-email').slideUp(); 
  $('#about-email').on('click',function(e){
    if($('#about-email').hasClass("down")){
      $('#about-email').children().removeClass('arrowactive');
      $('.about-email').slideUp();  
      $('#about-email').removeClass("down")
    }else{
      $('#about-email').children().addClass('arrowactive');
      $('.about-email').slideDown();
      $('#about-email').addClass("down")
    }  
  });

}

function onAboutChange(){
  $('.email-event-description-span').empty();
  $('.email-event-description-span').append(tinyMCE.get('about-description').getContent());
}

function addSubject(){
    $('.subject-email').slideUp(); 
    $('#subject-email').on('click',function(e){
    if($('#subject-email').hasClass("down")){
      $('#subject-email').children().removeClass('arrowactive');
      $('.subject-email').slideUp();  
      $('#subject-email').removeClass("down")
    }else{
      $('#subject-email').children().addClass('arrowactive');
      $('.subject-email').slideDown();
      $('#subject-email').addClass("down")
    }  
  });

}

function addSender(){
     $('.sender-email').slideUp(); 
  $('#sender-email').on('click',function(e){
    if($('#sender-email').hasClass("down")){
      $('#sender-email').children().removeClass('arrowactive');
      $('.sender-email').slideUp();  
      $('#sender-email').removeClass("down")
    }else{
      $('#sender-email').children().addClass('arrowactive');
      $('.sender-email').slideDown();
      $('#sender-email').addClass("down")
    }  
  });

}


function addheader(){
     $('.header-email').slideUp(); 
  $('#header-email').on('click',function(e){
    if($('#header-email').hasClass("down")){
      $('#header-email').children().removeClass('arrowactive');
      $('.header-email').slideUp();  
      $('#header-email').removeClass("down")
    }else{
      $('#header-email').children().addClass('arrowactive');
      $('.header-email').slideDown();
      $('#header-email').addClass("down")
    }  
  });

}


function addSenderEmailId(){
     $('.sender-emailid').slideUp(); 
  $('#sender-emailid').on('click',function(e){
    if($('#sender-emailid').hasClass("down")){
      $('#sender-emailid').children().removeClass('arrowactive');
      $('.sender-emailid').slideUp();  
      $('#sender-emailid').removeClass("down")
    }else{
      $('#sender-emailid').children().addClass('arrowactive');
      $('.sender-emailid').slideDown();
      $('#sender-emailid').addClass("down")
    }  
  });

}
function addSenderReplyId(){
     $('.sender-replyid').slideUp(); 
  $('#sender-replyid').on('click',function(e){
    if($('#sender-replyid').hasClass("down")){
      $('#sender-replyid').children().removeClass('arrowactive');
      $('.sender-replyid').slideUp();  
      $('#sender-replyid').removeClass("down")
    }else{
      $('#sender-replyid').children().addClass('arrowactive');
      $('.sender-replyid').slideDown();
      $('#sender-replyid').addClass("down")
    }  
  });
}

function imageUploader(){
    $('.image-email').slideUp(); 
    $('#image-email').on('click',function(e){
    if($('#image-email').hasClass("down")){
      $('#image-email').children().removeClass('arrowactive');
      $('.image-email').slideUp();  
      $('#image-email').removeClass("down")
    }else{
      $('#image-email').children().addClass('arrowactive');
      $('.image-email').slideDown();
      $('#image-email').addClass("down")
    }  
  });
}

function addEventVenue(){
     $('.venue-email').slideUp(); 
  $('#venue-email').on('click',function(e){
    if($('#venue-email').hasClass("down")){
      $('#venue-email').children().removeClass('arrowactive');
      $('.venue-email').slideUp();  
      $('#venue-email').removeClass("down")
    }else{
      $('#venue-email').children().addClass('arrowactive');
      $('.venue-email').slideDown();
      $('#venue-email').addClass("down")
    }  
  });

}

function addEventButton(){
     $('.button-email').slideUp(); 
  $('#button-email').on('click',function(e){
    if($('#button-email').hasClass("down")){
      $('#button-email').children().removeClass('arrowactive');
      $('.button-email').slideUp();  
      $('#button-email').removeClass("down")
    }else{
      $('#button-email').children().addClass('arrowactive');
      $('.button-email').slideDown();
      $('#button-email').addClass("down")
    }  
  });
}


function onGenerateTemplate(id,type,themeId){
    $('#generate').on('click',function(e){
      var senderName='';
      var subject='';
      var senderEmail='';
      var confirmSenderEmail='';
      var senderReplyEmail='';
      var sessionSectionName='';
      var speakerSectionName='';
      var sponsorSectionName='';     

      var description=tinyMCE.get('about-description').getContent();
      description_encoded=encodeURIComponent(description);
      
      if($(".choose-speaker span").length){
        var speakerCount=$(".choose-speaker span").parent().children().val();
      }else{
        var speakerCount=0;
      }
      
      if($(".choose-sponsor span").length){
        var sponsorCount=$(".choose-sponsor span").parent().children().val();
      }else{
        var sponsorCount=0;
      }

      if($(".choose-session span").length){
        var isfeatured=$(".session-type input[type=radio]:checked").val();
        var agenda_day=$(".choose-session span").parent().children().val();        
      }else{
        var isfeatured=0
        var agenda_day=0               
      }

      var isEventVenue=$(".venue-email input[type=radio]:checked").val();
      var isEventButton=$(".button-email input[type=radio]:checked").val();

      var isEventHeader=$(".header-email input[type=radio]:checked").val();
      
      if($(".agenda-dropdown input[type=text]").length){  
        sessionSectionName=$(".agenda-dropdown input[type=text]").val();        
      }
      
      if($(".speaker-dropdown input[type=text]").length){  
        speakerSectionName=$(".speaker-dropdown input[type=text]").val();        
      }

      if($(".sponsor-dropdown input[type=text]").length){  
        sponsorSectionName=$(".sponsor-dropdown input[type=text]").val();        
      }

      var imgName=$("#email-image-hidden").val();
      var imgLink=$("#img_link").val();
      var imgPosition=$("#image_location option:selected").val();
      var emailName=$("#email-name").text();
      var action='templateDetails';


      if(!emailName.trim()){
        $("#email-name-error").show();
        return;
      }

      $("#generate img").show();
      $("#generate span").text("Saving...");
      $("#generate").prop('disabled',true);

      var dataQuery='id='+id+'&type='+type+'&emailRequestId='+emailRequestId+'&action='+action+'&emailName='+emailName+'&body='+description_encoded+'&senderName='+encodeURIComponent(senderName)+'&subject='+encodeURIComponent(subject)+'&speakerCount='+encodeURIComponent(speakerCount)+'&sponsorCount='+encodeURIComponent(sponsorCount)+'&isfeatured='+isfeatured+'&agenda_day='+agenda_day+'&emailTypeId=1&speakerSectionName='+encodeURIComponent(speakerSectionName)+'&sponsorSectionName='+encodeURIComponent(sponsorSectionName)+'&sessionSectionName='+encodeURIComponent(sessionSectionName)+'&senderEmail='+encodeURIComponent(senderEmail)+'&senderReplyEmail='+encodeURIComponent(senderReplyEmail)+'&isEventHeader='+encodeURIComponent(isEventHeader)+'&isEventVenue='+encodeURIComponent(isEventVenue)+'&isEventButton='+encodeURIComponent(isEventButton)+'&imgName='+encodeURIComponent(imgName)+'&imgLink='+encodeURIComponent(imgLink)+'&imgPosition='+encodeURIComponent(imgPosition)+'&confirmSenderEmail='+encodeURIComponent(confirmSenderEmail);

      $.ajax({
          dataType: "json",
          type: "POST",
          data: dataQuery,
          url: "saveEmailBody_json.php",
          success: function(data) {
              $("#generate").prop('disabled',false);
              if(data["status"]=='Success'){
                $("#generate span").text("Generating Template....");
                $("#transp").show();                
                $("#invite-email").load('theme/'+themeId+'/inviteAttendeeLoad.php?id='+id+'&type='+type+'&request='+emailRequestId);
                $("#transp").hide();
              }else{
                //do something
              }
              $("#generate img").hide();
              $("#generate span").text("Save Template");
          }
        });
    }); 
}


function onSaveSendDetails(id,type,themeId){
    $('#generate-details').on('click',function(e){
      $("#onSaveEmailConfirmError").hide();
      var description='';
      var description_encoded='';      
      var speakerCount=0;      
      var sponsorCount=0;
      var isEventVenue='';
      var isEventButton='';
      var isEventHeader='';
      var speakerSectionName='';
      var sponsorSectionName='';
      var sessionSectionName='';
      var imgName='';
      var imgLink='';
      var imgPosition='';
      var isfeatured=0
      var agenda_day=0               

      var senderName=$(".sender-email input").val();
      var subject=$(".subject-email textarea").val();
      var senderEmail=$(".sender-emailid-input").val();
 
      var confirmSenderEmail=0;

      for (var i = 0; i < emailList.length; i++) {
        if(senderEmail.trim()==emailList[i]['email']){
          if(emailList[i]['isconfirmed']=='1'){
            confirmSenderEmail=1;
            break;
          }
        }
      }

      if(confirmSenderEmail==0){
        $("#onSaveEmailConfirmError").show();
        return;
      }

      $(".hidden-confirmEmailStatus").hide();

      var senderReplyEmail=$(".sender-replyid input").val();
      var emailName=$("#email-name").text();
      var action='senderDetails';

      if(!emailName.trim()){
        $("#email-name-error").show();
        return;
      }



      $("#generate-details img").show();
      $("#generate-details span").text("Saving...");
      $("#generate-details").prop('disabled',true);

      var dataQuery='id='+id+'&type='+type+'&emailRequestId='+emailRequestId+'&action='+action+'&emailName='+emailName+'&body='+description_encoded+'&senderName='+encodeURIComponent(senderName)+'&subject='+encodeURIComponent(subject)+'&speakerCount='+encodeURIComponent(speakerCount)+'&sponsorCount='+encodeURIComponent(sponsorCount)+'&isfeatured='+isfeatured+'&agenda_day='+agenda_day+'&emailTypeId=1&speakerSectionName='+encodeURIComponent(speakerSectionName)+'&sponsorSectionName='+encodeURIComponent(sponsorSectionName)+'&sessionSectionName='+encodeURIComponent(sessionSectionName)+'&senderEmail='+encodeURIComponent(senderEmail)+'&senderReplyEmail='+encodeURIComponent(senderReplyEmail)+'&isEventHeader='+encodeURIComponent(isEventHeader)+'&isEventVenue='+encodeURIComponent(isEventVenue)+'&isEventButton='+encodeURIComponent(isEventButton)+'&imgName='+encodeURIComponent(imgName)+'&imgLink='+encodeURIComponent(imgLink)+'&imgPosition='+encodeURIComponent(imgPosition)+'&confirmSenderEmail='+encodeURIComponent(confirmSenderEmail);

      $.ajax({
          dataType: "json",
          type: "POST",
          data: dataQuery,
          url: "saveEmailBody_json.php",
          success: function(data) {
              $("#generate-details").prop('disabled',false);
              if(data["status"]=='Success'){
                $("#generate-details span").text("Save Details");
              }else{
                //do something
              }
              $("#generate-details img").hide();
              $("#generate-details span").text("Save Details");
          }
        });
    }); 
}


function emailNameError(){
  var tmp=$("#email-name").val();
  if(tmp.trim().length>0){
    $("#email-name-error").hide();
  }else{
    $("#email-name-error").show();
  }

}

function uploadEmailImages(){
  $('#email-image-fileinput').trigger('click');
}

function downloadSample(){
  var uri = '../eventApp/ws/organizer_attendee_csv/sample.csv';
  var link = document.createElement("a");
  link.href = uri;
  link.style = "visibility:hidden";
  //this part will append the anchor tag and remove it after automatic click
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link); 
}

function checkForConfirmEmail(){
  //later

}


function saveEmailName(id,type,requestId,emName){

      $("#update-tagline-yes img").show();
      $("#update-tagline-yes span").text('');
      $("#update-tagline-yes").prop('disabled',true);

      var dataQuery='id='+id+'&type='+type+'&emailRequestId='+requestId+'&emName='+encodeURIComponent(emName);
      $.ajax({
          dataType: "json",
          type: "POST",
          data: dataQuery,
          url: "saveEmailName_json.php",
          complete: function(data){
              $("#update-tagline-yes img").hide();
              $("#update-tagline-yes span").text('Yes');
              $("#update-tagline-yes").prop('disabled',false);
          },
          success: function(data) {
              if(data["status"]=='Success'){
                $("#email-name").text(emName);
                $("#emailNameModal").modal('hide');  
              }else{
                //do something
              }
          }
        });
}

function getOpenAnalytics(){
      $("#resend-mails").prop('disabled',true);
      $.ajax({
        type: "GET",
        contentType: "application/json;",
        url: 'getAnalyticsData_json.php?id='+id+'&type='+type,
        data : {requestid : 3},
        complete: function (data){
          $("#resend-mails").prop('disabled',false);
        },
        success: function (data) {   
          data = JSON.parse(data);
          if(data['status'] == 'Fail'){
            $("#emailOpen").text(0);
            $("#emailResend").text(0);
          }else{
            for(var i in data){
              
              if(typeof data[i] === "object")
              {
                if(data[i]['id']==emailRequestId){
                  $("#emailOpen").text(data[i]['email_opened_count']);
                  $("#emailResend").text((data[i]['email_sent_Count']-data[i]['email_opened_count']));
                }
              }
            }
          }          
        },
        error:function (data){
        }
      });
}




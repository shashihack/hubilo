    var pagecount=0;
    var pagenum=0;
    var myevent="";
    var search_value="";
    var active = false;
    var active2 = false;
    var xhr;
    var start=false;
    var result_page="";
    var id ="";
    var type="";
    var sort_by_id="";
    
    
    $(window).bind('scroll', (function(){

        if (nearBottomOfPage) {
        if(start) {
              start = false;
              pagecount = $('#pageCount').val();
              pagenum = pagenum + 1;
              if (pagenum < pagecount) 
              {
                  getresult(result_page, pagenum, search_value, myevent, sort_by_id,id,type);
                
              }
          }
        }
    }.bind(result_page)));
 

    function nearBottomOfPage() {
      return scrollDistanceFromBottom() < 150;
    }

    function scrollDistanceFromBottom(argument) {
      return pageHeight() - (window.pageYOffset + self.innerHeight);
    }

    function pageHeight() {
      return Math.max(document.body.scrollHeight, document.body.offsetHeight);
    }


   
    function setListName(name){
        myevent=name;
    }
    function setResultPageName(name){
        result_page=name;
    }
    function setPageNum(){
        pagenum=0;
    }
    function setId(event_id)
    {
        id =event_id;
    }
    function setType(event_type)
    {
        type =event_type;
    }
    
    function search(result_page,search_in)
    {        
        pagenum=0;
        search_value=$('#userdatabase_main_search').val();
        sort_by_id=$('#event_attendee_sort_by').val();
        if(search_value.trim().length == 0)
        {
            search_value = "";
        }

        document.getElementById(search_in).innerHTML="";
        getresult(result_page,pagenum,search_value,"#"+search_in,sort_by_id,id,type);
    }
    
    function actual_search(result_page,search_in){ 
        pagenum=0;
        search_value=$('#userdatabase_main_search').val();
        sort_by_id=$('#event_attendee_sort_by').val();
        
        if(search_value.trim().length == 0)
        {
            search_value = "";
            if(active2){
                return;
            }
        }

        document.getElementById(search_in).innerHTML="";
        getresult(result_page,pagenum,search_value,"#"+search_in,sort_by_id,id,type);
    }

   
    function getresult(page,page_num,value,content,sort_by_id,id,type) 
    {
        value = encodeURIComponent(value);
        var url = page+'?page='+page_num+'&value='+value+'&sort='+sort_by_id+'&id='+id+'&type='+type;
        if(active) {
            xhr.abort();      /*function to cancel previous ajax request while searching*/
        }
        active = true;
        xhr = $.ajax({
            url: url,
            type: "GET",
            data: {page_count:$("#page_count").val()},
            beforeSend: function(){
                $('#loader-icon').show();
            },
            complete: function(){
                $('#loader-icon').hide();
                active = false;
                start = true;
                if(value == ''){
                    active2 = true;
                }else{
                    active2 = false;
                }
            },
            success: function(data){
                if($("#pageCount").val() == "0") {
                    alert('here');
                }
                $(content).append(data);
            },
            error: function(){


            }
        });
    }

    function showMore(id){
      $('#event_attendee-description-modal').modal();
      $('#modal-attendee-desc span').text(id);
    }

    function showMoreCategory(text){
      $('#event_attendee-title-modal').modal();
      $('#modal-attendee-title span').text(text);        
    }

$(document).ready(function() {
    $('#event_attendee-grid').click(function(e)
    {
        $("#event_attendee_sort_by").val("");
        $("#userdatabase_main_search").val("");
        pagecount=0;
        pagenum=0;
        search_value="";
        active = false;
        xhr;
        start=false;
        result_page="";
        myevent="";
        sort_by_id="";
        $('#user_database_main').empty();
        setListName("#user_database_main");
        setResultPageName('getRegisterAttendeeDatabase_json.php');
        getresult('getRegisterAttendeeDatabase_json.php',0,'','#user_database_main','',id,type);
    });
});

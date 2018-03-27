    var pagecount=0;
    var pagenum=0;
    var search_value="";
    var active = false;
    var active2 = false;
    var xhr;
    var start=false;
    
    var result_page="";
    var myevent="";
    var filter_eventId="";
    var filter_eventtype="";
    var sort_by_id="";
    
    
    $(window).bind('scroll', (function(){

        if (nearBottomOfPage) {
        if(start) {
              start = false;
              pagecount = $('#pageCount').val();
              pagenum = pagenum + 1;
              if (pagenum < pagecount) {
                  getresult(result_page, pagenum, search_value, myevent, sort_by_id, filter_eventId, filter_eventtype);
              }
          }
        }
    }.bind(myevent,result_page)));
    


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
    
    function search(result_page,search_in){        
        pagenum=0;
        search_value=$('#sponsordatabase_main_search').val();
        sort_by_id=$('#sponsor_sort_by').val();
        sort_filter_id=$('#sponsor_filter_by').val();
        if(sort_filter_id.trim().length != 0){
            filter_eventId=sort_filter_id.split("_")[0];
            filter_eventtype=sort_filter_id.split("_")[1];
        }else{
            filter_eventId="";
            filter_eventtype="";
        }
        if(search_value.trim().length == 0){
            search_value = "";
        }
        document.getElementById(search_in).innerHTML="";
        getresult(result_page,pagenum,search_value,"#"+search_in,sort_by_id,filter_eventId,filter_eventtype);
    }
    
    function actual_search(result_page,search_in){        
        pagenum=0;
        search_value=$('#sponsordatabase_main_search').val();
        sort_by_id=$('#sponsor_sort_by').val();
        sort_filter_id=$('#sponsor_filter_by').val();
        if(sort_filter_id.trim().length != 0){
            filter_eventId=sort_filter_id.split("_")[0];
            filter_eventtype=sort_filter_id.split("_")[1];
        }else{
            filter_eventId="";
            filter_eventtype="";
        }
        if(search_value.trim().length == 0){
            search_value = "";
            if(active2){
                return;
            }
        }
        document.getElementById(search_in).innerHTML="";
        getresult(result_page,pagenum,search_value,"#"+search_in,sort_by_id,filter_eventId,filter_eventtype);
    }

    function getresult(page,page_num,value,content,sort_by_id,filter_eventId,filter_eventtype) {
        value = encodeURIComponent(value);
        var url = page+'?page='+page_num+'&value='+value+'&sort='+sort_by_id+'&filter_eventId='+filter_eventId+'&filter_eventtype='+filter_eventtype;
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
      $('#sponsor-description-modal').modal();
      $('#modal-sponsor-desc span').text(id);
    }

    function showMoreCategory(text){
      $('#sponsor-title-modal').modal();
      $('#modal-sponsor-title span').text(text);        
    }

$(document).ready(function() {
    $('#sponsor-grid').click(function(e){
        $("#sponsor_sort_by").val("default");
        $("#sponsor_filter_by").val("default");
        $("#sponsordatabase_main_search").val("");
        pagecount=0;
        pagenum=0;
        search_value="";
        active = false;
        xhr;
        start=false;
        result_page="";
        myevent="";
        filter_eventId="";
        filter_eventtype="";
        sort_by_id="";
        $('#sponsor_database_main').empty();
        setListName("#sponsor_database_main");
        setResultPageName('getsponsorMainDatabase_json.php');
        getresult('getsponsorMainDatabase_json.php',0,'','#sponsor_database_main','','','');
    });
});

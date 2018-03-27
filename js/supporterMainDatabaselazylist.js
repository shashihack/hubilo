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

        if ($(window).scrollTop() == $(document).height() - $(window).height()) {
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
        search_value=$('#supporterdatabase_main_search').val();
        sort_by_id=$('#supporter_sort_by').val();
        sort_filter_id=$('#supporter_filter_by').val();
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
        search_value=$('#supporterdatabase_main_search').val();
        sort_by_id=$('#supporter_sort_by').val();
        sort_filter_id=$('#supporter_filter_by').val();
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
      $('#supporter-description-modal').modal();
      $('#modal-supporter-desc span').text(id);
    }

    function showMoreCategory(text){
      $('#supporter-title-modal').modal();
      $('#modal-supporter-title span').text(text);        
    }

$(document).ready(function() {
    $('#supporter-grid').click(function(e){
        $("#supporter_sort_by").val("default");
        $("#supporter_filter_by").val("default");
        $("#supporterdatabase_main_search").val("");
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
        $('#supporter_database_main').empty();
        setListName("#supporter_database_main");
        setResultPageName('getsupporterMainDatabase_json.php');
        getresult('getsupporterMainDatabase_json.php',0,'','#supporter_database_main','','','');
    });
});

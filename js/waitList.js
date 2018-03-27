    var pagecount=0;
    var pagenum=0;
    var search_value="";
    var active = false;
    var active2 = false;
    var xhr;
    var start=false;
    
    var result_page="";
    var myevent="";
    var pagination=".pagination";
    var totalPages;
    var currentPage=1;
    
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
        search_value=$('#organizerattendeedatabase_main_search').val();
        if(search_value.trim().length == 0){
            search_value = "";
        }
        getresult(result_page,pagenum,search_value,"#"+search_in);
    }
    
    function actual_search(result_page,search_in){        
        pagenum=0;
        search_value=$('#organizerattendeedatabase_main_search').val();
        if(search_value.trim().length == 0){
            search_value = "";
            if(active2){
                return;
            }
        }
        getresult(result_page,pagenum,search_value,"#"+search_in);
    }

    function getresult(page,page_num,value,content) {
        value = encodeURIComponent(value);
        currentPage = page_num+1;
        var url = page+'?page='+page_num+'&value='+value+'&id='+id+'&type='+type;
        if(active) {
            xhr.abort();      /*function to cancel previous ajax request while searching*/
        }
        active = true;
        xhr = $.ajax({
            url: url,
            type: "GET",
            data: {page_count:$("#page_count").val()},
            beforeSend: function(){
                $(content+" tbody").hide();
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
                
                $(content+" tbody").next().remove();
                $(content+" tbody").remove();
                $(content).append(data);
                if($("#pageCount").val()>0){                  
                 totalPages=$("#pageCount").val();                
                }
                console.log(totalPages);

                var startPage;
                var endPage;
                startPage = (currentPage < 5)? 1 : currentPage - 4;
                endPage = 8 + startPage;
                endPage = (totalPages < endPage) ? totalPages : endPage;
                diff = startPage - endPage + 8;
                startPage -= (startPage - diff > 0) ? diff : 0;

                $(pagination).html('');
                var temp='';
                for(i=startPage; i<=endPage; i++) {
                    temp+='<li id="page_'+(i)+'" class="paginate_button" aria-controls="DataTables_Table_0" tabindex="0">\
                          <a>'+(i)+'</a>\
                    </li>';                                      
                }
                                
                var pagination_data= '<li id="previous" class="paginate_button previous disabled" aria-controls="DataTables_Table_0" tabindex="0" id="DataTables_Table_0_previous">\
                                          <a>Prev</i></a>\
                                     </li>'+temp+
                                    '<li id="next" class="paginate_button next" aria-controls="DataTables_Table_0" tabindex="0" id="DataTables_Table_0_next">\
                                      <a>Next</i></a>\
                                    </li>';
               
                $(pagination).append(pagination_data);
                $(pagination).children().removeClass('active');
                $('#page_'+(currentPage)).addClass('active');
                if(currentPage>1){
                  $('#previous').removeClass('disabled');
                }else{
                  $('#previous').addClass('disabled');      
                }
                if(parseInt(currentPage) < parseInt(totalPages)){
                  $('#next').removeClass('disabled');
                }else{
                  $('#next').addClass('disabled');
                }
                $("#transp").hide();

            },
            error: function(){

            }
        });
    }

    function onclickPage(){
      $('li[id^="page_"]').live('click',function(){
        event.preventDefault();
        currentPage=this.id.split('_')[1];
        getresult('getWaitListAttendee.php',(currentPage-1),$('#organizerattendeedatabase_main_search').val(),'#organizerAttendeeTable');
      });
    }

    function onNextPageClick(){
      $('#next').live('click',function(){
        event.preventDefault();
        if(currentPage < (totalPages)){
        getresult('getWaitListAttendee.php',currentPage,$('#organizerattendeedatabase_main_search').val(),'#organizerAttendeeTable');
        }      
      });
    }

    function onPreviousClick(){
      $('#previous').live('click',function(){
        event.preventDefault();
        if(currentPage>1){
          getresult('getWaitListAttendee.php',(currentPage-2),$('#organizerattendeedatabase_main_search').val(),'#organizerAttendeeTable');
        }       
      });
    }

    function showMoreCategory(text){
      $('#attendee-title-modal').modal();
      $('#modal-attendee-title span').text(text);        
    }

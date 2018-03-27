    var pagecount=0;
    var pagenum=0;
    var active = false;
    var xhr;
    var start=false;
    
    var result_page="";
    var myevent="";
    var event_id;
    var event_type;
    
    $(window).bind('scroll', (function(){

        if (nearBottomOfPage) {
        if(start) {
              start = false;
              pagecount = $('#pageCount').val();
              pagenum = pagenum + 1;
              if (pagenum < pagecount) {
                  getresult(result_page, pagenum , myevent, event_id , event_type );
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
       
    function getresult(page,page_num,content,id,type) {
        event_id=id;
        event_type=type;
        var url = page+'?page='+page_num+'&id='+id+'&type='+type;
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

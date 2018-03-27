    var pagecount=0;
    var pagenum=0;
    var search_value="";
    var active = false;
    var xhr;
    var start=false;
    var active2 = false;
    
    var result_page="";
    var myevent="";
    var id="";
    var type="";

    var pagecount1=0;
    var pagenum1=0;
    var search_value1="";
    var active1 = false;
    var xhr1;
    var start1=false;
    var active3 = false;

    var result_page1="";
    var myevent1="";
    var id1="";
    var type1="";

    var heightDivName = "";

    $(window).bind('scroll', (function(){
        var heightdiv  = $('.'+heightDivName).outerHeight();
        var documentheight=$(window).height();
    
        if ($(window).scrollTop() > heightdiv-documentheight) {
            if(start) {
                start = false;
                pagenum = pagenum + 1;
                if (pagenum < pagecount) {
                    getresult(result_page, pagenum, search_value, myevent,id,type);
                }
            }
        }
    }.bind(myevent,result_page,myevent1,result_page1)));

    function resetAllVal(){
        var pagecount=0;
        var pagenum=0;
        var search_value="";
        var active = false;
        var xhr;
        var start=false;
        var active2 = false;
        var result_page="";
        var myevent="";
        var id="";
        var type="";
        var heightDivName = "";
    }
    function resetAllVal1(){
        var pagecount1=0;
        var pagenum1=0;
        var search_value1="";
        var active1 = false;
        var xhr1;
        var start1=false;
        var active3 = false;
        var result_page1="";
        var myevent1="";
        var id1="";
        var type1="";
        var heightDivName = "";
    }
    function getHeightDivName(name){
        heightDivName=name;
    }
    function setListName(name){
        myevent=name;
    }
    function setId(id_toSet){
        id=id_toSet;
    }
    function setType(type_toSet){
        type=type_toSet;
    }
    function setResultPageName(name){
        result_page=name;
    }
    function setPageNum(){
        pagenum=0;
    }
    function setSearchValue(name){
        search_value=name;
    }
    function setPageCount(val){
        pagecount=val;
    }
    function setId(val){
        id=val;
    }
    function search(result_page,search_value,search_in){
        
        pagenum=0;
        if(search_value.trim().length == 0)
        {
            search_value = "";
            if(active2){
                return;
            }
        }
        document.getElementById(search_in).innerHTML="";
        setSearchValue(search_value);
        getresult(result_page,pagenum,search_value,"#"+search_in,id,type);
    }
   
    function getresult(page,page_num,value,content,id,type) {
        value = encodeURIComponent(value);
        var url ="";
        if(id=="" && type==""){
            url = page+'?page='+page_num+'&value='+value;
        }
        else{
            url = page+'?page='+page_num+'&value='+value+'&id='+id+'&type='+type;
        }

        if(active) {
            xhr.abort();     //*function to cancel previous ajax request while searching*//*
        }
        active = true;
        xhr = $.ajax({
            url: url,
            type: "GET",
            data: {page_count:pagecount},
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
                var raw = "pageCount_"+content.substr(1);
                setPageCount(parseInt($('#pageCount_'+content.substr(1)).val()));
            },
            success: function(data){
                $(content).append(data);
                setId1(id);
                setType1(type);
            },
            error: function(){

            }
        });
    }


    function setListName1(name){
        myevent1=name;
    }
    function setId1(id_toSet){
        id1=id_toSet;
    }
    function setType1(type_toSet){
        type1=type_toSet;
    }
    function setResultPageName1(name){
        result_page1=name;
    }
    function setPageNum1(){
        pagenum1=0;
    }
    function setSearchValue1(name){
        search_value1=name;
    }
    function setPageCount1(val){
        pagecount1=val;
    }
    function setId1(val){
        id1=val;
    }
    function search1(result_page1,search_value1,search_in1){

        pagenum1=0;
        if(search_value1.trim().length == 0)
        {
            search_value1 = "";
            if(active3){
                return;
            }
        }
        document.getElementById(search_in1).innerHTML="";
        setSearchValue1(search_value1);
        getresult1(result_page1,pagenum1,search_value1,"#"+search_in1,id1,type1);
    }

    function getresult1(page1,page_num1,value1,content1,id1,type1) {
        value1 = encodeURIComponent(value1);
        var url1 ="";
        if(id1=="" && type1==""){
            url1 = page1+'?page='+page_num1+'&value='+value1;
        }
        else{
            url1 = page1+'?page='+page_num1+'&value='+value1+'&id='+id1+'&type='+type1;
        }

        if(active1) {
         xhr1.abort();      //*function to cancel previous ajax request while searching*//*
        }

        active1 = true;
        xhr1 = $.ajax({
            url: url1,
            type: "GET",
            data: {page_count:pagecount1},
            beforeSend: function(){
                $('#loader-icon-1').show();
            },
            complete: function(){
                $('#loader-icon-1').hide();
                active1 = false;
                start1 = true;
                if(value1 == ''){
                    active3 = true;
                }else{
                    active3 = false;
                }
                var raw = "pageCount_"+content1.substr(1);
                setPageCount1(parseInt($('#pageCount_'+content1.substr(1)).val()));
            },
            success: function(data){
                $(content1).append(data);
            },
            error: function(){

            }
        });
    }

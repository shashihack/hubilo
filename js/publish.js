var id='';
var type='';
var isPublished;
function setPublishEventParameters(i,t){
    id=i;
    type=t;
}
$('#publishEventSwitch').change(function(){
    isPublished = document.getElementById("publishEventSwitch").checked;
    var dataString='id='+id+'&type='+type+'&isPublished='+isPublished;
    console.log(dataString);
    $.ajax({
        dataType: "json",
        type: "POST",
        data: dataString,
        url: "publishEvent_json.php",
        success: function(data) {
            if(data["status"]=='Success'){

            }else{
                if(isPublished == 'true'){
                    $("#publishEventSwitch").attr('checked', 'false');
                }else{
                    $("#publishEventSwitch").attr('checked', checked);
                }
            }
        }
    });
});

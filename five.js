$(document).on('submit','#regForm',function(e){
    
    e.preventDefault();
    
        var title=$('#title').val();
        var name : $('#name').val();
        var resource : $('#resource').val(),;
        var group : $('#group').val();
        var myfile : $('#myfile').val();
        var file : $('#file').val();
        
    $.ajax({
    type : "POST",
    url : '/bin/custom/path',
    data: 'title='+title+'&name='+name+'&resource='+resource+'&group='+group+'&myfile='+myfile+'&file='+file,
    
    success : function(msg) {
        
       var json = jQuery.parseJSON(msg); 
            var pageTitle=   json.title;
            var pageName = json.name;
            var pageResource = json.resource;
        $('#ClaimNum').val(pageTitle);
            $('#value').val("Filed by " + pageTitle + " " + pageName);
                },

});
});

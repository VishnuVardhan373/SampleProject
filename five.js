$(document).on('submit','#regForm',function(e){
    window.alert("hello1"),
    e.preventDefault();
    window.alert("hello1"),
    $.ajax({
    type : "POST",
    window.alert("hello1"),
    url:'/',
    //url : '/bin/custom/path',
    data : {
        title : $('#title').val(),
        name : $('#name').val(),
        resource : $('#resource').val(),
        group : $('#group').val(),
        myfile : $('#myfile').val(),
        file : $('#file').val(),
    },
        window.alert(name);
    success : function(data, textStatus, jqXHR) {
        window.alert(name);
        //write your logic that you need to perform on sucess           
                },
    error : function(XMLHttpRequest, textStatus, errorThrown) {
        //write your logic that you need to perform on error
    }
});
});

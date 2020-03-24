
    
$("[type='submit']").on("click",function(){
    if($("#nachname").val() == "") {
        $("#nachname").css("border-color","red");
    }else{
    $("#nachname").css("border-color","green");
}
});
$("[type='submit']").on("click",function(){
    if($("#vorname").val() == "") {
        $("#vorname").css("border-color","red");
    }else{
    $("#vorname").css("border-color","green");
}
});

$("[type='submit']").on("click",function(){
    if($("#adress").val() == "") {
        $("#adress").css("border-color","red");
    }else{
    $("#adress").css("border-color","green");
}
});

$("[type='submit']").on("click",function(){
    if($("#ort").val() == "") {
        $("#ort").css("border-color","red");
    }else{
    $("#ort").css("border-color","green");
}
});

$("[type='submit']").on("click",function(){
    if($("#plz").val() == "") {
        $("#plz").css("border-color","red");
    }else{
    $("#plz").css("border-color","green");
}
});
$("[type='submit']").on("click",function(){
    if($("#email").val() == "") {
        $("#email").css("border-color","red");
    }else{
    $("#email").css("border-color","green");
}
});
$("[type='submit']").on("click",function(){
    if($("#date").val() == "") {
        $("#date").css("border-color","red");
    }else{
    $("#date").css("border-color","green");
}
});
$("[type='submit']").on("click",function(){
    if($("#time").val() == "") {
        $("#time").css("border-color","red");
    }else{
    $("#time").css("border-color","green");
}
});
$("[type='submit']").on("click",function(){
    if(!$("select").val()) {
        $("select").css("border-color","red");
    }else{
    $("select").css("border-color","green");
}
});






$("#termin").on("change", function() {
    let terminv = $(this).val();

    if(terminv === "Räderwechsel"){
        $(".botradio").css("display", "flex");
    }else{
if(terminv != "Räderwechsel"){
    $(".botradio").css("display", "none");

};

    };
    
    
});
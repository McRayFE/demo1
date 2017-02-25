$(function(){
	function addImage(e){
		console.log("111");
	var imgUrl = $("#imgUrl").val();
	console.log(imgUrl);
	if(imgUrl.length){
		$("#imageContainer img").attr("src",imgUrl);
	}
	e.preventDefault();//阻止默认事件
   }
   //addImage();
  $("#urlBox").submit(addImage);
  function editImage(){
	var gs = $("#gs").val();
	var blur = $("#blur").val();
	var br = $("#br").val();
	var ct = $("#ct").val();
	var huer = $("#huer").val();
	var opacity = $("#opacity").val();
	var invert = $("#invert").val();
	var sepia = $("#sepia").val();
	var saturate = $("#saturate").val();
	console.log(opacity);
	$("#imageContainer img").css("filter",'grayscale(' + gs+
                                                     '%) blur(' + blur +
                                                     'px) brightness(' + br +
                                                     '%) contrast(' + ct +
                                                     '%) hue-rotate(' + huer +
                                                     'deg) opacity(' + opacity +
                                                     '%) invert(' + invert +
                                                     '%) saturate(' + saturate +
                                                     '%) sepia(' + sepia + '%)');
	$("#imageContainer img").css("-webkit-filter",'grayscale(' + gs+
                                                     '%) blur(' + blur +
                                                     'px) brightness(' + br +
                                                     '%) contrast(' + ct +
                                                     '%) hue-rotate(' + huer +
                                                     'deg) opacity(' + opacity +
                                                     '%) invert(' + invert +
                                                     '%) saturate(' + saturate +
                                                     '%) sepia(' + sepia + '%)');
}

$("#reset1").click(function(){
	console.log("111");
	document.getElementById("imageEditor").reset();
	editImage();
});
$("input[type=range]").mousemove(editImage).change(editImage);
});


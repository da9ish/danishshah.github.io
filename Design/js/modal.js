$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
	$('.modal').modal();
});

$('.asdf').click(function(){
	openModal(this);
})

function openModal(div){
	// console.log(div);
	var image = div.getElementsByClassName('design')[0];
	var img = image.getAttribute("src");
	// console.log(img);
	$('#modal1').modal('open');

	var mod_img_1 = document.getElementById('modal_img_2');
	var mod_img_2 = document.getElementById('modal_img_1');

	mod_img_1.setAttribute('src', img);
	mod_img_2.setAttribute('src', img);

	var down_link = document.getElementById('download');
	down_link.href = img;
}


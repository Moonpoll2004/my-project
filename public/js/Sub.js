window.onload = function(){
	var Submodal = document.getElementById('sub-m');
    var SubClose = document.getElementById('sub-c');
    var SubLunch = document.getElementById('add')

	SubLunch.addEventListener('click',()=>{
		Submodal.classList.add('is-active')
	})

	SubClose.addEventListener('click',()=>{
		Submodal.classList.remove('is-active')
	})
}
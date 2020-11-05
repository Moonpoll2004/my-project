
window.onload = function(){
    var Del = document.querySelectorAll('#del');
    var status = document.getElementById("status");
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
        if(this.status === 200&&this.readyState === 4){
            status.innerText = "Code Status is: "+''+this.status+'\n'+'Response:'+''+this.responseText
        }else{
            status.innerText = "Code Status is"+''+this.status
        }

    }
    Del.forEach(function(val){
        val.addEventListener("click",function(){
            const body = {
                category:val.getAttribute('data-category')
            }
            xhr.open("DELETE","/admin/delete",true)
            xhr.setRequestHeader('Content-type','application/json')
            xhr.send(JSON.stringify(body));
        });
    })
}
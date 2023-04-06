document.querySelector('.inscription').addEventListener('submit', function(e){
    e.preventDefault()
    var xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function(){
        if (this.readyState==4 && this.status==200 ){
            alert('formulaire envoyé')

        }else if (this.readyState==4){
            alert('Une erreur est survenue .!!!')
        }
    }
    xhr.open('GET', "app.php")
    xhr.send()
    return false 
})  
    
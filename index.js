function generate_link(){
    username = document.getElementById('ds').value;
    if (username.toLowerCase().includes('totele.ga/')){
        username = username
    }
    else{
    document.getElementById('ds').value = username
    link = 'totele.ga/' + username
    document.getElementById('ds').value = link.toLowerCase()
    navigator.clipboard.writeText(link)
    butt = document.getElementById('butt')
    butt.value = 'Скопировано!'
    setTimeout(() => { 
    butt.value = 'СГЕНЕРИРОВАТЬ ССЫЛКУ'    
     }, 3000);
    }
}
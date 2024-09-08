function toggleMode() {
    const html = document.documentElement;
    html.classList.toggle('light');

    //pegar a tag img
    const img = document.querySelector("#profile img");

    //substituir a imagem
    if (html.classList.contains('light')) {
        //se light mode, adiciona img light
        img.setAttribute('src', './assets/eu.jpg');
        img.style.setProperty('border', '2px solid #9d9d9d');
    }else{
        //sem light mode, manter imagem padrao
        img.setAttribute('src', './assets/eu.jpg');
        img.style.removeProperty('border');
    }
}
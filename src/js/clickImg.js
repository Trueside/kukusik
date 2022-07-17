function changeImg () {
    let myImg=document.getElementById('series');
    let imgSrc=myImg.getAttribute('src')
    if (imgSrc === 'src/img/series.jpg') {
        myImg.setAttribute('src', 'src/img/friends.png')
    } else {
        myImg.setAttribute('src', 'src/img/series.jpg') 
    }
}

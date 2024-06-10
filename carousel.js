//DISPLAY PAR CLICK DES IMGS DU SLIDE DANS CAROUSEL-PORTRAIT/PAYSAGE

  document.querySelectorAll('.image .portrait').forEach(image=>{
    image.onclick = () =>{
        document.querySelector('.carousel-portrait').style.display='block';
        document.querySelector('.carousel-paysage').style.display='none';
        document.querySelector('.carousel-portrait img').src= image.getAttribute('src');
    }  
    });

  document.querySelectorAll('.image .paysage').forEach(image=>{
    image.onclick = () =>{
        document.querySelector('.carousel-paysage').style.display='block';
        document.querySelector('.carousel-portrait').style.display='none';
        document.querySelector('.carousel-paysage img').src= image.getAttribute('src');
    }  
    });

  //SCROLL PAR FLECHE DANS CAROUSEL-SLIDE

    document.getElementById('backBtn').addEventListener('click', function() {
      document.querySelector('.carousel-slide').scrollBy({
          left: -150, // Ajustez cette valeur selon la distance souhaitée
          behavior: 'smooth'
      });
  });

  document.getElementById('nextBtn').addEventListener('click', function() {
      document.querySelector('.carousel-slide').scrollBy({
          left: 150, // Ajustez cette valeur selon la distance souhaitée
          behavior: 'smooth'
      });
  });


//DEF DE FONCTIONS DISPLAY PHOTOS PREV/NEXT PAR CLICK SUR FLECHES


var carousel_img = document.querySelector('.carousel-img');
var images = ['photos/3130x2075.JPG', 'photos/2075x3130-e.JPG', 'photos/3130x2075-a.JPG', 'photos/2048 x 3091.JPG', 'photos/2075 x 3130-c.JPG', 'photos/3130x2075-b.jpg', 'photos/2075x3130-b.JPG', 'photos/2075x3130-d.JPG', 'photos/3130x2075-c.jpg', 'photos/2075x3130-f.jpg', 'photos/2075x3130.JPG'];
var i=0;

function prev() {
  if(i<=0) i=images.length;
  i--;
  return setImg ();
}

function next() {
  if(i<=0) i=images.length;
  i--;
  return setImg ();
}

function setImg () {
  return carousel_img.setAttribute ('src', 'photos/' +images [i]);
}




  






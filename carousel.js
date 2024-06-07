
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
  
  




  





/* document.querySelectorAll('img.portrait').forEach(image=>{
  image.onclick = () =>{
      document.querySelector('.popup-portrait').style.display='block';
      document.querySelector('.popup-portrait img').src= image.getAttribute('src');
  }  
  });

document.querySelector('.popup-portrait span').onclick =() => {
  document.querySelector('.popup-portrait').style.display='none';
} */
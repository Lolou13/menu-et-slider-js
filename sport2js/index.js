
let navbar = document.querySelector(".nav")
let btn = document.querySelector(".burger")




btn.addEventListener( "click" , (e)=>{
    navbar.classList.toggle("active")




    if (navbar.classList.contains('active')) {
        btn.innerHTML= "&#x2715;"
        // sinon affiche les traits
      } else {
        btn.innerHTML="&#x2630;"
      }
      })




      let btnn = document.querySelectorAll('.bouton')
      let img = document.querySelectorAll('.slider ul li');

      
      for (let i = 0; i < btnn.length; i++) {
          let calc = 0;
          btnn[i].addEventListener('click', (e) => {
      
              const imgActive = document.querySelector('.active');
              const curentIndex = [...img].indexOf(imgActive);
      
              if (btnn[i].id == 'next') {
                  calc = 1;
              } else {
                  calc = -1;
              }
              let index = curentIndex + calc;

              if (curentIndex >= img.length -1 && btnn[i].id == 'next') {index= 0;}
              if(curentIndex == 0 && btnn[i].id == 'prev') {index = img.length - 1;}

          img [index].classList.add('active');
          imgActive.classList.remove ('active');
      
      
          })
      }   
document.addEventListener("DOMContentLoaded", () => {
    const imagenes = [
      /* Debes cambiar estas rutas por las de tus propias imágenes */
      "images/image1.jpeg",
      "images/image2.jpeg",
      "images/image3.jpeg",
      "images/image4.jpeg",
      "images/image5.jpg"
    ];
  
    let i = 1;
    const img1 = document.querySelector("#img1");
    const img2 = document.querySelector("#img2");
    const progressBar = document.querySelector(".progress-bar"); // Seleccionar el elemento por la clase correcta
    const divIndicadores = document.querySelector("#indicadores");
    let porcentaje_base = 100 / imagenes.length;
    let porcentaje_actual = porcentaje_base;
  
    for (let index = 0; index < imagenes.length; index++) {
      const div = document.createElement("div");
      div.classList.add("circles");
      div.id = index;
      divIndicadores.appendChild(div);
    }
  
    progressBar.style.width = `${porcentaje_base}%`;
    img1.src = imagenes[0];
    const circulos = document.querySelectorAll(".circles");
    circulos[0].classList.add("resaltado");
  
    const slideshow = () => {
      img2.src = imagenes[i];
      const circulo_actual = Array.from(circulos).find((el) => el.id == i);
      Array.from(circulos).forEach((cir) =>
        cir.classList.remove("resaltado")
      );
      circulo_actual.classList.add("resaltado");
  
      img2.classList.add("active");
      i++;
      porcentaje_actual += porcentaje_base;
      progressBar.style.width = `${porcentaje_actual}%`;
      if (i == imagenes.length) {
        i = 0;
        porcentaje_actual = porcentaje_base - porcentaje_base;
      }
  
      setTimeout(() => {
        img1.src = img2.src;
        img2.classList.remove("active");
      }, 1000);
    };
  
    setInterval(slideshow, 4000);
  });



  document.getElementById('submit-btn').addEventListener('click', function (event) {
    event.preventDefault(); 


    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var messageInput = document.getElementById('message');

    var name = nameInput.value.trim();
    if (name === '') {
        displayError('name', 'Ingrese su nombre');
        return;
    }


    var email = emailInput.value.trim();
    var emailRegex = /^\S+@\S+\.\S+$/;
    if (email === '' || !emailRegex.test(email)) {
        displayError('email', 'Ingrese un correo electrónico válido');
        return;
    }


    var message = messageInput.value.trim();
    if (message === '') {
        displayError('message', 'Escriba su recomendación');
        return;
    }


    displaySuccess(name, email, message);
});

function displayError(fieldId, errorMessage) {
    var errorDiv = document.getElementById(fieldId + '-error');
    errorDiv.textContent = errorMessage;
}

function displaySuccess(name, email, message) {
    var successDiv = document.createElement('div');
    successDiv.classList.add('success');

    var successMessage = document.createElement('p');
    successMessage.textContent = 'Datos enviados correctamente:';
    successDiv.appendChild(successMessage);

    var namePara = document.createElement('p');
    namePara.textContent = 'Nombre: ' + name;
    successDiv.appendChild(namePara);

    var emailPara = document.createElement('p');
    emailPara.textContent = 'Email: ' + email;
    successDiv.appendChild(emailPara);

    var messagePara = document.createElement('p');
    messagePara.textContent = 'Mensaje: ' + message;
    successDiv.appendChild(messagePara);

    var formContainer = document.querySelector('.contact');
    formContainer.innerHTML = '';
    formContainer.appendChild(successDiv);
}

  
const link = document.querySelector("a[href='#main']");

link.addEventListener("click", (event) => {
  event.preventDefault();

  const destino = document.querySelector("#main");
  const destinoTop = destino.offsetTop;

  window.scrollTo({
    top: destinoTop,
    behavior: "smooth",
  });
});

const copyEmailButton = document.getElementById("email");
const email = "rafaolive3003@gmail.com"; // Insira seu endereço de e-mail aqui
const copiedMessage = document.getElementById("texto-copia-email");

copyEmailButton.addEventListener("click", () => {
  // Crie um elemento de texto temporário para armazenar o conteúdo do email
  const tempTextArea = document.createElement("textarea");
  tempTextArea.value = email;

  // Adicione o elemento de texto temporário à página
  document.body.appendChild(tempTextArea);

  // Selecione o conteúdo do elemento de texto temporário
  tempTextArea.select();

  // Copie o conteúdo selecionado para a área de transferência
  document.execCommand("copy");

  // Remova o elemento de texto temporário da página
  document.body.removeChild(tempTextArea);

  // Exiba o balão de mensagem temporariamente
  copiedMessage.style.display = "block";
  setTimeout(() => {
    copiedMessage.style.display = "none";
  }, 1000);
});

const toggleButton = document.getElementById('toggle-btn');

toggleButton.addEventListener('click', () => {
    toggleButton.classList.toggle('checked');
});

function copyText() {
    const textToCopy = "rafaolive3003@gmail.com";
    navigator.clipboard.writeText(textToCopy).then(() => {
        alert("Copied!");
      });
}

const toggleBtn = document.getElementById("toggle-btn");

toggleBtn.addEventListener("click", function () {
  const projectLink = document.getElementById("project");
  const aboutTitle = document.getElementById("about-title");
  const contactTitle = document.getElementById("contact-title");
  const presentationTextBefore = document.getElementById("texto-main-before");
  const presentatioinAnd = document.getElementById("texto-main-and");
  const presentationTextAfter = document.getElementById("texto-main-after");
  const textPhoto = document.getElementById("subtitulo-foto");
  const project1 = document.getElementById("project1");
  const textProject1 = document.getElementById("textProject1");
  const project2 = document.getElementById("project2");
  const textProject2 = document.getElementById("textProject2");
  const project3 = document.getElementById("project3");
  const textProject3 = document.getElementById("textProject3");
  const project4 = document.getElementById("project4");
  const textProject4 = document.getElementById("textProject4");
  const msgEmail = document.getElementById("texto-copia-email");
  const vazio = document.getElementById("vazio");

  if (toggleBtn.classList.contains("checked")) {
    projectLink.textContent = "Projetos";
    aboutTitle.textContent = "Sobre Mim";
    contactTitle.textContent = "Começar";
    presentationTextBefore.textContent = "Sou um estudante de ciência da computação no Instituto Federal de Santa Catarina. Foca em me tornar um desenvolvedor fullstack. Minhas principais habilidades são:";
    presentatioinAnd.textContent = "e";
    presentationTextAfter.textContent = "Mas estudando para me tornar um grande programador. Sou muito interessado em tecnologia e procuro aprimorar minhas habilidades todo dia";
    textPhoto.textContent = "Esse sou eu!";
    project1.textContent = "Projeto do Bot do FIFA";
    textProject1.textContent = "Este projeto fiz com um amigo 'onde' desenvolvemos um sistema para ganhar moedas no jogo FIFA para PS4. Este projeto 'durou' 'cerca de' 7 meses. Criamos um script para fazer uma sequência repetível e quando há uma 'quebra' no fluxo o programa tem API's que 'interferiram' no fluxo e 'corrigiram as quebras'.";
    project2.textContent = "Plataforma de ensino de programação";
    textProject2.textContent = "Esse é um projeto de extensão da universidade que eu fui um desenvolvedor front-end. Construi todos os componentes css e as interatividades com o vue.";
    project3.textContent = "Alfa Tour"
    textProject3.textContent = "Este é o meu primeiro projeto se eu fizer na primeira fase do curso. É uma 'Plataforma' para incentivar o turismo em Lages. Neste projeto eu realmente aprendo como usar html e css."
    project4.textContent = "Lista de tarefas"
    textProject4.textContent = "Um projeto clássico de um desenvolvedor... Eu tenho um pouco de vergonha disso, mas eu os uso diariamente para organizar minha rotina e é meu primeiro projeto, então.."
    msgEmail.textContent = "Copiado!"

    vazio.textContent = "vazio";

  } else {
    projectLink.textContent = "Projects";
    aboutTitle.textContent = "About me";
    contactTitle.textContent = "Begin";
    presentationTextBefore.textContent = "I'm a student of computer cience on Instituto Federal de Santa Catarina. Focused on becoming a fullstack developer. My main skills is:";
    presentatioinAnd.textContent = "and";
    presentationTextAfter.textContent = "But studying to become a great programmer. I have so much interesse in tech and search upgrade my skills day by day.";
    textPhoto.textContent = "That's me!";
    project1.textContent = "FIFA Bot Project";
    textProject1.textContent = "This project i make with a friend 'onde' we evelopment a system for gain coins in FIFA game for PS4. This project 'durou' 'por cerca de' 7 months. We create a script for make a repetitible sequence and when have a 'quebra' in flow the programme have API's 'que interferiam' in flow and 'corrigiam as quebras'.";
    project2.textContent = "Programming teaching platform";
    textProject2.textContent = "This is a extension project of university which i went a front-end devolpment, building all css components and build interactivites with Vue.";
    project3.textContent = "Alfa Tour"
    textProject3.textContent = "This is my first projetct if i make in first phase of the course. Its a 'Plataforma' para incentivar o turismo em Lages. In this project i really learn how use html and css."
    project4.textContent = "To-do List"
    textProject4.textContent = "A classic project of an developer... I have some shame of this, but i use them daily for organize my routine and its my first projecot, so.."
    msgEmail.textContent = "Copied!"

    vazio.textContent = "oizav";

  }

  toggleBtn.classList.toggle("checked");
});


// get all the slideshow containers
const slideshows = document.querySelectorAll('.slideshow');

slideshows.forEach(slideshow => {
  // get all the images inside each slideshow
  const images = slideshow.querySelectorAll('img');

  // set the initial active image
  let currentImageIndex = 0;
  images[currentImageIndex].classList.add('active');

  // add event listener to the "prev" button
  const prevButton = slideshow.querySelector('.prev');
  prevButton.addEventListener('click', () => {
    // remove the current active class from the current image
    images[currentImageIndex].classList.remove('active');
    // set the new current image index
    currentImageIndex = (currentImageIndex === 0) ? images.length - 1 : currentImageIndex - 1;
    // add the active class to the new current image
    images[currentImageIndex].classList.add('active');
  });

  // add event listener to the "next" button
  const nextButton = slideshow.querySelector('.next');
  nextButton.addEventListener('click', () => {
    // remove the current active class from the current image
    images[currentImageIndex].classList.remove('active');
    // set the new current image index
    currentImageIndex = (currentImageIndex === images.length - 1) ? 0 : currentImageIndex + 1;
    // add the active class to the new current image
    images[currentImageIndex].classList.add('active');
  });
});

// PEGA O CLICK DO BOTAO 'VIEW FULL CV / Ver curriculo'
const metadeDireita1 = document.getElementById('metadeDireita1');
const metadeDireita2 = document.getElementById('metadeDireita2');

metadeDireita1.style.display = 'block';
metadeDireita2.style.display = 'none';

var troca = false;

const botaoCV = document.getElementById('botaoVerCV');
const fotoPrincipal = document.getElementById('fotoPrincipal');

botaoCV.addEventListener('click', function() {

  if (troca == false) {
    botaoCV.classList.remove('animacaoDeslocamentoSobe');
    botaoCV.classList.add('animacaoDeslocamentoDesce');
    fotoPrincipal.src = "images/foto-minha-estudando.jpeg";
    setTimeout(function() {
      metadeDireita1.style.display = 'none';
      metadeDireita2.style.display = 'block';
      botaoCV.textContent = "View resume";
      troca = !troca;
    }, 1100);
  }
  else {
    botaoCV.classList.remove('animacaoDeslocamentoDesce');
    botaoCV.classList.add('animacaoDeslocamentoSobe');
    fotoPrincipal.src = "images/foto-minha.jpeg";
    setTimeout(function() {
      metadeDireita1.style.display = 'block';
      metadeDireita2.style.display = 'none';
      botaoCV.textContent = "View full CV";
      troca = !troca;
    }, 1100);
  }

});

// MENU PARA VER AS OPÇÕES DO PROJETO DO FIFA
const comboBox = document.getElementById('comboBox');
const botaoDoCombo = document.getElementById('botaotextoOculto');
const textoBotaoOculto = document.getElementById('textoBotaoOculto');

comboBox.style.display = 'none';
botaoDoCombo.style.display = 'block';
textoBotaoOculto.style.display = 'block';

botaoDoCombo.addEventListener('click', function() {
  botaoDoCombo.style.display = 'none';
  comboBox.style.display = 'block';
  textoBotaoOculto.style.display = 'none';
});

// botoes do menu FIFA Project (funcionamento, rentabilidade, aprendizado, porque acabou)

const atualCombo = document.getElementById('textoCombo');
const botaoFuncionamento = document.getElementById('botaoFuncionamento');
const botaoRentabilidade = document.getElementById('botaoRentabilidade');
const botaoAprendizado = document.getElementById('botaoAprendizado');
const botaoPorqueAcabou = document.getElementById('botaoPorqueAcabou');

botaoFuncionamento.addEventListener('click', function() {
  textoBotaoOculto.textContent = "igual o rio busca o mar";
  atualCombo.textContent = "Funcionamento";
  
  botaoDoCombo.style.display = 'block';
  comboBox.style.display = 'none';
  textoBotaoOculto.style.display = 'block';
});

botaoRentabilidade.addEventListener('click', function() {
  textoBotaoOculto.textContent = "voce vem me procurar";
  atualCombo.textContent = "Rentabilidade";
  
  botaoDoCombo.style.display = 'block';
  comboBox.style.display = 'none';
  textoBotaoOculto.style.display = 'block';
});

botaoAprendizado.addEventListener('click', function() {
  textoBotaoOculto.textContent = "e eu entao eu te dou meu amor, como voce nao quis dar";
  atualCombo.textContent = "Aprendizado";
  
  botaoDoCombo.style.display = 'block';
  comboBox.style.display = 'none';
  textoBotaoOculto.style.display = 'block';
});

botaoPorqueAcabou.addEventListener('click', function() {
  textoBotaoOculto.textContent = "entao viaja no meu corpo sem medo de ser feliz";
  atualCombo.textContent = "Porque acabou?";
  
  botaoDoCombo.style.display = 'block';
  comboBox.style.display = 'none';
  textoBotaoOculto.style.display = 'block';
});

// menu para ver as opções do projeto de extensão
const comboBox2 = document.getElementById('comboBox2');
const botaoDoCombo2 = document.getElementById('botaotextoOculto2');
const textoBotaoOculto2 = document.getElementById('textoBotaoOculto2');

comboBox2.style.display = 'none';
botaoDoCombo2.style.display = 'block';
textoBotaoOculto2.style.display = 'block';

botaoDoCombo2.addEventListener('click', function() {
  comboBox2.style.display = 'block';
  botaoDoCombo2.style.display = 'none';
  textoBotaoOculto2.style.display = 'none';
});

// botoes do menu ProjetoDeExtensao
const atualCombo2 = document.getElementById('atualCombo2');
const botaoFuncionamento2 = document.getElementById('botaoFuncionamento2');
const botaoAprendizado2 = document.getElementById('botaoAprendizado2');

botaoFuncionamento2.addEventListener('click', function() {
  textoBotaoOculto2.textContent = "you are here";
  atualCombo2.textContent = "Funcionamento";

  botaoDoCombo2.style.display = 'block';
  comboBox2.style.display = 'none';
  textoBotaoOculto2.style.display = 'block';
});

botaoAprendizado2.addEventListener('click', function() {
  textoBotaoOculto2.textContent = "rock you like a hurican";
  atualCombo2.textContent = "Aprendizado";

  botaoDoCombo2.style.display = 'block';
  comboBox2.style.display = 'none';
  textoBotaoOculto2.style.display = 'block';
});

// menu para ver as opções do Angel Modas
const comboBox3 = document.getElementById('comboBox3');
const botaoDoCombo3 = document.getElementById('botaotextoOculto3');
const textoBotaoOculto3 = document.getElementById('textoBotaoOculto3');

comboBox3.style.display = 'none';
botaoDoCombo3.style.display = 'block';
textoBotaoOculto3.style.display = 'block';

botaoDoCombo3.addEventListener('click', function() {
  comboBox3.style.display = 'block';
  botaoDoCombo3.style.display = 'none';
  textoBotaoOculto3.style.display = 'none';
});

// botoes do menu AngelModas
const atualCombo3 = document.getElementById('atualCombo3');
const botaoFuncionamento3 = document.getElementById('botaoFuncionamento3');
const botaoAprendizado3 = document.getElementById('botaoAprendizado3');

botaoFuncionamento3.addEventListener('click', function() {
  textoBotaoOculto3.textContent = "eu te daria um lugar no meu peito pra morar";
  atualCombo3.textContent = "Funcionamento";

  botaoDoCombo3.style.display = 'block';
  comboBox3.style.display = 'none';
  textoBotaoOculto3.style.display = 'block';
});

botaoAprendizado3.addEventListener('click', function() {
  textoBotaoOculto3.textContent = "pra ser a dona e pra dominar esse cara cheio de paixaaaaaaao";
  atualCombo3.textContent = "Aprendizado";

  botaoDoCombo3.style.display = 'block';
  comboBox3.style.display = 'none';
  textoBotaoOculto3.style.display = 'block';
});

// menu para ver opções do projeto de redes
const comboBox4 = document.getElementById('comboBox4');
const botaoDoCombo4 = document.getElementById('botaotextoOculto4');
const textoBotaoOculto4 = document.getElementById('textoBotaoOculto4');

comboBox4.style.display = 'none';
botaoDoCombo4.style.display = 'block';
textoBotaoOculto4.style.display = 'block';

botaoDoCombo4.addEventListener('click', function() {
  comboBox4.style.display = 'block';
  botaoDoCombo4.style.display = 'none';
  textoBotaoOculto4.style.display = 'none';
});

// botoes do menu AngelModas
const atualCombo4 = document.getElementById('atualCombo4');
const botaoFuncionamento4 = document.getElementById('botaoFuncionamento4');
const botaoAprendizado4 = document.getElementById('botaoAprendizado4');

botaoFuncionamento4.addEventListener('click', function() {
  textoBotaoOculto4.textContent = "sitio do pica pau amarelo";
  atualCombo4.textContent = "Funcionamento";

  botaoDoCombo4.style.display = 'block';
  comboBox4.style.display = 'none';
  textoBotaoOculto4.style.display = 'block';
});

botaoAprendizado4.addEventListener('click', function() {
  textoBotaoOculto4.textContent = "tonigth, nini in the darkness tonight, tutututututu";
  atualCombo4.textContent = "Aprendizado";

  botaoDoCombo4.style.display = 'block';
  comboBox4.style.display = 'none';
  textoBotaoOculto4.style.display = 'block';
});

// ir para secção interna

function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

// codigo do carrosel implementado no primeiro projeto

document.addEventListener("DOMContentLoaded", function(event) {
  const carousel = document.querySelector('.carousel');
  const imagesContainer = document.querySelector('.carousel-images');
  const images = document.querySelectorAll('.carousel-images img');
  const prevButton = document.querySelector('.prev-button');
  const nextButton = document.querySelector('.next-button');
  const dots = document.querySelectorAll('.dot');

  let currentIndex = 0;

  function showImage(index) {
    imagesContainer.style.transform = `translateX(-${index * 800}px)`;
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
    updateActiveDot();
  }

  function previousImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
    updateActiveDot();
  }

  function goToImage(index) {
    currentIndex = index;
    showImage(currentIndex);
    updateActiveDot();
  }

  function updateActiveDot() {
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentIndex);
    });
  }

  carousel.addEventListener('mouseenter', () => {
    carousel.classList.add('hover');
  });

  carousel.addEventListener('mouseleave', () => {
    carousel.classList.remove('hover');
  });

  prevButton.addEventListener('click', previousImage);
  nextButton.addEventListener('click', nextImage);

  dots.forEach((dot, index) => {
dot.addEventListener('click', () => {
goToImage(index);
});
});

showImage(currentIndex);
updateActiveDot();
});

// faz o carosel dos 4 projetos

document.addEventListener("DOMContentLoaded", function(event) {
  const carousel2 = document.querySelector('.carousel2');
  const divContainer = document.querySelector('.carousel-divs');
  const div = document.querySelectorAll('.carousel-divs > div');
  const prevButton2 = document.querySelector('.prev-button2');
  const nextButton2 = document.querySelector('.next-button2');

  let currentIndex2 = 0;

  function showImage2(index) {
    divContainer.style.transform = `translateY(-${index * 600}px)`;
  }

  function nextImage2() {
    currentIndex2 = (currentIndex2 + 1) % div.length;
    showImage2(currentIndex2);
  }

  function previousImage2() {
    currentIndex2 = (currentIndex2 - 1 + div.length) % div.length;
    showImage2(currentIndex2);
  }

  /*function goToImage2(index) {
    currentIndex2 = index;
    showImage2(currentIndex2);
  }*/

  carousel2.addEventListener('mouseenter', () => {
    carousel2.classList.add('hover');
  });

  carousel2.addEventListener('mouseleave', () => {
    carousel2.classList.remove('hover');
  });

  prevButton2.addEventListener('click', previousImage2);
  nextButton2.addEventListener('click', nextImage2);

  showImage2(currentIndex2);
});
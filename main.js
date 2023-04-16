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

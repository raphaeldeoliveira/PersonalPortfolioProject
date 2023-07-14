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

/* quando clica no botao 'contact' */

const link2 = document.querySelector("a[href='#email']");

link2.addEventListener("click", (event) => {
  event.preventDefault();

  // scrolla para a secção
  const destino2 = document.querySelector("#email");
  const destinoTop2 = destino2.offsetTop;

  window.scrollTo({
    top: destinoTop2,
    behavior: "smooth",
  });

  // faz a animação de cores
  var botaoEmail = document.getElementById('email');
  var botaoLinkedin = document.getElementById('linkedin');
  var botaoZap = document.getElementById('whatsapp');
  var botaoGithub = document.getElementById('github');

  let somador = 0;
  for (let i=0;i<3;i++) {
    setTimeout(function() {
      botaoEmail.style.backgroundColor = 'hsla(120, 100%, 25%)';
    }, (somador + 700));

    setTimeout(function() {
      botaoEmail.style.backgroundColor = '';
    }, (somador + 1000));

    setTimeout(function() {
      botaoLinkedin.style.backgroundColor = 'hsla(120, 100%, 25%)';
    }, (somador + 800));

    setTimeout(function() {
      botaoLinkedin.style.backgroundColor = '';
    }, (somador + 1100));

    setTimeout(function() {
      botaoZap.style.backgroundColor = 'hsla(120, 100%, 25%)';
    }, (somador + 900));

    setTimeout(function() {
      botaoZap.style.backgroundColor = '';
    }, (somador + 1200));

    setTimeout(function() {
      botaoGithub.style.backgroundColor = 'hsla(120, 100%, 25%)';
    }, (somador + 1000));

    setTimeout(function() {
      botaoGithub.style.backgroundColor = '';
    }, (somador + 1300));
    
    somador = somador + 700;
  }
});

const copyEmailButton = document.getElementById("email");
const email = "rafaolive3003@gmail.com";
const copiedMessage = document.getElementById("texto-copia-email");

copyEmailButton.addEventListener("click", () => {
  
  const tempTextArea = document.createElement("textarea");
  tempTextArea.value = email;

  document.body.appendChild(tempTextArea);

  tempTextArea.select();

  document.execCommand("copy");

  document.body.removeChild(tempTextArea);

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

// BOTÃO MUDANÇA DE IDIOMA

const textPhoto = document.getElementById("subtitulo-foto");
const toggleBtn = document.getElementById("toggle-btn");

toggleBtn.addEventListener("click", function () {
  const projectLink = document.getElementById("project");
  const contactLink = document.getElementById("contact");

  const presentationTextBefore = document.getElementById("texto-main-before");
  const presentatioinAnd = document.getElementById("texto-main-and");
  const presentationWith = document.getElementById("with");
  const presentationTextAfter = document.getElementById("texto-main-after");

  const cvTxt1 = document.getElementById('cvTxt1');
  const cvTxt2 = document.getElementById('cvTxt2');
  const cvTxt3 = document.getElementById('cvTxt3');
  const cvTxt4 = document.getElementById('cvTxt4');
  const cvTxt5 = document.getElementById('cvTxt5');
  const cvTxt6 = document.getElementById('cvTxt6');
  const cvTxt7 = document.getElementById('cvTxt7');
  const cvTxt8 = document.getElementById('cvTxt8');
  const cvTxt9 = document.getElementById('cvTxt9');
  const cvTxt10 = document.getElementById('cvTxt10');
  const cvTxt11 = document.getElementById('cvTxt11');
  const cvTxt12 = document.getElementById('cvTxt12');
  const cvTxt13 = document.getElementById('cvTxt13');
  const cvTxt14 = document.getElementById('cvTxt14');
  const cvTxt15 = document.getElementById('cvTxt15');
  const cvTxt16 = document.getElementById('cvTxt16');

  const project1 = document.getElementById("project1");
  const textProject1 = document.getElementById("textProject1");
  const project2 = document.getElementById("project2");
  const textProject2 = document.getElementById("textProject2");
  const textProject3 = document.getElementById("textProject3");
  const project4 = document.getElementById("project4");
  const textProject4 = document.getElementById("textProject4");

  const subtitulo = document.getElementById('subtitulo');
  //const atualCombo = document.getElementById('atualCombo');
  const textoCardLateral = document.getElementById('textoBotaoOculto');
  const subtitulo2 = document.getElementById('subtitulo2');
  const textoCardLateral2 = document.getElementById('textoBotaoOculto2');
  const subtitulo3 = document.getElementById('subtitulo3');
  const textoCardLateral3 = document.getElementById('textoBotaoOculto3');

  const msgEmail = document.getElementById("texto-copia-email");
  const vazio = document.getElementById("vazio");

  if (toggleBtn.classList.contains("checked")) {
    projectLink.textContent = "Projetos";
    contactLink.textContent = "Contato";

    presentationTextBefore.textContent = "Sou um estudante de ciência da computação no Instituto Federal de Santa Catarina. Focado em me tornar um desenvolvedor fullstack. Minhas principais habilidades são: Html, Css, ";
    presentatioinAnd.textContent = "e";
    presentationWith.textContent = "com";
    presentationTextAfter.textContent = "Mas estudando para me tornar um grande programador. " + "\u00A0".repeat(62);

    textPhoto.textContent = "Esse sou eu!";

    if (botaoCV.textContent == "View full CV") {
      botaoCV.textContent = "Ver Curículo";
    }
    else {
      botaoCV.textContent = "Ver Resumo";
    }

    cvTxt1.textContent = "Brasileiro, solteiro, 22 anos, Lages SC";
    cvTxt2.textContent = "EDUCAÇÃO";
    cvTxt3.textContent = "Bacharelado em ciência da computação";
    cvTxt4.textContent = "2022 - atual";
    cvTxt5.textContent = "Atualmente estou no 3° período. Estou focando em aprimorar minhas habilidades em programação front-end e back-end. Para as próximas fases pretendo me concentrar em redes neurais e ciência de dados.";
    cvTxt6.textContent = "EXPERIÊNCIA";
    cvTxt7.textContent = "No momento, ainda não tenho experiência profissional como desenvolvedor. Porém tenho alguns projetos pessoais que podem ser acessados no meu site ou github.";
    cvTxt8.textContent = "PROJETO DE EXTENSÃO, IFSC";
    cvTxt9.textContent = "Desenvolvedor Front-end";
    cvTxt10.textContent = "1 jul - 30 dez, 2022";
    cvTxt11.textContent = "Desenvolvi todos os componentes visuais do site incluindo estudo de design, fontes e cores. Além de desenvolver toda a parte de interação com o usuário usando Vue.js.";
    cvTxt12.textContent = "INFORMAÇÕES ADICIONAIS";
    cvTxt13.textContent = "Habilidades: ";
    cvTxt14.textContent = "Conhecimento médio Javascript, Vue.js e Java; Já dominando orientação a objetos e criação de sistemas com interface gráfica.";
    cvTxt15.textContent = "Idiomas: ";
    cvTxt16.textContent = "Português fluente e inglês intermediário.";

    project1.textContent = "Projeto do Bot do FIFA";
    textProject1.textContent = "Este projeto está dividido em três subprojetos: a criação do site de vendas, o desenvolvimento de um produto (uma extensão para navegador) e a implementação de uma API REST em Docker para a criação de usuários no site. ";
    project2.textContent = "Plataforma de ensino de programação";
    textProject2.textContent = "Esse é um projeto de extensão da universidade que eu fui um desenvolvedor front-end. Construi todos os componentes css e as interatividades com o vue.";
    textProject3.textContent = "Este é um projeto de sistema de gerenciamento de estoque criado para a loja da minha namorada. A ideia é ter controle sobre os produtos vendidos, acompanhar os lucros, entre outros aspectos. Além disso foi utilizado como trabalho final na disciplina de desenvolvimento de aplicações orientadas a objetos.";
    textProject4.textContent = "Isso é para comprovar meu conhecimento em lógica de programação. Todos os problemas são resolvidos utilizando a linguagem Java.";

    switch (tituloProjetos.textContent) {
      case 'Programming teaching platform':
        tituloProjetos.textContent = "Plataforma de ensino de programação";
        subtitulo2.textContent = "Um projeto de extensão desenvolvido para auxiliar iniciantes na programação, oferecendo exercícios e soluções em três linguagens: Java, JavaScript e Python. Além de mim mais 15 estudantes auxiliaram no desenvolvimento.";
        break;
      case 'FIFA Bot Project':
        tituloProjetos.textContent = "Projeto Bot FIFA";
        subtitulo.textContent = "Este é meu projeto mais robusto. Criei um produto: uma extensão capaz de ganhar moedas no FIFA. Além da ferramente foi desenvolvido um site que é um sistema completo com back e front integrados a um banco de dados.";
        break;
    }

    switch (atualCombo.textContent) {
      case 'Functionality':
        atualCombo.textContent = "Funcionamento";
        textoBotaoOculto.textContent = "O software será uma extensão de navegador escrito em Javascript. O usuario precisará de um login e senha para abrir o programa, o qual é mantido ou não mediante o pagamento da mensalidade. A API Rest do site foi escrita em Java com Springboot. Já o front do site foi escrito em Vue. Para o banco de dados, utilizei o MySQL em um container Docker.";
        break;
      case 'Profitability':
        atualCombo.textContent = "Rentabilidade";
        textoBotaoOculto.textContent = "As fontes de renda do sistema serão por meio de vendas de assinaturas do sistema e venda de moedas do jogo (que serão conquistadas através do proprio software). ";
        break;
      case 'Apprenticeship':
        atualCombo.textContent = "Aprendizado";
        textoBotaoOculto.textContent = "A principal lição que tirei desse projeto foi a importância de criar um produto robusto e escalável, capaz de atender às necessidades dos usuários de forma eficiente. Com o software aprendi JS, bem como a compreensão dos princípios de segurança e autenticação para implementar o sistema de login e senha. Além disso, a integração do back-end e do front-end do site me permitiu explorar diferentes tecnologias e frameworks, como Java com Spring Boot para a API Rest e Vue para o front-end. A configuração do banco de dados com MySQL e Docker me proporcionou conhecimentos sobre o armazenamento e gerenciamento eficiente dos dados do sistema.";
        break;
    }
    botaoFuncionamento.textContent = "Funcionamento";
    botaoRentabilidade.textContent = "Rentabilidade";
    botaoAprendizado.textContent = "Aprendizado";

    switch (atualCombo2.textContent) {
      case 'Functionality':
        atualCombo2.textContent = "Funcionamento";
        textoBotaoOculto2.textContent = "O projeto consiste em um site abrangente com 500 exercícios de programação, categorizados em níveis de dificuldade: fácil, médio e difícil. Todos os exercícios foram resolvidos por alunos do projeto. Os tópicos abordados incluem expressões, seleção, repetição, vetores, strings, matrizes e funções.";
        break;
      case 'Apprenticeship':
        atualCombo2.textContent = "Aprendizado";
        textoBotaoOculto2.textContent = "Durante o desenvolvimento desse projeto, adquiri habilidades em várias áreas. Aprendi a utilizar media queries para tornar o site totalmente responsivo, a trabalhar com Vue.js para criar interações mais complexas, e aprimorei minhas habilidades na criação de componentes estilizados em CSS. Além disso, expandi meu conhecimento sobre design, explorando conceitos como harmonia de cores, escolha de fontes, entre outros.";
        break;
    }
    botaoFuncionamento2.textContent = "Funcionamento";
    botaoAprendizado2.textContent = "Aprendizado";

    switch (atualCombo3.textContent) {
      case 'Functionality':
        atualCombo3.textContent = "Funcionamento";
        textoBotaoOculto3.textContent = "O sistema possui um menu principal com opções de investimento, faturamento e lucro (real e esperado). Esses dados são inseridos através da entrada dos produtos adquiridos para revenda. Os produtos podem ser vendidos, devolvidos e extraviados, alternando entre as listas de produtos disponíveis e vendidos. Além disso, o sistema possui barras de busca e filtros para facilitar a localização de produtos em ambas as listas.";
        break;
      case 'Apprenticeship':
        atualCombo3.textContent = "Aprendizado";
        textoBotaoOculto3.textContent = "Com esse projeto, adquiri um bom conhecimento em orientação a objetos, aprendi a utilizar o padrão de arquitetura MVC (Model-View-Controller) e também a criar interfaces de usuário usando o Swing (Java).";
        break;
    }
    botaoFuncionamento3.textContent = "Funcionamento";
    botaoAprendizado3.textContent = "Aprendizado";

    subtitulo.textContent = "Este é meu projeto mais robusto. Criei um produto: uma extensão capaz de ganhar moedas no FIFA. Além da ferramente foi desenvolvido um site que é um sistema completo com back e front integrados a um banco de dados.";

    subtitulo2.textContent = "Um projeto de extensão desenvolvido para auxiliar iniciantes na programação, oferecendo exercícios e soluções em três linguagens: Java, JavaScript e Python. Além de mim mais 15 estudantes auxiliaram no desenvolvimento.";

    subtitulo3.textContent = "Um projeto para auxiliar na gestão de vendas e controle financeiro de uma loja de venda de roupas, mantendo o controle do investimento, faturamento, lucro e perspectivas. O design foi feito especialmente para minha namorada.";

    msgEmail.textContent = "Copiado!";

    vazio.textContent = "vazio";

  } else {

    projectLink.textContent = "Projects";
    contactLink.textContent = "Contact";

    presentationTextBefore.textContent = "I'm a student of computer cience on Instituto Federal de Santa Catarina. Focused on becoming a fullstack developer. My main skills is: Html, Css, ";
    presentatioinAnd.textContent = "and";
    presentationWith.textContent = "with";
    presentationTextAfter.textContent = "But studying to become a great programmer. I have so much interesse in tech and search upgrade my skills day by day.";
    textPhoto.textContent = "That's me!";

    if (botaoCV.textContent == "Ver Resumo") {
      botaoCV.textContent = "View resume";
    }
    else {
      botaoCV.textContent = "View full CV";
    }

    cvTxt1.textContent = "Brazilian, single, 22 years old, Lages SC";
    cvTxt2.textContent = "EDUCATION";
    cvTxt3.textContent = "Bachelor's Degree in Computer Science";
    cvTxt4.textContent = "2022 - present";
    cvTxt5.textContent = "Currently in the 3rd semester. Focused on enhancing my skills in front-end and back-end programming. Planning to specialize in neural networks and data science in the upcoming phases.";
    cvTxt6.textContent = "EXPERIENCE";
    cvTxt7.textContent = "Currently, I do not have professional experience as a developer. However, I have worked on several personal projects that can be accessed on my website or GitHub.";
    cvTxt8.textContent = "EXTENSION PROJECT, IFSC";
    cvTxt9.textContent = "Front-end Developer";
    cvTxt10.textContent = "Jul 1 - Dec 30, 2022";
    cvTxt11.textContent = "Developed all visual components of the website, including design exploration, typography, and color schemes. Implemented user interaction using Vue.js.";
    cvTxt12.textContent = "ADDITIONAL INFORMATION";
    cvTxt13.textContent = "Skills: ";
    cvTxt14.textContent = "Proficient in JavaScript, Vue.js, and Java; Proficient in object-oriented programming and developing systems with graphical interfaces.";
    cvTxt15.textContent = "Languages: ";
    cvTxt16.textContent = "Fluent in Portuguese and intermediate English.";
    
    project1.textContent = "FIFA Bot Project";
    textProject1.textContent = "This project is divided into three subprojects: the creation of the sales website, the development of a product (a browser extension), and the implementation of a REST API in Docker for user creation on the website.";
    project2.textContent = "Programming teaching platform";
    textProject2.textContent = "This is a extension project of university which i went a front-end devolpment, building all css components and build interactivites with Vue.";
    textProject3.textContent = "This is a stock management system project created for my girlfriend's store. The idea is to have control over the products sold, track profits, among other aspects. Additionally, it was used as the final assignment for the object-oriented application development course."
    project4.textContent = "My leetcode profile";
    textProject4.textContent = "This is to demonstrate my knowledge of programming logic. All the problems are solved using the Java language.";

    switch (atualCombo.textContent) {
      case 'Funcionamento':
        atualCombo.textContent = "Functionality";
        textoBotaoOculto.textContent = "The software will be a browser extension written in Javascript. The user will need a login and password to access the program, which may or may not be maintained depending on the payment of the monthly fee. The website's REST API was written in Java with Spring Boot. As for the website's front-end, it was written in Vue. For the database, I used MySQL in a Docker container.";
        break;
      case 'Rentabilidade':
        atualCombo.textContent = "Profitability";
        textoBotaoOculto.textContent = "The sources of income for the system will be through sales of system subscriptions and the sale of in-game currency (which will be earned through the software itself).";
        break;
      case 'Aprendizado':
        atualCombo.textContent = "Apprenticeship";
        textoBotaoOculto.textContent = "The main lesson I learned from this project was the importance of creating a robust and scalable product that can efficiently meet the needs of users. Through the software, I learned JS and gained an understanding of security principles and authentication to implement the login and password system. Furthermore, integrating the back-end and front-end of the website allowed me to explore different technologies and frameworks, such as Java with Spring Boot for the REST API and Vue for the front-end. Configuring the database with MySQL and Docker provided me with knowledge of storing and efficiently managing system data.";
        break;
    }
    botaoFuncionamento.textContent = "Functionality";
    botaoRentabilidade.textContent = "Profitability";
    botaoAprendizado.textContent = "Apprenticeship";

    switch (atualCombo2.textContent) {
      case 'Funcionamento':
        atualCombo2.textContent = "Functionality";
        textoBotaoOculto2.textContent = "The project features 500 programming exercises divided into easy, medium, and difficult levels. All exercises have been solved by students participating in the project. The exercise topics cover expressions, selection, loops, arrays, strings, matrices, and functions.";
        break;
      case 'Aprendizado':
        atualCombo2.textContent = "Apprenticeship";
        textoBotaoOculto2.textContent = "Through this project, I have learned how to utilize media queries and make the website fully responsive. Additionally, I have gained knowledge in working with Vue.js and creating more advanced interactions. My ability to create stylish components (CSS) and understanding of design principles such as color harmony and font selection have also significantly improved.";
        break;
    }
    botaoFuncionamento2.textContent = "Functionality";
    botaoAprendizado2.textContent = "Apprenticeship";

    switch (atualCombo3.textContent) {
      case 'Funcionamento':
        atualCombo3.textContent = "Functionality";
        textoBotaoOculto3.textContent = "The system features a main menu with options for investment, revenue, and profit (actual and expected). These data are entered through the input of products purchased for resale. Products can be sold, returned, or lost, and they are organized in separate lists for available and sold items. The system also includes search bars and filters to easily find products in both lists.";
        break;
      case 'Aprendizado':
        atualCombo3.textContent = "Apprenticeship";
        textoBotaoOculto3.textContent = "Through this project, I gained a solid understanding of object-oriented programming and learned to implement the MVC (Model-View-Controller) design pattern. Additionally, I acquired skills in creating user interfaces using the Swing framework (Java).";
        break;
    }
    botaoFuncionamento3.textContent = "Functionality";
    botaoAprendizado3.textContent = "Apprenticeship";

    subtitulo.textContent = "This is my most robust project. I created a product: an extension capable of earning coins in FIFA. In addition to the tool, a website was developed, which is a complete system with integrated back-end and front-end connected to a database.";

    subtitulo2.textContent = "A extension project was developed to assist beginners in programming by providing exercises and solutions in three languages: Java, JavaScript, and Python. In addition to myself, 15 other students contributed to the development.";

    subtitulo3.textContent = "A project to assist in sales management and financial control for a clothing store, keeping track of investment, revenue, profit, and projections. The design was specifically tailored for my girlfriend.";

    msgEmail.textContent = "Copied!";

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
      if (botaoCV.textContent == "View full CV") {
        botaoCV.textContent = "View resume";
      }
      else {
        botaoCV.textContent = "Ver Resumo";
      }
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
      if (botaoCV.textContent == "View resume") {
        botaoCV.textContent = "View full CV";
      }
      else {
        botaoCV.textContent = "Ver Currículo";
      }
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

botaoFuncionamento.addEventListener('click', function() {
  
  if (textPhoto.textContent == "Esse sou eu!") {
    textoBotaoOculto.textContent = "O software será uma extensão de navegador escrito em Javascript. O usuario precisará de um login e senha para abrir o programa, o qual é mantido ou não mediante o pagamento da mensalidade. A API Rest do site foi escrita em Java com Springboot. Já o front do site foi escrito em Vue. Para o banco de dados, utilizei o MySQL em um container Docker.";
    atualCombo.textContent = "Funcionamento";
  }
  else {
    textoBotaoOculto.textContent = "The software will be a browser extension written in Javascript. The user will need a login and password to access the program, which may or may not be maintained depending on the payment of the monthly fee. The website's REST API was written in Java with Spring Boot. As for the website's front-end, it was written in Vue. For the database, I used MySQL in a Docker container.";
    atualCombo.textContent = "Functionality";
  }
  
  botaoDoCombo.style.display = 'block';
  comboBox.style.display = 'none';
  textoBotaoOculto.style.display = 'block';
});

botaoRentabilidade.addEventListener('click', function() {
  
  if (textPhoto.textContent == "Esse sou eu!") {
    textoBotaoOculto.textContent = "As fontes de renda do sistema serão por meio de vendas de assinaturas do sistema e venda de moedas do jogo (que serão conquistadas através do proprio software). ";
    atualCombo.textContent = "Rentabilidade";
  }
  else {
    textoBotaoOculto.textContent = "The sources of income for the system will be through sales of system subscriptions and the sale of in-game currency (which will be earned through the software itself).";
    atualCombo.textContent = "Profitability";
  }
  
  botaoDoCombo.style.display = 'block';
  comboBox.style.display = 'none';
  textoBotaoOculto.style.display = 'block';
});

botaoAprendizado.addEventListener('click', function() {
  
  if (textPhoto.textContent == "Esse sou eu!") {
    textoBotaoOculto.textContent = "A principal lição que tirei desse projeto foi a importância de criar um produto robusto e escalável, capaz de atender às necessidades dos usuários de forma eficiente. Com o software aprendi JS, bem como a compreensão dos princípios de segurança e autenticação para implementar o sistema de login e senha. Além disso, a integração do back-end e do front-end do site me permitiu explorar diferentes tecnologias e frameworks, como Java com Spring Boot para a API Rest e Vue para o front-end. A configuração do banco de dados com MySQL e Docker me proporcionou conhecimentos sobre o armazenamento e gerenciamento eficiente dos dados do sistema.";
    atualCombo.textContent = "Aprendizado";
  }
  else {
    textoBotaoOculto.textContent = "The main lesson I learned from this project was the importance of creating a robust and scalable product that can efficiently meet the needs of users. Through the software, I learned JS and gained an understanding of security principles and authentication to implement the login and password system. Furthermore, integrating the back-end and front-end of the website allowed me to explore different technologies and frameworks, such as Java with Spring Boot for the REST API and Vue for the front-end. Configuring the database with MySQL and Docker provided me with knowledge of storing and efficiently managing system data.";
    atualCombo.textContent = "Apprenticeship";
  }
  
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
  
  if (textPhoto.textContent == "Esse sou eu!") {
    textoBotaoOculto2.textContent = "O projeto consiste em um site abrangente com 500 exercícios de programação, categorizados em níveis de dificuldade: fácil, médio e difícil. Todos os exercícios foram resolvidos por alunos do projeto. Os tópicos abordados incluem expressões, seleção, repetição, vetores, strings, matrizes e funções.";
    atualCombo2.textContent = "Funcionamento";
  }
  else {
    textoBotaoOculto2.textContent = "The project features 500 programming exercises divided into easy, medium, and difficult levels. All exercises have been solved by students participating in the project. The exercise topics cover expressions, selection, loops, arrays, strings, matrices, and functions.";
    atualCombo2.textContent = "Functionality";
  }

  botaoDoCombo2.style.display = 'block';
  comboBox2.style.display = 'none';
  textoBotaoOculto2.style.display = 'block';
});

botaoAprendizado2.addEventListener('click', function() {
  
  if (textPhoto.textContent == "Esse sou eu!") {
    textoBotaoOculto2.textContent = "Durante o desenvolvimento desse projeto, adquiri habilidades em várias áreas. Aprendi a utilizar media queries para tornar o site totalmente responsivo, a trabalhar com Vue.js para criar interações mais complexas, e aprimorei minhas habilidades na criação de componentes estilizados em CSS. Além disso, expandi meu conhecimento sobre design, explorando conceitos como harmonia de cores, escolha de fontes, entre outros.";
    atualCombo2.textContent = "Aprendizado";
  }
  else {
    textoBotaoOculto2.textContent = "Through this project, I have learned how to utilize media queries and make the website fully responsive. Additionally, I have gained knowledge in working with Vue.js and creating more advanced interactions. My ability to create stylish components (CSS) and understanding of design principles such as color harmony and font selection have also significantly improved.";
    atualCombo2.textContent = "Apprenticeship";
  }

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
  
  if (textPhoto.textContent == "Esse sou eu!") {
    textoBotaoOculto3.textContent = "O sistema possui um menu principal com opções de investimento, faturamento e lucro (real e esperado). Esses dados são inseridos através da entrada dos produtos adquiridos para revenda. Os produtos podem ser vendidos, devolvidos e extraviados, alternando entre as listas de produtos disponíveis e vendidos. Além disso, o sistema possui barras de busca e filtros para facilitar a localização de produtos em ambas as listas.";
    atualCombo3.textContent = "Funcionamento";
  }
  else {
    textoBotaoOculto3.textContent = "The system features a main menu with options for investment, revenue, and profit (actual and expected). These data are entered through the input of products purchased for resale. Products can be sold, returned, or lost, and they are organized in separate lists for available and sold items. The system also includes search bars and filters to easily find products in both lists.";
    atualCombo3.textContent = "Functionality";
  }

  botaoDoCombo3.style.display = 'block';
  comboBox3.style.display = 'none';
  textoBotaoOculto3.style.display = 'block';
});

botaoAprendizado3.addEventListener('click', function() {
  
  if (textPhoto.textContent == "Esse sou eu!") {
    textoBotaoOculto3.textContent = "Com esse projeto, adquiri um bom conhecimento em orientação a objetos, aprendi a utilizar o padrão de arquitetura MVC (Model-View-Controller) e também a criar interfaces de usuário usando o Swing (Java).";
    atualCombo3.textContent = "Aprendizado";
  }
  else {
    textoBotaoOculto3.textContent = "Through this project, I gained a solid understanding of object-oriented programming and learned to implement the MVC (Model-View-Controller) design pattern. Additionally, I acquired skills in creating user interfaces using the Swing framework (Java).";
    atualCombo3.textContent = "Apprenticeship";
  }

  botaoDoCombo3.style.display = 'block';
  comboBox3.style.display = 'none';
  textoBotaoOculto3.style.display = 'block';
});

// codigo do carrosel implementado no primeiro projeto

function verificarTamanhoProjeto() {
  tamanhoJanelaAtual = window.innerWidth;
  
  if (tamanhoJanelaAtual > 1100) {
    return 559;
  } else if (tamanhoJanelaAtual <= 1100 && tamanhoJanelaAtual > 1020) {
    return 453.68;
  } else if (tamanhoJanelaAtual <= 940 && tamanhoJanelaAtual > 860) {
    return 379.4;
  } else if (tamanhoJanelaAtual <= 780 && tamanhoJanelaAtual > 700) {
    return 305.1;
  } 
  // max-width: 384px -> celular, tem que fazer o restante
  else {
    return 609;
  }
}

var tamanhoJanelaAtual;

function verificarTamanhoRotacaoImagem() {
  tamanhoJanelaAtual = window.innerWidth;

  if (tamanhoJanelaAtual > 1240) {
    return 790;
  } else if (tamanhoJanelaAtual <= 1240 && tamanhoJanelaAtual > 1180) {
    return 765;
  } else if (tamanhoJanelaAtual <= 1180 && tamanhoJanelaAtual > 1100) {
    return 715;
  } else if (tamanhoJanelaAtual <= 1100 && tamanhoJanelaAtual > 1020) {
    return 665;
  } else if (tamanhoJanelaAtual <= 1020 && tamanhoJanelaAtual > 940) {
    return 615;
  } else if (tamanhoJanelaAtual <= 940 && tamanhoJanelaAtual > 860) {
    return 565;
  } else if (tamanhoJanelaAtual <= 860 && tamanhoJanelaAtual > 780) {
    return 515;
  } else if (tamanhoJanelaAtual <= 780 && tamanhoJanelaAtual > 700) {
    return 465;
  } else if (tamanhoJanelaAtual <= 700 && tamanhoJanelaAtual > 620) {
    return 415;
  } else if (tamanhoJanelaAtual <= 620) {
    //return 365;
    return 346;
  }
}


document.addEventListener("DOMContentLoaded", function(event) {
  const carousel = document.querySelector('.carousel');
  const imagesContainer = document.querySelector('.carousel-images');
  const images = document.querySelectorAll('.carousel-images img');
  const prevButton = document.querySelector('.prev-button');
  const nextButton = document.querySelector('.next-button');
  const dots = document.querySelectorAll('.dot');

  let currentIndex = 0;

  function showImage(index) {
    imagesContainer.style.transform = `translateX(-${verificarTamanhoRotacaoImagem() * index}px)`;

    //imagesContainer.style.transform = `translateX(-${index * 765}px)`;
    //imagesContainer.style.transform = `translateX(-${index * 50}rem)`;
  }

  function nextImage() {
    tamanhoJanelaAtual = window.innerWidth;
    
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
    updateActiveDot();
  }

  function previousImage() {
    tamanhoJanelaAtual = window.innerWidth;
    alert(tamanhoJanelaAtual);
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

// codigo do carrosel implementado no segundo projeto

document.addEventListener("DOMContentLoaded", function(event) {
  const carousel2 = document.querySelector('.carousel2');
  const imagesContainer2 = document.querySelector('.carousel-images2');
  const images2 = document.querySelectorAll('.carousel-images2 img');
  const prevButton2 = document.querySelector('.prev-button2');
  const nextButton2 = document.querySelector('.next-button2');
  const dots2 = document.querySelectorAll('.dot2');

  let currentIndex2 = 0;

  function showImage2(index) {
    imagesContainer2.style.transform = `translateX(-${verificarTamanhoRotacaoImagem() * index}px)`;
    //imagesContainer2.style.transform = `translateX(-${index * 800}px)`;
    //imagesContainer2.style.transform = `translateX(-${index * 50}rem)`;
  }

  function nextImage2() {
    currentIndex2 = (currentIndex2 + 1) % images2.length;
    showImage2(currentIndex2);
    updateActiveDot2();
  }

  function previousImage2() {
    currentIndex2 = (currentIndex2 - 1 + images2.length) % images2.length;
    showImage2(currentIndex2);
    updateActiveDot2();
  }

  function goToImage2(index) {
    currentIndex2 = index;
    showImage2(currentIndex2);
    updateActiveDot2();
  }

  function updateActiveDot2() {
    dots2.forEach((dot2, index) => {
      dot2.classList.toggle('active', index === currentIndex2);
    });
  }

  carousel2.addEventListener('mouseenter', () => {
    carousel2.classList.add('hover');
  });

  carousel2.addEventListener('mouseleave', () => {
    carousel2.classList.remove('hover');
  });

  prevButton2.addEventListener('click', previousImage2);
  nextButton2.addEventListener('click', nextImage2);

  dots2.forEach((dot2, index) => {
dot2.addEventListener('click', () => {
goToImage2(index);
});
});

showImage2(currentIndex2);
updateActiveDot2();
});

// codigo do carrosel implementado no terceiro projeto

document.addEventListener("DOMContentLoaded", function(event) {
  const carousel3 = document.querySelector('.carousel3');
  const imagesContainer3 = document.querySelector('.carousel-images3');
  const images3 = document.querySelectorAll('.carousel-images3 img');
  const prevButton3 = document.querySelector('.prev-button3');
  const nextButton3 = document.querySelector('.next-button3');
  const dots3 = document.querySelectorAll('.dot3');

  let currentIndex3 = 0;

  function showImage3(index) {
    imagesContainer3.style.transform = `translateX(-${verificarTamanhoRotacaoImagem() * index}px)`;
    //imagesContainer3.style.transform = `translateX(-${index * 800}px)`;
    //imagesContainer3.style.transform = `translateX(-${index * 50}rem)`;
  }

  function nextImage3() {
    currentIndex3 = (currentIndex3 + 1) % images3.length;
    showImage3(currentIndex3);
    updateActiveDot3();
  }

  function previousImage3() {
    currentIndex3 = (currentIndex3 - 1 + images3.length) % images3.length;
    showImage3(currentIndex3);
    updateActiveDot3();
  }

  function goToImage3(index) {
    currentIndex3 = index;
    showImage3(currentIndex3);
    updateActiveDot3();
  }

  function updateActiveDot3() {
    dots3.forEach((dot3, index) => {
      dot3.classList.toggle('active', index === currentIndex3);
    });
  }

  carousel3.addEventListener('mouseenter', () => {
    carousel3.classList.add('hover');
  });

  carousel3.addEventListener('mouseleave', () => {
    carousel3.classList.remove('hover');
  });

  prevButton3.addEventListener('click', previousImage3);
  nextButton3.addEventListener('click', nextImage3);

  dots3.forEach((dot3, index) => {
dot3.addEventListener('click', () => {
goToImage3(index);
});
});

showImage3(currentIndex3);
updateActiveDot3();
});

// faz o carosel dos 4 projetos

// funcao para mudar o titulo dos projetos

const tituloProjetos = document.getElementById('tituloProjetos');

function transicaoTitulo(indexAtual) {
  tituloProjetos.classList.add('transicaoTituloProjeto');

  setTimeout(function() {
    
    switch (indexAtual) {
      case 0:
        tituloProjetos.textContent = 'FIFA Bot Project';
        break;
      case 1:
        tituloProjetos.textContent = 'Programming teaching platform';
        break;
      case 2:
        tituloProjetos.textContent = 'Angel Modas';
        break;
    }

  }, 500);

  setTimeout(function() {
    
    tituloProjetos.classList.remove('transicaoTituloProjeto');

  }, 1000);
}

// carrosel dos 4 projetos

document.addEventListener("DOMContentLoaded", function(event) {
  const carousel2 = document.querySelector('.carouselProjetos');
  const divContainer = document.querySelector('.carousel-divs');
  const div = document.querySelectorAll('.carousel-divs > div');
  const prevButton2 = document.querySelector('.prev-button0');
  const nextButton2 = document.querySelector('.next-button0');

  let indexAtual = 0;

  function showImage2(index) {
    //divContainer.style.transform = `translateY(-${index * 559}px)`;
    //divContainer.style.transform = `translateY(-${index * 34.9375}rem)`;
    divContainer.style.transform = `translateY(-${verificarTamanhoProjeto() * index}px)`;
  }

  function nextImage2() {
    indexAtual = (indexAtual + 1) % div.length;
    showImage2(indexAtual);
    transicaoTitulo(indexAtual);
  }

  function previousImage2() {
    indexAtual = (indexAtual - 1 + div.length) % div.length;
    showImage2(indexAtual);
    transicaoTitulo(indexAtual);
  }

  carousel2.addEventListener('mouseenter', () => {
    carousel2.classList.add('hover');
  });

  carousel2.addEventListener('mouseleave', () => {
    carousel2.classList.remove('hover');
  });

  prevButton2.addEventListener('click', previousImage2);
  nextButton2.addEventListener('click', nextImage2);

  showImage2(indexAtual);

  const cardAngelModas = document.getElementById('cardAngelModas');
  const cardProjetoExtensao = document.getElementById('cardProjetoExtensao');
  const cardFifaBotProject = document.getElementById('cardFifaBotProject');

  function scrolar() {

    var section = document.getElementById('posicaoCorreta');
    section.scrollIntoView({ behavior: "smooth" });
    
  }
  
  cardFifaBotProject.addEventListener('click', function() {
    scrolar();

    setTimeout(function() {
      if (indexAtual == 1) {
        previousImage2();
      }
      else if (indexAtual == 2) {
        nextImage2();
      }
    }, 440);
  });

  cardProjetoExtensao.addEventListener('click', function() {
    scrolar();

    setTimeout(function() {
      if (indexAtual == 0) {
        nextImage2();
      }
      else if (indexAtual == 2) {
        previousImage2();
      }
    }, 440);
  });

  cardAngelModas.addEventListener('click', function() {
    scrolar();

    setTimeout(function() {
      if (indexAtual == 0) {
        previousImage2();
      }
      else if (indexAtual == 1) {
        nextImage2();
      }
    }, 440);
  });
});

const linkDirecional = document.getElementById('tituloProjetos');

function direcionarSiteCorreto() {
  if (linkDirecional.textContent == "FIFA Bot Project") {
    window.open("https://github.com/raphaeldeoliveira/FIFABOT", "_blank");
  }
  else if (linkDirecional.textContent == "Programming teaching platform") {
    window.open("https://github.com/raphaeldeoliveira/PlataformaEnsino", "_blank");
  }
  else if (linkDirecional.textContent == "Angel Modas") {
    window.open("https://github.com/raphaeldeoliveira/LojaRoupaApp", "_blank");
  }
}

linkDirecional.onclick = direcionarSiteCorreto;
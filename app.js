const usuarios = [
  {
    id: 1,
    nome: "João Silva",
    email: "joao.silva@email.com",
    senha: "123456",
    idade: 28,
    cargo: "Administrador",
    ativo: true,
  },
  {
    id: 2,
    nome: "Maria Oliveira",
    email: "maria.oliveira@email.com",
    senha: "maria123",
    idade: 31,
    cargo: "Usuário",
    ativo: true,
  },
  {
    id: 3,
    nome: "Pedro Santos",
    email: "pedro.santos@email.com",
    senha: "pedro@2026",
    idade: 24,
    cargo: "Editor",
    ativo: false,
  },
  {
    id: 4,
    nome: "Ana Costa",
    email: "ana.costa@email.com",
    senha: "ana321",
    idade: 29,
    cargo: "Usuário",
    ativo: true,
  },
  {
    id: 5,
    nome: "Lucas Ferreira",
    email: "lucas.ferreira@email.com",
    senha: "lucas123",
    idade: 35,
    cargo: "Gerente",
    ativo: true,
  },
  {
    id: 6,
    nome: "Carla Souza",
    email: "carla.souza@email.com",
    senha: "carla456",
    idade: 27,
    cargo: "Editor",
    ativo: false,
  },
  {
    id: 7,
    nome: "Rafael Lima",
    email: "rafael.lima@email.com",
    senha: "rafael789",
    idade: 33,
    cargo: "Usuário",
    ativo: true,
  },
  {
    id: 8,
    nome: "Juliana Alves",
    email: "juliana.alves@email.com",
    senha: "ju12345",
    idade: 26,
    cargo: "Suporte",
    ativo: true,
  },
  {
    id: 9,
    nome: "Bruno Martins",
    email: "bruno.martins@email.com",
    senha: "bruno@123",
    idade: 38,
    cargo: "Administrador",
    ativo: false,
  },
  {
    id: 10,
    nome: "Fernanda Rocha",
    email: "fernanda.rocha@email.com",
    senha: "fernanda2026",
    idade: 30,
    cargo: "Usuário",
    ativo: true,
  },
];

function darkmode() {
    let body = document.querySelector('body')
    body.classList.toggle('dark')
}

function login(usuarios) {
    let emailDigitado = document.querySelector('#email').value
    let senhaDigitada = document.querySelector('#senha').value

    let usuarioEncontrado = usuarios.find(
        (usuario) => emailDigitado === usuario.email && senhaDigitada === usuario.senha
    )

    // Elemento fixo no HTML: reaproveitado a cada tentativa em vez de criar
    // um <p> novo, para a mensagem de erro não se acumular na tela.
    let mensagemErroElemento = document.querySelector('#mensagem-erro-login')

  
   // Mensagem genérica (não diz se o e-mail existe ou só a senha está errada)
   // para não permitir descobrir quais e-mails estão cadastrados.
   // Classe "visivel" liga a caixa vermelha (ver style.css); assim a caixa
   // só ocupa espaço na tela quando existe de fato um erro para mostrar.
    if (usuarioEncontrado === undefined) {  
        mensagemErroElemento.innerText = 'Usuário ou senha inválidos'
        mensagemErroElemento.classList.add('visivel')
        return
    }

    mensagemErroElemento.innerText = ''
    mensagemErroElemento.classList.remove('visivel')
    window.location.href = 'https://www.google.com/?hl=pt_BR'
}


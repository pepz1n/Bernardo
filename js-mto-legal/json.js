let pessoa = {
  nome: 'Bernardo',
  idade: 19,
  estuda: true,
  endereco: {
    rua: 'alguma ai',
    cidade: 'xaxim',
    numero: 0,
  },
  idioma: [
    'portugues',
    'ingles',
    'italiano',
  ],
  programar: () => {
    console.log('programando');
  }
}

pessoa.programar()
let chave = Object.keys(pessoa);

chave.forEach((dado) => {
  console.log(pessoa[dado]);
});

// let texto = JSON.stringify(pessoa)

let pessoas = [
  {
    nome: 'bernardo',
    idade: 19,
  },
  {
    nome: 'fulano',
    idade: 20,
  }
];

// pessoas.forEach((pessoa) => console.log(`Meu nome é ${pessoa.nome} e eu tenho ${pessoa.idade} anos`))

// pessoa.programando();

// const oi = require('./oi.json');

// console.log(oi);

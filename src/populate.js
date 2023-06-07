import { openDB } from "./config/db.js";
import {
  CREATE_TABLE_VITIMA,
  CREATE_TABLE_OCORRENCIA,
  INSERT_VITIMA,
  TRUNCATE_VITIMA,
  TRUNCATE_OCORRENCIA,
  INSERT_OCORRENCIA,
} from "./config/queries.js";

const vitimas = [
  {
    id: 1,
    nome: "Maria Clara",
    idade: 22,
    genero: "feminino",
  },
  {
    id: 2,
    nome: "Larissa Santos",
    idade: 19,
    genero: "feminino",
  },
  {
    id: 3,
    nome: "Matheus Rodrigues",
    idade: 29,
    genero: "masculino",
  },
  {
    id: 4,
    nome: "Luana Silva",
    idade: 44,
    genero: "feminino",
  },
  {
    id: 5,
    nome: "Carlos Oliveira",
    idade: 35,
    genero: "masculino",
  },
  {
    id: 6,
    nome: "Isabela Souza",
    idade: 27,
    genero: "feminino",
  },
  {
    id: 7,
    nome: "Rafaela Almeida",
    idade: 31,
    genero: "feminino",
  },
  {
    id: 8,
    nome: "Renato Santos",
    idade: 33,
    genero: "masculino",
  },
  {
    id: 9,
    nome: "Juliana Lima",
    idade: 26,
    genero: "feminino",
  },
  {
    id: 10,
    nome: "Lucas Fernandes",
    idade: 28,
    genero: "masculino",
  },
  {
    id: 11,
    nome: "Carolina Vieira",
    idade: 39,
    genero: "feminino",
  },
  {
    id: 12,
    nome: "Gustavo Souza",
    idade: 32,
    genero: "masculino",
  },
  {
    id: 13,
    nome: "Fernanda Oliveira",
    idade: 25,
    genero: "feminino",
  },
  {
    id: 14,
    nome: "Rodrigo Santos",
    idade: 30,
    genero: "masculino",
  },
  {
    id: 15,
    nome: "Mariana Costa",
    idade: 23,
    genero: "feminino",
  },
  {
    id: 16,
    nome: "Fábio Almeida",
    idade: 36,
    genero: "masculino",
  },
  {
    id: 17,
    nome: "Vanessa Silva",
    idade: 29,
    genero: "feminino",
  },
  {
    id: 18,
    nome: "André Vieira",
    idade: 42,
    genero: "masculino",
  },
  {
    id: 19,
    nome: "Amanda Rodrigues",
    idade: 34,
    genero: "feminino",
  },
  {
    id: 20,
    nome: "Thiago Souza",
    idade: 37,
    genero: "masculino",
  },
];
const ocorrencias = [
  {
    id: 1,
    descricao: "assalto",
    endereco: "Av. Paulista, 777",
    id_vitima: 1,
    obito: false,
  },
  {
    id: 2,
    descricao: "feminicidio",
    endereco: "R. Dr. Falcão Filho, 121",
    id_vitima: 2,
    obito: true,
  },
  {
    id: 3,
    descricao: "acidente de carro",
    endereco: "Tv. Dona Paula, 13 - Higienópolis, São Paulo",
    id_vitima: 3,
    obito: false,
  },
  {
    id: 4,
    descricao: "bala perdida",
    endereco: "Tv. 14 de Setembro - Higienópolis, São Paulo",
    id_vitima: 4,
    obito: true,
  },
  {
    id: 5,
    descricao: "roubo",
    endereco: "Av. Rebouças, 100",
    id_vitima: 5,
    obito: false,
  },
  {
    id: 6,
    descricao: "furto",
    endereco: "R. Augusta, 500",
    id_vitima: 6,
    obito: false,
  },
  {
    id: 7,
    descricao: "assassinato",
    endereco: "R. Oscar Freire, 200",
    id_vitima: 7,
    obito: true,
  },
  {
    id: 8,
    descricao: "sequestro",
    endereco: "Av. Brasil, 1500",
    id_vitima: 8,
    obito: false,
  },
  {
    id: 9,
    descricao: "estupro",
    endereco: "R. Consolação, 800",
    id_vitima: 9,
    obito: false,
  },
  {
    id: 10,
    descricao: "homicídio",
    endereco: "Av. Ipiranga, 300",
    id_vitima: 10,
    obito: true,
  },
  {
    id: 11,
    descricao: "assalto",
    endereco: "R. Pamplona, 400",
    id_vitima: 11,
    obito: false,
  },
  {
    id: 12,
    descricao: "roubo",
    endereco: "Av. Faria Lima, 900",
    id_vitima: 12,
    obito: false,
  },
  {
    id: 13,
    descricao: "furto",
    endereco: "R. Padre João Manuel, 600",
    id_vitima: 13,
    obito: false,
  },
  {
    id: 14,
    descricao: "assassinato",
    endereco: "Av. Pacaembu, 700",
    id_vitima: 14,
    obito: true,
  },
  {
    id: 15,
    descricao: "roubo",
    endereco: "R. Bela Cintra, 1000",
    id_vitima: 15,
    obito: false,
  },
  {
    id: 16,
    descricao: "furto",
    endereco: "Av. Morumbi, 1200",
    id_vitima: 16,
    obito: false,
  },
  {
    id: 17,
    descricao: "assassinato",
    endereco: "R. Haddock Lobo, 1500",
    id_vitima: 17,
    obito: true,
  },
  {
    id: 18,
    descricao: "roubo",
    endereco: "Av. Brigadeiro Faria Lima, 1700",
    id_vitima: 18,
    obito: false,
  },
  {
    id: 19,
    descricao: "homicídio",
    endereco: "R. Itapeva, 1900",
    id_vitima: 19,
    obito: true,
  },
  {
    id: 20,
    descricao: "assalto",
    endereco: "Av. Berrini, 2000",
    id_vitima: 20,
    obito: false,
  },
];

(async () => {
  const db = await openDB();
  await db.exec(CREATE_TABLE_VITIMA);
  await db.exec(CREATE_TABLE_OCORRENCIA);

  await db.exec(TRUNCATE_VITIMA);
  await db.exec(TRUNCATE_OCORRENCIA);

  for (let i = 0; i < vitimas.length; i++) {
    const { id, nome, idade, genero } = vitimas[i];
    await db.run(INSERT_VITIMA, id, nome, idade, genero);
  }

  for (let i = 0; i < ocorrencias.length; i++) {
    const { id, descricao, endereco, id_vitima, obito } = ocorrencias[i];
    await db.run(INSERT_OCORRENCIA, id, descricao, endereco, id_vitima, obito);
  }
})();

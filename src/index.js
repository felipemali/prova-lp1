import { openDB } from "./config/db.js";
import {
  SELECT_VITIMA_FEMININA_OBITO,
  SELECT_VITIMA_COM_BASE_NA_IDADE,
  SELECT_VITIMA_COM_BASE_NA_PESQUISA,
} from "./config/queries.js";
(async () => {
  const db = await openDB();

  //1º desafio:
  //Recuperar todas as vítimas cuja idade esteja entre uma faixa de idade (idade mínima e idade máxima);
  let results_1_desafio = await db.all(SELECT_VITIMA_COM_BASE_NA_IDADE);
  results_1_desafio.forEach((vitima) => {
    console.log(vitima);
  });

  //2º desafio:
  //Recuperar todas as ocorrências com vítimas do gênero feminino onde houve óbito;
  let results_2_desafio = await db.all(SELECT_VITIMA_FEMININA_OBITO);
  results_2_desafio.forEach((row) => {
    console.log(row);
  });

  //3º desafio:
  //Recuperar todas as vítimas que tiveram ocorrências relacionadas a elas em um
  //determinado endereço, onde apenas parte do endereço deve ser informado (ignorando maiúsculas e minúsculas);
  let results_3_desafio = await db.all(
    SELECT_VITIMA_COM_BASE_NA_PESQUISA,
    "%na%"
  );
  console.log(results_3_desafio);
})();

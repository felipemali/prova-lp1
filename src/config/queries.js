export const CREATE_TABLE_VITIMA = `
  create table if not exists vitima (
    id integer primary key,
    nome text not null,
    idade integer not null,
    genero text null
  )
`;

export const CREATE_TABLE_OCORRENCIA = `
    create table if not exists ocorrencia (
      id integer primary key,
      descricao text not null,
      endereco text not null,
      id_vitima integer not null,
      obito boolean not null,
      foreign key(id_vitima)
        references vitima(id)
    )
`;

export const INSERT_VITIMA = `
  insert into vitima (id, nome, idade, genero) values (?, ?, ?, ?)
`;

export const INSERT_OCORRENCIA = `
      insert into ocorrencia (id, descricao, endereco, id_vitima, obito) values (?, ?, ?, ?, ?)
`;

export const SELECT_VITIMA_COM_BASE_NA_IDADE = `
         select * from vitima where idade >=20 AND idade <=30
 `;

export const SELECT_VITIMA_FEMININA_OBITO = `
  select * 
  from ocorrencia
  inner join vitima on ocorrencia.id_vitima = vitima.id
  where vitima.genero = 'feminino' and ocorrencia.obito = true
`;

export const SELECT_VITIMA_COM_BASE_NA_PESQUISA = `
SELECT vitima.*, ocorrencia.*
FROM vitima
INNER JOIN ocorrencia ON vitima.id = ocorrencia.id_vitima
WHERE LOWER(ocorrencia.endereco) LIKE LOWER(?)
 `;

export const TRUNCATE_VITIMA = `
        delete from vitima
`;

export const TRUNCATE_OCORRENCIA = `
        delete from ocorrencia
`;

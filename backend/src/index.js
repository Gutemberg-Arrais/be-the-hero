const express = require ('express');
const cors = require('cors')
const routes = require('./routes');

const app = express();


app.use(cors())
app.use(express.json());
app.use(routes);

app.listen(3333);
/* 
Rota / Recurso


*/
/**
 * Métodos HTTP 
 * 
 * GET: Buscar/Listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no Back-end
 * Request Body:Corpo da requisição, utilizado para criar ou alterar recursos
 */

 /**
  * Tipos de parâmetros
  * 
  * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
  * Route Params: Parâmetros utilizados para identificar recursos
  */

  /**
   * Bancos de dados:
   * 
   * SQL: MySQL, SQLite, PostGre, Oracle, Microsoft SQL Server;
   * NoSQL: MongoDB, CouchDB, etc;
   * 
   */

 
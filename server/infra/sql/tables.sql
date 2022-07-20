
--
-- Banco de Dados: Biblioteca
--

-- --------------------------------------------------------

--
-- Estrutura da tabela ASSOCIADO
--
CREATE TYPE tipo AS ENUM ('Grad', 'Posgrad', 'Prof');
CREATE TABLE IF NOT EXISTS ASSOCIADO (
  Codigo serial PRIMARY KEY,
  Nome varchar(35) NOT NULL,
  Senha varchar(35) NOT NULL,
  Endereco varchar(45) NOT NULL,
  Email varchar(20) NOT NULL,
  Status tipo NOT NULL
);

-- --------------------------------------------------------

--
-- Estrutura da tabela EMPRESTIMO
--

CREATE TABLE IF NOT EXISTS EMPRESTIMO (
  Codigo serial PRIMARY KEY,
  Nro_Exemplar integer NOT NULL,
  ISBN varchar(12) NOT NULL,
  Codigo_Assoc integer NOT NULL,
  Data_Emp date NOT NULL,
  Data_Devol date DEFAULT NULL,
  UNIQUE(Nro_Exemplar, Codigo_Assoc)
);

-- --------------------------------------------------------

--
-- Estrutura da tabela EXEMPLAR
--

CREATE TABLE IF NOT EXISTS EXEMPLAR (
  Numero integer NOT NULL,
  ISBN varchar(12) NOT NULL UNIQUE,
  Preco float DEFAULT NULL,
  PRIMARY KEY (Numero, ISBN)
);

-- --------------------------------------------------------

--
-- Estrutura da tabela FUNCIONARIO
--
CREATE TYPE cargo AS ENUM ('gerente', 'funcionario');
CREATE TABLE IF NOT EXISTS FUNCIONARIO (
  Codigo serial PRIMARY KEY,
  Nome varchar(35) NOT NULL,
  Senha varchar(35) NOT NULL,
  Funcao cargo NOT NULL,
  Email varchar(20) NOT NULL
);

-- --------------------------------------------------------

--
-- Estrutura da tabela PUBLICACAO
--

CREATE TABLE IF NOT EXISTS PUBLICACAO (
  ISBN varchar(12) NOT NULL,
  Titulo varchar(40) NOT NULL,
  Autor varchar(35) NOT NULL,
  Editora varchar(30) NOT NULL,
  PRIMARY KEY (ISBN)
);

-- --------------------------------------------------------

--
-- Estrutura da tabela RESERVA
--
CREATE TYPE reservaStatus AS ENUM ('Iniciado', 'Avisado', 'Anulado');
CREATE TABLE IF NOT EXISTS RESERVA (
  Codigo serial PRIMARY KEY,
  ISBN varchar(12) NOT NULL,
  Codigo_Assoc integer NOT NULL,
  Data date NOT NULL,
  Status reservaStatus NOT NULL,
  UNIQUE(ISBN, Codigo_Assoc)
);

--
-- Restrições para as tabelas dumpadas
--

--
-- Restrições para a tabela EMPRESTIMO
--
ALTER TABLE EMPRESTIMO
  ADD CONSTRAINT EMPRESTIMO_ibfk_1 FOREIGN KEY (Codigo_Assoc) REFERENCES ASSOCIADO (Codigo);

--
-- Restrições para a tabela EXEMPLAR
--
ALTER TABLE EXEMPLAR
  ADD CONSTRAINT EXEMPLAR_ibfk_1 FOREIGN KEY (ISBN) REFERENCES PUBLICACAO (ISBN);

--
-- Restrições para a tabela RESERVA
--
ALTER TABLE RESERVA
  ADD CONSTRAINT RESERVA_ibfk_2 FOREIGN KEY (Codigo_Assoc) REFERENCES ASSOCIADO (Codigo),
  ADD CONSTRAINT RESERVA_ibfk_1 FOREIGN KEY (ISBN) REFERENCES PUBLICACAO (ISBN);


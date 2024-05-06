const Mensagem = require("../models/mensagem")
const MensagemDAO = require('../models/dao/MensagemDAO');

class MensagemController {
  // Cria um novo Mensagem (CREATE)
  create(req, res) {
    let nickName = req.body.nickName;
    let nome = req.body.nome;

    let Mensagem = new Mensagem({ nickName, nome });
    let MensagemId = MensagemDAO.criar(Mensagem);

    // Faz o response para o browser
    if (MensagemId)
      res.status(201).json({ Mensagem: MensagemDAO.buscarPorId(MensagemId) })
    else
      res.status(500).json({ message: "Não foi possível criar uma mensagem" })
  }

  // Lista todos os Mensagems (READ)
  list(req, res) {
    // Busca o parâmetro na URL
    let nomeSearch = req.query.nomeSearch;
    let nickSearch = req.query.nickSearch;

    // Copia o array Mensagem
    let listaMensagem = MensagemDAO.listar().slice()

    // Filtra os resultados se tiver alguma query
    if (nomeSearch) {
      listaMensagem = listaMensagem.filter(Mensagem => Mensagem.nome.toUpperCase().includes(nomeSearch.toUpperCase()));
    }
    if (nickSearch) {
      listaMensagem = listaMensagem.filter(Mensagem => Mensagem.nickName.toUpperCase().includes(nickSearch.toUpperCase()));
    }

    // Faz o response para o browser
    if (listaMensagem.length === 0)
      res.status(200).json({ message: "Nenhum Mensagem encontrado" })
    else {
      // Cria um novo array de Mensagem
      let listaMensagemVerbose = []
      // Percorre o array listaMensagem
      for (let Mensagem of listaMensagem) {
        // Cria uma nova variável que recebe a versão com os dados principais de Mensagem
        let MensagemVerbose = Mensagem.principal()
        // Atribui o novo Mensagem ao novo array
        listaMensagemVerbose.push(MensagemVerbose)
      }
      res.status(200).json({ Mensagem: listaMensagemVerbose })
    }
  }

  // Mostrar um Mensagem (READ)
  show(req, res) {
    let id = req.params.id;
    let Mensagem = MensagemDAO.buscarPorId(parseInt(id));

    if (Mensagem) {
      // Cria uma nova variável que recebe a versão verbosa de Mensagem
      let MensagemVerbose = Mensagem.verbose()
      // Faz o response para o browser
      res.status(200).json({ Mensagem: MensagemVerbose });
    } else {
      // Faz o response para o browser
      res.status(404).json({ message: 'Mensagem não encontrado' });
    }
  }

  // Atualizar um Mensagem (UPDATE)
  update(req, res) {
    let id = req.params.id;
    let Mensagem = MensagemDAO.buscarPorId(parseInt(id));
    if (Mensagem) {
      if (req.body.nickName) Mensagem.nickName = req.body.nickName
      if (req.body.nome) Mensagem.nome = req.body.nome
      if (req.body.classificacao) Mensagem.classificacao = req.body.classificacao
      if (req.body.Mensagem) Mensagem.Mensagem = req.body.Mensagem
      if (req.body.conquistas) Mensagem.conquistas = req.body.conquistas


      // Atualiza a Mensagem na persistência
      MensagemDAO.atualizar(id, Mensagem)
      // Cria uma nova variável que recebe a versão verbosa de Mensagem
      let MensagemVerbose = Mensagem.verbose()
      // Faz o response para o browser
      res.status(200).json({ Mensagem: MensagemVerbose });
    }
    else {
      // Faz o response para o browser
      res.status(404).json({ message: 'Mensagem não encontrado' });
    }
  }

  // Deleta um Mensagem (DELETE)
  delete(req, res) {
    let id = parseInt(req.params.id);

    if (MensagemDAO.exist(id)) {
      MensagemDAO.deletar(id);

      // Faz o response para o browser
      res.status(200).send()
    }
    else {
      // Faz o response para o browser
      res.status(404).json({ message: 'Mensagem não encontrado' });
    }
  }

  // Lista classificação ordenada dos 10 primeiros Mensagem
  listaClassificacao(req, res) {

  }

  // Atualiza a classificação dos Mensagem pela ponduação das suas Mensagem
  calculaClassificacao() {

  }
}

module.exports = new MensagemController();
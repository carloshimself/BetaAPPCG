function CalcaDAO(connection) {
    this._connection = connection;
}

//register operations
CalcaDAO.prototype.cadastraCalca = function(cor) {
    this._connection.query('INSERT INTO calcas (cor_id,tamanho_id,tip_id,quantidade) values(?,?,?,?)',cor.cor_id,cor.tamanho,cor.tip_id,cor.quantidade);
}

CalcaDAO.prototype.atualizaCalca = function(cor) {
    this._connection.query('UPDATE calcas (cor_id,tamanho_id,tip_id,quantidade) values(?,?,?,?)',cor.cor_id,cor.tamanho,cor.tip_id,cor.quantidade);
}

//SAVE OPERATIONS
CalcaDAO.prototype.salvaCor = function(cor,callback) {
    this._connection.query('INSERT INTO cor_calcas SET ?', cor, callback);
}
CalcaDAO.prototype.salvaTipo = function(cor,callback) {
    this._connection.query('INSERT INTO cor_calcas SET ?', cor, callback);
}
CalcaDAO.prototype.salvaTamanho = function(cor,callback) {
    this._connection.query('INSERT INTO cor_calcas SET ?', cor, callback);
}

//UPDATE OPERATIONS
CalcaDAO.prototype.atualizaCor = function(cor,callback) {
    this._connection.query('UPDATE cor_calcas SET status = ? where id = ?', [cor.status, cor.id], callback);
}
CalcaDAO.prototype.atualizaTipo = function(cor,callback) {
    this._connection.query('UPDATE cor_calcas SET status = ? where id = ?', [cor.status, cor.id], callback);
}
CalcaDAO.prototype.atualizaTamanho = function(cor,callback) {
    this._connection.query('UPDATE cor_calcas SET status = ? where id = ?', [cor.status, cor.id], callback);
}

//LIST OPERATIONS
CalcaDAO.prototype.listaCor = function(callback) {
    this._connection.query('select * from cor_calcas',callback);
}
CalcaDAO.prototype.listaTipo = function(callback) {
    this._connection.query('select * from tipo_calcas',callback);
}
CalcaDAO.prototype.listaTamanho = function(callback) {
    this._connection.query('select * from tam_calcas',callback);
}


//SELECT OPERANTIONS
CalcaDAO.prototype.buscaPorIdCor = function (id,callback) {
    this._connection.query("select * from cor_calcas where id = ?",[id],callback);
}

module.exports = function(){
    return CalcaDAO;
};

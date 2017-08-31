function CamisaDao(connection) {
    this._connection = connection;
}
//register operations
CamisaDao.prototype.cadastraCamisa = function(cor) {
    this._connection.query('INSERT INTO camisetas (cor_id,tamanho_id,tip_id,quantidade) values(?,?,?,?)',cor.cor_id,cor.tamanho,cor.tip_id,cor.quantidade);
}

CamisaDao.prototype.atualizaCamisa = function(cor) {
    this._connection.query('UPDATE camisetas (cor_id,tamanho_id,tip_id,quantidade) values(?,?,?,?)',cor.cor_id,cor.tamanho,cor.tip_id,cor.quantidade);
}

//SAVE OPERATIONS
CamisaDao.prototype.salvaCor = function(cor,callback) {
    this._connection.query('INSERT INTO cor_camisetas SET ?', cor, callback);
}
CamisaDao.prototype.salvaTipo = function(cor,callback) {
    this._connection.query('INSERT INTO cor_camisetas SET ?', cor, callback);
}
CamisaDao.prototype.salvaTamanho = function(cor,callback) {
    this._connection.query('INSERT INTO cor_camisetas SET ?', cor, callback);
}

//UPDATE OPERATIONS
CamisaDao.prototype.atualizaCor = function(cor,callback) {
    this._connection.query('UPDATE cor_camisetas SET status = ? where id = ?', [cor.status, cor.id], callback);
}
CamisaDao.prototype.atualizaTipo = function(cor,callback) {
    this._connection.query('UPDATE cor_camisetas SET status = ? where id = ?', [cor.status, cor.id], callback);
}
CamisaDao.prototype.atualizaTamanho = function(cor,callback) {
    this._connection.query('UPDATE cor_camisetas SET status = ? where id = ?', [cor.status, cor.id], callback);
}

//LIST OPERATIONS
CamisaDao.prototype.listaCor = function(callback) {
    this._connection.query('select * from cor_camisetas',callback);
}
CamisaDao.prototype.listaTipo = function(callback) {
    this._connection.query('select * from tipo_camisetas',callback);
}
CamisaDao.prototype.listaTamanho = function(callback) {
    this._connection.query('select * from tam_camisetas',callback);
}


//SELECT OPERANTIONS
CamisaDao.prototype.buscaPorIdCor = function (id,callback) {
    this._connection.query("select * from cor_camisetas where id = ?",[id],callback);
}

module.exports = function(){
    return CamisaDao;
};

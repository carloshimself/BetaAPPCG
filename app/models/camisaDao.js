function CamisaDao(connection) {
    this._connection = connection;
}
//register operations
CamisaDao.prototype.cadastraCamisa = function(camisa) {
    this._connection.query('INSERT INTO camisetas (cor_id,tamanho_id,tip_id,quantidade) values(?,?,?,?)',camisa.cor_id,camisa.tamanho,camisa.tip_id,camisa.quantidade);
}

CamisaDao.prototype.atualizaCamisa = function(camisa,callback) {
    this._connection.query('UPDATE camisetas (cor_id,tamanho_id,tip_id,quantidade) values(?,?,?,?)',camisa.cor_id,camisa.tamanho,camisa.tip_id,camisa.quantidade);
}

//SAVE OPERATIONS
CamisaDao.prototype.salvaCor = function(camisa,callback) {
    this._connection.query('INSERT INTO cor_camisetas SET ?', camisa, callback);
}
CamisaDao.prototype.salvaTipo = function(camisa,callback) {
    this._connection.query('INSERT INTO cor_camisetas SET ?', camisa, callback);
}
CamisaDao.prototype.salvaTamanho = function(camisa,callback) {
    this._connection.query('INSERT INTO cor_camisetas SET ?', camisa, callback);
}

//UPDATE OPERATIONS
CamisaDao.prototype.atualizaCor = function(camisa,callback) {
    this._connection.query('UPDATE cor_camisetas SET status = ? where id = ?', [cor.status, cor.id], callback);
}
CamisaDao.prototype.atualizaTipo = function(camisa,callback) {
    this._connection.query('UPDATE cor_camisetas SET status = ? where id = ?', [cor.status, cor.id], callback);
}
CamisaDao.prototype.atualizaTamanho = function(camisa,callback) {
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

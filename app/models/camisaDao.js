function CamisaDao(connection) {
    this._connection = connection;
}


CamisaDao.prototype.salvaCor = function(cor,callback) {
    this._connection.query('INSERT INTO cor_camisetas SET ?', cor, callback);
}


CamisaDao.prototype.atualizaCor = function(cor,callback) {
    this._connection.query('UPDATE cor_camisetas SET status = ? where id = ?', [cor.status, cor.id], callback);
}



CamisaDao.prototype.listaCor = function(callback) {
    this._connection.query('select * from cor_camisetas',callback);
}
CamisaDao.prototype.listaTipo = function(callback) {
    this._connection.query('select * from tipo_camisetas',callback);
}
CamisaDao.prototype.listaTamanho = function(callback) {
    this._connection.query('select * from tam_camisetas',callback);
}



CamisaDao.prototype.buscaPorIdCor = function (id,callback) {
    this._connection.query("select * from cor_camisetas where id = ?",[id],callback);
}

module.exports = function(){
    return CamisaDao;
};

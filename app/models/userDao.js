function UserDao(connection) {
    this._connection = connection;
}

//SELECT OPERANTIONS
UserDao.prototype.buscaUser = function (callback) {
    this._connection.query("select * from usuarios",callback);
}

module.exports = function(){
    return UserDao;
};

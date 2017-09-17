create table usuarios(
id int not null AUTO_INCREMENT primary key,
usuario varchar(50) not null,
senha varchar(50) not null,
tipo varchar(50) not  null
);

insert into usuarios(usuario,senha,tipo) values('admin','admin','A');
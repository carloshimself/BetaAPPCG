CREATE TABLE cor_calcas(
id int not null AUTO_INCREMENT PRIMARY KEY,
id_cor INT NOT NULL ,
cor_cam VARCHAR(40) NOT NULL  
);

insert into cor_calcas(id_cor, cor_cam) values('3723','BRANCA');
insert into cor_calcas(id_cor, cor_cam) values('3723.1','PRETA');
insert into cor_calcas(id_cor, cor_cam) values('3723.5','V. MUSG');
insert into cor_calcas(id_cor, cor_cam) values('3723.2','ROYAL');
insert into cor_calcas(id_cor, cor_cam) values('3723.7','VERMELHA');
insert into cor_calcas(id_cor, cor_cam) values('3723.6','AMARELA');
insert into cor_calcas(id_cor, cor_cam) values('3723.9','LARANJA');
insert into cor_calcas(id_cor, cor_cam) values('3723.4','V. BAN');
insert into cor_calcas(id_cor, cor_cam) values('3723.10','MARIN');
insert into cor_calcas(id_cor, cor_cam) values('3723.12','CAQUI');
insert into cor_calcas(id_cor, cor_cam) values('3723.11','CHUMBO');


CREATE TABLE tam_calcas(
 id_tam int not null primary key auto_increment,
 tam_cod varchar(5) not null
);

INSERT INTO tam_calcas(tam_cod) VALUES ('p');
INSERT INTO tam_calcas(tam_cod) VALUES ('m');
INSERT INTO tam_calcas(tam_cod) VALUES ('g');
INSERT INTO tam_calcas(tam_cod) VALUES ('gg');
INSERT INTO tam_calcas(tam_cod) VALUES ('xg');
INSERT INTO tam_calcas(tam_cod) VALUES ('36');
INSERT INTO tam_calcas(tam_cod) VALUES ('38');
INSERT INTO tam_calcas(tam_cod) VALUES ('40');
INSERT INTO tam_calcas(tam_cod) VALUES ('42');
INSERT INTO tam_calcas(tam_cod) VALUES ('44');
INSERT INTO tam_calcas(tam_cod) VALUES ('46');
INSERT INTO tam_calcas(tam_cod) VALUES ('48');
INSERT INTO tam_calcas(tam_cod) VALUES ('50');
INSERT INTO tam_calcas(tam_cod) VALUES ('52');
INSERT INTO tam_calcas(tam_cod) VALUES ('54');

CREATE TABLE tipo_calcas(
id_tip int not null primary key auto_increment,
tipo varchar(40) not null  
);

 INSERT INTO tipo_calcas(tipo) values('brim');
 INSERT INTO tipo_calcas(tipo) values('moletom');
 INSERT INTO tipo_calcas(tipo) values('jeans');



CREATE TABLE calcas (
id int not null auto_increment primary key,
cor_id int not null,
FOREIGN KEY (cor_id) REFERENCES cor_calcas(id),
tamanho_id int not null,  
FOREIGN KEY (tamanho_id) REFERENCES tam_calcas(id_tam),
tip_id int not  null,  
FOREIGN KEY (tip_id) REFERENCES tipo_calcas(id_tip),
quantidade int not null
);
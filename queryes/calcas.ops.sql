CREATE TABLE cor_calcas(
id_cor INT NOT NULL PRIMARY KEY,
cor_cam VARCHAR(40) NOT NULL  
);



CREATE TABLE tam_calcas(
 id_tam int not null primary key auto_increment,
 tam_cod varchar(5) not null
);



CREATE TABLE tipo_calcas(
id_tip int not null primary key auto_increment,
tipo varchar(40) not null  
);


CREATE TABLE calcas (
id int not null auto_increment primary key,
cor_id VARCHAR(40),
FOREIGN KEY (cor_id) REFERENCES cor_calcas(id_cor),
tamanho_id varchar(4),  
FOREIGN KEY (tamanho_id) REFERENCES tam_calcas(id_tam),
tip_id varchar(40),  
FOREIGN KEY (tip_id) REFERENCES tipo_calcas(id_tip),
quantidade int not null
);

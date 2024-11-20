MATERIAIS
METAL
PLASTICO
PAPEL
VIDRO
CREATE TABLE materiais ( 
    materialid INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    type VARCHAR(255) UNIQUE
);

INSERT INTO materiais(type) VALUES('plastico');
INSERT INTO materiais(type) VALUES('vidro');
INSERT INTO materiais(type) VALUES('metal');
INSERT INTO materiais(type) VALUES('papel');

CREATE TABLE userprofile (
    profile_email VARCHAR(255) PRIMARY KEY,
    qntplastico BIGINT DEFAULT 0,
    qntvidro BIGINT DEFAULT 0,
    qntpapel BIGINT DEFAULT 0,
    qntmetal BIGINT DEFAULT 0,
    foreign key (profile_email) references users (user_email)
);

INSERT INTO userprofile (qntplastico, qntmetal, profile_email) VALUES(10, 5, 'jb@test.com');


CREATE TABLE ecopontos (
    eco_id serial primary key,
    name text,
    materiais text,
    address text,
    telefone int,
    CEP int,
    geom geometry(Point, 4326)
);


SELECT * FROM ecopontos WHERE ST_DWithin(geom, ST_SetSRID(ST_GeomFromText('POINT(-43.63 -20.55)'), 4326), 1);

INSERT INTO userprofile (profile_email, qntplastico, qntvidro, qntpapel, qntmetal)
VALUES ('jb2@test.com', 5, 5, 5, 5)
ON CONFLICT (profile_email)
DO UPDATE SET profile_email = excluded.profile_email , qntplastico = userprofile.qntplastico+5 , qntvidro =  userprofile.qntvidro + 5, qntpapel = userprofile.qntpapel + 5, qntmetal= userprofile.qntmetal + 5;
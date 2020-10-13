DROP DATABASE IF EXISTS coils_db;
CREATE DATABASE coils_db;

-- Makes it so all of the following code will affect animals_db --
USE coils_db;

CREATE TABLE coils (
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  coil_name VARCHAR(50) NOT NULL,
  coil_resistance VARCHAR(10),
  suggest_watts VARCHAR(20),
  PRIMARY KEY (id)
);

-- Creates new rows containing data in all named columns --
INSERT INTO coils (manu, coil_name, coil_resistance, suggest_watts)
VALUES 
  ('Smok Baby','T6','0.2Ω','70w-90w'),
  ('Smok Baby','T12','0.15Ω','60w-80w'),
  ('Vaporesso','GT2','0.4Ω','55w-65w'),
  ('Vaporesso','GT4','0.15Ω','45w-60w'),
  ('Vaporesso','GT6','0.2Ω','70w-90w'),
  ('Vaporesso','GT Mesh','0.18Ω','50w-90w'),
  ('Vaporesso','CCell2','0.3Ω','35w-40w'),
  ('Vaporesso','CCell','0.5Ω','15w-40w'),
  ('Falcon','F1','0.2Ω','70W-90W'),
  ('Falcon','F2','0.2Ω','80W'),
  ('Falcon','M1+ Mesh','0.16Ω','75W'),
  ('Falcon','M-Dual Mesh','0.38Ω','80W'),
  ('Falcon','M-Triple Mesh','0.15Ω','80-85W'),
  ('Fireluke Firelock','Sextuple','.15Ω','60-140w'),
  ('Fireluke Mesh Pro','SS Single','.12Ω','~50-80w/400-550°F'),
  ('Fireluke Mesh Pro','Kanthal Single','.15Ω','40-70w'),
  ('Fireluke Mesh Pro','Double Mesh','.2Ω','60-90w'),
  ('Fireluke Mesh Pro','Triple Mesh','.15Ω','80-110w'),
  ('Fireluke Mesh Pro','Quad Mesh','.15Ω','80-120w'),
  ('Fireluke Mesh Pro','Quintuple Mesh','.15Ω','80-100w'),
  ('Uforce','D4','.4Ω','65w-75w'),
  ('Uforce','U4','.23Ω','60w-80w'),
  ('Uforce','U6','.15Ω','80w-90w'),
  ('Uforce','U8','.15Ω','90w-110w'),
  ('Uforce','N1','.13Ω','70w-80w'),
  ('Fireluke Mesh','TX1 Mesh SS316L','.12Ω','~50w-85w'),
  ('Fireluke Mesh','NX2 Double Mesh','.5Ω,20w-50w'),
  ('Fireluke Mesh','X2 Double Mesh','.2Ω,40-80w'),
  ('Vaporesso','QF Meshed','0.2Ω','65w-75w'),
  ('Vaporesso','QF Strip','0.15Ω','65w-75w'),
  ('Voopoo','PnP-VM6 Mesh Coil','0.15Ω','60-80W (DL)'),
  ('Voopoo','PnP-VM5 Mesh Coil','0.2Ω','40-60W (DL)'),
  ('Voopoo','PnP-VM1 Mesh Coil','0.3Ω','32-40W (DL)'),
  ('Voopoo','PnP-R1 Dual Coil','0.8Ω','12-18W (MTL)'),
  ('Voopoo','PnP-M2 Mesh Coil','0.6Ω,''20-28W  (Half-DL)'),
  ('Voopoo','PnP-TR1 Mesh Coil','1.2Ω','10-15W (MTL)');

INSERT INTO tanks (manufacturer)

SELECT * FROM coils;

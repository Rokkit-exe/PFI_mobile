import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Database } from "./database";

export default function initData() {

  const db = new Database("Magasin");

  db.execute("drop table if exists Produits;");
  db.execute(
    "CREATE TABLE IF NOT EXISTS Produits (id INTEGER primary key autoincrement, nom TEXT, prix REAL, image TEXT, details TEXT);"
  );
  db.execute(
    "insert into Produits (nom, prix, image, details) values ('Bitcoin','37000', 'https://logos-world.net/wp-content/uploads/2020/08/Bitcoin-Logo.png', 'la crypto la plus utiliser sur le marcher')"
  );
  db.execute(
    "insert into Produits (nom, prix, image, details) values ('Ethereum','2500', 'https://logos-world.net/imageup/Ethereum/Ethereum_(8).png', 'la crypto la plus utiliser pour le commerce')"
  );
  db.execute(
    "insert into Produits (nom, prix, image, details) values ('BNB','354', 'https://coinarbitragebot.com/inc/coin_logos/bnb.png', 'la crypto de la plateform binance')"
  );
  db.execute(
    "insert into Produits (nom, prix, image, details) values ('Avalanche','39', 'https://cryptologos.cc/logos/avalanche-avax-logo.png', 'la première crypto proof of stake sur le marcher')"
  );
  db.execute(
    "insert into Produits (nom, prix, image, details) values ('Solana','58', 'https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png', 'crypto très solide')"
  );
  db.execute(
    "insert into Produits (nom, prix, image, details) values ('USDC', '1.31', 'https://cryptologos.cc/logos/usd-coin-usdc-logo.png', 'le stable coin le plus utiliser sur le marcher')"
  );
  db.execute(
    "insert into Produits (nom, prix, image, details) values ('Cardano', '0.63', 'https://cryptologos.cc/logos/cardano-ada-logo.png', 'la blockchain avec le plus de potentiel')"
  );

  db.execute("drop table if exists Connexion;");
  db.execute(
    "CREATE TABLE IF NOT EXISTS Connexion (id INTEGER primary key autoincrement, usager TEXT, motdepasse TEXT, admin TEXT);"
  );
  db.execute(
    "insert into Connexion (usager, motdepasse, admin) values ('Frank','123456', '1')"
  );
  db.execute(
    "insert into Connexion (usager, motdepasse, admin) values ('Kesava','123456', '1')"
  );
  db.execute(
    "insert into Connexion (usager, motdepasse, admin) values ('Mum','123456', '0')"
  );
  db.execute(
    "insert into Connexion (usager, motdepasse, admin) values ('Bob','123456', '0')"
  );
  db.execute(
    "insert into Connexion (usager, motdepasse, admin) values ('Karen','123456', '0')"
  );
  db.execute(
    "insert into Connexion (usager, motdepasse, admin) values ('XGrosQcX420','123456', '0')"
  );


  db.execute("drop table if exists Panier;");
  db.execute(
    "CREATE TABLE IF NOT EXISTS Panier (id INTEGER primary key autoincrement, idUsager INTEGER, idProduit INTEGER, nom TEXT, prix REAL, image TEXT);"
  );
}



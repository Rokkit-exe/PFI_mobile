import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Database } from "./database";

export default function initData() {

  const db = new Database("Magasin");

  db.execute("drop table if exists Produits;");
  db.execute(
    "CREATE TABLE IF NOT EXISTS Produits (id INTEGER primary key autoincrement, nom TEXT, prix REAL, image TEXT);"
  );
  db.execute(
    "insert into Produits (nom, prix, image) values ('Bitcoin','37000', 'https://logos-world.net/wp-content/uploads/2020/08/Bitcoin-Logo.png')"
  );
  db.execute(
    "insert into Produits (nom, prix, image) values ('Ethereum','2500', 'https://logos-world.net/imageup/Ethereum/Ethereum_(8).png')"
  );
  db.execute(
    "insert into Produits (nom, prix, image) values ('BNB','354', 'https://coinarbitragebot.com/inc/coin_logos/bnb.png')"
  );
  db.execute(
    "insert into Produits (nom, prix, image) values ('Avalanche','39', 'https://cryptologos.cc/logos/avalanche-avax-logo.png')"
  );
  db.execute(
    "insert into Produits (nom, prix, image) values ('Solana','58', 'https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png')"
  );
  db.execute(
    "insert into Produits (nom, prix, image) values ('USDC', '1.31', 'https://cryptologos.cc/logos/usd-coin-usdc-logo.png')"
  );
  db.execute(
    "insert into Produits (nom, prix, image) values ('Cardano', '0.63', 'https://cryptologos.cc/logos/cardano-ada-logo.png')"
  );

  db.execute("drop table if exists Connexion;");
  db.execute(
    "CREATE TABLE IF NOT EXISTS Connexion (usager TEXT, motdepasse TEXT, admin TEXT);"
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

}



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
    "insert into Produits (nom, prix, image) values ('Bitcoin','37000', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fbitcoin.org%2F&psig=AOvVaw13RdaOX7FfWNOx3wni8YwW&ust=1652465548120000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCJibyoHI2vcCFQAAAAAdAAAAABAD')"
  );
  db.execute(
    "insert into Produits (nom, prix, image) values ('Ethereum','2500', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fgithub.com%2Fethereum&psig=AOvVaw2H_awJ-ve4Jbx7T-UGLMbG&ust=1652465642503000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCLDPqa_I2vcCFQAAAAAdAAAAABAD')"
  );
  db.execute(
    "insert into Produits (nom, prix, image) values ('BNB','354', 'https://coinarbitragebot.com/inc/coin_logos/bnb.png')"
  );
  db.execute(
    "insert into Produits (nom, prix, image) values ('Avalanche','39', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freelogovectors.net%2Favalanche-logo-avax%2F&psig=AOvVaw1I2ZnCPn-7neQR9N9U_Swb&ust=1652465757418000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCOCi2-fI2vcCFQAAAAAdAAAAABAJ')"
  );
  db.execute(
    "insert into Produits (nom, prix, image) values ('Solana','58', 'https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png')"
  );
  db.execute(
    "insert into Produits (nom, prix, image) values ('USDC', '1.31', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fcoinmarketcap.com%2Fcurrencies%2Fusd-coin%2F&psig=AOvVaw1HXJguzCpCLfpCDLxeS04b&ust=1652465901715000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCIDTs6rJ2vcCFQAAAAAdAAAAABAD')"
  );
  db.execute(
    "insert into Produits (nom, prix, image) values ('Cardano', '0.63', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fcoinmarketcap.com%2Fcurrencies%2Fcardano%2F&psig=AOvVaw1G1KazYQOW_CLNSD21w2vo&ust=1652466022765000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCPD1g-XJ2vcCFQAAAAAdAAAAABAD')"
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



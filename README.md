# 📝 TP INF222 - API REST Blog (TAF 1)

Ce projet consiste en le développement d'une API de gestion d'articles de blog, réalisé dans le cadre de l'UE **INF222** à l'**Université de Yaoundé I**. 

Ce travail pratique a été structuré et planifié à l'aide de l'outil d'apprentissage **CleeRoute**, permettant de suivre une progression pédagogique rigoureuse.

## 🚀 Fonctionnalités
L'API, développée avec **Node.js** et **Express**, implémente les routes suivantes :

- **Lister les articles** : `GET /api/articles`
- **Récupérer un article par ID** : `GET /api/articles/:id` (avec gestion de l'erreur 404)
- **Ajouter un article** : `POST /api/articles` (avec validation des champs obligatoires)
- **Supprimer un article** : `DELETE /api/articles/:id`
- **Recherche par mot-clé** : `GET /api/articles/search?query=...`

## 🛠️ Installation et Test
Pour exécuter ce projet localement :

1. Clonez le dépôt :
   ```bash
   git clone [https://github.com/bryana08/Tp_inf222_blog.git](https://github.com/bryana08/Tp_inf222_blog.git)

2.lancer le telechargement 
npm install

3. lancer le serveur
 node server.js

4.Testez les routes via le navigateur ou curl sur : http://localhost:3000

📊 Technologies utilisées
​Environnement : Node.js
​Framework : Express.js
​Format : JSON
​Méthodologie : CleeRoute
​Auteur : NONGNI TEMGOUA CHANNELLE BRYANA 
Niveau : Informatique Niveau 2, UY1
UE : INF 222 (Architectures de Services Internet)

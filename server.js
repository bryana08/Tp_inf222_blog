const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Liste initiale des articles
let articles = [
    {
        id: 1,
        titre: "Introduction au web",
        auteur: "Charles",
        date: "2026-03-18",
        categorie: "Technologie"
    }
];

// Route pour afficher tous les articles (GET)
app.get('/api/articles', (req, res) => {
    res.status(200).json(articles);
});
// Route pour créer un article avec validation
app.post('/api/articles', (req, res) => {
    const { titre, contenu, auteur, categorie, tags } = req.body;

    // --- Validation des entrées ---
    if (!titre || titre.trim() === "" || !auteur || auteur.trim() === "") {
        return res.status(400).json({ 
            error: "Validation échouée",
            message: "Le titre et l'auteur sont obligatoires." 
        });
    }

    // Création de l'objet article si la validation passe
    const nouvelArticle = {
        id: articles.length + 1,
        titre,
        contenu: contenu || "",
        auteur,
        date: new Date().toISOString().split('T')[0],
        categorie: categorie || "Général",
        tags: tags || []
    };

    articles.push(nouvelArticle);

    // Réponse avec succès (201 Created)
    res.status(201).json({
        message: "Article créé avec succès",
        article: nouvelArticle
    });
});
// Route pour ajouter un article (POST)
app.post('/api/articles', (req, res) => {
    const { titre, auteur, contenu, categorie, tags } = req.body;

    // Validation des entrées
    if (!titre || !auteur) {
        return res.status(400).json({ message: "Le titre et l'auteur sont obligatoires" });
    }

    const nouvelArticle = {
        id: articles.length + 1,
        titre,
        auteur,
        contenu: contenu || "",
        date: new Date().toISOString().split('T')[0],
        categorie: categorie || "Général",
        tags: tags || []
    };

    articles.push(nouvelArticle);
    res.status(201).json(nouvelArticle); // 201 = Création réussie
});
// Route pour supprimer un article (DELETE)
app.delete('/api/articles/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = articles.findIndex(a => a.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "Article non trouvé" }); // 404 si inexistant
    }

    articles.splice(index, 1);
    res.status(200).json({ message: "Article supprimé avec succès" });
});
 // Endpoint pour rechercher des articles
app.get('/api/articles/search', (req, res) => {
    const query = req.query.query; // On récupère le mot-clé depuis l'URL

    if (!query) {
        return res.status(400).json({ message: "Veuillez préciser un texte de recherche." });
    }

    // On filtre les articles dont le titre ou le contenu contient le mot-clé
    const resultats = articles.filter(a => 
        a.titre.toLowerCase().includes(query.toLowerCase()) || 
        (a.contenu && a.contenu.toLowerCase().includes(query.toLowerCase()))
    );

    res.status(200).json(resultats); // Retourne un tableau JSON
});
  // Route pour supprimer un article (DELETE)
app.delete('/api/articles/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = articles.findIndex(a => a.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "Article non trouvé" }); // 404 si inexistant
    }

    articles.splice(index, 1);
    res.status(200).json({ message: "Article supprimé avec succès" });
});
// Endpoint pour récupérer un article spécifique par son ID
app.get('/api/articles/:id', (req, res) => {
    const id = parseInt(req.params.id); // On récupère l'ID depuis l'URL
    const article = articles.find(a => a.id === id); // On cherche l'article

    // Si l'article n'existe pas
    if (!article) {
        return res.status(404).json({ 
            message: "L'article n'existe pas (Not Found)" 
        });
    }

    // Si l'article existe, on le renvoie avec le code 200
    res.status(200).json(article);
});
app.listen(PORT, () => {
    console.log(`Serveur lancé sur http://localhost:${PORT}`);
});


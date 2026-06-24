/* =========================================================================
   FICHES.JS — la liste de tes fiches de révision.

   POUR AJOUTER UNE FICHE :
   1. Dépose le fichier .html dans le même dossier que cette page.
   2. Copie le bloc « template » ci-dessous, colle-le dans la liste, remplis-le.
   3. Sauvegarde, pousse (ou re-déploie). C'est tout — la page se met à jour.

   Champs :
     titre        → le nom affiché sur la carte
     fichier      → le nom exact du fichier .html (ex: "ma-fiche.html")
     categorie    → la matière (sert aussi à regrouper et colorer les cartes)
     description  → une phrase courte
     date         → "AAAA-MM" ou "AAAA-MM-JJ" (facultatif)

   Couleur des cartes (déduite automatiquement de la catégorie) :
     Histoire / Géopolitique  → rouge brique
     Physique / Maths / Sciences → bleu ardoise
     Langues / Philo / Littérature → vert-de-gris
     (autre)                  → laiton

   TEMPLATE à copier :
     {
       titre: "",
       fichier: "",
       categorie: "",
       description: "",
       date: ""
     },
   ========================================================================= */

window.FICHES = [

  {
    titre: "La Grande Guerre 1914–1918",
    fichier: "premiere-guerre-mondiale.html",
    categorie: "Histoire & Géopolitique",
    description: "Causes profondes, étincelle de 1914, les quatre années de guerre, bilan et après-guerre. Frise interactive, dossiers dépliables et quiz.",
    date: "2026-06"
  },

  {
    titre: "L'Entre-deux-guerres 1919–1939",
    fichier: "entre-deux-guerres.html",
    categorie: "Histoire & Géopolitique",
    description: "De l'espoir de paix à la marche à la guerre : SDN, krach de 1929, montée des totalitarismes, apaisement. Frise « engrenage », comparaison des régimes et quiz.",
    date: "2026-06"
  }

  // ,{ titre: "...", fichier: "...", categorie: "...", description: "...", date: "..." }

];

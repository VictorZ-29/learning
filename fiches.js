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
  },

  {
    titre: "La Seconde Guerre mondiale 1939–1945",
    fichier: "seconde-guerre-mondiale.html",
    categorie: "Histoire & Géopolitique",
    description: "La guerre la plus meurtrière de l'histoire : embrasement, victoire alliée, guerre d'anéantissement (Shoah), une partie détaillée sur la France, bilan et nouvel ordre mondial.",
    date: "2026-06"
  },

  {
    titre: "Le Monde depuis 1945",
    fichier: "monde-depuis-1945.html",
    categorie: "Histoire & Géopolitique",
    description: "Guerre froide, les deux blocs (USA/URSS) et la construction européenne (CECA, CEE, UE). Frise des crises, comparaison des modèles, étapes de l'Europe et quiz.",
    date: "2026-06"
  },

  {
    titre: "La conjugaison italienne",
    fichier: "conjugaison-italienne.html",
    categorie: "Langues",
    description: "Tous les tableaux : trois groupes, auxiliaires essere/avere, temps composés, verbes irréguliers et mémo des terminaisons. Code couleur par groupe et encadrés « pièges franco-italiens ». Sans quiz, conçue pour la révision à l'écran.",
    date: "2026-06"
  },

  {
    titre: "Les mots les plus utiles en conversation",
    fichier: "mots-utiles-italien.html",
    categorie: "Langues",
    description: "Les petits mots qui font sonner l'italien comme on le parle : connecteurs (quindi, allora, magari…), mots de remplissage, réactions et formules de politesse. Pour chaque mot, un exemple et son registre — formel, neutre ou familier. 194 entrées, sans quiz.",
    date: "2026-06"
  }

  // ,{ titre: "...", fichier: "...", categorie: "...", description: "...", date: "..." }

];

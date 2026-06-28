/* =========================================================================
   FICHES.JS — la liste de tes fiches de révision.

   POUR AJOUTER UNE FICHE :
   1. Dépose le fichier .html dans le dossier « fiches/ ».
   2. Dans son <head>, lie les styles partagés (voir CLAUDE.md) :
        <link rel="stylesheet" href="../assets/base.css">
        <link rel="stylesheet" href="../assets/theme-histoire.css">   (ou theme-langues.css)
   3. Copie le bloc « template » ci-dessous, colle-le dans la liste, remplis-le.
   4. Sauvegarde, pousse (ou re-déploie). C'est tout — la page se met à jour.

   Champs :
     titre        → le nom affiché sur la carte
     fichier      → le chemin depuis la racine (ex: "fiches/ma-fiche.html")
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
       fichier: "fiches/",
       categorie: "",
       description: "",
       date: ""
     },
   ========================================================================= */

window.FICHES = [

  {
    titre: "La Grande Guerre 1914–1918",
    fichier: "fiches/premiere-guerre-mondiale.html",
    categorie: "Histoire & Géopolitique",
    description: "Causes profondes, étincelle de 1914, les quatre années de guerre, bilan et après-guerre. Frise interactive, dossiers dépliables et quiz.",
    date: "2026-06"
  },

  {
    titre: "L'Entre-deux-guerres 1919–1939",
    fichier: "fiches/entre-deux-guerres.html",
    categorie: "Histoire & Géopolitique",
    description: "De l'espoir de paix à la marche à la guerre : SDN, krach de 1929, montée des totalitarismes, apaisement. Frise « engrenage », comparaison des régimes et quiz.",
    date: "2026-06"
  },

  {
    titre: "La Seconde Guerre mondiale 1939–1945",
    fichier: "fiches/seconde-guerre-mondiale.html",
    categorie: "Histoire & Géopolitique",
    description: "La guerre la plus meurtrière de l'histoire : embrasement, victoire alliée, guerre d'anéantissement (Shoah), une partie détaillée sur la France, bilan et nouvel ordre mondial.",
    date: "2026-06"
  },

  {
    titre: "Le Monde depuis 1945",
    fichier: "fiches/monde-depuis-1945.html",
    categorie: "Histoire & Géopolitique",
    description: "Guerre froide, les deux blocs (USA/URSS) et la construction européenne (CECA, CEE, UE). Frise des crises, comparaison des modèles, étapes de l'Europe et quiz.",
    date: "2026-06"
  },

  {
    titre: "La conjugaison italienne",
    fichier: "fiches/conjugaison-italienne.html",
    categorie: "Langues",
    description: "Tous les tableaux : trois groupes, auxiliaires essere/avere, temps composés, verbes irréguliers et mémo des terminaisons. Code couleur par groupe et encadrés « pièges franco-italiens ». Sans quiz, conçue pour la révision à l'écran.",
    date: "2026-06"
  },

  {
    titre: "Les mots les plus utiles en conversation",
    fichier: "fiches/mots-utiles-italien.html",
    categorie: "Langues",
    description: "Les petits mots qui font sonner l'italien comme on le parle : connecteurs (quindi, allora, magari…), mots de remplissage, réactions et formules de politesse. Pour chaque mot, un exemple et son registre — formel, neutre ou familier. 194 entrées, sans quiz.",
    date: "2026-06"
  },

  {
    titre: "Les prépositions (simples & articulées)",
    fichier: "fiches/prepositions-italien.html",
    categorie: "Langues",
    description: "di, a, da, in, su, con, per, tra/fra et toutes leurs formes contractées (nel, sul, della, agli…) dans un tableau couleur. Emplois de chaque préposition avec exemple, et le chapitre qui règle le casse-tête : article ou pas (a Roma, in Italia, nel Lazio).",
    date: "2026-06"
  },

  {
    titre: "Le gérondif (stare + gerundio, essendo/avendo)",
    fichier: "fiches/gerondif-italien.html",
    categorie: "Langues",
    description: "Les trois constructions du gérondif — stare + gerundio (en train de), gérondif simple (en -ant) et composé (essendo/avendo + participe) — chacune avec ses emplois et un exemple. Et surtout le piège franco-italien : quand le français dit « -ant » mais que l'italien refuse le gérondif.",
    date: "2026-06"
  },

  {
    titre: "Les pronoms (COD, COI, combinés, ci & ne)",
    fichier: "fiches/pronoms-italien.html",
    categorie: "Langues",
    description: "Les quatre séries de pronoms — directs, indirects, toniques, plus ci et ne — chacune avec sa couleur et ses emplois. Le tableau des formes combinées (me lo, glielo, te ne) décomposées en deux morceaux colorés, le piège gli/le, et les règles de place. Le cœur de la difficulté italienne.",
    date: "2026-06"
  },

  {
    titre: "Passato prossimo vs imperfetto (le choix du temps)",
    fichier: "fiches/passato-imperfetto-italien.html",
    categorie: "Langues",
    description: "Non pas les formes mais le choix : l'événement (passato prossimo, en terracotta) contre le décor (imperfetto, en bleu). Les emplois de chacun, des paires minimales qui font basculer le sens, les verbes qui changent de sens (sapevo / ho saputo), et la frise « ligne vs points ».",
    date: "2026-06"
  },

  {
    titre: "Le subjonctif : quand l'employer (congiuntivo)",
    fichier: "fiches/subjonctif-italien.html",
    categorie: "Langues",
    description: "Non pas les formes mais le déclenchement : le déclencheur (terracotta) qui impose le congiuntivo (vert), face à l'indicatif (bleu) du fait certain. Les familles de déclencheurs, les conjonctions, les pièges franco-italiens (penso che + subjonctif !), la concordance des temps et l'hypothèse en se + congiuntivo.",
    date: "2026-06"
  }

  // ,{ titre: "...", fichier: "...", categorie: "...", description: "...", date: "..." }

];

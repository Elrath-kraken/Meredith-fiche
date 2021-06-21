Cette feuille de personnage est 100% modifiable pour votre personnage.

Je recommande d'installer Visual Studio Code pour éditer le code
https://code.visualstudio.com/

Instructions :

Dans le fichier index.html

Entrez vos weakness à la ligne 319 

Entrez vos resistances à la ligne 323 

Entrez vos immunitées à la ligne 327 

Entrez votre inventaire entre les tags 'ul' de la rareté correspondant à l'item que vous voulez ajouter. Pour les items attuned, ajoutez 'span class='w3-text-yellow'>Attuned</span' juste avant le tag '/li' (Remplacez les '' par <>)



Dans le fichier script.js 

Insérez vos informations de personnage aux lignes 1 à 14

Écrivez le bonus de vos armes, armures et wand aux lignes 17 à 21 (Attaque et DC pour wand, Attaque pour arme et AC pour armure)

Remplaces 'dexmod' pour la stat utilisée pour vos attaques (strmod pour strenght, dexmod pour dex) aux lignes 42 et 43

Remplacez 'intmod' pour la stat utilisée sur vos sorts (chamod pour charisme, intmod pour intel, wismod pour wisdom) aux lignes 44 et 45

Effacez les + pro et + exp actuellement présent et ajoutez les en fonction de votre proefficency en ces skills aux lignes 48 à 74 (pro pour proefficiency, exp pour expertise)



Ajoutez le portrait de votre personnage dans assets/img et renommez-la 'portrait.jpg'
Si l'image est sous un autre format que .jpg, il faudra changer le .jpg à la ligne 33 pour l'extension utilisées (.png dans la plupart des autres cas)

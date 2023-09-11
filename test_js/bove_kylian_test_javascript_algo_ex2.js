// Fonction pour vérifier si un tableau de 9 nombres est valide.
function isTableValid(numbers) {
    // Vérifier que le tableau a exactement 9 éléments
    if (numbers.length !== 9) {
        return false; // La longueur du tableau est incorrecte
    }

    // Créer un ensemble (Set) pour stocker les nombres déjà rencontrés
    var uniqueNumbers = new Set();

    for (var i = 0; i < 9; i++) {
        var num = numbers[i];
        
        // Vérifier que l'élément est un nombre et qu'il est compris entre 1 et 9
        if (typeof num !== 'number' || num < 1 || num > 9) {
            return false; // L'élément n'est pas valide
        }

        // Vérifier si le nombre a déjà été rencontré
        if (uniqueNumbers.has(num)) {
            return false; // Le nombre est en double
        }

        // Ajouter le nombre à l'ensemble des nombres uniques
        uniqueNumbers.add(num);
    }

    // Si toutes les vérifications sont passées, le tableau est valide
    return true;
}

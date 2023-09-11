// Création d'un tableau JavaScript 2D appelé "to_verify" pour stocker les données à vérifier.
// Il a 9 lignes et 9 colonnes.
var to_verify = new Array(9);
for (var i = 0; i < 9; i++) {
    to_verify[i] = new Array(9);
}

// Fonction "copyTable" pour copier les données de la source vers la cible.
// Prend en entrée une table source (tableau 1D) et une table cible (tableau 2D).
function copyTable(sourceTable, targetTable) {
    for (var i = 0; i < 9; i++) {
        // Sépare la chaîne de caractères en chiffres en utilisant l'espace comme séparateur.
        var row = sourceTable[i].split(" ");
        for (var j = 0; j < 9; j++) {
            targetTable[i][j] = parseInt(row[j]);
        }
    }
}

// Fonction "displayTable" pour afficher le contenu de la table sous forme d'un tableau HTML.
// Prend en entrée une table à afficher.
function displayTable(table) {
    var tableHTML = '<table border="1">';
    for (var i = 0; i < 9; i++) {
        tableHTML += '<tr>';
        for (var j = 0; j < 9; j++) {
            // Crée une cellule de tableau pour chaque élément de la table et l'ajoute au HTML.
            tableHTML += '<td class="sudoku-cell">' + table[i][j] + '</td>';
        }
        tableHTML += '</tr>';
    }
    tableHTML += '</table>';
    
    // Affiche le tableau HTML généré dans l'élément avec l'ID "output" de la page.
    outputDiv.innerHTML += tableHTML;
}

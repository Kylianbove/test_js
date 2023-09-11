var anomalies = []; // Tableau pour stocker les anomalies

// Fonction pour vérifier les lignes de la table
function checkRows() {
    for (var i = 0; i < 9; i++) {
        var row = to_verify[i]; // Récupère une ligne de la table to_verify
        var isValid = isTableValid(row); // Appelle une fonction pour vérifier si la ligne est valide

        if (!isValid) {
            // Si la ligne n'est pas valide, ajoute la ligne au tableau des anomalies
            anomalies.push("Ligne " + (i + 1) + " incorrecte " + row);
        }
    }
}

// Fonction pour vérifier les colonnes de la table
function checkColumns() {
    for (var j = 0; j < 9; j++) {
        var column = [];
        for (var i = 0; i < 9; i++) {
            column.push(to_verify[i][j]); // Récupère une colonne de la table à vérifier
        }
        var isValid = isTableValid(column); // Appelle une fonction pour vérifier si la colonne est valide

        if (!isValid) {
            // Si la colonne n'est pas valide, ajoute la colonne au tableau des anomalies
            anomalies.push("Colonne " + (j + 1) + " incorrecte " + column);
        }
    }
}

// Fonction pour vérifier les régions de la table
function checkRegions() {
    for (var r = 0; r < 3; r++) {
        for (var c = 0; c < 3; c++) {
            var region = [];
            for (var i = r * 3; i < (r + 1) * 3; i++) {
                for (var j = c * 3; j < (c + 1) * 3; j++) {
                    region.push(to_verify[i][j]); // Récupère une région de la table à vérifier
                }
            }
            var isValid = isTableValid(region); // Appelle une fonction pour vérifier si la région est valide

            if (!isValid) {
                // Si la région n'est pas valide, ajoute la région au tableau des anomalies
                anomalies.push("Région " + (r * 3 + c + 1) + " incorrecte " + region);
            }
        }
    }
}


// Fonction "displayTable2" pour afficher le contenu de la table sous forme d'un tableau HTML.
// Prend en entrée une table à afficher.
function displayTable2(table) {
    var tableHTML = '<table class="sudoku">';
    for (var i = 0; i < 9; i++) {
        if (i % 3 === 0 && i !== 0) {
            tableHTML += '</tr>';
        }
        tableHTML += '<tr>';
        for (var j = 0; j < 9; j++) {
            if (j % 3 === 0 && j !== 0) {
                tableHTML += '</td>';
            }
            // Crée une cellule de tableau pour chaque élément de la table et l'ajoute au HTML.
            tableHTML += '<td>';
            tableHTML += '<input type="text" class="sudoku-cell" value="' + table[i][j] + '" readonly>';
            tableHTML += '</td>';
        }
        tableHTML += '</tr>';
    }
    tableHTML += '</table>';
    
    // Affiche le tableau HTML généré dans l'élément avec l'ID "output" de la page.
    outputDiv3.innerHTML += tableHTML;
}
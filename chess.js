var chessTable = document.createElement("table");
chessTable.className = "Chess-Table";
var chessCellVerts = '  1122334455667788  ';
var chessCellHor = 'ABCDEFGH';
var chessFigures = [
    {
        pawn: "&#9823;",
        horse: "&#9822;",
        elephant: "&#9821;",
        rook: "&#9820;",
        queen: "&#9819;",
        king: "&#9818;"
    }
];
for (var i = 1, k = 0; i <= 10; i++) {
    var tr = document.createElement("tr");
    chessTable.append(tr);
    for (var j = 1, l = 0; j <= 10; j++) {
        var td = document.createElement("td");
        if (j % 10 == 0 || j % 10 == 1) {
            td.className = "Chess-Table-Border-Vert";
            if (j % 10 == 1) {
                td.className = "Chess-Table-Border-Vert Left";
            }
            td.innerHTML = chessCellVerts[k++];
        } else if (i % 10 == 1 || i % 10 == 0) {
            td.className = "Chess-Table-Border-Hor";
            if (i % 10 == 1) {
                td.className = "Chess-Table-Border-Hor Up";
            }
            td.innerHTML = chessCellHor[l++];
        } else if (j % 2 == 1 && i % 2 == 1) {
            td.className = "Chess-Table-Cell Black";
        } else if (j % 2 == 0 && i % 2 == 0) {
            td.className = "Chess-Table-Cell Black";
        } else {
            td.className = "Chess-Table-Cell";
        }

        for (var chessFigure of chessFigures) {
            if (i == 3 && j % 10 != 0 && j % 10 != 1) {
                td.innerHTML = chessFigure.pawn;
                td.style.color = "White";
                td.style.cursor = "pointer"
                td.style.transform = "rotate(0.5turn)";
            } else if (i == 8 && j % 10 != 0 && j % 10 != 1) {
                td.innerHTML = chessFigure.pawn;
                td.style.color = "Black";
                td.style.cursor = "pointer"
            } else if (i == 2 && j == 2 || i == 2 && j == 9) {
                td.innerHTML = chessFigure.rook;
                td.style.color = "White";
                td.style.cursor = "pointer"
                td.style.transform = "rotate(0.5turn)";
            } else if (i == 9 && j == 2 || i == 9 && j == 9) {
                td.innerHTML = chessFigure.rook;
                td.style.color = "Black";
                td.style.cursor = "pointer"
            } else if (i == 2 && j == 3 || i == 2 && j == 8) {
                td.innerHTML = chessFigure.horse;
                td.style.color = "White";
                td.style.cursor = "pointer"
                td.style.transform = "rotate(0.5turn)";
            } else if (i == 9 && j == 3 || i == 9 && j == 8) {
                td.innerHTML = chessFigure.horse;
                td.style.color = "Black";
                td.style.cursor = "pointer"
            } else if (i == 2 && j == 4 || i == 2 && j == 7) {
                td.innerHTML = chessFigure.elephant;
                td.style.color = "White";
                td.style.cursor = "pointer"
                td.style.transform = "rotate(0.5turn)";
            } else if (i == 9 && j == 4 || i == 9 && j == 7) {
                td.innerHTML = chessFigure.elephant;
                td.style.color = "Black";
                td.style.cursor = "pointer"
            } else if (i == 2 && j == 5) {
                td.innerHTML = chessFigure.queen;
                td.style.color = "White";
                td.style.cursor = "pointer"
                td.style.transform = "rotate(0.5turn)";
            } else if (i == 9 && j == 5) {
                td.innerHTML = chessFigure.queen;
                td.style.color = "Black";
                td.style.cursor = "pointer"
            } else if (i == 2 && j == 6) {
                td.innerHTML = chessFigure.king;
                td.style.color = "White";
                td.style.cursor = "pointer"
                td.style.transform = "rotate(0.5turn)";
            } else if (i == 9 && j == 6) {
                td.innerHTML = chessFigure.king;
                td.style.color = "Black";
                td.style.cursor = "pointer"
            }

        }
        tr.append(td);
    }
    document.querySelector("div").append(chessTable);
}
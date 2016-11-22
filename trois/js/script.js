$liste = document.getElementById("liste");
$suppr = document.getElementById("supprimer");
$rest = document.getElementById("restaurer");

function select(e) {
    e.target.classList.toggle("selected");
}

function supprimer() {
    for (i = 0; i < $liste.children.length; i++) {
        if ($liste.children[i].classList.contains("selected")) {
            $liste.children[i].classList.add("poubelle");
        }
    }
}

function restaurer() {
    for (i = 0; i < $liste.children.length; i++) {
        $liste.children[i].classList.remove("poubelle");
    }
}

$liste.onclick = select;
$suppr.onclick = supprimer;
$rest.onclick = restaurer;
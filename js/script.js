// Créer un trieur
// Au clic sur l'un des boutons, seulement les projets de la catégorie cliquée s'affiche. Au clique sur le bouton "tout", tous les projets sont à nouveau visible

const imageGalleryElts = document.querySelectorAll('.imageGallery');
const btnElts = document.querySelectorAll('#filters a');
let attribute;

function sortGallery() {
    for (let image of imageGalleryElts) {
        if (attribute === '*') {
            image.classList.remove('hide');
        }
        else if (!image.classList.contains(attribute)) {
            image.classList.add('hide');
        }
    }
}

function resetGallery() {
    for (let image of imageGalleryElts) {
        image.classList.remove('hide');
    }
}

function addClassActive(event) {
    resetGallery();
    if (!event.target.classList.contains('active')) {
        for (let btn of btnElts) {
            btn.classList.remove('active');
        }
        event.target.classList.add('active');
        attribute = event.target.getAttribute('data-filter');
    }
    sortGallery();
    console.log(event.target);
    console.log(attribute);
}

// Ajout de la class active au click et affectation du data-filter
for (let element of btnElts) {
    element.addEventListener('click', addClassActive);
}


// Bonus
// Au clic sur l'un des projets, une modale apparait avec l'image en plus grand format. Pour sortir de la modale, nous pouvons cliquer sur la croix en haut à droite de l'image, où sur l'overlay gris.
const modalElt = document.getElementById('modal');
const modalImgElt = modalElt.querySelector('img');
const modalCrossElt = modalElt.querySelector('span');
let attributeSrc;
//Ajout de la modal
for (let image of imageGalleryElts) {
    image.addEventListener('click', function() {
        console.log(this);
        console.log(this.childNodes);
        attributeSrc = this.childNodes[1].getAttribute('src');
        modalImgElt.src = attributeSrc;
        modalElt.classList.remove('hide');
        console.log(attributeSrc);
    });
}

//Sortie de la modal
modalCrossElt.addEventListener('click', function() {
    modalElt.classList.add('hide');
})

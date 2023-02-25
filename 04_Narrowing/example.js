"use strict";
function userReview(stars) {
    if (stars) {
        switch (stars) {
            case 1 || '1':
                console.log('1 estrela... Muito ruim.');
                break;
            case 2:
                console.log('2 estrelas. Dá pra ver');
                break;
            case 3:
                console.log('3 estrelas. Mediano');
                break;
            case 4:
                console.log('4 estrelas. Bom');
                break;
            case 5:
                console.log('5 estrelas! Perfeito!');
                break;
            default:
                alert('Avaliação inconclusiva');
        }
    }
    else {
        console.log('User não deixou avaliação');
    }
}
userReview();
userReview(5);
userReview(1);
userReview(0);

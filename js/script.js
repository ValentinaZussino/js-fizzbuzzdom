// prendo il quadratino
let square = document.querySelector('div.vz_square');
// creo ciclo
for(let i = 0; i < 100; i++){
    // inserisco fizzbuzz e aggiungo classe square
    if((i % 3 == 0) && (i % 5 === 0)){
        square.append('fizzbuzz');
        square.className = 'vz_square';
    }  else if (i % 3 === 0){ // inserisco fizz e aggiungo classe square
        square.append('fizz');
        square.className = 'vz_square';
    } else if (i % 5 === 0){ // inserisco buzz e aggiungo classe square
        square.append('buzz');
        square.className = 'vz_square';
    } else {
        square.append(i);
        square.className = 'vz_square';
    }
}
// prendo la row
const tabSquares = document.querySelector('div.row');
// inserisco i quadratini
tabSquares.append(square);
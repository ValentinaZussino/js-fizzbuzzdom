// prendo il contenitore
let vzContainer = document.querySelector('div.row');
// creo ciclo per inserire i quadratini
for(let i = 0; i < 100; i++){
    // creo elemento div per tutti
    const vzSquare = document.createElement('div');
    // inserisco fizzbuzz e aggiungo classe square
    if((i % 3 == 0) && (i % 5 === 0)){
        vzSquare.append('fizzbuzz');
        vzSquare.className = 'vz_square fizzbuzz';
        vzContainer.append(vzSquare);
    }  else if (i % 3 === 0){ // inserisco fizz e aggiungo classe square
        vzSquare.append('fizz');
        vzSquare.className = 'vz_square fizz';
        vzContainer.append(vzSquare);
    } else if (i % 5 === 0){ // inserisco buzz e aggiungo classe square
        vzSquare.append('buzz');
        vzSquare.className = 'vz_square buzz';
        vzContainer.append(vzSquare);
    } else { // inserisco i e aggiungo classe square
        vzSquare.append(i);
        vzSquare.className = 'vz_square';
        vzContainer.append(vzSquare);
    }
}

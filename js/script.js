// prendo il contenitore
let vzContainer = document.querySelector('div.row');
// creo ciclo per inserire i quadratini
for(let i = 0; i <= 100; i++){
    // creo elemento div e aggiungo classe square per tutti
    const vzSquare = document.createElement('div');
    vzSquare.className = 'vz_square';
    // inserisco fizzbuzz e aggiungo classe fizzbuzz
    if((i % 3 == 0) && (i % 5 === 0)){
        vzSquare.append('fizzbuzz');
        vzSquare.className += ' fizzbuzz';
    }  else if (i % 3 === 0){ // inserisco fizz e aggiungo classe fizz
        vzSquare.append('fizz');
        vzSquare.className += ' fizz';
    } else if (i % 5 === 0){ // inserisco buzz e aggiungo classe buzz
        vzSquare.append('buzz');
        vzSquare.className += ' buzz';
    } else { // inserisco i
        vzSquare.append(i);
    }
    vzContainer.append(vzSquare);
}

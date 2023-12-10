const Email = prompt('Inserire email, per favore.');
console.log('Email', Email, typeof Email);

const lista = [
    'Tonino@gmail.com'
];
console.log('lista', lista, typeof lista);

for (let i = 0; i < lista.length; i++) {
    console.log(i, lista[i]);

    if (lista[i] == Email) {
        console.log('Acesso consentito');
        i = lista.length;
    }
    else {
        alert('Accesso negato');
    }
}

const min = 1
const max = 6

const Giocatore = Math.floor(Math.random() * (max - min + 1)) + min;
console.log('Giocatore', Giocatore, typeof Giocatore);

const Computer = Math.floor(Math.random() * (max - min + 1)) + min;
console.log('Computer', Computer, typeof Computer);

if (Giocatore > Computer) {
    alert('Hai vinto!', `${Giocatore} vs. ${Computer}`);
}

else if (Giocatore < Computer) {
    alert('Hai perso!', `${Giocatore} vs. ${Computer}`);
}

else {
    alert('Pareggio!', `${Giocatore} vs. ${Computer}`);
}
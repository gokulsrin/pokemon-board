import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDVqA8gfGgPsXE2Hi6xAm5oNnNqOhSeyYg",
    authDomain: "pokemonboard-2158c.firebaseapp.com",
    databaseURL: "https://pokemonboard-2158c.firebaseio.com",
    storageBucket: "pokemonboard-2158c.appspot.com",
    projectId: "pokemonboard-2158c",
  
  };

    firebase.initializeApp(config);

    const database = firebase.database();
    const ourDB = firebase.database();
    const ourAuth = firebase.auth();

    export function addDog(dogName) {
        const dogs = firebase.database().ref('Dogs/');
        ourDB.red('Dogs/').push({ 
                dogName, dogBreed, link
        });
    export function removeDog(dogID){
        ourDB.ref('Dogs/' + dogID).remove();
    }
    export function fetchDogs(callBack){
        ourDB.ref('Dogs').on('value', (snapshot) => {
            const allDogs = snapshot.val();
            callBack(allDogs);
        });
    }
    export function updateName(id, newName) {
        ourDB.ref('Dogs/' + id).on('value', (snapshot) => {
            const updates = {dogName: newName};
            const whereToUpdate = ourDB.ref('Dogs/' + id);
            whereToUpdate.update(updates);
        });
    }
}

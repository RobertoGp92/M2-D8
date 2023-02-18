    //esercizio 1
    let x = "john";
    let y = "Doe"; 
    console.log(x + "<>" + y);



    //esercizio 2
    const persona = {
        name: "Francesco",
        surname: "Iacobelli",
        email: "franz.iaco@example.com"
    }

    console.log(persona);

    //esercizio 3
    delete persona.email;

    console.log(persona)


    //esercizio 4
    const array = ["Ciao", "film", "numero", "stringa", "sonno", "Roberto", "tazza", "8", "mouse", "radio"];

    //esercizio 5
    console.log(array)

    //esercizio 6
    const array = [];
    for (let i = 0; i < 100; i++){
    let numero = Math.floor(Math.random()*100);   
    array.push(numero) 
    }

    //esercizio 7
    function valore(array){
        let minimo;
        let massimo = 0;

        for (let t = 0; t < array.length; t++) {
            if(t == 0) {
                minimo = array[t];
                massimo = array[t];
            } else {
                if(minimo > array[t]){
                    minimo = array[t];
                }
                if(massimo < array[t]){
                    massimo = array[t];
                }
            }
        }
        
        return {
            'minimo' : minimo,
            'massimo': massimo
        }        
    }

    let results = valore(array);
    console.log("Minimo: " + results.minimo + " " + "Massimo: " + results.massimo)

    //esercizio 8
    let array = [];
    for (let i = 0; i < 5; i++) {
        let array2 = []; 
        for (let t = 0; t < 10 ; t++) {
        let numero = Math.floor(Math.random()*100);
        array2.push(numero)    
        } 
        array.push(array2)
    }
    console.log(array)

    //esercizio 9
    function isBigger(arr1, arr2) {
        if (arr1.length > arr2.length) {
            return arr1;
        } else if (arr1.length === arr2.length){
            return "Hanno stessa lunghezza"
        } else{
            return arr2;
        }
    }
    console.log(isBigger(["ciao", "8", "cane"], ["Gatto", "2"]));

    //esercizio 10
    function isBigger(arr1, arr2) {
           let totale1 = 0;
           for (i of arr1) {
            totale1 += i;      
           } 
           let totale2 = 0;
           for (i of arr2) {
            totale2 += i;
           }
           if (totale1 > totale2) {
            return arr1;
           } else if (totale1 === totale2) {
            return "Hanno la stessa somma totale";
           } else {
            return arr2;
           }
        } 
        console.log(isBigger([1, 3, 5, 9], [100]))


    
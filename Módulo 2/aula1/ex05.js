//Autor: Rafaela Rodrigues Reis
//Descrição: FizzBuzz - prática sobre a aula 1
function FizzBuzz(a, b, x, y, z){
    for(let i = 1; i <= 100; i++){ 
        if(i%a == 0 && i%b == 0){
            console.log(x);
        }else if(i%a == 0){
            console.log(y);
        }else if(i%b == 0){
            console.log(z);
        }else{
            console.log(i);
        }       
    }
}
FizzBuzz(3, 2, "Multiplo de 3 e 2", "Multiplo de 3", "Multiplo de 2");
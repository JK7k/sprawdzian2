function oblicz(){
    let liczba=document.getElementById("liczba").value;
    let wynik="";
    let bierna="";
    
    while(liczba>0){
        modulo=liczba%2;
        wynik=wynik+modulo
        liczba=Math.floor(liczba/2);
    }
    const tab = [document.getElementById("wynik")];
    tab.reverse()
    console.log(tab)
    document.getElementById("wynik").value=wynik;


}
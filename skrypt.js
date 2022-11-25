function oblicz(){
    let a1=document.getElementById("LiczbaA1").value;
    let an=document.getElementById("LiczbaAN").value;
    let n=document.getElementById("LiczbaN").value;
    wynik = (an-a1)/(n-1);
    document.getElementById("wynik").value=wynik;
}
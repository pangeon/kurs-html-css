# Ćwiczenia
## CSS
1. W pliku **style.css** zmień krój czcionki dla całego dokumentu.
2. W pliku **style.css** pogrub niebieskie nazwy planet w kartach (nagłówek h2).
3. W pliku **style.css** dodaj dodatkowe style w pseudoklasie klasy **.planet-card**, tak by po najechaniu kursorem na kartę planety pojawiała się ramka.
```
outline: 1px solid whitesmoke;
```
4. W pliku **style.css** zwróć uwagę na właściwości **transitions** oraz **transform**:
```
.planet-card {
    background-color: #2a2a2a;
    border-radius: 10px;
    padding: 15px;
    text-align: center;
    transition: transform 0.3s ease;
}

.planet-card:hover {
    transform: scale(1.03);
}
``` 
Zmień czas przejścia na 0.7s oraz skalę transformacji na 1.07. Czy widzisz zmianę?

## HTML
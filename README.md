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

5. Do projektu dodano nowy arkusz styli **menu.css** podepnij go we właściwy sposób do pliku **index.html**.
    - Zmień efekty kolorystyczne wywołane po najechaniu na poszczególne elementy.
    - Wprowadź delikatny efekt przejścia, by kolor po najechaniu kursorem zmieniał się stopniowo.

## HTML

1. Do galerii planet dodaj nową planetę Pluton:
    - link do grafiki: https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Pluto-01_Stern_03_Pluto_Color_TXT.jpg/1280px-Pluto-01_Stern_03_Pluto_Color_TXT.jpg
    - opis w Wikipedii: https://pl.wikipedia.org/wiki/(134340)_Pluton

2. Dodaj do utworzonego menu link do podstrony pluton.html, posługując się wyłącznie dostępnymi stylami **style.css, menu.css, reset.css**. Nadaj stronie ładny wygląd. Umieść na niej szczegółowe informacje o Plutonie z **Wikipedii**. Zadbaj o estetytykę.

## HTML/CSS

1. Do strony dodano link kontakt. Spraw by przekierowywał na osobną podstronę **kontakt.html**.
2. Podepnij to podstrony osobny plik **kontakt.css**.
3. Wykonaj na stronie kontakt formularz, niech jego wygląd nie odstaje od reszty strony (skorzystaj z generatora dostępnego z sieci by było łatwiej, poszukaj przykładów).
4. Nie zapomnij o linku powrotu na stronę główną jak na stronie **Plutona**.
5. Zacznij organizować pliki, wszystkie css umieść w osobnym folderu **css**, zmień ścieżki do plików css na stronach **HTML**.


# Link do aktualnej wersji strony

- [srv35804.seohost.com.pl](https://srv35804.seohost.com.pl/)

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

### 1.11.2025

1. Wykorzystując plik **info.txt**, który zawiera wszystkie informacje o pozostałych planetach:
    - stwórz strony: **merkury.html, wenus.html, ziemia.html, mars.html, jowisz.html, saturn.html, uran.html, neptun.html**.
    - podstrony muszą być dostępne z poziomu strony głównej w menu na górze, a także zawierać link powrotny.
    - wszystko sprowadza się do skopiowania podstrony pluton.html, podmianę nazw i treści, a także na dodaniu odpowiednich linków.
2. Strona kontakt korzysta z pliku **contact.css** gdzie wykorzystujesz, zmienne z nazwami kolorów:

    ```
    :root{
        --bg:#1a1a1a;
        --card:#2a2a2a;
        --accent:#333333;
        --muted:#4a9eff;
    }
    ...
    p.lead{
        font-weight: bolder;
        margin:0 0 2rem 0;
        color:var(--muted);
        font-size:0.95rem;
    }
    ```  
    są jednak miejsca gdzie kolory są zdeklarowane jawnie czyli np. **color: white**, zastosuj wszędzie gdzie to możliwe funkcje **var()**.

3. Na stronie kontakt, która korzysta z pliku **contact.css** gdzie wykorzystujesz zapytania o media:
    ```
    @media (max-width:560px){
        .row{ grid-template-columns:1fr; }
    }
    ```

    dzięki czemu strona wygląda dobrze na urządzeniach mobilnych. Spróbuj wykorzystać zapytania o media by ten sam efekt uzyskać na całej stronie, sprawdź jak wygląda ona w telefonie: [srv35804.seohost.com.pl](https://srv35804.seohost.com.pl/) i co można zmienić. Kiepsko wyglądają np. strony z planetami, gdyż tekst za mocno się zwija.

4. Spróbuj na stronie głównej index.html zrobić sekcję footer, miejsce gdzie można by umieścić informacje np. o autorze strony czy linki do mediów społecznościowych.
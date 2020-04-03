# Zavrsni-projekat

1. U komponenti App.js nalaze linkovi i rute do komponenti, da bi odredjene rute napravili javnim 
a ostale privatnim pozivaju se funkcije PublicRoute i Private route, 
koje na osnovu login funkcije iz auth.js procenjuju da l je korisnik ulogovan ili nije i 
na osnovu toga odredjuju da l imamo pristup željenim routama.

2. U Komponenti Login se na osnovu funkcije  postUser iz service.js prosledjuje api poziv serveru. 
a zatim se na osnovu odgovora u funkciji odredjuje da l korisnik ima nalog i može da pristupi sajtu(to se radi  
uz pomoc funkcije setToken iz auth.js koja setuje vrednost dobijenog tokena), ili je njegova zahtev odbijen.

3. U komponenti Register koja se manifestuje kao podkomponenta komponente Login imamo input polja i dugme,
 na pritisak dugmeta uz pomoc funkcije  handleRegistar koja u sebi poziva postRegistarComponent 
iz service.js se  podaci o korisniku prosledjuju serveru.
Uz prethodnu proveru da l su sva polja ispunjena, da l je mail adresa validna(pokusala) i da
 l se password i confirm password podudaraju. Na osnovu odgovora korisniku se salje informacija 
da l je registrovan, i ukoliko se javlja greska korisnik je upozoren da mail ili username mora da promeni.

4. U komponenti Home, u istoimenoj funkciji na osnovu vremena korisniku se ispisuje razlicita
 pozdravna poruka a u okviru ove funkcije koja se poziva HomeSlider koji  koristi 
Slider kao react-slick komponentu i on nam omogucava da slike listamo na ekranu.

5. U komponenti Select se na osnovu funkcije getCategories iz service.js uz pomoc get metode i api poziva kategorie pica uvoze se 
a zatim se dobije niz uz pomoc metode map rasporedjuju ka select option. U funkciji handleChange koja se realizuje na promenu select optiona
poziva se funkcija listOfDrinks iz service.js i njoj se kao parametri prosledjuje vrednost optiona.
 Dobijeni response se setuje u niz koji se zatim prosledjuje komponenti Paginition a metodom slice deli i prosledjuje 
komponenti koja se poziva ListOfAllDrinks, koja  renderuje
je razlicite kategorije pica. Dobijen niz pica se  uz pomoc funkcije Pagination rasporedjuje na zeljeni broj strana. 
Takode uz pomoc Zoom react-component izabrani div moze da uveca i smanji.



6. Komponenta Recipes ima istu koncepciju kao prethodna s tim sto se u njoj recepti 
filtriraju na osnovu unetog teksta u input polju. To obavlja funkcija, koja ukucani 
tekst u funkciji handleChange prosledjuje ListOfRecipes   iz service.js.i na taj nacin se dobija filtriran 
rezultat. U ovoj komponenti takode koristimo Pagination i Zoom.

7. U LogOut komponenti postoji tekst i dugme, na osnovu pritiska na dugme brise se token 
iz locallstorage i uz pomoc history.pusha se vracamo na Login komponentu.


GRESKE:
1.Slider se mora doraditi, radi ali izbacuje gresku.
2. U svim listama srediti key, pokusala na sve nacine nisam uspela.

Doraditi:
1.Jednu komponentu u kojoj ce korisnici moci da okace svoje recepte.
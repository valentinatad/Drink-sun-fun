# Zavrsni-projekat
## Drinks, sun & fun

U aplikaciji pod nazivom Drinks, sun & fun možete istražiti različite vrste pića i pronaći recepte za svoje omiljene napitke.
U ovom projektu postoje sledeće komponente:
1. Login - koja omogućava da se ulogujemo na sajt.
2. Register - koja registruje novog korisnika.
3. Home - gde se prikazuje pozdravna poruka i slider sa fotografijama.
4. All drinks  - u kojoj se odabirom kategorije, prikazuju pića iz te kategorije.
5. Recipes  - gde možete pronaći željeni recept.
6. Logout - gde se pritiskom na dugme odjavljujete se sa sajta.

Kako aplikacija izgleda  možete pogledati na:http://valentinatad.github.io/Zavrsni-Projekat1.

Više informacija o načinu funkcionisanja ovog projekta pogledajte u nastavku teksta.


Da bi ova aplikacija funkcionisala na samom pocetku morate instalirati sledece react-component:
*react-router-dom
*react-slick
*react-medium-image-zoom

### App
 U komponenti **App.js** nalaze linkovi i rute do komponenti, da bi odredjene rute napravili javnim 
a ostale privatnim pozivaju se funkcije **PublicRoute** i **Private route**, 
koje na osnovu **login** funkcije iz **auth.js** procenjuju da l je korisnik ulogovan ili nije i 
na osnovu toga odredjuju da l imamo pristup željenim routama, ili ne.

### Login
U Komponenti **Login** se na osnovu funkcije  **postUser** iz **service.js** prosledjuje api poziv serveru. 
a zatim se na osnovu odgovora u funkciji odredjuje da l korisnik ima nalog i može da pristupi sajtu(to se radi  
uz pomoc funkcije **setToken **iz **auth.js** koja setuje vrednost dobijenog tokena), ili je njegova zahtev odbijen.

### Register
U komponenti **Register** koja je definisana kao podkomponenta komponente **Login** imamo input polja i dugme,
 pritiskom na dugme uz aktivira se funkcija  **handleRegistar**. Ona  u sebi poziva **postRegistarComponent** 
iz **service.js**   i podatke o korisniku prosledjuju serveru.
Uz prethodnu proveru da l su sva polja ispunjena, da l je mail adresa validna i da
 l se password i confirm password podudaraju. Na osnovu responsa korisniku se salje informacija 
da l je registrovan, i ukoliko se javlja greska korisnik je upozoren da mail ili username mora da promeni.

### Home
U komponenti **Home**, postoji istoimena funkciji na osnovu vremena korisniku se ispisuje razlicita
 pozdravna poruka a u okviru ove komponente se poziva **HomeSlider** koji  koristi 
**Slider** kao react-slick komponentu, zahvaljujući kojem možemo da listamo slike na ekranu.

### All drinks
U komponenti **All drinks** poziva se podkomponenta **Select** u kojoj se na osnovu funkcije **getCategories** iz **service.js** kategorije pica uvoze,  zatim se dobije niz uz pomoc metode map rasporedjuju ka select option. U funkciji **handleChange** koja se realizuje na promenu select option-a poziva se funkcija **listOfDrinks** iz **service.js** i njoj se kao parametar prosledjuje vrednost optiona.
Dobijeni response se setuje u niz koji se zatim prosledjuje komponenti **Paginition** a metodom slice deli i prosledjuje 
komponenti  **ListOfAllDrinks**, koja  renderuje
je razlicite kategorije pica. Dobijen niz pica se  uz pomoc funkcije **Pagination** rasporedjuje na zeljeni broj strana. 
Takode uz pomoc **Zoom** react-medium-image-zoom izabrani div moze da uveca i smanji.

### Recipes

Komponenta **Recipes** ima istu koncepciju kao prethodna s tim sto se u njoj recepti 
filtriraju na osnovu unetog teksta u input polju. To obavlja funkcija handleChange, koja ukucani 
tekst kao paramatera prosledjuje funkciji **ListOfRecipes**   iz **service.js** i na taj nacin se dobija filtriran 
rezultat. U ovoj komponenti takode koristimo **Pagination** i **Zoom**.

### Logout

U **LogOut** komponenti postoji tekst i dugme, na osnovu pritiska na dugme briše se token 
iz locallstorage i uz pomoc history.pusha se vracamo na **Login** komponentu.



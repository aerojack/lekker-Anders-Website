# lekker anders

Deze website is ontwikkeld als een startup voor een nieuwe onderneming. De website is op gebouwd in een grid.
Om de grid te ondersteunen bij het soepel glijden van het ene pagina onderdeel naar het andere worden een aantal
libraries (Jquery) aangesproken. Dit is gedaan om de pagina makkelijker in te delen en de illusie te creëeren dat de pagina, 
een enorme pagina is. Een pagina die aan de hand van de navigatiebar over het hele pagina slingert om naar het gewenste deel dat de gebruiker wil bekijken te gaan.
Om lettertypes naar wens te ondersteunen zijn enkele (Google-fonts & Fontawesome) libraries aangesproken.


---
### Navigatie-bar

De website bevat aan de linkerkant een navigatie-bar. De iconen hierin zijn wit wanneer ze in ongebruikte zijn. Zodra de muis-pointer erover wordt gehouden veranderd de kleur naar pastelgroen en de kleur van het icoon veranderd in flessengroen wanneer de gebruiker zich bevindt op de desbetreffende pagina. Deze navigatie-bar bevindt zich altijd aan de linkerkant op de webpagina. De iconen zijn van boven naar beneden opgesteld. Er is een kleine stukje Javascript met de naam: navbar highlight.js. Hierin staat, zoals de titel al wel aangeeft een highlight instelling.

---
### Social media buttons

Buttons voor Social Media zijn geplaatst bovenin aan de rechterzijde van de webpagina. Eveneens zijn deze van boven naar 
beneden opgesteld. Afhankelijk welke vormen van social media er voor de ondernemening worden gebruikt kunnen de buttons hier worden
gekoppeld aan social media pagina's. Deze buttons zullen op elke pagina 

---
### Sub-logo animatie

Gekoppeld aan het logo op de homepage (en mogelijke meerdere pagina's) is een geanimeerde sub-logo. Deze start links op de 
pagina hoogte van het tweede icon van de navigatie-bar en slide met een rotatie naar de rechterkant van het bedrijfslogo
deze animatie word ondersteund met zijn eigen javascript file = sublogo.js in deze file is translate de afstand die het
sublogo aflegt in percentages zodat deze op iedere scherm verhouding responsive blijft. Verder staat de deegrees voor de
rotatie die het sublogo maakt verspreid over de duur van de afstand die die aflegt.
(mogelijke passen we dit toe op overige pagina's en wordt deze responsive op de agenda waardoor deze veranderd voor de 
desbetreffende aanwezige kok of cateraars)

---
### Carousel Slideshow

De carousel slideshow die op de home pagina wordt getoond, is gevuld met klikbare foto's die naar de juiste pagina's gaan.
Het heeft zijn eigen javascript genaamd: carousel.js en zijn eigen css genaamd carousel.css. In de javascript file staat
op regel 506 de autoplay beschreven met het genoemde getal 3000. dit staat voor 3 seconden. Wanneer een langzamere autoplay of 
snellere autoplay gewenst is.

---  
### Events
Om eigen facebook events te gebruiken op de site zal in facebookevents.php de file_get_contents moeten worden gewijzigd.

```
Dit kan door naar facebook te gaan en dan naar de facebook pagina
(bijvoorbeeld https://www.facebook.com/Lekker-andersss-160487437900700/)
en de code achter Lekker-andersss- te kopiëren en in file_get_contents te wijzigen
https://graph.facebook.com/160487437900700/events?access_token=1633445220011171|4b55bd7e097dfb8b1523f3c50c3ef13e");
```
---
### Home pagina

Wanneer je de site op komt start je als aller eerst op de home pagina. dit door middel van een heel klein stukje javascript
met de naam first page.js. Het carousel zit in het midden, de navigatie bar aan de linker kant, de social media buttons recht
en de event-calender gadget recht onder in. De sub-logo animatie speelt gelijk eenmalig af.

---
### Barista

Op deze pagina heb je een teaser voor de barista, de high tea en de lunch. de navigatie bar en social media weer op de
aangegeven pagina's en voor de rest niets.

---
### Koks

Alle koks en cateraars die gaan koken in het restaurant van deze ondernemer staan op deze pagina zodat alle geintreseerden
kunnen kijken wat ongeveer het aanbod zou zijn. Het overzichtje is grafisch gemaakt door de foto's van de kok's random over de
pagina te verspreiden. Een korte samenvatting over de desbetreffende persoon popt omhoog op het moment dat je er over heen
hangt met de muis-pointer en de foto's zelf zijn klikbaar zodat je door gestuurd word naar de webpagina of facebook van de 
persoon in kwestie.

---
### Ons aanbod

Hier vind de bezoeker van de pagina zijn of haar informatie wat deze onderneming te bieden heeft, een teaser met de verleiding om meer
te willen weten en bij het restaurant wilt gaan reseveren.

---
### Over ons

Over ons is ook een informatieve pagina waar men het verhaal achter de onderneming komt te weten.

---
### Reserveren en Contact
Om reserveren en contact te gebruiken heeft deze site een database nodig. 
In myql staat de database van de site, deze zal moeten worden geïmporteerd.

---
### Agenda

Wanneer de bezoeker hier op komen zou hij of zij een overzicht krijgen over wat er is en gaat komen door middel van facebook.
(Het sub-logo zou door middel van dit moeten veranderen.)

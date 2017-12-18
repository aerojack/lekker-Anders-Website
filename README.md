# lekker anders

Deze website is ontwikkeld als een startup voor een nieuwe onderneming. De website is op gebouwd in een grid.
Om de grid te ondersteunen bij het soepel glijden van het ene pagina onderdeel naar het andere worden een aantal
libraries (Jquery) aangesproken. Dit is gedaan om de pagina makkelijker in te delen en de illusie te creëeren dat de pagina, 
een enorme pagina is. Een pagina die aan de hand van de navigatiebar over het hele pagina slingert om naar het gewenste deel dat de gebruiker wil bekijken te gaan.
Om lettertypes naar wens te ondersteunen zijn enkele (Google-fonts & Fontawesome) libraries aangesproken.


---
### Navigatie-bar

De website bevat aan de linkerkant een navigatie-balk. De iconen hierin zijn wit wanneer ze ongebruikt zijn. Zodra de cursor van de muis erover wordt bewogen veranderd de kleur van de iconen naar pastelgroen. De kleur van een icoon veranderd in flessengroen wanneer de gebruiker zich bevindt op de desbetreffende pagina. Deze navigatie-balk bevindt zich altijd aan de linkerkant op de webpagina. De iconen zijn van boven naar beneden geplaatst. Er is een kleine stukje Javascript met de naam: navbar highlight.js. Hierin staat, zoals de titel al wel aangeeft een highlight instelling.

---
### Social Media buttons

Knoppen voor Social Media zijn geplaatst bovenin aan de rechterzijde van de webpagina. Deze zijn eveneens van boven naar 
beneden geplaatst. Welke vormen van social media er door de ondernemening ook worden gebruikt, hier kunnen de er worden gelinkt naar Social Media pagina's. De knoppen zullen op elke pagina zichtbaar zijn. 

---
### Sub-logo animatie

Gekoppeld aan het logo op de homepage (en mogelijke meerdere pagina's) is een geanimeerd sub-logo. Deze start links op de 
pagina (ter hoogte van het tweede icon van de navigatie-balk) en beweegt zich horizontaal en draaiend naar de rechterkant van het bedrijfslogo en komt daar tot stilstand.
De animatie heeft een eigen javascript file genaamd sublogo.js. In dit bestand staat onder andere
- Translate - (Regelt de afstand die het sublogo aflegt. Dit gebeurt in percentages zodat op ieder scherm de verhouding responsive blijft.) 
- Degrees - (Regelt het aantal rotaties dat het sublogo maakt om de afstand naar de rechterkant van het logo af te leggen.)

Momenteel is het sub-logo aanpasbaar om per week extra aandacht voor de kok van dienst te genereren. Mogelijke passen we het sub-logo ook toe op de overige pagina's en wordt het sub-logo tevens gelinkt aan de agenda.

---
### Carousel Slideshow

De foto-carrousel (slideshow) die op de startpagina wordt getoond, is gevuld met klikbare foto's die, wanneer er op een foto wordt geklikt naar de juiste pagina's gaan.
De foto-carrousel heeft zijn eigen JavaScript-bestand genaamd: carousel.js en ook zijn eigen CSS-bestand genaamd carousel.css. In het JavaScript-bestand staat op regel 506 de autoplay beschreven met het genoemde getal 3000. Dit staat voor 3 seconden voor een wisseling van foto. Wanneer een langzamere autoplay of snellere autoplay gewenst is past men het getal desgewenst aan.

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
### Home-page (Startpagina)

Wanneer je de website bezoekt start je  allereerst op de Home-page. Dit gebeurt door middel van een heel klein stukje javascript met de naam first page.js. Het carousel zit in het midden, de navigatie-balk aan de linkerkant, de social media knoppen aan de rechterkant van de webpagina. De evenementenkalender bevindt zich rechts onderin. De sub-logo animatie speelt direct (eenmalig).

---
### Barista

Op deze pagina heb je een lokkertje voor de barista, de high tea en de lunch. De  navigatie-balk en knoppen voor de social media bevinden zich ook op deze pagina.

---
### Koks

Alle koks en cateraars die gaan koken in het restaurant van deze ondernemer staan op deze pagina zodat alle geintreseerden
kunnen kijken wat ongeveer het aanbod is. Het overzichtje is grafisch gemaakt door de foto's van de kok's random over de
pagina te verspreiden. Een korte samenvatting over de desbetreffende persoon komt met een pop-up omhoog op het moment dat je er met de cursor van de muis overheen bewogen wordt. De foto's met potretten of logo's van de koks of cateraars zijn klikbaar zodat je door gestuurd word naar de webpagina of facebook van de persoon of het bedrijf in kwestie.

---
### Ons aanbod

Hier vindt de bezoeker van de Lekker Anders pagina informatie over wat Lekker Anders te bieden heeft, een teaser om bezoekers te verleiden meer te willen weten en bij het restaurant te willen reseveren.

---
### Over ons

Over ons is een informatieve pagina waar men het verhaal achter de onderneming komt te weten.

---
### Reserveren en Contact
Om reserveren en contact te gebruiken heeft deze site een database nodig. 
In Mysql staat de database van de site, deze zal moeten worden geïmporteerd.

---
### Agenda

Wanneer de bezoeker deze pagina bezoekt kan hij of zij informatie krijgen over wat er gaande is en/of gaat komen bij Lekker Anders door middel van facebook.
(Het sub-logo zal, indien goed gekopeld, door deze informatie ook moeten veranderen.)

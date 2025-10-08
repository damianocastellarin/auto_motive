# Raccolta Progetti Web

Questa repository contiene tutti i miei progetti web in HTML e CSS, organizzati secondo il principio dell'**Atomic Design**.

---

## Struttura delle cartelle

- `atoms/`  
  Contiene i componenti base del progetto, come:
  - pulsanti (buttons)  
  - campi di input e form elementari  
  - icone  
  - colori e stili tipografici

- `molecules/`  
  Combinazioni di atomi per creare componenti più complessi:
  - form completi  
  - card  
  - menu a tendina  

- `organisms/`  
  Gruppi di molecole e atomi che formano sezioni complete della pagina:
  - header  
  - footer  
  - sidebar  

- `pages/`  
  Pagine complete che utilizzano gli organismi, le molecole e gli atomi.

- `assets/`  
  Contiene immagini, font e altre risorse statiche.

---

## Come usare i file

1. Aprire i file `.html` nel browser per vedere il risultato.  
2. Collegare i file CSS/JS contenuti nelle rispettive cartelle.  
3. Tutti i componenti possono essere riutilizzati e combinati per creare nuove pagine o layout.

---

## Tecnologie

- HTML5  
- CSS3 (con possibilità di usare librerie come Bootstrap o Tailwind via CDN)  

---

## Note

- Ogni componente è separato per facilitare la manutenzione e il riuso.  
- Seguo la filosofia **Atomic Design**, partendo dagli atomi fino agli organismi e alle pagine complete.

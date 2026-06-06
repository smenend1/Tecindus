# Tecnologia Industrial Educativa Plus

PWA educativa en català per a Tecnologia Industrial I i II de Batxillerat.

## Contingut

- Situacions d’aprenentatge guiades.
- Eines tècniques amb resultat, procediment i interpretació.
- Espai docent per crear, importar i guardar SA.
- Desplegables curriculars per afegir objectius, criteris, competències, blocs, sabers, vectors, evidències i instruments.
- Rúbriques amb NA, AS, AN i AE.
- Autoavaluació de l’alumnat.
- Funcionament offline amb Service Worker.
- Preparada per GitHub Pages.

## Publicació a GitHub Pages

1. Puja tots els fitxers a un repositori.
2. Activa GitHub Pages des de Settings > Pages.
3. Tria la branca `main` i la carpeta arrel.
4. Obre l’URL publicada i instal·la la PWA des del navegador.

## Nota sobre DOCX

La importació DOCX és bàsica perquè no s’utilitzen llibreries externes. Per a importacions fiables, és millor usar JSON o TXT amb camps en majúscules.


## Correcció de visualització
Aquesta versió incorpora el CSS també dins `index.html` com a còpia de seguretat. Això evita que GitHub Pages mostri la pàgina sense estils si `styles.css` no es carrega o si el navegador conserva una versió antiga a la memòria cau.

Si després de pujar-la encara es veu sense format, cal obrir el menú del navegador i fer “Actualitza” o esborrar les dades del lloc perquè el Service Worker antic pot estar servint fitxers antics.

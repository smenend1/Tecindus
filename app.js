'use strict';

const STORAGE_KEY = 'ti_sa_creades_v1';
const SETTINGS_KEY = 'ti_settings_v1';

const curriculum = {
  comunes: {
    competenciesEspecifiques: [
      'Competència tecnològica',
      'Competència en experimentació',
      'Competència en modelització i simulació'
    ],
    competenciesTransversals: [
      'Competència comunicativa',
      'Competència en recerca',
      'Gestió i tractament de la informació',
      'Competència digital',
      'Competència personal i interpersonal',
      'Coneixement i interacció amb el món'
    ],
    objectius: [
      '1. Concebre la tecnologia com una interrelació d’àmbits tècnics, científics, històrics, econòmics i socials.',
      '2. Comprendre i analitzar màquines i sistemes tècnics.',
      '3. Explicar processos tecnològics i valorar la investigació en nous productes i sistemes.',
      '4. Utilitzar terminologia, simbologia, instruments i mètodes dels processos tecnològics.',
      '5. Descriure propietats dels materials d’ús industrial i les seves aplicacions.',
      '6. Reconèixer el paper de l’energia i adoptar actituds d’estalvi i eficiència energètica.',
      '7. Analitzar aparells i productes tecnològics per explicar-ne funcionament, aplicació i qualitat.',
      '8. Projectar, muntar, simular i experimentar circuits o sistemes elementals amb seguretat.',
      '9. Valorar repercussions socials, econòmiques i ambientals de l’activitat tecnològica.',
      '10. Actuar amb autonomia, confiança i seguretat en màquines, sistemes i processos tècnics.'
    ],
    vectors: [
      'Aprenentatges competencials',
      'Perspectiva de gènere',
      'Universalitat del currículum',
      'Qualitat de les llengües',
      'Ciutadania democràtica i consciència global',
      'Benestar emocional'
    ],
    metodologia: [
      'Aprenentatge basat en reptes',
      'Aprenentatge basat en projectes tecnològics',
      'Experimentació guiada al taller o laboratori',
      'Simulació i modelització de circuits, màquines o sistemes',
      'Anàlisi de casos reals i presa de decisions tècniques',
      'Treball cooperatiu amb rols tècnics',
      'Resolució de problemes amb càlcul, esquema i justificació'
    ],
    organitzacio: [
      'Treball individual amb posada en comú',
      'Treball en parelles',
      'Equips cooperatius de 3 o 4 alumnes',
      'Rotació per estacions de treball',
      'Treball de taller amb normes de seguretat',
      'Debat tècnic i defensa oral de la proposta'
    ],
    recursos: [
      'Fitxes tècniques i catàlegs de materials o màquines',
      'Simuladors i eines digitals sense dependències externes',
      'Multímetre, font d’alimentació i components elèctrics bàsics',
      'Elements pneumàtics o electropneumàtics de demostració',
      'Estris de dibuix tècnic, croquis i esquemes normalitzats',
      'Taules de propietats, factors energètics i criteris de selecció',
      'Materials de taller i eines de mesura'
    ],
    mesuresSuports: [
      'Guia pas a pas amb exemple resolt',
      'Plantilla d’informe tècnic',
      'Glossari de vocabulari tecnològic',
      'Llista de comprovació d’unitats i dades',
      'Opcions d’ampliació per a l’alumnat avançat',
      'Agrupaments flexibles i suport entre iguals',
      'Representacions visuals, esquemes i models simplificats'
    ],
    evidencies: [
      'Informe tècnic final',
      'Càlculs amb unitats i procediment',
      'Esquema, croquis o diagrama de blocs',
      'Taula comparativa o justificació de selecció',
      'Resultats de simulació o experimentació',
      'Defensa oral o presentació breu',
      'Autoavaluació i proposta de millora'
    ],
    instruments: [
      'Rúbrica final amb nivells NA, AS, AN i AE',
      'Llista de control del procés tècnic',
      'Observació docent durant el treball',
      'Coavaluació de l’equip',
      'Autoavaluació individual',
      'Revisió del quadern o dossier de treball'
    ],
    retornMillora: [
      'Feedback docent escrit sobre dades, procediment i justificació',
      'Revisió d’errors d’unitats, simbologia i vocabulari',
      'Millora iterativa del producte final',
      'Comparació entre proposta inicial i proposta millorada',
      'Reflexió sobre seguretat, eficiència, cost i impacte'
    ]
  },
  ti1: {
    label: 'Tecnologia Industrial I',
    blocs: [
      'Procés tecnològic i producció industrial',
      'Materials',
      'Sistemes energètics',
      'Màquines i sistemes',
      'Processos de fabricació'
    ],
    sabers: [
      'Evolució tecnològica i relació entre ciència, tecnologia i societat',
      'Procés tecnològic i organització industrial',
      'Disseny, innovació i millora de productes',
      'Planificació, gestió, comercialització, qualitat, normalització i seguretat',
      'Classificació, estructura interna, propietats i aplicacions dels materials',
      'Obtenció, transformació, aliatges, nous materials i impacte ambiental',
      'Fonts d’energia, generació, transformació, transport i distribució',
      'Consum responsable, estalvi i eficiència energètica',
      'Màquines simples, unions, mecanismes i transmissió de moviment',
      'Pneumàtica bàsica, circuits elèctrics, simbologia, muntatge i simulació',
      'Processos de fabricació, màquines, eines, manteniment, seguretat i residus'
    ],
    criteris: [
      'TI1-1 Avaluar repercussions socials, econòmiques i mediambientals de l’activitat industrial i proposar millores.',
      'TI1-2 Argumentar idees pròpies sobre objectes i productes fabricats mitjançant processos tecnològics.',
      'TI1-3 Descriure materials industrials, propietats, aplicacions i adequació a una finalitat concreta.',
      'TI1-4 Reconèixer processos d’obtenció d’energia i valorar eficiència i consum responsable.',
      'TI1-5 Calcular el cost energètic d’un local o habitatge i suggerir alternatives d’estalvi.',
      'TI1-6 Identificar elements funcionals, estructures, mecanismes i circuits d’una màquina o sistema.',
      'TI1-7 Descriure un procés de fabricació i valorar-ne raons econòmiques i repercussions ambientals.',
      'TI1-8 Utilitzar vocabulari tècnic apropiat per descriure elements, processos i sistemes tecnològics.',
      'TI1-9 Utilitzar representació gràfica, normalització, simbologia i aplicacions informàtiques.',
      'TI1-10 Muntar, experimentar i simular circuits elèctrics, pneumàtics i de transformació d’energia amb autonomia i seguretat.'
    ]
  },
  ti2: {
    label: 'Tecnologia Industrial II',
    blocs: [
      'Materials: oxidació, corrosió, assaigs, metrotècnia i reciclatge',
      'Màquines tèrmiques i elèctriques',
      'Oleohidràulica i electropneumàtica',
      'Sistemes automàtics',
      'Control i programació de sistemes automàtics',
      'Sistemes digitals i àlgebra de Boole'
    ],
    sabers: [
      'Oxidació, corrosió i tractaments superficials dels materials',
      'Assaigs de materials, metrotècnia, reciclatge i normes d’ús i seguretat',
      'Formes comercials dels materials',
      'Principis de màquines, energia útil, potència, parell, pèrdues i rendiment',
      'Màquines tèrmiques: classificació, funcionament i aplicacions',
      'Màquines elèctriques: classificació, funcionament i circuits d’aplicació',
      'Calefacció, refrigeració i bomba de calor',
      'Oleohidràulica: producció, condicionament i distribució de fluids',
      'Accionament, regulació i control en circuits oleohidràulics i electropneumàtics',
      'Sistemes automàtics de llaç obert i llaç tancat',
      'Transductors, captadors, actuadors, controladors, consigna i comparadors',
      'Sistemes digitals, àlgebra de Boole i portes lògiques',
      'Circuits combinacionals i seqüencials',
      'Control programat, autòmats programables i programació rígida o flexible'
    ],
    criteris: [
      'TI2-1 Descriure tractaments superficials, assaigs, mesures i normes d’ús i seguretat dels materials.',
      'TI2-2 Seleccionar materials per a una aplicació pràctica segons propietats i característiques tècniques.',
      'TI2-3 Identificar parts de motors tèrmics i elèctrics i descriure’n funcionament i aplicacions.',
      'TI2-4 Determinar paràmetres nominals d’una màquina o instal·lació.',
      'TI2-5 Descriure circuits oleohidràulics i electropneumàtics i identificar-ne els elements.',
      'TI2-6 Muntar, experimentar i simular circuits electropneumàtics amb autonomia i seguretat.',
      'TI2-7 Analitzar una màquina o sistema automàtic i identificar elements de comandament, control i potència.',
      'TI2-8 Experimentar circuits de control mitjançant programes de simulació o simuladors.',
      'TI2-9 Aplicar recursos gràfics i tècnics per descriure una màquina, circuit o sistema i calcular magnituds bàsiques.',
      'TI2-10 Muntar, comprovar i programar circuits digitals lògics i de control amb autonomia i seguretat.'
    ]
  }
};

const saBase = [
  makeSA('ti1-centre','Dissenyem una millora tecnològica per a un espai del centre','Tecnologia Industrial I','Procés tecnològic i producció industrial','Detectar una necessitat real del centre i proposar una solució tècnica viable.','Fitxa tècnica, croquis i justificació de la proposta.', ['TI1-PT-1','TI1-ARG-1','TI1-COM-1','TI1-REP-1']),
  makeSA('ti1-material','Escollim el material més adequat per fabricar una peça','Tecnologia Industrial I','Materials','Seleccionar un material segons propietats, cost, ús i sostenibilitat.','Informe comparatiu de materials.', ['TI1-MAT-1','TI1-ARG-1','TI1-PT-1']),
  makeSA('ti1-energia','Analitzem el consum energètic d’un espai i proposem millores','Tecnologia Industrial I','Sistemes energètics','Calcular el consum d’un espai i proposar millores d’eficiència.','Informe d’eficiència energètica.', ['TI1-ENE-1','TI1-ENE-2','TI1-ARG-1']),
  makeSA('ti1-circuit','Simulem un circuit elèctric bàsic per a una aplicació real','Tecnologia Industrial I','Màquines i sistemes','Dissenyar un circuit senzill i justificar-ne les magnituds.','Esquema, càlculs i explicació funcional.', ['TI1-MAQ-1','TI1-EXP-1','TI1-REP-1']),
  makeSA('ti1-mecanisme','Dissenyem un mecanisme de transmissió de moviment','Tecnologia Industrial I','Màquines i sistemes','Escollir un mecanisme per adaptar velocitat, força o moviment.','Esquema del mecanisme i càlcul de transmissió.', ['TI1-MAQ-1','TI1-REP-1','TI1-COM-1']),
  makeSA('ti1-fabricacio','Analitzem el procés de fabricació d’un producte quotidià','Tecnologia Industrial I','Processos de fabricació','Estudiar com es fabrica un producte i valorar alternatives.','Diagrama de procés i informe tècnic.', ['TI1-FAB-1','TI1-PT-1','TI1-ARG-1']),
  makeSA('ti1-impacte','Valorem l’impacte ambiental d’un material o procés industrial','Tecnologia Industrial I','Materials i processos industrials','Comparar alternatives i justificar la més sostenible.','Informe argumentat amb criteris tècnics i ambientals.', ['TI1-PT-1','TI1-MAT-1','TI1-FAB-1']),
  makeSA('ti2-assaigs','Seleccionem un material a partir d’assaigs i propietats','Tecnologia Industrial II','Materials','Interpretar dades d’assaigs i triar el material més adequat.','Informe de selecció de material.', ['TI2-MAT-1','TI2-MAT-2','TI2-REP-1']),
  makeSA('ti2-rendiment','Analitzem el rendiment d’una màquina tèrmica o elèctrica','Tecnologia Industrial II','Màquines tèrmiques i elèctriques','Calcular potència útil, pèrdues i rendiment.','Informe de rendiment i proposta de millora.', ['TI2-MAQ-1','TI2-MAQ-2','TI2-CTRL-1']),
  makeSA('ti2-placa','Interpretem una placa de característiques d’un motor','Tecnologia Industrial II','Màquines elèctriques','Extreure dades nominals i justificar l’ús del motor.','Fitxa tècnica interpretada.', ['TI2-MAQ-2','TI2-REP-1','TI2-MAQ-1']),
  makeSA('ti2-pneumatica','Dissenyem i interpretem un circuit pneumàtic o electropneumàtic','Tecnologia Industrial II','Oleohidràulica i electropneumàtica','Proposar un circuit amb actuador, vàlvules i comandament.','Esquema i explicació funcional.', ['TI2-PNE-1','TI2-EXP-1','TI2-REP-1']),
  makeSA('ti2-control','Simulem un sistema automàtic de control','Tecnologia Industrial II','Sistemes automàtics','Identificar entrada, procés, sortida i retroalimentació.','Diagrama de blocs i justificació.', ['TI2-AUT-1','TI2-CTRL-1','TI2-REP-1']),
  makeSA('ti2-llacos','Analitzem un sistema de llaç obert i llaç tancat','Tecnologia Industrial II','Sistemes automàtics','Comparar dues formes de control i valorar-ne limitacions.','Comparativa tècnica.', ['TI2-AUT-1','TI2-CTRL-1','TI2-REP-1']),
  makeSA('ti2-logica','Dissenyem una solució amb portes lògiques','Tecnologia Industrial II','Sistemes digitals i àlgebra de Boole','Resoldre una condició de control amb portes lògiques.','Taula de veritat, expressió booleana i esquema.', ['TI2-DIG-1','TI2-CTRL-1','TI2-REP-1']),
  makeSA('ti2-automatitzat','Proposem un sistema automatitzat amb sensors, actuadors i controlador','Tecnologia Industrial II','Control i programació de sistemes automàtics','Dissenyar conceptualment un sistema automatitzat realista.','Esquema funcional, diagrama de blocs i justificació.', ['TI2-AUT-1','TI2-CTRL-1','TI2-DIG-1'])
];

const toolDefs = [
  {id:'materials', title:'Materials: massa, cost i selecció', fields:[['densitat','Densitat ρ (kg/m³)'],['volum','Volum V (m³)'],['preu','Preu (€/kg)'],['resistencia','Resistència requerida o nota tècnica']], calc: calcMaterials},
  {id:'energia', title:'Energia, cost, rendiment i emissions', fields:[['potencia','Potència P (W)'],['temps','Temps t (h)'],['preuKwh','Preu energia (€/kWh)'],['util','Energia útil (kWh)'],['factor','Factor CO₂ (kg/kWh)']], calc: calcEnergia},
  {id:'electricitat', title:'Electricitat bàsica: Ohm i potència', fields:[['v','Tensió V (V)'],['i','Intensitat I (A)'],['r','Resistència R (Ω)'],['temps','Temps d’ús (h)']], calc: calcElectricitat},
  {id:'resistencies', title:'Resistències en sèrie i paral·lel', fields:[['res','Resistències separades per comes (Ω)'],['tipus','Tipus: serie o parallel']], calc: calcResistencies},
  {id:'mecanismes', title:'Mecanismes: transmissió i velocitat', fields:[['entrada','Velocitat d’entrada (rpm)'],['conductor','Diàmetre o dents conductor'],['conduida','Diàmetre o dents conduïda'],['potencia','Potència (W)']], calc: calcMecanismes},
  {id:'pneumatica', title:'Pneumàtica i oleohidràulica', fields:[['pressio','Pressió p (bar)'],['diametre','Diàmetre del cilindre (mm)'],['cabal','Cabal Q (L/min)']], calc: calcPneumatica},
  {id:'maquines', title:'Màquines tèrmiques i elèctriques', fields:[['absorvida','Potència absorbida (W)'],['util','Potència útil (W)'],['rpm','Velocitat (rpm)']], calc: calcMaquines},
  {id:'automatics', title:'Sistemes automàtics', fields:[['entrada','Entrada'],['proces','Procés'],['sortida','Sortida'],['sensor','Sensor o retroalimentació'],['actuador','Actuador'],['controlador','Controlador']], calc: calcAutomatics},
  {id:'logica', title:'Lògica digital', fields:[['expr','Expressió amb A, B, C i AND OR NOT. Exemple: A AND (B OR NOT C)']], calc: calcLogica},
  {id:'fabricacio', title:'Processos de fabricació', fields:[['material','Material'],['forma','Forma o producte'],['quantitat','Quantitat de peces'],['precisio','Precisió requerida'],['impacte','Prioritat ambiental']], calc: calcFabricacio}
];

let state = {
  view:'inici',
  course:'Tecnologia Industrial I',
  selectedSa:'ti1-centre',
  level:'N2',
  docenteTab:'ident',
  currentDoc: blankSA(),
  settings: loadSettings()
};

const app = document.getElementById('app');
const printArea = document.getElementById('printArea');
const toast = document.getElementById('toast');

document.addEventListener('DOMContentLoaded', init);

function init(){
  document.querySelectorAll('.tab').forEach(btn=>btn.addEventListener('click',()=>setView(btn.dataset.view)));
  if('serviceWorker' in navigator){navigator.serviceWorker.register('sw.js').catch(()=>{});}
  render();
}
function setView(view){state.view=view; document.querySelectorAll('.tab').forEach(b=>b.classList.toggle('active', b.dataset.view===view)); render(); app.focus();}
function render(){
  const views={inici:renderInici, sa:renderSA, eines:renderEines, docent:renderDocent, auto:renderAuto};
  app.innerHTML=views[state.view]();
  bindCommon();
  if(state.view==='docent') bindDocent();
  if(state.view==='eines') bindEines();
  if(state.view==='sa') bindSA();
  if(state.view==='auto') bindAuto();
}
function bindCommon(){
  app.querySelectorAll('[data-go]').forEach(b=>b.addEventListener('click',()=>setView(b.dataset.go)));
  app.querySelectorAll('[data-print-current]').forEach(b=>b.addEventListener('click',()=>printSA(getSelectedSA())));
  app.querySelectorAll('[data-copy-current]').forEach(b=>b.addEventListener('click',()=>copyReport(getSelectedSA())));
}

function renderInici(){
  return `<section class="hero"><div class="card soft"><h2>Eina docent i d’aprenentatge per a Tecnologia Industrial</h2><p>Aquesta PWA permet treballar situacions d’aprenentatge de Tecnologia Industrial I i II, crear fitxes docents, utilitzar eines tècniques de càlcul i generar rúbriques amb nivells NA, AS, AN i AE.</p><div class="quick"><button class="btn" data-go="docent">Crear una SA</button><button class="btn secondary" data-go="sa">Treballar una SA</button><button class="btn ghost" data-go="docent">Importar una SA</button><button class="btn ghost" data-print-current>Exportar informe</button></div></div><div class="card"><h3>Funcionament per nivells</h3>${['N1 · entendre i identificar','N2 · calcular i representar','N3 · modelitzar, simular i justificar','N4 · optimitzar, valorar impacte i transferir'].map(x=>`<span class="pill">${esc(x)}</span>`).join('')}</div></section><section class="grid two"><div class="card"><h3>Tecnologia Industrial I</h3><ul class="list">${curriculum.ti1.blocs.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div><div class="card"><h3>Tecnologia Industrial II</h3><ul class="list">${curriculum.ti2.blocs.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div></section><section class="card"><h3>Què inclou?</h3><div class="grid four"><div class="panel"><strong>Situacions d’aprenentatge</strong><p class="muted small">Banc inicial i SA creades pel docent.</p></div><div class="panel"><strong>Eines tècniques</strong><p class="muted small">Materials, energia, electricitat, mecanismes, pneumàtica, màquines, control, lògica i fabricació.</p></div><div class="panel"><strong>Informes</strong><p class="muted small">Fitxa docent formal preparada per imprimir o desar en PDF.</p></div><div class="panel"><strong>Offline</strong><p class="muted small">Funciona després de la primera càrrega gràcies al Service Worker.</p></div></div></section>`;
}

function allSAs(){ return [...saBase, ...loadCustomSAs()]; }
function getSelectedSA(){return allSAs().find(s=>s.id===state.selectedSa)||allSAs()[0];}
function renderSA(){
  const sas = allSAs().filter(s=>s.curs===state.course);
  if(!sas.find(s=>s.id===state.selectedSa)) state.selectedSa=sas[0]?.id || allSAs()[0].id;
  const sa=getSelectedSA();
  return `<section class="card"><h2>Treballar una situació d’aprenentatge</h2><div class="form-row"><div class="field"><label>Curs</label><select id="courseSel"><option ${state.course==='Tecnologia Industrial I'?'selected':''}>Tecnologia Industrial I</option><option ${state.course==='Tecnologia Industrial II'?'selected':''}>Tecnologia Industrial II</option></select></div><div class="field"><label>Situació d’aprenentatge</label><select id="saSel">${sas.map(s=>`<option value="${s.id}" ${s.id===state.selectedSa?'selected':''}>${esc(s.titol)}</option>`).join('')}</select></div></div><div class="field"><label>Nivell de treball</label><select id="levelSel"><option value="N1" ${state.level==='N1'?'selected':''}>N1 · entendre i identificar</option><option value="N2" ${state.level==='N2'?'selected':''}>N2 · calcular i representar</option><option value="N3" ${state.level==='N3'?'selected':''}>N3 · modelitzar, simular i justificar</option><option value="N4" ${state.level==='N4'?'selected':''}>N4 · optimitzar, valorar impacte i transferir</option></select></div></section><section class="grid two"><div class="card"><h3>${esc(sa.titol)}</h3><p><strong>Bloc:</strong> ${esc(sa.bloc)}</p><p><strong>Repte:</strong> ${esc(sa.repte)}</p><p><strong>Producte final:</strong> ${esc(sa.producteFinal)}</p><p><strong>Criteris:</strong> ${sa.criteris.map(c=>`<span class="pill">${esc(c)}</span>`).join('')}</p></div><div class="card"><h3>Camps de treball</h3><div class="form-row"><div class="field"><label>Dades o mesures disponibles</label><textarea id="workData" placeholder="Exemple: potència, temps, material, dimensions, pressió, etc."></textarea></div><div class="field"><label>Proposta o hipòtesi</label><textarea id="workHyp" placeholder="Descriu la solució, selecció o model que vols justificar."></textarea></div></div><button class="btn" id="generateWork">Generar resultat i justificació</button></div></section><section class="card"><h3>Resultat, procediment i connexió curricular</h3><div id="workResult" class="result">Selecciona el nivell, introdueix dades i genera una proposta de treball.</div></section><section class="grid two"><div class="card"><h3>Programació de la SA</h3>${renderSAProgram(sa)}</div><div class="card"><h3>Rúbrica</h3>${renderRubric(sa.rubrica)}</div></section><section class="card no-print"><button class="btn" data-print-current>Exportar informe format SA</button> <button class="btn secondary" data-print-current>Exportar PDF corregit</button> <button class="btn ghost" onclick="window.print()">Imprimir rúbrica</button> <button class="btn ghost" data-copy-current>Copiar informe</button></section>`;
}
function bindSA(){
  q('#courseSel')?.addEventListener('change',e=>{state.course=e.target.value; render();});
  q('#saSel')?.addEventListener('change',e=>{state.selectedSa=e.target.value; render();});
  q('#levelSel')?.addEventListener('change',e=>state.level=e.target.value);
  q('#generateWork')?.addEventListener('click',()=>{
    const sa=getSelectedSA(), data=q('#workData').value.trim(), hyp=q('#workHyp').value.trim();
    const levelText={N1:'identificar conceptes, dades i requisits',N2:'calcular, representar i ordenar el procediment',N3:'modelitzar, simular conceptualment i justificar',N4:'optimitzar, valorar impacte i transferir a un nou cas'}[state.level];
    const result = `Resultat orientatiu\nLa situació demana ${levelText}. La proposta ha de respondre al repte: ${sa.repte}\n\nProcediment\n1. Identificar requisits, restriccions i dades rellevants.\n2. Relacionar les dades amb el bloc: ${sa.bloc}.\n3. Aplicar càlculs, esquemes o comparacions segons el nivell seleccionat.\n4. Justificar la decisió amb vocabulari tècnic i criteris de seguretat, eficiència, cost i impacte.\n\nDades introduïdes\n${data || 'No s’han introduït dades. Cal afegir dades per obtenir una justificació més precisa.'}\n\nProposta o hipòtesi\n${hyp || 'No s’ha introduït cap proposta. Cal formular una solució o hipòtesi.'}\n\nJustificació tècnica\nLa resposta serà adequada si connecta el producte final amb els criteris ${sa.criteris.join(', ')} i mostra una decisió raonada, no només un resultat numèric.`;
    q('#workResult').textContent=result;
  });
}

function renderEines(){
  return `<section class="card"><h2>Eines tècniques</h2><p class="muted">Calculadores i simuladors conceptuals amb procediment, interpretació i avisos d’unitats.</p><div class="grid two">${toolDefs.map(t=>`<div class="panel"><h3>${esc(t.title)}</h3>${t.fields.map(f=>`<div class="field"><label for="${t.id}_${f[0]}">${esc(f[1])}</label><input id="${t.id}_${f[0]}" data-tool="${t.id}" data-field="${f[0]}"></div>`).join('')}<button class="btn" data-calc="${t.id}">Calcular</button><div id="out_${t.id}" class="result">Introdueix les dades i calcula.</div></div>`).join('')}</div></section>`;
}
function bindEines(){app.querySelectorAll('[data-calc]').forEach(b=>b.addEventListener('click',()=>{const id=b.dataset.calc; const vals={}; app.querySelectorAll(`[data-tool="${id}"]`).forEach(i=>vals[i.dataset.field]=i.value.trim()); const tool=toolDefs.find(t=>t.id===id); q('#out_'+id).textContent=tool.calc(vals);}));}

function renderDocent(){
  const tabs=[['ident','Identificació'],['context','Context i repte'],['curr','Currículum'],['obj','Objectius i sabers'],['met','Metodologia'],['act','Activitats'],['aval','Avaluació'],['vec','Vectors'],['rub','Rúbrica'],['imp','Importar']];
  return `<section class="card"><h2>Espai docent</h2><p class="muted">Crea, importa, guarda i exporta situacions d’aprenentatge. Les SA guardades apareixen automàticament al selector de l’apartat SA.</p><div class="internal-tabs">${tabs.map(t=>`<button data-dtab="${t[0]}" class="${state.docenteTab===t[0]?'active':''}">${t[1]}</button>`).join('')}</div><div id="docTabContent">${renderDocTab()}</div><div class="quick"><button class="btn" id="saveSA">Guardar SA</button><button class="btn secondary" id="previewSA">Generar fitxa docent</button><button class="btn ghost" id="copyJson">Copiar JSON</button><button class="btn ghost" id="newSA">Nova SA en blanc</button></div></section>`;
}
function getCourseKey(curs){return String(curs||'').includes('II')?'ti2':'ti1';}
function renderDocTab(){
  const s=state.currentDoc;
  const courseKey=getCourseKey(s.curs);
  const fixed=curriculum.comunes;
  const cur=curriculum[courseKey];
  const field=(key,label,type='textarea')=>`<div class="field"><label>${label}</label>${type==='input'?`<input data-doc="${key}" value="${escAttr(s[key]||'')}">`:`<textarea data-doc="${key}">${esc(s[key]||'')}</textarea>`}</div>`;
  if(state.docenteTab==='ident') return `<div class="form-row">${field('titol','Títol','input')}<div class="field"><label>Curs</label><select data-doc="curs" id="docCourse"><option ${s.curs==='Tecnologia Industrial I'?'selected':''}>Tecnologia Industrial I</option><option ${s.curs==='Tecnologia Industrial II'?'selected':''}>Tecnologia Industrial II</option></select><p class="help">Canviar el curs actualitza els desplegables curriculars.</p></div>${field('materia','Matèria','input')}${field('durada','Durada','input')}${field('docentGrup','Docent / grup','input')}<div class="field"><label>Font d’impressió</label><select id="fontPrint"><option ${state.settings.font==='Times New Roman'?'selected':''}>Times New Roman</option><option ${state.settings.font==='Arial'?'selected':''}>Arial</option></select></div></div>`;
  if(state.docenteTab==='context') return `<div class="form-row">${field('context','Context')}${field('repte','Repte')}${field('justificacio','Justificació')}${field('producteFinal','Producte final')}</div>`;
  if(state.docenteTab==='curr') return `<p class="help">Tria ítems del currículum i afegeix-los al camp. També pots escriure o adaptar el text manualment.</p><div class="form-row">${pickList('competenciesEspecifiques','Competències específiques',fixed.competenciesEspecifiques)}${pickList('criterisAvaluacio','Criteris d’avaluació',cur.criteris)}${pickList('competenciesTransversals','Competències transversals',fixed.competenciesTransversals)}</div>`;
  if(state.docenteTab==='obj') return `<p class="help">Desplegables vinculats al curs seleccionat: objectius generals, blocs del curs i sabers concrets.</p><div class="form-row">${pickList('objectius','Objectius d’aprenentatge',fixed.objectius)}${pickList('blocsSabers','Blocs de sabers',cur.blocs)}${pickList('sabersConcrets','Sabers concrets',cur.sabers)}</div>`;
  if(state.docenteTab==='met') return `<div class="form-row">${pickList('metodologia','Metodologia',fixed.metodologia)}${pickList('organitzacio','Organització de l’aula',fixed.organitzacio)}${pickList('recursos','Recursos',fixed.recursos)}${pickList('mesuresSuports','Mesures i suports',fixed.mesuresSuports)}</div>`;
  if(state.docenteTab==='act') return `<div class="form-row">${field('inicials','Inicials: què en sabem?')}${field('desenvolupament','Desenvolupament: aprenem nous continguts')}${field('estructuracio','Estructuració: què hem après?')}${field('aplicacio','Aplicació: apliquem el que hem après')}</div>`;
  if(state.docenteTab==='aval') return `<div class="form-row">${pickList('evidencies','Evidències',fixed.evidencies)}${pickList('instruments','Instruments',fixed.instruments)}${pickList('retornMillora','Retorn i millora',fixed.retornMillora)}</div>`;
  if(state.docenteTab==='vec') return `<div class="form-row">${pickList('vectors','Vectors',fixed.vectors)}</div><p class="help">Els vectors es poden seleccionar del desplegable o redactar de manera adaptada a la situació.</p>`;
  if(state.docenteTab==='rub') return `<p class="help">Cada fila pot vincular-se a criteris del curs. Pots afegir criteris amb el desplegable i ajustar els descriptors NA, AS, AN i AE.</p><div class="rubric-editor" id="rubricEditor">${(s.rubrica||[]).map((r,i)=>rubricRow(r,i,cur.criteris)).join('')}</div><button class="btn ghost" id="addRubric">Afegir ítem</button>`;
  return `<div class="grid two"><div class="panel"><h3>Importar JSON</h3><input type="file" id="importJson" accept=".json,application/json"><p class="help">Lectura estructurada completa.</p></div><div class="panel"><h3>Importar TXT</h3><input type="file" id="importTxt" accept=".txt,text/plain"><p class="help">Reconeix camps en majúscules com TÍTOL, CURS, CONTEXT, REPTE, RÚBRICA...</p></div><div class="panel"><h3>Importar DOCX bàsic</h3><input type="file" id="importDocx" accept=".docx"><p class="help">Sense llibreries externes. Pot extreure text bàsic de document.xml, però no conserva formats complexos.</p></div><div class="panel"><h3>Gestió</h3><button class="btn danger" id="clearCustom">Esborrar SA creades/importades</button></div></div>`;
}
function pickList(key,label,options){const val=state.currentDoc[key]||'';return `<div class="field picker-field"><label>${label}</label><textarea data-doc="${key}">${esc(val)}</textarea><div class="picker-row"><select data-picker="${key}"><option value="">Selecciona un ítem del currículum...</option>${options.map(o=>`<option value="${escAttr(o)}">${esc(o)}</option>`).join('')}</select><button type="button" class="btn ghost mini" data-add-picker="${key}">Afegir</button></div></div>`;}
function rubricRow(r,i,criteris=[]){return `<div class="rubric-block"><div class="form-row"><input data-rub="item" data-i="${i}" placeholder="Ítem" value="${escAttr(r.item||'')}"><textarea data-rub="criteris" data-i="${i}" placeholder="Criteris">${esc(r.criteris||'')}</textarea><input data-rub="na" data-i="${i}" placeholder="NA" value="${escAttr(r.na||'')}"><input data-rub="as" data-i="${i}" placeholder="AS" value="${escAttr(r.as||'')}"><input data-rub="an" data-i="${i}" placeholder="AN" value="${escAttr(r.an||'')}"><input data-rub="ae" data-i="${i}" placeholder="AE" value="${escAttr(r.ae||'')}"></div><div class="picker-row rubric-picker"><select data-rub-picker="${i}"><option value="">Afegir criteri del currículum...</option>${criteris.map(c=>`<option value="${escAttr(c)}">${esc(c)}</option>`).join('')}</select><button type="button" class="btn ghost mini" data-add-rub-crit="${i}">Afegir criteri</button></div></div>`;}
function bindDocent(){
  app.querySelectorAll('[data-dtab]').forEach(b=>b.addEventListener('click',()=>{saveDocInputs(); state.docenteTab=b.dataset.dtab; render();}));
  app.querySelectorAll('[data-doc]').forEach(el=>el.addEventListener('input',()=>{state.currentDoc[el.dataset.doc]=el.value;}));
  q('#docCourse')?.addEventListener('change',e=>{state.currentDoc.curs=e.target.value; render();});
  app.querySelectorAll('[data-add-picker]').forEach(btn=>btn.addEventListener('click',()=>{
    const key=btn.dataset.addPicker;
    const sel=app.querySelector(`[data-picker="${key}"]`);
    addToField(key, sel?.value || '');
    render();
  }));
  app.querySelectorAll('[data-rub]').forEach(el=>el.addEventListener('input',()=>{const i=+el.dataset.i; state.currentDoc.rubrica[i][el.dataset.rub]=el.value;}));
  app.querySelectorAll('[data-add-rub-crit]').forEach(btn=>btn.addEventListener('click',()=>{
    const i=+btn.dataset.addRubCrit;
    const sel=app.querySelector(`[data-rub-picker="${i}"]`);
    addToRubricCriteria(i, sel?.value || '');
    render();
  }));
  q('#fontPrint')?.addEventListener('change',e=>{state.settings.font=e.target.value; localStorage.setItem(SETTINGS_KEY, JSON.stringify(state.settings));});
  q('#addRubric')?.addEventListener('click',()=>{state.currentDoc.rubrica.push({item:'',criteris:'',na:'',as:'',an:'',ae:''}); render();});
  q('#saveSA')?.addEventListener('click',()=>{saveDocInputs(); saveCustomSA(state.currentDoc); toastMsg('SA guardada al navegador.');});
  q('#previewSA')?.addEventListener('click',()=>{saveDocInputs(); printSA(normalizeDocToSA(state.currentDoc));});
  q('#copyJson')?.addEventListener('click',()=>{saveDocInputs(); navigator.clipboard.writeText(JSON.stringify(state.currentDoc,null,2)); toastMsg('JSON copiat.');});
  q('#newSA')?.addEventListener('click',()=>{state.currentDoc=blankSA(); render();});
  q('#clearCustom')?.addEventListener('click',()=>{if(confirm('Vols esborrar totes les SA creades o importades?')){localStorage.removeItem(STORAGE_KEY); toastMsg('SA creades esborrades.');}});
  q('#importJson')?.addEventListener('change',e=>readFile(e.target.files[0],txt=>{try{state.currentDoc={...blankSA(),...JSON.parse(txt)}; toastMsg('JSON importat.'); render();}catch(err){toastMsg('JSON no vàlid.');}}));
  q('#importTxt')?.addEventListener('change',e=>readFile(e.target.files[0],txt=>{state.currentDoc=parseTxtSA(txt); toastMsg('TXT importat.'); render();}));
  q('#importDocx')?.addEventListener('change',async e=>{const file=e.target.files[0]; if(!file) return; const text=await extractDocxText(file); state.currentDoc=parseTxtSA(text); toastMsg(text?'DOCX importat de manera bàsica.':'No s’ha pogut llegir el DOCX.'); render();});
}
function addToField(key,value){
  if(!value) return;
  saveDocInputs();
  const current=arr(state.currentDoc[key]);
  if(!current.includes(value)) current.push(value);
  state.currentDoc[key]=current.join('\n');
}
function addToRubricCriteria(i,value){
  if(!value) return;
  saveDocInputs();
  state.currentDoc.rubrica=state.currentDoc.rubrica||[];
  state.currentDoc.rubrica[i]=state.currentDoc.rubrica[i]||{item:'',criteris:'',na:'',as:'',an:'',ae:''};
  const current=arr(state.currentDoc.rubrica[i].criteris);
  if(!current.includes(value)) current.push(value);
  state.currentDoc.rubrica[i].criteris=current.join('\n');
}
function saveDocInputs(){app.querySelectorAll('[data-doc]').forEach(el=>state.currentDoc[el.dataset.doc]=el.value);app.querySelectorAll('[data-rub]').forEach(el=>{const i=+el.dataset.i; if(!state.currentDoc.rubrica[i]) state.currentDoc.rubrica[i]={item:'',criteris:'',na:'',as:'',an:'',ae:''}; state.currentDoc.rubrica[i][el.dataset.rub]=el.value;});}

function renderAuto(){const items=['He entès el repte tecnològic.','He identificat dades, requisits i restriccions.','He aplicat càlculs o procediments tècnics adequats.','He utilitzat vocabulari tecnològic correcte.','He interpretat esquemes, circuits, màquines o processos.','He justificat la proposta amb criteris tècnics.','He valorat seguretat, eficiència, cost i impacte ambiental.','He revisat errors i he proposat millores.','He comunicat el resultat de manera clara.'];return `<section class="card"><h2>Autoavaluació</h2><p class="muted">Valora cada ítem de 0 a 4.</p>${items.map((it,i)=>`<div class="auto-item"><label>${esc(it)}</label><select data-auto><option value="0">0 · encara no</option><option value="1">1 · inicial</option><option value="2">2 · satisfactori</option><option value="3">3 · notable</option><option value="4">4 · excel·lent</option></select></div>`).join('')}<button class="btn" id="calcAuto">Calcular autoavaluació</button><div id="autoOut" class="result">La recomanació apareixerà aquí.</div></section>`;}
function bindAuto(){q('#calcAuto')?.addEventListener('click',()=>{const vals=[...app.querySelectorAll('[data-auto]')].map(s=>+s.value); const total=vals.reduce((a,b)=>a+b,0); const max=vals.length*4; const pct=Math.round(total/max*100); let rec=pct<50?'Cal reforçar la identificació de dades, el procediment i la justificació tècnica.':pct<75?'Vas pel bon camí. Revisa unitats, vocabulari i connexió amb criteris tècnics.':pct<90?'Treball sòlid. Pots millorar l’optimització, l’impacte i la transferència a altres casos.':'Molt bon procés. Mantén la precisió i justifica limitacions i alternatives.'; q('#autoOut').textContent=`Puntuació: ${total}/${max}\nPercentatge: ${pct}%\nRecomanació: ${rec}`;});}

function makeSA(id,titol,curs,bloc,repte,producteFinal,criteris){const materia='Tecnologia Industrial';return {id,titol,curs,materia,durada:'8-10 sessions',docentGrup:'',bloc,context:`Situació vinculada al bloc ${bloc}, amb aplicació a un cas proper i rellevant per a l’alumnat.`,repte,justificacio:'La situació permet connectar coneixements tècnics, presa de decisions, experimentació, modelització i comunicació de resultats.',producteFinal,competenciesEspecifiques:['Competència tecnològica','Competència en experimentació','Competència en modelització i simulació'],criteris,competenciesTransversals:['Competència comunicativa','Competència digital','Competència personal, social i d’aprendre a aprendre','Competència ciutadana i emprenedora'],objectius:['Identificar dades, requisits i restriccions del problema.','Aplicar procediments tècnics adequats.','Justificar decisions amb criteris d’eficiència, cost, seguretat i impacte.'],sabers:[bloc],metodologia:'Aprenentatge basat en reptes, treball cooperatiu, experimentació guiada i justificació tècnica.',organitzacio:'Treball individual i en equips petits amb posades en comú.',recursos:'Fitxes tècniques, eines de càlcul, materials de taller, esquemes i dispositius disponibles.',mesuresSuports:'Guies pas a pas, models d’informe, exemples resolts i opcions d’ampliació.',activitats:{inicials:'Activació d’idees prèvies i anàlisi del repte.',desenvolupament:'Recollida de dades, càlculs, esquemes, comparació d’alternatives i proves.',estructuracio:'Síntesi dels aprenentatges i revisió del procediment.',aplicacio:'Elaboració del producte final i defensa tècnica.'},avaluacio:{evidencies:'Informe, càlculs, esquema, justificació i participació en la revisió.',instruments:'Rúbrica final, observació docent i autoavaluació.',retornMillora:'Feedback docent i millora del producte final.'},vectors:['Aprenentatges competencials','Universalitat del currículum','Qualitat de les llengües','Ciutadania democràtica i consciència global','Benestar emocional'],rubrica:generateRubric(titol,criteris)};}
function generateRubric(titol,criteris){return [{item:'Anàlisi del repte',criteris:criteris.slice(0,2).join(', '),na:'No identifica dades ni requisits rellevants.',as:'Identifica dades bàsiques amb ajuda.',an:'Analitza requisits i restriccions amb correcció.',ae:'Analitza el repte amb precisió i anticipa limitacions.'},{item:'Procediment tècnic',criteris:criteris.join(', '),na:'No aplica procediments adequats.',as:'Aplica procediments senzills amb alguna imprecisió.',an:'Aplica càlculs, esquemes o proves de manera correcta.',ae:'Modelitza, comprova i optimitza el procediment.'},{item:'Justificació i comunicació',criteris:criteris.slice(-2).join(', '),na:'La resposta és poc clara o no està justificada.',as:'Comunica la resposta amb justificació bàsica.',an:'Justifica amb vocabulari tècnic adequat.',ae:'Argumenta amb criteris tècnics, ambientals, econòmics i de seguretat.'}];}
function blankSA(){return {titol:'',curs:'Tecnologia Industrial I',materia:'Tecnologia Industrial',durada:'',docentGrup:'',context:'',repte:'',justificacio:'',producteFinal:'',competenciesEspecifiques:'',criterisAvaluacio:'',competenciesTransversals:'',objectius:'',blocsSabers:'',sabersConcrets:'',metodologia:'',organitzacio:'',recursos:'',mesuresSuports:'',inicials:'',desenvolupament:'',estructuracio:'',aplicacio:'',evidencies:'',instruments:'',retornMillora:'',vectors:'',rubrica:[{item:'',criteris:'',na:'',as:'',an:'',ae:''}]};}
function normalizeDocToSA(d){return {id:d.id||'custom-'+Date.now(),titol:d.titol||'Situació d’aprenentatge',curs:d.curs||'Tecnologia Industrial I',materia:d.materia||'Tecnologia Industrial',durada:d.durada||'',docentGrup:d.docentGrup||'',bloc:d.blocsSabers||'',context:d.context||'',repte:d.repte||'',justificacio:d.justificacio||'',producteFinal:d.producteFinal||'',competenciesEspecifiques:arr(d.competenciesEspecifiques),criteris:arr(d.criterisAvaluacio),competenciesTransversals:arr(d.competenciesTransversals),objectius:arr(d.objectius),sabers:[d.blocsSabers,d.sabersConcrets].filter(Boolean),metodologia:d.metodologia||'',organitzacio:d.organitzacio||'',recursos:d.recursos||'',mesuresSuports:d.mesuresSuports||'',activitats:{inicials:d.inicials||'',desenvolupament:d.desenvolupament||'',estructuracio:d.estructuracio||'',aplicacio:d.aplicacio||''},avaluacio:{evidencies:d.evidencies||'',instruments:d.instruments||'',retornMillora:d.retornMillora||''},vectors:arr(d.vectors),rubrica:(d.rubrica||[]).filter(r=>r.item||r.criteris)}}
function saveCustomSA(doc){const sa=normalizeDocToSA(doc); if(!sa.titol||sa.titol==='Situació d’aprenentatge'){toastMsg('Cal afegir un títol.'); return;} const list=loadCustomSAs().filter(x=>x.id!==sa.id && x.titol!==sa.titol); list.push(sa); localStorage.setItem(STORAGE_KEY, JSON.stringify(list)); state.selectedSa=sa.id;}
function loadCustomSAs(){try{return JSON.parse(localStorage.getItem(STORAGE_KEY)||'[]')}catch{return[]}}
function loadSettings(){try{return {...{font:'Times New Roman'},...JSON.parse(localStorage.getItem(SETTINGS_KEY)||'{}')}}catch{return{font:'Times New Roman'}}}

function renderSAProgram(sa){return `<p><strong>Context:</strong> ${esc(sa.context)}</p><p><strong>Justificació:</strong> ${esc(sa.justificacio)}</p><p><strong>Objectius:</strong></p><ul>${arr(sa.objectius).map(x=>`<li>${esc(x)}</li>`).join('')}</ul><p><strong>Activitats:</strong></p><ul><li>Inicials: ${esc(sa.activitats?.inicials||'')}</li><li>Desenvolupament: ${esc(sa.activitats?.desenvolupament||'')}</li><li>Estructuració: ${esc(sa.activitats?.estructuracio||'')}</li><li>Aplicació: ${esc(sa.activitats?.aplicacio||'')}</li></ul>`;}
function renderRubric(rub){return `<div class="table-wrap"><table><thead><tr><th>Ítem</th><th>Criteris</th><th>NA</th><th>AS</th><th>AN</th><th>AE</th></tr></thead><tbody>${(rub||[]).map(r=>`<tr><td>${esc(r.item)}</td><td>${esc(r.criteris)}</td><td>${esc(r.na)}</td><td>${esc(r.as)}</td><td>${esc(r.an)}</td><td>${esc(r.ae)}</td></tr>`).join('')}</tbody></table></div>`;}
function printSA(sa){const fontClass=state.settings.font==='Arial'?' arial':'';printArea.innerHTML=`<article class="print-doc${fontClass}"><section class="print-cover"><h1>Situació d’aprenentatge</h1><h2>${esc(sa.titol)}</h2><p>${esc(sa.curs)} · ${esc(sa.materia||'Tecnologia Industrial')}</p><p>${esc(sa.durada||'')}</p></section>${psec('Identificació',`Curs: ${sa.curs}\nMatèria: ${sa.materia||'Tecnologia Industrial'}\nDurada: ${sa.durada||''}\nDocent / grup: ${sa.docentGrup||''}`)}${psec('Context, repte i producte final',`Context: ${sa.context||''}\n\nRepte: ${sa.repte||''}\n\nJustificació: ${sa.justificacio||''}\n\nProducte final: ${sa.producteFinal||''}`)}${psec('Currículum',`Competències específiques:\n${arr(sa.competenciesEspecifiques).join('\n')}\n\nCompetències transversals:\n${arr(sa.competenciesTransversals).join('\n')}\n\nObjectius d’aprenentatge:\n${arr(sa.objectius).join('\n')}\n\nCriteris d’avaluació:\n${arr(sa.criteris).join('\n')}\n\nSabers:\n${arr(sa.sabers).join('\n')}`)}${psec('Metodologia i recursos',`Metodologia: ${sa.metodologia||''}\n\nOrganització: ${sa.organitzacio||''}\n\nRecursos: ${sa.recursos||''}\n\nMesures i suports: ${sa.mesuresSuports||''}`)}${psec('Desenvolupament',`Activitats inicials:\n${sa.activitats?.inicials||''}\n\nActivitats de desenvolupament:\n${sa.activitats?.desenvolupament||''}\n\nActivitats d’estructuració:\n${sa.activitats?.estructuracio||''}\n\nActivitats d’aplicació:\n${sa.activitats?.aplicacio||''}`)}${psec('Evidències, retorn i vectors',`Evidències: ${sa.avaluacio?.evidencies||''}\n\nInstruments: ${sa.avaluacio?.instruments||''}\n\nRetorn i millora: ${sa.avaluacio?.retornMillora||''}\n\nVectors:\n${arr(sa.vectors).join('\n')}`)}<section class="print-section page-break"><h2>Rúbrica final</h2>${renderRubric(sa.rubrica)}</section></article>`;window.print();}
function psec(title,body){return `<section class="print-section"><h2>${esc(title)}</h2><p>${esc(body)}</p></section>`;}
function copyReport(sa){const text=`SITUACIÓ D’APRENENTATGE\n${sa.titol}\n\nCurs: ${sa.curs}\nMatèria: ${sa.materia}\nDurada: ${sa.durada}\n\nContext\n${sa.context}\n\nRepte\n${sa.repte}\n\nProducte final\n${sa.producteFinal}\n\nCriteris\n${arr(sa.criteris).join('\n')}`; navigator.clipboard.writeText(text); toastMsg('Informe copiat.');}

function calcMaterials(v){const rho=num(v.densitat), vol=num(v.volum), preu=num(v.preu); if(!rho||!vol) return 'Error didàctic: cal indicar densitat en kg/m³ i volum en m³.'; const m=rho*vol, cost=preu?m*preu:null; return `Resultat\nMassa = ${fmt(m)} kg${cost!==null?`\nCost = ${fmt(cost)} €`:''}\n\nProcediment\nm = ρ · V = ${rho} · ${vol} = ${fmt(m)} kg\n${preu?`cost = m · preu = ${fmt(m)} · ${preu} = ${fmt(cost)} €`:''}\n\nInterpretació tècnica\nLa selecció no depèn només de la massa o el cost: també cal valorar resistència, durabilitat, mecanització, reciclabilitat i ús previst. ${v.resistencia||''}`;}
function calcEnergia(v){const P=num(v.potencia), t=num(v.temps), price=num(v.preuKwh), util=num(v.util), factor=num(v.factor); if(!P||!t) return 'Error didàctic: cal indicar potència en W i temps en hores.'; const kwh=P*t/1000, cost=price?kwh*price:null, em=factor?kwh*factor:null, rend=util?util/kwh*100:null; return `Resultat\nEnergia = ${fmt(kwh)} kWh${cost?`\nCost = ${fmt(cost)} €`:''}${em?`\nEmissions estimades = ${fmt(em)} kg CO₂`:''}${rend?`\nRendiment = ${fmt(rend)} %`:''}\n\nProcediment\nE = P · t = ${P} W · ${t} h = ${fmt(kwh)} kWh.\n\nInterpretació tècnica\nPer reduir consum cal disminuir potència, temps d’ús o millorar el rendiment del sistema.`;}
function calcElectricitat(v){let V=num(v.v), I=num(v.i), R=num(v.r), t=num(v.temps); let steps=[]; if(!V&&I&&R){V=I*R; steps.push(`V = I · R = ${I} · ${R} = ${fmt(V)} V`);} if(!I&&V&&R){I=V/R; steps.push(`I = V / R = ${V} / ${R} = ${fmt(I)} A`);} if(!R&&V&&I){R=V/I; steps.push(`R = V / I = ${V} / ${I} = ${fmt(R)} Ω`);} if(!V||!I) return 'Error didàctic: cal donar dues magnituds entre V, I i R.'; const P=V*I; const e=t?P*t/1000:null; return `Resultat\nV = ${fmt(V)} V\nI = ${fmt(I)} A\nR = ${fmt(R)} Ω\nP = ${fmt(P)} W${e?`\nEnergia = ${fmt(e)} kWh`:''}\n\nProcediment\n${steps.join('\n')||'S’han utilitzat les dades introduïdes.'}\nP = V · I = ${fmt(V)} · ${fmt(I)} = ${fmt(P)} W.\n\nInterpretació tècnica\nComprova que la resistència i la potència siguin adequades per evitar sobreescalfaments.`;}
function calcResistencies(v){const rs=(v.res||'').split(',').map(num).filter(x=>x>0); if(!rs.length) return 'Error didàctic: introdueix resistències positives separades per comes.'; const tipus=(v.tipus||'serie').toLowerCase(); const eq=tipus.includes('par')?1/rs.reduce((a,r)=>a+1/r,0):rs.reduce((a,r)=>a+r,0); return `Resultat\nResistència equivalent = ${fmt(eq)} Ω\n\nProcediment\n${tipus.includes('par')?'Paral·lel: 1/Req = Σ(1/Ri).':'Sèrie: Req = ΣRi.'}\n\nInterpretació tècnica\nEn sèrie augmenta la resistència equivalent; en paral·lel disminueix i es reparteix la intensitat.`;}
function calcMecanismes(v){const ne=num(v.entrada), dc=num(v.conductor), dd=num(v.conduida), P=num(v.potencia); if(!ne||!dc||!dd) return 'Error didàctic: cal velocitat d’entrada i dimensions o dents de les dues rodes.'; const rel=dc/dd, ns=ne*rel, torque=P?P/(2*Math.PI*ns/60):null; return `Resultat\nRelació de transmissió = ${fmt(rel)}\nVelocitat de sortida = ${fmt(ns)} rpm${torque?`\nParell estimat a la sortida = ${fmt(torque)} N·m`:''}\n\nProcediment\nn_sortida = n_entrada · conductor / conduïda.\n\nInterpretació tècnica\nSi la velocitat de sortida baixa, normalment augmenta la capacitat de parell; si puja, es redueix el parell disponible.`;}
function calcPneumatica(v){const pbar=num(v.pressio), dmm=num(v.diametre), Q=num(v.cabal); if(!pbar||!dmm) return 'Error didàctic: cal pressió en bar i diàmetre en mm.'; const p=pbar*100000, A=Math.PI*Math.pow(dmm/1000,2)/4, F=p*A, vel=Q?((Q/60000)/A):null; return `Resultat\nÀrea = ${fmt(A)} m²\nForça = ${fmt(F)} N${vel?`\nVelocitat aproximada = ${fmt(vel)} m/s`:''}\n\nProcediment\nF = p · A. S’ha convertit la pressió de bar a Pa i el diàmetre de mm a m.\n\nInterpretació tècnica\nLa força real pot ser menor per pèrdues, fregament i rendiment de l’actuador.`;}
function calcMaquines(v){const Pa=num(v.absorvida), Pu=num(v.util), rpm=num(v.rpm); if(!Pa||!Pu) return 'Error didàctic: cal potència absorbida i potència útil.'; const eta=Pu/Pa*100, perd=Pa-Pu, torque=rpm?Pu/(2*Math.PI*rpm/60):null; return `Resultat\nRendiment = ${fmt(eta)} %\nPèrdues = ${fmt(perd)} W${torque?`\nParell motor = ${fmt(torque)} N·m`:''}\n\nProcediment\nη = P útil / P absorbida · 100.\n\nInterpretació tècnica\nUn rendiment més alt indica menys pèrdues, però cal valorar cost, manteniment, seguretat i règim de treball.`;}
function calcAutomatics(v){const closed=!!v.sensor; return `Classificació\n${closed?'Sistema de llaç tancat':'Sistema de llaç obert'}\n\nDiagrama textual\nEntrada: ${v.entrada||'—'} → Controlador: ${v.controlador||'—'} → Procés: ${v.proces||'—'} → Actuador: ${v.actuador||'—'} → Sortida: ${v.sortida||'—'}${closed?` → Sensor/retorn: ${v.sensor}`:''}\n\nInterpretació tècnica\n${closed?'La retroalimentació permet comparar el resultat amb el valor desitjat i corregir errors.':'Sense retroalimentació, el sistema actua però no comprova automàticament si la sortida és correcta.'}`;}
function calcLogica(v){const expr=v.expr||''; if(!expr) return 'Error didàctic: introdueix una expressió amb A, B, C i AND/OR/NOT.'; const rows=[]; for(const A of [0,1])for(const B of [0,1])for(const C of [0,1]){let js=expr.replace(/\bAND\b/gi,'&&').replace(/\bOR\b/gi,'||').replace(/\bNOT\b/gi,'!').replace(/\bA\b/g,A).replace(/\bB\b/g,B).replace(/\bC\b/g,C); let out='?'; try{out=eval(js)?1:0}catch{} rows.push(`${A} ${B} ${C} | ${out}`);} return `Taula de veritat\nA B C | S\n${rows.join('\n')}\n\nInterpretació tècnica\nLa sortida val 1 quan es compleixen les condicions lògiques de l’expressió. Revisa parèntesis i prioritats.`;}
function calcFabricacio(v){const q=num(v.quantitat); let proc='mecanitzat o impressió 3D per prototips'; if(q>1000) proc='emmotllament, estampació o procés automatitzat de sèrie'; else if(q>50) proc='fabricació per lots amb utillatge senzill'; return `Procés recomanat\n${proc}\n\nJustificació\nMaterial: ${v.material||'no indicat'}\nProducte: ${v.forma||'no indicat'}\nPrecisió: ${v.precisio||'no indicada'}\nPrioritat ambiental: ${v.impacte||'no indicada'}\n\nInterpretació tècnica\nLa selecció del procés ha de valorar cost inicial, quantitat, qualitat, residus, seguretat i manteniment.`;}

function parseTxtSA(txt){const d=blankSA(); const map={'TÍTOL':'titol','TITOL':'titol','CURS':'curs','MATÈRIA':'materia','MATERIA':'materia','DURADA':'durada','DOCENT / GRUP':'docentGrup','DOCENT':'docentGrup','CONTEXT':'context','REPTE':'repte','JUSTIFICACIÓ':'justificacio','JUSTIFICACIO':'justificacio','PRODUCTE FINAL':'producteFinal','COMPETÈNCIES ESPECÍFIQUES':'competenciesEspecifiques','COMPETENCIES ESPECIFIQUES':'competenciesEspecifiques','CRITERIS D’AVALUACIÓ':'criterisAvaluacio','CRITERIS D\'AVALUACIÓ':'criterisAvaluacio','CRITERIS D’AVALUACIO':'criterisAvaluacio','COMPETÈNCIES TRANSVERSALS':'competenciesTransversals','OBJECTIUS':'objectius','OBJECTIUS D’APRENENTATGE':'objectius','BLOCS DE SABERS':'blocsSabers','SABERS CONCRETS':'sabersConcrets','METODOLOGIA':'metodologia','ORGANITZACIÓ DE L’AULA':'organitzacio','ORGANITZACIO DE L\'AULA':'organitzacio','RECURSOS':'recursos','MESURES I SUPORTS':'mesuresSuports','INICIALS':'inicials','DESENVOLUPAMENT':'desenvolupament','ESTRUCTURACIÓ':'estructuracio','ESTRUCTURACIO':'estructuracio','APLICACIÓ':'aplicacio','APLICACIO':'aplicacio','EVIDÈNCIES':'evidencies','EVIDENCIES':'evidencies','INSTRUMENTS':'instruments','RETORN I MILLORA':'retornMillora','VECTORS':'vectors','RÚBRICA':'rubrica','RUBRICA':'rubrica'}; const keys=Object.keys(map).sort((a,b)=>b.length-a.length); const lines=txt.replace(/\r/g,'').split('\n'); let cur=null, buf=[]; function flush(){if(cur){if(cur==='rubrica'){d.rubrica=parseRubric(buf.join('\n'));}else d[cur]=buf.join('\n').trim();}} for(const line of lines){const clean=line.trim().replace(/:$/,'').toUpperCase(); const found=keys.find(k=>clean===k || clean.startsWith(k+':')); if(found){flush(); cur=map[found]; buf=[]; const rest=line.substring(found.length).replace(/^\s*:\s*/,'').trim(); if(rest) buf.push(rest);} else if(cur){buf.push(line);} } flush(); return d;}
function parseRubric(txt){const lines=txt.split('\n').filter(Boolean); const rub=[]; for(const line of lines){const parts=line.split('|').map(x=>x.trim()); if(parts.length>=6) rub.push({item:parts[0],criteris:parts[1],na:parts[2],as:parts[3],an:parts[4],ae:parts[5]});} return rub.length?rub:blankSA().rubrica;}
function readFile(file,cb){if(!file)return; const r=new FileReader(); r.onload=()=>cb(String(r.result||'')); r.readAsText(file);}
async function extractDocxText(file){try{const buf=await file.arrayBuffer(); const bytes=new Uint8Array(buf); const str=Array.from(bytes).map(b=>String.fromCharCode(b)).join(''); const m=str.match(/word\/document\.xml[\s\S]*?<\?xml[\s\S]*?<\/w:document>/); let xml=m?m[0]:str; return xml.replace(/<w:p[^>]*>/g,'\n').replace(/<[^>]+>/g,' ').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&amp;/g,'&').replace(/\s+/g,' ').trim();}catch{return ''}}

function num(x){if(typeof x==='number')return x; const n=parseFloat(String(x||'').replace(',','.')); return isFinite(n)?n:0;} function fmt(n){return Number(n).toLocaleString('ca-ES',{maximumFractionDigits:3});}
function arr(x){if(Array.isArray(x))return x.filter(Boolean); if(!x)return []; return String(x).split(/\n|;|,/).map(s=>s.trim()).filter(Boolean);} function q(s){return document.querySelector(s);} function esc(s){return String(s??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));} function escAttr(s){return esc(s).replace(/'/g,'&#39;');}
function toastMsg(msg){toast.textContent=msg; toast.classList.add('show'); setTimeout(()=>toast.classList.remove('show'),2200);}

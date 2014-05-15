// ==UserScript==
//
//  fork de https://github.com/FabianPastor/anti-AEDE
//
// ==/UserScript==

/* jshint -W030 */ // para poder usar a && b como atajo para if(a) b

/*    para tener la lista de dominios limpia, por si se necesita en un futuro
      '11870.com',
      '11824.es',
      'abc.es',
      'abcdesevilla.es',
      'adn.fm',
      'adnradio.cl',
      'aede.es',
      'alfaguara.com',
      'as.com',
      'autocasion.com',
      'avanzaentucarrera.com',
      'besame.fm',
      'besame.co.cr',
      'besame.com.mx',
      'cadenadial.com',
      'cadenaser.com',
      'canalplus.es',
      'canarias7.es',
      'caracol.com.co',
      'caracol1260.com',
      'castellolopesmultimedia.com',
      'cincodias.com',
      'cinemania.es',
      'clix.pt',
      'colorincolorradio.com',
      'concierto.cl',
      'continental.com.ar',
      'corazon.cl',
      'correofarmaceutico.com',
      'dalealplay.com',
      'dbalears.cat',
      'deia.com',
      'diaridegirona.cat',
      'diaridetarragona.com',
      'diarideterrassa.es',
      'diariocordoba.com',
      'diariodeavila.es',
      'diariodeavisos.com',
      'diariodeburgos.es',
      'diariodecadiz.es',
      'diariodeibiza.es',
      'diariodejerez.es',
      'diariodelaltoaragon.es',
      'diariodeleon.es',
      'diariodemallorca.es',
      'diariodenavarra.es',
      'diariodenoticias.org',
      'diariodesevilla.es',
      'diarioinformacion.com',
      'diariojaen.es',
      'diariomedico.com',
      'diariopalentino.es',
      'diariosur.es',
      'diariovasco.com',
      'dmedicina.com',
      'editorialaurus.com',
      'eladelantado.com',
      'elalmeria.es',
      'elboomeran.com',
      'elcomercio.es',
      'elcorreoweb.es',
      'elcorreo.com',
      'eldiadecordoba.es',
      'eldiariomontanes.es',
      'eleconomista.es',
      'elmundo.es',
      'elnortedecastilla.es',
      'elmun.do',
      'elpais.com',
      'elpais.es',
      'elpaisaguilar.es',
      'elpaisclubdevinos.es',
      'elperiodicodearagon.com',
      'elperiodicoextremadura.com',
      'elperiodicomediterraneo.com',
      'elperiodico.cat',
      'elperiodico.com',
      'elpokerdeas.com',
      'elprogreso.es',
      'escolasdevalor.com.br',
      'escuelaunidadeditorial.com.br',
      'essayandscience.com',
      'europasur.es',
      'expansion.com',
      'expansionyempleo.com',
      'farodevigo.es',
      'finanzas.com',
      'fmdos.cl',
      'fundacaosantillana.com',
      'fundacaosantillana.com.br',
      'fundacaosantillana.org.co',
      'gaceta.es',
      'galiciae.com',
      'globaliza.com',
      'grada360.com',
      'gruposantillanapr.com',
      'granadahoy.com',
      'heraldodesoria.es',
      'heraldo.es',
      'hjck.com',
      'hoy.es',
      'hoycinema.es',
      'hoymotor.es',
      'huelvainformacion.es',
      'huffingtonpost.es',
      'iarc.cl',
      'iol.pt',
      'ign.com',
      'ideal.es',
      'infoempleo.es',
      'intereconomia.com',
      'inverycrea.net',
      'kebuena.com.mx',
      'lavallenata.com',
      'lagacetadesalamanca.es',
      'laguiatv.com',
      'lalistawip.com',
      'laopinioncoruna.es',
      'laopiniondemalaga.es',
      'laopiniondemurcia.es',
      'laopiniondezamora.es',
      'laopinion.es',
      'laprovincia.es',
      'larazon.es',
      'larioja.com',
      'lasprovincias.es',
      'latribunadealbacete.es',
      'latribunadeciudadreal.es',
      'latribunadetalavera.es',
      'latribunadetoledo.es',
      'lavanguardia.com',
      'laverdad.es',
      'lavozdealmeria.es',
      'lavozdegalicia.es',
      'lavozdigital.es',
      'lasapuestasdeas.com',
      'levante-emv.com',
      'librosaguilarl.com',
      'librosalfaguarainfantil.com',
      'librosalfaguarajuvenil.com',
      'lne.es',
      'los40.cl',
      'los40.com',
      'los40.com.co',
      'los40.com.cr',
      'los40.com.ec',
      'los40.com.gt',
      'los40.com.mx',
      'los40.com.pa',
      'los40principales.com.ar',
      'm80radio.com',
      'majorcadailybulletin.es',
      'malagahoy.es',
      'marca.com',
      'marcamotoranuncios.com',
      'marcamotor.com',
      'maxima.fm',
      'mediacapital.pt',
      'menorca.info',
      'meristation.com',
      'motormercado.com',
      'mundodeportivo.com',
      'mujerhoy.com',
      'noticiasdealava.com',
      'noticiasdegipuzkoa.com',
      'noticiasdenavarra.com',
      'objetiva.com.br',
      'objetiva.pt',
      'onstage.es',
      'orbyt.tv',
      'oxigeno.fm',
      'pisos.com',
      'planetevents.es',
      'pluralent.com',
      'pluralportugal.pt',
      'plus.es',
      'premiovivalectura.org.ar',
      'premiovivaleitura.org.br',
      'prisadigital.com',
      'prisaediciones.com',
      'prisalabs.com',
      'prisanoticias.com',
      'prisaradio.com',
      'prisarevistas.com',
      'prisatv.com',
      'pudahuel.cl',
      'puntodelectura.com',
      'que.es',
      'radioacktiva.cl',
      'radioacktiva.com',
      'radiocomercial.com',
      'radioimagina.cl',
      'radiole.com',
      'radiounochile.cl',
      'regio7.cat',
      'richmondelt.com',
      'rlm.es',
      'rockandpop.cl',
      'rollingstone.es',
      'santillana.cl',
      'santillana.com.ar',
      'santillana.com.bo',
      'santillana.com.br',
      'santillana.com.co',
      'santillana.com.do',
      'santillana.com.ec',
      'santillana.com.gt',
      'santillana.com.hn',
      'santillana.com.mx',
      'santillana.com.pe',
      'santillana.com.py',
      'santillana.com.sv',
      'santillana.com.uy',
      'santillana.com.ve',
      'santillana.com',
      'santillana.cr',
      'santillana.pt',
      'santillanafrancais.com',
      'santillanausa.com',
      'seminariodenarrativayperiodismo.com',
      'sistemauno.com',
      'sport.es',
      'sumadeletras.es',
      'superdeporte.es',
      'tareasymas.es',
      'telva.com',
      'tiramillas.net',
      'tropicanafm.com',
      'ultimahora.es',
      'unidadeditorial.es',
      'vadejuegos.com',
      'vodafone.fm',
      'vmetv.com',
      'wradio.com.co',
      'wradio.com.mx',
      'wradio690.com',
      'abecedesevilla.com',
 */

$(function () {

   //Lo suyo sería cargar la lista de la web de AEDE con ajax y trabajarla para sacar las url afectadas, pero petamos la web de AEDE seguro xD
   var aede = [
		/(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)elpais\.es(\/|$)/,
		/(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)marca\.com(\/|$)/,
		/(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)elmundo\.es(\/|$)/,
		/(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)as\.com(\/|$)/,
		/(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)lavanguardia\.com(\/|$)/,
		/(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)abc\.es(\/|$)/,
		/(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)elperiodico\.com(\/|$)/,
		/(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)larazon\.es(\/|$)/,
		/(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)elcorreo\.com(\/|$)/,
		/(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)lavozdegalicia\.es(\/|$)/,
		/(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)mundodeportivo\.com(\/|$)/,
		/(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)sport\.es(\/|$)/,
		/(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)diariovasco\.com(\/|$)/,
		/(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)lne\.es(\/|$)/,
		/(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)farodevigo\.es(\/|$)/,
		/(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)expansion\.com(\/|$)/,
		/(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)cincodias\.com(\/|$)/,
		/(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)eldiariomontanes\.es(\/|$)/,
		/(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)diariovasco\.com(\/|$)/,
		/(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)levante-emv\.com(\/|$)/,
		/(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)laverdad\.es(\/|$)/,
		/(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)ideal\.es(\/|$)/,
		/(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)lasprovincias\.es(\/|$)/,
		/(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)laverdad\.es(\/|$)/,
		/(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)diarioinformacion\.com(\/|$)/,
		/(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)elcomercio\.es(\/|$)/,
		/(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)laprovincia\.es(\/|$)/,
		/(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)diariodemallorca\.es(\/|$)/,
		/(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)hoy\.es(\/|$)/,
		/(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)larioja\.com(\/|$)/,
		/(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)diariocordoba\.com(\/|$)/,
		/(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)elperiodicomediterraneo\.com(\/|$)/,
		/(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)superdeporte\.es(\/|$)/,
		/(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)elperiodicodearagon\.com(\/|$)/,
		/(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)laopiniondemurcia\.es(\/|$)/,
		/(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)regio7\.cat(\/|$)/,
		/(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)diaridegirona\.cat(\/|$)/,
		/(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)laopiniondezamora\.es(\/|$)/,
		/(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)laopinion\.es(\/|$)/,
		/(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)diariodeibiza\.es(\/|$)/,
		/(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)laopinioncoruna\.es(\/|$)/,
		/(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)elperiodicoextremadura\.com(\/|$)/,
		/(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)laopiniondemalaga\.es(\/|$)/,
		/(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)aede\.es(\/|$)/,
		/(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)lavozdigital\.es(\/|$)/,
		/(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)diariodenavarra\.es(\/|$)/,
		/(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)heraldo\.es(\/|$)/,
		/(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)ultimahora\.es(\/|$)/,
		/(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)intereconomia\.com\/la-gaceta(\/|$)/,
		/(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)diariodecadiz\.es(\/|$)/,
		/(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)diariodesevilla\.es(\/|$)/,
		/(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)deia\.com(\/|$)/,
		/(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)diariodenoticias\.org(\/|$)/,
		/(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)diariodeburgos\.es(\/|$)/,
		/(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)malagahoy\.es(\/|$)/,
		/(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)huelvainformacion\.es(\/|$)/,
		/(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)noticiasdegipuzkoa\.com(\/|$)/,
		/(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)diariodejerez\.es(\/|$)/,
		/(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)noticiasdealava\.com(\/|$)/,
		/(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)granadahoy\.com(\/|$)/,
		/(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)diariopalentino\.es(\/|$)/,
		/(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)latribunadealbacete\.es(\/|$)/,
		/(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)elalmeria\.es(\/|$)/,
		/(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)europasur\.es(\/|$)/,
		/(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)heraldodesoria\.es(\/|$)/,
		/(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)diariodeavila\.es(\/|$)/,
		/(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)majorcadailybulletin\.es(\/|$)/,
		/(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)latribunadeciudadreal\.es(\/|$)/,
		/(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)latribunadetoledo\.es(\/|$)/,
		/(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)eldiadecordoba\.es(\/|$)/,
		/(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)latribunadetalavera\.es(\/|$)/,
		/(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)eleconomista\.es(\/|$)/,
		/(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)canarias7\.es(\/|$)/,
		/(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)elprogreso\.es(\/|$)/,
		/(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)lagacetadesalamanca\.es(\/|$)/,
		/(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)diariodeleon\.es(\/|$)/,
		/(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)diaridetarragona\.com(\/|$)/,
		/(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)diariodeavisos\.com(\/|$)/,
		/(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)lavozdealmeria\.es(\/|$)/,
		/(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)diariodelaltoaragon\.es(\/|$)/,
		/(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)elcorreoweb\.es(\/|$)/,
		/(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)diariojaen\.es(\/|$)/,
		/(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)diarideterrassa\.es(\/|$)/,
		/(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)eladelantado\.com(\/|$)/,
		/(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)Contacto\.asp(\/|$)/,
   ],
   defaults_general = {
      background: '#ffe9e9',
      background_gradient: '#ffe9e9',
      background_radius: '5',
      tooltip_background: '#d04544',
      tooltip_text: '#fff',
   },
      defaults_modules = {
         meneame: true,
         twitter: true,
         facebook: true,
         google: false,
         others: true,
      },
      labels = {
         background: 'Color de fondo (empieza por)',
         background_gradient: 'Color de fondo (termina en)',
         background_radius: 'Redondear los cantos (píxels)',
         tooltip_background: 'Color de fondo del tooltip',
         tooltip_text: 'Color del texto del tooltip',
         meneame: 'Menéame',
         twitter: 'Twitter',
         facebook: 'Facebook',
         google: 'Google (sólo funciona en google.es, se tiene que solucionar)',
         others: 'Todas las páginas',
      },
      general_types = {
         background: 'color',
         background_gradient: 'color',
         background_radius: 'number',
         tooltip_background: 'color',
         tooltip_text: 'color',
      },
      firstime = true,
      tooltip = false,

      meneame = function () {
         // Menéame
         $('span.showmytitle').not('.aede-on').each(function (i) {
            var title = this.title,
               element = $(this).parents('.news-body');
            preCheckAEDE(element, title, i);
            $(this).addClass('aede-on');
         });
         if(firstime){
            $('input#url').bind('input', function () {
              var that = $(this);
              if(isAEDE(that.val())){
                 that.css('border', '2px solid red');
              }else{
                 that.css('border', '1px solid #ddd');
              }
           });
           firstime=false;
         }
         $('.comment-body>a').each(function(i){
            var title = $(this).attr('href'),
               element = $(this).parent();
            preCheckAEDE(element, title, i);
          });
      
      },
      twitter = function () {
         // Twitter by @Hanxxs http://pastebin.com/f04tPcsG
         $('a.twitter-timeline-link').not('.aede-on').each(function (i) {
            var title = this.title,
               element = $(this).parents('.stream-item');
            preCheckAEDE(element, title, i);
            $(this).addClass('aede-on');
         });
      },
      facebook = function () {
         // Facebook by @paucapo
         $('div.fsm').not('.aede-on').each(function (i) {
            var title = $(this).text(),
               element = $(this).parents('a.shareLink');
            preCheckAEDE(element, title, i, {
               border: '3px solid ' + GM_getValue('background')
            });
            $(this).addClass('aede-on');
         });
         $('.userContent a').not('.aede-on').each(function (i) {
            var title = $(this).text(),
               element = $(this);
            preCheckAEDE(element, title, i, {
               border: '3px solid ' + GM_getValue('background')
            });
            $(this).addClass('aede-on');
         });
         $('div.userContentWrapper div.fcg').not('.aede-on').each(function (i) {
            var title = $(this).text(),
               element = $(this).parents('div.mvm');
            preCheckAEDE(element, title, i, {
               display: 'block',
            });
            $(this).addClass('aede-on');
         });
         $('div.storyInnerWrapper span.caption').not('.aede-on').each(function (i) {
            var title = $(this).text(),
               element = $(this).parents('div.shareRedesignContainer');
            preCheckAEDE(element, title, i);
            $(this).addClass('aede-on');
         });
      },
      google = function () {
         // Google by @paucapo
         $('a').not('.aede-on').each(function (i) {
            var title = $(this).attr('href'),
               element = $(this).parents('li.g');
            preCheckAEDE(element, title, i);
            $(this).addClass('aede-on');
         });
      },
      others = function () {
         // Others by @paucapo
         $('a').not('.aede-on').each(function (i) {
            var title = $(this).attr('href') + ' ' + $(this).text(),
               element = $(this);
            preCheckAEDE(element, title, i);
            $(this).addClass('aede-on');
         });
      },

      checkForAEDELinks = function () {
      
         switch(domain()){
            case 'meneame.net':
               GM_getValue('meneame') && meneame();
            break;
            case 'twitter.com':
               GM_getValue('twitter') && twitter();
            break;
            case 'facebook.com':
               GM_getValue('facebook') && facebook();
            break;
            case 'imgur.com':
            break;
            default:
               GM_getValue('others') && others();
            break;
         }
      },
      preCheckAEDE = function (element, url, i, extraCss) {
         if(url === undefined){
            return;
         }
         setTimeout(function () {
            checkAEDE(element, url, extraCss);
         }, i * 20);
      },
      checkAEDE = function (element, link, extraCss) {
         css = {
            'background-color': GM_getValue('background'),
            'background-image': 'linear-gradient(0deg, '+GM_getValue('background_gradient')+','+GM_getValue('background')+')',
            'border-radius': GM_getValue('background_radius')+'px',
         };
         if (typeof extraCss != 'undefined') {
            $.extend(css, extraCss);
         }
         if (isAEDE(link)) {
            element
               .css(css)
               .on('mouseenter', showTooltip).on('mouseleave', hideTooltip);
         }
      },
      showTooltip = function () {
         tooltip = $('<span id="aede-tooltip" style="position: absolute;background:' + GM_getValue('tooltip_background') + ';color:' + GM_getValue('tooltip_text') + ';padding:5px;border-radius:4px;z-index:100000">AEDE alert!</span>'),
         $('body').append(tooltip);
      },
      hideTooltip = function () {
         tooltip.remove();
         tooltip = false;
      },
      domain = function () {
         var parts = document.domain.split('.');
         return parts.slice(-2).join('.');
      },
      isAEDE = function (link) {
         var is = false;
         $.each(aede, function (i, a) {
            if(a.test(link)){
                  is=true;
                  return false;
            }
         });
         return is;
      },

      aedeConfig = function () {
         $('#aede_config').remove();

         var config = '<div id="aede_config">';
         config += '<h1>Configuración</h1>';

         config += '<h2>General</h2>';
         $.each(defaults_general, function (key, value) {
            config += '<p><label for="aede_' + key + '">' + labels[key] + ':</label> <input type="text" id="aede_' + key + '" value="' + GM_getValue(key) + '" class="'+general_types[key]+'"></p>';
         });

         config += '<h2>Módulos</h2>';
         config += '<ul>';
         $.each(defaults_modules, function (key, value) {
            config += '<li><input type="checkbox" id="aede_' + key + '" ' + (GM_getValue(key) === true ? 'checked' : '') + '> <label for="aede_' + key + '">' + labels[key] + '</label></li>';
         });
         config += '</ul>';

         config += '<p><input type="button" id="aede_save" value="Guardar"> <input type="button" id="aede_reset" value="Reset"></p>';

         config += '<style type="text/css">#aede_config{border:1px solid #eee;padding:0 20px;background:#f9f9f9;}#aede_config p label{width:50%;display:block;float:left;}#aede_config ul{list-style:none;}</style>';

         config += '</div>';



         $('#main_content').append(config);

         $('input.color').each( function() {
            $(this).minicolors({
               control: 'hue',
               defaultValue: '',
               inline: false,
               letterCase: 'lowercase',
               opacity: false,
               position: 'bottom left',
               theme: 'default'
            });
         });


         $('#aede_reset').on('click', function () {
            resetConfig();
            aedeConfig();
            resultConfig('¡Configuración a valores por defecto!');
         });
         $('#aede_save').on('click', function () {
            $.each(defaults_general, function (key, value) {
               GM_setValue(key, $('#aede_' + key).val());
            });
            $.each(defaults_modules, function (key, value) {
               GM_setValue(key, $('#aede_' + key).is(':checked'));
            });
            resultConfig('¡Configuración guardada!');
         });
      },
      resultConfig = function(result) {
         $('#aede_result').remove();
         $('#main_content').append('<p id="aede_result">'+result+'</p>');
      },
      resetConfig = function () {
         $.each(defaults_general, function (key, value) {
            GM_setValue(key, value);
         });
         $.each(defaults_modules, function (key, value) {
            GM_setValue(key, value);
         });
      },
      checkConfig = function () {
         $.each(defaults_general, function (key, value) {
            if (typeof GM_getValue(key) == 'undefined') {
               GM_setValue(key, value);
            }
         });
         $.each(defaults_modules, function (key, value) {
            if (typeof GM_getValue(key) == 'undefined')
               GM_setValue(key, value);
         });
      };

   checkForAEDELinks();
   setInterval(checkForAEDELinks, 2000);

   checkConfig();

   if (document.location.href == 'http://pykiss.github.io/anti-AEDE/') {
      aedeConfig();
   }

   $(document).mousemove(function (event) {
      if (tooltip){
         tooltip.css('top', (event.pageY + 10) + 'px').css('left', (event.pageX + 10) + 'px');
      }
   });



});

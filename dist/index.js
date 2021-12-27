/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 137:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body{padding:0;margin:0;display:flex}.stats{width:100%;display:flex;flex-direction:column;overflow-y:auto;flex:1 2 auto}.stats.hidden{display:none}.stats canvas{padding:1em}.board{flex:1 1 auto;width:100%;position:relative;background-color:gray;transition:background-color 1s}.board.wrong{background-color:red;transition-duration:60s}.board .checks{position:absolute;top:1em;right:1em}.board .button{position:absolute;bottom:1em;left:1em}.board .container{position:absolute;left:3em;top:3em;right:3em;bottom:3em;box-shadow:0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22);display:flex;flex-direction:column}.board .container .timer{height:2rem;animation:infinite linear 60s timer;background-color:#fff}@keyframes timer{from{width:0%}to{width:100%}}.board .container .canvas{cursor:none;flex-grow:1;position:relative;background-color:#fff}.board .container .canvas .target{position:absolute;width:0;height:0;display:flex;justify-content:center;align-items:center;word-break:keep-all}.board .container .canvas .target .text{width:fit-content;height:fit-content;background-color:#fff;box-shadow:0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22);position:relative;padding:0 .1em .1em .1em;animation:appear 200ms}@keyframes appear{from{opacity:0;transform:scaleY(0)}to{opacity:100%;transform:scaleY(100%)}}.board .container .canvas .target .text:after{content:\"\";border-bottom:.1em solid transparent;position:absolute;left:0;bottom:0;width:100%;animation:time 10000ms linear}@keyframes time{0%{border-color:#adff2f;width:100%}100%{border-color:red;width:0%}}.board .container .canvas .target.inverse .text{background-color:#000;color:#fff}.board .container .canvas .notification{font-size:3em;padding-left:.5em;padding-top:.3em}.board .container .canvas .notification.hidden{display:none}.board .container #input{font-size:3em;text-align:center;padding-bottom:2rem}.board .container #input,.board .container #input:focus,.board .container #input:focus-visible{border:none;outline:none}.board .container .health{position:relative;height:2rem}.board .container .health .bar{position:absolute;left:0;top:0;bottom:0;width:0;transition:width 1s;background-color:#adff2f}.board .container .blink-helper{pointer-events:none;position:absolute;top:0;bottom:0;left:0;right:0;background-color:#000;color:#fff;display:flex;justify-content:space-around;align-items:center;font-size:5em;animation:blink 5s linear infinite}@keyframes blink{0%,89%,100%{opacity:0}93%,96%{opacity:1}}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 645:
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ 81:
/***/ ((module) => {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ 646:
/***/ (function(module) {

/*! js-cookie v3.0.1 | MIT */
;
(function (global, factory) {
   true ? module.exports = factory() :
  0;
}(this, (function () { 'use strict';

  /* eslint-disable no-var */
  function assign (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        target[key] = source[key];
      }
    }
    return target
  }
  /* eslint-enable no-var */

  /* eslint-disable no-var */
  var defaultConverter = {
    read: function (value) {
      if (value[0] === '"') {
        value = value.slice(1, -1);
      }
      return value.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
    },
    write: function (value) {
      return encodeURIComponent(value).replace(
        /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
        decodeURIComponent
      )
    }
  };
  /* eslint-enable no-var */

  /* eslint-disable no-var */

  function init (converter, defaultAttributes) {
    function set (key, value, attributes) {
      if (typeof document === 'undefined') {
        return
      }

      attributes = assign({}, defaultAttributes, attributes);

      if (typeof attributes.expires === 'number') {
        attributes.expires = new Date(Date.now() + attributes.expires * 864e5);
      }
      if (attributes.expires) {
        attributes.expires = attributes.expires.toUTCString();
      }

      key = encodeURIComponent(key)
        .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
        .replace(/[()]/g, escape);

      var stringifiedAttributes = '';
      for (var attributeName in attributes) {
        if (!attributes[attributeName]) {
          continue
        }

        stringifiedAttributes += '; ' + attributeName;

        if (attributes[attributeName] === true) {
          continue
        }

        // Considers RFC 6265 section 5.2:
        // ...
        // 3.  If the remaining unparsed-attributes contains a %x3B (";")
        //     character:
        // Consume the characters of the unparsed-attributes up to,
        // not including, the first %x3B (";") character.
        // ...
        stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
      }

      return (document.cookie =
        key + '=' + converter.write(value, key) + stringifiedAttributes)
    }

    function get (key) {
      if (typeof document === 'undefined' || (arguments.length && !key)) {
        return
      }

      // To prevent the for loop in the first place assign an empty array
      // in case there are no cookies at all.
      var cookies = document.cookie ? document.cookie.split('; ') : [];
      var jar = {};
      for (var i = 0; i < cookies.length; i++) {
        var parts = cookies[i].split('=');
        var value = parts.slice(1).join('=');

        try {
          var foundKey = decodeURIComponent(parts[0]);
          jar[foundKey] = converter.read(value, foundKey);

          if (key === foundKey) {
            break
          }
        } catch (e) {}
      }

      return key ? jar[key] : jar
    }

    return Object.create(
      {
        set: set,
        get: get,
        remove: function (key, attributes) {
          set(
            key,
            '',
            assign({}, attributes, {
              expires: -1
            })
          );
        },
        withAttributes: function (attributes) {
          return init(this.converter, assign({}, this.attributes, attributes))
        },
        withConverter: function (converter) {
          return init(assign({}, this.converter, converter), this.attributes)
        }
      },
      {
        attributes: { value: Object.freeze(defaultAttributes) },
        converter: { value: Object.freeze(converter) }
      }
    )
  }

  var api = init(defaultConverter, { path: '/' });
  /* eslint-enable no-var */

  return api;

})));


/***/ }),

/***/ 324:
/***/ ((module) => {

var wordList = [
  // Borrowed from xkcd password generator which borrowed it from wherever
  "ability","able","aboard","about","above","accept","accident","according",
  "account","accurate","acres","across","act","action","active","activity",
  "actual","actually","add","addition","additional","adjective","adult","adventure",
  "advice","affect","afraid","after","afternoon","again","against","age",
  "ago","agree","ahead","aid","air","airplane","alike","alive",
  "all","allow","almost","alone","along","aloud","alphabet","already",
  "also","although","am","among","amount","ancient","angle","angry",
  "animal","announced","another","answer","ants","any","anybody","anyone",
  "anything","anyway","anywhere","apart","apartment","appearance","apple","applied",
  "appropriate","are","area","arm","army","around","arrange","arrangement",
  "arrive","arrow","art","article","as","aside","ask","asleep",
  "at","ate","atmosphere","atom","atomic","attached","attack","attempt",
  "attention","audience","author","automobile","available","average","avoid","aware",
  "away","baby","back","bad","badly","bag","balance","ball",
  "balloon","band","bank","bar","bare","bark","barn","base",
  "baseball","basic","basis","basket","bat","battle","be","bean",
  "bear","beat","beautiful","beauty","became","because","become","becoming",
  "bee","been","before","began","beginning","begun","behavior","behind",
  "being","believed","bell","belong","below","belt","bend","beneath",
  "bent","beside","best","bet","better","between","beyond","bicycle",
  "bigger","biggest","bill","birds","birth","birthday","bit","bite",
  "black","blank","blanket","blew","blind","block","blood","blow",
  "blue","board","boat","body","bone","book","border","born",
  "both","bottle","bottom","bound","bow","bowl","box","boy",
  "brain","branch","brass","brave","bread","break","breakfast","breath",
  "breathe","breathing","breeze","brick","bridge","brief","bright","bring",
  "broad","broke","broken","brother","brought","brown","brush","buffalo",
  "build","building","built","buried","burn","burst","bus","bush",
  "business","busy","but","butter","buy","by","cabin","cage",
  "cake","call","calm","came","camera","camp","can","canal",
  "cannot","cap","capital","captain","captured","car","carbon","card",
  "care","careful","carefully","carried","carry","case","cast","castle",
  "cat","catch","cattle","caught","cause","cave","cell","cent",
  "center","central","century","certain","certainly","chain","chair","chamber",
  "chance","change","changing","chapter","character","characteristic","charge","chart",
  "check","cheese","chemical","chest","chicken","chief","child","children",
  "choice","choose","chose","chosen","church","circle","circus","citizen",
  "city","class","classroom","claws","clay","clean","clear","clearly",
  "climate","climb","clock","close","closely","closer","cloth","clothes",
  "clothing","cloud","club","coach","coal","coast","coat","coffee",
  "cold","collect","college","colony","color","column","combination","combine",
  "come","comfortable","coming","command","common","community","company","compare",
  "compass","complete","completely","complex","composed","composition","compound","concerned",
  "condition","congress","connected","consider","consist","consonant","constantly","construction",
  "contain","continent","continued","contrast","control","conversation","cook","cookies",
  "cool","copper","copy","corn","corner","correct","correctly","cost",
  "cotton","could","count","country","couple","courage","course","court",
  "cover","cow","cowboy","crack","cream","create","creature","crew",
  "crop","cross","crowd","cry","cup","curious","current","curve",
  "customs","cut","cutting","daily","damage","dance","danger","dangerous",
  "dark","darkness","date","daughter","dawn","day","dead","deal",
  "dear","death","decide","declared","deep","deeply","deer","definition",
  "degree","depend","depth","describe","desert","design","desk","detail",
  "determine","develop","development","diagram","diameter","did","die","differ",
  "difference","different","difficult","difficulty","dig","dinner","direct","direction",
  "directly","dirt","dirty","disappear","discover","discovery","discuss","discussion",
  "disease","dish","distance","distant","divide","division","do","doctor",
  "does","dog","doing","doll","dollar","done","donkey","door",
  "dot","double","doubt","down","dozen","draw","drawn","dream",
  "dress","drew","dried","drink","drive","driven","driver","driving",
  "drop","dropped","drove","dry","duck","due","dug","dull",
  "during","dust","duty","each","eager","ear","earlier","early",
  "earn","earth","easier","easily","east","easy","eat","eaten",
  "edge","education","effect","effort","egg","eight","either","electric",
  "electricity","element","elephant","eleven","else","empty","end","enemy",
  "energy","engine","engineer","enjoy","enough","enter","entire","entirely",
  "environment","equal","equally","equator","equipment","escape","especially","essential",
  "establish","even","evening","event","eventually","ever","every","everybody",
  "everyone","everything","everywhere","evidence","exact","exactly","examine","example",
  "excellent","except","exchange","excited","excitement","exciting","exclaimed","exercise",
  "exist","expect","experience","experiment","explain","explanation","explore","express",
  "expression","extra","eye","face","facing","fact","factor","factory",
  "failed","fair","fairly","fall","fallen","familiar","family","famous",
  "far","farm","farmer","farther","fast","fastened","faster","fat",
  "father","favorite","fear","feathers","feature","fed","feed","feel",
  "feet","fell","fellow","felt","fence","few","fewer","field",
  "fierce","fifteen","fifth","fifty","fight","fighting","figure","fill",
  "film","final","finally","find","fine","finest","finger","finish",
  "fire","fireplace","firm","first","fish","five","fix","flag",
  "flame","flat","flew","flies","flight","floating","floor","flow",
  "flower","fly","fog","folks","follow","food","foot","football",
  "for","force","foreign","forest","forget","forgot","forgotten","form",
  "former","fort","forth","forty","forward","fought","found","four",
  "fourth","fox","frame","free","freedom","frequently","fresh","friend",
  "friendly","frighten","frog","from","front","frozen","fruit","fuel",
  "full","fully","fun","function","funny","fur","furniture","further",
  "future","gain","game","garage","garden","gas","gasoline","gate",
  "gather","gave","general","generally","gentle","gently","get","getting",
  "giant","gift","girl","give","given","giving","glad","glass",
  "globe","go","goes","gold","golden","gone","good","goose",
  "got","government","grabbed","grade","gradually","grain","grandfather","grandmother",
  "graph","grass","gravity","gray","great","greater","greatest","greatly",
  "green","grew","ground","group","grow","grown","growth","guard",
  "guess","guide","gulf","gun","habit","had","hair","half",
  "halfway","hall","hand","handle","handsome","hang","happen","happened",
  "happily","happy","harbor","hard","harder","hardly","has","hat",
  "have","having","hay","he","headed","heading","health","heard",
  "hearing","heart","heat","heavy","height","held","hello","help",
  "helpful","her","herd","here","herself","hidden","hide","high",
  "higher","highest","highway","hill","him","himself","his","history",
  "hit","hold","hole","hollow","home","honor","hope","horn",
  "horse","hospital","hot","hour","house","how","however","huge",
  "human","hundred","hung","hungry","hunt","hunter","hurried","hurry",
  "hurt","husband","ice","idea","identity","if","ill","image",
  "imagine","immediately","importance","important","impossible","improve","in","inch",
  "include","including","income","increase","indeed","independent","indicate","individual",
  "industrial","industry","influence","information","inside","instance","instant","instead",
  "instrument","interest","interior","into","introduced","invented","involved","iron",
  "is","island","it","its","itself","jack","jar","jet",
  "job","join","joined","journey","joy","judge","jump","jungle",
  "just","keep","kept","key","kids","kill","kind","kitchen",
  "knew","knife","know","knowledge","known","label","labor","lack",
  "lady","laid","lake","lamp","land","language","large","larger",
  "largest","last","late","later","laugh","law","lay","layers",
  "lead","leader","leaf","learn","least","leather","leave","leaving",
  "led","left","leg","length","lesson","let","letter","level",
  "library","lie","life","lift","light","like","likely","limited",
  "line","lion","lips","liquid","list","listen","little","live",
  "living","load","local","locate","location","log","lonely","long",
  "longer","look","loose","lose","loss","lost","lot","loud",
  "love","lovely","low","lower","luck","lucky","lunch","lungs",
  "lying","machine","machinery","mad","made","magic","magnet","mail",
  "main","mainly","major","make","making","man","managed","manner",
  "manufacturing","many","map","mark","market","married","mass","massage",
  "master","material","mathematics","matter","may","maybe","me","meal",
  "mean","means","meant","measure","meat","medicine","meet","melted",
  "member","memory","men","mental","merely","met","metal","method",
  "mice","middle","might","mighty","mile","military","milk","mill",
  "mind","mine","minerals","minute","mirror","missing","mission","mistake",
  "mix","mixture","model","modern","molecular","moment","money","monkey",
  "month","mood","moon","more","morning","most","mostly","mother",
  "motion","motor","mountain","mouse","mouth","move","movement","movie",
  "moving","mud","muscle","music","musical","must","my","myself",
  "mysterious","nails","name","nation","national","native","natural","naturally",
  "nature","near","nearby","nearer","nearest","nearly","necessary","neck",
  "needed","needle","needs","negative","neighbor","neighborhood","nervous","nest",
  "never","new","news","newspaper","next","nice","night","nine",
  "no","nobody","nodded","noise","none","noon","nor","north",
  "nose","not","note","noted","nothing","notice","noun","now",
  "number","numeral","nuts","object","observe","obtain","occasionally","occur",
  "ocean","of","off","offer","office","officer","official","oil",
  "old","older","oldest","on","once","one","only","onto",
  "open","operation","opinion","opportunity","opposite","or","orange","orbit",
  "order","ordinary","organization","organized","origin","original","other","ought",
  "our","ourselves","out","outer","outline","outside","over","own",
  "owner","oxygen","pack","package","page","paid","pain","paint",
  "pair","palace","pale","pan","paper","paragraph","parallel","parent",
  "park","part","particles","particular","particularly","partly","parts","party",
  "pass","passage","past","path","pattern","pay","peace","pen",
  "pencil","people","per","percent","perfect","perfectly","perhaps","period",
  "person","personal","pet","phrase","physical","piano","pick","picture",
  "pictured","pie","piece","pig","pile","pilot","pine","pink",
  "pipe","pitch","place","plain","plan","plane","planet","planned",
  "planning","plant","plastic","plate","plates","play","pleasant","please",
  "pleasure","plenty","plural","plus","pocket","poem","poet","poetry",
  "point","pole","police","policeman","political","pond","pony","pool",
  "poor","popular","population","porch","port","position","positive","possible",
  "possibly","post","pot","potatoes","pound","pour","powder","power",
  "powerful","practical","practice","prepare","present","president","press","pressure",
  "pretty","prevent","previous","price","pride","primitive","principal","principle",
  "printed","private","prize","probably","problem","process","produce","product",
  "production","program","progress","promised","proper","properly","property","protection",
  "proud","prove","provide","public","pull","pupil","pure","purple",
  "purpose","push","put","putting","quarter","queen","question","quick",
  "quickly","quiet","quietly","quite","rabbit","race","radio","railroad",
  "rain","raise","ran","ranch","range","rapidly","rate","rather",
  "raw","rays","reach","read","reader","ready","real","realize",
  "rear","reason","recall","receive","recent","recently","recognize","record",
  "red","refer","refused","region","regular","related","relationship","religious",
  "remain","remarkable","remember","remove","repeat","replace","replied","report",
  "represent","require","research","respect","rest","result","return","review",
  "rhyme","rhythm","rice","rich","ride","riding","right","ring",
  "rise","rising","river","road","roar","rock","rocket","rocky",
  "rod","roll","roof","room","root","rope","rose","rough",
  "round","route","row","rubbed","rubber","rule","ruler","run",
  "running","rush","sad","saddle","safe","safety","said","sail",
  "sale","salmon","salt","same","sand","sang","sat","satellites",
  "satisfied","save","saved","saw","say","scale","scared","scene",
  "school","science","scientific","scientist","score","screen","sea","search",
  "season","seat","second","secret","section","see","seed","seeing",
  "seems","seen","seldom","select","selection","sell","send","sense",
  "sent","sentence","separate","series","serious","serve","service","sets",
  "setting","settle","settlers","seven","several","shade","shadow","shake",
  "shaking","shall","shallow","shape","share","sharp","she","sheep",
  "sheet","shelf","shells","shelter","shine","shinning","ship","shirt",
  "shoe","shoot","shop","shore","short","shorter","shot","should",
  "shoulder","shout","show","shown","shut","sick","sides","sight",
  "sign","signal","silence","silent","silk","silly","silver","similar",
  "simple","simplest","simply","since","sing","single","sink","sister",
  "sit","sitting","situation","six","size","skill","skin","sky",
  "slabs","slave","sleep","slept","slide","slight","slightly","slip",
  "slipped","slope","slow","slowly","small","smaller","smallest","smell",
  "smile","smoke","smooth","snake","snow","so","soap","social",
  "society","soft","softly","soil","solar","sold","soldier","solid",
  "solution","solve","some","somebody","somehow","someone","something","sometime",
  "somewhere","son","song","soon","sort","sound","source","south",
  "southern","space","speak","special","species","specific","speech","speed",
  "spell","spend","spent","spider","spin","spirit","spite","split",
  "spoken","sport","spread","spring","square","stage","stairs","stand",
  "standard","star","stared","start","state","statement","station","stay",
  "steady","steam","steel","steep","stems","step","stepped","stick",
  "stiff","still","stock","stomach","stone","stood","stop","stopped",
  "store","storm","story","stove","straight","strange","stranger","straw",
  "stream","street","strength","stretch","strike","string","strip","strong",
  "stronger","struck","structure","struggle","stuck","student","studied","studying",
  "subject","substance","success","successful","such","sudden","suddenly","sugar",
  "suggest","suit","sum","summer","sun","sunlight","supper","supply",
  "support","suppose","sure","surface","surprise","surrounded","swam","sweet",
  "swept","swim","swimming","swing","swung","syllable","symbol","system",
  "table","tail","take","taken","tales","talk","tall","tank",
  "tape","task","taste","taught","tax","tea","teach","teacher",
  "team","tears","teeth","telephone","television","tell","temperature","ten",
  "tent","term","terrible","test","than","thank","that","thee",
  "them","themselves","then","theory","there","therefore","these","they",
  "thick","thin","thing","think","third","thirty","this","those",
  "thou","though","thought","thousand","thread","three","threw","throat",
  "through","throughout","throw","thrown","thumb","thus","thy","tide",
  "tie","tight","tightly","till","time","tin","tiny","tip",
  "tired","title","to","tobacco","today","together","told","tomorrow",
  "tone","tongue","tonight","too","took","tool","top","topic",
  "torn","total","touch","toward","tower","town","toy","trace",
  "track","trade","traffic","trail","train","transportation","trap","travel",
  "treated","tree","triangle","tribe","trick","tried","trip","troops",
  "tropical","trouble","truck","trunk","truth","try","tube","tune",
  "turn","twelve","twenty","twice","two","type","typical","uncle",
  "under","underline","understanding","unhappy","union","unit","universe","unknown",
  "unless","until","unusual","up","upon","upper","upward","us",
  "use","useful","using","usual","usually","valley","valuable","value",
  "vapor","variety","various","vast","vegetable","verb","vertical","very",
  "vessels","victory","view","village","visit","visitor","voice","volume",
  "vote","vowel","voyage","wagon","wait","walk","wall","want",
  "war","warm","warn","was","wash","waste","watch","water",
  "wave","way","we","weak","wealth","wear","weather","week",
  "weigh","weight","welcome","well","went","were","west","western",
  "wet","whale","what","whatever","wheat","wheel","when","whenever",
  "where","wherever","whether","which","while","whispered","whistle","white",
  "who","whole","whom","whose","why","wide","widely","wife",
  "wild","will","willing","win","wind","window","wing","winter",
  "wire","wise","wish","with","within","without","wolf","women",
  "won","wonder","wonderful","wood","wooden","wool","word","wore",
  "work","worker","world","worried","worry","worse","worth","would",
  "wrapped","write","writer","writing","written","wrong","wrote","yard",
  "year","yellow","yes","yesterday","yet","you","young","younger",
  "your","yourself","youth","zero","zebra","zipper","zoo","zulu"
];

function words(options) {

  function word() {
    if (options && options.maxLength > 1) {
      return generateWordWithMaxLength();
    } else {
      return generateRandomWord();
    }
  }

  function generateWordWithMaxLength() {
    var rightSize = false;
    var wordUsed;
    while (!rightSize) {  
      wordUsed = generateRandomWord();
      if(wordUsed.length <= options.maxLength) {
        rightSize = true;
      }

    }
    return wordUsed;
  }

  function generateRandomWord() {
    return wordList[randInt(wordList.length)];
  }

  function randInt(lessThan) {
    return Math.floor(Math.random() * lessThan);
  }

  // No arguments = generate one word
  if (typeof(options) === 'undefined') {
    return word();
  }

  // Just a number = return that many words
  if (typeof(options) === 'number') {
    options = { exactly: options };
  }

  // options supported: exactly, min, max, join
  if (options.exactly) {
    options.min = options.exactly;
    options.max = options.exactly;
  }
  
  // not a number = one word par string
  if (typeof(options.wordsPerString) !== 'number') {
    options.wordsPerString = 1;
  }

  //not a function = returns the raw word
  if (typeof(options.formatter) !== 'function') {
    options.formatter = (word) => word;
  }

  //not a string = separator is a space
  if (typeof(options.separator) !== 'string') {
    options.separator = ' ';
  }

  var total = options.min + randInt(options.max + 1 - options.min);
  var results = [];
  var token = '';
  var relativeIndex = 0;

  for (var i = 0; (i < total * options.wordsPerString); i++) {
    if (relativeIndex === options.wordsPerString - 1) {
      token += options.formatter(word(), relativeIndex);
    }
    else {
      token += options.formatter(word(), relativeIndex) + options.separator;
    }
    relativeIndex++;
    if ((i + 1) % options.wordsPerString === 0) {
      results.push(token);
      token = ''; 
      relativeIndex = 0;
    }
   
  }
  if (typeof options.join === 'string') {
    results = results.join(options.join);
  }

  return results;
}

module.exports = words;
// Export the word list as it is often useful
words.wordList = wordList;


/***/ }),

/***/ 379:
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 569:
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ 216:
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ 565:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 795:
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ 589:
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ 100:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = true;
exports.n = void 0;
exports.n = [
'가게',
'가게에서',
'가격',
'가격은',
'가계',
'가구',
'가기',
'가까운',
'가까워져서',
'가까웠던',
'가까이',
'가끔',
'가끔씩',
'가끔은',
'가끔은',
'가난',
'가난과',
'가네',
'가는',
'가는데',
'가능',
'가능성',
'가능성이',
'가능해진',
'가닥',
'가담',
'가담해',
'가담했다가',
'가두지',
'가득',
'가득찼던',
'가득히',
'가득히',
'가려진',
'가령',
'가로',
'가로등',
'가로막는',
'가로수',
'가루',
'가르치기도',
'가르치는',
'가르치지도',
'가르침',
'가르침을',
'가리고',
'가리지',
'가리켜',
'가리키는',
'가릴',
'가만',
'가만히',
'가면',
'가명을',
'가문의',
'가문이었고',
'가뭄',
'가방',
'가버리고',
'가버리는',
'가벼움',
'가볍게',
'가부장',
'가부장권과',
'가부장들을',
'가부장을',
'가부장의',
'가부장적',
'가부장제',
'가부장제',
'가부장제를',
'가부장제에',
'가부장제의',
'가부장제하',
'가사',
'가사노동에',
'가사노동을',
'가상',
'가서',
'가석방',
'가수',
'가스',
'가슴',
'가슴',
'가슴',
'가슴과',
'가슴속',
'가슴에',
'가슴에서',
'가슴을',
'가슴이',
'가신',
'가야만',
'가야지',
'가오',
'가요',
'가운데',
'가위',
'가을',
'가을과',
'가을의',
'가이드',
'가입',
'가입자',
'가입하는',
'가자는',
'가장',
'가장',
'가장',
'가정',
'가정과',
'가정교사',
'가정생활',
'가정에서',
'가정에서만',
'가정을',
'가정의',
'가정일과',
'가정주부가',
'가정할',
'가져야',
'가져야겠소',
'가져야할',
'가져왔다',
'가져요',
'가졌고',
'가졌는데',
'가졌던',
'가족',
'가족',
'가족과',
'가족도',
'가족은',
'가족의',
'가족제도를',
'가죽',
'가지',
'가지가',
'가지게',
'가지고',
'가지의',
'가지인',
'가진',
'가진',
'가진다',
'가짜',
'가치',
'가치관',
'가치관과',
'가치관을',
'가치관이',
'가톨릭',
'가하게',
'가해지는',
'가했다',
'가했다는',
'가했지만',
'각각',
'각각의',
'각국',
'각국에도',
'각국의',
'각기',
'각설이가',
'각성하고',
'각성하여',
'각오',
'각인된',
'각자',
'각종',
'각주',
'각지를',
'각지에서',
'각지의',
'간격',
'간과돼서는',
'간난이라',
'간다든지',
'간다면',
'간단한',
'간단히',
'간략하고',
'간부',
'간섭',
'간소하게',
'간수도',
'간식',
'간신히',
'간에',
'간의',
'간장',
'간접',
'간접으로',
'간접적',
'간청',
'간청에',
'간청하는',
'간판',
'간행된',
'간행한',
'간호',
'간호로',
'간호사',
'간혹',
'갈등',
'갈등과',
'갈등을',
'갈등이',
'갈등하는',
'갈망한',
'갈망한다',
'갈망했으며',
'갈비',
'갈비탕',
'갈색',
'갈수록',
'갈아타고',
'갈증',
'감각',
'감기',
'감기고',
'감독',
'감독은',
'감독을',
'감독의',
'감독이',
'감독하고',
'감동',
'감동받은',
'감동적',
'감사',
'감사해',
'감상',
'감상문',
'감상에',
'감상을',
'감상이',
'감성',
'감성이',
'감소',
'감수성',
'감시를',
'감시와',
'감시의',
'감시했고',
'감싸네',
'감았지',
'감옥',
'감옥이었고',
'감으며',
'감으면',
'감자',
'감정',
'감정가가',
'감정과',
'감정들을',
'감정에',
'감정을',
'감정이',
'감정이라',
'감정이라고',
'감정이며',
'감정적',
'감행',
'감행하고',
'감회를',
'감히',
'갑론을박',
'갑자기',
'갑작스러운',
'값없는',
'갔고',
'갔으나',
'갔으며',
'갔을때',
'갔지만',
'강당',
'강도',
'강력한',
'강력히',
'강렬하게',
'강렬한',
'강물',
'강박관념을',
'강변',
'강사',
'강사로',
'강수량',
'강아지',
'강에',
'강에',
'강연',
'강연을',
'강연활동',
'강연활동을',
'강요',
'강요되고',
'강요되는',
'강요된',
'강요라는',
'강요로',
'강요를',
'강요와',
'강요의',
'강요하는',
'강요하였고',
'강요한',
'강요한다고',
'강요해서는',
'강의',
'강의하였고',
'강제',
'강제로',
'강제할',
'강조',
'강조하는',
'강조하여',
'강하게',
'강한',
'강해지지',
'갖가지',
'갖게',
'갖는',
'갖지',
'갖춘',
'같다면',
'같아',
'같아',
'같은',
'같은',
'같은반',
'같이',
'개개인',
'개개인에',
'개개인의',
'개개인이',
'개관',
'개구리',
'개국',
'개나리',
'개념은',
'개념을',
'개념의',
'개념이',
'개념치',
'개량론에',
'개량에',
'개량하는',
'개명',
'개미',
'개발',
'개발되는',
'개발자',
'개방',
'개방이',
'개벽',
'개벽에',
'개벽지',
'개별',
'개선',
'개성',
'개성과',
'개성까지',
'개성에',
'개성의',
'개업',
'개업을',
'개의치',
'개인',
'개인에게만',
'개인을',
'개인의',
'개인적',
'개인적인',
'개인전과',
'개인전에서',
'개인전은',
'개인정보',
'개인정보가',
'개인주의',
'개인주의관',
'개인주의를',
'개입은',
'개입하는',
'개조하는',
'개진하는',
'개척자',
'개최',
'개최되고',
'개최된',
'개최한',
'개탄하는',
'개혁론',
'개화',
'개화기에',
'개화당',
'개화당의',
'개화된',
'개화파의',
'객관적',
'객사한',
'갤러리',
'거기',
'거기에',
'거꾸로',
'거느리는',
'거니는',
'거대한',
'거동도',
'거동이',
'거두지',
'거듭',
'거듭되면서',
'거듭했고',
'거라',
'거라고',
'거라고',
'거래로',
'거래에',
'거론된',
'거론했으며',
'거룩하고',
'거룩한',
'거리',
'거리가',
'거리낌',
'거리를',
'거리에서',
'거부',
'거부감을',
'거부로',
'거부반응을',
'거부하고',
'거부하는',
'거부하라',
'거부하면',
'거부하오',
'거사',
'거상',
'거세었고',
'거실',
'거액',
'거야',
'거역할',
'거와',
'거울',
'거울',
'거의',
'거절을',
'거절하게',
'거주하는',
'거지요',
'거짓',
'거짓말',
'거짓말하고',
'거짓이며',
'거창한',
'거처를',
'거처에는',
'거처와',
'거쳐',
'거쳐서',
'거침없는',
'거침없이',
'거품',
'걱정',
'건강',
'건강도',
'건강을',
'건강이',
'건너',
'건너가',
'건너가려',
'건너가서',
'건너갔지만',
'건너편',
'건널',
'건네려는',
'건드리면',
'건립',
'건립이',
'건물',
'건물에',
'건물을',
'건설',
'건설하는',
'건의로',
'건조',
'건지',
'건지어야',
'건축',
'건축가',
'건축물들을',
'걷게',
'걷기',
'걷는다',
'걷던',
'걷어낸',
'걸고',
'걸레라고',
'걸레라는',
'걸려',
'걸리기도',
'걸린',
'걸면',
'걸어가는',
'걸어가는걸',
'걸어갈',
'걸어온',
'걸어왔던',
'걸었던',
'걸었어',
'걸으리',
'걸을',
'걸음',
'걸음으로',
'걸음처럼',
'걸작이',
'걸쳐',
'걸쳐서',
'검거를',
'검사',
'검색',
'검색순위',
'검시도',
'검열',
'검열에',
'검열을',
'검열이',
'검열한다며',
'검은색',
'검정색',
'검토',
'겁없는',
'겁이',
'것과',
'것까지도',
'것도',
'것도',
'것들',
'것들을',
'것들을',
'것들이',
'것들이',
'것만',
'것만',
'것만이',
'것보다는',
'것뿐이라고',
'것에',
'것으로',
'것으로',
'것은',
'것은',
'것을',
'것을',
'것이',
'것이',
'것이고',
'것이기에',
'것이니',
'것이다',
'것이라',
'것이라고',
'것이라는',
'것이라던가',
'것이라며',
'것이리라',
'것이며',
'것이므로',
'것이어서',
'것이었지만',
'것이오',
'것이요',
'것이죠',
'것이지',
'것인가에',
'것인지',
'것인지에',
'것조차',
'것처럼',
'것처럼',
'겉핥기지',
'게다가',
'게르다',
'게시판',
'게이오',
'게이트웨이',
'게임',
'게임인걸',
'게재된',
'게재한',
'겨냥한',
'겨레',
'겨레와',
'겨우',
'겨울',
'겨울에',
'겨울에도',
'겨울이',
'겨울철',
'겨자',
'격렬한',
'겪게',
'겪는',
'겪었던',
'겪은',
'견고한',
'견디는',
'견디지',
'견문',
'견학',
'견해',
'견해가',
'견해를',
'결과',
'결과는',
'결과를',
'결과물로',
'결과적',
'결국',
'결론',
'결론을',
'결말밖에',
'결별',
'결별을',
'결석',
'결성해',
'결승',
'결심',
'결심을',
'결심하면서',
'결심한',
'결심했던',
'결정',
'결정적',
'결정체이며',
'결정하는데',
'결집할',
'결코',
'결합이',
'결합하는',
'결합한',
'결핵',
'결핵을',
'결핵의',
'결혼',
'결혼과',
'결혼관',
'결혼관과',
'결혼관에',
'결혼도',
'결혼론',
'결혼보다는',
'결혼생활',
'결혼식',
'결혼식만',
'결혼식은',
'결혼식을',
'결혼에',
'결혼에서의',
'결혼으로',
'결혼은',
'결혼을',
'결혼의',
'결혼이',
'결혼이나',
'결혼이란',
'결혼하게',
'결혼하고',
'결혼하는',
'결혼하라는',
'결혼하면',
'결혼한',
'결혼할',
'겸비해야',
'겹겹이',
'겹친',
'경계',
'경계를',
'경고',
'경고로',
'경기',
'경기장',
'경력',
'경력과',
'경비',
'경시하며',
'경영',
'경우',
'경우는',
'경이',
'경쟁',
'경쟁력',
'경쟁하고',
'경쟁했는데',
'경전의',
'경제',
'경제력',
'경제사정이',
'경제적',
'경제적으로',
'경제적인',
'경제학',
'경찰',
'경찰관',
'경찰까지',
'경찰들의',
'경찰서',
'경찰에',
'경찰을',
'경찰의',
'경치',
'경향',
'경향도',
'경향은',
'경향을',
'경향이',
'경험',
'경험으로',
'경험을',
'경험한',
'곁에',
'곁을',
'계곡',
'계급에',
'계기가',
'계기로',
'계단',
'계란',
'계몽',
'계몽적',
'계산',
'계산기',
'계속',
'계속되는',
'계속되니까',
'계속되면서',
'계속되었고',
'계속된',
'계속하게',
'계속해서',
'계승된다',
'계승된다고',
'계시나요',
'계신',
'계약',
'계열의',
'계율이지',
'계절',
'계절엔',
'계절이',
'계정',
'계정으로',
'계정을',
'계정의',
'계정이',
'계좌',
'계층',
'계통인',
'계획',
'계획을',
'계획하고',
'고개',
'고개를',
'고객',
'고객에',
'고객지원',
'고결한',
'고교',
'고구려',
'고구마',
'고궁',
'고궁의',
'고근',
'고급',
'고기',
'고난에',
'고뇌',
'고단한',
'고단함을',
'고달픈',
'고달픔이',
'고대',
'고독',
'고독이',
'고된',
'고된가요',
'고등여학교',
'고등학교',
'고등학생',
'고래와',
'고려원',
'고립돼',
'고립되어',
'고마워요',
'고만',
'고모',
'고모가',
'고모는',
'고모를',
'고모부',
'고모의',
'고모할머니',
'고무신',
'고문으로',
'고민',
'고민하고',
'고민하는',
'고백',
'고백을',
'고백했던',
'고생',
'고생한',
'고생했지만',
'고소를',
'고속',
'고속도로',
'고속버스',
'고수',
'고수하도록',
'고스란히',
'고스톱',
'고승',
'고아',
'고아가',
'고아원과',
'고아의',
'고안한',
'고암',
'고액권',
'고양이',
'고용불안에',
'고용해',
'고운',
'고운',
'고위',
'고작',
'고장',
'고전',
'고전기',
'고증이',
'고집',
'고쳤다가',
'고추',
'고추장',
'고춧가루',
'고취한다는',
'고취했고',
'고치고',
'고통',
'고통과',
'고통받는',
'고통스러운',
'고통을',
'고프면',
'고함',
'고향',
'고향인',
'곡두여',
'곡식',
'곡을',
'곤란한',
'곤혹을',
'곤히',
'곧바로',
'곧이어',
'곧잘',
'곧장',
'골고루',
'골렘',
'골목',
'골목길',
'골목인',
'골방에',
'골짜기',
'골치',
'골프',
'골프장',
'곳곳',
'곳도',
'곳아',
'곳에서',
'곳에서',
'곳에서는',
'곳을',
'곳의',
'곳의',
'곳이',
'공간',
'공간감',
'공간과',
'공간의',
'공간인',
'공감보다는',
'공감을',
'공감했고',
'공개',
'공개돼',
'공개된',
'공개장',
'공개적으로',
'공개적인',
'공개해',
'공격',
'공격방법을',
'공격을',
'공격의',
'공경하라',
'공고',
'공고라',
'공공',
'공공연한',
'공공연히',
'공군',
'공급',
'공기',
'공동',
'공동묘지에',
'공동으로',
'공동의',
'공무원',
'공백과',
'공부',
'공부도',
'공부를',
'공부에',
'공부하러',
'공부한',
'공부했고',
'공사',
'공상도',
'공상입니다',
'공세로',
'공세를',
'공식',
'공식적',
'공식적으로',
'공업',
'공연',
'공연장',
'공연한',
'공연히',
'공예',
'공용에',
'공원',
'공원은',
'공원을',
'공유',
'공유하고',
'공유하고자',
'공장',
'공저',
'공정하게',
'공제',
'공주',
'공중',
'공중전화',
'공지들도',
'공직에',
'공짜',
'공창',
'공채한',
'공책',
'공처가',
'공천',
'공통',
'공통된',
'공통적',
'공통점',
'공포',
'공표했을',
'공항',
'공항버스',
'공해',
'공허를',
'공허한',
'공휴일',
'과감하게',
'과감히',
'과거',
'과거를',
'과거에',
'과거의',
'과도기',
'과도기에',
'과도한',
'과로로',
'과목',
'과부',
'과실',
'과실에서',
'과연',
'과외',
'과의',
'과일',
'과자',
'과장',
'과정',
'과정과',
'과정에서',
'과정을',
'과제',
'과학',
'과학에',
'과학자',
'과학자의',
'과학적',
'곽은숙',
'관객',
'관계',
'관계가',
'관계는',
'관계로',
'관계를',
'관계만이',
'관계없이',
'관계에',
'관계자',
'관계하는',
'관광',
'관광객',
'관광명소로',
'관광버스',
'관광지',
'관광지를',
'관광코스가',
'관광하고',
'관념',
'관념은',
'관념을',
'관념의',
'관념이',
'관람',
'관람객',
'관람자가',
'관람하고',
'관람하러',
'관련',
'관련된',
'관련자들을',
'관료라도',
'관료로',
'관료였던',
'관료의',
'관리',
'관리에게',
'관보',
'관보에는',
'관사로',
'관사에서',
'관습',
'관습에',
'관습을',
'관심',
'관심갖게',
'관심사',
'관심은',
'관심을',
'관여하는',
'관여하여',
'관절염',
'관점',
'관점에',
'관직에',
'관찰',
'관찰하던',
'관찰한',
'관한',
'관해',
'관해서는',
'광경',
'광고',
'광고가',
'광고로',
'광고를',
'광고하여',
'광기',
'광랑',
'광명이',
'광무',
'광복',
'광복과',
'광복에',
'광장',
'괜찮으나',
'괜찮을',
'괜히',
'괴담',
'괴로울',
'괴로움',
'괴로움을',
'괴롭혔고',
'괴물',
'괴물에',
'괴물은',
'괴물을',
'괴물이',
'굉장한',
'굉장히',
'교과서',
'교내',
'교대',
'교령이든',
'교류',
'교문',
'교복',
'교사',
'교사로',
'교사와',
'교사직도',
'교사직을',
'교섭은',
'교섭이',
'교수',
'교수가',
'교수는',
'교수로',
'교수를',
'교수인',
'교수형에',
'교시',
'교시를',
'교실',
'교실로',
'교양',
'교외',
'교육',
'교육가들이',
'교육과',
'교육법',
'교육법은',
'교육비',
'교육사업에',
'교육을',
'교육의',
'교육자',
'교장',
'교재',
'교제',
'교제를',
'교제의',
'교제했는데',
'교직',
'교체',
'교통',
'교통사고',
'교포',
'교환',
'교회',
'교회에',
'교훈',
'구겨지고',
'구경',
'구경을',
'구경하고',
'구경한',
'구글',
'구도',
'구도의',
'구두',
'구름',
'구멍',
'구미',
'구별',
'구분',
'구사했고',
'구석',
'구석구석',
'구성',
'구성과',
'구성된',
'구성물로',
'구성원',
'구성원들의',
'구성원들이',
'구성해',
'구속',
'구속을',
'구속이',
'구습과',
'구습에',
'구식',
'구실을',
'구애를',
'구애했지만',
'구약성서',
'구약의',
'구역',
'구월',
'구입',
'구입했고',
'구절들을',
'구절을',
'구절을',
'구조',
'구조가',
'구조는',
'구질구질한',
'구청',
'구체적',
'구체적으로',
'구타를',
'구타하는',
'구하던',
'구한말의',
'구해서',
'구호를',
'국가',
'국가가',
'국가를',
'국가별',
'국가와',
'국가의',
'국가적',
'국경',
'국권이',
'국기',
'국내',
'국내로',
'국내를',
'국내선',
'국내에',
'국내에서',
'국내에서는',
'국내외',
'국내외서',
'국내의',
'국립',
'국물',
'국민',
'국민이',
'국민적',
'국사',
'국산',
'국수',
'국어',
'국왕',
'국적',
'국적의',
'국전',
'국제',
'국제선',
'국제적',
'국제화',
'국회',
'국회의원',
'국회의원을',
'군대',
'군데',
'군림하는',
'군무부',
'군사',
'군수로',
'군수를',
'군인',
'군주의',
'굳어버린',
'굳어져',
'굳이',
'굳혔으나',
'굴레',
'굴레라고',
'굴레에서',
'굴하지',
'굶주린',
'굽혔었어요',
'굽히지',
'궁극적',
'궁핍과',
'궁핍하고',
'궂은',
'권고',
'권고가',
'권고로',
'권고를',
'권고했던',
'권고했지만',
'권력을',
'권리',
'권리가',
'권리는',
'권리도',
'권리라',
'권리라며',
'권리를',
'권리와',
'권위',
'권위',
'권위를',
'권위와',
'권위적인',
'권유',
'권유도',
'권유로',
'권태에',
'권투',
'귀가',
'귀감을',
'귀감이',
'귀국',
'귀국길에',
'귀국하면',
'귀국하여',
'귀국하지도',
'귀국한',
'귀국할',
'귀국해야',
'귀국했지만',
'귀국후',
'귀신',
'귀에는',
'귀의',
'귀의할',
'귀의해',
'귀족의',
'귀한',
'귓속',
'규모',
'규모가',
'규범',
'규원',
'규정',
'규정에',
'규정이',
'규정하는',
'규칙',
'규칙적',
'균제된',
'균형',
'그가',
'그간',
'그거',
'그것',
'그것은',
'그것을',
'그것이',
'그곳',
'그곳에',
'그곳에서',
'그나마',
'그날',
'그날들',
'그날을',
'그날의',
'그날이',
'그냥',
'그네들은',
'그네의',
'그녀',
'그녀가',
'그녀는',
'그녀들',
'그녀들은',
'그녀를',
'그녀만이',
'그녀에',
'그녀의',
'그놈',
'그는',
'그는',
'그늘',
'그다음',
'그다지',
'그대',
'그대',
'그대가',
'그대가',
'그대가',
'그대들은',
'그대들의',
'그대로',
'그대로',
'그대로',
'그대로가',
'그대를',
'그대에게는',
'그대여',
'그도',
'그동안',
'그들은',
'그들의',
'그들이',
'그때',
'그때',
'그때그때',
'그때까지',
'그때는',
'그때문에',
'그땐',
'그땐',
'그래',
'그래',
'그래도',
'그래서',
'그래야',
'그래픽',
'그랜드',
'그램',
'그랬었지요',
'그러나',
'그러니',
'그러니까',
'그러면',
'그러므로',
'그러세요',
'그러자',
'그러한',
'그런',
'그런',
'그런것을',
'그런대로',
'그런데',
'그럴',
'그럼',
'그럼에도',
'그렇게',
'그렇게도',
'그렇고',
'그렇기',
'그렇지',
'그렇지만',
'그려',
'그려가고',
'그려서',
'그려져',
'그렸는데',
'그렸으며',
'그로부터',
'그루',
'그룹',
'그룹과',
'그를',
'그릇',
'그릇된',
'그리',
'그리고',
'그리고는',
'그리곤',
'그리기도',
'그리는',
'그리는데',
'그리로',
'그리며',
'그리면서',
'그리운',
'그리움',
'그리움에',
'그리워',
'그리워라는',
'그리워하고',
'그리지는',
'그리하여',
'그리했소',
'그린',
'그린',
'그림',
'그림공부에',
'그림과',
'그림도',
'그림뿐',
'그림에',
'그림에서는',
'그림엽서',
'그림으로',
'그림으로만',
'그림은',
'그림은커녕',
'그림을',
'그림의',
'그림이',
'그림자',
'그림전',
'그립지는',
'그만',
'그만두게',
'그만두고',
'그만큼',
'그말에',
'그믐밤',
'그밖에',
'그밖에도',
'그분',
'그사이',
'그야말로',
'그어놓은',
'그에',
'그에게',
'그에게는',
'그와',
'그윽',
'그의',
'그이',
'그이가',
'그저',
'그저께',
'그전',
'그제서야',
'그제야',
'그중',
'그중에도',
'그쪽',
'그치지',
'그토록',
'그해',
'극단적인',
'극도의',
'극복',
'극복하는',
'극복할',
'극본을',
'극에',
'극작가',
'극장',
'극장에서',
'극적으로',
'극적인',
'극화한',
'극히',
'근거',
'근교',
'근대',
'근대가',
'근대미술',
'근대성',
'근대식',
'근대여성',
'근대와',
'근대의',
'근대적',
'근데',
'근래',
'근로',
'근로자',
'근무',
'근무하기도',
'근무하면서',
'근본',
'근본적',
'근원',
'근육',
'근육과',
'근처',
'근처에',
'근처에서',
'글과',
'글도',
'글들을',
'글래스',
'글래스가',
'글로',
'글로만',
'글빛',
'글쎄',
'글쎄요',
'글쓰기',
'글쓰기는',
'글쓰기를',
'글씨',
'글에',
'글에서',
'글은',
'글을',
'글의',
'글이',
'글자',
'글자로',
'글자를',
'글항아리',
'금고',
'금기를',
'금기시',
'금기시되는',
'금기에',
'금기였던',
'금년',
'금메달',
'금방',
'금방울',
'금세',
'금액',
'금액으로',
'금연',
'금요일',
'금지',
'금지되지만',
'금지된',
'금지해야',
'급격히',
'급박한',
'급속도로',
'급속한',
'급속히',
'급장',
'급히',
'긍정적',
'기간',
'기계',
'기계처럼',
'기고',
'기고문을',
'기고문이나',
'기고하기도',
'기고하여',
'기고한',
'기고활동을',
'기관',
'기관지',
'기관지를',
'기관지인',
'기교만',
'기구',
'기기',
'기기를',
'기념',
'기념관',
'기념으로',
'기념일',
'기념품',
'기념하는',
'기념하며',
'기념하여',
'기는',
'기능',
'기능도',
'기능에',
'기능을',
'기능이',
'기다리기도',
'기다리다가',
'기다리던',
'기대',
'기대로',
'기댈',
'기도',
'기도로',
'기도하고',
'기독교',
'기독교계',
'기독교를',
'기둥',
'기량을',
'기로',
'기록',
'기록되었고',
'기록된',
'기록에',
'기록에서',
'기록이',
'기록하고',
'기록해',
'기르면서',
'기를',
'기름',
'기반으로',
'기반한',
'기법',
'기법으로',
'기법을',
'기법이',
'기본',
'기본적',
'기분',
'기분상',
'기쁜',
'기쁨',
'기쁨에',
'기사',
'기사에서',
'기성',
'기성세대',
'기숙사',
'기숙사까지',
'기숙사로',
'기숙사를',
'기술',
'기술을',
'기술자',
'기술자들과',
'기술하고',
'기억',
'기억나요',
'기억도',
'기억된',
'기억력이',
'기억에',
'기억에서',
'기억을',
'기억의',
'기억하고',
'기억하는',
'기억할',
'기억해내면',
'기업',
'기업들도',
'기업들의',
'기업인',
'기여',
'기여한다',
'기온',
'기운',
'기원',
'기원을',
'기원이',
'기원이라고',
'기원전',
'기원전',
'기자',
'기자로',
'기자를',
'기자인',
'기자회',
'기작을',
'기적',
'기정',
'기존',
'기존의',
'기존의',
'기준',
'기준이',
'기질을',
'기차',
'기초',
'기초로',
'기초를',
'기초적',
'기초한',
'기침',
'기타',
'기폭사건',
'기피',
'기피되던',
'기피증에',
'기하학적',
'기행문',
'기행문과',
'기행문으로',
'기행문인',
'기형의',
'기호',
'기호가',
'기호를',
'기혼',
'기혼이었던',
'기회',
'기회가',
'기회는',
'기회를',
'기획',
'기획해야',
'기후',
'기후변화',
'긴급',
'긴긴',
'긴념을',
'긴장',
'긴장감',
'길가',
'길거리',
'길도',
'길들여진',
'길러낸',
'길로',
'길로는',
'길에',
'길은',
'길을',
'길이',
'길이라고도',
'김밥',
'김치',
'김치찌개',
'깊게',
'깊게',
'깊숙이',
'깊은',
'깊이',
'까닭',
'까닭에',
'까닭으로',
'까마득히',
'까만색',
'까무잡잡한',
'까치',
'까칠할수록',
'깔끔한',
'깜빡',
'깜짝',
'깡패',
'깨끗이',
'깨끗하게',
'깨끗하고',
'깨끗함',
'깨는',
'깨닫기도',
'깨달아야',
'깨달았다고',
'깨달은',
'깨달음',
'깨려고도',
'깨려는',
'깨려면',
'깨소금',
'깨어나',
'깨어서',
'깨인',
'깨진',
'깼나',
'꺾었을',
'껍질',
'꼬리',
'꼬리잘린',
'꼬마',
'꼭대기',
'꼼꼼하게',
'꼼짝',
'꼽을',
'꼽자면',
'꽂는',
'꽂아주오',
'꽃과',
'꽃구경을',
'꽃내음에',
'꽃도',
'꽃들이',
'꽃들처럼',
'꽃말을',
'꽃씨',
'꽃으로',
'꽃을',
'꽃이',
'꽃잎',
'꽃장사',
'꾸게',
'꾸린',
'꾸었던',
'꾸었지',
'꾸잖아',
'꾸준히',
'꾸중',
'꿈꾸게',
'꿈꾸기',
'꿈꾸리',
'꿈꾸어',
'꿈꾸었는가',
'꿈꾸었던',
'꿈꾸지',
'꿈꾼',
'꿈도',
'꿈들',
'꿈속',
'꿈속을',
'꿈에서',
'꿈은',
'꿈은',
'꿈을',
'꿈을',
'꿈조차',
'뀌여',
'끈을',
'끈질긴',
'끊임없이',
'끊지',
'끌려나는',
'끌어내야',
'끌어들이자',
'끌지',
'끝나는',
'끝나니까',
'끝나자',
'끝난',
'끝난다면',
'끝내',
'끝낼',
'끝도',
'끝없이',
'끝에',
'끝엔',
'끝으로',
'끝은',
'끝을',
'나가',
'나가는',
'나가서',
'나가야',
'나간',
'나갔더니',
'나그네',
'나그네여',
'나나나',
'나나나나',
'나날을',
'나네',
'나누던',
'나누어',
'나눌',
'나는',
'나는',
'나더라도',
'나도',
'나들이',
'나라',
'나라는',
'나라를',
'나라에서도',
'나라의',
'나란히',
'나르면서',
'나를',
'나를',
'나를',
'나를',
'나름',
'나만',
'나만을',
'나만의',
'나머지',
'나무',
'나물',
'나뭇가지',
'나뭇잎',
'나부터도',
'나비',
'나뿐',
'나쁘단',
'나쁜',
'나쁜지',
'나사',
'나서',
'나서는',
'나서야',
'나섰다고',
'나아가',
'나아지',
'나아질',
'나에게',
'나에게',
'나에게도',
'나열',
'나열을',
'나열이라',
'나오기도',
'나오는',
'나오자',
'나오지',
'나온',
'나올',
'나와',
'나와서',
'나왔던',
'나왔어요',
'나의',
'나의',
'나의',
'나이',
'나이가',
'나이도',
'나이로',
'나이아가라',
'나이에',
'나주',
'나중',
'나중에',
'나중에는',
'나지',
'나지않아',
'나체에',
'나침반',
'나타나',
'나타나고',
'나타나기',
'나타나기도',
'나타나는데',
'나타나면서',
'나타난',
'나타났다며',
'나타났으며',
'나팔꽃',
'나흘',
'낙엽',
'낙인',
'낙인만',
'낙인찍히며',
'낚시',
'낚시꾼',
'낚싯대',
'난리',
'난무한',
'난방',
'난자',
'난쟁이',
'날개',
'날고',
'날들을',
'날들이',
'날려',
'날로',
'날리고',
'날씨',
'날아가버린',
'날아오기도',
'날아오는',
'날아오르네',
'날아오르는',
'날에도',
'날을',
'날의',
'날의',
'날이',
'날이라고',
'날이면',
'날임을',
'날짜',
'날짜와',
'날카로운',
'날카롭고',
'낡은',
'남게',
'남겨',
'남겼겨',
'남겼다는',
'남겼으나',
'남기기도',
'남기는',
'남기로',
'남긴',
'남녀',
'남녀간의',
'남녀관계',
'남녀관계에',
'남녀는',
'남녀동권을',
'남녀를',
'남녀의',
'남녀차별이',
'남녀평등관',
'남녀평등론',
'남녀평등에',
'남녀평등을',
'남동생',
'남들',
'남들이',
'남루를',
'남루한',
'남매',
'남매들',
'남문',
'남부',
'남북',
'남성',
'남성과',
'남성과',
'남성과의',
'남성관',
'남성관계에',
'남성들과',
'남성들아',
'남성들에',
'남성들은',
'남성들의',
'남성들이',
'남성성',
'남성에',
'남성에',
'남성에게',
'남성에게',
'남성우월',
'남성으로',
'남성은',
'남성을',
'남성의',
'남성의',
'남성이',
'남성이',
'남성이고',
'남성이란',
'남성이며',
'남성작가는',
'남성중심',
'남아',
'남아있는',
'남아있던',
'남에게',
'남은',
'남을',
'남의',
'남자',
'남자가',
'남자나',
'남자는',
'남자도',
'남자들',
'남자들과',
'남자들도',
'남자들에',
'남자들은',
'남자들의',
'남자들이',
'남자라면',
'남자를',
'남자사회를',
'남자상',
'남자에게',
'남자에게도',
'남자와',
'남자의',
'남자친구의',
'남자친구인',
'남쪽',
'남창리',
'남편',
'남편감에게',
'남편감이',
'남편과',
'남편과의',
'남편도',
'남편만을',
'남편에게',
'남편으로',
'남편은',
'남편을',
'남편의',
'남편이',
'남편이나',
'남편인',
'남학생',
'남학생들이',
'낭만적',
'낭비',
'낭비라고',
'낱말',
'낳게',
'낳기도',
'낳는',
'낳았다는',
'낳았지만',
'낳은',
'내가',
'내가',
'내게',
'내게',
'내게는',
'내게도',
'내고',
'내과',
'내기도',
'내내',
'내년',
'내는',
'내달',
'내딛는',
'내려가',
'내려온',
'내려와',
'내려지는',
'내려지자',
'내리게',
'내리느냐고',
'내리지만',
'내린다',
'내린다면',
'내릴',
'내며',
'내면',
'내면심리를',
'내밀',
'내버리다가',
'내보일',
'내부',
'내부의',
'내비쳤지만',
'내사를',
'내서',
'내세우는',
'내세운',
'내야지',
'내어',
'내에',
'내에서',
'내에서는',
'내외',
'내외에게',
'내용',
'내용도',
'내용물',
'내용을',
'내용의',
'내용이',
'내의',
'내일',
'내일',
'내일도',
'내일로',
'내일은',
'내일이',
'내재된',
'내적',
'내조를',
'내조하는',
'내주기도',
'내지',
'내청각',
'내치지',
'내키는',
'내포된',
'내후년',
'냄비',
'냄새',
'냇물',
'냈고',
'냈다',
'냉대',
'냉대를',
'냉대에',
'냉대와',
'냉동',
'냉락',
'냉면',
'냉방',
'냉소와',
'냉소적인',
'냉장고',
'냉정하게',
'너는',
'너도',
'너도',
'너를',
'너를',
'너를',
'너머',
'너머로',
'너무',
'너무나',
'너에게',
'너에게로',
'너와',
'너와',
'너와',
'너의',
'너처럼',
'너희',
'너희가',
'너희는',
'너희의',
'널리',
'넓고',
'넓히고자',
'넘게',
'넘나들던',
'넘는',
'넘어',
'넘어서',
'넘었고',
'넘은',
'넘지',
'넘치네',
'넘치는',
'넣어',
'넣으며',
'넣을',
'네가',
'네가',
'네거리',
'네이버',
'네이트',
'네트워크',
'네티즌',
'넥타이',
'넷째',
'녀석',
'노동',
'노동과',
'노동사',
'노동자',
'노동자에',
'노동자의',
'노동하는',
'노라',
'노라에도',
'노라의',
'노란',
'노란색',
'노래',
'노래가',
'노래는',
'노래로',
'노래를',
'노래를',
'노래방',
'노래여',
'노래하는',
'노래한',
'노랫소리',
'노력',
'노력에서',
'노력은',
'노력을',
'노력이',
'노력하면',
'노력했고',
'노력했으나',
'노루',
'노릇을',
'노릇인지',
'노리개를',
'노선',
'노예로',
'노예의',
'노을이',
'노인',
'노인과',
'노인층은',
'노출증적',
'노트',
'녹색',
'녹으리',
'녹음',
'녹차',
'녹화',
'논객은',
'논란',
'논란과',
'논란을',
'논란이',
'논리',
'논리에',
'논리적',
'논문',
'논박',
'논박을',
'논설',
'논설과',
'논설들을',
'논설을',
'논쟁',
'논지를',
'논하기',
'놀라고',
'놀라울',
'놀라워하여',
'놀랄',
'놀랐던',
'놀랐어요',
'놀랐지요',
'놀림감과',
'놀아주랴',
'놀이',
'놀이터',
'농가',
'농구',
'농담',
'농담으로',
'농민',
'농부',
'농부들',
'농사',
'농사일',
'농산물',
'농업',
'농업과',
'농장',
'농장으로',
'농장을',
'농촌',
'높고',
'높던',
'높아지고',
'높여',
'높이',
'높이는',
'높이에',
'놓고',
'놓고는',
'놓아주게',
'놓아줘',
'놓았다',
'놓으면',
'놓은',
'놓인',
'뇌리에',
'뇌병원',
'뇌병원에서',
'누가',
'누구',
'누구나',
'누구냐고',
'누구보다',
'누구세요',
'누구에게',
'누구에게나',
'누구인가',
'누군가',
'누군가가',
'누군가의',
'누군지',
'누나',
'누나에게',
'누드',
'누드는',
'누드화',
'누드화도',
'누려야',
'누렸고',
'누리지',
'누릴',
'누이',
'눈가',
'눈가를',
'눈과',
'눈길',
'눈동자',
'눈동자도',
'눈동자만',
'눈뜨게',
'눈뜨지',
'눈물',
'눈물만은',
'눈물이',
'눈물진',
'눈병',
'눈부신',
'눈빛',
'눈썹',
'눈앞',
'눈에',
'눈으로',
'눈은',
'눈을',
'눈이',
'눈초리가',
'눈초리에',
'눈총과',
'눈총에',
'눈총이',
'눈치껏',
'눈코',
'뉴스',
'뉴시스',
'느껴',
'느껴서',
'느껴지는',
'느껴진다고',
'느끼게',
'느끼고',
'느끼기도',
'느끼는',
'느끼며',
'느낀',
'느낄',
'느낌',
'늑대',
'늙은',
'늙지도',
'능동적',
'능동적인',
'능력',
'능력을',
'능력이',
'능사는',
'늦가을',
'님이',
'다가가',
'다가가니',
'다녀',
'다녀온',
'다녔고',
'다녔으며',
'다니고',
'다니는',
'다니다가',
'다니던',
'다니며',
'다니면서',
'다니면서도',
'다닌다는',
'다닐',
'다듬어가며',
'다락에',
'다루기',
'다루는',
'다루며',
'다루었고',
'다룬',
'다뤄졌지만',
'다르다는',
'다른',
'다른',
'다를',
'다리',
'다만',
'다방',
'다방면에',
'다섯',
'다섯째',
'다소',
'다수',
'다스리는',
'다스림이란',
'다시',
'다시',
'다시',
'다시는',
'다시는',
'다신',
'다양성',
'다양하게',
'다양한',
'다양했고',
'다언어',
'다음',
'다음과',
'다음날',
'다음에',
'다이어트',
'다잡고',
'다정했었지',
'다져',
'다툼',
'다툼과',
'다했다는',
'다행',
'다행히',
'다행히도',
'닥쳤지만',
'닦기',
'닦아주오',
'닦은',
'단계',
'단골',
'단독',
'단맛',
'단문',
'단발을',
'단순',
'단순한',
'단순히',
'단어',
'단어에',
'단연',
'단위',
'단위에서는',
'단위이며',
'단자',
'단자니',
'단자니는',
'단장',
'단장된',
'단점',
'단지',
'단체',
'단체에도',
'단추',
'단편',
'단편소설',
'단편집',
'단편집을',
'단풍',
'단행본',
'달갑지',
'달걀',
'달게',
'달라',
'달라고',
'달러',
'달려갔지만',
'달려보아도',
'달력',
'달리',
'달리고',
'달리기',
'달리는',
'달변과',
'달변으로',
'달빛',
'달상하여',
'달성할',
'달아나',
'달의',
'달콤하게',
'달콤한',
'달하였더라',
'달했다는',
'닭고기',
'닮아간다고',
'담겼기',
'담고',
'담긴',
'담당',
'담당자',
'담배',
'담았어요',
'담요',
'담은',
'담임',
'담화와',
'답기를',
'답답함을',
'답변',
'답사하고',
'답은',
'답을',
'답장',
'답함',
'닷새',
'당국의',
'당근',
'당당하게',
'당당한',
'당당해하는',
'당당히',
'당대',
'당대에',
'당대에는',
'당대의',
'당도했지만',
'당분간',
'당사자가',
'당사자들의',
'당사자로',
'당사자의',
'당선되어',
'당시',
'당시가',
'당시로는',
'당시를',
'당시만',
'당시에',
'당시에는',
'당시의',
'당신',
'당신과',
'당신네',
'당신더러',
'당신들이',
'당신은',
'당신은',
'당신을',
'당신이',
'당연하게',
'당연하게',
'당연하다고',
'당연한',
'당연히',
'당위성을',
'당장',
'당장에',
'당차게',
'당초',
'당하고',
'당하기도',
'당하는',
'당한',
'당할',
'당했지만',
'닿을',
'대가',
'대가가',
'대가는',
'대가들의',
'대강',
'대강의',
'대개',
'대개',
'대규모',
'대기',
'대기업',
'대낮',
'대는',
'대다수',
'대단한',
'대단히',
'대담한',
'대답',
'대도시',
'대도시에',
'대동한',
'대략',
'대량',
'대로',
'대로만',
'대륙',
'대면하면서',
'대명사로',
'대문',
'대문을',
'대변하게',
'대변하고',
'대부분',
'대부분의',
'대부분의',
'대부분이고',
'대비',
'대사',
'대사관',
'대삼림',
'대상',
'대상으로',
'대상을',
'대상이',
'대상자',
'대상자가',
'대서양을',
'대신',
'대안',
'대안으로',
'대안을',
'대여섯',
'대우를',
'대우해줄',
'대응',
'대인',
'대입',
'대접',
'대중',
'대중과',
'대중교통',
'대중문화',
'대중문화에',
'대중에',
'대중에게',
'대중을',
'대중적',
'대중화',
'대중화되고',
'대중화에',
'대책',
'대책없는',
'대체',
'대체로',
'대출',
'대충',
'대통령',
'대통령이',
'대표',
'대표단이',
'대표되는',
'대표작으로',
'대표적',
'대표적인',
'대표하고',
'대표하는',
'대표할',
'대하여',
'대학',
'대학교',
'대학교로',
'대학교수',
'대학생',
'대학에서',
'대학원',
'대학을',
'대한',
'대합실',
'대항했다는',
'대해',
'대해서',
'대해서는',
'대해서도',
'대형',
'대화',
'대화가',
'대화는',
'대화를',
'대화와',
'대회',
'대회의',
'댁이',
'더구나',
'더는',
'더더욱',
'더덩실',
'더듬고',
'더러운',
'더럽혔다는',
'더욱',
'더욱더',
'더욱이',
'더위',
'더한',
'덕목에',
'덕분',
'덕분에',
'덕으로',
'덕이요',
'던졌던',
'던지라는',
'덜덜',
'덥수룩하고',
'덩실',
'덩어리',
'데레사',
'데리고',
'데뷔',
'데뷔한',
'데생',
'데이터',
'데이트',
'도감은',
'도구',
'도구가',
'도구나',
'도구를',
'도깨비가',
'도는',
'도대체',
'도덕',
'도덕과',
'도덕도',
'도덕률에',
'도덕을',
'도덕이나',
'도덕적',
'도덕적',
'도덕적이고',
'도도했던',
'도둑',
'도로',
'도록',
'도록의',
'도록조차',
'도리를',
'도리어',
'도마',
'도망',
'도망칠',
'도메인',
'도메인이',
'도모할',
'도서관',
'도서출판',
'도시',
'도시가',
'도시는',
'도시락',
'도심',
'도안',
'도와주기도',
'도와주시게',
'도와준',
'도와줘',
'도왔다는',
'도움',
'도움말',
'도움으로',
'도움을',
'도입',
'도입된',
'도입초기의',
'도자기',
'도장',
'도저히',
'도전',
'도전과',
'도전은',
'도전장을',
'도전하는',
'도전한',
'도중',
'도중에',
'도착',
'도착하여',
'도착한',
'도착했을',
'도피를',
'도피의',
'도하',
'도회',
'독감',
'독려에',
'독려하는',
'독립',
'독서',
'독서를',
'독신',
'독자적인',
'독점적',
'독점한',
'독창적',
'독특한',
'독해를',
'돈과',
'돈덩어리',
'돈많은',
'돈벌이',
'돈으로',
'돈을',
'돈이',
'돌계단',
'돌고',
'돌려다도',
'돌리기도',
'돌린',
'돌림자를',
'돌멩이',
'돌면서',
'돌변하는',
'돌보기도',
'돌봐줄',
'돌아',
'돌아가',
'돌아가게',
'돌아가셨오',
'돌아가야',
'돌아가지',
'돌아가지',
'돌아갑니다',
'돌아갔죠',
'돌아다니며',
'돌아다볼',
'돌아오기도',
'돌아오는',
'돌아오니',
'돌아오면',
'돌아오지',
'돌아온',
'돌아온다오',
'돌아올',
'돌아와',
'돌아왔을',
'돌았고',
'돌을',
'돕겠느냐',
'돕기도',
'동갑이고',
'동거하던',
'동경',
'동경과',
'동경에',
'동경에서',
'동경을',
'동경의',
'동그라미',
'동급생',
'동기',
'동기를',
'동네',
'동동',
'동떨어진',
'동란',
'동료',
'동명',
'동명의',
'동물',
'동물원',
'동물이',
'동반',
'동복',
'동부',
'동생',
'동생은',
'동생의',
'동서',
'동서남북',
'동서양의',
'동시',
'동시에',
'동아리',
'동안',
'동안에',
'동안에도',
'동양',
'동양인',
'동양화',
'동원하여',
'동원해',
'동의',
'동의어로서',
'동인으로',
'동인으로도',
'동인을',
'동인의',
'동인이',
'동작',
'동작을',
'동전',
'동정을',
'동조와',
'동지였던',
'동지이자',
'동지인',
'동쪽',
'동참했음을',
'동창',
'동창에게',
'동포',
'동행',
'동화',
'동화책',
'돼서야',
'돼있던',
'돼지',
'돼지고기',
'됐어',
'됐을',
'되게',
'되겠다고',
'되겠다는',
'되겠어요',
'되고',
'되고',
'되고저',
'되기',
'되기',
'되기도',
'되기를',
'되길',
'되뇌어',
'되는',
'되는데',
'되더라도',
'되돌아간',
'되돌아오는',
'되돌아와',
'되라고',
'되려',
'되려는',
'되며',
'되면',
'되면서',
'되어',
'되어가고',
'되어야',
'되었고',
'되었는데',
'되었다가',
'되었다고',
'되었어',
'되었으나',
'되었으며',
'되었을',
'되었음을',
'되자',
'되지',
'되지만',
'되찾기도',
'되풀이하는',
'된다고',
'된다는',
'된장',
'된장찌개',
'될지언정',
'두고',
'두꺼운',
'두께',
'두뇌',
'두는',
'두드러지게',
'두드러진',
'두드려요',
'두들기며',
'두려울',
'두려움',
'두려워',
'두려워하며',
'두려웠지',
'두루',
'두부',
'두세',
'두어',
'두었는데',
'두통',
'둘러',
'둘러보아도',
'둘이',
'둘째',
'둘째딸로',
'둘째로',
'둘째아들',
'둥지',
'뒤늦게',
'뒤뜰에',
'뒤로는',
'뒤로도',
'뒤를',
'뒤에',
'뒤에는',
'뒤에도',
'뒤에서',
'뒤의',
'뒤쪽',
'뒤틀린',
'뒤편',
'뒤흔든',
'뒷골목',
'뒷날',
'뒷담의',
'뒷모습',
'뒷문',
'뒷받침',
'뒷산',
'뒷채의',
'드넓은',
'드는',
'드디어',
'드라마',
'드라마에',
'드러나지',
'드러내기도',
'드러내는',
'드러내는지',
'드로잉을',
'득의스럽게',
'든다',
'듣게',
'듣고',
'듣고는',
'듣기도',
'듣지',
'들게',
'들고',
'들기도',
'들끓게',
'들도',
'들러',
'들려달라고',
'들려주고',
'들려주는',
'들리지',
'들면',
'들면서',
'들어',
'들어가',
'들어가는',
'들어보오',
'들어보지',
'들어볼',
'들어오지',
'들어온',
'들어와',
'들어왔고',
'들어주었고',
'들었던',
'들였는데',
'들으면서',
'들은',
'들을',
'들이',
'들이는',
'들이면서',
'들인',
'들지',
'들지도',
'들지만',
'듯이',
'듯한',
'듯해',
'등과',
'등과의',
'등단하여',
'등단한',
'등도',
'등돌린',
'등등',
'등록',
'등록금',
'등록도',
'등록증',
'등록할',
'등록해',
'등만',
'등산',
'등산로',
'등쌀에',
'등에',
'등에게',
'등에게는',
'등에도',
'등에서',
'등으로',
'등은',
'등을',
'등의',
'등이',
'등장',
'등장시킨',
'등장하지',
'등장한',
'등재되어',
'등지를',
'등지의',
'디스크',
'디자이너',
'디자인',
'딛고',
'따가운',
'따가워지자',
'따님',
'따돌리고',
'따뜻한',
'따라',
'따라가는',
'따라가지',
'따라갔고',
'따라서',
'따라야',
'따라오라',
'따로',
'따로따로',
'따르고',
'따르는',
'따르던',
'따르면',
'따른',
'따진',
'딱지',
'딱지를',
'딱한',
'딸과',
'딸과는',
'딸과도',
'딸기',
'딸들에게는',
'딸로',
'딸로서는',
'딸아이',
'딸에게',
'딸에게는',
'딸은',
'딸을',
'딸의',
'딸이',
'딸이라는',
'딸인',
'땅바닥',
'땅속',
'땅에',
'땅콩',
'때까지',
'때는',
'때는',
'때때로',
'때로',
'때로',
'때를',
'때문',
'때문에',
'때문으로',
'때문이다',
'때부터',
'때에',
'때에도',
'때운다는',
'때의',
'떠나',
'떠나',
'떠나가오',
'떠나게',
'떠나기',
'떠나리',
'떠나면서',
'떠나오',
'떠난',
'떠난지',
'떠났고',
'떠났던',
'떠났지만',
'떠는',
'떠돌던',
'떠돌아',
'떠들썩하게',
'떠오르게',
'떠오르고',
'떠오르는',
'떠오른다는',
'떡국',
'떡먹고',
'떡볶이',
'떨어져',
'떨어졌으니',
'떨어지는',
'떼를',
'떼어',
'떼어가는',
'떼어먹는',
'또는',
'또는',
'또다시',
'또한',
'똑같다는',
'똑같은',
'똑같이',
'똑바로',
'뚜껑',
'뚜렷하게',
'뚜렷한',
'뛰어난',
'뛰어났고',
'뛰어났으나',
'뛰어났으며',
'뛰어들어',
'뛰쳐나온',
'뜨거운',
'뜨기',
'뜨면',
'뜻대로',
'뜻밖',
'뜻밖에',
'뜻에',
'뜻을',
'뜻의',
'뜻이기도',
'뜻이며',
'띄우는',
'띄운',
'띄워라',
'띄지',
'라고',
'라고도',
'라는',
'라는',
'라디오',
'라며',
'라면',
'라면서',
'라운드',
'라이벌',
'라이선스',
'라이터',
'라인',
'라인에',
'라켓',
'러시',
'런던에',
'레몬',
'레스토랑',
'레이저',
'레저',
'레코드와',
'려인',
'로고',
'로그',
'로봇',
'로켓이',
'로터리',
'루머',
'루머가',
'루부르',
'루비',
'리그',
'리듬',
'리스트',
'리스트는',
'리스트를',
'리스트에',
'리얼리즘',
'리터',
'링크',
'링크',
'링크를',
'마가렛',
'마감하고',
'마감해야',
'마곡사',
'마곡사를',
'마구',
'마누라',
'마늘',
'마당',
'마디',
'마땅히',
'마라톤',
'마련',
'마련하고',
'마련하여',
'마련해',
'마련했으니',
'마루',
'마르기도',
'마리',
'마리의',
'마무리',
'마법',
'마법같은',
'마사지',
'마시며',
'마시오',
'마약',
'마요',
'마요네즈',
'마을',
'마음',
'마음가짐',
'마음과',
'마음껏',
'마음껏',
'마음대로',
'마음속',
'마음속에',
'마음씨',
'마음에',
'마음에',
'마음에도',
'마음에서',
'마음을',
'마음을',
'마음의',
'마음이',
'마음이',
'마이크',
'마이크로',
'마주',
'마주치면',
'마주하는',
'마중',
'마지막',
'마지막까지',
'마지못해',
'마찬가지',
'마찰',
'마치',
'마치고',
'마친',
'마침',
'마침내',
'마크',
'마흔',
'마흔이',
'막걸리',
'막내',
'막내딸',
'막다른',
'막상',
'막을',
'막혀',
'만고',
'만공',
'만나',
'만나',
'만나게',
'만나고',
'만나고부터',
'만나기도',
'만나는',
'만나니',
'만나러',
'만나려는',
'만나서',
'만나지',
'만난',
'만날',
'만남',
'만남으로',
'만남은',
'만났고',
'만났으며',
'만났을',
'만년에',
'만두',
'만드는',
'만든',
'만들',
'만들',
'만들고자',
'만들기',
'만들려는',
'만들며',
'만들어',
'만들어놓고',
'만들어달라',
'만들어지고',
'만들어진',
'만들었던',
'만류했지만',
'만리',
'만명',
'만세',
'만세를',
'만세사건',
'만세운동',
'만세운동을',
'만세운동이',
'만신',
'만약',
'만에',
'만여',
'만월이로세',
'만유기',
'만은',
'만이',
'만일',
'만점',
'만족',
'만족하오',
'만주',
'만주국',
'만주로',
'만주와',
'만지게',
'만찬에',
'만큼',
'만평을',
'만평형식의',
'만하고',
'만한',
'만화',
'만화가',
'많게는',
'많고',
'많고',
'많다며',
'많다면',
'많아',
'많았고',
'많았던',
'많았어요',
'많으며',
'많은',
'많은',
'많이',
'말거라',
'말고',
'말고',
'말고도',
'말기',
'말든',
'말들로',
'말라고',
'말로',
'말로를',
'말로서',
'말리는',
'말만',
'말부터',
'말살시키고',
'말씀',
'말씀을',
'말아줘',
'말아줘요',
'말없이',
'말에',
'말요',
'말은',
'말을',
'말의',
'말이',
'말이에요',
'말이오',
'말이요',
'말투',
'말하',
'말하고',
'말하곤',
'말하기도',
'말하는',
'말하며',
'말하면서',
'말하면서도',
'말하지',
'말한',
'말한다',
'말할',
'말해줘요',
'맘대로',
'맛보면서',
'맛보이는',
'망가진',
'망국의',
'망년회에',
'망명',
'망명하던',
'망상에',
'망설이다가',
'망원경',
'맞는가요',
'맞닥뜨리게',
'맞서',
'맞서려',
'맞선',
'맞으라',
'맞으며',
'맞으면',
'맞은편',
'맞이했고',
'맞지',
'맡아서',
'맡아주면서',
'맡았는데',
'맡지만',
'매개체',
'매너',
'매년',
'매니저는',
'매니저도',
'매니저를',
'매니저와',
'매달',
'매달렸으나',
'매력',
'매력은',
'매력을',
'매매',
'매번',
'매사에',
'매스컴',
'매우',
'매의',
'매일',
'매일',
'매일같이',
'매입해',
'매장',
'매장된',
'매장지는',
'매정하게',
'매주',
'매체',
'매체와',
'매체의',
'매춘부',
'매혹된',
'맥락',
'맥락에서는',
'맥주',
'맴돌고',
'맹공의',
'맹목적',
'맹목적으로',
'맹목적인',
'맹종하는',
'맺는',
'맺으며',
'맺을',
'머더',
'머리',
'머리가',
'머리로',
'머리를',
'머리말',
'머리말에서',
'머리카락',
'머리칼',
'머릿속',
'머무는',
'머무르던',
'머무르며',
'머무르면서',
'머물고',
'머물러있던',
'머물렀던',
'머물며',
'머물면서',
'머신',
'먹고',
'먹나',
'먹는',
'먹듯',
'먹어야지',
'먹이',
'먼저',
'먼저',
'먼지',
'멀리',
'멀어져',
'멀어지는',
'멈추지',
'멈춰선',
'멋진',
'멋진',
'멍멍',
'멍에로',
'멍하게',
'메뉴',
'메르',
'메리',
'메모',
'메시지',
'메시지는',
'메시지들과',
'메시지를',
'메신저',
'메신저와',
'메어와',
'메우고',
'메일',
'멜로디',
'며느리',
'며느리에게',
'며칠',
'며칠만인',
'면담',
'면담을',
'면담할',
'면모를',
'면에서',
'면적',
'면접',
'멸망한',
'멸시를',
'멸치',
'명가출신',
'명단',
'명도',
'명령',
'명령어',
'명령으로',
'명목으로',
'명문가',
'명부에서',
'명사는',
'명성에',
'명성을',
'명승지를',
'명씩',
'명암',
'명에',
'명에서',
'명예',
'명예를',
'명예를',
'명을',
'명의',
'명의가',
'명의는',
'명이',
'명절',
'명절의',
'명절이',
'명줄이',
'명중',
'명칭',
'명함',
'명확히',
'몇몇',
'몇안되는',
'몇차례',
'모교인',
'모금',
'모기',
'모니터',
'모닝',
'모던',
'모델',
'모델로',
'모델로서',
'모델이',
'모델이기도',
'모된',
'모두',
'모두가',
'모두에게',
'모두의',
'모든',
'모든',
'모든',
'모래',
'모레',
'모르고',
'모르는',
'모르는',
'모른다고',
'모른척',
'모를땐',
'모바일',
'모방작이',
'모범',
'모범생이던',
'모범으로',
'모성',
'모순',
'모순적',
'모습',
'모습에',
'모습을',
'모습의',
'모습이',
'모아',
'모아둔',
'모았던',
'모양',
'모양으로',
'모양이로군',
'모으기',
'모은',
'모임',
'모임에',
'모임인',
'모자',
'모조리',
'모집',
'모처럼',
'모체를',
'모체의',
'모퉁이',
'모호한',
'목각',
'목각조각에',
'목각화',
'목걸이',
'목격',
'목격하고',
'목록',
'목마를',
'목말라',
'목사',
'목사의',
'목소리',
'목소리도',
'목소리를',
'목소리에',
'목숨',
'목숨을',
'목숨이',
'목요일',
'목욕',
'목욕탕',
'목을',
'목이',
'목적',
'목적으로',
'목조',
'목차',
'목표',
'목표는',
'목표로',
'몫을',
'몰고',
'몰두하던',
'몰두해',
'몰락의',
'몰랐던',
'몰랐어',
'몰래',
'몰래',
'몰리기도',
'몰아넣고',
'몰이해',
'몸과',
'몸매',
'몸무게',
'몸살',
'몸속',
'몸으로',
'몸을',
'몸이',
'몸집도',
'몸짓',
'몸통',
'몹시',
'못가',
'못나건',
'못내',
'못미칠데',
'못지',
'못지않게',
'못하게',
'못하고',
'못하는',
'못하다면',
'못하면서',
'못하여',
'못하였다며',
'못한',
'못한다는',
'못할',
'못해',
'못했고',
'못했는데',
'못했다',
'못했다고',
'못했다는',
'못했던',
'못했어',
'못했으니',
'묘비를',
'묘사',
'묘사되었고',
'묘사에',
'묘사에서',
'묘사하기도',
'묘사하였고',
'묘사한',
'묘소가',
'묘소는',
'묘소에',
'묘지로',
'묘지에',
'무거운',
'무게',
'무게로',
'무관심',
'무궁화',
'무기',
'무기력한',
'무꾸리를',
'무늬',
'무대',
'무더위',
'무덤',
'무덤에',
'무덤으로',
'무덤을',
'무려',
'무력감에서',
'무렵',
'무렵부터',
'무렵에도',
'무렵의',
'무료',
'무릇',
'무릎',
'무리',
'무분별한',
'무생물에',
'무섭다고',
'무슨',
'무심한',
'무어',
'무얼',
'무엇',
'무엇도',
'무엇을',
'무엇이',
'무엇인가에',
'무엇인고',
'무엇인지',
'무엇인지를',
'무역',
'무연고',
'무연고자',
'무연고자로',
'무용',
'무용가',
'무장한',
'무전여행과',
'무절제한',
'무정',
'무조건',
'무지개',
'무지를',
'무차별적인',
'무책임한',
'무척',
'무한한',
'무희',
'묵묵히',
'묵은',
'묶인',
'문구',
'문구를',
'문단',
'문단에',
'문단으로',
'문단활동을',
'문답기',
'문득',
'문명에',
'문명의',
'문명적',
'문물',
'문물과',
'문물에',
'문물을',
'문밖',
'문법',
'문사',
'문서',
'문서가',
'문서를',
'문서와',
'문서의',
'문신',
'문예사조',
'문예지',
'문을',
'문인',
'문인들과',
'문인들에',
'문인들의',
'문인들이',
'문인으로',
'문인을',
'문인의',
'문인인',
'문자',
'문장',
'문장은',
'문재',
'문제',
'문제가',
'문제는',
'문제를',
'문제삼아',
'문제에',
'문제점',
'문제점으로',
'문제점을',
'문체와',
'문필',
'문필가로',
'문필가인',
'문필력에',
'문학',
'문학동인',
'문학사에',
'문학사에서',
'문학에',
'문학예술',
'문학으로',
'문학의',
'문학이요',
'문학적',
'문학전집',
'문학평론가',
'문화',
'문화가',
'문화계의',
'문화관련',
'문화권에',
'문화인물',
'문화재',
'문화재를',
'문화적',
'묻고',
'묻는',
'묻혀',
'물가',
'물건',
'물건들을',
'물결',
'물고기',
'물기',
'물기가',
'물들었다는',
'물려받거나',
'물려줄',
'물론',
'물리는',
'물리학',
'물색하여',
'물속',
'물어',
'물으니',
'물음',
'물의를',
'물질',
'물질적',
'물체',
'뭇는',
'뭐가',
'뭐라고',
'뭣이',
'뮤지컬',
'뮤지컬로도',
'미군',
'미군이',
'미납된',
'미니',
'미니어처',
'미덕에',
'미덕이란',
'미디어',
'미래',
'미래는',
'미루다가',
'미뤄',
'미리',
'미만',
'미만의',
'미모에다가',
'미사일',
'미상',
'미세한',
'미소',
'미술',
'미술가',
'미술가적',
'미술강사로',
'미술계',
'미술계에',
'미술관',
'미술관에',
'미술관에서',
'미술관이',
'미술교사로',
'미술대전이',
'미술대학',
'미술사랑',
'미술사에서',
'미술서적을',
'미술시야를',
'미술을',
'미술이',
'미술작품을',
'미술제',
'미술평론가',
'미술품을',
'미술학교',
'미술학교를',
'미술학교의',
'미술학원을',
'미술활동에',
'미안하다며',
'미안해',
'미안해요',
'미약하여',
'미역',
'미완성',
'미완성의',
'미용실',
'미움',
'미워서',
'미워할',
'미워해',
'미워해봐도',
'미워했는지',
'미의',
'미인',
'미인이',
'미지의',
'미처',
'미천한',
'미쳐',
'미치게',
'미치고',
'미친',
'미친다는',
'미칠',
'미터',
'미팅',
'미풍양속을',
'미혼',
'미혼으로',
'미혼의',
'미화하던',
'미화할',
'민간',
'민속',
'민족',
'민족의',
'민족의식을',
'민주',
'민주주의',
'민주주의와',
'민주화',
'민중',
'민중들',
'민중의',
'민지사',
'믿게',
'믿고',
'믿는',
'믿는다면서',
'믿는대로',
'믿던',
'믿었다',
'믿었다면서',
'믿음',
'믿지',
'밀가루',
'밀라노',
'밀리미터',
'밑바닥',
'밑에',
'밑의',
'바가지',
'바구니',
'바깥',
'바깥에서',
'바깥에서는',
'바깥으로',
'바깥을',
'바깥쪽',
'바꾸면',
'바꾼',
'바꿔라',
'바나나',
'바늘',
'바다가',
'바다는',
'바다와',
'바닥',
'바닥에는',
'바닷가',
'바닷물',
'바닷속을',
'바도',
'바라고',
'바라면서',
'바라면서도',
'바라보고',
'바라보는',
'바라본',
'바라봐',
'바람',
'바람에',
'바람을',
'바람이',
'바람처럼',
'바로',
'바로알기',
'바보',
'바보같은',
'바보는',
'바쁜',
'바싹',
'바위',
'바이',
'바이라',
'바이러스',
'바이올린',
'바지',
'바쳐다오',
'바쳤으나',
'바치는',
'바퀴',
'바탕',
'바탕을',
'박대당하고',
'박물관',
'박물관과',
'박사',
'박사의',
'박수',
'밖에',
'밖에서',
'밖으로',
'밖의',
'반가의',
'반감을',
'반갑게',
'반격의',
'반대',
'반대가',
'반대되어',
'반대로',
'반대를',
'반대의',
'반대자들',
'반대편',
'반대한',
'반대했으나',
'반도',
'반도에도',
'반도의',
'반드시',
'반론으로',
'반론을',
'반말',
'반면',
'반면으로',
'반발',
'반발과',
'반발을',
'반발하기도',
'반복',
'반생기',
'반성',
'반신불수의',
'반응',
'반응은',
'반응을',
'반장',
'반죽',
'반지',
'반짝여',
'반찬',
'반체제',
'반추',
'반했어요',
'받거나',
'받게',
'받고',
'받고있으며',
'받기도',
'받는',
'받아내고',
'받아낸',
'받아들여',
'받아들였고',
'받아들이는',
'받아들이지',
'받아들인',
'받아들일',
'받아야',
'받아야지',
'받아준',
'받았고',
'받았기',
'받았는데',
'받았던',
'받았을',
'받으며',
'받은',
'받을',
'받지',
'받지는',
'받침',
'발가락',
'발간되자',
'발간에',
'발간하는',
'발걸음',
'발견',
'발견과',
'발견돼',
'발견되는',
'발견되어',
'발견하려는',
'발견한',
'발견해',
'발굴',
'발길',
'발끝',
'발단이',
'발달',
'발달하지',
'발등',
'발레',
'발목',
'발목을',
'발바닥',
'발버둥을',
'발상',
'발생',
'발생을',
'발생이',
'발생하는',
'발생하자',
'발생한',
'발언',
'발언권이',
'발언들',
'발언에',
'발언은',
'발언을',
'발언이',
'발언이라며',
'발언한',
'발음',
'발자국',
'발전',
'발전된',
'발전하고',
'발탁하였고',
'발톱',
'발표',
'발표되자',
'발표된',
'발표로',
'발표하고',
'발표하기도',
'발표하는',
'발표하다가',
'발표하며',
'발표하면서',
'발표하지',
'발표한',
'발표해',
'발표했는데',
'발표했던',
'발하라',
'발하여라',
'발행인',
'발행하던',
'발현했다',
'발휘되고',
'발휘했던',
'밝고',
'밝혀내기도',
'밝혀내지',
'밝혀낼',
'밝혀진',
'밝히고',
'밝히기도',
'밝히려고',
'밝히면서',
'밝힌',
'밟아서',
'밤길을',
'밤낮',
'밤새',
'밤색',
'밤에',
'밤에도',
'밤중',
'밤하늘',
'밤하늘로',
'밤하늘을',
'밥그릇',
'밥맛',
'밥먹고',
'밥상',
'밥솥',
'밥을',
'밥이나',
'방금',
'방긋방긋',
'방기하려는',
'방대한',
'방랑과',
'방랑생활에',
'방랑생활을',
'방면',
'방면에',
'방문',
'방문자의',
'방문하고',
'방문하기도',
'방문하면',
'방문할',
'방바닥',
'방법',
'방법까지',
'방법으로',
'방법으로는',
'방법을',
'방법이라고',
'방송',
'방송국',
'방송사',
'방식',
'방식에',
'방식에도',
'방식으로',
'방안',
'방어에서',
'방에',
'방에서',
'방울',
'방은',
'방종과',
'방지',
'방편으로',
'방학',
'방해',
'방해와',
'방해하지',
'방향',
'방향에',
'방황하다가',
'배가',
'배경',
'배경과',
'배경삼아',
'배경에',
'배경에는',
'배경으로',
'배구',
'배꼽',
'배다른',
'배달',
'배드민턴',
'배려로',
'배상을',
'배신당했던',
'배신하려고',
'배신하진',
'배우',
'배우게',
'배우고',
'배우나',
'배우다가',
'배우로',
'배우로도',
'배우이자',
'배우자',
'배우자를',
'배우활동은',
'배워서',
'배웠던',
'배웠지만',
'배추',
'배추김치',
'배치',
'배편으로',
'배회하던',
'배후로',
'백과사전',
'백년의',
'백만명',
'백모',
'백부',
'백색',
'백성',
'백성들은',
'백성들을',
'백성에',
'백인',
'백조',
'백화점',
'뱃놀이',
'뱃사람',
'뱃속에서는',
'버락',
'버려봐요',
'버려서는',
'버려야',
'버려요',
'버렸다며',
'버릇',
'버리게',
'버리고',
'버리고',
'버리는',
'버린',
'버릴',
'버림받은',
'버섯',
'버스',
'버지',
'버터',
'버튼',
'벅찬',
'번개',
'번도',
'번민하는',
'번뿐',
'번에',
'번역',
'번역과',
'번역서들',
'번역시',
'번역하고',
'번역하기도',
'번역할',
'번지',
'번지의',
'번째',
'번째로',
'번쯤은',
'번호',
'번호가',
'번화한',
'벌금',
'벌떡',
'벌레',
'벌린',
'벌써',
'벌이가',
'벌이는',
'벌일',
'범우',
'범위',
'범을',
'범인',
'범죄',
'범죄가',
'법대',
'법률',
'법률공부를',
'법률과',
'법률도',
'법률을',
'법률이',
'법에',
'법원',
'법을',
'법이고',
'법적',
'법칙',
'법학과에',
'벗기',
'벗들을',
'벗어',
'벗어나지는',
'벗은',
'벗이여',
'베개',
'베게를',
'베다',
'벤처',
'벤치',
'벨기에',
'벨기에를',
'벨트',
'벼락이',
'벼슬을',
'벽에',
'벽을',
'변경',
'변동',
'변두리의',
'변론을',
'변명',
'변방에서',
'변신',
'변절한',
'변치',
'변해야',
'변호를',
'변호사',
'변호사를',
'변호사업에',
'변화',
'변화가',
'별거케',
'별거하게',
'별거하기로',
'별도',
'별들',
'별들이',
'별로',
'별명',
'별을',
'별을',
'별의',
'별일',
'별장',
'별칭',
'병동',
'병동에서',
'병들어',
'병리학',
'병마에',
'병사한',
'병세가',
'병세는',
'병세의',
'병실',
'병아리',
'병원',
'병원도',
'병원에',
'병원에서',
'병으로',
'병이',
'병적으로',
'병행했지만',
'볕들날',
'보게',
'보고',
'보고서',
'보고서',
'보관',
'보기',
'보기도',
'보내',
'보내는',
'보내는데',
'보내려고',
'보내려하나',
'보내어',
'보낼',
'보낼',
'보너스',
'보네',
'보는',
'보니',
'보니까',
'보다는',
'보던',
'보도',
'보도내용이',
'보도되기도',
'보도되자',
'보도할만큼',
'보도했고',
'보라색',
'보람',
'보러',
'보름',
'보리',
'보면',
'보상',
'보석',
'보수',
'보수적',
'보수적인',
'보시동',
'보시오',
'보아',
'보아라',
'보안',
'보았다',
'보았지요',
'보여',
'보여도',
'보여주는',
'보여준다',
'보여준다는',
'보였다고',
'보우하사',
'보이고',
'보이기도',
'보이다가',
'보이던',
'보이면서',
'보이지',
'보이지',
'보인다는',
'보임으로써',
'보자',
'보자기',
'보자꾸나',
'보자며',
'보잖아',
'보장',
'보장되며',
'보장에',
'보장해야',
'보전',
'보조',
'보존',
'보존되어',
'보존되지',
'보존이나',
'보존하기도',
'보좌관이',
'보좌진으로',
'보지',
'보통',
'보통과를',
'보통과에',
'보편',
'보편적',
'보험',
'보호',
'보호자',
'보호자의',
'복구작업',
'복권',
'복도',
'복도에',
'복사',
'복사기',
'복사하는',
'복사하여',
'복숭아',
'복습',
'복식',
'복잡하고',
'복제시대의',
'복제하는',
'복종하는',
'복직했지만',
'볶음',
'볶음밥',
'본격적',
'본격적으로',
'본격적인',
'본관은',
'본국의',
'본능이',
'본능적',
'본능적으로',
'본다',
'본래',
'본래적',
'본명',
'본명은',
'본부',
'본사',
'본성',
'본인',
'본적도',
'본질',
'본처',
'본처가',
'본처와',
'볼링',
'볼일',
'볼펜',
'봄날',
'봄에도',
'봄을',
'봄의',
'봄이',
'봉급은',
'봉사',
'봉사를',
'봉지',
'봉착하고',
'봉천',
'봉투',
'봤는데',
'뵙도록',
'부귀영화를',
'부근',
'부끄러움',
'부끄러이',
'부담',
'부담을',
'부당하다는',
'부당한',
'부대',
'부덕',
'부덕으로',
'부덕을',
'부덕의',
'부도덕이냐',
'부도덕이요',
'부동산',
'부득이한',
'부딪치며',
'부딪히게',
'부류의',
'부르네',
'부르는',
'부르며',
'부르지',
'부르짖으며',
'부르짖은',
'부른',
'부를',
'부립',
'부모',
'부모가',
'부모는',
'부모님',
'부모를',
'부모와',
'부모의',
'부문',
'부문을',
'부부',
'부부가',
'부부는',
'부부에',
'부부에게',
'부부와도',
'부부의',
'부분',
'부분으로',
'부분을',
'부분적',
'부상',
'부서',
'부서졌던',
'부서지는',
'부속',
'부속물',
'부속물로',
'부시도록',
'부양',
'부양만으로',
'부양할',
'부엌',
'부여해야',
'부위',
'부유한',
'부인',
'부인과',
'부인까지',
'부인에',
'부인은',
'부인을',
'부인의',
'부인이',
'부인인',
'부임하는',
'부자',
'부작용',
'부작용을',
'부잣집',
'부장',
'부재',
'부적하여',
'부정',
'부정과',
'부정되는',
'부정적',
'부정적으로',
'부정적인',
'부정하는',
'부정한',
'부정행위를',
'부족',
'부족하거든',
'부지런히',
'부채',
'부처',
'부쳤다는',
'부추기는',
'부친',
'부탁',
'부탁에',
'부탁하는데',
'부품',
'부피',
'부호',
'부회장',
'북극',
'북부',
'북유럽의',
'북쪽',
'북한',
'분개하여',
'분노',
'분노와',
'분노하던',
'분란을',
'분량',
'분류',
'분류가',
'분리',
'분리되어',
'분리된',
'분리하는',
'분명',
'분명하게',
'분명히',
'분석',
'분석과',
'분석적인',
'분석하고',
'분석한',
'분야',
'분야에',
'분야의',
'분위기',
'분위기가',
'분위기도',
'분위기의',
'분을',
'분의',
'분주한',
'분출하는',
'분통을',
'분필',
'분할을',
'분홍색',
'불감증인',
'불같은',
'불경에서도',
'불경을',
'불고기',
'불공을',
'불과',
'불과하고',
'불과하며',
'불과한',
'불교',
'불교도가',
'불교를',
'불교명으로',
'불교에',
'불구하고',
'불꽃',
'불꽃여인',
'불꽃으로',
'불꽃의',
'불꽃이',
'불꽃처럼',
'불당겨',
'불란서',
'불란서니',
'불러라',
'불러보게',
'불러와',
'불러왔고',
'불리는',
'불만',
'불면증으로',
'불명을',
'불명확하여',
'불미스러운',
'불미한',
'불법',
'불빛',
'불빛에',
'불사가',
'불사는',
'불사르고',
'불사조가',
'불순한',
'불쌍해',
'불쑥',
'불안',
'불완전한',
'불우한',
'불이익',
'불이익과',
'불이익이',
'불자임을',
'불타는',
'불편',
'불편하게',
'불편한',
'불편해졌고',
'불평',
'불평등한',
'불평을',
'불평이',
'불행',
'불행을',
'불행이라고',
'불행이자',
'불행하고',
'불행한',
'불행히도',
'불화를',
'붉은',
'붓을',
'붓질로',
'붙어있을지',
'붙여',
'붙여서는',
'붙잡을',
'브랜드',
'블라우스',
'블로그',
'블로깅과',
'비가',
'비가',
'비겁한',
'비교',
'비교도',
'비교적',
'비교하여',
'비굴한',
'비굴함을',
'비굴해진',
'비극',
'비극은',
'비극을',
'비극적',
'비난',
'비난과',
'비난에',
'비난은',
'비난을',
'비난의',
'비난이',
'비난하거나',
'비난하고',
'비난하기도',
'비난한',
'비누',
'비닐',
'비닐봉지',
'비단',
'비둘기',
'비둘기를',
'비디오',
'비련의',
'비례하여',
'비로소',
'비롯한',
'비를',
'비만',
'비명',
'비명횡사한',
'비밀',
'비밀리에',
'비밀번호',
'비밀이',
'비밀히',
'비바람',
'비바람',
'비방',
'비번',
'비빔밥',
'비상',
'비서',
'비석',
'비석까지',
'비석을',
'비슷한',
'비슷할',
'비아냥과',
'비애',
'비엔나와',
'비용',
'비용과',
'비용을',
'비운의',
'비웃으며',
'비유해서',
'비율',
'비정규직',
'비중',
'비즈',
'비참한',
'비쳤네',
'비타민',
'비탄',
'비탄과',
'비판',
'비판과',
'비판들은',
'비판받을',
'비판에',
'비판은',
'비판을',
'비판을',
'비판의',
'비판의식을',
'비판적',
'비판적으로',
'비판적인',
'비판하게',
'비판하고',
'비판하기도',
'비판하는',
'비판하면서',
'비판하여',
'비판한',
'비판했고',
'비판했던',
'비평',
'비하하는',
'비해',
'비행',
'비행기',
'비행장',
'빈곤층',
'빈민',
'빌기는커녕',
'빌딩',
'빌려줄',
'빌미가',
'빌어먹는',
'빗대서',
'빗대어',
'빗물',
'빗물에',
'빗방울',
'빗속에',
'빗줄기',
'빚어낸',
'빛깔',
'빛나게',
'빛나고',
'빛나는',
'빛나던',
'빛냈던',
'빛으로',
'빠르게',
'빠르며',
'빠른',
'빠져',
'빠져나와',
'빠져버린',
'빠져보고',
'빠지는',
'빠지지',
'빨간',
'빨간색',
'빨래',
'빨리',
'빵이나',
'빼닮았구나',
'빼앗겼다는',
'빼앗기게',
'빼앗긴',
'빼앗는',
'빼앗아온',
'빼앗았으며',
'빼앗으려',
'빼앗으려고',
'빼어난',
'뺨을',
'뻗으면',
'뼈에',
'뽑겠다고',
'뽑는',
'뽑힌',
'뿌려져',
'뿌리',
'뿌리치자',
'뿐이라고',
'뿐이야',
'뿐이죠',
'뿐이지',
'사건',
'사건사',
'사건에도',
'사건은',
'사건을',
'사건의',
'사건이',
'사건이지만',
'사건인',
'사계절',
'사고',
'사고를',
'사고의',
'사과',
'사교계',
'사교를',
'사귀기도',
'사귀던',
'사귀었으나',
'사귀지',
'사기',
'사기도',
'사나운',
'사나이',
'사남매의',
'사내',
'사냥',
'사는',
'사대부',
'사도세자와',
'사들여',
'사라',
'사라져',
'사라져',
'사라져줘요',
'사라지고',
'사라지지',
'사라지지마',
'사라질',
'사라질까',
'사람',
'사람같이',
'사람과',
'사람답게',
'사람당',
'사람도',
'사람될',
'사람들',
'사람들',
'사람들과',
'사람들만',
'사람들에게',
'사람들은',
'사람들을',
'사람들의',
'사람들이',
'사람들중에',
'사람에게',
'사람에게도',
'사람으로',
'사람은',
'사람은',
'사람을',
'사람의',
'사람이',
'사람이고',
'사람이나',
'사람이라네',
'사람이라는',
'사람이라며',
'사람이라면',
'사람이오',
'사람인',
'사람쯤',
'사람쯤만',
'사랑',
'사랑과',
'사랑과',
'사랑만을',
'사랑받고',
'사랑에',
'사랑에',
'사랑으론',
'사랑은',
'사랑을',
'사랑을',
'사랑을',
'사랑의',
'사랑이',
'사랑이라는',
'사랑이었을',
'사랑인',
'사랑하고',
'사랑하고',
'사랑하는',
'사랑하는',
'사랑하려고',
'사랑하지',
'사랑할',
'사랑해',
'사랑해봐도',
'사랑했는지',
'사랑했다고',
'사랑했던',
'사러',
'사례',
'사례가',
'사례로',
'사례로는',
'사로잡은',
'사로잡힌',
'사료가',
'사료를',
'사립',
'사망',
'사망원인',
'사망하여',
'사망한',
'사망했다는',
'사명의',
'사모님',
'사무',
'사무소',
'사무실',
'사무직',
'사무쳐',
'사무치게',
'사문',
'사물',
'사물을',
'사물의',
'사방',
'사별한',
'사비로',
'사사건건',
'사사하기도',
'사상',
'사상가와',
'사상과',
'사상에',
'사상을',
'사상의',
'사상적',
'사생활',
'사서',
'사설',
'사슬에',
'사슴',
'사실',
'사실과',
'사실까지',
'사실로',
'사실상',
'사실은',
'사실을',
'사실이',
'사실이라는',
'사실이지만',
'사실인',
'사실적이고',
'사실적인',
'사실주의',
'사실처럼',
'사십',
'사업',
'사업가',
'사업자',
'사업자나',
'사에서',
'사연이',
'사오지',
'사용',
'사용되었다',
'사용된다',
'사용자',
'사용자는',
'사용자들은',
'사용자들이',
'사용자로서',
'사용자를',
'사용자에게',
'사용자용',
'사용자의',
'사용하는',
'사용하여',
'사용할',
'사우스',
'사원',
'사월',
'사위',
'사유',
'사이',
'사이라는',
'사이사이',
'사이에',
'사이에는',
'사이에서',
'사이에서도',
'사이의',
'사이인냥',
'사이트',
'사이트가',
'사이트를',
'사이트이기',
'사인인',
'사자',
'사장',
'사장된',
'사적',
'사적소유',
'사전',
'사전에',
'사정',
'사정했지만',
'사조',
'사조이기도',
'사주혐의로',
'사진',
'사진과',
'사진기',
'사진으로',
'사진일',
'사찰',
'사찰에',
'사찰을',
'사촌',
'사촌오빠인',
'사춘기',
'사춘기일',
'사탑',
'사탕',
'사투리',
'사표',
'사하라',
'사학자',
'사항으로서',
'사항을',
'사항이고',
'사회',
'사회가',
'사회관습에',
'사회구조로',
'사회는',
'사회라',
'사회로',
'사회로의',
'사회를',
'사회상',
'사회생활',
'사회생활을',
'사회서',
'사회에',
'사회에서',
'사회에서는',
'사회운동가',
'사회운동을',
'사회의',
'사회이며',
'사회인',
'사회자',
'사회적',
'사회적',
'사회적으로',
'사회적인',
'사회제도가',
'사회제도와',
'사회주의',
'사회참여',
'사회체를',
'사회평론',
'사회학',
'사회활동',
'사회활동에',
'사회활동을',
'사후',
'사후에도',
'사흘',
'삭제되고',
'산군의',
'산길',
'산다면',
'산뜻하게',
'산맥을',
'산문',
'산문과',
'산문시',
'산부인과',
'산사를',
'산사에서',
'산산이',
'산소',
'산속',
'산수화',
'산신의',
'산아제한',
'산업',
'산울림',
'산으로',
'산책',
'산책중이던',
'살고',
'살기',
'살다가',
'살다간',
'살되',
'살려고',
'살리자는',
'살림',
'살림살이를',
'살림살이에',
'살림을',
'살면',
'살면서',
'살아가기',
'살아가는',
'살아남기가',
'살아남아',
'살아야',
'살아온',
'살았는데',
'살았다는',
'살았던',
'살았을까',
'살의',
'살이',
'살인',
'살자고',
'살점을',
'살지',
'살짝',
'살펴볼',
'살해를',
'삶과',
'삶도',
'삶에',
'삶에서',
'삶으로',
'삶은',
'삶을',
'삶의',
'삶이',
'삼계탕',
'삼국',
'삼십',
'삼아',
'삼았다',
'삼월',
'삼은',
'삼천리',
'삼천리에',
'삼촌',
'삽화',
'삽화를',
'상관',
'상관없이',
'상금',
'상급자',
'상담',
'상당',
'상당수',
'상당수는',
'상당수를',
'상당히',
'상대',
'상대는',
'상대로',
'상대방',
'상대방을',
'상대방의',
'상대방이',
'상대성',
'상대였던',
'상대적',
'상대적이고',
'상대편',
'상드',
'상드는',
'상류',
'상반기',
'상봉',
'상상',
'상상력',
'상승',
'상식',
'상실감은',
'상실을',
'상업',
'상업적으로',
'상영된',
'상을',
'상인',
'상자',
'상전처럼',
'상점',
'상점에서',
'상정되기는',
'상징들은',
'상징으로',
'상징이라며',
'상징적',
'상처',
'상처를',
'상처보다는',
'상처입지',
'상처했던',
'상청에서',
'상추',
'상태',
'상태로',
'상태에서',
'상표',
'상표를',
'상품',
'상하이',
'상하이로',
'상해',
'상황',
'상황과',
'상황에',
'상황에서',
'상황에서',
'상황으로',
'상황이나',
'새까만',
'새끼',
'새끼를',
'새들은',
'새로',
'새로운',
'새로운',
'새로이',
'새롭게',
'새롭게',
'새를',
'새벽',
'새소리',
'새우',
'새침한',
'새해',
'색깔',
'색상',
'색색의',
'색시와',
'색안경에',
'색연필',
'색조',
'색채로',
'색채를',
'샌드위치',
'생각',
'생각나지',
'생각내면은',
'생각되고',
'생각되더니',
'생각만',
'생각을',
'생각의',
'생각지도',
'생각하고',
'생각하기',
'생각하며',
'생각하오',
'생각하지는',
'생각한',
'생각할',
'생각해',
'생각했다고',
'생각했던',
'생겨난',
'생계',
'생계를',
'생계와',
'생기',
'생기는',
'생기지',
'생긴',
'생길',
'생도',
'생명',
'생명과',
'생명을',
'생명의',
'생명체는',
'생명체를',
'생모',
'생모를',
'생모였고',
'생물',
'생방송',
'생산',
'생산력',
'생산자',
'생산하고',
'생선',
'생식능력을',
'생신',
'생애',
'생애와',
'생을',
'생일',
'생장',
'생전에',
'생활',
'생활개량에',
'생활고',
'생활고에',
'생활고와',
'생활과',
'생활비',
'생활비를',
'생활상을',
'생활수준',
'생활에',
'생활에서',
'생활용품',
'생활은',
'생활을',
'생활정보나',
'생활하던',
'생활하며',
'생활환경',
'샤워',
'샴푸를',
'서간',
'서간문에서',
'서고',
'서구',
'서구에서',
'서구의',
'서구적',
'서너',
'서녀로',
'서녀였으나',
'서당에서',
'서대문',
'서드',
'서드파티',
'서랍',
'서로',
'서로를',
'서로의',
'서류',
'서른',
'서른다섯의',
'서막을',
'서명',
'서명에',
'서모',
'서민',
'서부',
'서비스',
'서비스가',
'서비스도',
'서비스되는',
'서비스라는',
'서비스로',
'서비스를',
'서비스에',
'서비스의',
'서비스인',
'서사시',
'서서',
'서서히',
'서술하며',
'서슴없이',
'서신을',
'서약서와',
'서양',
'서양식',
'서양식으로',
'서양에나',
'서양의',
'서양이나',
'서양인',
'서양화',
'서양화가',
'서양화가가',
'서양화가로',
'서양화가의',
'서양화를',
'서양화와',
'서예',
'서자에',
'서적',
'서적들은',
'서점',
'서쪽',
'서클',
'석공',
'석공의',
'석사',
'석유',
'섞인',
'선각자',
'선각자가',
'선각자라는',
'선각자로',
'선각자적인',
'선거',
'선거를',
'선거에서',
'선고받고',
'선과',
'선과는',
'선구',
'선구자',
'선구자가',
'선구자적',
'선구자적인',
'선구적',
'선명하게',
'선물',
'선물을',
'선발',
'선발하면서',
'선배',
'선보이기도',
'선사',
'선생',
'선생님',
'선생을',
'선생의',
'선수',
'선언',
'선언에',
'선언을',
'선언한',
'선원',
'선원들이',
'선이',
'선인',
'선입견',
'선장',
'선전',
'선전에',
'선전에는',
'선전에서',
'선정',
'선정됐다는',
'선정된',
'선정하는',
'선정해',
'선진',
'선진국',
'선천적으로',
'선천적으로',
'선택',
'선택에',
'선택은',
'선택한',
'선택할',
'선택해서는',
'선풍기',
'선호했으며',
'섣달대목',
'섣달의',
'설거지',
'설날',
'설도',
'설득하며',
'설득해',
'설렁탕',
'설레고',
'설립된',
'설립한',
'설립해',
'설명',
'설명으로',
'설명할',
'설문',
'설사',
'설악산',
'설정만',
'설정했는데',
'설치',
'설탕',
'설파했는데',
'섬광처럼',
'섬네일',
'섬세하게',
'섬세하고',
'섬세한',
'섭씨',
'성격',
'성격에',
'성격으로',
'성격을',
'성경',
'성경',
'성경과',
'성경에',
'성공',
'성공을',
'성공적',
'성과',
'성당',
'성리학',
'성리학의',
'성리학적',
'성명',
'성별',
'성별이라고',
'성선',
'성실성과',
'성역할과',
'성의',
'성이',
'성인',
'성인이',
'성장',
'성장하면서',
'성적',
'성적과',
'성적도',
'성적으로',
'성적의',
'성적이',
'성적인',
'성좌',
'성질',
'성차별주의',
'성찰의',
'성취된',
'성품으로',
'성품이',
'성함',
'세간에',
'세계',
'세계관',
'세계는',
'세계로',
'세계를',
'세계에는',
'세계여행',
'세계일주',
'세계적',
'세계적으로',
'세계적인',
'세금',
'세금으로',
'세금을',
'세기',
'세기에',
'세대',
'세대가',
'세력이',
'세련된',
'세련미가',
'세례를',
'세로',
'세미나',
'세밀하게',
'세상',
'세상과',
'세상과의',
'세상도',
'세상에',
'세상에',
'세상에게',
'세상에서',
'세상에서도',
'세상은',
'세상을',
'세상의',
'세상이',
'세세하게',
'세수',
'세시풍속',
'세시풍속을',
'세에',
'세우기를',
'세우는',
'세울',
'세워줄',
'세월',
'세월이',
'세의',
'세제',
'세탁',
'세탁기',
'세탁소',
'세트',
'섹슈얼리티',
'센터',
'센티미터',
'셋방에서',
'셋방으로',
'셋째',
'셋째아들',
'셸리가',
'소감으로',
'소감을',
'소개',
'소개될',
'소개로',
'소개받게',
'소개하고',
'소개하기도',
'소개하면서',
'소개한',
'소개해',
'소규모',
'소극적',
'소금',
'소꿉친구',
'소나기',
'소나무',
'소녀',
'소년',
'소년이',
'소담한',
'소득',
'소리',
'소리를',
'소리에',
'소망',
'소매',
'소문',
'소문마져',
'소문을',
'소문이',
'소복이',
'소비',
'소비자',
'소상하게',
'소생',
'소설',
'소설가',
'소설가로도',
'소설가였던',
'소설과',
'소설도',
'소설로',
'소설에',
'소설에는',
'소설은',
'소설을',
'소설의',
'소설이기도',
'소설인',
'소설작',
'소설집',
'소셜',
'소속',
'소송을',
'소수',
'소수였고',
'소스',
'소시지',
'소식',
'소식들이',
'소식은',
'소식을',
'소신을',
'소실의',
'소아과',
'소외되었다',
'소외된',
'소외받은',
'소외시켰다',
'소용',
'소용돌이',
'소용이',
'소원',
'소원을',
'소위',
'소유',
'소유물과',
'소유자',
'소음',
'소임을',
'소장',
'소장을',
'소재',
'소재가',
'소재는',
'소재도',
'소재로',
'소재에',
'소주',
'소중',
'소중하다고',
'소중한',
'소중히',
'소지품',
'소진한',
'소질',
'소출품전을',
'소취하의',
'소치라고',
'소통도',
'소통되는',
'소통을',
'소통하는',
'소통할',
'소파',
'소포',
'소풍',
'소프트웨어',
'소행이라고',
'소형',
'소홀히',
'소화',
'속내를',
'속담',
'속도',
'속도가',
'속리산',
'속마음',
'속박해',
'속삭이는',
'속살',
'속세를',
'속세의',
'속에',
'속에',
'속에',
'속에서',
'속에서는',
'속옷',
'속옷을',
'속으로',
'속을',
'속의',
'속이고',
'속이고',
'속이는',
'속칭',
'속한',
'손가락',
'손과',
'손길',
'손길이',
'손녀',
'손녀에게',
'손녀이며',
'손님',
'손대면',
'손등',
'손목',
'손바닥',
'손발',
'손뼉',
'손수',
'손수건',
'손쉽게',
'손실',
'손실이라',
'손에',
'손은',
'손을',
'손을',
'손을',
'손자',
'손잡이',
'손질',
'손짓을',
'손톱',
'손해',
'손해배상',
'솔뫼',
'솔뫼에서',
'솔직하게',
'솔직한',
'솔직해질',
'솔직히',
'솜씨',
'송고하였고',
'송금',
'송금을',
'송금하기도',
'송금한',
'송금했는데',
'송씨',
'송아지',
'송이',
'송편',
'쇠고기',
'쇼가',
'쇼트',
'쇼핑',
'수가',
'수건',
'수고',
'수군거림과',
'수군대는',
'수년',
'수놓으면',
'수는',
'수단',
'수단이라는',
'수도',
'수도',
'수도권',
'수도꼭지',
'수도생활을',
'수돗물',
'수동적',
'수려한',
'수록된',
'수료',
'수료하고',
'수립하는',
'수만',
'수많은',
'수많은',
'수면',
'수명',
'수모를',
'수박',
'수밖에',
'수백',
'수백년을',
'수법으로',
'수법을',
'수살귀에',
'수상',
'수상과',
'수상을',
'수상하고',
'수석',
'수성',
'수술',
'수시로',
'수신',
'수십',
'수업',
'수업을',
'수업종이',
'수없이',
'수염',
'수영',
'수영장',
'수요',
'수요일',
'수용',
'수용과',
'수용되어',
'수용되어야',
'수용되지',
'수용된',
'수용하게',
'수용하는',
'수용하면서',
'수용하여',
'수용한',
'수용할',
'수입',
'수입이',
'수입품',
'수입한',
'수작으로',
'수장에',
'수저',
'수제자로',
'수준',
'수준을',
'수집',
'수집한',
'수집해서',
'수차례',
'수채화',
'수척한',
'수천',
'수출',
'수컷',
'수컷과도',
'수표',
'수필',
'수필과',
'수필도',
'수필을',
'수학',
'수학하면서',
'수행한다',
'수행한데',
'수험생',
'수화기',
'수효는',
'숙녀',
'숙독',
'숙부',
'숙부는',
'숙부에게',
'숙부의',
'숙소',
'숙소로',
'숙소인',
'숙제',
'순간',
'순간부터',
'순간에는',
'순간이',
'순간적',
'순결한',
'순례자',
'순사부장의',
'순서',
'순수',
'순수한',
'순식간',
'순식간에',
'순위',
'순응했다는',
'순종하는',
'순환은',
'순회',
'순회전을',
'숟가락',
'술병',
'술자리',
'술잔',
'술집',
'술집과',
'숨겨놓고',
'숨겨두었던',
'숨결을',
'숨겼지요',
'숨길',
'숨쉬기조차',
'숨어',
'숨은',
'숨졌다는',
'숫자',
'숭고한',
'숲에서',
'쉬는',
'쉬쉬하던',
'쉬어',
'쉽게',
'쉽게',
'쉽사리',
'슈퍼마켓',
'스님',
'스님을',
'스님이라',
'스마트폰',
'스마트폰을',
'스마트폰의',
'스무',
'스물',
'스물다섯',
'스물다섯에',
'스물셋에',
'스물하나',
'스물하나가',
'스민',
'스스로',
'스스로가',
'스승',
'스웨터',
'스위스',
'스위스에도',
'스위스에서',
'스위스와',
'스위치',
'스칼라',
'스캔들',
'스캔들의',
'스케이트',
'스케줄',
'스켓치',
'스키',
'스키장',
'스타',
'스타가',
'스타일',
'스테이트',
'스톤',
'스톤과',
'스튜디오',
'스트레스',
'스트레스와',
'스트리트',
'스포츠',
'스피커',
'슬그머니',
'슬쩍',
'슬퍼졌던',
'슬픈',
'슬픔',
'슬픔을',
'슬픔이여',
'슬하에',
'슬하에서',
'습관',
'습관적',
'습기',
'습성이',
'승객',
'승낙을',
'승락하게',
'승려가',
'승려생활을',
'승리',
'승리하는',
'승무원들은',
'승부',
'승용차',
'승진',
'승진한',
'승화시켜',
'승화시킨',
'시가',
'시가인',
'시가지',
'시각',
'시각과',
'시각도',
'시각으로',
'시각을',
'시각이',
'시간',
'시간과',
'시간속으로',
'시간여동안',
'시간이',
'시계',
'시골',
'시극',
'시금치',
'시기',
'시기는',
'시기라',
'시기에',
'시까지의',
'시나',
'시나리오',
'시내',
'시내버스',
'시내에',
'시내와',
'시누이',
'시는',
'시달려',
'시달리게',
'시달리는',
'시달리다가',
'시달림을',
'시대',
'시대감각을',
'시대까지',
'시대를',
'시대별',
'시대상황이',
'시대에',
'시대의',
'시대적',
'시댁',
'시도',
'시도가',
'시도되기',
'시도와',
'시도한',
'시도했던',
'시들고',
'시들어',
'시들었던',
'시디',
'시를',
'시리도록',
'시리즈',
'시립',
'시멘트',
'시민',
'시민들의',
'시민학교',
'시부모',
'시사하기',
'시선',
'시선에',
'시선을',
'시선이',
'시설',
'시설이',
'시스템',
'시신',
'시신으로',
'시신을',
'시아버지',
'시야',
'시어머니',
'시어머니가',
'시어머니와',
'시어머니의',
'시에',
'시에는',
'시에서',
'시에서는',
'시와',
'시외',
'시외버스',
'시월',
'시위',
'시위가',
'시위를',
'시위하던',
'시인',
'시인과',
'시인은',
'시인의',
'시인이며',
'시일',
'시작',
'시작되기',
'시작된',
'시작됨에',
'시작이',
'시작이라네',
'시작이라는',
'시작일',
'시작품도',
'시작품으로',
'시작하는',
'시작하니',
'시작하면서',
'시작한',
'시작했고',
'시작했다',
'시장',
'시장에서',
'시적인',
'시절',
'시절부터',
'시절에',
'시절은',
'시절을',
'시절의',
'시점',
'시중',
'시중에',
'시중에는',
'시중에서는',
'시중의',
'시즌',
'시집',
'시집갈',
'시집살이를',
'시집에서',
'시집을',
'시찰을',
'시청',
'시청률',
'시청자',
'시카고',
'시켜',
'시켰고',
'시키는',
'시합',
'시험',
'시험에',
'식구',
'식구들의',
'식구들이',
'식기',
'식당',
'식당에서',
'식량',
'식량',
'식료품',
'식물',
'식민지',
'식민지에서',
'식민지의',
'식빵',
'식사',
'식생활',
'식욕',
'식으로만',
'식초',
'식탁',
'식품',
'식품점',
'신경',
'신경',
'신경이',
'신고',
'신고로',
'신교동',
'신교육에',
'신교육을',
'신규',
'신념',
'신념체계에',
'신동아',
'신랄한',
'신랑',
'신랑이었던',
'신령님이',
'신뢰했지만',
'신문',
'신문과',
'신문기자가',
'신문기자와',
'신문사',
'신문사에',
'신문삽화',
'신문에',
'신문에도',
'신문이나',
'신문지',
'신문학의',
'신발',
'신봉하였고',
'신부',
'신부는',
'신부에게',
'신분',
'신분이기',
'신비',
'신비를',
'신비적인',
'신비화되는',
'신사',
'신사상을',
'신사임당',
'신생',
'신생활에',
'신선함',
'신설',
'신성에',
'신성한',
'신세',
'신세대',
'신속성을',
'신식',
'신약',
'신약',
'신약성서의',
'신용',
'신원미상',
'신의',
'신인',
'신입생',
'신자가',
'신작',
'신장을',
'신제품',
'신중론을',
'신청',
'신청서',
'신체',
'신체적',
'신체적으로',
'신호',
'신호등',
'신호탄을',
'신혼',
'신혼부부',
'신혼여행',
'신혼여행은',
'신혼여행을',
'신혼을',
'신화',
'신화는',
'신화마저',
'싣기도',
'실감',
'실감있게',
'실내',
'실내의',
'실려',
'실려오네',
'실력',
'실력으로',
'실력을',
'실력있는',
'실례',
'실례로',
'실로',
'실리기도',
'실린',
'실릴',
'실망',
'실명으로',
'실물',
'실물로',
'실상',
'실수',
'실수도',
'실수하지',
'실습',
'실시',
'실시간',
'실시하고',
'실어주기도',
'실어증',
'실연당한',
'실연하자',
'실용서',
'실은',
'실의에',
'실의의',
'실이',
'실장',
'실전되어',
'실정',
'실제',
'실제로',
'실제로는',
'실종처리',
'실증',
'실질적',
'실천',
'실천한',
'실천할',
'실체',
'실컷',
'실태',
'실패',
'실패로',
'실패를',
'실패와',
'실패하며',
'실패한',
'실험',
'실험실로',
'실험에',
'실험적으로',
'실험적인',
'실현',
'싫다며',
'심각한',
'심경을',
'심리',
'심리를',
'심리묘사에',
'심리적',
'심미계',
'심부름',
'심사',
'심사는',
'심사로',
'심사를',
'심사위원의',
'심신은',
'심신의',
'심은',
'심장',
'심정',
'심취하기도',
'심판',
'심포지엄',
'심포지엄을',
'심하게',
'심하고',
'심한',
'심해지면서',
'십고',
'십여',
'싶어',
'싶어',
'싶어서',
'싶어요',
'싶었던',
'싶은',
'싶은걸',
'싶을',
'싸구려',
'싸는',
'싸늘하게',
'싸였던',
'싸우며',
'싸운',
'싸움',
'싸움은',
'싸워주게',
'싹텄고',
'싼값',
'쌈에서',
'쌍둥이',
'쌓아가는',
'쌓여',
'쌓였던',
'써붙이고',
'써서',
'써야',
'썰매를',
'썼고',
'썼는데',
'썼다고',
'썼으며',
'썼지만',
'쏘다녀',
'쏟아졌던',
'쏟아지는',
'쏟아진',
'쑥덕거림과',
'쓰고',
'쓰기',
'쓰기도',
'쓰는',
'쓰다가',
'쓰담아',
'쓰러질',
'쓰레기',
'쓰레기통',
'쓰며',
'쓰면서',
'쓰여진',
'쓰지',
'쓴맛',
'쓸데없이',
'쓸쓸한',
'씨가',
'씨름',
'씨름하고',
'씨앗',
'씨에',
'씨족의',
'씩씩하게',
'씻기고',
'씻으려고',
'아가씨',
'아기',
'아까',
'아끼지',
'아나운서',
'아내',
'아내가',
'아내나',
'아내라는',
'아내를',
'아내에게',
'아내에게는',
'아내와',
'아내의',
'아내인',
'아내임에도',
'아냐',
'아뇨',
'아는',
'아니',
'아니고자',
'아니냐는',
'아니다',
'아니더라고',
'아니라',
'아니라고',
'아니라는',
'아니라며',
'아니라면',
'아니며',
'아니야',
'아니어도',
'아니었지',
'아니었지만',
'아니오',
'아니오고',
'아니요',
'아니지',
'아니하면',
'아닌',
'아닌가',
'아닌데',
'아닐',
'아동들이',
'아동에',
'아드님',
'아득히',
'아들',
'아들만을',
'아들에게',
'아들은',
'아들을',
'아들의',
'아들이',
'아들이자',
'아들인',
'아래',
'아래',
'아래쪽',
'아래층',
'아랫사람',
'아렸지만',
'아류',
'아류라고도',
'아르바이트',
'아른아른',
'아름다와',
'아름다운',
'아름다움',
'아름다워',
'아름답기만',
'아마',
'아마도',
'아명',
'아명이자',
'아모',
'아무',
'아무',
'아무개',
'아무것',
'아무것도',
'아무도',
'아무래도',
'아무런',
'아무렇지',
'아무리',
'아무말도',
'아무튼',
'아버님',
'아버지',
'아버지가',
'아버지는',
'아버지들과',
'아버지라는',
'아버지를',
'아버지만을',
'아버지뿐',
'아버지에',
'아버지에게',
'아버지와',
'아버지의',
'아빠',
'아세요',
'아쉬울',
'아쉬움',
'아쉬워',
'아스팔트',
'아아',
'아예',
'아울러',
'아유',
'아이',
'아이같이',
'아이고',
'아이까지',
'아이는',
'아이돌',
'아이들도',
'아이들아',
'아이들을',
'아이들이',
'아이들처럼',
'아이디를',
'아이디어',
'아이를',
'아이스크림',
'아이에',
'아이에게',
'아이의',
'아저씨',
'아주',
'아주머니',
'아주머니는',
'아줌마',
'아직',
'아직까지',
'아직도',
'아직은',
'아침',
'아침에',
'아파트',
'아파트로',
'아프게만',
'아픈',
'아픈',
'아픈가요',
'아픔',
'아픔을',
'아하',
'아홉',
'아흔',
'악기',
'악마',
'악마같은',
'악마라',
'악마라고',
'악마의',
'악몽',
'악몽이',
'악수',
'악의적인',
'악취미',
'악평과',
'악평에',
'악화되어',
'악화되었고',
'악화되자',
'악화시키는',
'악화와',
'안개',
'안경',
'안고',
'안과',
'안내',
'안내상자',
'안녕',
'안녕',
'안녕히',
'안다는',
'안되는',
'안된다고',
'안된다는',
'안된다며',
'안될',
'안드로이드',
'안목과',
'안목으로',
'안방',
'안보시고',
'안보았어요',
'안부',
'안색',
'안아주곤',
'안아주어도',
'안양',
'안에',
'안에서',
'안에서는',
'안으리',
'안은',
'안의',
'안이하게',
'안전',
'안정',
'안정적인',
'안주',
'안쪽',
'안타까움을',
'안팎',
'안하느냐는',
'앉아서',
'않거나',
'않게',
'않겠다는',
'않겠습니까',
'않고',
'않고',
'않고서야만',
'않기',
'않기를',
'않네',
'않느냐고',
'않느냐며',
'않는',
'않는다고',
'않는다고',
'않는다네',
'않는다면',
'않는데',
'않다',
'않던',
'않도록',
'않습디까',
'않아',
'않아도',
'않아요',
'않았고',
'않았는데',
'않았다',
'않았다가',
'않았다는',
'않았던',
'않았어요',
'않았으나',
'않았지',
'않았지만',
'않으니',
'않으니까',
'않으니만',
'않으며',
'않으면',
'않으면서',
'않으면서도',
'않은',
'않을',
'않을까요',
'알게',
'알겠니',
'알고',
'알고',
'알고는',
'알기',
'알기를',
'알려',
'알려나가야',
'알려져',
'알려졌고',
'알려졌으나',
'알려지게',
'알려지기',
'알려지면서',
'알려지지',
'알려진',
'알루미늄',
'알리기도',
'알리는',
'알리면서',
'알리지',
'알릴만한',
'알수',
'알아',
'알아내서',
'알아도',
'알아듣지',
'알아보지',
'알아야',
'알아주든',
'알았는데',
'알았던',
'알의',
'알지',
'알차게',
'알코올',
'알콜중독자',
'앓고',
'앓는',
'앓던',
'암시',
'암울한',
'암자에서',
'암컷',
'암흑',
'압력',
'압력과',
'압력으로',
'압력을',
'압제',
'앞길',
'앞까지',
'앞날',
'앞두고',
'앞뒤',
'앞문',
'앞서',
'앞서가는',
'앞서간',
'앞선',
'앞에서',
'앞에서는',
'앞의',
'앞장서',
'앞쪽',
'애국적인',
'애나',
'애니메이션',
'애수를',
'애써',
'애욕의',
'애원에도',
'애인',
'애인의',
'애정',
'애정에',
'애착을',
'애처가라는',
'애초',
'애틋하던',
'애호가들이',
'애호해',
'애호해주는',
'액세서리',
'액수',
'액자',
'앨런',
'앨범',
'앳된',
'야간',
'야구',
'야구장',
'야기하기도',
'야기하는',
'야단',
'야만적',
'야산에',
'야수파',
'야수파와',
'야수파적인',
'야옹',
'야옹이',
'야외',
'야채',
'야학을',
'야후',
'약간',
'약간의',
'약국',
'약산과',
'약속',
'약속대로',
'약속만',
'약속에서도',
'약속을',
'약속하고',
'약수',
'약자들의',
'약자로만',
'약자인',
'약점',
'약탈한',
'약품',
'약혼과',
'약혼녀',
'약혼을',
'약혼자',
'약혼자의',
'양국',
'양념',
'양력',
'양로원에',
'양로원에서',
'양로원으로',
'양로원을',
'양말',
'양반의',
'양배추',
'양보',
'양복',
'양복과',
'양복을',
'양상을',
'양상추',
'양성',
'양식',
'양심',
'양옆',
'양육을',
'양자로',
'양장',
'양장을',
'양장이',
'양장점',
'양주',
'양쪽',
'양파',
'양화',
'양화를',
'얘기',
'얘기가',
'얘기가',
'얘기도',
'얘기들',
'어김없이',
'어깨',
'어깨가',
'어깨를',
'어깨춤을',
'어느',
'어느덧',
'어느새',
'어댑터',
'어둠',
'어둠으로',
'어둠이',
'어둡게',
'어디',
'어디',
'어디까지가',
'어디까지나',
'어디까지나',
'어디든',
'어디론가',
'어디를',
'어디서든',
'어디에도',
'어때',
'어떤',
'어떨까',
'어떻게',
'어려서',
'어려서부터',
'어려우나',
'어려움',
'어려움으로',
'어려움을',
'어려웠고',
'어려웠던',
'어렵게',
'어렵고',
'어렵기',
'어렵습니까',
'어렸을',
'어르신',
'어른',
'어린',
'어린아이',
'어린애',
'어린이',
'어린이날',
'어머',
'어머니',
'어머니가',
'어머니는',
'어머니라',
'어머니로서',
'어머니를',
'어머니와',
'어머니의',
'어머님',
'어미',
'어미가',
'어미된',
'어서',
'어스름이',
'어울렸던',
'어울리지',
'어원이다',
'어이한',
'어저께',
'어절씨구',
'어제',
'어제는',
'어제의',
'어제의',
'어젯밤',
'어젯밤',
'어조로',
'어지럽히는',
'어째서',
'어쨌든',
'어쩌겠어요',
'어쩌다',
'어쩌다가',
'어쩌면',
'어쩌면',
'어쩐지',
'어쩔',
'어쩜',
'어찌',
'어찌나',
'어찌하랴',
'어학',
'억압',
'억압과',
'억압된',
'억압받는',
'억압성을',
'억압자가',
'억압하고',
'억압하는',
'억울하고',
'억울한',
'억울함을',
'억제할',
'억지로',
'언급되는',
'언급되지',
'언급들은',
'언급이',
'언급하기도',
'언급하며',
'언급한',
'언니',
'언니가',
'언니께로',
'언니도',
'언니에게',
'언덕',
'언론',
'언론과',
'언론사에',
'언론사와',
'언론에',
'언론은',
'언론을',
'언론인',
'언변에',
'언어',
'언어들을',
'언제',
'언제고',
'언제나',
'언제나',
'언제부터',
'언젠가',
'언젠가',
'언젠가는',
'언젠가의',
'얻게',
'얻기',
'얻기도',
'얻는데',
'얻어',
'얻어야',
'얻으리라',
'얻은',
'얻을',
'얻지',
'얼굴',
'얼굴',
'얼굴도',
'얼굴에',
'얼굴에',
'얼굴을',
'얼른',
'얼리',
'얼마',
'얼마간',
'얼마나',
'얼쑤',
'얼씨구',
'얼씨구씨구',
'얼어붙고',
'얼었던',
'얼음',
'얼핏',
'얽매여',
'얽매이게',
'얽매이지',
'얽매인',
'엄격한',
'엄마',
'엄마가',
'엄마는',
'엄마들과',
'엄밀하지',
'엄청난',
'업데이트는',
'업데이트를',
'업무',
'업적을',
'업종',
'업체',
'업체들을',
'없고',
'없고는',
'없네',
'없네',
'없느냐',
'없는',
'없는',
'없는',
'없는걸',
'없는데',
'없는데',
'없는지',
'없는지',
'없다고',
'없다는',
'없다며',
'없던',
'없애려',
'없어',
'없어',
'없어',
'없어',
'없어서',
'없었거든요',
'없었고',
'없었다',
'없었다는',
'없었던',
'없었던',
'없으니',
'없으니까',
'없으며',
'없으면',
'없으면서',
'없으므로',
'없을',
'없음을',
'없이',
'없이',
'없이',
'없이',
'없이는',
'없지',
'없지만',
'없지만',
'엉덩이',
'엉망',
'엉터리',
'엊그제',
'엊그제일',
'에너지',
'에는',
'에서',
'에어컨',
'엔진',
'엔진들이',
'엘리트',
'여가',
'여간',
'여건',
'여겨졌을',
'여겨지고',
'여겨지는',
'여겼던',
'여겼으며',
'여고',
'여고생',
'여과없이',
'여관',
'여관에',
'여군',
'여권',
'여기',
'여기고',
'여기는',
'여기던',
'여기며',
'여기면서도',
'여기서',
'여기서는',
'여기에서',
'여기에서는',
'여기자와',
'여기저기',
'여기지도',
'여긴',
'여긴다며',
'여길',
'여김은',
'여느',
'여대생',
'여덟',
'여동생',
'여든',
'여러',
'여러가지',
'여러번',
'여러분',
'여러분의',
'여럿',
'여로의',
'여론',
'여론이',
'여류',
'여류문인',
'여류화가',
'여류화가로',
'여름',
'여름철',
'여름호',
'여보',
'여보세요',
'여비가',
'여섯',
'여성',
'여성',
'여성계몽론',
'여성과',
'여성과',
'여성과의',
'여성관',
'여성관에',
'여성관을',
'여성단체는',
'여성단체의',
'여성도',
'여성들',
'여성들과',
'여성들과는',
'여성들에게',
'여성들은',
'여성들을',
'여성들의',
'여성들이',
'여성들이',
'여성문제를',
'여성보다',
'여성사',
'여성사에서',
'여성상으로',
'여성상을',
'여성에',
'여성에',
'여성에게',
'여성에게는',
'여성에게도',
'여성에게만',
'여성운동',
'여성운동가',
'여성운동의',
'여성으로',
'여성으로는',
'여성으로서',
'여성은',
'여성은',
'여성을',
'여성을',
'여성의',
'여성의',
'여성이',
'여성이',
'여성이고',
'여성이기를',
'여성이길',
'여성이라고',
'여성이라도',
'여성인',
'여성인권',
'여성인물',
'여성일',
'여성작가',
'여성작가들',
'여성작가로',
'여성주의',
'여성주의',
'여성주의적',
'여성학에',
'여성화가',
'여성화가와',
'여승',
'여승으로',
'여승이',
'여실히',
'여왕',
'여우',
'여우에',
'여유',
'여의고',
'여인',
'여인드',
'여인들',
'여인들과',
'여인들의',
'여인들이',
'여인이',
'여일간',
'여자',
'여자가',
'여자나',
'여자는',
'여자도',
'여자들',
'여자들에',
'여자들에게',
'여자들을',
'여자들의',
'여자라고',
'여자라는',
'여자란',
'여자로',
'여자로서의',
'여자를',
'여자에',
'여자에게',
'여자에게는',
'여자에게도',
'여자에게만',
'여자였고',
'여자였으나',
'여자와',
'여자와는',
'여자요',
'여자의',
'여자지계',
'여자쯤로',
'여장을',
'여전히',
'여점',
'여점을',
'여정을',
'여주인공의',
'여지없이',
'여직원',
'여학교',
'여학교를',
'여학교의',
'여학생',
'여학생의',
'여함',
'여행',
'여행과',
'여행기',
'여행기에는',
'여행기와',
'여행길에',
'여행비용을',
'여행사',
'여행에',
'여행에서도',
'여행은',
'여행을',
'여행이니까',
'여행지에서',
'여행하고',
'여행하는',
'역사',
'역사가',
'역사를',
'역사비평',
'역사비평사',
'역사상',
'역사에',
'역사적',
'역사적',
'역사적으로',
'역사학',
'역사학',
'역사학자',
'역설하였고',
'역설했지만',
'역시',
'역임하였고',
'역임한',
'역임했기',
'역정을',
'역폭풍을',
'역할',
'역할',
'역할과',
'역할은',
'역할을',
'역할이라고',
'엮음',
'연간',
'연결',
'연관',
'연구',
'연구가',
'연구는',
'연구를',
'연구소',
'연구소를',
'연구실',
'연구에서',
'연구원',
'연구자',
'연구하는',
'연극',
'연극배우',
'연금술사',
'연기',
'연기자',
'연기한',
'연대는',
'연동하여',
'연두색',
'연락',
'연락을',
'연락이',
'연락처',
'연락할',
'연령',
'연령대가',
'연루되는',
'연말',
'연말연시',
'연말연시의',
'연모한',
'연못',
'연민',
'연민을',
'연보',
'연상으로',
'연상인',
'연설',
'연세',
'연속',
'연습',
'연애',
'연애가',
'연애감정을',
'연애관을',
'연애는',
'연애라고',
'연애론',
'연애론을',
'연애를',
'연애사건',
'연애사건을',
'연애소동을',
'연애소설',
'연애에',
'연애와',
'연애요',
'연애의',
'연애편지를',
'연애하게',
'연애하고',
'연애하는',
'연애한다는',
'연애할',
'연애했다가',
'연애했지만',
'연약한',
'연예가',
'연예인',
'연예인이나',
'연인',
'연인과',
'연인으로',
'연인이',
'연인이었던',
'연일',
'연작은',
'연작을',
'연장',
'연장으로',
'연장자',
'연재',
'연재까지',
'연재를',
'연재하더니',
'연정',
'연주',
'연출',
'연필',
'연필로',
'연하의',
'연합',
'연휴',
'열거나',
'열기',
'열네',
'열다섯',
'열등한',
'열리기도',
'열리는',
'열리면서',
'열린',
'열매',
'열쇠',
'열심인',
'열심히',
'열아홉살',
'열악한',
'열어',
'열어두게',
'열었던',
'열었으나',
'열었으며',
'열정',
'열정적',
'열정적인',
'열차',
'열차를',
'열풍',
'열흘',
'염려',
'염려가',
'염증을',
'염치없는',
'엽서',
'엽서에서는',
'엿본',
'엿볼',
'영감을',
'영결',
'영리',
'영리적',
'영문명',
'영문이든',
'영문학',
'영문학자',
'영사관',
'영산에',
'영상',
'영상을',
'영양',
'영양실조',
'영어',
'영어를',
'영어본과',
'영업',
'영역',
'영역에서의',
'영웅',
'영웅이라',
'영원을',
'영원한',
'영원할',
'영원히',
'영원히',
'영육이냐',
'영이',
'영이냐',
'영전을',
'영하',
'영향',
'영향력',
'영향력은',
'영향력을',
'영향을',
'영향이',
'영혼',
'영혼과',
'영혼을',
'영혼이',
'영화',
'영화관',
'영화로도',
'영화배우',
'영화수업을',
'영화에',
'영화에도',
'영화제',
'영화출연도',
'옆구리',
'옆방',
'옆에',
'옆집',
'예감',
'예고된',
'예금',
'예기치',
'예로',
'예를',
'예방',
'예방해야',
'예보',
'예비',
'예사로',
'예산',
'예산군',
'예산에',
'예산의',
'예상',
'예선',
'예순',
'예술',
'예술가',
'예술가에게',
'예술과',
'예술로',
'예술성에',
'예술에',
'예술은',
'예술을',
'예술의',
'예술이',
'예술이요',
'예술적',
'예술혼에',
'예술혼을',
'예습',
'예시적',
'예식장',
'예식장에서',
'예약',
'예외',
'예의',
'예전',
'예전에',
'예전의',
'예절',
'예정',
'예정되어',
'예지와',
'예컨대',
'예행연습을',
'옛날',
'옛날로',
'옛날에는',
'옛날의',
'옛날의',
'옛날이야기',
'오가는',
'오가며',
'오간',
'오고',
'오네',
'오는',
'오늘',
'오늘날',
'오늘날',
'오늘도',
'오늘은',
'오늘의',
'오락',
'오래',
'오래가지',
'오래간만',
'오래도록',
'오래전',
'오랜',
'오랜동안',
'오랜만',
'오랫동안',
'오렌지',
'오로지',
'오류',
'오르기도',
'오르며',
'오르셨소',
'오른',
'오른발',
'오른손',
'오른쪽',
'오리',
'오면',
'오븐',
'오빠',
'오빠가',
'오빠로부터',
'오빠의',
'오빠인',
'오시는',
'오십',
'오싹해지고',
'오염',
'오염시킬',
'오월',
'오이',
'오전',
'오지',
'오직',
'오징어',
'오페라',
'오페라를',
'오피스텔',
'오해',
'오해받아온',
'오해와',
'오해의',
'오후',
'오히려',
'옥고를',
'옥상',
'옥수수',
'옥죄는',
'옥중의',
'온갖',
'온다고',
'온도',
'온돌',
'온라인',
'온몸',
'온전한',
'온종일',
'온통',
'온통을',
'올가을',
'올까',
'올라',
'올라가던',
'올릴',
'올릴지',
'올림으로써',
'올바르게',
'올바르다고',
'올바른',
'올여름',
'올케',
'올케이자',
'올해',
'올해로',
'옭매는',
'옭아맨다는',
'옭죄는',
'옮겨',
'옳다구나',
'옳지',
'옷차림',
'옹호해야',
'옹호했다',
'와는',
'와도',
'와보시게',
'와서',
'와서는',
'와요',
'와이셔츠',
'와인',
'와중에도',
'완납된',
'완납했는데',
'완벽하게',
'완벽하고',
'완벽한',
'완성',
'완성도를',
'완성해',
'완성했으나',
'완전',
'완전한',
'완전한',
'완전히',
'왓스랴',
'왔네',
'왔는데',
'왔다',
'왔던',
'왔어요',
'왔었지요',
'왕국',
'왕비',
'왕성한',
'왕자',
'왕조가',
'왜냐하면',
'왠지',
'외간',
'외갓집',
'외과',
'외교',
'외교관',
'외교관으로',
'외교관의',
'외교관이',
'외국',
'외국어',
'외국인',
'외로운',
'외로움',
'외면과',
'외면만',
'외면으로',
'외면했고',
'외모',
'외모를',
'외모와',
'외모의',
'외무부에서',
'외무성',
'외무성이',
'외부',
'외부에',
'외삼촌',
'외아들',
'외에',
'외에는',
'외에도',
'외우고',
'외제',
'외지인을',
'외쳤던',
'외출',
'외치면서도',
'외침',
'외침은',
'외침이',
'외할머니',
'외할아버지',
'왼발',
'왼손',
'왼쪽',
'요구',
'요구당한',
'요구를',
'요구에',
'요구하고',
'요구하기도',
'요구하는',
'요구하면서',
'요구하여',
'요구할',
'요구해서는',
'요구했고',
'요구했던',
'요금',
'요란한',
'요리',
'요리사',
'요새',
'요약할',
'요양과',
'요양원',
'요양하게',
'요양하면서',
'요일',
'요절',
'요절하고',
'요즈음',
'요즘',
'요청',
'요청을',
'욕구가',
'욕구와',
'욕망에',
'욕망을',
'욕망이냐',
'욕실',
'욕심',
'욕심을',
'욕정을',
'용감하게',
'용기',
'용기는',
'용기도',
'용납',
'용도',
'용돈',
'용돈을',
'용서',
'용서해',
'용어',
'용어가',
'용어는',
'용어의',
'우려',
'우려가',
'우리',
'우리',
'우리',
'우리가',
'우리나라',
'우리는',
'우리는',
'우리는',
'우리도',
'우리들',
'우리말',
'우리의',
'우리집',
'우린',
'우산',
'우선',
'우수성을',
'우수하다는',
'우수한',
'우수해',
'우승',
'우아한',
'우연히',
'우울증과',
'우울증은',
'우울증을',
'우울하게',
'우월감을',
'우월적',
'우월하다고',
'우월한',
'우위에',
'우유',
'우정',
'우정과',
'우주',
'우체국',
'우편',
'우편을',
'우표',
'운동',
'운동가로도',
'운동가여성',
'운동과',
'운동복',
'운동에',
'운동을',
'운동이',
'운동장',
'운동화',
'운명',
'운명과',
'운명을',
'운명의',
'운반',
'운영',
'운영을',
'운영하고',
'운영하는',
'운영하며',
'운전',
'운전기사',
'운전기사를',
'운전사',
'운전자',
'운전하는',
'운행',
'울곤',
'울려서',
'울리며',
'울면서',
'울었고',
'울었어',
'울었지',
'울음',
'울음소리',
'울지',
'움직거리기',
'움직이지',
'움직이지는',
'움직임',
'움직임을',
'움직임이',
'웃기만',
'웃는',
'웃어른',
'웃어보게',
'웃음',
'웃음소리',
'웃음지어',
'웅신님이',
'워낙',
'원고',
'원고가',
'원고를',
'원고지',
'원래',
'원망스러운',
'원망치',
'원망하라',
'원문이',
'원서',
'원수는',
'원숭이',
'원인',
'원인이',
'원장',
'원장은',
'원전을',
'원정으로',
'원치',
'원통한',
'원피스',
'원하는',
'원하는가',
'원하며',
'원한',
'원한다고',
'원한다면',
'원할',
'원했던',
'원했지만',
'월간',
'월간지',
'월경',
'월경을',
'월과',
'월급',
'월급을',
'월부터',
'월부터는',
'월세',
'월에',
'월에는',
'월요일',
'월요일도',
'월의',
'웨이터',
'웬일',
'웬일인지',
'웹사이트',
'웹사이트인',
'웹을',
'위가',
'위기',
'위대한',
'위독',
'위로',
'위로',
'위로여행',
'위로하지는',
'위반',
'위법',
'위상',
'위상에는',
'위상을',
'위선',
'위선과',
'위선이라며',
'위선적인',
'위성',
'위시한',
'위아래',
'위안이',
'위에',
'위에',
'위에',
'위에서',
'위원',
'위원장',
'위자료',
'위자료를',
'위주',
'위주의',
'위쪽',
'위층',
'위치',
'위치는',
'위하여',
'위한',
'위해',
'위해',
'위해서',
'위해서',
'위해서는',
'위해서든지',
'위험',
'위험성',
'위험하게',
'위협',
'위협했고',
'윗몸',
'윗사람',
'윗사람이나',
'유교',
'유교와',
'유교의',
'유교적',
'유기견',
'유난히',
'유년기',
'유달리',
'유대',
'유동적이며',
'유래한',
'유럽',
'유럽과',
'유럽에서',
'유럽에서는',
'유럽의',
'유리',
'유리',
'유리창',
'유림과',
'유머',
'유명',
'유명세를',
'유명세에',
'유명인은',
'유명한',
'유명한만큼',
'유모가',
'유모인',
'유물',
'유복한',
'유부남이든',
'유사',
'유사한',
'유산',
'유실되었고',
'유언',
'유언비어의',
'유언을',
'유월',
'유인하는',
'유일무이한',
'유일한',
'유작',
'유작들',
'유적',
'유적지',
'유전자가',
'유죄',
'유지되는',
'유지를',
'유지하는',
'유지하면서',
'유진월',
'유창한',
'유출',
'유치원',
'유치한',
'유포',
'유포되어',
'유학',
'유학생',
'유학생들',
'유학생들과',
'유학생들이',
'유학생은',
'유학생인',
'유학생활',
'유학생활을',
'유학을',
'유학의',
'유학자',
'유학자들과',
'유학자들은',
'유학자들의',
'유학하는',
'유학하여',
'유행',
'유행어가',
'유행하던',
'유형',
'유혹하여',
'유혹했으며',
'유화',
'유화가',
'유화는',
'유화라는',
'유화를',
'유화와',
'육과',
'육상',
'육십',
'육아의',
'육이냐',
'육체',
'육체가',
'육체로',
'육체와',
'육체의',
'육체적',
'윤곽과',
'융단을',
'으레',
'으응',
'은근히',
'은둔자',
'은유적으로',
'은유한',
'은행',
'은행나무',
'음란',
'음란의',
'음란하다며',
'음란한',
'음력',
'음료',
'음료수',
'음반',
'음성',
'음식',
'음식물',
'음식점',
'음악',
'음악가',
'음악을',
'음악학교에',
'음음',
'음주',
'음탕한',
'음표가',
'응모',
'응모자격',
'응모한',
'응용',
'응원',
'의거하여',
'의견',
'의견과',
'의견도',
'의견을',
'의견이',
'의논',
'의도',
'의도를',
'의도적',
'의류',
'의류를',
'의무',
'의무가',
'의무같이',
'의무는',
'의무는',
'의무라는',
'의무를',
'의무뿐인',
'의무사항이',
'의무에',
'의무의',
'의무적으로',
'의문',
'의문을',
'의미',
'의미는',
'의미를',
'의미부여가',
'의미에',
'의미하는',
'의복',
'의사',
'의사가',
'의숙',
'의식',
'의식은',
'의식을',
'의식이라며',
'의식있는',
'의식적으로',
'의심',
'의심의',
'의외로',
'의욕',
'의원',
'의원실',
'의원이',
'의자',
'의존을',
'의존하고',
'의지',
'의탁하다가',
'의하면',
'의하여',
'의학',
'의한',
'의한',
'의해',
'의해',
'의해서도',
'의혹',
'의혹을',
'의혹이',
'이같은',
'이같이',
'이거',
'이것',
'이것들은',
'이것들이',
'이것은',
'이것을',
'이것이',
'이것저것',
'이게',
'이겨',
'이겨내기',
'이고',
'이곳',
'이곳이',
'이곳저곳',
'이기적으로',
'이기적인',
'이기주의나',
'이끌게',
'이끌고',
'이끌어',
'이나',
'이날',
'이내',
'이내의',
'이념',
'이념적',
'이놈',
'이는',
'이다음',
'이달',
'이당',
'이대로',
'이대로는',
'이데올로기',
'이동',
'이들',
'이들은',
'이들을',
'이들의',
'이듬해',
'이따가',
'이따금',
'이때',
'이때는',
'이때문에',
'이때부터',
'이때의',
'이라',
'이라고',
'이라고도',
'이라는',
'이라며',
'이란',
'이래',
'이래서',
'이러한',
'이런',
'이런가요',
'이런게',
'이런저런',
'이렇게',
'이렇게',
'이력',
'이력서',
'이로',
'이론에',
'이론에서',
'이론에서는',
'이론을',
'이론이',
'이론적',
'이롭게',
'이루기',
'이루도록',
'이루어지지',
'이루지',
'이룩할',
'이르게',
'이르기',
'이르기까지',
'이르나',
'이르는',
'이르러',
'이르러서는',
'이른',
'이를',
'이름',
'이름',
'이름과',
'이름도',
'이름만',
'이름아래',
'이름에',
'이름으로',
'이름으로도',
'이름은',
'이름을',
'이름의',
'이름이',
'이름이었고',
'이리',
'이리',
'이리저리',
'이마',
'이며',
'이모',
'이미',
'이미끝난',
'이미지',
'이민',
'이발소',
'이번',
'이별',
'이별의',
'이복',
'이분',
'이불',
'이빨',
'이빨을',
'이사',
'이사장',
'이상',
'이상에',
'이상으로',
'이상은',
'이상을',
'이상의',
'이상이',
'이상이라고',
'이상이며',
'이상인',
'이상적',
'이상적인',
'이상하게',
'이상하오',
'이상한',
'이성',
'이슈가',
'이슬',
'이십',
'이야기',
'이야기가',
'이야기는',
'이야기도',
'이야기를',
'이야기였기',
'이야기의',
'이야기하는',
'이야기하려',
'이야기하자',
'이야기해',
'이어',
'이어갈',
'이어갔지만',
'이어서',
'이어져',
'이어졌고',
'이어졌으며',
'이어진',
'이어질지',
'이었고',
'이었다고',
'이에',
'이였다면',
'이와',
'이외',
'이외의',
'이용',
'이용률이',
'이용자',
'이용자들은',
'이용자들을',
'이용자와',
'이용하고',
'이용하는',
'이용하여',
'이용한',
'이용해',
'이용해서',
'이웃',
'이웃집',
'이월',
'이유',
'이유가',
'이유는',
'이유로',
'이유를',
'이유였지만',
'이으면',
'이윽고',
'이은',
'이익',
'이자',
'이전',
'이전에',
'이전에는',
'이전의',
'이제',
'이제',
'이제는',
'이제야',
'이제와',
'이젠',
'이젠',
'이중',
'이중성을',
'이중잣대',
'이중잣대에',
'이중적인',
'이쪽',
'이처럼',
'이탈한',
'이튿날',
'이틀',
'이하',
'이해',
'이해가',
'이해관계',
'이해되어',
'이해에',
'이해하고',
'이해하고자',
'이해하려',
'이해하지',
'이해할',
'이해해',
'이행치',
'이행하는',
'이혼',
'이혼과',
'이혼에',
'이혼으로',
'이혼은',
'이혼을',
'이혼의',
'이혼의사를',
'이혼이',
'이혼하게',
'이혼하고',
'이혼하라고',
'이혼하지',
'이혼하지는',
'이혼한',
'이혼할',
'이후',
'이후로는',
'이후에는',
'이후에도',
'이후의',
'익명으로',
'익혀',
'익히고',
'익히는',
'인가',
'인간',
'인간관계',
'인간관계라',
'인간다운',
'인간답게',
'인간들은',
'인간들이',
'인간사',
'인간성',
'인간으로',
'인간으로서',
'인간은',
'인간을',
'인간의',
'인간이',
'인간이기를',
'인간이라는',
'인간이라며',
'인간이며',
'인간임을',
'인간적',
'인간적인',
'인간평등에',
'인간해방의',
'인걸',
'인격',
'인격을',
'인고의',
'인공',
'인구',
'인권',
'인권을',
'인근',
'인기',
'인기를',
'인도',
'인류',
'인류에게',
'인류의',
'인류학적',
'인륜과',
'인문사회',
'인물',
'인물과',
'인물로',
'인물상이',
'인물에',
'인물을',
'인물이',
'인물이',
'인물이라고',
'인물이라는',
'인물이지만',
'인물화',
'인물화와',
'인분',
'인사',
'인사는',
'인사들에게',
'인사들은',
'인사말',
'인사에',
'인사였기에',
'인산인해를',
'인삼',
'인삼차',
'인상',
'인상을',
'인상적',
'인상주의',
'인상파',
'인상파적',
'인생',
'인생사가',
'인생에는',
'인생에도',
'인생은',
'인생을',
'인생의',
'인생이',
'인쇄',
'인쇄용지',
'인스타그램',
'인스턴트',
'인습',
'인습에',
'인습에서',
'인습을',
'인습의',
'인습이며',
'인습이자',
'인습적',
'인식하고',
'인식하는',
'인신공격을',
'인신공격이',
'인어의',
'인연',
'인연이',
'인연인',
'인용',
'인용문',
'인용하며',
'인원',
'인위적으로',
'인의',
'인재',
'인정',
'인정받는',
'인정받았고',
'인정받지',
'인정이',
'인정하기',
'인제',
'인종',
'인증',
'인증할',
'인체',
'인터넷',
'인터넷에',
'인터뷰',
'인터뷰에서',
'인터뷰와',
'인턴',
'인턴과',
'인턴기자',
'인턴으로',
'인텔리',
'인하',
'인한',
'인해',
'인형',
'인형보다는',
'인형에',
'인형으로',
'인형을',
'인형의',
'인형이',
'인형이었네',
'일가를',
'일각에서는',
'일갈을',
'일곱',
'일기',
'일기로',
'일기처럼',
'일단',
'일당',
'일당에게',
'일당은',
'일대',
'일대기',
'일도',
'일들은',
'일등',
'일로',
'일반',
'일반공개',
'일반인',
'일반적',
'일방적',
'일방적으로',
'일방적인',
'일부',
'일부가',
'일부는',
'일부러',
'일부분',
'일부에서',
'일부의',
'일부터',
'일삼는',
'일상',
'일상과',
'일상생활',
'일상생활의',
'일상에',
'일상의',
'일상적',
'일색',
'일생',
'일생에',
'일세를',
'일손',
'일시',
'일시에',
'일시적',
'일시적으로',
'일식',
'일쑤',
'일어나',
'일어나',
'일어나는',
'일어나면',
'일어난',
'일어났을',
'일에',
'일에는',
'일요일',
'일월',
'일월의',
'일으켜',
'일으켰으나',
'일으켰으며',
'일으킨',
'일은',
'일은',
'일을',
'일의',
'일이',
'일이오',
'일일이',
'일자',
'일자리',
'일자리를',
'일정',
'일정한',
'일종',
'일종으로',
'일종으로',
'일종의',
'일주',
'일주를',
'일주문',
'일주와',
'일주일',
'일째',
'일찌감치',
'일찍',
'일찍부터',
'일찍이',
'일처럼',
'일체',
'일치',
'일침을',
'일탈을',
'일탈행위를',
'일터에',
'일하는',
'일하지',
'일한',
'일할',
'일행',
'일회용',
'일회용품',
'일흔',
'읽고',
'읽기',
'읽기',
'읽는',
'읽어본',
'읽었던',
'잃게',
'잃고',
'잃고',
'잃는',
'잃어버린',
'잃었소만',
'잃었어',
'잃은',
'잃은',
'임금',
'임무',
'임시',
'임시로',
'임신',
'임신과',
'임신부',
'임신을',
'임신이',
'임신이나',
'임신이라는',
'임의의',
'임자는',
'입고',
'입구',
'입국',
'입국했고',
'입기',
'입대',
'입덧을',
'입력',
'입력할',
'입맛',
'입맞춰',
'입사',
'입사하여',
'입상을',
'입상자를',
'입상하는',
'입선을',
'입선작이',
'입선하고',
'입선하는',
'입선한',
'입선했지만',
'입센의',
'입수',
'입술',
'입술을',
'입시',
'입양하고',
'입었지만',
'입에서',
'입원',
'입원했다가',
'입원했던',
'입으로',
'입으며',
'입을',
'입장',
'입장에서',
'입장에서만',
'입장을',
'입증하려고',
'입체파',
'입학',
'입학하면서',
'입학해',
'잇고',
'잇달아',
'잇으니',
'있게',
'있게',
'있고',
'있곤해서',
'있구려',
'있기',
'있기도',
'있네',
'있느냐',
'있느냐고',
'있느냐는',
'있는',
'있는데',
'있는지',
'있다',
'있다가',
'있다고',
'있다는',
'있다며',
'있다면',
'있다면',
'있단',
'있던',
'있도록',
'있든',
'있듯',
'있듯이',
'있어',
'있어',
'있어서',
'있어서는',
'있어야',
'있어야만',
'있어줘',
'있었고',
'있었고',
'있었기',
'있었는데',
'있었는지',
'있었다',
'있었다는',
'있었더니',
'있었던',
'있었어',
'있었어요',
'있었으나',
'있었으므로',
'있었음에도',
'있었음을',
'있었지만',
'있었지요',
'있으나',
'있으며',
'있으며',
'있으면',
'있으면서',
'있으므로',
'있을',
'있을까',
'있을까라고',
'있지',
'있지',
'있지를',
'있지만',
'잉크',
'잉크로',
'잊어',
'잊어버려요',
'잊어버리고',
'잊어버리는',
'잊을',
'잊지',
'잊혀진',
'잊혀진다고',
'자가',
'자가용',
'자각',
'자각하게',
'자각하여야',
'자격',
'자격이',
'자격증',
'자고',
'자극',
'자금을',
'자금조달을',
'자기',
'자기가',
'자기는',
'자기를',
'자기만의',
'자기애를',
'자기의',
'자꾸',
'자꾸만',
'자네',
'자녀',
'자녀들',
'자녀들과',
'자녀들은',
'자녀들을',
'자녀들의',
'자녀들이',
'자녀를',
'자녀면담과',
'자녀에',
'자녀에게',
'자는',
'자동',
'자동차',
'자동차를',
'자들의',
'자락을',
'자란',
'자랐으며',
'자랐으므로',
'자랑',
'자랑스럽게',
'자랑하는',
'자로',
'자료',
'자료들을',
'자리',
'자리를',
'자립',
'자립하는',
'자립하지',
'자립해야',
'자매',
'자매는',
'자문위원의',
'자바',
'자부심',
'자부심을',
'자비로',
'자생',
'자생적으로',
'자서전',
'자성',
'자성없이',
'자세',
'자세히',
'자숙하고',
'자식',
'자식과',
'자식들',
'자식들에',
'자식들을',
'자식에',
'자식은',
'자식을',
'자식의',
'자식이',
'자식이라는',
'자식이란',
'자신',
'자신감',
'자신담아',
'자신도',
'자신들은',
'자신들을',
'자신들의',
'자신에게',
'자신은',
'자신을',
'자신을',
'자신의',
'자신의',
'자신이',
'자신이라고',
'자아',
'자아를',
'자연',
'자연스러운',
'자연스럽게',
'자연스럽고',
'자연의',
'자연적',
'자연현상',
'자연환경',
'자연히',
'자원',
'자원봉사를',
'자유',
'자유로운',
'자유로이',
'자유롭게',
'자유롭고',
'자유를',
'자유분방한',
'자유와',
'자유의',
'자유이며',
'자유주의',
'자유주의와',
'자유평등이',
'자율',
'자의식과',
'자의식을',
'자임',
'자장면',
'자전거',
'자전소설',
'자전적',
'자정',
'자존심',
'자존심도',
'자존심쯤은',
'자주',
'자체',
'자체가',
'자체에도',
'자취',
'자태를',
'자택으로',
'자판',
'자판기',
'자화상',
'자화상만을',
'자화상에',
'자화상은',
'자화상을',
'작가',
'작가는',
'작가들의',
'작가들이',
'작가로',
'작가로서',
'작가로서뿐',
'작가를',
'작가였고',
'작가였으며',
'작가와의',
'작가의',
'작가인',
'작곡가',
'작년',
'작년에',
'작성',
'작성해',
'작약',
'작업',
'작업실을',
'작업장과',
'작용',
'작은',
'작은',
'작은딸',
'작은아들',
'작은아버지',
'작은어머니',
'작은오빠',
'작품',
'작품과',
'작품도',
'작품들',
'작품들도',
'작품들에',
'작품들을',
'작품부터',
'작품성',
'작품세계에',
'작품에',
'작품에는',
'작품에서',
'작품에서는',
'작품으로',
'작품으로는',
'작품은',
'작품을',
'작품의',
'작품이',
'작품이라는',
'작품인데',
'작품집',
'작품평',
'작품평도',
'작품평에',
'잔디',
'잔디밭',
'잔뜩',
'잔존한다며',
'잔치',
'잔향',
'잘나건',
'잘난',
'잘났다던',
'잘라',
'잘못',
'잘못된',
'잘못으로',
'잘못은',
'잘못을',
'잘못이',
'잘못이고',
'잘못이라',
'잘못이라고',
'잘못이며',
'잘못임을',
'잘못한',
'잠깐',
'잠깐의',
'잠들어',
'잠들지',
'잠바',
'잠수함',
'잠시',
'잠옷',
'잠이',
'잠자리',
'잠자리에',
'잡감',
'잡고',
'잡고',
'잡고서',
'잡기',
'잡는가',
'잡아둘',
'잡은',
'잡을',
'잡일과',
'잡지',
'잡지를',
'잡지사에',
'잡지에',
'잡지에까지',
'잡지에서',
'잡지인',
'잡화상점',
'잡힐',
'잣대라며',
'잣대를',
'잣대와',
'장가',
'장갑',
'장관',
'장교가',
'장군',
'장기',
'장기간',
'장기공연',
'장기적',
'장난',
'장난감',
'장남',
'장녀',
'장래',
'장려',
'장려한',
'장례',
'장례식',
'장르',
'장르의',
'장마',
'장면',
'장면을',
'장모',
'장모님',
'장문의',
'장미',
'장밋빛',
'장벽을',
'장비',
'장사',
'장사꾼',
'장석주',
'장소',
'장소의',
'장수',
'장식',
'장식한',
'장안의',
'장애를',
'장애인',
'장을',
'장인',
'장점',
'장차',
'장편',
'장편소설',
'장학금',
'잦은',
'재가',
'재결합할',
'재구성하고',
'재기를',
'재기불능의',
'재기하는데',
'재난',
'재능',
'재능과',
'재능으로',
'재능을',
'재능있는',
'재력',
'재료',
'재료를',
'재미',
'재미없다면',
'재빨리',
'재산',
'재산과',
'재산분할권',
'재산분할도',
'재산분할만',
'재산분할을',
'재산에',
'재산을',
'재산의',
'재산이며',
'재생',
'재생산되는',
'재생산하고',
'재수',
'재원',
'재작년',
'재정',
'재정난으로',
'재조명된',
'재조명받지',
'재조명이',
'재종손서',
'재주',
'재주가',
'재주를',
'재즈',
'재채기',
'재판',
'재판소에',
'재판에서',
'재판을',
'재판주사',
'재평가를',
'재학',
'재현에서',
'재혼하려',
'재혼한',
'재활용',
'재활용품',
'쟁투해야',
'저거',
'저것',
'저것이',
'저고리',
'저곳',
'저기',
'저널',
'저녁',
'저녁때',
'저녁에',
'저는',
'저능을',
'저능하게',
'저런',
'저렇게도',
'저력을',
'저를',
'저리',
'저버리고',
'저버린',
'저번',
'저서',
'저서도',
'저서에',
'저술가이자',
'저어',
'저어가자',
'저울',
'저의',
'저자',
'저자와',
'저작',
'저작들은',
'저절로',
'저주',
'저주를',
'저주의',
'저지로',
'저지르는',
'저쪽',
'저축',
'저편',
'저항',
'저항시인은',
'저항적',
'저항하는',
'저항했던',
'저희',
'저희들은',
'적게는',
'적극',
'적극성을',
'적극적',
'적당히',
'적도',
'적들과',
'적성',
'적시네',
'적실',
'적어도',
'적용',
'적용되었다',
'적용된',
'적은',
'적을',
'적응',
'적이',
'적자와',
'적지',
'전갈을',
'전개',
'전개되고',
'전거',
'전공',
'전공하기',
'전구',
'전국',
'전국에',
'전국을',
'전국적',
'전근대적인',
'전기',
'전기로는',
'전기를',
'전기밥솥',
'전까지',
'전날',
'전남',
'전남편과',
'전단지를',
'전달',
'전달되던',
'전답을',
'전당에서',
'전락하고',
'전람회',
'전람회는',
'전람회에',
'전망',
'전면의',
'전문',
'전문가',
'전문가들은',
'전문적',
'전문점',
'전문직',
'전문학교',
'전문학사',
'전반',
'전반에',
'전반을',
'전반적',
'전보',
'전보되어',
'전부',
'전부를',
'전선',
'전설',
'전설을',
'전세',
'전세계',
'전송',
'전송된',
'전송할',
'전시',
'전시와',
'전시장',
'전시장에서',
'전시했으나',
'전시회',
'전시회가',
'전시회를',
'전신',
'전신인',
'전업',
'전업주부',
'전업화가의',
'전에',
'전용',
'전자',
'전쟁',
'전쟁으로',
'전전했던',
'전제적',
'전제조건에',
'전제하고',
'전제한',
'전집',
'전처',
'전철',
'전체',
'전체를',
'전체적',
'전통',
'전통과',
'전통문화',
'전통을',
'전통적',
'전통적인',
'전하거나',
'전하고',
'전하지',
'전할',
'전해졌고',
'전해질',
'전혀',
'전형으로',
'전화',
'전화기',
'전화번호',
'전화번호만',
'전환',
'전환기',
'전후',
'전후해',
'절대',
'절대로',
'절대적',
'절대적인',
'절망',
'절망하네',
'절멸과',
'절박하게',
'절반',
'절반의',
'절약',
'절절하게도',
'절정이기도',
'절집들을',
'절차',
'절친한',
'절호의',
'젊은',
'젊은날',
'젊은이',
'젊은이들',
'젊은이들이',
'젊은이를',
'젊은이와',
'젊은이의',
'젊음',
'젊음을',
'점검',
'점과',
'점도',
'점수',
'점심',
'점심때',
'점심시간',
'점심을',
'점에',
'점에서',
'점원',
'점으로',
'점은',
'점을',
'점의',
'점이',
'점이나',
'점점',
'점차',
'접고',
'접근',
'접근을',
'접근한다는',
'접속할',
'접수',
'접시',
'접촉',
'접촉함과',
'접하게',
'접하였으나',
'접한',
'접할',
'젓가락',
'정거장',
'정권과',
'정권에',
'정기',
'정기적',
'정답',
'정답은',
'정답을',
'정당',
'정당하다고',
'정당하다면',
'정당한',
'정당화했다',
'정도',
'정도가',
'정도로',
'정도만',
'정도였다고',
'정돈하고',
'정동',
'정류장',
'정리',
'정립시키지',
'정말',
'정말로',
'정면',
'정문',
'정문에',
'정물화',
'정밀하게',
'정밀한',
'정반대',
'정보',
'정보를',
'정보전달의',
'정보화',
'정부',
'정부를',
'정부의',
'정부인',
'정비',
'정사를',
'정상',
'정상적',
'정상적인',
'정서를',
'정성',
'정성으로',
'정순',
'정식',
'정식으로',
'정신',
'정신과',
'정신병에',
'정신없이',
'정신을',
'정신이상이',
'정신적',
'정신적으로',
'정신적인',
'정오',
'정원',
'정원으로',
'정원이',
'정월',
'정월은',
'정월의',
'정월이',
'정을',
'정의',
'정의와',
'정의한다',
'정이',
'정작',
'정장',
'정지',
'정착시킨',
'정책에',
'정책을',
'정책이',
'정체성을',
'정치',
'정치권',
'정치색은',
'정치색을',
'정치에',
'정치와',
'정치이론과',
'정치인',
'정치인이나',
'정치인인',
'정치적',
'정치적',
'정치학',
'정치활동',
'정통해',
'정한',
'정할',
'정해주는',
'정형민',
'정혜사',
'정화암',
'정확하게',
'정확한',
'정확히',
'젖어',
'젖어서',
'젖을',
'젖지',
'제가',
'제게는',
'제공',
'제공자가',
'제공한',
'제과점',
'제국',
'제기되기도',
'제기하기',
'제기해',
'제기했고',
'제대로',
'제도',
'제도로',
'제도로서의',
'제도에',
'제도와',
'제도의',
'제도적',
'제목',
'제목으로',
'제목의',
'제발',
'제법',
'제보되면서',
'제비',
'제사',
'제삿날',
'제시',
'제시하는데',
'제시했고',
'제안',
'제안으로',
'제안한',
'제약',
'제어할',
'제외하고',
'제외하고는',
'제외한',
'제의',
'제일',
'제자',
'제자들',
'제자로',
'제자리',
'제자리를',
'제작',
'제작을',
'제작이',
'제작자',
'제작하는',
'제작한',
'제작해',
'제전',
'제전에서',
'제출',
'제출한',
'제품',
'제품이나',
'제하고는',
'제한',
'제한된',
'제한하고',
'제해',
'조각',
'조각가',
'조각을',
'조각품',
'조개',
'조건',
'조건과',
'조건들을',
'조건으로',
'조건은',
'조건을',
'조건이',
'조건이라며',
'조국관',
'조국을',
'조그만',
'조금',
'조금도',
'조금만',
'조금씩',
'조금씩은',
'조기',
'조깅',
'조달했고',
'조롱',
'조롱과',
'조롱에',
'조롱을',
'조롱하고',
'조롱하기도',
'조르는지',
'조명',
'조명되기',
'조명되어',
'조목조목',
'조물주가',
'조미료',
'조사',
'조상',
'조선',
'조선으로',
'조선을',
'조선의',
'조선이라는',
'조심스럽게',
'조심해야',
'조용히',
'조우하게',
'조장한다는',
'조장한다며',
'조절',
'조정',
'조조',
'조직',
'조직도',
'조카',
'조카딸',
'조카사위',
'조카손녀',
'조카인',
'조합원들이',
'조합원의',
'조항을',
'조혼으로',
'조혼해',
'족쇄라고',
'족쇄를',
'존경심을',
'존귀가',
'존귀한',
'존댓말',
'존재',
'존재가',
'존재라고',
'존재라는',
'존재로',
'존재를',
'존재였기',
'존재인',
'존재임을',
'존재하지',
'존재한다는',
'존중',
'존중되지',
'존중하지',
'존중해',
'존중해야',
'졸업',
'졸업과',
'졸업생',
'졸업생이',
'졸업작품은',
'졸업하고',
'졸업한',
'졸업했는데',
'졸업했으며',
'졸음',
'좀더',
'좁았던고',
'종교',
'종교를',
'종교적',
'종교처럼',
'종류',
'종사자들이',
'종사하기도',
'종소리',
'종속적',
'종업원',
'종이',
'종이컵',
'종일',
'종일',
'종종',
'종합',
'좇아',
'좋고',
'좋기는',
'좋다고',
'좋아',
'좋아서',
'좋아져서',
'좋아하는',
'좋아한',
'좋아할',
'좋으면',
'좋은',
'좋은',
'좋지',
'좌석',
'좌우',
'좌절',
'좌절된',
'죄도',
'죄로',
'죄를',
'죄악은',
'죄악이',
'죄악이거나',
'죄악이라는',
'죄없는',
'죄인',
'죄졌나',
'죄책감에',
'주가',
'주거',
'주고',
'주관적',
'주권을',
'주기를',
'주기에',
'주년',
'주년을',
'주눅든',
'주는',
'주도',
'주도록',
'주도적으로',
'주도했다는',
'주동자',
'주려',
'주례로',
'주로',
'주류를',
'주름',
'주름살',
'주름진',
'주립',
'주말',
'주말이면',
'주머니',
'주머니에서',
'주먹',
'주면서도',
'주목을',
'주문',
'주민',
'주방',
'주변',
'주변에서',
'주변에서는',
'주변의',
'주변인들',
'주부',
'주사',
'주선',
'주선했지만',
'주소',
'주소도',
'주스',
'주시면',
'주시오',
'주시지',
'주식',
'주식회사',
'주실',
'주어',
'주어져야',
'주었고',
'주연으로',
'주연으로도',
'주영이',
'주요',
'주요섭',
'주요한',
'주위',
'주위의',
'주유하며',
'주의',
'주의라고',
'주의에',
'주인',
'주인공',
'주인공들의',
'주인공들이',
'주인공으로',
'주인공은',
'주인공의',
'주인공이',
'주인에게',
'주인인',
'주일',
'주장',
'주장과',
'주장에',
'주장은',
'주장을',
'주장이',
'주장하기도',
'주장하기에',
'주장하여',
'주장하였고',
'주장한',
'주장한다',
'주장한다는',
'주장했고',
'주장했다',
'주장했으며',
'주재하고',
'주저앉지',
'주전자',
'주제',
'주제도',
'주제로',
'주제를',
'주제와',
'주조를',
'주지였던',
'주차',
'주차장',
'주창하기',
'주창한',
'주체적',
'주체적인',
'주최',
'주최한',
'주택',
'주한',
'죽고',
'죽기',
'죽은',
'죽음',
'죽음에까지',
'죽음에서',
'죽음으로',
'죽음은',
'죽음을',
'죽음이',
'죽인',
'죽자',
'준비',
'준비되자',
'준비를',
'준비물',
'준비하고',
'준비하는',
'줄거리',
'줄곧',
'줄기',
'줄무늬',
'줄에',
'줄일',
'중간',
'중간에',
'중계방송',
'중기에',
'중년',
'중노동을',
'중노릇을',
'중단',
'중단에',
'중독',
'중략',
'중매를',
'중반',
'중반에',
'중부',
'중산층',
'중세',
'중소기업',
'중순',
'중식',
'중심',
'중심으로',
'중심의',
'중심이나',
'중심적이고',
'중심지',
'중앙',
'중에',
'중에는',
'중에서',
'중에서도',
'중요',
'중요성',
'중요하게',
'중요한',
'중요함을',
'중의',
'중이',
'중이던',
'중인',
'중일',
'중적인',
'중점적으로',
'중퇴한',
'중풍',
'중풍으로',
'중학',
'중학교',
'중학교를',
'중학생',
'중학생이',
'줬어요',
'즈음',
'즉각적으로',
'즉석',
'즉시',
'즐거움',
'즐거웠어요',
'즐겨',
'즐기는',
'즐기던',
'즐기면서도',
'증가',
'증가함에',
'증가했으나',
'증거',
'증거에',
'증권',
'증권사',
'증상',
'증세',
'증인이',
'증조부',
'증직이',
'증폭시키고',
'증후군',
'지가',
'지각',
'지갑',
'지경',
'지고지순한',
'지구',
'지극히',
'지금',
'지금',
'지금까지',
'지금까지',
'지금껏',
'지금도',
'지금은',
'지금의',
'지금이',
'지금처럼',
'지금처럼',
'지급',
'지나',
'지나갈',
'지나는',
'지나온',
'지나지',
'지난',
'지난날',
'지난다',
'지난달',
'지난번',
'지난주',
'지난해',
'지날수록',
'지났는데',
'지내게',
'지내고',
'지내기도',
'지내며',
'지내면',
'지내지는',
'지낸',
'지낼',
'지네',
'지녔던',
'지는',
'지능',
'지니고',
'지닌',
'지대',
'지대한',
'지던',
'지도',
'지도교수는',
'지도력',
'지도자',
'지도하던',
'지도해야',
'지를',
'지름길',
'지리산',
'지리학적',
'지목',
'지목되면서',
'지방',
'지방문화재',
'지배',
'지배가',
'지배구조를',
'지배를',
'지배에',
'지배하거나',
'지배하는',
'지배하던',
'지배한다',
'지붕',
'지석과',
'지속적',
'지속적으로',
'지시',
'지식',
'지식과',
'지식도',
'지식으로',
'지식을',
'지식인',
'지식인과',
'지식인들',
'지식인들과',
'지식인들에',
'지어',
'지어주지',
'지어진',
'지었는데',
'지었으며',
'지에',
'지역',
'지역',
'지역에',
'지역의',
'지우개',
'지우려고',
'지원',
'지원되었고',
'지원을',
'지원하며',
'지위',
'지위에',
'지은',
'지음',
'지인들에게',
'지인들의',
'지인에게',
'지인을',
'지적',
'지적도',
'지적인',
'지적하기도',
'지적하며',
'지적하여',
'지적한',
'지점',
'지주이자',
'지지',
'지지하는',
'지지했던',
'지진',
'지쳐',
'지쳐가기',
'지쳤어',
'지출',
'지친',
'지칠',
'지켜보니',
'지켜보지도',
'지켜줘요',
'지키고',
'지키라고',
'지키며',
'지키면',
'지키지',
'지킬',
'지폐',
'지하',
'지하도',
'지하실에서',
'지하철',
'지혜',
'지혜를',
'직격탄을',
'직선',
'직업',
'직업을',
'직원',
'직위를',
'직장',
'직장인',
'직전',
'직전의',
'직접',
'직접적',
'직행하지',
'직후',
'진급',
'진단',
'진달래',
'진동',
'진로',
'진료',
'진료도',
'진료비와',
'진료차',
'진리',
'진리로',
'진보가',
'진보단체가',
'진보된',
'진보적',
'진보할',
'진상이',
'진술을',
'진실',
'진실로',
'진실만이',
'진실을',
'진심',
'진심으로',
'진압을',
'진일보가',
'진정',
'진정의',
'진정한',
'진지하게',
'진지한',
'진짜',
'진짜로',
'진찰',
'진출',
'진통',
'진학하여',
'진행',
'진행자',
'진화할',
'진화했나',
'진흙',
'질문',
'질병',
'질병에',
'질병으로',
'질병을',
'질서',
'질시가',
'질시하고',
'질적',
'질타했던',
'질투와',
'질환으로',
'짐을',
'짐작',
'짐작할',
'집과',
'집단',
'집단으로',
'집단적',
'집대성해',
'집도',
'집안',
'집안에',
'집안에서',
'집안에서는',
'집안에서의',
'집안은',
'집안을',
'집안의',
'집안이',
'집안일',
'집에',
'집에는',
'집에만',
'집에서',
'집으로',
'집은',
'집을',
'집의',
'집인',
'집중',
'집중적',
'집착이라',
'집착하지만',
'집터만',
'집필에',
'짓기도',
'징역',
'징용',
'징징대지',
'짙은',
'짜증',
'짝에는',
'짤막한',
'짧은',
'쩔쩔매고',
'쪽은',
'쫓아',
'찌개',
'찌꺼기',
'찌든',
'찍고',
'찍혔던',
'찍힌',
'차가운',
'차가운',
'차가웠고',
'차갑다고',
'차남',
'차단',
'차디찬',
'차라리',
'차량',
'차려서',
'차례',
'차례의',
'차를',
'차리지',
'차림',
'차마',
'차별',
'차별과',
'차별대우',
'차별대우를',
'차별하는',
'차별하지',
'차선',
'차원에서',
'차이',
'차이가',
'차이를',
'차이점',
'차이점이',
'차일피일',
'차장을',
'차지',
'차지하는',
'차차',
'차창',
'차츰',
'착각',
'착각이',
'착한',
'찬란한',
'찬란히',
'찬물',
'찬미하는',
'찬사들은',
'찬사를',
'찬섬',
'찬성',
'참가',
'참가를',
'참가하고',
'참가하는',
'참가하면서',
'참가하여',
'참가한',
'참가해',
'참고',
'참관하고',
'참기름',
'참모습',
'참배하고',
'참사관',
'참새',
'참석',
'참석자',
'참석했던',
'참신한',
'참아라',
'참아줘요',
'참여',
'참여관',
'참여를',
'참여하고',
'참여하는',
'참여하였고',
'참여한',
'참여할',
'참여해야',
'참외',
'참으로',
'참을수',
'참의',
'참의로',
'참정권',
'참정권에',
'참정권을',
'참정권의',
'참조',
'참지',
'찻잔',
'창가',
'창가에',
'창간되자',
'창간하고',
'창간한',
'창간호에',
'창고',
'창구',
'창립',
'창립멤버의',
'창문',
'창밖',
'창백한',
'창살',
'창업',
'창업자',
'창업자에게',
'창업주',
'창업주는',
'창에서',
'창작',
'창작열을',
'창작집',
'창작집에는',
'창작집의',
'창조',
'창조물이',
'창조성이',
'창조의',
'창조적',
'창피하다고',
'창해',
'찾기',
'찾기도',
'찾는동안',
'찾다가',
'찾아',
'찾아',
'찾아가',
'찾아가기도',
'찾아가라는',
'찾아간',
'찾아갔으나',
'찾아갔지만',
'찾아다니며',
'찾아보고',
'찾아보기도',
'찾아서',
'찾아야',
'찾아오거든',
'찾아오면',
'찾아온',
'찾아왔다고',
'찾아요',
'찾았고',
'찾을',
'찾을',
'찾자',
'찾지',
'채권자가',
'채널',
'채소',
'채우기',
'채우는',
'채점',
'책가방',
'책갈피',
'책방',
'책상',
'책상에서',
'책세상',
'책에',
'책에',
'책에서',
'책으로',
'책을',
'책의',
'책이',
'책임',
'책임감',
'책임을',
'책임자',
'책향기가',
'챔피언',
'처단한',
'처럼',
'처리',
'처리되고',
'처리된',
'처리하는',
'처벌',
'처신을',
'처에게나',
'처음',
'처음',
'처음부터',
'처음에는',
'처음으로',
'처지',
'처지로',
'처지를',
'처지에',
'처지에서',
'처지와',
'처하고',
'천국',
'천대와',
'천둥',
'천륜을',
'천박하게',
'천부의',
'천부적인',
'천사는',
'천사의',
'천성이라고',
'천시하는',
'천장',
'천재',
'천재들',
'천재로',
'천재적인',
'천직이니',
'천천히',
'철도',
'철원',
'철저하게',
'철저히',
'철학',
'철학과',
'철학자',
'철학적',
'첨단',
'첫날',
'첫눈에',
'첫딸',
'첫사랑',
'첫사랑은',
'첫사랑의',
'첫아이를',
'첫째',
'첫째로',
'첫째아들',
'첫회부터',
'청구서에',
'청구소송',
'청구소송을',
'청구하는',
'청구하지',
'청년',
'청년들의',
'청년사',
'청년이',
'청년인데',
'청바지',
'청산',
'청산하는',
'청산할만큼',
'청소',
'청소기',
'청소년',
'청소년기',
'청순한',
'청운',
'청을',
'청이어서',
'청첩을',
'청첩장을',
'청춘',
'청춘을',
'청춘이여',
'청탑',
'청하는',
'청혼을',
'체격',
'체계',
'체계를',
'체계적',
'체납',
'체납했다는',
'체력',
'체력이',
'체류',
'체류기간',
'체류와',
'체류중',
'체류하던',
'체류하며',
'체류하면서',
'체류한',
'체류할',
'체슬러가',
'체온',
'체온마저도',
'체육',
'체육관',
'체재',
'체제의',
'체조',
'체중',
'체포되어',
'체험',
'체험을',
'쳐놓은',
'초기',
'초기에는',
'초기에도',
'초기의',
'초대',
'초등학교',
'초등학생',
'초라한',
'초록',
'초록색',
'초명은',
'초몽',
'초반',
'초밥',
'초보',
'초보자',
'초빙되어',
'초빙하기도',
'초상',
'초상화',
'초상화가',
'초상화를',
'초순',
'초에',
'초에는',
'초여름',
'초원',
'초월한',
'초의',
'초저녁',
'초점',
'초점을',
'초청',
'초청장',
'초콜릿',
'초하룻날',
'초하룻날은',
'촉구하기도',
'촉망받던',
'촛불',
'총각',
'총리',
'총명에',
'총명하고',
'총무로',
'총선',
'총장',
'총재',
'총회를',
'총회에서',
'촬영',
'촬영한',
'촬영해서',
'최고',
'최고급',
'최고의',
'최근',
'최근의',
'최대',
'최대한',
'최상',
'최선',
'최소',
'최소한',
'최신',
'최악',
'최우등',
'최우등으로',
'최저',
'최적화',
'최종',
'최초',
'최초로',
'최초의',
'최초의',
'최후',
'최후는',
'최후를',
'추가',
'추구하였고',
'추리의',
'추모',
'추모제전이',
'추모하기도',
'추모하는',
'추모하면서',
'추상화에',
'추석',
'추석은',
'추스르고',
'추스르기',
'추스리고',
'추앙',
'추억',
'추억을',
'추억의',
'추운',
'추위',
'추장',
'추정연령',
'추종',
'추종하지는',
'추진',
'추천',
'추천한',
'추측',
'추한',
'축구',
'축구공',
'축구장',
'축소',
'축제',
'축하',
'춘하추동',
'춘화와',
'출가를',
'출가한',
'출간',
'출간되었을',
'출간된',
'출강하는',
'출강하면서',
'출구',
'출국',
'출국과',
'출국하기',
'출근',
'출발',
'출발점',
'출발해',
'출발해',
'출산',
'출산과',
'출산으로',
'출산을',
'출산의',
'출산한',
'출생',
'출생과',
'출세했는데',
'출신',
'출신으로',
'출신의',
'출신이라는',
'출신자들인',
'출연',
'출연하게',
'출연하여',
'출입',
'출입국',
'출입문',
'출입조차',
'출장',
'출중한',
'출퇴근',
'출판',
'출판되지는',
'출판사',
'출판했다',
'출품',
'출품작',
'출품작은',
'출품하고',
'출품하기',
'출품하여',
'출품해',
'출현과',
'춤추듯',
'충격',
'충격으로',
'충격을',
'충격을',
'충격적',
'충고',
'충당하기도',
'충돌',
'충돌이',
'충돌한',
'충무로',
'충분한',
'충분히',
'충실한',
'충실히',
'충족되지',
'취급되었다',
'취급을',
'취급하며',
'취미',
'취미로',
'취미론',
'취미론을',
'취미에',
'취미와',
'취미이며',
'취미일',
'취소',
'취소되지',
'취약점',
'취약점을',
'취업',
'취재',
'취직',
'취직을',
'취하할',
'취향',
'취향에',
'취향이자',
'측면도',
'측은',
'측은한',
'치고',
'치과',
'치기도',
'치는건',
'치러야',
'치료',
'치료를',
'치료법',
'치루기도',
'치르고',
'치른',
'치마',
'치밀하게',
'치밀한',
'치부되어',
'치부하던',
'치아',
'치약',
'치열한',
'치즈',
'치하에서',
'친구',
'친구가',
'친구들',
'친구들과',
'친구들로',
'친구로',
'친구로서',
'친구를',
'친구여',
'친구여',
'친구였고',
'친구였던',
'친구의',
'친구이자',
'친구인',
'친권도',
'친아들처럼',
'친절',
'친정',
'친지에게',
'친척',
'친필',
'친하게',
'친한',
'친형제처럼',
'칠면조',
'칠십',
'칠월',
'칠판',
'침대',
'침대에서',
'침묵',
'침묵이',
'침실',
'칫솔',
'칭찬',
'칭했다',
'칭호를',
'카드',
'카레',
'카메라',
'카미유',
'카운터',
'카페',
'칼국수',
'칼라',
'칼럼',
'칼럼과',
'칼럼도',
'칼럼에',
'칼럼을',
'칼로와',
'칼을',
'캄캄하다',
'캐릭터',
'캐스팅되어',
'캐스팅된',
'캠퍼스',
'캠페인',
'커넥트',
'커녕',
'커서',
'커튼',
'커피',
'커피를',
'컨디션',
'컬러',
'컴퓨터',
'케첩',
'코끝',
'코끼리',
'코너',
'코드',
'코드네임',
'코레아',
'코리아',
'코미디',
'코스',
'코스모스',
'코치',
'코트',
'코피',
'콘서트',
'콘텐츠',
'콜라',
'콤플렉스',
'콤플렉스와',
'콩나물',
'쾌감',
'쾌락을',
'쿠데타',
'크게',
'크고',
'크기',
'크리스마스',
'크리쳐는',
'크림',
'큰길',
'큰딸',
'큰소리',
'큰아들',
'큰아버지',
'큰아버지의',
'큰어머니',
'큰오빠',
'큰일',
'큰절',
'클래식',
'클럽',
'키가',
'키스',
'키우고',
'키우기도',
'키웠으며',
'킬로',
'킬로그램',
'킬로미터',
'타격을',
'타고',
'타고나는',
'타고났고',
'타당한',
'타락',
'타락과',
'타올라',
'타인',
'타인에게도',
'타인이',
'타임라인',
'타임라인이',
'타입',
'타자',
'타자기',
'타자화된',
'타진하고',
'탁구',
'탁월한',
'탁자',
'탄생',
'탄생기념',
'탄식',
'탄식으로',
'탄식을',
'탄실',
'탄실의',
'탄실이라는',
'탄실이와',
'탄압',
'탈락된',
'탈선을',
'탈출하여',
'탈취해가는',
'탐구',
'탐독',
'탐미적으로',
'탐탁지',
'탐험에',
'탑뒤로',
'탓하는',
'태권도',
'태극기',
'태도',
'태도는',
'태도라고',
'태도를',
'태도에',
'태아',
'태양',
'태양',
'태양을',
'태양이',
'태양처럼',
'태어나',
'태어나게',
'태어나는가',
'태어나리',
'태어나서',
'태어난',
'태어난',
'태어날',
'태워',
'태풍',
'택시',
'탤런트',
'터널',
'터무니없는',
'터미널',
'터지면서',
'터지자',
'터치와',
'터트리기도',
'털어놓는',
'털어놓으며',
'털어놓은',
'테니스',
'테두리',
'테두리를',
'테러',
'테스트',
'테이블',
'테이프',
'텍스트',
'텍스트는',
'텔레비전',
'토끼',
'토대',
'토대로',
'토론',
'토론자',
'토론회',
'토마토',
'토요일',
'톡톡히',
'통계',
'통계가',
'통과',
'통렬히',
'통로',
'통보에',
'통신',
'통역',
'통역실력을',
'통역을',
'통역해',
'통원',
'통의',
'통일',
'통장',
'통제',
'통제권에',
'통제권을',
'통제하여',
'통증',
'통틀어서',
'통학하다가',
'통합',
'통해',
'통해서',
'통해서만',
'통화',
'퇴근',
'퇴색되고',
'퇴소하고',
'퇴원',
'퇴직금',
'퇴폐와',
'투명한',
'투병',
'투옥되면서',
'투자',
'투쟁소식을',
'투표',
'퉁치기도',
'튀김',
'튀는',
'트래픽의',
'트럭',
'트위터',
'트위터가',
'트위터는',
'트위터도',
'트위터로',
'트위터를',
'트위터리안',
'트위터에',
'트위터에서',
'트위터와',
'트위터용',
'트위터의',
'트위티',
'트윗',
'트윗덱',
'트윗은',
'트윗을',
'트윗이란',
'특권과',
'특급',
'특기를',
'특별',
'특별한',
'특별할',
'특별히',
'특색을',
'특선',
'특선과',
'특선을',
'특선하고',
'특성',
'특수',
'특수성',
'특수한',
'특유의',
'특정',
'특정할',
'특집',
'특징',
'특징을',
'특징이',
'특징인',
'특징지으며',
'특혜',
'특혜를',
'특히',
'튼튼히',
'틀려',
'틀림없이',
'틀에',
'틈틈이',
'티브이',
'티셔츠',
'파격',
'파격적',
'파격적인',
'파견',
'파괴되는',
'파괴한',
'파도',
'파도를',
'파도의',
'파란',
'파란만장',
'파란만장한',
'파란색',
'파랑새는',
'파래서',
'파리',
'파리가',
'파리로',
'파리를',
'파리에',
'파리에서',
'파리의',
'파리행',
'파리행의',
'파멸',
'파멸로',
'파멸은',
'파문',
'파문과',
'파문이',
'파악하기',
'파업',
'파일',
'파출소',
'파티',
'판결',
'판결을',
'판단',
'판단에',
'판단을',
'판단의',
'판매',
'판매하거나',
'판매하려',
'판매하여',
'판명',
'판사',
'판은',
'판이',
'판화',
'판화가',
'판화들을',
'판화의',
'팔기',
'팔로우',
'팔로워를',
'팔만',
'팔베개를',
'팔봉',
'팔십',
'팔월',
'팝송',
'팟캐스트',
'패배가',
'패비콘',
'패션',
'패소하고',
'팩스',
'팩시밀리',
'팬들은',
'팬티',
'퍼거슨',
'퍼센트',
'퍼지기',
'퍼지는데',
'펑톈에서',
'페미니스트',
'페미니즘',
'페스티발',
'페이스북',
'페이지',
'페이지에',
'페인트',
'펴낸',
'펴냄',
'편견',
'편견과',
'편견에',
'편견을',
'편견이',
'편견이며',
'편과',
'편린들',
'편에',
'편을',
'편의',
'편의점',
'편이',
'편이라고',
'편입하여',
'편입한',
'편지',
'편지가',
'편지를',
'편지에',
'편지에서',
'편지에서는',
'편집위원이',
'편집장',
'편집하기',
'편하다는',
'편한',
'편히',
'펼치고',
'펼치기도',
'펼치는가',
'폈으며',
'평가',
'평가가',
'평가도',
'평가되기도',
'평가로는',
'평가를',
'평가와',
'평가하는',
'평가하려는',
'평가한다고',
'평균',
'평균성적이',
'평도',
'평등론',
'평등하고',
'평등하는',
'평등한',
'평론',
'평론과',
'평론을',
'평민사',
'평상시',
'평생',
'평생을',
'평소',
'평을',
'평이',
'평일',
'평전',
'평전을',
'평전이',
'평하였으며',
'평행선을',
'평화',
'평화가',
'평화로이',
'폐간되었고',
'폐단이라고',
'폐렴으로',
'폐병과',
'폐쇄적',
'폐지',
'폐허',
'폐허의',
'폐허잡지의',
'폐허지는',
'폐허지와',
'폐허지의',
'포근하다',
'포기하다',
'포기하라',
'포기하지',
'포도',
'포도주',
'포르나',
'포상인',
'포스터',
'포스터와',
'포스트하고',
'포용하지',
'포의',
'포인트',
'포장',
'포장마차',
'포착되어',
'포크',
'포탈',
'포털',
'포함',
'포함한',
'포함해',
'폭군으로',
'폭넓은',
'폭력',
'폭력성에',
'폭력에',
'폭력이라는',
'폭로는',
'폭로라고',
'폭압에',
'폭언과',
'폭언을',
'폭포',
'폭풍우',
'폭행과',
'폭행을',
'표면',
'표본이',
'표석',
'표시',
'표시되며',
'표시할',
'표어',
'표절',
'표절작가로',
'표정',
'표정으로',
'표준',
'표지엔',
'표출하고',
'표출하는',
'표출한',
'표출했던',
'표하여',
'표현',
'표현되기도',
'표현되어',
'표현력이',
'표현은',
'표현의',
'표현파',
'표현파의',
'표현하기도',
'표현한',
'푸르고',
'푸른',
'푸석하고',
'풀고',
'풀내음에',
'풀었지만',
'품게',
'품고',
'품기도',
'품는',
'품목',
'품에',
'품으면',
'품으면서도',
'품질',
'풍경',
'풍경등의',
'풍경속을',
'풍경은',
'풍경을',
'풍경이',
'풍경이나',
'풍경화',
'풍경화가',
'풍경화를',
'풍경화에는',
'풍관',
'풍관을',
'풍광',
'풍기는',
'풍문으로',
'풍속',
'풍수',
'풍습',
'풍자하다가',
'풍조라고',
'풍조에',
'프로',
'프로그래밍',
'프로그램',
'프로젝트',
'프로필',
'프린터',
'플라스틱',
'피거든',
'피곤',
'피곤이',
'피곤함을',
'피나는',
'피난에서',
'피다만',
'피디',
'피땀을',
'피력하고',
'피력하자',
'피력한',
'피로',
'피로와',
'피를',
'피망',
'피부',
'피부가',
'피부를',
'피스톨을',
'피시',
'피아노',
'피아노가',
'피아노방을',
'피아노와',
'피아니스트',
'피와',
'피우고',
'피우면',
'피자',
'피탈되자',
'피해',
'피해를',
'피해자',
'피해자의',
'피해자이자',
'필라델피아',
'필력으로',
'필력을',
'필름',
'필리스',
'필명으로',
'필명은',
'필명의',
'필선',
'필수',
'필수적',
'필연적',
'필요',
'필요가',
'필요성',
'필요성을',
'필요없는',
'필요하다고',
'필요한',
'필요해',
'필자',
'필진으로',
'필진의',
'필치와',
'필통',
'핍박하는',
'핑계',
'핑계로',
'하게',
'하겠다는',
'하겠지',
'하고',
'하고',
'하고',
'하기',
'하기도',
'하기를',
'하기보다',
'하긴',
'하나',
'하나가',
'하나님',
'하나도',
'하나로도',
'하나만으로',
'하나에',
'하나요',
'하나의',
'하나하나',
'하네',
'하녀',
'하느님',
'하는',
'하는데',
'하는지',
'하늘',
'하늘빛의',
'하늘에',
'하늘은',
'하늘을',
'하늘이',
'하니까',
'하다가',
'하다는',
'하더라도',
'하던',
'하도',
'하도록',
'하드웨어',
'하라는',
'하려',
'하루',
'하루는',
'하루하루',
'하룻밤',
'하며',
'하면',
'하면서',
'하면서도',
'하반기',
'하셨지만',
'하숙집',
'하숙집에서',
'하숙하고',
'하숙하면서',
'하순',
'하시더군요',
'하얀',
'하얀색',
'하에',
'하에서',
'하여',
'하여금',
'하여튼',
'하였고',
'하였는데',
'하였으나',
'하였으며',
'하와이',
'하이틴',
'하자',
'하죠',
'하지',
'하지만',
'하지만',
'하찮게',
'하찮은',
'하천',
'하품',
'하필',
'하하',
'학과',
'학교',
'학교가',
'학교는',
'학교로',
'학교를',
'학교생활',
'학교에',
'학급',
'학기',
'학기가',
'학기를',
'학년',
'학년에',
'학년의',
'학년이던',
'학대에',
'학대하는',
'학대해',
'학력',
'학번',
'학부모',
'학비',
'학비를',
'학생',
'학생들에게',
'학생들은',
'학생들을',
'학생들이',
'학생증',
'학술',
'학습',
'학습되고',
'학습되는',
'학습된',
'학습의',
'학실이',
'학업',
'학업을',
'학예',
'학용품',
'학우회의',
'학원',
'학위',
'학자',
'학자들은',
'학자들은',
'학적부에는',
'학점',
'학창',
'학창시절',
'한가운데',
'한가운데서',
'한가지',
'한가지인',
'한강변',
'한겨울',
'한결',
'한계',
'한계가',
'한계를',
'한구석',
'한국',
'한국말',
'한국문학의',
'한국사',
'한국사회',
'한국사회의',
'한국어',
'한국어로',
'한국여성의',
'한국은행',
'한국의',
'한국인',
'한국적',
'한국전쟁이',
'한국학',
'한글',
'한글날',
'한글이든',
'한길사',
'한꺼번에',
'한낮',
'한눈',
'한다',
'한다고',
'한다는',
'한다며',
'한달',
'한데',
'한동안',
'한두',
'한둘',
'한때',
'한때의',
'한마디',
'한명은',
'한문',
'한문과',
'한바퀴를',
'한밤중',
'한번',
'한번쯤은',
'한복',
'한사람만을',
'한사람으로',
'한살많은',
'한순간',
'한순간에',
'한숨',
'한시도',
'한식',
'한없이',
'한여름',
'한인',
'한일',
'한자',
'한잔',
'한정되어',
'한정된',
'한쪽',
'한쪽은',
'한쪽의',
'한참',
'한창',
'한층',
'한탄하며',
'한편',
'한편으로',
'한평생',
'한하여',
'한해',
'한해서는',
'할머니',
'할머니가',
'할머니를',
'할수록',
'할아버지',
'할인',
'할일이',
'함께',
'함께',
'함께',
'함께했던',
'함부로',
'함을',
'합격',
'합격하여',
'합리적',
'합리주의',
'합방으로',
'합병증으로',
'합성어이다',
'합의금을',
'합쳐서',
'항거를',
'항공',
'항공기',
'항구',
'항목',
'항상',
'항상',
'항의',
'항의서한을',
'항의하기도',
'항의하여',
'항해',
'해가',
'해결',
'해고되지',
'해군',
'해내고',
'해누리',
'해답',
'해답을',
'해당',
'해당하는',
'해도',
'해롭게',
'해를',
'해명했는데',
'해물',
'해바되기',
'해바라기',
'해박하여',
'해방',
'해방과',
'해방되기',
'해방시켜',
'해방에',
'해방으로',
'해방은',
'해방을',
'해방의',
'해방이',
'해보고파',
'해보자',
'해서',
'해석',
'해석도',
'해석에',
'해석을',
'해석하면',
'해석했고',
'해석했는데',
'해석했으며',
'해설',
'해소',
'해소하기',
'해수욕장',
'해안',
'해야',
'해야하나요',
'해야할',
'해에',
'해외',
'해외에',
'해외여행',
'해외여행은',
'해외여행을',
'해주고',
'해주기도',
'해주는',
'해주세요',
'해주지',
'해줄',
'해체를',
'해치고',
'해커',
'해킹',
'해하지',
'핵심',
'핵심인물로',
'핸드백',
'핸드폰',
'햄버거',
'햇볕',
'햇빛',
'햇살',
'했건만',
'했고',
'했는데',
'했다',
'했다는',
'했다며',
'했던',
'했던',
'했던걸',
'했던게',
'했었던',
'했었지',
'했으나',
'했으며',
'했으면',
'했으므로',
'했을',
'했음에도',
'했죠',
'했지',
'했지만',
'행동',
'행동에',
'행동은',
'행동을',
'행로를',
'행보는',
'행복',
'행복된',
'행복은',
'행복을',
'행복을',
'행복하지',
'행복한',
'행복해줘',
'행사',
'행사하는',
'행운',
'행위',
'행이나',
'행인에',
'행적',
'행태라며',
'행태를',
'향기',
'향기가',
'향상',
'향상을',
'향수',
'향유되어야',
'향하여',
'향한',
'향할',
'향해',
'허가',
'허가를',
'허구적인',
'허난설헌',
'허락',
'허락하지',
'허락해',
'허리',
'허약해져서',
'허용',
'허용하고',
'허용하지',
'허위',
'허허',
'헌상하는',
'헐어',
'험담',
'험한',
'헛된',
'헝클어져',
'헤매는',
'헤며',
'헤어나오지',
'헤어져',
'헤어져야',
'헤어져요',
'헤어졌지만',
'헤어지게',
'헤어지고',
'헤어지자는',
'헬기',
'혁명',
'현관',
'현관문',
'현금',
'현대',
'현대는',
'현대를',
'현대문학',
'현대문학의',
'현대인',
'현대자동차',
'현대적',
'현상',
'현상을',
'현상을',
'현실',
'현실과',
'현실을',
'현실이',
'현실이라는',
'현실적',
'현실적으로',
'현역경찰인',
'현장',
'현장에서',
'현재',
'현재까지도',
'현재는',
'현재의',
'현지',
'현지의',
'혈관을',
'혈액',
'혈액보다',
'혈액은',
'혈통',
'혈통으로',
'혐오하던',
'혐의로',
'협력',
'협력하면',
'협조',
'협조하게',
'형님',
'형무소에',
'형부',
'형사',
'형사에게',
'형상과',
'형성',
'형성하며',
'형수',
'형식',
'형식으로',
'형식의',
'형식적',
'형제',
'형태',
'형태로',
'형태만을',
'형태의',
'형편',
'형편이',
'혜석',
'혜석은',
'혜석의',
'혜택',
'호기심',
'호기심에서',
'호는',
'호랑이',
'호랑이님',
'호랑이라며',
'호로',
'호를',
'호미',
'호박',
'호사도',
'호선',
'호소했지만',
'호수',
'호실',
'호에',
'호응을',
'호전적이고',
'호주머니',
'호탕한',
'호텔',
'호텔에',
'호평을',
'호흡',
'혹독한',
'혹시',
'혹은',
'혼란스런',
'혼란이',
'혼령이',
'혼외',
'혼인신고를',
'혼자',
'혼자였는지',
'혼잣말',
'홀로',
'홈페이지',
'홍도',
'홍류동',
'홍보',
'홍보나',
'홍보하는',
'홍성',
'홍수',
'홍차',
'화가',
'화가가',
'화가들과',
'화가들의',
'화가들이',
'화가로',
'화가로서',
'화가로서도',
'화가를',
'화가였지만',
'화가와',
'화가의',
'화가이자',
'화가인',
'화구',
'화구점',
'화내지도',
'화두',
'화두였던',
'화를',
'화면',
'화면으로',
'화백과',
'화백인',
'화법',
'화법을',
'화분',
'화살',
'화성',
'화신으로',
'화실에서',
'화실을',
'화요일',
'화요일도',
'화장',
'화장기',
'화장실',
'화장지',
'화장품',
'화재',
'화재로',
'화제',
'화제가',
'화제거리가',
'화제를',
'화제의',
'화조',
'화첩기행',
'화폐의',
'화폭에',
'화풍에',
'화풍에서',
'화풍을',
'화풍의',
'화학',
'화학과',
'확고한',
'확대되어',
'확대되었다',
'확립이',
'확립했고',
'확보',
'확보를',
'확산되었다',
'확산되자',
'확산의',
'확신',
'확신을',
'확신하게',
'확신한다고',
'확실한',
'확실히',
'확인',
'확인한',
'확장',
'확정',
'환갑',
'환갑이',
'환경',
'환경과',
'환경에서',
'환경오염',
'환경을',
'환경적',
'환멸감을',
'환멸을',
'환영',
'환영에',
'환영회에서',
'환율',
'환자',
'환하고',
'활기',
'활기차고',
'활달한',
'활동',
'활동과',
'활동도',
'활동범위를',
'활동에',
'활동으로',
'활동을',
'활동이',
'활동하고',
'활동하는',
'활동하던',
'활력을',
'활발하게',
'활발한',
'활발히',
'활약을',
'활용',
'활용하고',
'활용하자',
'활용할',
'활짝',
'황소자리',
'황제',
'황제에게',
'황천을',
'회견',
'회고',
'회고록의',
'회고에',
'회고전',
'회고전이',
'회고했을',
'회관',
'회까지',
'회로',
'회를',
'회복',
'회복되기',
'회복된',
'회사',
'회사나',
'회상하는',
'회색',
'회색빛',
'회생한',
'회원',
'회의',
'회의감을',
'회의를',
'회자화되자',
'회장',
'회전',
'회포를',
'회피하려',
'회화',
'획기적인',
'획득하는',
'횟수',
'횡단보도',
'횡행할지나',
'효과',
'효과를',
'효과적',
'효도',
'효율적',
'효자',
'후견인',
'후기',
'후대에',
'후로',
'후반',
'후반부터',
'후반부터는',
'후반에는',
'후배',
'후보',
'후부터',
'후손',
'후실에',
'후에',
'후에도',
'후에야',
'후예',
'후원',
'후원했지만',
'후의',
'후일',
'후춧가루',
'후학',
'후회',
'후회는',
'후회하지',
'훈련',
'훌륭한',
'훌쩍',
'훗날',
'훨씬',
'휘몰아치는',
'휘영청',
'휴가',
'휴가를',
'휴대전화',
'휴대하는',
'휴머노이드',
'휴식',
'휴일',
'휴지',
'휴지와',
'휴지통',
'휴학을',
'흉내',
'흉측한',
'흐려지지마',
'흐름',
'흐린',
'흑백',
'흑심을',
'흑인',
'흔적',
'흔히',
'흘기는',
'흘러',
'흘러가는',
'흘러간',
'흘러내린',
'흘러다닐',
'흘리면서',
'흠을',
'흥미',
'흥미로운',
'흥미를',
'흥분',
'흩어지는',
'희곡',
'희곡집',
'희롱하거나',
'희롱하는',
'희망',
'희망을',
'희미하게',
'희생',
'희생당한',
'희생된',
'희생시키는',
'희생을',
'희생의',
'희생자',
'희생자라는',
'희생자로',
'희생한',
'희열의',
'희화',
'흰색',
'힌트를',
'힘껏',
'힘든',
'힘들기도',
'힘들어',
'힘써야',
'힘썼고',
'힘없이',
'힘은',
'힘을',
'힘이',
];


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

;// CONCATENATED MODULE: ./src/Utils.ts
class Utils {
    static humanReadableTime(ms) {
        let h, m, s;
        s = Math.floor(ms / 1000);
        m = Math.floor(s / 60);
        s = s % 60;
        h = Math.floor(m / 60);
        m = m % 60;
        h = h % 24;
        return [
            h ? h + ' hour' + (h == 1 ? '' : 's') : '',
            m ? m + ' minute' + (m == 1 ? '' : 's') : '',
            s ? s + ' second' + (s == 1 ? '' : 's') : '',
        ]
            .filter(Boolean)
            .join(', ');
    }
    static dateStamp() {
        const date = new Date(), day = date.getDate().toString().padStart(2, '0'), month = date.getMonth().toString().padStart(2, '0'), year = date.getFullYear().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
    }
    static sum(arr) {
        return arr.reduce((a, b) => a + b, 0);
    }
    static average(arr) {
        return this.sum(arr) / arr.length;
    }
    static range(end) {
        return Array.from({ length: end }, (_, i) => i + 1);
    }
}
Utils.second = 1000;
/** 1000 * 60 */
Utils.minute = 60000;

;// CONCATENATED MODULE: ./src/Target.ts

class Target {
    constructor(word, fontSize, onHit, onMiss) {
        this.fontSize = fontSize;
        this.onHit = onHit;
        this.onMiss = onMiss;
        this._message = word;
        this.$element = document.createElement('div');
        this.$element.classList.add('target');
        if (Math.random() > 0.5) {
            this.$element.classList.add('inverse');
        }
        this.$element.style.fontSize = this.fontSize + 'mm';
        this.$element.style.top = 5 + Math.random() * 90 + '%';
        this.$element.style.left = 5 + Math.random() * 90 + '%';
        const $text = document.createElement('span');
        $text.classList.add('text');
        $text.innerHTML = this._message;
        this.$element.append($text);
        setTimeout(() => {
            if (this.destroy()) {
                this.onMiss();
            }
        }, Target.life);
    }
    get message() {
        return this._message;
    }
    hit() {
        this.destroy();
        this.onHit();
    }
    destroy() {
        const parent = this.$element.parentNode;
        if (!parent) {
            return false;
        }
        if (parent.contains(this.$element)) {
            parent.removeChild(this.$element);
            return true;
        }
        return false;
    }
}
Target.life = 10 * Utils.second;

// EXTERNAL MODULE: ./src/KoreanWords.js
var KoreanWords = __webpack_require__(100);
;// CONCATENATED MODULE: ./src/TargetFactory.ts

const RandomWords = __webpack_require__(324);

class TargetFactory {
    constructor(fontSize) {
        this._fontSize = 8;
        this._korean = false;
        this._fontSize = fontSize;
    }
    get fontSize() {
        return this._fontSize;
    }
    newTarget(onHit, onMiss) {
        return new Target(this.randomWords(), this._fontSize, onHit, onMiss);
    }
    set korean(korean) {
        this._korean = korean;
    }
    randomWords() {
        if (this._korean) {
            return KoreanWords/* koreanWords */.n[Math.floor(Math.random() * KoreanWords/* koreanWords.length */.n.length)];
        }
        const word = RandomWords();
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
    multiplyToFontSize(multiplier) {
        this._fontSize *= multiplier;
        // Clamp
        this._fontSize = Math.min(Math.max(this._fontSize, TargetFactory.fontSizeMin), TargetFactory.fontSizeMax);
    }
    maximizeFontSize() {
        this._fontSize = TargetFactory.fontSizeMax;
    }
    /**
     * health is a floating number in range of `[0,1]`. Zero means the font size is maximum and one means that is minimum.
     */
    get health() {
        const maxRate = TargetFactory.fontSizeMax - TargetFactory.fontSizeMin;
        const current = TargetFactory.fontSizeMax - this._fontSize;
        return current / maxRate;
    }
}
TargetFactory.fontSizeMin = 3;
TargetFactory.fontSizeMax = 15;

;// CONCATENATED MODULE: ./src/OpticTyping.ts


const Cookies = __webpack_require__(646);
class OpticTyping {
    constructor($board, $canvas, $input, $health, $notification, $checkKorean, initFontsize = 8) {
        this.$board = $board;
        this.$canvas = $canvas;
        this.$input = $input;
        this.$health = $health;
        this.$notification = $notification;
        this.$checkKorean = $checkKorean;
        this.targets = {};
        this._queueFontSize = [];
        this.timeStart = new Date();
        this.onHitCallbacks = [];
        this.targetFactory = new TargetFactory(initFontsize);
    }
    addTargetRepeatedly() {
        if (Object.keys(this.targets).length < OpticTyping.maxTargetNum) {
            const target = this.targetFactory.newTarget(() => {
                // Statistics
                this._queueFontSize.push(this.targetFactory.fontSize);
                // Adjust the size of the target.
                delete this.targets[target.message];
                this.targetFactory.multiplyToFontSize(0.95);
                this.$board.classList.remove('wrong');
                this.$health.style.width = `${this.targetFactory.health * 100}%`;
                for (let cb of this.onHitCallbacks) {
                    cb(this.targetFactory.fontSize);
                }
            }, () => {
                delete this.targets[target.message];
                this.targetFactory.multiplyToFontSize(1.01);
                this.$board.classList.add('wrong');
                this.$health.style.width = `${this.targetFactory.health * 100}%`;
            });
            this.targets[target.message] = target;
            this.$canvas.prepend(target.$element);
        }
        setTimeout(() => {
            this.addTargetRepeatedly();
        }, OpticTyping.delay);
    }
    set korean(korean) {
        this.targetFactory.korean = korean;
    }
    init() {
        this.$canvas.addEventListener('click', (ev) => {
            this.$input.focus();
        });
        document.addEventListener('keydown', (ev) => {
            if (ev.key == 'Enter') {
                this.$input.value = '';
            }
        });
        this.$input.addEventListener('input', (ev) => {
            for (let key in this.targets) {
                const target = this.targets[key];
                if (this.$input.value.toLowerCase().includes(target.message.toLowerCase())) {
                    this.$input.value = '';
                    target.hit();
                }
            }
        });
        this.$checkKorean.addEventListener('change', (ev) => {
            const checked = this.$checkKorean.checked;
            this.targetFactory.korean = checked;
            Cookies.set('korean', checked ? '1' : '0');
            this.$input.focus();
        });
        this.$health.style.width = `${this.targetFactory.health * 100}%`;
        this.addTargetRepeatedly();
        const everyMinutesTimer = () => {
            this.showPlayingTime();
            setTimeout(everyMinutesTimer, Utils.minute);
        };
        setTimeout(everyMinutesTimer, Utils.minute);
    }
    showPlayingTime() {
        this.$notification.classList.remove('hidden');
        const t = Utils.humanReadableTime(new Date().getTime() - this.timeStart.getTime());
        this.$notification.innerHTML = `Your playing time is: ${t}`;
        setTimeout(() => {
            this.$notification.classList.add('hidden');
        }, 5000);
    }
    get queueFontSize() {
        return this._queueFontSize;
    }
    get sumFontSize() {
        return Utils.sum(this._queueFontSize);
    }
    get countFontSize() {
        return this._queueFontSize.length;
    }
    set onHit(callback) {
        this.onHitCallbacks.push(callback);
    }
}
OpticTyping.capacityQueue = 30;
OpticTyping.delay = 500;
OpticTyping.maxTargetNum = 10;

;// CONCATENATED MODULE: ./src/StatHelper.ts

class StatHelper {
    constructor() {
        this.onStatChangedCallbacks = [];
        this.sessionKey = new Date().getTime().toString();
        this.timeStart = new Date().getTime();
    }
    /**
     * Pushes the given size and updates the playing time.
     * @param size New size added.
     */
    pushFontSize(size) {
        const todayStats = StatHelper.todayStats;
        const allStats = StatHelper.allStats;
        if (todayStats.date !== Utils.dateStamp()) {
            StatHelper.allStats[todayStats.date] = this.summarizeDay(todayStats);
            // this.updateChart();
            todayStats.date = Utils.dateStamp();
            todayStats.times = {};
            todayStats.scores = [];
        }
        else if (todayStats.scores.length > StatHelper.NUM_TARGET_RECORDS) {
            todayStats.scores.shift();
        }
        todayStats.scores.push(size);
        todayStats.times[this.sessionKey] =
            // ms to second
            (new Date().getTime() - this.timeStart) / Utils.second;
        // Update allStats
        const summary = this.summarizeDay(todayStats);
        allStats[todayStats.date] = summary;
        // this.updateChart();
        StatHelper.todayStats = todayStats;
        StatHelper.allStats = allStats;
        for (let cb of this.onStatChangedCallbacks) {
            cb(todayStats, allStats);
        }
    }
    summarizeDay(stats) {
        let seconds = 0;
        for (const time of Object.values(stats.times)) {
            seconds += time;
        }
        const minutes = seconds / 60;
        return [minutes, Utils.average(stats.scores)];
    }
    static get todayStats() {
        const todayStatsRaw = localStorage.todayStats;
        if (todayStatsRaw) {
            const json = JSON.parse(todayStatsRaw);
            if (typeof json == 'object') {
                return json;
            }
        }
        return { date: Utils.dateStamp(), times: {}, scores: [] };
    }
    static set todayStats(obj) {
        localStorage.todayStats = JSON.stringify(obj);
    }
    static get allStats() {
        const allStatsRaw = localStorage.allStats;
        if (allStatsRaw) {
            const json = JSON.parse(allStatsRaw);
            if (typeof json == 'object') {
                return json;
            }
        }
        return {};
    }
    static set allStats(obj) {
        localStorage.allStats = JSON.stringify(obj);
    }
    set onStatChanged(callback) {
        this.onStatChangedCallbacks.push(callback);
    }
}
StatHelper.NUM_TARGET_RECORDS = 60;

;// CONCATENATED MODULE: ./node_modules/chart.js/dist/chunks/helpers.segment.js
/*!
 * Chart.js v3.6.1
 * https://www.chartjs.org
 * (c) 2021 Chart.js Contributors
 * Released under the MIT License
 */
function fontString(pixelSize, fontStyle, fontFamily) {
  return fontStyle + ' ' + pixelSize + 'px ' + fontFamily;
}
const requestAnimFrame = (function() {
  if (typeof window === 'undefined') {
    return function(callback) {
      return callback();
    };
  }
  return window.requestAnimationFrame;
}());
function throttled(fn, thisArg, updateFn) {
  const updateArgs = updateFn || ((args) => Array.prototype.slice.call(args));
  let ticking = false;
  let args = [];
  return function(...rest) {
    args = updateArgs(rest);
    if (!ticking) {
      ticking = true;
      requestAnimFrame.call(window, () => {
        ticking = false;
        fn.apply(thisArg, args);
      });
    }
  };
}
function debounce(fn, delay) {
  let timeout;
  return function(...args) {
    if (delay) {
      clearTimeout(timeout);
      timeout = setTimeout(fn, delay, args);
    } else {
      fn.apply(this, args);
    }
    return delay;
  };
}
const _toLeftRightCenter = (align) => align === 'start' ? 'left' : align === 'end' ? 'right' : 'center';
const _alignStartEnd = (align, start, end) => align === 'start' ? start : align === 'end' ? end : (start + end) / 2;
const _textX = (align, left, right, rtl) => {
  const check = rtl ? 'left' : 'right';
  return align === check ? right : align === 'center' ? (left + right) / 2 : left;
};

function noop() {}
const uid = (function() {
  let id = 0;
  return function() {
    return id++;
  };
}());
function isNullOrUndef(value) {
  return value === null || typeof value === 'undefined';
}
function isArray(value) {
  if (Array.isArray && Array.isArray(value)) {
    return true;
  }
  const type = Object.prototype.toString.call(value);
  if (type.substr(0, 7) === '[object' && type.substr(-6) === 'Array]') {
    return true;
  }
  return false;
}
function isObject(value) {
  return value !== null && Object.prototype.toString.call(value) === '[object Object]';
}
const isNumberFinite = (value) => (typeof value === 'number' || value instanceof Number) && isFinite(+value);
function finiteOrDefault(value, defaultValue) {
  return isNumberFinite(value) ? value : defaultValue;
}
function valueOrDefault(value, defaultValue) {
  return typeof value === 'undefined' ? defaultValue : value;
}
const toPercentage = (value, dimension) =>
  typeof value === 'string' && value.endsWith('%') ?
    parseFloat(value) / 100
    : value / dimension;
const toDimension = (value, dimension) =>
  typeof value === 'string' && value.endsWith('%') ?
    parseFloat(value) / 100 * dimension
    : +value;
function callback(fn, args, thisArg) {
  if (fn && typeof fn.call === 'function') {
    return fn.apply(thisArg, args);
  }
}
function each(loopable, fn, thisArg, reverse) {
  let i, len, keys;
  if (isArray(loopable)) {
    len = loopable.length;
    if (reverse) {
      for (i = len - 1; i >= 0; i--) {
        fn.call(thisArg, loopable[i], i);
      }
    } else {
      for (i = 0; i < len; i++) {
        fn.call(thisArg, loopable[i], i);
      }
    }
  } else if (isObject(loopable)) {
    keys = Object.keys(loopable);
    len = keys.length;
    for (i = 0; i < len; i++) {
      fn.call(thisArg, loopable[keys[i]], keys[i]);
    }
  }
}
function _elementsEqual(a0, a1) {
  let i, ilen, v0, v1;
  if (!a0 || !a1 || a0.length !== a1.length) {
    return false;
  }
  for (i = 0, ilen = a0.length; i < ilen; ++i) {
    v0 = a0[i];
    v1 = a1[i];
    if (v0.datasetIndex !== v1.datasetIndex || v0.index !== v1.index) {
      return false;
    }
  }
  return true;
}
function clone$1(source) {
  if (isArray(source)) {
    return source.map(clone$1);
  }
  if (isObject(source)) {
    const target = Object.create(null);
    const keys = Object.keys(source);
    const klen = keys.length;
    let k = 0;
    for (; k < klen; ++k) {
      target[keys[k]] = clone$1(source[keys[k]]);
    }
    return target;
  }
  return source;
}
function isValidKey(key) {
  return ['__proto__', 'prototype', 'constructor'].indexOf(key) === -1;
}
function _merger(key, target, source, options) {
  if (!isValidKey(key)) {
    return;
  }
  const tval = target[key];
  const sval = source[key];
  if (isObject(tval) && isObject(sval)) {
    merge(tval, sval, options);
  } else {
    target[key] = clone$1(sval);
  }
}
function merge(target, source, options) {
  const sources = isArray(source) ? source : [source];
  const ilen = sources.length;
  if (!isObject(target)) {
    return target;
  }
  options = options || {};
  const merger = options.merger || _merger;
  for (let i = 0; i < ilen; ++i) {
    source = sources[i];
    if (!isObject(source)) {
      continue;
    }
    const keys = Object.keys(source);
    for (let k = 0, klen = keys.length; k < klen; ++k) {
      merger(keys[k], target, source, options);
    }
  }
  return target;
}
function mergeIf(target, source) {
  return merge(target, source, {merger: _mergerIf});
}
function _mergerIf(key, target, source) {
  if (!isValidKey(key)) {
    return;
  }
  const tval = target[key];
  const sval = source[key];
  if (isObject(tval) && isObject(sval)) {
    mergeIf(tval, sval);
  } else if (!Object.prototype.hasOwnProperty.call(target, key)) {
    target[key] = clone$1(sval);
  }
}
function _deprecated(scope, value, previous, current) {
  if (value !== undefined) {
    console.warn(scope + ': "' + previous +
			'" is deprecated. Please use "' + current + '" instead');
  }
}
const emptyString = '';
const dot = '.';
function indexOfDotOrLength(key, start) {
  const idx = key.indexOf(dot, start);
  return idx === -1 ? key.length : idx;
}
function resolveObjectKey(obj, key) {
  if (key === emptyString) {
    return obj;
  }
  let pos = 0;
  let idx = indexOfDotOrLength(key, pos);
  while (obj && idx > pos) {
    obj = obj[key.substr(pos, idx - pos)];
    pos = idx + 1;
    idx = indexOfDotOrLength(key, pos);
  }
  return obj;
}
function _capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
const defined = (value) => typeof value !== 'undefined';
const isFunction = (value) => typeof value === 'function';
const setsEqual = (a, b) => {
  if (a.size !== b.size) {
    return false;
  }
  for (const item of a) {
    if (!b.has(item)) {
      return false;
    }
  }
  return true;
};

const PI = Math.PI;
const TAU = 2 * PI;
const PITAU = TAU + PI;
const INFINITY = Number.POSITIVE_INFINITY;
const RAD_PER_DEG = PI / 180;
const HALF_PI = PI / 2;
const QUARTER_PI = PI / 4;
const TWO_THIRDS_PI = PI * 2 / 3;
const log10 = Math.log10;
const sign = Math.sign;
function niceNum(range) {
  const roundedRange = Math.round(range);
  range = almostEquals(range, roundedRange, range / 1000) ? roundedRange : range;
  const niceRange = Math.pow(10, Math.floor(log10(range)));
  const fraction = range / niceRange;
  const niceFraction = fraction <= 1 ? 1 : fraction <= 2 ? 2 : fraction <= 5 ? 5 : 10;
  return niceFraction * niceRange;
}
function _factorize(value) {
  const result = [];
  const sqrt = Math.sqrt(value);
  let i;
  for (i = 1; i < sqrt; i++) {
    if (value % i === 0) {
      result.push(i);
      result.push(value / i);
    }
  }
  if (sqrt === (sqrt | 0)) {
    result.push(sqrt);
  }
  result.sort((a, b) => a - b).pop();
  return result;
}
function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
function almostEquals(x, y, epsilon) {
  return Math.abs(x - y) < epsilon;
}
function almostWhole(x, epsilon) {
  const rounded = Math.round(x);
  return ((rounded - epsilon) <= x) && ((rounded + epsilon) >= x);
}
function _setMinAndMaxByKey(array, target, property) {
  let i, ilen, value;
  for (i = 0, ilen = array.length; i < ilen; i++) {
    value = array[i][property];
    if (!isNaN(value)) {
      target.min = Math.min(target.min, value);
      target.max = Math.max(target.max, value);
    }
  }
}
function toRadians(degrees) {
  return degrees * (PI / 180);
}
function toDegrees(radians) {
  return radians * (180 / PI);
}
function _decimalPlaces(x) {
  if (!isNumberFinite(x)) {
    return;
  }
  let e = 1;
  let p = 0;
  while (Math.round(x * e) / e !== x) {
    e *= 10;
    p++;
  }
  return p;
}
function getAngleFromPoint(centrePoint, anglePoint) {
  const distanceFromXCenter = anglePoint.x - centrePoint.x;
  const distanceFromYCenter = anglePoint.y - centrePoint.y;
  const radialDistanceFromCenter = Math.sqrt(distanceFromXCenter * distanceFromXCenter + distanceFromYCenter * distanceFromYCenter);
  let angle = Math.atan2(distanceFromYCenter, distanceFromXCenter);
  if (angle < (-0.5 * PI)) {
    angle += TAU;
  }
  return {
    angle,
    distance: radialDistanceFromCenter
  };
}
function distanceBetweenPoints(pt1, pt2) {
  return Math.sqrt(Math.pow(pt2.x - pt1.x, 2) + Math.pow(pt2.y - pt1.y, 2));
}
function _angleDiff(a, b) {
  return (a - b + PITAU) % TAU - PI;
}
function _normalizeAngle(a) {
  return (a % TAU + TAU) % TAU;
}
function _angleBetween(angle, start, end, sameAngleIsFullCircle) {
  const a = _normalizeAngle(angle);
  const s = _normalizeAngle(start);
  const e = _normalizeAngle(end);
  const angleToStart = _normalizeAngle(s - a);
  const angleToEnd = _normalizeAngle(e - a);
  const startToAngle = _normalizeAngle(a - s);
  const endToAngle = _normalizeAngle(a - e);
  return a === s || a === e || (sameAngleIsFullCircle && s === e)
    || (angleToStart > angleToEnd && startToAngle < endToAngle);
}
function _limitValue(value, min, max) {
  return Math.max(min, Math.min(max, value));
}
function _int16Range(value) {
  return _limitValue(value, -32768, 32767);
}
function _isBetween(value, start, end, epsilon = 1e-6) {
  return value >= Math.min(start, end) - epsilon && value <= Math.max(start, end) + epsilon;
}

const atEdge = (t) => t === 0 || t === 1;
const elasticIn = (t, s, p) => -(Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * TAU / p));
const elasticOut = (t, s, p) => Math.pow(2, -10 * t) * Math.sin((t - s) * TAU / p) + 1;
const effects = {
  linear: t => t,
  easeInQuad: t => t * t,
  easeOutQuad: t => -t * (t - 2),
  easeInOutQuad: t => ((t /= 0.5) < 1)
    ? 0.5 * t * t
    : -0.5 * ((--t) * (t - 2) - 1),
  easeInCubic: t => t * t * t,
  easeOutCubic: t => (t -= 1) * t * t + 1,
  easeInOutCubic: t => ((t /= 0.5) < 1)
    ? 0.5 * t * t * t
    : 0.5 * ((t -= 2) * t * t + 2),
  easeInQuart: t => t * t * t * t,
  easeOutQuart: t => -((t -= 1) * t * t * t - 1),
  easeInOutQuart: t => ((t /= 0.5) < 1)
    ? 0.5 * t * t * t * t
    : -0.5 * ((t -= 2) * t * t * t - 2),
  easeInQuint: t => t * t * t * t * t,
  easeOutQuint: t => (t -= 1) * t * t * t * t + 1,
  easeInOutQuint: t => ((t /= 0.5) < 1)
    ? 0.5 * t * t * t * t * t
    : 0.5 * ((t -= 2) * t * t * t * t + 2),
  easeInSine: t => -Math.cos(t * HALF_PI) + 1,
  easeOutSine: t => Math.sin(t * HALF_PI),
  easeInOutSine: t => -0.5 * (Math.cos(PI * t) - 1),
  easeInExpo: t => (t === 0) ? 0 : Math.pow(2, 10 * (t - 1)),
  easeOutExpo: t => (t === 1) ? 1 : -Math.pow(2, -10 * t) + 1,
  easeInOutExpo: t => atEdge(t) ? t : t < 0.5
    ? 0.5 * Math.pow(2, 10 * (t * 2 - 1))
    : 0.5 * (-Math.pow(2, -10 * (t * 2 - 1)) + 2),
  easeInCirc: t => (t >= 1) ? t : -(Math.sqrt(1 - t * t) - 1),
  easeOutCirc: t => Math.sqrt(1 - (t -= 1) * t),
  easeInOutCirc: t => ((t /= 0.5) < 1)
    ? -0.5 * (Math.sqrt(1 - t * t) - 1)
    : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1),
  easeInElastic: t => atEdge(t) ? t : elasticIn(t, 0.075, 0.3),
  easeOutElastic: t => atEdge(t) ? t : elasticOut(t, 0.075, 0.3),
  easeInOutElastic(t) {
    const s = 0.1125;
    const p = 0.45;
    return atEdge(t) ? t :
      t < 0.5
        ? 0.5 * elasticIn(t * 2, s, p)
        : 0.5 + 0.5 * elasticOut(t * 2 - 1, s, p);
  },
  easeInBack(t) {
    const s = 1.70158;
    return t * t * ((s + 1) * t - s);
  },
  easeOutBack(t) {
    const s = 1.70158;
    return (t -= 1) * t * ((s + 1) * t + s) + 1;
  },
  easeInOutBack(t) {
    let s = 1.70158;
    if ((t /= 0.5) < 1) {
      return 0.5 * (t * t * (((s *= (1.525)) + 1) * t - s));
    }
    return 0.5 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2);
  },
  easeInBounce: t => 1 - effects.easeOutBounce(1 - t),
  easeOutBounce(t) {
    const m = 7.5625;
    const d = 2.75;
    if (t < (1 / d)) {
      return m * t * t;
    }
    if (t < (2 / d)) {
      return m * (t -= (1.5 / d)) * t + 0.75;
    }
    if (t < (2.5 / d)) {
      return m * (t -= (2.25 / d)) * t + 0.9375;
    }
    return m * (t -= (2.625 / d)) * t + 0.984375;
  },
  easeInOutBounce: t => (t < 0.5)
    ? effects.easeInBounce(t * 2) * 0.5
    : effects.easeOutBounce(t * 2 - 1) * 0.5 + 0.5,
};

/*!
 * @kurkle/color v0.1.9
 * https://github.com/kurkle/color#readme
 * (c) 2020 Jukka Kurkela
 * Released under the MIT License
 */
const map = {0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, A: 10, B: 11, C: 12, D: 13, E: 14, F: 15, a: 10, b: 11, c: 12, d: 13, e: 14, f: 15};
const hex = '0123456789ABCDEF';
const h1 = (b) => hex[b & 0xF];
const h2 = (b) => hex[(b & 0xF0) >> 4] + hex[b & 0xF];
const eq = (b) => (((b & 0xF0) >> 4) === (b & 0xF));
function isShort(v) {
	return eq(v.r) && eq(v.g) && eq(v.b) && eq(v.a);
}
function hexParse(str) {
	var len = str.length;
	var ret;
	if (str[0] === '#') {
		if (len === 4 || len === 5) {
			ret = {
				r: 255 & map[str[1]] * 17,
				g: 255 & map[str[2]] * 17,
				b: 255 & map[str[3]] * 17,
				a: len === 5 ? map[str[4]] * 17 : 255
			};
		} else if (len === 7 || len === 9) {
			ret = {
				r: map[str[1]] << 4 | map[str[2]],
				g: map[str[3]] << 4 | map[str[4]],
				b: map[str[5]] << 4 | map[str[6]],
				a: len === 9 ? (map[str[7]] << 4 | map[str[8]]) : 255
			};
		}
	}
	return ret;
}
function hexString(v) {
	var f = isShort(v) ? h1 : h2;
	return v
		? '#' + f(v.r) + f(v.g) + f(v.b) + (v.a < 255 ? f(v.a) : '')
		: v;
}
function round(v) {
	return v + 0.5 | 0;
}
const lim = (v, l, h) => Math.max(Math.min(v, h), l);
function p2b(v) {
	return lim(round(v * 2.55), 0, 255);
}
function n2b(v) {
	return lim(round(v * 255), 0, 255);
}
function b2n(v) {
	return lim(round(v / 2.55) / 100, 0, 1);
}
function n2p(v) {
	return lim(round(v * 100), 0, 100);
}
const RGB_RE = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function rgbParse(str) {
	const m = RGB_RE.exec(str);
	let a = 255;
	let r, g, b;
	if (!m) {
		return;
	}
	if (m[7] !== r) {
		const v = +m[7];
		a = 255 & (m[8] ? p2b(v) : v * 255);
	}
	r = +m[1];
	g = +m[3];
	b = +m[5];
	r = 255 & (m[2] ? p2b(r) : r);
	g = 255 & (m[4] ? p2b(g) : g);
	b = 255 & (m[6] ? p2b(b) : b);
	return {
		r: r,
		g: g,
		b: b,
		a: a
	};
}
function rgbString(v) {
	return v && (
		v.a < 255
			? `rgba(${v.r}, ${v.g}, ${v.b}, ${b2n(v.a)})`
			: `rgb(${v.r}, ${v.g}, ${v.b})`
	);
}
const HUE_RE = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function hsl2rgbn(h, s, l) {
	const a = s * Math.min(l, 1 - l);
	const f = (n, k = (n + h / 30) % 12) => l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
	return [f(0), f(8), f(4)];
}
function hsv2rgbn(h, s, v) {
	const f = (n, k = (n + h / 60) % 6) => v - v * s * Math.max(Math.min(k, 4 - k, 1), 0);
	return [f(5), f(3), f(1)];
}
function hwb2rgbn(h, w, b) {
	const rgb = hsl2rgbn(h, 1, 0.5);
	let i;
	if (w + b > 1) {
		i = 1 / (w + b);
		w *= i;
		b *= i;
	}
	for (i = 0; i < 3; i++) {
		rgb[i] *= 1 - w - b;
		rgb[i] += w;
	}
	return rgb;
}
function rgb2hsl(v) {
	const range = 255;
	const r = v.r / range;
	const g = v.g / range;
	const b = v.b / range;
	const max = Math.max(r, g, b);
	const min = Math.min(r, g, b);
	const l = (max + min) / 2;
	let h, s, d;
	if (max !== min) {
		d = max - min;
		s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
		h = max === r
			? ((g - b) / d) + (g < b ? 6 : 0)
			: max === g
				? (b - r) / d + 2
				: (r - g) / d + 4;
		h = h * 60 + 0.5;
	}
	return [h | 0, s || 0, l];
}
function calln(f, a, b, c) {
	return (
		Array.isArray(a)
			? f(a[0], a[1], a[2])
			: f(a, b, c)
	).map(n2b);
}
function hsl2rgb(h, s, l) {
	return calln(hsl2rgbn, h, s, l);
}
function hwb2rgb(h, w, b) {
	return calln(hwb2rgbn, h, w, b);
}
function hsv2rgb(h, s, v) {
	return calln(hsv2rgbn, h, s, v);
}
function hue(h) {
	return (h % 360 + 360) % 360;
}
function hueParse(str) {
	const m = HUE_RE.exec(str);
	let a = 255;
	let v;
	if (!m) {
		return;
	}
	if (m[5] !== v) {
		a = m[6] ? p2b(+m[5]) : n2b(+m[5]);
	}
	const h = hue(+m[2]);
	const p1 = +m[3] / 100;
	const p2 = +m[4] / 100;
	if (m[1] === 'hwb') {
		v = hwb2rgb(h, p1, p2);
	} else if (m[1] === 'hsv') {
		v = hsv2rgb(h, p1, p2);
	} else {
		v = hsl2rgb(h, p1, p2);
	}
	return {
		r: v[0],
		g: v[1],
		b: v[2],
		a: a
	};
}
function rotate(v, deg) {
	var h = rgb2hsl(v);
	h[0] = hue(h[0] + deg);
	h = hsl2rgb(h);
	v.r = h[0];
	v.g = h[1];
	v.b = h[2];
}
function hslString(v) {
	if (!v) {
		return;
	}
	const a = rgb2hsl(v);
	const h = a[0];
	const s = n2p(a[1]);
	const l = n2p(a[2]);
	return v.a < 255
		? `hsla(${h}, ${s}%, ${l}%, ${b2n(v.a)})`
		: `hsl(${h}, ${s}%, ${l}%)`;
}
const map$1 = {
	x: 'dark',
	Z: 'light',
	Y: 're',
	X: 'blu',
	W: 'gr',
	V: 'medium',
	U: 'slate',
	A: 'ee',
	T: 'ol',
	S: 'or',
	B: 'ra',
	C: 'lateg',
	D: 'ights',
	R: 'in',
	Q: 'turquois',
	E: 'hi',
	P: 'ro',
	O: 'al',
	N: 'le',
	M: 'de',
	L: 'yello',
	F: 'en',
	K: 'ch',
	G: 'arks',
	H: 'ea',
	I: 'ightg',
	J: 'wh'
};
const names = {
	OiceXe: 'f0f8ff',
	antiquewEte: 'faebd7',
	aqua: 'ffff',
	aquamarRe: '7fffd4',
	azuY: 'f0ffff',
	beige: 'f5f5dc',
	bisque: 'ffe4c4',
	black: '0',
	blanKedOmond: 'ffebcd',
	Xe: 'ff',
	XeviTet: '8a2be2',
	bPwn: 'a52a2a',
	burlywood: 'deb887',
	caMtXe: '5f9ea0',
	KartYuse: '7fff00',
	KocTate: 'd2691e',
	cSO: 'ff7f50',
	cSnflowerXe: '6495ed',
	cSnsilk: 'fff8dc',
	crimson: 'dc143c',
	cyan: 'ffff',
	xXe: '8b',
	xcyan: '8b8b',
	xgTMnPd: 'b8860b',
	xWay: 'a9a9a9',
	xgYF: '6400',
	xgYy: 'a9a9a9',
	xkhaki: 'bdb76b',
	xmagFta: '8b008b',
	xTivegYF: '556b2f',
	xSange: 'ff8c00',
	xScEd: '9932cc',
	xYd: '8b0000',
	xsOmon: 'e9967a',
	xsHgYF: '8fbc8f',
	xUXe: '483d8b',
	xUWay: '2f4f4f',
	xUgYy: '2f4f4f',
	xQe: 'ced1',
	xviTet: '9400d3',
	dAppRk: 'ff1493',
	dApskyXe: 'bfff',
	dimWay: '696969',
	dimgYy: '696969',
	dodgerXe: '1e90ff',
	fiYbrick: 'b22222',
	flSOwEte: 'fffaf0',
	foYstWAn: '228b22',
	fuKsia: 'ff00ff',
	gaRsbSo: 'dcdcdc',
	ghostwEte: 'f8f8ff',
	gTd: 'ffd700',
	gTMnPd: 'daa520',
	Way: '808080',
	gYF: '8000',
	gYFLw: 'adff2f',
	gYy: '808080',
	honeyMw: 'f0fff0',
	hotpRk: 'ff69b4',
	RdianYd: 'cd5c5c',
	Rdigo: '4b0082',
	ivSy: 'fffff0',
	khaki: 'f0e68c',
	lavFMr: 'e6e6fa',
	lavFMrXsh: 'fff0f5',
	lawngYF: '7cfc00',
	NmoncEffon: 'fffacd',
	ZXe: 'add8e6',
	ZcSO: 'f08080',
	Zcyan: 'e0ffff',
	ZgTMnPdLw: 'fafad2',
	ZWay: 'd3d3d3',
	ZgYF: '90ee90',
	ZgYy: 'd3d3d3',
	ZpRk: 'ffb6c1',
	ZsOmon: 'ffa07a',
	ZsHgYF: '20b2aa',
	ZskyXe: '87cefa',
	ZUWay: '778899',
	ZUgYy: '778899',
	ZstAlXe: 'b0c4de',
	ZLw: 'ffffe0',
	lime: 'ff00',
	limegYF: '32cd32',
	lRF: 'faf0e6',
	magFta: 'ff00ff',
	maPon: '800000',
	VaquamarRe: '66cdaa',
	VXe: 'cd',
	VScEd: 'ba55d3',
	VpurpN: '9370db',
	VsHgYF: '3cb371',
	VUXe: '7b68ee',
	VsprRggYF: 'fa9a',
	VQe: '48d1cc',
	VviTetYd: 'c71585',
	midnightXe: '191970',
	mRtcYam: 'f5fffa',
	mistyPse: 'ffe4e1',
	moccasR: 'ffe4b5',
	navajowEte: 'ffdead',
	navy: '80',
	Tdlace: 'fdf5e6',
	Tive: '808000',
	TivedBb: '6b8e23',
	Sange: 'ffa500',
	SangeYd: 'ff4500',
	ScEd: 'da70d6',
	pOegTMnPd: 'eee8aa',
	pOegYF: '98fb98',
	pOeQe: 'afeeee',
	pOeviTetYd: 'db7093',
	papayawEp: 'ffefd5',
	pHKpuff: 'ffdab9',
	peru: 'cd853f',
	pRk: 'ffc0cb',
	plum: 'dda0dd',
	powMrXe: 'b0e0e6',
	purpN: '800080',
	YbeccapurpN: '663399',
	Yd: 'ff0000',
	Psybrown: 'bc8f8f',
	PyOXe: '4169e1',
	saddNbPwn: '8b4513',
	sOmon: 'fa8072',
	sandybPwn: 'f4a460',
	sHgYF: '2e8b57',
	sHshell: 'fff5ee',
	siFna: 'a0522d',
	silver: 'c0c0c0',
	skyXe: '87ceeb',
	UXe: '6a5acd',
	UWay: '708090',
	UgYy: '708090',
	snow: 'fffafa',
	sprRggYF: 'ff7f',
	stAlXe: '4682b4',
	tan: 'd2b48c',
	teO: '8080',
	tEstN: 'd8bfd8',
	tomato: 'ff6347',
	Qe: '40e0d0',
	viTet: 'ee82ee',
	JHt: 'f5deb3',
	wEte: 'ffffff',
	wEtesmoke: 'f5f5f5',
	Lw: 'ffff00',
	LwgYF: '9acd32'
};
function unpack() {
	const unpacked = {};
	const keys = Object.keys(names);
	const tkeys = Object.keys(map$1);
	let i, j, k, ok, nk;
	for (i = 0; i < keys.length; i++) {
		ok = nk = keys[i];
		for (j = 0; j < tkeys.length; j++) {
			k = tkeys[j];
			nk = nk.replace(k, map$1[k]);
		}
		k = parseInt(names[ok], 16);
		unpacked[nk] = [k >> 16 & 0xFF, k >> 8 & 0xFF, k & 0xFF];
	}
	return unpacked;
}
let names$1;
function nameParse(str) {
	if (!names$1) {
		names$1 = unpack();
		names$1.transparent = [0, 0, 0, 0];
	}
	const a = names$1[str.toLowerCase()];
	return a && {
		r: a[0],
		g: a[1],
		b: a[2],
		a: a.length === 4 ? a[3] : 255
	};
}
function modHSL(v, i, ratio) {
	if (v) {
		let tmp = rgb2hsl(v);
		tmp[i] = Math.max(0, Math.min(tmp[i] + tmp[i] * ratio, i === 0 ? 360 : 1));
		tmp = hsl2rgb(tmp);
		v.r = tmp[0];
		v.g = tmp[1];
		v.b = tmp[2];
	}
}
function clone(v, proto) {
	return v ? Object.assign(proto || {}, v) : v;
}
function fromObject(input) {
	var v = {r: 0, g: 0, b: 0, a: 255};
	if (Array.isArray(input)) {
		if (input.length >= 3) {
			v = {r: input[0], g: input[1], b: input[2], a: 255};
			if (input.length > 3) {
				v.a = n2b(input[3]);
			}
		}
	} else {
		v = clone(input, {r: 0, g: 0, b: 0, a: 1});
		v.a = n2b(v.a);
	}
	return v;
}
function functionParse(str) {
	if (str.charAt(0) === 'r') {
		return rgbParse(str);
	}
	return hueParse(str);
}
class Color {
	constructor(input) {
		if (input instanceof Color) {
			return input;
		}
		const type = typeof input;
		let v;
		if (type === 'object') {
			v = fromObject(input);
		} else if (type === 'string') {
			v = hexParse(input) || nameParse(input) || functionParse(input);
		}
		this._rgb = v;
		this._valid = !!v;
	}
	get valid() {
		return this._valid;
	}
	get rgb() {
		var v = clone(this._rgb);
		if (v) {
			v.a = b2n(v.a);
		}
		return v;
	}
	set rgb(obj) {
		this._rgb = fromObject(obj);
	}
	rgbString() {
		return this._valid ? rgbString(this._rgb) : this._rgb;
	}
	hexString() {
		return this._valid ? hexString(this._rgb) : this._rgb;
	}
	hslString() {
		return this._valid ? hslString(this._rgb) : this._rgb;
	}
	mix(color, weight) {
		const me = this;
		if (color) {
			const c1 = me.rgb;
			const c2 = color.rgb;
			let w2;
			const p = weight === w2 ? 0.5 : weight;
			const w = 2 * p - 1;
			const a = c1.a - c2.a;
			const w1 = ((w * a === -1 ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
			w2 = 1 - w1;
			c1.r = 0xFF & w1 * c1.r + w2 * c2.r + 0.5;
			c1.g = 0xFF & w1 * c1.g + w2 * c2.g + 0.5;
			c1.b = 0xFF & w1 * c1.b + w2 * c2.b + 0.5;
			c1.a = p * c1.a + (1 - p) * c2.a;
			me.rgb = c1;
		}
		return me;
	}
	clone() {
		return new Color(this.rgb);
	}
	alpha(a) {
		this._rgb.a = n2b(a);
		return this;
	}
	clearer(ratio) {
		const rgb = this._rgb;
		rgb.a *= 1 - ratio;
		return this;
	}
	greyscale() {
		const rgb = this._rgb;
		const val = round(rgb.r * 0.3 + rgb.g * 0.59 + rgb.b * 0.11);
		rgb.r = rgb.g = rgb.b = val;
		return this;
	}
	opaquer(ratio) {
		const rgb = this._rgb;
		rgb.a *= 1 + ratio;
		return this;
	}
	negate() {
		const v = this._rgb;
		v.r = 255 - v.r;
		v.g = 255 - v.g;
		v.b = 255 - v.b;
		return this;
	}
	lighten(ratio) {
		modHSL(this._rgb, 2, ratio);
		return this;
	}
	darken(ratio) {
		modHSL(this._rgb, 2, -ratio);
		return this;
	}
	saturate(ratio) {
		modHSL(this._rgb, 1, ratio);
		return this;
	}
	desaturate(ratio) {
		modHSL(this._rgb, 1, -ratio);
		return this;
	}
	rotate(deg) {
		rotate(this._rgb, deg);
		return this;
	}
}
function index_esm(input) {
	return new Color(input);
}

const isPatternOrGradient = (value) => value instanceof CanvasGradient || value instanceof CanvasPattern;
function color(value) {
  return isPatternOrGradient(value) ? value : index_esm(value);
}
function getHoverColor(value) {
  return isPatternOrGradient(value)
    ? value
    : index_esm(value).saturate(0.5).darken(0.1).hexString();
}

const overrides = Object.create(null);
const descriptors = Object.create(null);
function getScope$1(node, key) {
  if (!key) {
    return node;
  }
  const keys = key.split('.');
  for (let i = 0, n = keys.length; i < n; ++i) {
    const k = keys[i];
    node = node[k] || (node[k] = Object.create(null));
  }
  return node;
}
function set(root, scope, values) {
  if (typeof scope === 'string') {
    return merge(getScope$1(root, scope), values);
  }
  return merge(getScope$1(root, ''), scope);
}
class Defaults {
  constructor(_descriptors) {
    this.animation = undefined;
    this.backgroundColor = 'rgba(0,0,0,0.1)';
    this.borderColor = 'rgba(0,0,0,0.1)';
    this.color = '#666';
    this.datasets = {};
    this.devicePixelRatio = (context) => context.chart.platform.getDevicePixelRatio();
    this.elements = {};
    this.events = [
      'mousemove',
      'mouseout',
      'click',
      'touchstart',
      'touchmove'
    ];
    this.font = {
      family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
      size: 12,
      style: 'normal',
      lineHeight: 1.2,
      weight: null
    };
    this.hover = {};
    this.hoverBackgroundColor = (ctx, options) => getHoverColor(options.backgroundColor);
    this.hoverBorderColor = (ctx, options) => getHoverColor(options.borderColor);
    this.hoverColor = (ctx, options) => getHoverColor(options.color);
    this.indexAxis = 'x';
    this.interaction = {
      mode: 'nearest',
      intersect: true
    };
    this.maintainAspectRatio = true;
    this.onHover = null;
    this.onClick = null;
    this.parsing = true;
    this.plugins = {};
    this.responsive = true;
    this.scale = undefined;
    this.scales = {};
    this.showLine = true;
    this.describe(_descriptors);
  }
  set(scope, values) {
    return set(this, scope, values);
  }
  get(scope) {
    return getScope$1(this, scope);
  }
  describe(scope, values) {
    return set(descriptors, scope, values);
  }
  override(scope, values) {
    return set(overrides, scope, values);
  }
  route(scope, name, targetScope, targetName) {
    const scopeObject = getScope$1(this, scope);
    const targetScopeObject = getScope$1(this, targetScope);
    const privateName = '_' + name;
    Object.defineProperties(scopeObject, {
      [privateName]: {
        value: scopeObject[name],
        writable: true
      },
      [name]: {
        enumerable: true,
        get() {
          const local = this[privateName];
          const target = targetScopeObject[targetName];
          if (isObject(local)) {
            return Object.assign({}, target, local);
          }
          return valueOrDefault(local, target);
        },
        set(value) {
          this[privateName] = value;
        }
      }
    });
  }
}
var defaults = new Defaults({
  _scriptable: (name) => !name.startsWith('on'),
  _indexable: (name) => name !== 'events',
  hover: {
    _fallback: 'interaction'
  },
  interaction: {
    _scriptable: false,
    _indexable: false,
  }
});

function toFontString(font) {
  if (!font || isNullOrUndef(font.size) || isNullOrUndef(font.family)) {
    return null;
  }
  return (font.style ? font.style + ' ' : '')
		+ (font.weight ? font.weight + ' ' : '')
		+ font.size + 'px '
		+ font.family;
}
function _measureText(ctx, data, gc, longest, string) {
  let textWidth = data[string];
  if (!textWidth) {
    textWidth = data[string] = ctx.measureText(string).width;
    gc.push(string);
  }
  if (textWidth > longest) {
    longest = textWidth;
  }
  return longest;
}
function _longestText(ctx, font, arrayOfThings, cache) {
  cache = cache || {};
  let data = cache.data = cache.data || {};
  let gc = cache.garbageCollect = cache.garbageCollect || [];
  if (cache.font !== font) {
    data = cache.data = {};
    gc = cache.garbageCollect = [];
    cache.font = font;
  }
  ctx.save();
  ctx.font = font;
  let longest = 0;
  const ilen = arrayOfThings.length;
  let i, j, jlen, thing, nestedThing;
  for (i = 0; i < ilen; i++) {
    thing = arrayOfThings[i];
    if (thing !== undefined && thing !== null && isArray(thing) !== true) {
      longest = _measureText(ctx, data, gc, longest, thing);
    } else if (isArray(thing)) {
      for (j = 0, jlen = thing.length; j < jlen; j++) {
        nestedThing = thing[j];
        if (nestedThing !== undefined && nestedThing !== null && !isArray(nestedThing)) {
          longest = _measureText(ctx, data, gc, longest, nestedThing);
        }
      }
    }
  }
  ctx.restore();
  const gcLen = gc.length / 2;
  if (gcLen > arrayOfThings.length) {
    for (i = 0; i < gcLen; i++) {
      delete data[gc[i]];
    }
    gc.splice(0, gcLen);
  }
  return longest;
}
function _alignPixel(chart, pixel, width) {
  const devicePixelRatio = chart.currentDevicePixelRatio;
  const halfWidth = width !== 0 ? Math.max(width / 2, 0.5) : 0;
  return Math.round((pixel - halfWidth) * devicePixelRatio) / devicePixelRatio + halfWidth;
}
function clearCanvas(canvas, ctx) {
  ctx = ctx || canvas.getContext('2d');
  ctx.save();
  ctx.resetTransform();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.restore();
}
function drawPoint(ctx, options, x, y) {
  let type, xOffset, yOffset, size, cornerRadius;
  const style = options.pointStyle;
  const rotation = options.rotation;
  const radius = options.radius;
  let rad = (rotation || 0) * RAD_PER_DEG;
  if (style && typeof style === 'object') {
    type = style.toString();
    if (type === '[object HTMLImageElement]' || type === '[object HTMLCanvasElement]') {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rad);
      ctx.drawImage(style, -style.width / 2, -style.height / 2, style.width, style.height);
      ctx.restore();
      return;
    }
  }
  if (isNaN(radius) || radius <= 0) {
    return;
  }
  ctx.beginPath();
  switch (style) {
  default:
    ctx.arc(x, y, radius, 0, TAU);
    ctx.closePath();
    break;
  case 'triangle':
    ctx.moveTo(x + Math.sin(rad) * radius, y - Math.cos(rad) * radius);
    rad += TWO_THIRDS_PI;
    ctx.lineTo(x + Math.sin(rad) * radius, y - Math.cos(rad) * radius);
    rad += TWO_THIRDS_PI;
    ctx.lineTo(x + Math.sin(rad) * radius, y - Math.cos(rad) * radius);
    ctx.closePath();
    break;
  case 'rectRounded':
    cornerRadius = radius * 0.516;
    size = radius - cornerRadius;
    xOffset = Math.cos(rad + QUARTER_PI) * size;
    yOffset = Math.sin(rad + QUARTER_PI) * size;
    ctx.arc(x - xOffset, y - yOffset, cornerRadius, rad - PI, rad - HALF_PI);
    ctx.arc(x + yOffset, y - xOffset, cornerRadius, rad - HALF_PI, rad);
    ctx.arc(x + xOffset, y + yOffset, cornerRadius, rad, rad + HALF_PI);
    ctx.arc(x - yOffset, y + xOffset, cornerRadius, rad + HALF_PI, rad + PI);
    ctx.closePath();
    break;
  case 'rect':
    if (!rotation) {
      size = Math.SQRT1_2 * radius;
      ctx.rect(x - size, y - size, 2 * size, 2 * size);
      break;
    }
    rad += QUARTER_PI;
  case 'rectRot':
    xOffset = Math.cos(rad) * radius;
    yOffset = Math.sin(rad) * radius;
    ctx.moveTo(x - xOffset, y - yOffset);
    ctx.lineTo(x + yOffset, y - xOffset);
    ctx.lineTo(x + xOffset, y + yOffset);
    ctx.lineTo(x - yOffset, y + xOffset);
    ctx.closePath();
    break;
  case 'crossRot':
    rad += QUARTER_PI;
  case 'cross':
    xOffset = Math.cos(rad) * radius;
    yOffset = Math.sin(rad) * radius;
    ctx.moveTo(x - xOffset, y - yOffset);
    ctx.lineTo(x + xOffset, y + yOffset);
    ctx.moveTo(x + yOffset, y - xOffset);
    ctx.lineTo(x - yOffset, y + xOffset);
    break;
  case 'star':
    xOffset = Math.cos(rad) * radius;
    yOffset = Math.sin(rad) * radius;
    ctx.moveTo(x - xOffset, y - yOffset);
    ctx.lineTo(x + xOffset, y + yOffset);
    ctx.moveTo(x + yOffset, y - xOffset);
    ctx.lineTo(x - yOffset, y + xOffset);
    rad += QUARTER_PI;
    xOffset = Math.cos(rad) * radius;
    yOffset = Math.sin(rad) * radius;
    ctx.moveTo(x - xOffset, y - yOffset);
    ctx.lineTo(x + xOffset, y + yOffset);
    ctx.moveTo(x + yOffset, y - xOffset);
    ctx.lineTo(x - yOffset, y + xOffset);
    break;
  case 'line':
    xOffset = Math.cos(rad) * radius;
    yOffset = Math.sin(rad) * radius;
    ctx.moveTo(x - xOffset, y - yOffset);
    ctx.lineTo(x + xOffset, y + yOffset);
    break;
  case 'dash':
    ctx.moveTo(x, y);
    ctx.lineTo(x + Math.cos(rad) * radius, y + Math.sin(rad) * radius);
    break;
  }
  ctx.fill();
  if (options.borderWidth > 0) {
    ctx.stroke();
  }
}
function _isPointInArea(point, area, margin) {
  margin = margin || 0.5;
  return !area || (point && point.x > area.left - margin && point.x < area.right + margin &&
		point.y > area.top - margin && point.y < area.bottom + margin);
}
function clipArea(ctx, area) {
  ctx.save();
  ctx.beginPath();
  ctx.rect(area.left, area.top, area.right - area.left, area.bottom - area.top);
  ctx.clip();
}
function unclipArea(ctx) {
  ctx.restore();
}
function _steppedLineTo(ctx, previous, target, flip, mode) {
  if (!previous) {
    return ctx.lineTo(target.x, target.y);
  }
  if (mode === 'middle') {
    const midpoint = (previous.x + target.x) / 2.0;
    ctx.lineTo(midpoint, previous.y);
    ctx.lineTo(midpoint, target.y);
  } else if (mode === 'after' !== !!flip) {
    ctx.lineTo(previous.x, target.y);
  } else {
    ctx.lineTo(target.x, previous.y);
  }
  ctx.lineTo(target.x, target.y);
}
function _bezierCurveTo(ctx, previous, target, flip) {
  if (!previous) {
    return ctx.lineTo(target.x, target.y);
  }
  ctx.bezierCurveTo(
    flip ? previous.cp1x : previous.cp2x,
    flip ? previous.cp1y : previous.cp2y,
    flip ? target.cp2x : target.cp1x,
    flip ? target.cp2y : target.cp1y,
    target.x,
    target.y);
}
function renderText(ctx, text, x, y, font, opts = {}) {
  const lines = isArray(text) ? text : [text];
  const stroke = opts.strokeWidth > 0 && opts.strokeColor !== '';
  let i, line;
  ctx.save();
  ctx.font = font.string;
  setRenderOpts(ctx, opts);
  for (i = 0; i < lines.length; ++i) {
    line = lines[i];
    if (stroke) {
      if (opts.strokeColor) {
        ctx.strokeStyle = opts.strokeColor;
      }
      if (!isNullOrUndef(opts.strokeWidth)) {
        ctx.lineWidth = opts.strokeWidth;
      }
      ctx.strokeText(line, x, y, opts.maxWidth);
    }
    ctx.fillText(line, x, y, opts.maxWidth);
    decorateText(ctx, x, y, line, opts);
    y += font.lineHeight;
  }
  ctx.restore();
}
function setRenderOpts(ctx, opts) {
  if (opts.translation) {
    ctx.translate(opts.translation[0], opts.translation[1]);
  }
  if (!isNullOrUndef(opts.rotation)) {
    ctx.rotate(opts.rotation);
  }
  if (opts.color) {
    ctx.fillStyle = opts.color;
  }
  if (opts.textAlign) {
    ctx.textAlign = opts.textAlign;
  }
  if (opts.textBaseline) {
    ctx.textBaseline = opts.textBaseline;
  }
}
function decorateText(ctx, x, y, line, opts) {
  if (opts.strikethrough || opts.underline) {
    const metrics = ctx.measureText(line);
    const left = x - metrics.actualBoundingBoxLeft;
    const right = x + metrics.actualBoundingBoxRight;
    const top = y - metrics.actualBoundingBoxAscent;
    const bottom = y + metrics.actualBoundingBoxDescent;
    const yDecoration = opts.strikethrough ? (top + bottom) / 2 : bottom;
    ctx.strokeStyle = ctx.fillStyle;
    ctx.beginPath();
    ctx.lineWidth = opts.decorationWidth || 2;
    ctx.moveTo(left, yDecoration);
    ctx.lineTo(right, yDecoration);
    ctx.stroke();
  }
}
function addRoundedRectPath(ctx, rect) {
  const {x, y, w, h, radius} = rect;
  ctx.arc(x + radius.topLeft, y + radius.topLeft, radius.topLeft, -HALF_PI, PI, true);
  ctx.lineTo(x, y + h - radius.bottomLeft);
  ctx.arc(x + radius.bottomLeft, y + h - radius.bottomLeft, radius.bottomLeft, PI, HALF_PI, true);
  ctx.lineTo(x + w - radius.bottomRight, y + h);
  ctx.arc(x + w - radius.bottomRight, y + h - radius.bottomRight, radius.bottomRight, HALF_PI, 0, true);
  ctx.lineTo(x + w, y + radius.topRight);
  ctx.arc(x + w - radius.topRight, y + radius.topRight, radius.topRight, 0, -HALF_PI, true);
  ctx.lineTo(x + radius.topLeft, y);
}

const LINE_HEIGHT = new RegExp(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
const FONT_STYLE = new RegExp(/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/);
function toLineHeight(value, size) {
  const matches = ('' + value).match(LINE_HEIGHT);
  if (!matches || matches[1] === 'normal') {
    return size * 1.2;
  }
  value = +matches[2];
  switch (matches[3]) {
  case 'px':
    return value;
  case '%':
    value /= 100;
    break;
  }
  return size * value;
}
const numberOrZero = v => +v || 0;
function _readValueToProps(value, props) {
  const ret = {};
  const objProps = isObject(props);
  const keys = objProps ? Object.keys(props) : props;
  const read = isObject(value)
    ? objProps
      ? prop => valueOrDefault(value[prop], value[props[prop]])
      : prop => value[prop]
    : () => value;
  for (const prop of keys) {
    ret[prop] = numberOrZero(read(prop));
  }
  return ret;
}
function toTRBL(value) {
  return _readValueToProps(value, {top: 'y', right: 'x', bottom: 'y', left: 'x'});
}
function toTRBLCorners(value) {
  return _readValueToProps(value, ['topLeft', 'topRight', 'bottomLeft', 'bottomRight']);
}
function toPadding(value) {
  const obj = toTRBL(value);
  obj.width = obj.left + obj.right;
  obj.height = obj.top + obj.bottom;
  return obj;
}
function toFont(options, fallback) {
  options = options || {};
  fallback = fallback || defaults.font;
  let size = valueOrDefault(options.size, fallback.size);
  if (typeof size === 'string') {
    size = parseInt(size, 10);
  }
  let style = valueOrDefault(options.style, fallback.style);
  if (style && !('' + style).match(FONT_STYLE)) {
    console.warn('Invalid font style specified: "' + style + '"');
    style = '';
  }
  const font = {
    family: valueOrDefault(options.family, fallback.family),
    lineHeight: toLineHeight(valueOrDefault(options.lineHeight, fallback.lineHeight), size),
    size,
    style,
    weight: valueOrDefault(options.weight, fallback.weight),
    string: ''
  };
  font.string = toFontString(font);
  return font;
}
function resolve(inputs, context, index, info) {
  let cacheable = true;
  let i, ilen, value;
  for (i = 0, ilen = inputs.length; i < ilen; ++i) {
    value = inputs[i];
    if (value === undefined) {
      continue;
    }
    if (context !== undefined && typeof value === 'function') {
      value = value(context);
      cacheable = false;
    }
    if (index !== undefined && isArray(value)) {
      value = value[index % value.length];
      cacheable = false;
    }
    if (value !== undefined) {
      if (info && !cacheable) {
        info.cacheable = false;
      }
      return value;
    }
  }
}
function _addGrace(minmax, grace, beginAtZero) {
  const {min, max} = minmax;
  const change = toDimension(grace, (max - min) / 2);
  const keepZero = (value, add) => beginAtZero && value === 0 ? 0 : value + add;
  return {
    min: keepZero(min, -Math.abs(change)),
    max: keepZero(max, change)
  };
}
function createContext(parentContext, context) {
  return Object.assign(Object.create(parentContext), context);
}

function _lookup(table, value, cmp) {
  cmp = cmp || ((index) => table[index] < value);
  let hi = table.length - 1;
  let lo = 0;
  let mid;
  while (hi - lo > 1) {
    mid = (lo + hi) >> 1;
    if (cmp(mid)) {
      lo = mid;
    } else {
      hi = mid;
    }
  }
  return {lo, hi};
}
const _lookupByKey = (table, key, value) =>
  _lookup(table, value, index => table[index][key] < value);
const _rlookupByKey = (table, key, value) =>
  _lookup(table, value, index => table[index][key] >= value);
function _filterBetween(values, min, max) {
  let start = 0;
  let end = values.length;
  while (start < end && values[start] < min) {
    start++;
  }
  while (end > start && values[end - 1] > max) {
    end--;
  }
  return start > 0 || end < values.length
    ? values.slice(start, end)
    : values;
}
const arrayEvents = ['push', 'pop', 'shift', 'splice', 'unshift'];
function listenArrayEvents(array, listener) {
  if (array._chartjs) {
    array._chartjs.listeners.push(listener);
    return;
  }
  Object.defineProperty(array, '_chartjs', {
    configurable: true,
    enumerable: false,
    value: {
      listeners: [listener]
    }
  });
  arrayEvents.forEach((key) => {
    const method = '_onData' + _capitalize(key);
    const base = array[key];
    Object.defineProperty(array, key, {
      configurable: true,
      enumerable: false,
      value(...args) {
        const res = base.apply(this, args);
        array._chartjs.listeners.forEach((object) => {
          if (typeof object[method] === 'function') {
            object[method](...args);
          }
        });
        return res;
      }
    });
  });
}
function unlistenArrayEvents(array, listener) {
  const stub = array._chartjs;
  if (!stub) {
    return;
  }
  const listeners = stub.listeners;
  const index = listeners.indexOf(listener);
  if (index !== -1) {
    listeners.splice(index, 1);
  }
  if (listeners.length > 0) {
    return;
  }
  arrayEvents.forEach((key) => {
    delete array[key];
  });
  delete array._chartjs;
}
function _arrayUnique(items) {
  const set = new Set();
  let i, ilen;
  for (i = 0, ilen = items.length; i < ilen; ++i) {
    set.add(items[i]);
  }
  if (set.size === ilen) {
    return items;
  }
  return Array.from(set);
}

function _createResolver(scopes, prefixes = [''], rootScopes = scopes, fallback, getTarget = () => scopes[0]) {
  if (!defined(fallback)) {
    fallback = _resolve('_fallback', scopes);
  }
  const cache = {
    [Symbol.toStringTag]: 'Object',
    _cacheable: true,
    _scopes: scopes,
    _rootScopes: rootScopes,
    _fallback: fallback,
    _getTarget: getTarget,
    override: (scope) => _createResolver([scope, ...scopes], prefixes, rootScopes, fallback),
  };
  return new Proxy(cache, {
    deleteProperty(target, prop) {
      delete target[prop];
      delete target._keys;
      delete scopes[0][prop];
      return true;
    },
    get(target, prop) {
      return _cached(target, prop,
        () => _resolveWithPrefixes(prop, prefixes, scopes, target));
    },
    getOwnPropertyDescriptor(target, prop) {
      return Reflect.getOwnPropertyDescriptor(target._scopes[0], prop);
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(scopes[0]);
    },
    has(target, prop) {
      return getKeysFromAllScopes(target).includes(prop);
    },
    ownKeys(target) {
      return getKeysFromAllScopes(target);
    },
    set(target, prop, value) {
      const storage = target._storage || (target._storage = getTarget());
      storage[prop] = value;
      delete target[prop];
      delete target._keys;
      return true;
    }
  });
}
function _attachContext(proxy, context, subProxy, descriptorDefaults) {
  const cache = {
    _cacheable: false,
    _proxy: proxy,
    _context: context,
    _subProxy: subProxy,
    _stack: new Set(),
    _descriptors: _descriptors(proxy, descriptorDefaults),
    setContext: (ctx) => _attachContext(proxy, ctx, subProxy, descriptorDefaults),
    override: (scope) => _attachContext(proxy.override(scope), context, subProxy, descriptorDefaults)
  };
  return new Proxy(cache, {
    deleteProperty(target, prop) {
      delete target[prop];
      delete proxy[prop];
      return true;
    },
    get(target, prop, receiver) {
      return _cached(target, prop,
        () => _resolveWithContext(target, prop, receiver));
    },
    getOwnPropertyDescriptor(target, prop) {
      return target._descriptors.allKeys
        ? Reflect.has(proxy, prop) ? {enumerable: true, configurable: true} : undefined
        : Reflect.getOwnPropertyDescriptor(proxy, prop);
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(proxy);
    },
    has(target, prop) {
      return Reflect.has(proxy, prop);
    },
    ownKeys() {
      return Reflect.ownKeys(proxy);
    },
    set(target, prop, value) {
      proxy[prop] = value;
      delete target[prop];
      return true;
    }
  });
}
function _descriptors(proxy, defaults = {scriptable: true, indexable: true}) {
  const {_scriptable = defaults.scriptable, _indexable = defaults.indexable, _allKeys = defaults.allKeys} = proxy;
  return {
    allKeys: _allKeys,
    scriptable: _scriptable,
    indexable: _indexable,
    isScriptable: isFunction(_scriptable) ? _scriptable : () => _scriptable,
    isIndexable: isFunction(_indexable) ? _indexable : () => _indexable
  };
}
const readKey = (prefix, name) => prefix ? prefix + _capitalize(name) : name;
const needsSubResolver = (prop, value) => isObject(value) && prop !== 'adapters' &&
  (Object.getPrototypeOf(value) === null || value.constructor === Object);
function _cached(target, prop, resolve) {
  if (Object.prototype.hasOwnProperty.call(target, prop)) {
    return target[prop];
  }
  const value = resolve();
  target[prop] = value;
  return value;
}
function _resolveWithContext(target, prop, receiver) {
  const {_proxy, _context, _subProxy, _descriptors: descriptors} = target;
  let value = _proxy[prop];
  if (isFunction(value) && descriptors.isScriptable(prop)) {
    value = _resolveScriptable(prop, value, target, receiver);
  }
  if (isArray(value) && value.length) {
    value = _resolveArray(prop, value, target, descriptors.isIndexable);
  }
  if (needsSubResolver(prop, value)) {
    value = _attachContext(value, _context, _subProxy && _subProxy[prop], descriptors);
  }
  return value;
}
function _resolveScriptable(prop, value, target, receiver) {
  const {_proxy, _context, _subProxy, _stack} = target;
  if (_stack.has(prop)) {
    throw new Error('Recursion detected: ' + Array.from(_stack).join('->') + '->' + prop);
  }
  _stack.add(prop);
  value = value(_context, _subProxy || receiver);
  _stack.delete(prop);
  if (needsSubResolver(prop, value)) {
    value = createSubResolver(_proxy._scopes, _proxy, prop, value);
  }
  return value;
}
function _resolveArray(prop, value, target, isIndexable) {
  const {_proxy, _context, _subProxy, _descriptors: descriptors} = target;
  if (defined(_context.index) && isIndexable(prop)) {
    value = value[_context.index % value.length];
  } else if (isObject(value[0])) {
    const arr = value;
    const scopes = _proxy._scopes.filter(s => s !== arr);
    value = [];
    for (const item of arr) {
      const resolver = createSubResolver(scopes, _proxy, prop, item);
      value.push(_attachContext(resolver, _context, _subProxy && _subProxy[prop], descriptors));
    }
  }
  return value;
}
function resolveFallback(fallback, prop, value) {
  return isFunction(fallback) ? fallback(prop, value) : fallback;
}
const getScope = (key, parent) => key === true ? parent
  : typeof key === 'string' ? resolveObjectKey(parent, key) : undefined;
function addScopes(set, parentScopes, key, parentFallback) {
  for (const parent of parentScopes) {
    const scope = getScope(key, parent);
    if (scope) {
      set.add(scope);
      const fallback = resolveFallback(scope._fallback, key, scope);
      if (defined(fallback) && fallback !== key && fallback !== parentFallback) {
        return fallback;
      }
    } else if (scope === false && defined(parentFallback) && key !== parentFallback) {
      return null;
    }
  }
  return false;
}
function createSubResolver(parentScopes, resolver, prop, value) {
  const rootScopes = resolver._rootScopes;
  const fallback = resolveFallback(resolver._fallback, prop, value);
  const allScopes = [...parentScopes, ...rootScopes];
  const set = new Set();
  set.add(value);
  let key = addScopesFromKey(set, allScopes, prop, fallback || prop);
  if (key === null) {
    return false;
  }
  if (defined(fallback) && fallback !== prop) {
    key = addScopesFromKey(set, allScopes, fallback, key);
    if (key === null) {
      return false;
    }
  }
  return _createResolver(Array.from(set), [''], rootScopes, fallback,
    () => subGetTarget(resolver, prop, value));
}
function addScopesFromKey(set, allScopes, key, fallback) {
  while (key) {
    key = addScopes(set, allScopes, key, fallback);
  }
  return key;
}
function subGetTarget(resolver, prop, value) {
  const parent = resolver._getTarget();
  if (!(prop in parent)) {
    parent[prop] = {};
  }
  const target = parent[prop];
  if (isArray(target) && isObject(value)) {
    return value;
  }
  return target;
}
function _resolveWithPrefixes(prop, prefixes, scopes, proxy) {
  let value;
  for (const prefix of prefixes) {
    value = _resolve(readKey(prefix, prop), scopes);
    if (defined(value)) {
      return needsSubResolver(prop, value)
        ? createSubResolver(scopes, proxy, prop, value)
        : value;
    }
  }
}
function _resolve(key, scopes) {
  for (const scope of scopes) {
    if (!scope) {
      continue;
    }
    const value = scope[key];
    if (defined(value)) {
      return value;
    }
  }
}
function getKeysFromAllScopes(target) {
  let keys = target._keys;
  if (!keys) {
    keys = target._keys = resolveKeysFromAllScopes(target._scopes);
  }
  return keys;
}
function resolveKeysFromAllScopes(scopes) {
  const set = new Set();
  for (const scope of scopes) {
    for (const key of Object.keys(scope).filter(k => !k.startsWith('_'))) {
      set.add(key);
    }
  }
  return Array.from(set);
}

const EPSILON = Number.EPSILON || 1e-14;
const getPoint = (points, i) => i < points.length && !points[i].skip && points[i];
const getValueAxis = (indexAxis) => indexAxis === 'x' ? 'y' : 'x';
function splineCurve(firstPoint, middlePoint, afterPoint, t) {
  const previous = firstPoint.skip ? middlePoint : firstPoint;
  const current = middlePoint;
  const next = afterPoint.skip ? middlePoint : afterPoint;
  const d01 = distanceBetweenPoints(current, previous);
  const d12 = distanceBetweenPoints(next, current);
  let s01 = d01 / (d01 + d12);
  let s12 = d12 / (d01 + d12);
  s01 = isNaN(s01) ? 0 : s01;
  s12 = isNaN(s12) ? 0 : s12;
  const fa = t * s01;
  const fb = t * s12;
  return {
    previous: {
      x: current.x - fa * (next.x - previous.x),
      y: current.y - fa * (next.y - previous.y)
    },
    next: {
      x: current.x + fb * (next.x - previous.x),
      y: current.y + fb * (next.y - previous.y)
    }
  };
}
function monotoneAdjust(points, deltaK, mK) {
  const pointsLen = points.length;
  let alphaK, betaK, tauK, squaredMagnitude, pointCurrent;
  let pointAfter = getPoint(points, 0);
  for (let i = 0; i < pointsLen - 1; ++i) {
    pointCurrent = pointAfter;
    pointAfter = getPoint(points, i + 1);
    if (!pointCurrent || !pointAfter) {
      continue;
    }
    if (almostEquals(deltaK[i], 0, EPSILON)) {
      mK[i] = mK[i + 1] = 0;
      continue;
    }
    alphaK = mK[i] / deltaK[i];
    betaK = mK[i + 1] / deltaK[i];
    squaredMagnitude = Math.pow(alphaK, 2) + Math.pow(betaK, 2);
    if (squaredMagnitude <= 9) {
      continue;
    }
    tauK = 3 / Math.sqrt(squaredMagnitude);
    mK[i] = alphaK * tauK * deltaK[i];
    mK[i + 1] = betaK * tauK * deltaK[i];
  }
}
function monotoneCompute(points, mK, indexAxis = 'x') {
  const valueAxis = getValueAxis(indexAxis);
  const pointsLen = points.length;
  let delta, pointBefore, pointCurrent;
  let pointAfter = getPoint(points, 0);
  for (let i = 0; i < pointsLen; ++i) {
    pointBefore = pointCurrent;
    pointCurrent = pointAfter;
    pointAfter = getPoint(points, i + 1);
    if (!pointCurrent) {
      continue;
    }
    const iPixel = pointCurrent[indexAxis];
    const vPixel = pointCurrent[valueAxis];
    if (pointBefore) {
      delta = (iPixel - pointBefore[indexAxis]) / 3;
      pointCurrent[`cp1${indexAxis}`] = iPixel - delta;
      pointCurrent[`cp1${valueAxis}`] = vPixel - delta * mK[i];
    }
    if (pointAfter) {
      delta = (pointAfter[indexAxis] - iPixel) / 3;
      pointCurrent[`cp2${indexAxis}`] = iPixel + delta;
      pointCurrent[`cp2${valueAxis}`] = vPixel + delta * mK[i];
    }
  }
}
function splineCurveMonotone(points, indexAxis = 'x') {
  const valueAxis = getValueAxis(indexAxis);
  const pointsLen = points.length;
  const deltaK = Array(pointsLen).fill(0);
  const mK = Array(pointsLen);
  let i, pointBefore, pointCurrent;
  let pointAfter = getPoint(points, 0);
  for (i = 0; i < pointsLen; ++i) {
    pointBefore = pointCurrent;
    pointCurrent = pointAfter;
    pointAfter = getPoint(points, i + 1);
    if (!pointCurrent) {
      continue;
    }
    if (pointAfter) {
      const slopeDelta = pointAfter[indexAxis] - pointCurrent[indexAxis];
      deltaK[i] = slopeDelta !== 0 ? (pointAfter[valueAxis] - pointCurrent[valueAxis]) / slopeDelta : 0;
    }
    mK[i] = !pointBefore ? deltaK[i]
      : !pointAfter ? deltaK[i - 1]
      : (sign(deltaK[i - 1]) !== sign(deltaK[i])) ? 0
      : (deltaK[i - 1] + deltaK[i]) / 2;
  }
  monotoneAdjust(points, deltaK, mK);
  monotoneCompute(points, mK, indexAxis);
}
function capControlPoint(pt, min, max) {
  return Math.max(Math.min(pt, max), min);
}
function capBezierPoints(points, area) {
  let i, ilen, point, inArea, inAreaPrev;
  let inAreaNext = _isPointInArea(points[0], area);
  for (i = 0, ilen = points.length; i < ilen; ++i) {
    inAreaPrev = inArea;
    inArea = inAreaNext;
    inAreaNext = i < ilen - 1 && _isPointInArea(points[i + 1], area);
    if (!inArea) {
      continue;
    }
    point = points[i];
    if (inAreaPrev) {
      point.cp1x = capControlPoint(point.cp1x, area.left, area.right);
      point.cp1y = capControlPoint(point.cp1y, area.top, area.bottom);
    }
    if (inAreaNext) {
      point.cp2x = capControlPoint(point.cp2x, area.left, area.right);
      point.cp2y = capControlPoint(point.cp2y, area.top, area.bottom);
    }
  }
}
function _updateBezierControlPoints(points, options, area, loop, indexAxis) {
  let i, ilen, point, controlPoints;
  if (options.spanGaps) {
    points = points.filter((pt) => !pt.skip);
  }
  if (options.cubicInterpolationMode === 'monotone') {
    splineCurveMonotone(points, indexAxis);
  } else {
    let prev = loop ? points[points.length - 1] : points[0];
    for (i = 0, ilen = points.length; i < ilen; ++i) {
      point = points[i];
      controlPoints = splineCurve(
        prev,
        point,
        points[Math.min(i + 1, ilen - (loop ? 0 : 1)) % ilen],
        options.tension
      );
      point.cp1x = controlPoints.previous.x;
      point.cp1y = controlPoints.previous.y;
      point.cp2x = controlPoints.next.x;
      point.cp2y = controlPoints.next.y;
      prev = point;
    }
  }
  if (options.capBezierPoints) {
    capBezierPoints(points, area);
  }
}

function _isDomSupported() {
  return typeof window !== 'undefined' && typeof document !== 'undefined';
}
function _getParentNode(domNode) {
  let parent = domNode.parentNode;
  if (parent && parent.toString() === '[object ShadowRoot]') {
    parent = parent.host;
  }
  return parent;
}
function parseMaxStyle(styleValue, node, parentProperty) {
  let valueInPixels;
  if (typeof styleValue === 'string') {
    valueInPixels = parseInt(styleValue, 10);
    if (styleValue.indexOf('%') !== -1) {
      valueInPixels = valueInPixels / 100 * node.parentNode[parentProperty];
    }
  } else {
    valueInPixels = styleValue;
  }
  return valueInPixels;
}
const getComputedStyle = (element) => window.getComputedStyle(element, null);
function getStyle(el, property) {
  return getComputedStyle(el).getPropertyValue(property);
}
const positions = ['top', 'right', 'bottom', 'left'];
function getPositionedStyle(styles, style, suffix) {
  const result = {};
  suffix = suffix ? '-' + suffix : '';
  for (let i = 0; i < 4; i++) {
    const pos = positions[i];
    result[pos] = parseFloat(styles[style + '-' + pos + suffix]) || 0;
  }
  result.width = result.left + result.right;
  result.height = result.top + result.bottom;
  return result;
}
const useOffsetPos = (x, y, target) => (x > 0 || y > 0) && (!target || !target.shadowRoot);
function getCanvasPosition(evt, canvas) {
  const e = evt.native || evt;
  const touches = e.touches;
  const source = touches && touches.length ? touches[0] : e;
  const {offsetX, offsetY} = source;
  let box = false;
  let x, y;
  if (useOffsetPos(offsetX, offsetY, e.target)) {
    x = offsetX;
    y = offsetY;
  } else {
    const rect = canvas.getBoundingClientRect();
    x = source.clientX - rect.left;
    y = source.clientY - rect.top;
    box = true;
  }
  return {x, y, box};
}
function getRelativePosition(evt, chart) {
  const {canvas, currentDevicePixelRatio} = chart;
  const style = getComputedStyle(canvas);
  const borderBox = style.boxSizing === 'border-box';
  const paddings = getPositionedStyle(style, 'padding');
  const borders = getPositionedStyle(style, 'border', 'width');
  const {x, y, box} = getCanvasPosition(evt, canvas);
  const xOffset = paddings.left + (box && borders.left);
  const yOffset = paddings.top + (box && borders.top);
  let {width, height} = chart;
  if (borderBox) {
    width -= paddings.width + borders.width;
    height -= paddings.height + borders.height;
  }
  return {
    x: Math.round((x - xOffset) / width * canvas.width / currentDevicePixelRatio),
    y: Math.round((y - yOffset) / height * canvas.height / currentDevicePixelRatio)
  };
}
function getContainerSize(canvas, width, height) {
  let maxWidth, maxHeight;
  if (width === undefined || height === undefined) {
    const container = _getParentNode(canvas);
    if (!container) {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
    } else {
      const rect = container.getBoundingClientRect();
      const containerStyle = getComputedStyle(container);
      const containerBorder = getPositionedStyle(containerStyle, 'border', 'width');
      const containerPadding = getPositionedStyle(containerStyle, 'padding');
      width = rect.width - containerPadding.width - containerBorder.width;
      height = rect.height - containerPadding.height - containerBorder.height;
      maxWidth = parseMaxStyle(containerStyle.maxWidth, container, 'clientWidth');
      maxHeight = parseMaxStyle(containerStyle.maxHeight, container, 'clientHeight');
    }
  }
  return {
    width,
    height,
    maxWidth: maxWidth || INFINITY,
    maxHeight: maxHeight || INFINITY
  };
}
const round1 = v => Math.round(v * 10) / 10;
function getMaximumSize(canvas, bbWidth, bbHeight, aspectRatio) {
  const style = getComputedStyle(canvas);
  const margins = getPositionedStyle(style, 'margin');
  const maxWidth = parseMaxStyle(style.maxWidth, canvas, 'clientWidth') || INFINITY;
  const maxHeight = parseMaxStyle(style.maxHeight, canvas, 'clientHeight') || INFINITY;
  const containerSize = getContainerSize(canvas, bbWidth, bbHeight);
  let {width, height} = containerSize;
  if (style.boxSizing === 'content-box') {
    const borders = getPositionedStyle(style, 'border', 'width');
    const paddings = getPositionedStyle(style, 'padding');
    width -= paddings.width + borders.width;
    height -= paddings.height + borders.height;
  }
  width = Math.max(0, width - margins.width);
  height = Math.max(0, aspectRatio ? Math.floor(width / aspectRatio) : height - margins.height);
  width = round1(Math.min(width, maxWidth, containerSize.maxWidth));
  height = round1(Math.min(height, maxHeight, containerSize.maxHeight));
  if (width && !height) {
    height = round1(width / 2);
  }
  return {
    width,
    height
  };
}
function retinaScale(chart, forceRatio, forceStyle) {
  const pixelRatio = forceRatio || 1;
  const deviceHeight = Math.floor(chart.height * pixelRatio);
  const deviceWidth = Math.floor(chart.width * pixelRatio);
  chart.height = deviceHeight / pixelRatio;
  chart.width = deviceWidth / pixelRatio;
  const canvas = chart.canvas;
  if (canvas.style && (forceStyle || (!canvas.style.height && !canvas.style.width))) {
    canvas.style.height = `${chart.height}px`;
    canvas.style.width = `${chart.width}px`;
  }
  if (chart.currentDevicePixelRatio !== pixelRatio
      || canvas.height !== deviceHeight
      || canvas.width !== deviceWidth) {
    chart.currentDevicePixelRatio = pixelRatio;
    canvas.height = deviceHeight;
    canvas.width = deviceWidth;
    chart.ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    return true;
  }
  return false;
}
const supportsEventListenerOptions = (function() {
  let passiveSupported = false;
  try {
    const options = {
      get passive() {
        passiveSupported = true;
        return false;
      }
    };
    window.addEventListener('test', null, options);
    window.removeEventListener('test', null, options);
  } catch (e) {
  }
  return passiveSupported;
}());
function readUsedSize(element, property) {
  const value = getStyle(element, property);
  const matches = value && value.match(/^(\d+)(\.\d+)?px$/);
  return matches ? +matches[1] : undefined;
}

function _pointInLine(p1, p2, t, mode) {
  return {
    x: p1.x + t * (p2.x - p1.x),
    y: p1.y + t * (p2.y - p1.y)
  };
}
function _steppedInterpolation(p1, p2, t, mode) {
  return {
    x: p1.x + t * (p2.x - p1.x),
    y: mode === 'middle' ? t < 0.5 ? p1.y : p2.y
    : mode === 'after' ? t < 1 ? p1.y : p2.y
    : t > 0 ? p2.y : p1.y
  };
}
function _bezierInterpolation(p1, p2, t, mode) {
  const cp1 = {x: p1.cp2x, y: p1.cp2y};
  const cp2 = {x: p2.cp1x, y: p2.cp1y};
  const a = _pointInLine(p1, cp1, t);
  const b = _pointInLine(cp1, cp2, t);
  const c = _pointInLine(cp2, p2, t);
  const d = _pointInLine(a, b, t);
  const e = _pointInLine(b, c, t);
  return _pointInLine(d, e, t);
}

const intlCache = new Map();
function getNumberFormat(locale, options) {
  options = options || {};
  const cacheKey = locale + JSON.stringify(options);
  let formatter = intlCache.get(cacheKey);
  if (!formatter) {
    formatter = new Intl.NumberFormat(locale, options);
    intlCache.set(cacheKey, formatter);
  }
  return formatter;
}
function formatNumber(num, locale, options) {
  return getNumberFormat(locale, options).format(num);
}

const getRightToLeftAdapter = function(rectX, width) {
  return {
    x(x) {
      return rectX + rectX + width - x;
    },
    setWidth(w) {
      width = w;
    },
    textAlign(align) {
      if (align === 'center') {
        return align;
      }
      return align === 'right' ? 'left' : 'right';
    },
    xPlus(x, value) {
      return x - value;
    },
    leftForLtr(x, itemWidth) {
      return x - itemWidth;
    },
  };
};
const getLeftToRightAdapter = function() {
  return {
    x(x) {
      return x;
    },
    setWidth(w) {
    },
    textAlign(align) {
      return align;
    },
    xPlus(x, value) {
      return x + value;
    },
    leftForLtr(x, _itemWidth) {
      return x;
    },
  };
};
function getRtlAdapter(rtl, rectX, width) {
  return rtl ? getRightToLeftAdapter(rectX, width) : getLeftToRightAdapter();
}
function overrideTextDirection(ctx, direction) {
  let style, original;
  if (direction === 'ltr' || direction === 'rtl') {
    style = ctx.canvas.style;
    original = [
      style.getPropertyValue('direction'),
      style.getPropertyPriority('direction'),
    ];
    style.setProperty('direction', direction, 'important');
    ctx.prevTextDirection = original;
  }
}
function restoreTextDirection(ctx, original) {
  if (original !== undefined) {
    delete ctx.prevTextDirection;
    ctx.canvas.style.setProperty('direction', original[0], original[1]);
  }
}

function propertyFn(property) {
  if (property === 'angle') {
    return {
      between: _angleBetween,
      compare: _angleDiff,
      normalize: _normalizeAngle,
    };
  }
  return {
    between: _isBetween,
    compare: (a, b) => a - b,
    normalize: x => x
  };
}
function normalizeSegment({start, end, count, loop, style}) {
  return {
    start: start % count,
    end: end % count,
    loop: loop && (end - start + 1) % count === 0,
    style
  };
}
function getSegment(segment, points, bounds) {
  const {property, start: startBound, end: endBound} = bounds;
  const {between, normalize} = propertyFn(property);
  const count = points.length;
  let {start, end, loop} = segment;
  let i, ilen;
  if (loop) {
    start += count;
    end += count;
    for (i = 0, ilen = count; i < ilen; ++i) {
      if (!between(normalize(points[start % count][property]), startBound, endBound)) {
        break;
      }
      start--;
      end--;
    }
    start %= count;
    end %= count;
  }
  if (end < start) {
    end += count;
  }
  return {start, end, loop, style: segment.style};
}
function _boundSegment(segment, points, bounds) {
  if (!bounds) {
    return [segment];
  }
  const {property, start: startBound, end: endBound} = bounds;
  const count = points.length;
  const {compare, between, normalize} = propertyFn(property);
  const {start, end, loop, style} = getSegment(segment, points, bounds);
  const result = [];
  let inside = false;
  let subStart = null;
  let value, point, prevValue;
  const startIsBefore = () => between(startBound, prevValue, value) && compare(startBound, prevValue) !== 0;
  const endIsBefore = () => compare(endBound, value) === 0 || between(endBound, prevValue, value);
  const shouldStart = () => inside || startIsBefore();
  const shouldStop = () => !inside || endIsBefore();
  for (let i = start, prev = start; i <= end; ++i) {
    point = points[i % count];
    if (point.skip) {
      continue;
    }
    value = normalize(point[property]);
    if (value === prevValue) {
      continue;
    }
    inside = between(value, startBound, endBound);
    if (subStart === null && shouldStart()) {
      subStart = compare(value, startBound) === 0 ? i : prev;
    }
    if (subStart !== null && shouldStop()) {
      result.push(normalizeSegment({start: subStart, end: i, loop, count, style}));
      subStart = null;
    }
    prev = i;
    prevValue = value;
  }
  if (subStart !== null) {
    result.push(normalizeSegment({start: subStart, end, loop, count, style}));
  }
  return result;
}
function _boundSegments(line, bounds) {
  const result = [];
  const segments = line.segments;
  for (let i = 0; i < segments.length; i++) {
    const sub = _boundSegment(segments[i], line.points, bounds);
    if (sub.length) {
      result.push(...sub);
    }
  }
  return result;
}
function findStartAndEnd(points, count, loop, spanGaps) {
  let start = 0;
  let end = count - 1;
  if (loop && !spanGaps) {
    while (start < count && !points[start].skip) {
      start++;
    }
  }
  while (start < count && points[start].skip) {
    start++;
  }
  start %= count;
  if (loop) {
    end += start;
  }
  while (end > start && points[end % count].skip) {
    end--;
  }
  end %= count;
  return {start, end};
}
function solidSegments(points, start, max, loop) {
  const count = points.length;
  const result = [];
  let last = start;
  let prev = points[start];
  let end;
  for (end = start + 1; end <= max; ++end) {
    const cur = points[end % count];
    if (cur.skip || cur.stop) {
      if (!prev.skip) {
        loop = false;
        result.push({start: start % count, end: (end - 1) % count, loop});
        start = last = cur.stop ? end : null;
      }
    } else {
      last = end;
      if (prev.skip) {
        start = end;
      }
    }
    prev = cur;
  }
  if (last !== null) {
    result.push({start: start % count, end: last % count, loop});
  }
  return result;
}
function _computeSegments(line, segmentOptions) {
  const points = line.points;
  const spanGaps = line.options.spanGaps;
  const count = points.length;
  if (!count) {
    return [];
  }
  const loop = !!line._loop;
  const {start, end} = findStartAndEnd(points, count, loop, spanGaps);
  if (spanGaps === true) {
    return splitByStyles(line, [{start, end, loop}], points, segmentOptions);
  }
  const max = end < start ? end + count : end;
  const completeLoop = !!line._fullLoop && start === 0 && end === count - 1;
  return splitByStyles(line, solidSegments(points, start, max, completeLoop), points, segmentOptions);
}
function splitByStyles(line, segments, points, segmentOptions) {
  if (!segmentOptions || !segmentOptions.setContext || !points) {
    return segments;
  }
  return doSplitByStyles(line, segments, points, segmentOptions);
}
function doSplitByStyles(line, segments, points, segmentOptions) {
  const chartContext = line._chart.getContext();
  const baseStyle = readStyle(line.options);
  const {_datasetIndex: datasetIndex, options: {spanGaps}} = line;
  const count = points.length;
  const result = [];
  let prevStyle = baseStyle;
  let start = segments[0].start;
  let i = start;
  function addStyle(s, e, l, st) {
    const dir = spanGaps ? -1 : 1;
    if (s === e) {
      return;
    }
    s += count;
    while (points[s % count].skip) {
      s -= dir;
    }
    while (points[e % count].skip) {
      e += dir;
    }
    if (s % count !== e % count) {
      result.push({start: s % count, end: e % count, loop: l, style: st});
      prevStyle = st;
      start = e % count;
    }
  }
  for (const segment of segments) {
    start = spanGaps ? start : segment.start;
    let prev = points[start % count];
    let style;
    for (i = start + 1; i <= segment.end; i++) {
      const pt = points[i % count];
      style = readStyle(segmentOptions.setContext(createContext(chartContext, {
        type: 'segment',
        p0: prev,
        p1: pt,
        p0DataIndex: (i - 1) % count,
        p1DataIndex: i % count,
        datasetIndex
      })));
      if (styleChanged(style, prevStyle)) {
        addStyle(start, i - 1, segment.loop, prevStyle);
      }
      prev = pt;
      prevStyle = style;
    }
    if (start < i - 1) {
      addStyle(start, i - 1, segment.loop, prevStyle);
    }
  }
  return result;
}
function readStyle(options) {
  return {
    backgroundColor: options.backgroundColor,
    borderCapStyle: options.borderCapStyle,
    borderDash: options.borderDash,
    borderDashOffset: options.borderDashOffset,
    borderJoinStyle: options.borderJoinStyle,
    borderWidth: options.borderWidth,
    borderColor: options.borderColor
  };
}
function styleChanged(style, prevStyle) {
  return prevStyle && JSON.stringify(style) !== JSON.stringify(prevStyle);
}



;// CONCATENATED MODULE: ./node_modules/chart.js/dist/chart.esm.js
/*!
 * Chart.js v3.6.1
 * https://www.chartjs.org
 * (c) 2021 Chart.js Contributors
 * Released under the MIT License
 */



class Animator {
  constructor() {
    this._request = null;
    this._charts = new Map();
    this._running = false;
    this._lastDate = undefined;
  }
  _notify(chart, anims, date, type) {
    const callbacks = anims.listeners[type];
    const numSteps = anims.duration;
    callbacks.forEach(fn => fn({
      chart,
      initial: anims.initial,
      numSteps,
      currentStep: Math.min(date - anims.start, numSteps)
    }));
  }
  _refresh() {
    if (this._request) {
      return;
    }
    this._running = true;
    this._request = requestAnimFrame.call(window, () => {
      this._update();
      this._request = null;
      if (this._running) {
        this._refresh();
      }
    });
  }
  _update(date = Date.now()) {
    let remaining = 0;
    this._charts.forEach((anims, chart) => {
      if (!anims.running || !anims.items.length) {
        return;
      }
      const items = anims.items;
      let i = items.length - 1;
      let draw = false;
      let item;
      for (; i >= 0; --i) {
        item = items[i];
        if (item._active) {
          if (item._total > anims.duration) {
            anims.duration = item._total;
          }
          item.tick(date);
          draw = true;
        } else {
          items[i] = items[items.length - 1];
          items.pop();
        }
      }
      if (draw) {
        chart.draw();
        this._notify(chart, anims, date, 'progress');
      }
      if (!items.length) {
        anims.running = false;
        this._notify(chart, anims, date, 'complete');
        anims.initial = false;
      }
      remaining += items.length;
    });
    this._lastDate = date;
    if (remaining === 0) {
      this._running = false;
    }
  }
  _getAnims(chart) {
    const charts = this._charts;
    let anims = charts.get(chart);
    if (!anims) {
      anims = {
        running: false,
        initial: true,
        items: [],
        listeners: {
          complete: [],
          progress: []
        }
      };
      charts.set(chart, anims);
    }
    return anims;
  }
  listen(chart, event, cb) {
    this._getAnims(chart).listeners[event].push(cb);
  }
  add(chart, items) {
    if (!items || !items.length) {
      return;
    }
    this._getAnims(chart).items.push(...items);
  }
  has(chart) {
    return this._getAnims(chart).items.length > 0;
  }
  start(chart) {
    const anims = this._charts.get(chart);
    if (!anims) {
      return;
    }
    anims.running = true;
    anims.start = Date.now();
    anims.duration = anims.items.reduce((acc, cur) => Math.max(acc, cur._duration), 0);
    this._refresh();
  }
  running(chart) {
    if (!this._running) {
      return false;
    }
    const anims = this._charts.get(chart);
    if (!anims || !anims.running || !anims.items.length) {
      return false;
    }
    return true;
  }
  stop(chart) {
    const anims = this._charts.get(chart);
    if (!anims || !anims.items.length) {
      return;
    }
    const items = anims.items;
    let i = items.length - 1;
    for (; i >= 0; --i) {
      items[i].cancel();
    }
    anims.items = [];
    this._notify(chart, anims, Date.now(), 'complete');
  }
  remove(chart) {
    return this._charts.delete(chart);
  }
}
var animator = new Animator();

const transparent = 'transparent';
const interpolators = {
  boolean(from, to, factor) {
    return factor > 0.5 ? to : from;
  },
  color(from, to, factor) {
    const c0 = color(from || transparent);
    const c1 = c0.valid && color(to || transparent);
    return c1 && c1.valid
      ? c1.mix(c0, factor).hexString()
      : to;
  },
  number(from, to, factor) {
    return from + (to - from) * factor;
  }
};
class Animation {
  constructor(cfg, target, prop, to) {
    const currentValue = target[prop];
    to = resolve([cfg.to, to, currentValue, cfg.from]);
    const from = resolve([cfg.from, currentValue, to]);
    this._active = true;
    this._fn = cfg.fn || interpolators[cfg.type || typeof from];
    this._easing = effects[cfg.easing] || effects.linear;
    this._start = Math.floor(Date.now() + (cfg.delay || 0));
    this._duration = this._total = Math.floor(cfg.duration);
    this._loop = !!cfg.loop;
    this._target = target;
    this._prop = prop;
    this._from = from;
    this._to = to;
    this._promises = undefined;
  }
  active() {
    return this._active;
  }
  update(cfg, to, date) {
    if (this._active) {
      this._notify(false);
      const currentValue = this._target[this._prop];
      const elapsed = date - this._start;
      const remain = this._duration - elapsed;
      this._start = date;
      this._duration = Math.floor(Math.max(remain, cfg.duration));
      this._total += elapsed;
      this._loop = !!cfg.loop;
      this._to = resolve([cfg.to, to, currentValue, cfg.from]);
      this._from = resolve([cfg.from, currentValue, to]);
    }
  }
  cancel() {
    if (this._active) {
      this.tick(Date.now());
      this._active = false;
      this._notify(false);
    }
  }
  tick(date) {
    const elapsed = date - this._start;
    const duration = this._duration;
    const prop = this._prop;
    const from = this._from;
    const loop = this._loop;
    const to = this._to;
    let factor;
    this._active = from !== to && (loop || (elapsed < duration));
    if (!this._active) {
      this._target[prop] = to;
      this._notify(true);
      return;
    }
    if (elapsed < 0) {
      this._target[prop] = from;
      return;
    }
    factor = (elapsed / duration) % 2;
    factor = loop && factor > 1 ? 2 - factor : factor;
    factor = this._easing(Math.min(1, Math.max(0, factor)));
    this._target[prop] = this._fn(from, to, factor);
  }
  wait() {
    const promises = this._promises || (this._promises = []);
    return new Promise((res, rej) => {
      promises.push({res, rej});
    });
  }
  _notify(resolved) {
    const method = resolved ? 'res' : 'rej';
    const promises = this._promises || [];
    for (let i = 0; i < promises.length; i++) {
      promises[i][method]();
    }
  }
}

const numbers = ['x', 'y', 'borderWidth', 'radius', 'tension'];
const colors = ['color', 'borderColor', 'backgroundColor'];
defaults.set('animation', {
  delay: undefined,
  duration: 1000,
  easing: 'easeOutQuart',
  fn: undefined,
  from: undefined,
  loop: undefined,
  to: undefined,
  type: undefined,
});
const animationOptions = Object.keys(defaults.animation);
defaults.describe('animation', {
  _fallback: false,
  _indexable: false,
  _scriptable: (name) => name !== 'onProgress' && name !== 'onComplete' && name !== 'fn',
});
defaults.set('animations', {
  colors: {
    type: 'color',
    properties: colors
  },
  numbers: {
    type: 'number',
    properties: numbers
  },
});
defaults.describe('animations', {
  _fallback: 'animation',
});
defaults.set('transitions', {
  active: {
    animation: {
      duration: 400
    }
  },
  resize: {
    animation: {
      duration: 0
    }
  },
  show: {
    animations: {
      colors: {
        from: 'transparent'
      },
      visible: {
        type: 'boolean',
        duration: 0
      },
    }
  },
  hide: {
    animations: {
      colors: {
        to: 'transparent'
      },
      visible: {
        type: 'boolean',
        easing: 'linear',
        fn: v => v | 0
      },
    }
  }
});
class Animations {
  constructor(chart, config) {
    this._chart = chart;
    this._properties = new Map();
    this.configure(config);
  }
  configure(config) {
    if (!isObject(config)) {
      return;
    }
    const animatedProps = this._properties;
    Object.getOwnPropertyNames(config).forEach(key => {
      const cfg = config[key];
      if (!isObject(cfg)) {
        return;
      }
      const resolved = {};
      for (const option of animationOptions) {
        resolved[option] = cfg[option];
      }
      (isArray(cfg.properties) && cfg.properties || [key]).forEach((prop) => {
        if (prop === key || !animatedProps.has(prop)) {
          animatedProps.set(prop, resolved);
        }
      });
    });
  }
  _animateOptions(target, values) {
    const newOptions = values.options;
    const options = resolveTargetOptions(target, newOptions);
    if (!options) {
      return [];
    }
    const animations = this._createAnimations(options, newOptions);
    if (newOptions.$shared) {
      awaitAll(target.options.$animations, newOptions).then(() => {
        target.options = newOptions;
      }, () => {
      });
    }
    return animations;
  }
  _createAnimations(target, values) {
    const animatedProps = this._properties;
    const animations = [];
    const running = target.$animations || (target.$animations = {});
    const props = Object.keys(values);
    const date = Date.now();
    let i;
    for (i = props.length - 1; i >= 0; --i) {
      const prop = props[i];
      if (prop.charAt(0) === '$') {
        continue;
      }
      if (prop === 'options') {
        animations.push(...this._animateOptions(target, values));
        continue;
      }
      const value = values[prop];
      let animation = running[prop];
      const cfg = animatedProps.get(prop);
      if (animation) {
        if (cfg && animation.active()) {
          animation.update(cfg, value, date);
          continue;
        } else {
          animation.cancel();
        }
      }
      if (!cfg || !cfg.duration) {
        target[prop] = value;
        continue;
      }
      running[prop] = animation = new Animation(cfg, target, prop, value);
      animations.push(animation);
    }
    return animations;
  }
  update(target, values) {
    if (this._properties.size === 0) {
      Object.assign(target, values);
      return;
    }
    const animations = this._createAnimations(target, values);
    if (animations.length) {
      animator.add(this._chart, animations);
      return true;
    }
  }
}
function awaitAll(animations, properties) {
  const running = [];
  const keys = Object.keys(properties);
  for (let i = 0; i < keys.length; i++) {
    const anim = animations[keys[i]];
    if (anim && anim.active()) {
      running.push(anim.wait());
    }
  }
  return Promise.all(running);
}
function resolveTargetOptions(target, newOptions) {
  if (!newOptions) {
    return;
  }
  let options = target.options;
  if (!options) {
    target.options = newOptions;
    return;
  }
  if (options.$shared) {
    target.options = options = Object.assign({}, options, {$shared: false, $animations: {}});
  }
  return options;
}

function scaleClip(scale, allowedOverflow) {
  const opts = scale && scale.options || {};
  const reverse = opts.reverse;
  const min = opts.min === undefined ? allowedOverflow : 0;
  const max = opts.max === undefined ? allowedOverflow : 0;
  return {
    start: reverse ? max : min,
    end: reverse ? min : max
  };
}
function defaultClip(xScale, yScale, allowedOverflow) {
  if (allowedOverflow === false) {
    return false;
  }
  const x = scaleClip(xScale, allowedOverflow);
  const y = scaleClip(yScale, allowedOverflow);
  return {
    top: y.end,
    right: x.end,
    bottom: y.start,
    left: x.start
  };
}
function toClip(value) {
  let t, r, b, l;
  if (isObject(value)) {
    t = value.top;
    r = value.right;
    b = value.bottom;
    l = value.left;
  } else {
    t = r = b = l = value;
  }
  return {
    top: t,
    right: r,
    bottom: b,
    left: l,
    disabled: value === false
  };
}
function getSortedDatasetIndices(chart, filterVisible) {
  const keys = [];
  const metasets = chart._getSortedDatasetMetas(filterVisible);
  let i, ilen;
  for (i = 0, ilen = metasets.length; i < ilen; ++i) {
    keys.push(metasets[i].index);
  }
  return keys;
}
function applyStack(stack, value, dsIndex, options = {}) {
  const keys = stack.keys;
  const singleMode = options.mode === 'single';
  let i, ilen, datasetIndex, otherValue;
  if (value === null) {
    return;
  }
  for (i = 0, ilen = keys.length; i < ilen; ++i) {
    datasetIndex = +keys[i];
    if (datasetIndex === dsIndex) {
      if (options.all) {
        continue;
      }
      break;
    }
    otherValue = stack.values[datasetIndex];
    if (isNumberFinite(otherValue) && (singleMode || (value === 0 || sign(value) === sign(otherValue)))) {
      value += otherValue;
    }
  }
  return value;
}
function convertObjectDataToArray(data) {
  const keys = Object.keys(data);
  const adata = new Array(keys.length);
  let i, ilen, key;
  for (i = 0, ilen = keys.length; i < ilen; ++i) {
    key = keys[i];
    adata[i] = {
      x: key,
      y: data[key]
    };
  }
  return adata;
}
function isStacked(scale, meta) {
  const stacked = scale && scale.options.stacked;
  return stacked || (stacked === undefined && meta.stack !== undefined);
}
function getStackKey(indexScale, valueScale, meta) {
  return `${indexScale.id}.${valueScale.id}.${meta.stack || meta.type}`;
}
function getUserBounds(scale) {
  const {min, max, minDefined, maxDefined} = scale.getUserBounds();
  return {
    min: minDefined ? min : Number.NEGATIVE_INFINITY,
    max: maxDefined ? max : Number.POSITIVE_INFINITY
  };
}
function getOrCreateStack(stacks, stackKey, indexValue) {
  const subStack = stacks[stackKey] || (stacks[stackKey] = {});
  return subStack[indexValue] || (subStack[indexValue] = {});
}
function getLastIndexInStack(stack, vScale, positive, type) {
  for (const meta of vScale.getMatchingVisibleMetas(type).reverse()) {
    const value = stack[meta.index];
    if ((positive && value > 0) || (!positive && value < 0)) {
      return meta.index;
    }
  }
  return null;
}
function updateStacks(controller, parsed) {
  const {chart, _cachedMeta: meta} = controller;
  const stacks = chart._stacks || (chart._stacks = {});
  const {iScale, vScale, index: datasetIndex} = meta;
  const iAxis = iScale.axis;
  const vAxis = vScale.axis;
  const key = getStackKey(iScale, vScale, meta);
  const ilen = parsed.length;
  let stack;
  for (let i = 0; i < ilen; ++i) {
    const item = parsed[i];
    const {[iAxis]: index, [vAxis]: value} = item;
    const itemStacks = item._stacks || (item._stacks = {});
    stack = itemStacks[vAxis] = getOrCreateStack(stacks, key, index);
    stack[datasetIndex] = value;
    stack._top = getLastIndexInStack(stack, vScale, true, meta.type);
    stack._bottom = getLastIndexInStack(stack, vScale, false, meta.type);
  }
}
function getFirstScaleId(chart, axis) {
  const scales = chart.scales;
  return Object.keys(scales).filter(key => scales[key].axis === axis).shift();
}
function createDatasetContext(parent, index) {
  return createContext(parent,
    {
      active: false,
      dataset: undefined,
      datasetIndex: index,
      index,
      mode: 'default',
      type: 'dataset'
    }
  );
}
function createDataContext(parent, index, element) {
  return createContext(parent, {
    active: false,
    dataIndex: index,
    parsed: undefined,
    raw: undefined,
    element,
    index,
    mode: 'default',
    type: 'data'
  });
}
function clearStacks(meta, items) {
  const datasetIndex = meta.controller.index;
  const axis = meta.vScale && meta.vScale.axis;
  if (!axis) {
    return;
  }
  items = items || meta._parsed;
  for (const parsed of items) {
    const stacks = parsed._stacks;
    if (!stacks || stacks[axis] === undefined || stacks[axis][datasetIndex] === undefined) {
      return;
    }
    delete stacks[axis][datasetIndex];
  }
}
const isDirectUpdateMode = (mode) => mode === 'reset' || mode === 'none';
const cloneIfNotShared = (cached, shared) => shared ? cached : Object.assign({}, cached);
const createStack = (canStack, meta, chart) => canStack && !meta.hidden && meta._stacked
  && {keys: getSortedDatasetIndices(chart, true), values: null};
class DatasetController {
  constructor(chart, datasetIndex) {
    this.chart = chart;
    this._ctx = chart.ctx;
    this.index = datasetIndex;
    this._cachedDataOpts = {};
    this._cachedMeta = this.getMeta();
    this._type = this._cachedMeta.type;
    this.options = undefined;
    this._parsing = false;
    this._data = undefined;
    this._objectData = undefined;
    this._sharedOptions = undefined;
    this._drawStart = undefined;
    this._drawCount = undefined;
    this.enableOptionSharing = false;
    this.$context = undefined;
    this._syncList = [];
    this.initialize();
  }
  initialize() {
    const meta = this._cachedMeta;
    this.configure();
    this.linkScales();
    meta._stacked = isStacked(meta.vScale, meta);
    this.addElements();
  }
  updateIndex(datasetIndex) {
    if (this.index !== datasetIndex) {
      clearStacks(this._cachedMeta);
    }
    this.index = datasetIndex;
  }
  linkScales() {
    const chart = this.chart;
    const meta = this._cachedMeta;
    const dataset = this.getDataset();
    const chooseId = (axis, x, y, r) => axis === 'x' ? x : axis === 'r' ? r : y;
    const xid = meta.xAxisID = valueOrDefault(dataset.xAxisID, getFirstScaleId(chart, 'x'));
    const yid = meta.yAxisID = valueOrDefault(dataset.yAxisID, getFirstScaleId(chart, 'y'));
    const rid = meta.rAxisID = valueOrDefault(dataset.rAxisID, getFirstScaleId(chart, 'r'));
    const indexAxis = meta.indexAxis;
    const iid = meta.iAxisID = chooseId(indexAxis, xid, yid, rid);
    const vid = meta.vAxisID = chooseId(indexAxis, yid, xid, rid);
    meta.xScale = this.getScaleForId(xid);
    meta.yScale = this.getScaleForId(yid);
    meta.rScale = this.getScaleForId(rid);
    meta.iScale = this.getScaleForId(iid);
    meta.vScale = this.getScaleForId(vid);
  }
  getDataset() {
    return this.chart.data.datasets[this.index];
  }
  getMeta() {
    return this.chart.getDatasetMeta(this.index);
  }
  getScaleForId(scaleID) {
    return this.chart.scales[scaleID];
  }
  _getOtherScale(scale) {
    const meta = this._cachedMeta;
    return scale === meta.iScale
      ? meta.vScale
      : meta.iScale;
  }
  reset() {
    this._update('reset');
  }
  _destroy() {
    const meta = this._cachedMeta;
    if (this._data) {
      unlistenArrayEvents(this._data, this);
    }
    if (meta._stacked) {
      clearStacks(meta);
    }
  }
  _dataCheck() {
    const dataset = this.getDataset();
    const data = dataset.data || (dataset.data = []);
    const _data = this._data;
    if (isObject(data)) {
      this._data = convertObjectDataToArray(data);
    } else if (_data !== data) {
      if (_data) {
        unlistenArrayEvents(_data, this);
        const meta = this._cachedMeta;
        clearStacks(meta);
        meta._parsed = [];
      }
      if (data && Object.isExtensible(data)) {
        listenArrayEvents(data, this);
      }
      this._syncList = [];
      this._data = data;
    }
  }
  addElements() {
    const meta = this._cachedMeta;
    this._dataCheck();
    if (this.datasetElementType) {
      meta.dataset = new this.datasetElementType();
    }
  }
  buildOrUpdateElements(resetNewElements) {
    const meta = this._cachedMeta;
    const dataset = this.getDataset();
    let stackChanged = false;
    this._dataCheck();
    const oldStacked = meta._stacked;
    meta._stacked = isStacked(meta.vScale, meta);
    if (meta.stack !== dataset.stack) {
      stackChanged = true;
      clearStacks(meta);
      meta.stack = dataset.stack;
    }
    this._resyncElements(resetNewElements);
    if (stackChanged || oldStacked !== meta._stacked) {
      updateStacks(this, meta._parsed);
    }
  }
  configure() {
    const config = this.chart.config;
    const scopeKeys = config.datasetScopeKeys(this._type);
    const scopes = config.getOptionScopes(this.getDataset(), scopeKeys, true);
    this.options = config.createResolver(scopes, this.getContext());
    this._parsing = this.options.parsing;
    this._cachedDataOpts = {};
  }
  parse(start, count) {
    const {_cachedMeta: meta, _data: data} = this;
    const {iScale, _stacked} = meta;
    const iAxis = iScale.axis;
    let sorted = start === 0 && count === data.length ? true : meta._sorted;
    let prev = start > 0 && meta._parsed[start - 1];
    let i, cur, parsed;
    if (this._parsing === false) {
      meta._parsed = data;
      meta._sorted = true;
      parsed = data;
    } else {
      if (isArray(data[start])) {
        parsed = this.parseArrayData(meta, data, start, count);
      } else if (isObject(data[start])) {
        parsed = this.parseObjectData(meta, data, start, count);
      } else {
        parsed = this.parsePrimitiveData(meta, data, start, count);
      }
      const isNotInOrderComparedToPrev = () => cur[iAxis] === null || (prev && cur[iAxis] < prev[iAxis]);
      for (i = 0; i < count; ++i) {
        meta._parsed[i + start] = cur = parsed[i];
        if (sorted) {
          if (isNotInOrderComparedToPrev()) {
            sorted = false;
          }
          prev = cur;
        }
      }
      meta._sorted = sorted;
    }
    if (_stacked) {
      updateStacks(this, parsed);
    }
  }
  parsePrimitiveData(meta, data, start, count) {
    const {iScale, vScale} = meta;
    const iAxis = iScale.axis;
    const vAxis = vScale.axis;
    const labels = iScale.getLabels();
    const singleScale = iScale === vScale;
    const parsed = new Array(count);
    let i, ilen, index;
    for (i = 0, ilen = count; i < ilen; ++i) {
      index = i + start;
      parsed[i] = {
        [iAxis]: singleScale || iScale.parse(labels[index], index),
        [vAxis]: vScale.parse(data[index], index)
      };
    }
    return parsed;
  }
  parseArrayData(meta, data, start, count) {
    const {xScale, yScale} = meta;
    const parsed = new Array(count);
    let i, ilen, index, item;
    for (i = 0, ilen = count; i < ilen; ++i) {
      index = i + start;
      item = data[index];
      parsed[i] = {
        x: xScale.parse(item[0], index),
        y: yScale.parse(item[1], index)
      };
    }
    return parsed;
  }
  parseObjectData(meta, data, start, count) {
    const {xScale, yScale} = meta;
    const {xAxisKey = 'x', yAxisKey = 'y'} = this._parsing;
    const parsed = new Array(count);
    let i, ilen, index, item;
    for (i = 0, ilen = count; i < ilen; ++i) {
      index = i + start;
      item = data[index];
      parsed[i] = {
        x: xScale.parse(resolveObjectKey(item, xAxisKey), index),
        y: yScale.parse(resolveObjectKey(item, yAxisKey), index)
      };
    }
    return parsed;
  }
  getParsed(index) {
    return this._cachedMeta._parsed[index];
  }
  getDataElement(index) {
    return this._cachedMeta.data[index];
  }
  applyStack(scale, parsed, mode) {
    const chart = this.chart;
    const meta = this._cachedMeta;
    const value = parsed[scale.axis];
    const stack = {
      keys: getSortedDatasetIndices(chart, true),
      values: parsed._stacks[scale.axis]
    };
    return applyStack(stack, value, meta.index, {mode});
  }
  updateRangeFromParsed(range, scale, parsed, stack) {
    const parsedValue = parsed[scale.axis];
    let value = parsedValue === null ? NaN : parsedValue;
    const values = stack && parsed._stacks[scale.axis];
    if (stack && values) {
      stack.values = values;
      value = applyStack(stack, parsedValue, this._cachedMeta.index);
    }
    range.min = Math.min(range.min, value);
    range.max = Math.max(range.max, value);
  }
  getMinMax(scale, canStack) {
    const meta = this._cachedMeta;
    const _parsed = meta._parsed;
    const sorted = meta._sorted && scale === meta.iScale;
    const ilen = _parsed.length;
    const otherScale = this._getOtherScale(scale);
    const stack = createStack(canStack, meta, this.chart);
    const range = {min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY};
    const {min: otherMin, max: otherMax} = getUserBounds(otherScale);
    let i, parsed;
    function _skip() {
      parsed = _parsed[i];
      const otherValue = parsed[otherScale.axis];
      return !isNumberFinite(parsed[scale.axis]) || otherMin > otherValue || otherMax < otherValue;
    }
    for (i = 0; i < ilen; ++i) {
      if (_skip()) {
        continue;
      }
      this.updateRangeFromParsed(range, scale, parsed, stack);
      if (sorted) {
        break;
      }
    }
    if (sorted) {
      for (i = ilen - 1; i >= 0; --i) {
        if (_skip()) {
          continue;
        }
        this.updateRangeFromParsed(range, scale, parsed, stack);
        break;
      }
    }
    return range;
  }
  getAllParsedValues(scale) {
    const parsed = this._cachedMeta._parsed;
    const values = [];
    let i, ilen, value;
    for (i = 0, ilen = parsed.length; i < ilen; ++i) {
      value = parsed[i][scale.axis];
      if (isNumberFinite(value)) {
        values.push(value);
      }
    }
    return values;
  }
  getMaxOverflow() {
    return false;
  }
  getLabelAndValue(index) {
    const meta = this._cachedMeta;
    const iScale = meta.iScale;
    const vScale = meta.vScale;
    const parsed = this.getParsed(index);
    return {
      label: iScale ? '' + iScale.getLabelForValue(parsed[iScale.axis]) : '',
      value: vScale ? '' + vScale.getLabelForValue(parsed[vScale.axis]) : ''
    };
  }
  _update(mode) {
    const meta = this._cachedMeta;
    this.update(mode || 'default');
    meta._clip = toClip(valueOrDefault(this.options.clip, defaultClip(meta.xScale, meta.yScale, this.getMaxOverflow())));
  }
  update(mode) {}
  draw() {
    const ctx = this._ctx;
    const chart = this.chart;
    const meta = this._cachedMeta;
    const elements = meta.data || [];
    const area = chart.chartArea;
    const active = [];
    const start = this._drawStart || 0;
    const count = this._drawCount || (elements.length - start);
    let i;
    if (meta.dataset) {
      meta.dataset.draw(ctx, area, start, count);
    }
    for (i = start; i < start + count; ++i) {
      const element = elements[i];
      if (element.hidden) {
        continue;
      }
      if (element.active) {
        active.push(element);
      } else {
        element.draw(ctx, area);
      }
    }
    for (i = 0; i < active.length; ++i) {
      active[i].draw(ctx, area);
    }
  }
  getStyle(index, active) {
    const mode = active ? 'active' : 'default';
    return index === undefined && this._cachedMeta.dataset
      ? this.resolveDatasetElementOptions(mode)
      : this.resolveDataElementOptions(index || 0, mode);
  }
  getContext(index, active, mode) {
    const dataset = this.getDataset();
    let context;
    if (index >= 0 && index < this._cachedMeta.data.length) {
      const element = this._cachedMeta.data[index];
      context = element.$context ||
        (element.$context = createDataContext(this.getContext(), index, element));
      context.parsed = this.getParsed(index);
      context.raw = dataset.data[index];
      context.index = context.dataIndex = index;
    } else {
      context = this.$context ||
        (this.$context = createDatasetContext(this.chart.getContext(), this.index));
      context.dataset = dataset;
      context.index = context.datasetIndex = this.index;
    }
    context.active = !!active;
    context.mode = mode;
    return context;
  }
  resolveDatasetElementOptions(mode) {
    return this._resolveElementOptions(this.datasetElementType.id, mode);
  }
  resolveDataElementOptions(index, mode) {
    return this._resolveElementOptions(this.dataElementType.id, mode, index);
  }
  _resolveElementOptions(elementType, mode = 'default', index) {
    const active = mode === 'active';
    const cache = this._cachedDataOpts;
    const cacheKey = elementType + '-' + mode;
    const cached = cache[cacheKey];
    const sharing = this.enableOptionSharing && defined(index);
    if (cached) {
      return cloneIfNotShared(cached, sharing);
    }
    const config = this.chart.config;
    const scopeKeys = config.datasetElementScopeKeys(this._type, elementType);
    const prefixes = active ? [`${elementType}Hover`, 'hover', elementType, ''] : [elementType, ''];
    const scopes = config.getOptionScopes(this.getDataset(), scopeKeys);
    const names = Object.keys(defaults.elements[elementType]);
    const context = () => this.getContext(index, active);
    const values = config.resolveNamedOptions(scopes, names, context, prefixes);
    if (values.$shared) {
      values.$shared = sharing;
      cache[cacheKey] = Object.freeze(cloneIfNotShared(values, sharing));
    }
    return values;
  }
  _resolveAnimations(index, transition, active) {
    const chart = this.chart;
    const cache = this._cachedDataOpts;
    const cacheKey = `animation-${transition}`;
    const cached = cache[cacheKey];
    if (cached) {
      return cached;
    }
    let options;
    if (chart.options.animation !== false) {
      const config = this.chart.config;
      const scopeKeys = config.datasetAnimationScopeKeys(this._type, transition);
      const scopes = config.getOptionScopes(this.getDataset(), scopeKeys);
      options = config.createResolver(scopes, this.getContext(index, active, transition));
    }
    const animations = new Animations(chart, options && options.animations);
    if (options && options._cacheable) {
      cache[cacheKey] = Object.freeze(animations);
    }
    return animations;
  }
  getSharedOptions(options) {
    if (!options.$shared) {
      return;
    }
    return this._sharedOptions || (this._sharedOptions = Object.assign({}, options));
  }
  includeOptions(mode, sharedOptions) {
    return !sharedOptions || isDirectUpdateMode(mode) || this.chart._animationsDisabled;
  }
  updateElement(element, index, properties, mode) {
    if (isDirectUpdateMode(mode)) {
      Object.assign(element, properties);
    } else {
      this._resolveAnimations(index, mode).update(element, properties);
    }
  }
  updateSharedOptions(sharedOptions, mode, newOptions) {
    if (sharedOptions && !isDirectUpdateMode(mode)) {
      this._resolveAnimations(undefined, mode).update(sharedOptions, newOptions);
    }
  }
  _setStyle(element, index, mode, active) {
    element.active = active;
    const options = this.getStyle(index, active);
    this._resolveAnimations(index, mode, active).update(element, {
      options: (!active && this.getSharedOptions(options)) || options
    });
  }
  removeHoverStyle(element, datasetIndex, index) {
    this._setStyle(element, index, 'active', false);
  }
  setHoverStyle(element, datasetIndex, index) {
    this._setStyle(element, index, 'active', true);
  }
  _removeDatasetHoverStyle() {
    const element = this._cachedMeta.dataset;
    if (element) {
      this._setStyle(element, undefined, 'active', false);
    }
  }
  _setDatasetHoverStyle() {
    const element = this._cachedMeta.dataset;
    if (element) {
      this._setStyle(element, undefined, 'active', true);
    }
  }
  _resyncElements(resetNewElements) {
    const data = this._data;
    const elements = this._cachedMeta.data;
    for (const [method, arg1, arg2] of this._syncList) {
      this[method](arg1, arg2);
    }
    this._syncList = [];
    const numMeta = elements.length;
    const numData = data.length;
    const count = Math.min(numData, numMeta);
    if (count) {
      this.parse(0, count);
    }
    if (numData > numMeta) {
      this._insertElements(numMeta, numData - numMeta, resetNewElements);
    } else if (numData < numMeta) {
      this._removeElements(numData, numMeta - numData);
    }
  }
  _insertElements(start, count, resetNewElements = true) {
    const meta = this._cachedMeta;
    const data = meta.data;
    const end = start + count;
    let i;
    const move = (arr) => {
      arr.length += count;
      for (i = arr.length - 1; i >= end; i--) {
        arr[i] = arr[i - count];
      }
    };
    move(data);
    for (i = start; i < end; ++i) {
      data[i] = new this.dataElementType();
    }
    if (this._parsing) {
      move(meta._parsed);
    }
    this.parse(start, count);
    if (resetNewElements) {
      this.updateElements(data, start, count, 'reset');
    }
  }
  updateElements(element, start, count, mode) {}
  _removeElements(start, count) {
    const meta = this._cachedMeta;
    if (this._parsing) {
      const removed = meta._parsed.splice(start, count);
      if (meta._stacked) {
        clearStacks(meta, removed);
      }
    }
    meta.data.splice(start, count);
  }
  _sync(args) {
    if (this._parsing) {
      this._syncList.push(args);
    } else {
      const [method, arg1, arg2] = args;
      this[method](arg1, arg2);
    }
    this.chart._dataChanges.push([this.index, ...args]);
  }
  _onDataPush() {
    const count = arguments.length;
    this._sync(['_insertElements', this.getDataset().data.length - count, count]);
  }
  _onDataPop() {
    this._sync(['_removeElements', this._cachedMeta.data.length - 1, 1]);
  }
  _onDataShift() {
    this._sync(['_removeElements', 0, 1]);
  }
  _onDataSplice(start, count) {
    if (count) {
      this._sync(['_removeElements', start, count]);
    }
    const newCount = arguments.length - 2;
    if (newCount) {
      this._sync(['_insertElements', start, newCount]);
    }
  }
  _onDataUnshift() {
    this._sync(['_insertElements', 0, arguments.length]);
  }
}
DatasetController.defaults = {};
DatasetController.prototype.datasetElementType = null;
DatasetController.prototype.dataElementType = null;

function getAllScaleValues(scale, type) {
  if (!scale._cache.$bar) {
    const visibleMetas = scale.getMatchingVisibleMetas(type);
    let values = [];
    for (let i = 0, ilen = visibleMetas.length; i < ilen; i++) {
      values = values.concat(visibleMetas[i].controller.getAllParsedValues(scale));
    }
    scale._cache.$bar = _arrayUnique(values.sort((a, b) => a - b));
  }
  return scale._cache.$bar;
}
function computeMinSampleSize(meta) {
  const scale = meta.iScale;
  const values = getAllScaleValues(scale, meta.type);
  let min = scale._length;
  let i, ilen, curr, prev;
  const updateMinAndPrev = () => {
    if (curr === 32767 || curr === -32768) {
      return;
    }
    if (defined(prev)) {
      min = Math.min(min, Math.abs(curr - prev) || min);
    }
    prev = curr;
  };
  for (i = 0, ilen = values.length; i < ilen; ++i) {
    curr = scale.getPixelForValue(values[i]);
    updateMinAndPrev();
  }
  prev = undefined;
  for (i = 0, ilen = scale.ticks.length; i < ilen; ++i) {
    curr = scale.getPixelForTick(i);
    updateMinAndPrev();
  }
  return min;
}
function computeFitCategoryTraits(index, ruler, options, stackCount) {
  const thickness = options.barThickness;
  let size, ratio;
  if (isNullOrUndef(thickness)) {
    size = ruler.min * options.categoryPercentage;
    ratio = options.barPercentage;
  } else {
    size = thickness * stackCount;
    ratio = 1;
  }
  return {
    chunk: size / stackCount,
    ratio,
    start: ruler.pixels[index] - (size / 2)
  };
}
function computeFlexCategoryTraits(index, ruler, options, stackCount) {
  const pixels = ruler.pixels;
  const curr = pixels[index];
  let prev = index > 0 ? pixels[index - 1] : null;
  let next = index < pixels.length - 1 ? pixels[index + 1] : null;
  const percent = options.categoryPercentage;
  if (prev === null) {
    prev = curr - (next === null ? ruler.end - ruler.start : next - curr);
  }
  if (next === null) {
    next = curr + curr - prev;
  }
  const start = curr - (curr - Math.min(prev, next)) / 2 * percent;
  const size = Math.abs(next - prev) / 2 * percent;
  return {
    chunk: size / stackCount,
    ratio: options.barPercentage,
    start
  };
}
function parseFloatBar(entry, item, vScale, i) {
  const startValue = vScale.parse(entry[0], i);
  const endValue = vScale.parse(entry[1], i);
  const min = Math.min(startValue, endValue);
  const max = Math.max(startValue, endValue);
  let barStart = min;
  let barEnd = max;
  if (Math.abs(min) > Math.abs(max)) {
    barStart = max;
    barEnd = min;
  }
  item[vScale.axis] = barEnd;
  item._custom = {
    barStart,
    barEnd,
    start: startValue,
    end: endValue,
    min,
    max
  };
}
function parseValue(entry, item, vScale, i) {
  if (isArray(entry)) {
    parseFloatBar(entry, item, vScale, i);
  } else {
    item[vScale.axis] = vScale.parse(entry, i);
  }
  return item;
}
function parseArrayOrPrimitive(meta, data, start, count) {
  const iScale = meta.iScale;
  const vScale = meta.vScale;
  const labels = iScale.getLabels();
  const singleScale = iScale === vScale;
  const parsed = [];
  let i, ilen, item, entry;
  for (i = start, ilen = start + count; i < ilen; ++i) {
    entry = data[i];
    item = {};
    item[iScale.axis] = singleScale || iScale.parse(labels[i], i);
    parsed.push(parseValue(entry, item, vScale, i));
  }
  return parsed;
}
function isFloatBar(custom) {
  return custom && custom.barStart !== undefined && custom.barEnd !== undefined;
}
function barSign(size, vScale, actualBase) {
  if (size !== 0) {
    return sign(size);
  }
  return (vScale.isHorizontal() ? 1 : -1) * (vScale.min >= actualBase ? 1 : -1);
}
function borderProps(properties) {
  let reverse, start, end, top, bottom;
  if (properties.horizontal) {
    reverse = properties.base > properties.x;
    start = 'left';
    end = 'right';
  } else {
    reverse = properties.base < properties.y;
    start = 'bottom';
    end = 'top';
  }
  if (reverse) {
    top = 'end';
    bottom = 'start';
  } else {
    top = 'start';
    bottom = 'end';
  }
  return {start, end, reverse, top, bottom};
}
function setBorderSkipped(properties, options, stack, index) {
  let edge = options.borderSkipped;
  const res = {};
  if (!edge) {
    properties.borderSkipped = res;
    return;
  }
  const {start, end, reverse, top, bottom} = borderProps(properties);
  if (edge === 'middle' && stack) {
    properties.enableBorderRadius = true;
    if ((stack._top || 0) === index) {
      edge = top;
    } else if ((stack._bottom || 0) === index) {
      edge = bottom;
    } else {
      res[parseEdge(bottom, start, end, reverse)] = true;
      edge = top;
    }
  }
  res[parseEdge(edge, start, end, reverse)] = true;
  properties.borderSkipped = res;
}
function parseEdge(edge, a, b, reverse) {
  if (reverse) {
    edge = swap(edge, a, b);
    edge = startEnd(edge, b, a);
  } else {
    edge = startEnd(edge, a, b);
  }
  return edge;
}
function swap(orig, v1, v2) {
  return orig === v1 ? v2 : orig === v2 ? v1 : orig;
}
function startEnd(v, start, end) {
  return v === 'start' ? start : v === 'end' ? end : v;
}
function setInflateAmount(properties, {inflateAmount}, ratio) {
  properties.inflateAmount = inflateAmount === 'auto'
    ? ratio === 1 ? 0.33 : 0
    : inflateAmount;
}
class BarController extends DatasetController {
  parsePrimitiveData(meta, data, start, count) {
    return parseArrayOrPrimitive(meta, data, start, count);
  }
  parseArrayData(meta, data, start, count) {
    return parseArrayOrPrimitive(meta, data, start, count);
  }
  parseObjectData(meta, data, start, count) {
    const {iScale, vScale} = meta;
    const {xAxisKey = 'x', yAxisKey = 'y'} = this._parsing;
    const iAxisKey = iScale.axis === 'x' ? xAxisKey : yAxisKey;
    const vAxisKey = vScale.axis === 'x' ? xAxisKey : yAxisKey;
    const parsed = [];
    let i, ilen, item, obj;
    for (i = start, ilen = start + count; i < ilen; ++i) {
      obj = data[i];
      item = {};
      item[iScale.axis] = iScale.parse(resolveObjectKey(obj, iAxisKey), i);
      parsed.push(parseValue(resolveObjectKey(obj, vAxisKey), item, vScale, i));
    }
    return parsed;
  }
  updateRangeFromParsed(range, scale, parsed, stack) {
    super.updateRangeFromParsed(range, scale, parsed, stack);
    const custom = parsed._custom;
    if (custom && scale === this._cachedMeta.vScale) {
      range.min = Math.min(range.min, custom.min);
      range.max = Math.max(range.max, custom.max);
    }
  }
  getMaxOverflow() {
    return 0;
  }
  getLabelAndValue(index) {
    const meta = this._cachedMeta;
    const {iScale, vScale} = meta;
    const parsed = this.getParsed(index);
    const custom = parsed._custom;
    const value = isFloatBar(custom)
      ? '[' + custom.start + ', ' + custom.end + ']'
      : '' + vScale.getLabelForValue(parsed[vScale.axis]);
    return {
      label: '' + iScale.getLabelForValue(parsed[iScale.axis]),
      value
    };
  }
  initialize() {
    this.enableOptionSharing = true;
    super.initialize();
    const meta = this._cachedMeta;
    meta.stack = this.getDataset().stack;
  }
  update(mode) {
    const meta = this._cachedMeta;
    this.updateElements(meta.data, 0, meta.data.length, mode);
  }
  updateElements(bars, start, count, mode) {
    const reset = mode === 'reset';
    const {index, _cachedMeta: {vScale}} = this;
    const base = vScale.getBasePixel();
    const horizontal = vScale.isHorizontal();
    const ruler = this._getRuler();
    const firstOpts = this.resolveDataElementOptions(start, mode);
    const sharedOptions = this.getSharedOptions(firstOpts);
    const includeOptions = this.includeOptions(mode, sharedOptions);
    this.updateSharedOptions(sharedOptions, mode, firstOpts);
    for (let i = start; i < start + count; i++) {
      const parsed = this.getParsed(i);
      const vpixels = reset || isNullOrUndef(parsed[vScale.axis]) ? {base, head: base} : this._calculateBarValuePixels(i);
      const ipixels = this._calculateBarIndexPixels(i, ruler);
      const stack = (parsed._stacks || {})[vScale.axis];
      const properties = {
        horizontal,
        base: vpixels.base,
        enableBorderRadius: !stack || isFloatBar(parsed._custom) || (index === stack._top || index === stack._bottom),
        x: horizontal ? vpixels.head : ipixels.center,
        y: horizontal ? ipixels.center : vpixels.head,
        height: horizontal ? ipixels.size : Math.abs(vpixels.size),
        width: horizontal ? Math.abs(vpixels.size) : ipixels.size
      };
      if (includeOptions) {
        properties.options = sharedOptions || this.resolveDataElementOptions(i, bars[i].active ? 'active' : mode);
      }
      const options = properties.options || bars[i].options;
      setBorderSkipped(properties, options, stack, index);
      setInflateAmount(properties, options, ruler.ratio);
      this.updateElement(bars[i], i, properties, mode);
    }
  }
  _getStacks(last, dataIndex) {
    const meta = this._cachedMeta;
    const iScale = meta.iScale;
    const metasets = iScale.getMatchingVisibleMetas(this._type);
    const stacked = iScale.options.stacked;
    const ilen = metasets.length;
    const stacks = [];
    let i, item;
    for (i = 0; i < ilen; ++i) {
      item = metasets[i];
      if (!item.controller.options.grouped) {
        continue;
      }
      if (typeof dataIndex !== 'undefined') {
        const val = item.controller.getParsed(dataIndex)[
          item.controller._cachedMeta.vScale.axis
        ];
        if (isNullOrUndef(val) || isNaN(val)) {
          continue;
        }
      }
      if (stacked === false || stacks.indexOf(item.stack) === -1 ||
				(stacked === undefined && item.stack === undefined)) {
        stacks.push(item.stack);
      }
      if (item.index === last) {
        break;
      }
    }
    if (!stacks.length) {
      stacks.push(undefined);
    }
    return stacks;
  }
  _getStackCount(index) {
    return this._getStacks(undefined, index).length;
  }
  _getStackIndex(datasetIndex, name, dataIndex) {
    const stacks = this._getStacks(datasetIndex, dataIndex);
    const index = (name !== undefined)
      ? stacks.indexOf(name)
      : -1;
    return (index === -1)
      ? stacks.length - 1
      : index;
  }
  _getRuler() {
    const opts = this.options;
    const meta = this._cachedMeta;
    const iScale = meta.iScale;
    const pixels = [];
    let i, ilen;
    for (i = 0, ilen = meta.data.length; i < ilen; ++i) {
      pixels.push(iScale.getPixelForValue(this.getParsed(i)[iScale.axis], i));
    }
    const barThickness = opts.barThickness;
    const min = barThickness || computeMinSampleSize(meta);
    return {
      min,
      pixels,
      start: iScale._startPixel,
      end: iScale._endPixel,
      stackCount: this._getStackCount(),
      scale: iScale,
      grouped: opts.grouped,
      ratio: barThickness ? 1 : opts.categoryPercentage * opts.barPercentage
    };
  }
  _calculateBarValuePixels(index) {
    const {_cachedMeta: {vScale, _stacked}, options: {base: baseValue, minBarLength}} = this;
    const actualBase = baseValue || 0;
    const parsed = this.getParsed(index);
    const custom = parsed._custom;
    const floating = isFloatBar(custom);
    let value = parsed[vScale.axis];
    let start = 0;
    let length = _stacked ? this.applyStack(vScale, parsed, _stacked) : value;
    let head, size;
    if (length !== value) {
      start = length - value;
      length = value;
    }
    if (floating) {
      value = custom.barStart;
      length = custom.barEnd - custom.barStart;
      if (value !== 0 && sign(value) !== sign(custom.barEnd)) {
        start = 0;
      }
      start += value;
    }
    const startValue = !isNullOrUndef(baseValue) && !floating ? baseValue : start;
    let base = vScale.getPixelForValue(startValue);
    if (this.chart.getDataVisibility(index)) {
      head = vScale.getPixelForValue(start + length);
    } else {
      head = base;
    }
    size = head - base;
    if (Math.abs(size) < minBarLength) {
      size = barSign(size, vScale, actualBase) * minBarLength;
      if (value === actualBase) {
        base -= size / 2;
      }
      head = base + size;
    }
    if (base === vScale.getPixelForValue(actualBase)) {
      const halfGrid = sign(size) * vScale.getLineWidthForValue(actualBase) / 2;
      base += halfGrid;
      size -= halfGrid;
    }
    return {
      size,
      base,
      head,
      center: head + size / 2
    };
  }
  _calculateBarIndexPixels(index, ruler) {
    const scale = ruler.scale;
    const options = this.options;
    const skipNull = options.skipNull;
    const maxBarThickness = valueOrDefault(options.maxBarThickness, Infinity);
    let center, size;
    if (ruler.grouped) {
      const stackCount = skipNull ? this._getStackCount(index) : ruler.stackCount;
      const range = options.barThickness === 'flex'
        ? computeFlexCategoryTraits(index, ruler, options, stackCount)
        : computeFitCategoryTraits(index, ruler, options, stackCount);
      const stackIndex = this._getStackIndex(this.index, this._cachedMeta.stack, skipNull ? index : undefined);
      center = range.start + (range.chunk * stackIndex) + (range.chunk / 2);
      size = Math.min(maxBarThickness, range.chunk * range.ratio);
    } else {
      center = scale.getPixelForValue(this.getParsed(index)[scale.axis], index);
      size = Math.min(maxBarThickness, ruler.min * ruler.ratio);
    }
    return {
      base: center - size / 2,
      head: center + size / 2,
      center,
      size
    };
  }
  draw() {
    const meta = this._cachedMeta;
    const vScale = meta.vScale;
    const rects = meta.data;
    const ilen = rects.length;
    let i = 0;
    for (; i < ilen; ++i) {
      if (this.getParsed(i)[vScale.axis] !== null) {
        rects[i].draw(this._ctx);
      }
    }
  }
}
BarController.id = 'bar';
BarController.defaults = {
  datasetElementType: false,
  dataElementType: 'bar',
  categoryPercentage: 0.8,
  barPercentage: 0.9,
  grouped: true,
  animations: {
    numbers: {
      type: 'number',
      properties: ['x', 'y', 'base', 'width', 'height']
    }
  }
};
BarController.overrides = {
  scales: {
    _index_: {
      type: 'category',
      offset: true,
      grid: {
        offset: true
      }
    },
    _value_: {
      type: 'linear',
      beginAtZero: true,
    }
  }
};

class BubbleController extends DatasetController {
  initialize() {
    this.enableOptionSharing = true;
    super.initialize();
  }
  parsePrimitiveData(meta, data, start, count) {
    const parsed = super.parsePrimitiveData(meta, data, start, count);
    for (let i = 0; i < parsed.length; i++) {
      parsed[i]._custom = this.resolveDataElementOptions(i + start).radius;
    }
    return parsed;
  }
  parseArrayData(meta, data, start, count) {
    const parsed = super.parseArrayData(meta, data, start, count);
    for (let i = 0; i < parsed.length; i++) {
      const item = data[start + i];
      parsed[i]._custom = valueOrDefault(item[2], this.resolveDataElementOptions(i + start).radius);
    }
    return parsed;
  }
  parseObjectData(meta, data, start, count) {
    const parsed = super.parseObjectData(meta, data, start, count);
    for (let i = 0; i < parsed.length; i++) {
      const item = data[start + i];
      parsed[i]._custom = valueOrDefault(item && item.r && +item.r, this.resolveDataElementOptions(i + start).radius);
    }
    return parsed;
  }
  getMaxOverflow() {
    const data = this._cachedMeta.data;
    let max = 0;
    for (let i = data.length - 1; i >= 0; --i) {
      max = Math.max(max, data[i].size(this.resolveDataElementOptions(i)) / 2);
    }
    return max > 0 && max;
  }
  getLabelAndValue(index) {
    const meta = this._cachedMeta;
    const {xScale, yScale} = meta;
    const parsed = this.getParsed(index);
    const x = xScale.getLabelForValue(parsed.x);
    const y = yScale.getLabelForValue(parsed.y);
    const r = parsed._custom;
    return {
      label: meta.label,
      value: '(' + x + ', ' + y + (r ? ', ' + r : '') + ')'
    };
  }
  update(mode) {
    const points = this._cachedMeta.data;
    this.updateElements(points, 0, points.length, mode);
  }
  updateElements(points, start, count, mode) {
    const reset = mode === 'reset';
    const {iScale, vScale} = this._cachedMeta;
    const firstOpts = this.resolveDataElementOptions(start, mode);
    const sharedOptions = this.getSharedOptions(firstOpts);
    const includeOptions = this.includeOptions(mode, sharedOptions);
    const iAxis = iScale.axis;
    const vAxis = vScale.axis;
    for (let i = start; i < start + count; i++) {
      const point = points[i];
      const parsed = !reset && this.getParsed(i);
      const properties = {};
      const iPixel = properties[iAxis] = reset ? iScale.getPixelForDecimal(0.5) : iScale.getPixelForValue(parsed[iAxis]);
      const vPixel = properties[vAxis] = reset ? vScale.getBasePixel() : vScale.getPixelForValue(parsed[vAxis]);
      properties.skip = isNaN(iPixel) || isNaN(vPixel);
      if (includeOptions) {
        properties.options = this.resolveDataElementOptions(i, point.active ? 'active' : mode);
        if (reset) {
          properties.options.radius = 0;
        }
      }
      this.updateElement(point, i, properties, mode);
    }
    this.updateSharedOptions(sharedOptions, mode, firstOpts);
  }
  resolveDataElementOptions(index, mode) {
    const parsed = this.getParsed(index);
    let values = super.resolveDataElementOptions(index, mode);
    if (values.$shared) {
      values = Object.assign({}, values, {$shared: false});
    }
    const radius = values.radius;
    if (mode !== 'active') {
      values.radius = 0;
    }
    values.radius += valueOrDefault(parsed && parsed._custom, radius);
    return values;
  }
}
BubbleController.id = 'bubble';
BubbleController.defaults = {
  datasetElementType: false,
  dataElementType: 'point',
  animations: {
    numbers: {
      type: 'number',
      properties: ['x', 'y', 'borderWidth', 'radius']
    }
  }
};
BubbleController.overrides = {
  scales: {
    x: {
      type: 'linear'
    },
    y: {
      type: 'linear'
    }
  },
  plugins: {
    tooltip: {
      callbacks: {
        title() {
          return '';
        }
      }
    }
  }
};

function getRatioAndOffset(rotation, circumference, cutout) {
  let ratioX = 1;
  let ratioY = 1;
  let offsetX = 0;
  let offsetY = 0;
  if (circumference < TAU) {
    const startAngle = rotation;
    const endAngle = startAngle + circumference;
    const startX = Math.cos(startAngle);
    const startY = Math.sin(startAngle);
    const endX = Math.cos(endAngle);
    const endY = Math.sin(endAngle);
    const calcMax = (angle, a, b) => _angleBetween(angle, startAngle, endAngle, true) ? 1 : Math.max(a, a * cutout, b, b * cutout);
    const calcMin = (angle, a, b) => _angleBetween(angle, startAngle, endAngle, true) ? -1 : Math.min(a, a * cutout, b, b * cutout);
    const maxX = calcMax(0, startX, endX);
    const maxY = calcMax(HALF_PI, startY, endY);
    const minX = calcMin(PI, startX, endX);
    const minY = calcMin(PI + HALF_PI, startY, endY);
    ratioX = (maxX - minX) / 2;
    ratioY = (maxY - minY) / 2;
    offsetX = -(maxX + minX) / 2;
    offsetY = -(maxY + minY) / 2;
  }
  return {ratioX, ratioY, offsetX, offsetY};
}
class DoughnutController extends DatasetController {
  constructor(chart, datasetIndex) {
    super(chart, datasetIndex);
    this.enableOptionSharing = true;
    this.innerRadius = undefined;
    this.outerRadius = undefined;
    this.offsetX = undefined;
    this.offsetY = undefined;
  }
  linkScales() {}
  parse(start, count) {
    const data = this.getDataset().data;
    const meta = this._cachedMeta;
    if (this._parsing === false) {
      meta._parsed = data;
    } else {
      let getter = (i) => +data[i];
      if (isObject(data[start])) {
        const {key = 'value'} = this._parsing;
        getter = (i) => +resolveObjectKey(data[i], key);
      }
      let i, ilen;
      for (i = start, ilen = start + count; i < ilen; ++i) {
        meta._parsed[i] = getter(i);
      }
    }
  }
  _getRotation() {
    return toRadians(this.options.rotation - 90);
  }
  _getCircumference() {
    return toRadians(this.options.circumference);
  }
  _getRotationExtents() {
    let min = TAU;
    let max = -TAU;
    for (let i = 0; i < this.chart.data.datasets.length; ++i) {
      if (this.chart.isDatasetVisible(i)) {
        const controller = this.chart.getDatasetMeta(i).controller;
        const rotation = controller._getRotation();
        const circumference = controller._getCircumference();
        min = Math.min(min, rotation);
        max = Math.max(max, rotation + circumference);
      }
    }
    return {
      rotation: min,
      circumference: max - min,
    };
  }
  update(mode) {
    const chart = this.chart;
    const {chartArea} = chart;
    const meta = this._cachedMeta;
    const arcs = meta.data;
    const spacing = this.getMaxBorderWidth() + this.getMaxOffset(arcs) + this.options.spacing;
    const maxSize = Math.max((Math.min(chartArea.width, chartArea.height) - spacing) / 2, 0);
    const cutout = Math.min(toPercentage(this.options.cutout, maxSize), 1);
    const chartWeight = this._getRingWeight(this.index);
    const {circumference, rotation} = this._getRotationExtents();
    const {ratioX, ratioY, offsetX, offsetY} = getRatioAndOffset(rotation, circumference, cutout);
    const maxWidth = (chartArea.width - spacing) / ratioX;
    const maxHeight = (chartArea.height - spacing) / ratioY;
    const maxRadius = Math.max(Math.min(maxWidth, maxHeight) / 2, 0);
    const outerRadius = toDimension(this.options.radius, maxRadius);
    const innerRadius = Math.max(outerRadius * cutout, 0);
    const radiusLength = (outerRadius - innerRadius) / this._getVisibleDatasetWeightTotal();
    this.offsetX = offsetX * outerRadius;
    this.offsetY = offsetY * outerRadius;
    meta.total = this.calculateTotal();
    this.outerRadius = outerRadius - radiusLength * this._getRingWeightOffset(this.index);
    this.innerRadius = Math.max(this.outerRadius - radiusLength * chartWeight, 0);
    this.updateElements(arcs, 0, arcs.length, mode);
  }
  _circumference(i, reset) {
    const opts = this.options;
    const meta = this._cachedMeta;
    const circumference = this._getCircumference();
    if ((reset && opts.animation.animateRotate) || !this.chart.getDataVisibility(i) || meta._parsed[i] === null || meta.data[i].hidden) {
      return 0;
    }
    return this.calculateCircumference(meta._parsed[i] * circumference / TAU);
  }
  updateElements(arcs, start, count, mode) {
    const reset = mode === 'reset';
    const chart = this.chart;
    const chartArea = chart.chartArea;
    const opts = chart.options;
    const animationOpts = opts.animation;
    const centerX = (chartArea.left + chartArea.right) / 2;
    const centerY = (chartArea.top + chartArea.bottom) / 2;
    const animateScale = reset && animationOpts.animateScale;
    const innerRadius = animateScale ? 0 : this.innerRadius;
    const outerRadius = animateScale ? 0 : this.outerRadius;
    const firstOpts = this.resolveDataElementOptions(start, mode);
    const sharedOptions = this.getSharedOptions(firstOpts);
    const includeOptions = this.includeOptions(mode, sharedOptions);
    let startAngle = this._getRotation();
    let i;
    for (i = 0; i < start; ++i) {
      startAngle += this._circumference(i, reset);
    }
    for (i = start; i < start + count; ++i) {
      const circumference = this._circumference(i, reset);
      const arc = arcs[i];
      const properties = {
        x: centerX + this.offsetX,
        y: centerY + this.offsetY,
        startAngle,
        endAngle: startAngle + circumference,
        circumference,
        outerRadius,
        innerRadius
      };
      if (includeOptions) {
        properties.options = sharedOptions || this.resolveDataElementOptions(i, arc.active ? 'active' : mode);
      }
      startAngle += circumference;
      this.updateElement(arc, i, properties, mode);
    }
    this.updateSharedOptions(sharedOptions, mode, firstOpts);
  }
  calculateTotal() {
    const meta = this._cachedMeta;
    const metaData = meta.data;
    let total = 0;
    let i;
    for (i = 0; i < metaData.length; i++) {
      const value = meta._parsed[i];
      if (value !== null && !isNaN(value) && this.chart.getDataVisibility(i) && !metaData[i].hidden) {
        total += Math.abs(value);
      }
    }
    return total;
  }
  calculateCircumference(value) {
    const total = this._cachedMeta.total;
    if (total > 0 && !isNaN(value)) {
      return TAU * (Math.abs(value) / total);
    }
    return 0;
  }
  getLabelAndValue(index) {
    const meta = this._cachedMeta;
    const chart = this.chart;
    const labels = chart.data.labels || [];
    const value = formatNumber(meta._parsed[index], chart.options.locale);
    return {
      label: labels[index] || '',
      value,
    };
  }
  getMaxBorderWidth(arcs) {
    let max = 0;
    const chart = this.chart;
    let i, ilen, meta, controller, options;
    if (!arcs) {
      for (i = 0, ilen = chart.data.datasets.length; i < ilen; ++i) {
        if (chart.isDatasetVisible(i)) {
          meta = chart.getDatasetMeta(i);
          arcs = meta.data;
          controller = meta.controller;
          break;
        }
      }
    }
    if (!arcs) {
      return 0;
    }
    for (i = 0, ilen = arcs.length; i < ilen; ++i) {
      options = controller.resolveDataElementOptions(i);
      if (options.borderAlign !== 'inner') {
        max = Math.max(max, options.borderWidth || 0, options.hoverBorderWidth || 0);
      }
    }
    return max;
  }
  getMaxOffset(arcs) {
    let max = 0;
    for (let i = 0, ilen = arcs.length; i < ilen; ++i) {
      const options = this.resolveDataElementOptions(i);
      max = Math.max(max, options.offset || 0, options.hoverOffset || 0);
    }
    return max;
  }
  _getRingWeightOffset(datasetIndex) {
    let ringWeightOffset = 0;
    for (let i = 0; i < datasetIndex; ++i) {
      if (this.chart.isDatasetVisible(i)) {
        ringWeightOffset += this._getRingWeight(i);
      }
    }
    return ringWeightOffset;
  }
  _getRingWeight(datasetIndex) {
    return Math.max(valueOrDefault(this.chart.data.datasets[datasetIndex].weight, 1), 0);
  }
  _getVisibleDatasetWeightTotal() {
    return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
  }
}
DoughnutController.id = 'doughnut';
DoughnutController.defaults = {
  datasetElementType: false,
  dataElementType: 'arc',
  animation: {
    animateRotate: true,
    animateScale: false
  },
  animations: {
    numbers: {
      type: 'number',
      properties: ['circumference', 'endAngle', 'innerRadius', 'outerRadius', 'startAngle', 'x', 'y', 'offset', 'borderWidth', 'spacing']
    },
  },
  cutout: '50%',
  rotation: 0,
  circumference: 360,
  radius: '100%',
  spacing: 0,
  indexAxis: 'r',
};
DoughnutController.descriptors = {
  _scriptable: (name) => name !== 'spacing',
  _indexable: (name) => name !== 'spacing',
};
DoughnutController.overrides = {
  aspectRatio: 1,
  plugins: {
    legend: {
      labels: {
        generateLabels(chart) {
          const data = chart.data;
          if (data.labels.length && data.datasets.length) {
            const {labels: {pointStyle}} = chart.legend.options;
            return data.labels.map((label, i) => {
              const meta = chart.getDatasetMeta(0);
              const style = meta.controller.getStyle(i);
              return {
                text: label,
                fillStyle: style.backgroundColor,
                strokeStyle: style.borderColor,
                lineWidth: style.borderWidth,
                pointStyle: pointStyle,
                hidden: !chart.getDataVisibility(i),
                index: i
              };
            });
          }
          return [];
        }
      },
      onClick(e, legendItem, legend) {
        legend.chart.toggleDataVisibility(legendItem.index);
        legend.chart.update();
      }
    },
    tooltip: {
      callbacks: {
        title() {
          return '';
        },
        label(tooltipItem) {
          let dataLabel = tooltipItem.label;
          const value = ': ' + tooltipItem.formattedValue;
          if (isArray(dataLabel)) {
            dataLabel = dataLabel.slice();
            dataLabel[0] += value;
          } else {
            dataLabel += value;
          }
          return dataLabel;
        }
      }
    }
  }
};

class LineController extends DatasetController {
  initialize() {
    this.enableOptionSharing = true;
    super.initialize();
  }
  update(mode) {
    const meta = this._cachedMeta;
    const {dataset: line, data: points = [], _dataset} = meta;
    const animationsDisabled = this.chart._animationsDisabled;
    let {start, count} = getStartAndCountOfVisiblePoints(meta, points, animationsDisabled);
    this._drawStart = start;
    this._drawCount = count;
    if (scaleRangesChanged(meta)) {
      start = 0;
      count = points.length;
    }
    line._chart = this.chart;
    line._datasetIndex = this.index;
    line._decimated = !!_dataset._decimated;
    line.points = points;
    const options = this.resolveDatasetElementOptions(mode);
    if (!this.options.showLine) {
      options.borderWidth = 0;
    }
    options.segment = this.options.segment;
    this.updateElement(line, undefined, {
      animated: !animationsDisabled,
      options
    }, mode);
    this.updateElements(points, start, count, mode);
  }
  updateElements(points, start, count, mode) {
    const reset = mode === 'reset';
    const {iScale, vScale, _stacked, _dataset} = this._cachedMeta;
    const firstOpts = this.resolveDataElementOptions(start, mode);
    const sharedOptions = this.getSharedOptions(firstOpts);
    const includeOptions = this.includeOptions(mode, sharedOptions);
    const iAxis = iScale.axis;
    const vAxis = vScale.axis;
    const {spanGaps, segment} = this.options;
    const maxGapLength = isNumber(spanGaps) ? spanGaps : Number.POSITIVE_INFINITY;
    const directUpdate = this.chart._animationsDisabled || reset || mode === 'none';
    let prevParsed = start > 0 && this.getParsed(start - 1);
    for (let i = start; i < start + count; ++i) {
      const point = points[i];
      const parsed = this.getParsed(i);
      const properties = directUpdate ? point : {};
      const nullData = isNullOrUndef(parsed[vAxis]);
      const iPixel = properties[iAxis] = iScale.getPixelForValue(parsed[iAxis], i);
      const vPixel = properties[vAxis] = reset || nullData ? vScale.getBasePixel() : vScale.getPixelForValue(_stacked ? this.applyStack(vScale, parsed, _stacked) : parsed[vAxis], i);
      properties.skip = isNaN(iPixel) || isNaN(vPixel) || nullData;
      properties.stop = i > 0 && (parsed[iAxis] - prevParsed[iAxis]) > maxGapLength;
      if (segment) {
        properties.parsed = parsed;
        properties.raw = _dataset.data[i];
      }
      if (includeOptions) {
        properties.options = sharedOptions || this.resolveDataElementOptions(i, point.active ? 'active' : mode);
      }
      if (!directUpdate) {
        this.updateElement(point, i, properties, mode);
      }
      prevParsed = parsed;
    }
    this.updateSharedOptions(sharedOptions, mode, firstOpts);
  }
  getMaxOverflow() {
    const meta = this._cachedMeta;
    const dataset = meta.dataset;
    const border = dataset.options && dataset.options.borderWidth || 0;
    const data = meta.data || [];
    if (!data.length) {
      return border;
    }
    const firstPoint = data[0].size(this.resolveDataElementOptions(0));
    const lastPoint = data[data.length - 1].size(this.resolveDataElementOptions(data.length - 1));
    return Math.max(border, firstPoint, lastPoint) / 2;
  }
  draw() {
    const meta = this._cachedMeta;
    meta.dataset.updateControlPoints(this.chart.chartArea, meta.iScale.axis);
    super.draw();
  }
}
LineController.id = 'line';
LineController.defaults = {
  datasetElementType: 'line',
  dataElementType: 'point',
  showLine: true,
  spanGaps: false,
};
LineController.overrides = {
  scales: {
    _index_: {
      type: 'category',
    },
    _value_: {
      type: 'linear',
    },
  }
};
function getStartAndCountOfVisiblePoints(meta, points, animationsDisabled) {
  const pointCount = points.length;
  let start = 0;
  let count = pointCount;
  if (meta._sorted) {
    const {iScale, _parsed} = meta;
    const axis = iScale.axis;
    const {min, max, minDefined, maxDefined} = iScale.getUserBounds();
    if (minDefined) {
      start = _limitValue(Math.min(
        _lookupByKey(_parsed, iScale.axis, min).lo,
        animationsDisabled ? pointCount : _lookupByKey(points, axis, iScale.getPixelForValue(min)).lo),
      0, pointCount - 1);
    }
    if (maxDefined) {
      count = _limitValue(Math.max(
        _lookupByKey(_parsed, iScale.axis, max).hi + 1,
        animationsDisabled ? 0 : _lookupByKey(points, axis, iScale.getPixelForValue(max)).hi + 1),
      start, pointCount) - start;
    } else {
      count = pointCount - start;
    }
  }
  return {start, count};
}
function scaleRangesChanged(meta) {
  const {xScale, yScale, _scaleRanges} = meta;
  const newRanges = {
    xmin: xScale.min,
    xmax: xScale.max,
    ymin: yScale.min,
    ymax: yScale.max
  };
  if (!_scaleRanges) {
    meta._scaleRanges = newRanges;
    return true;
  }
  const changed = _scaleRanges.xmin !== xScale.min
		|| _scaleRanges.xmax !== xScale.max
		|| _scaleRanges.ymin !== yScale.min
		|| _scaleRanges.ymax !== yScale.max;
  Object.assign(_scaleRanges, newRanges);
  return changed;
}

class PolarAreaController extends DatasetController {
  constructor(chart, datasetIndex) {
    super(chart, datasetIndex);
    this.innerRadius = undefined;
    this.outerRadius = undefined;
  }
  getLabelAndValue(index) {
    const meta = this._cachedMeta;
    const chart = this.chart;
    const labels = chart.data.labels || [];
    const value = formatNumber(meta._parsed[index].r, chart.options.locale);
    return {
      label: labels[index] || '',
      value,
    };
  }
  update(mode) {
    const arcs = this._cachedMeta.data;
    this._updateRadius();
    this.updateElements(arcs, 0, arcs.length, mode);
  }
  _updateRadius() {
    const chart = this.chart;
    const chartArea = chart.chartArea;
    const opts = chart.options;
    const minSize = Math.min(chartArea.right - chartArea.left, chartArea.bottom - chartArea.top);
    const outerRadius = Math.max(minSize / 2, 0);
    const innerRadius = Math.max(opts.cutoutPercentage ? (outerRadius / 100) * (opts.cutoutPercentage) : 1, 0);
    const radiusLength = (outerRadius - innerRadius) / chart.getVisibleDatasetCount();
    this.outerRadius = outerRadius - (radiusLength * this.index);
    this.innerRadius = this.outerRadius - radiusLength;
  }
  updateElements(arcs, start, count, mode) {
    const reset = mode === 'reset';
    const chart = this.chart;
    const dataset = this.getDataset();
    const opts = chart.options;
    const animationOpts = opts.animation;
    const scale = this._cachedMeta.rScale;
    const centerX = scale.xCenter;
    const centerY = scale.yCenter;
    const datasetStartAngle = scale.getIndexAngle(0) - 0.5 * PI;
    let angle = datasetStartAngle;
    let i;
    const defaultAngle = 360 / this.countVisibleElements();
    for (i = 0; i < start; ++i) {
      angle += this._computeAngle(i, mode, defaultAngle);
    }
    for (i = start; i < start + count; i++) {
      const arc = arcs[i];
      let startAngle = angle;
      let endAngle = angle + this._computeAngle(i, mode, defaultAngle);
      let outerRadius = chart.getDataVisibility(i) ? scale.getDistanceFromCenterForValue(dataset.data[i]) : 0;
      angle = endAngle;
      if (reset) {
        if (animationOpts.animateScale) {
          outerRadius = 0;
        }
        if (animationOpts.animateRotate) {
          startAngle = endAngle = datasetStartAngle;
        }
      }
      const properties = {
        x: centerX,
        y: centerY,
        innerRadius: 0,
        outerRadius,
        startAngle,
        endAngle,
        options: this.resolveDataElementOptions(i, arc.active ? 'active' : mode)
      };
      this.updateElement(arc, i, properties, mode);
    }
  }
  countVisibleElements() {
    const dataset = this.getDataset();
    const meta = this._cachedMeta;
    let count = 0;
    meta.data.forEach((element, index) => {
      if (!isNaN(dataset.data[index]) && this.chart.getDataVisibility(index)) {
        count++;
      }
    });
    return count;
  }
  _computeAngle(index, mode, defaultAngle) {
    return this.chart.getDataVisibility(index)
      ? toRadians(this.resolveDataElementOptions(index, mode).angle || defaultAngle)
      : 0;
  }
}
PolarAreaController.id = 'polarArea';
PolarAreaController.defaults = {
  dataElementType: 'arc',
  animation: {
    animateRotate: true,
    animateScale: true
  },
  animations: {
    numbers: {
      type: 'number',
      properties: ['x', 'y', 'startAngle', 'endAngle', 'innerRadius', 'outerRadius']
    },
  },
  indexAxis: 'r',
  startAngle: 0,
};
PolarAreaController.overrides = {
  aspectRatio: 1,
  plugins: {
    legend: {
      labels: {
        generateLabels(chart) {
          const data = chart.data;
          if (data.labels.length && data.datasets.length) {
            const {labels: {pointStyle}} = chart.legend.options;
            return data.labels.map((label, i) => {
              const meta = chart.getDatasetMeta(0);
              const style = meta.controller.getStyle(i);
              return {
                text: label,
                fillStyle: style.backgroundColor,
                strokeStyle: style.borderColor,
                lineWidth: style.borderWidth,
                pointStyle: pointStyle,
                hidden: !chart.getDataVisibility(i),
                index: i
              };
            });
          }
          return [];
        }
      },
      onClick(e, legendItem, legend) {
        legend.chart.toggleDataVisibility(legendItem.index);
        legend.chart.update();
      }
    },
    tooltip: {
      callbacks: {
        title() {
          return '';
        },
        label(context) {
          return context.chart.data.labels[context.dataIndex] + ': ' + context.formattedValue;
        }
      }
    }
  },
  scales: {
    r: {
      type: 'radialLinear',
      angleLines: {
        display: false
      },
      beginAtZero: true,
      grid: {
        circular: true
      },
      pointLabels: {
        display: false
      },
      startAngle: 0
    }
  }
};

class PieController extends DoughnutController {
}
PieController.id = 'pie';
PieController.defaults = {
  cutout: 0,
  rotation: 0,
  circumference: 360,
  radius: '100%'
};

class RadarController extends DatasetController {
  getLabelAndValue(index) {
    const vScale = this._cachedMeta.vScale;
    const parsed = this.getParsed(index);
    return {
      label: vScale.getLabels()[index],
      value: '' + vScale.getLabelForValue(parsed[vScale.axis])
    };
  }
  update(mode) {
    const meta = this._cachedMeta;
    const line = meta.dataset;
    const points = meta.data || [];
    const labels = meta.iScale.getLabels();
    line.points = points;
    if (mode !== 'resize') {
      const options = this.resolveDatasetElementOptions(mode);
      if (!this.options.showLine) {
        options.borderWidth = 0;
      }
      const properties = {
        _loop: true,
        _fullLoop: labels.length === points.length,
        options
      };
      this.updateElement(line, undefined, properties, mode);
    }
    this.updateElements(points, 0, points.length, mode);
  }
  updateElements(points, start, count, mode) {
    const dataset = this.getDataset();
    const scale = this._cachedMeta.rScale;
    const reset = mode === 'reset';
    for (let i = start; i < start + count; i++) {
      const point = points[i];
      const options = this.resolveDataElementOptions(i, point.active ? 'active' : mode);
      const pointPosition = scale.getPointPositionForValue(i, dataset.data[i]);
      const x = reset ? scale.xCenter : pointPosition.x;
      const y = reset ? scale.yCenter : pointPosition.y;
      const properties = {
        x,
        y,
        angle: pointPosition.angle,
        skip: isNaN(x) || isNaN(y),
        options
      };
      this.updateElement(point, i, properties, mode);
    }
  }
}
RadarController.id = 'radar';
RadarController.defaults = {
  datasetElementType: 'line',
  dataElementType: 'point',
  indexAxis: 'r',
  showLine: true,
  elements: {
    line: {
      fill: 'start'
    }
  },
};
RadarController.overrides = {
  aspectRatio: 1,
  scales: {
    r: {
      type: 'radialLinear',
    }
  }
};

class ScatterController extends LineController {
}
ScatterController.id = 'scatter';
ScatterController.defaults = {
  showLine: false,
  fill: false
};
ScatterController.overrides = {
  interaction: {
    mode: 'point'
  },
  plugins: {
    tooltip: {
      callbacks: {
        title() {
          return '';
        },
        label(item) {
          return '(' + item.label + ', ' + item.formattedValue + ')';
        }
      }
    }
  },
  scales: {
    x: {
      type: 'linear'
    },
    y: {
      type: 'linear'
    }
  }
};

var controllers = /*#__PURE__*/Object.freeze({
__proto__: null,
BarController: BarController,
BubbleController: BubbleController,
DoughnutController: DoughnutController,
LineController: LineController,
PolarAreaController: PolarAreaController,
PieController: PieController,
RadarController: RadarController,
ScatterController: ScatterController
});

function chart_esm_abstract() {
  throw new Error('This method is not implemented: Check that a complete date adapter is provided.');
}
class DateAdapter {
  constructor(options) {
    this.options = options || {};
  }
  formats() {
    return chart_esm_abstract();
  }
  parse(value, format) {
    return chart_esm_abstract();
  }
  format(timestamp, format) {
    return chart_esm_abstract();
  }
  add(timestamp, amount, unit) {
    return chart_esm_abstract();
  }
  diff(a, b, unit) {
    return chart_esm_abstract();
  }
  startOf(timestamp, unit, weekday) {
    return chart_esm_abstract();
  }
  endOf(timestamp, unit) {
    return chart_esm_abstract();
  }
}
DateAdapter.override = function(members) {
  Object.assign(DateAdapter.prototype, members);
};
var adapters = {
  _date: DateAdapter
};

function chart_esm_getRelativePosition(e, chart) {
  if ('native' in e) {
    return {
      x: e.x,
      y: e.y
    };
  }
  return getRelativePosition(e, chart);
}
function evaluateAllVisibleItems(chart, handler) {
  const metasets = chart.getSortedVisibleDatasetMetas();
  let index, data, element;
  for (let i = 0, ilen = metasets.length; i < ilen; ++i) {
    ({index, data} = metasets[i]);
    for (let j = 0, jlen = data.length; j < jlen; ++j) {
      element = data[j];
      if (!element.skip) {
        handler(element, index, j);
      }
    }
  }
}
function binarySearch(metaset, axis, value, intersect) {
  const {controller, data, _sorted} = metaset;
  const iScale = controller._cachedMeta.iScale;
  if (iScale && axis === iScale.axis && _sorted && data.length) {
    const lookupMethod = iScale._reversePixels ? _rlookupByKey : _lookupByKey;
    if (!intersect) {
      return lookupMethod(data, axis, value);
    } else if (controller._sharedOptions) {
      const el = data[0];
      const range = typeof el.getRange === 'function' && el.getRange(axis);
      if (range) {
        const start = lookupMethod(data, axis, value - range);
        const end = lookupMethod(data, axis, value + range);
        return {lo: start.lo, hi: end.hi};
      }
    }
  }
  return {lo: 0, hi: data.length - 1};
}
function optimizedEvaluateItems(chart, axis, position, handler, intersect) {
  const metasets = chart.getSortedVisibleDatasetMetas();
  const value = position[axis];
  for (let i = 0, ilen = metasets.length; i < ilen; ++i) {
    const {index, data} = metasets[i];
    const {lo, hi} = binarySearch(metasets[i], axis, value, intersect);
    for (let j = lo; j <= hi; ++j) {
      const element = data[j];
      if (!element.skip) {
        handler(element, index, j);
      }
    }
  }
}
function getDistanceMetricForAxis(axis) {
  const useX = axis.indexOf('x') !== -1;
  const useY = axis.indexOf('y') !== -1;
  return function(pt1, pt2) {
    const deltaX = useX ? Math.abs(pt1.x - pt2.x) : 0;
    const deltaY = useY ? Math.abs(pt1.y - pt2.y) : 0;
    return Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
  };
}
function getIntersectItems(chart, position, axis, useFinalPosition) {
  const items = [];
  if (!_isPointInArea(position, chart.chartArea, chart._minPadding)) {
    return items;
  }
  const evaluationFunc = function(element, datasetIndex, index) {
    if (element.inRange(position.x, position.y, useFinalPosition)) {
      items.push({element, datasetIndex, index});
    }
  };
  optimizedEvaluateItems(chart, axis, position, evaluationFunc, true);
  return items;
}
function getNearestItems(chart, position, axis, intersect, useFinalPosition) {
  const distanceMetric = getDistanceMetricForAxis(axis);
  let minDistance = Number.POSITIVE_INFINITY;
  let items = [];
  if (!_isPointInArea(position, chart.chartArea, chart._minPadding)) {
    return items;
  }
  const evaluationFunc = function(element, datasetIndex, index) {
    if (intersect && !element.inRange(position.x, position.y, useFinalPosition)) {
      return;
    }
    const center = element.getCenterPoint(useFinalPosition);
    if (!_isPointInArea(center, chart.chartArea, chart._minPadding) && !element.inRange(position.x, position.y, useFinalPosition)) {
      return;
    }
    const distance = distanceMetric(position, center);
    if (distance < minDistance) {
      items = [{element, datasetIndex, index}];
      minDistance = distance;
    } else if (distance === minDistance) {
      items.push({element, datasetIndex, index});
    }
  };
  optimizedEvaluateItems(chart, axis, position, evaluationFunc);
  return items;
}
function getAxisItems(chart, e, options, useFinalPosition) {
  const position = chart_esm_getRelativePosition(e, chart);
  const items = [];
  const axis = options.axis;
  const rangeMethod = axis === 'x' ? 'inXRange' : 'inYRange';
  let intersectsItem = false;
  evaluateAllVisibleItems(chart, (element, datasetIndex, index) => {
    if (element[rangeMethod](position[axis], useFinalPosition)) {
      items.push({element, datasetIndex, index});
    }
    if (element.inRange(position.x, position.y, useFinalPosition)) {
      intersectsItem = true;
    }
  });
  if (options.intersect && !intersectsItem) {
    return [];
  }
  return items;
}
var Interaction = {
  modes: {
    index(chart, e, options, useFinalPosition) {
      const position = chart_esm_getRelativePosition(e, chart);
      const axis = options.axis || 'x';
      const items = options.intersect
        ? getIntersectItems(chart, position, axis, useFinalPosition)
        : getNearestItems(chart, position, axis, false, useFinalPosition);
      const elements = [];
      if (!items.length) {
        return [];
      }
      chart.getSortedVisibleDatasetMetas().forEach((meta) => {
        const index = items[0].index;
        const element = meta.data[index];
        if (element && !element.skip) {
          elements.push({element, datasetIndex: meta.index, index});
        }
      });
      return elements;
    },
    dataset(chart, e, options, useFinalPosition) {
      const position = chart_esm_getRelativePosition(e, chart);
      const axis = options.axis || 'xy';
      let items = options.intersect
        ? getIntersectItems(chart, position, axis, useFinalPosition) :
        getNearestItems(chart, position, axis, false, useFinalPosition);
      if (items.length > 0) {
        const datasetIndex = items[0].datasetIndex;
        const data = chart.getDatasetMeta(datasetIndex).data;
        items = [];
        for (let i = 0; i < data.length; ++i) {
          items.push({element: data[i], datasetIndex, index: i});
        }
      }
      return items;
    },
    point(chart, e, options, useFinalPosition) {
      const position = chart_esm_getRelativePosition(e, chart);
      const axis = options.axis || 'xy';
      return getIntersectItems(chart, position, axis, useFinalPosition);
    },
    nearest(chart, e, options, useFinalPosition) {
      const position = chart_esm_getRelativePosition(e, chart);
      const axis = options.axis || 'xy';
      return getNearestItems(chart, position, axis, options.intersect, useFinalPosition);
    },
    x(chart, e, options, useFinalPosition) {
      options.axis = 'x';
      return getAxisItems(chart, e, options, useFinalPosition);
    },
    y(chart, e, options, useFinalPosition) {
      options.axis = 'y';
      return getAxisItems(chart, e, options, useFinalPosition);
    }
  }
};

const STATIC_POSITIONS = ['left', 'top', 'right', 'bottom'];
function filterByPosition(array, position) {
  return array.filter(v => v.pos === position);
}
function filterDynamicPositionByAxis(array, axis) {
  return array.filter(v => STATIC_POSITIONS.indexOf(v.pos) === -1 && v.box.axis === axis);
}
function sortByWeight(array, reverse) {
  return array.sort((a, b) => {
    const v0 = reverse ? b : a;
    const v1 = reverse ? a : b;
    return v0.weight === v1.weight ?
      v0.index - v1.index :
      v0.weight - v1.weight;
  });
}
function wrapBoxes(boxes) {
  const layoutBoxes = [];
  let i, ilen, box, pos, stack, stackWeight;
  for (i = 0, ilen = (boxes || []).length; i < ilen; ++i) {
    box = boxes[i];
    ({position: pos, options: {stack, stackWeight = 1}} = box);
    layoutBoxes.push({
      index: i,
      box,
      pos,
      horizontal: box.isHorizontal(),
      weight: box.weight,
      stack: stack && (pos + stack),
      stackWeight
    });
  }
  return layoutBoxes;
}
function buildStacks(layouts) {
  const stacks = {};
  for (const wrap of layouts) {
    const {stack, pos, stackWeight} = wrap;
    if (!stack || !STATIC_POSITIONS.includes(pos)) {
      continue;
    }
    const _stack = stacks[stack] || (stacks[stack] = {count: 0, placed: 0, weight: 0, size: 0});
    _stack.count++;
    _stack.weight += stackWeight;
  }
  return stacks;
}
function setLayoutDims(layouts, params) {
  const stacks = buildStacks(layouts);
  const {vBoxMaxWidth, hBoxMaxHeight} = params;
  let i, ilen, layout;
  for (i = 0, ilen = layouts.length; i < ilen; ++i) {
    layout = layouts[i];
    const {fullSize} = layout.box;
    const stack = stacks[layout.stack];
    const factor = stack && layout.stackWeight / stack.weight;
    if (layout.horizontal) {
      layout.width = factor ? factor * vBoxMaxWidth : fullSize && params.availableWidth;
      layout.height = hBoxMaxHeight;
    } else {
      layout.width = vBoxMaxWidth;
      layout.height = factor ? factor * hBoxMaxHeight : fullSize && params.availableHeight;
    }
  }
  return stacks;
}
function buildLayoutBoxes(boxes) {
  const layoutBoxes = wrapBoxes(boxes);
  const fullSize = sortByWeight(layoutBoxes.filter(wrap => wrap.box.fullSize), true);
  const left = sortByWeight(filterByPosition(layoutBoxes, 'left'), true);
  const right = sortByWeight(filterByPosition(layoutBoxes, 'right'));
  const top = sortByWeight(filterByPosition(layoutBoxes, 'top'), true);
  const bottom = sortByWeight(filterByPosition(layoutBoxes, 'bottom'));
  const centerHorizontal = filterDynamicPositionByAxis(layoutBoxes, 'x');
  const centerVertical = filterDynamicPositionByAxis(layoutBoxes, 'y');
  return {
    fullSize,
    leftAndTop: left.concat(top),
    rightAndBottom: right.concat(centerVertical).concat(bottom).concat(centerHorizontal),
    chartArea: filterByPosition(layoutBoxes, 'chartArea'),
    vertical: left.concat(right).concat(centerVertical),
    horizontal: top.concat(bottom).concat(centerHorizontal)
  };
}
function getCombinedMax(maxPadding, chartArea, a, b) {
  return Math.max(maxPadding[a], chartArea[a]) + Math.max(maxPadding[b], chartArea[b]);
}
function updateMaxPadding(maxPadding, boxPadding) {
  maxPadding.top = Math.max(maxPadding.top, boxPadding.top);
  maxPadding.left = Math.max(maxPadding.left, boxPadding.left);
  maxPadding.bottom = Math.max(maxPadding.bottom, boxPadding.bottom);
  maxPadding.right = Math.max(maxPadding.right, boxPadding.right);
}
function updateDims(chartArea, params, layout, stacks) {
  const {pos, box} = layout;
  const maxPadding = chartArea.maxPadding;
  if (!isObject(pos)) {
    if (layout.size) {
      chartArea[pos] -= layout.size;
    }
    const stack = stacks[layout.stack] || {size: 0, count: 1};
    stack.size = Math.max(stack.size, layout.horizontal ? box.height : box.width);
    layout.size = stack.size / stack.count;
    chartArea[pos] += layout.size;
  }
  if (box.getPadding) {
    updateMaxPadding(maxPadding, box.getPadding());
  }
  const newWidth = Math.max(0, params.outerWidth - getCombinedMax(maxPadding, chartArea, 'left', 'right'));
  const newHeight = Math.max(0, params.outerHeight - getCombinedMax(maxPadding, chartArea, 'top', 'bottom'));
  const widthChanged = newWidth !== chartArea.w;
  const heightChanged = newHeight !== chartArea.h;
  chartArea.w = newWidth;
  chartArea.h = newHeight;
  return layout.horizontal
    ? {same: widthChanged, other: heightChanged}
    : {same: heightChanged, other: widthChanged};
}
function handleMaxPadding(chartArea) {
  const maxPadding = chartArea.maxPadding;
  function updatePos(pos) {
    const change = Math.max(maxPadding[pos] - chartArea[pos], 0);
    chartArea[pos] += change;
    return change;
  }
  chartArea.y += updatePos('top');
  chartArea.x += updatePos('left');
  updatePos('right');
  updatePos('bottom');
}
function getMargins(horizontal, chartArea) {
  const maxPadding = chartArea.maxPadding;
  function marginForPositions(positions) {
    const margin = {left: 0, top: 0, right: 0, bottom: 0};
    positions.forEach((pos) => {
      margin[pos] = Math.max(chartArea[pos], maxPadding[pos]);
    });
    return margin;
  }
  return horizontal
    ? marginForPositions(['left', 'right'])
    : marginForPositions(['top', 'bottom']);
}
function fitBoxes(boxes, chartArea, params, stacks) {
  const refitBoxes = [];
  let i, ilen, layout, box, refit, changed;
  for (i = 0, ilen = boxes.length, refit = 0; i < ilen; ++i) {
    layout = boxes[i];
    box = layout.box;
    box.update(
      layout.width || chartArea.w,
      layout.height || chartArea.h,
      getMargins(layout.horizontal, chartArea)
    );
    const {same, other} = updateDims(chartArea, params, layout, stacks);
    refit |= same && refitBoxes.length;
    changed = changed || other;
    if (!box.fullSize) {
      refitBoxes.push(layout);
    }
  }
  return refit && fitBoxes(refitBoxes, chartArea, params, stacks) || changed;
}
function setBoxDims(box, left, top, width, height) {
  box.top = top;
  box.left = left;
  box.right = left + width;
  box.bottom = top + height;
  box.width = width;
  box.height = height;
}
function placeBoxes(boxes, chartArea, params, stacks) {
  const userPadding = params.padding;
  let {x, y} = chartArea;
  for (const layout of boxes) {
    const box = layout.box;
    const stack = stacks[layout.stack] || {count: 1, placed: 0, weight: 1};
    const weight = (layout.stackWeight / stack.weight) || 1;
    if (layout.horizontal) {
      const width = chartArea.w * weight;
      const height = stack.size || box.height;
      if (defined(stack.start)) {
        y = stack.start;
      }
      if (box.fullSize) {
        setBoxDims(box, userPadding.left, y, params.outerWidth - userPadding.right - userPadding.left, height);
      } else {
        setBoxDims(box, chartArea.left + stack.placed, y, width, height);
      }
      stack.start = y;
      stack.placed += width;
      y = box.bottom;
    } else {
      const height = chartArea.h * weight;
      const width = stack.size || box.width;
      if (defined(stack.start)) {
        x = stack.start;
      }
      if (box.fullSize) {
        setBoxDims(box, x, userPadding.top, width, params.outerHeight - userPadding.bottom - userPadding.top);
      } else {
        setBoxDims(box, x, chartArea.top + stack.placed, width, height);
      }
      stack.start = x;
      stack.placed += height;
      x = box.right;
    }
  }
  chartArea.x = x;
  chartArea.y = y;
}
defaults.set('layout', {
  autoPadding: true,
  padding: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }
});
var layouts = {
  addBox(chart, item) {
    if (!chart.boxes) {
      chart.boxes = [];
    }
    item.fullSize = item.fullSize || false;
    item.position = item.position || 'top';
    item.weight = item.weight || 0;
    item._layers = item._layers || function() {
      return [{
        z: 0,
        draw(chartArea) {
          item.draw(chartArea);
        }
      }];
    };
    chart.boxes.push(item);
  },
  removeBox(chart, layoutItem) {
    const index = chart.boxes ? chart.boxes.indexOf(layoutItem) : -1;
    if (index !== -1) {
      chart.boxes.splice(index, 1);
    }
  },
  configure(chart, item, options) {
    item.fullSize = options.fullSize;
    item.position = options.position;
    item.weight = options.weight;
  },
  update(chart, width, height, minPadding) {
    if (!chart) {
      return;
    }
    const padding = toPadding(chart.options.layout.padding);
    const availableWidth = Math.max(width - padding.width, 0);
    const availableHeight = Math.max(height - padding.height, 0);
    const boxes = buildLayoutBoxes(chart.boxes);
    const verticalBoxes = boxes.vertical;
    const horizontalBoxes = boxes.horizontal;
    each(chart.boxes, box => {
      if (typeof box.beforeLayout === 'function') {
        box.beforeLayout();
      }
    });
    const visibleVerticalBoxCount = verticalBoxes.reduce((total, wrap) =>
      wrap.box.options && wrap.box.options.display === false ? total : total + 1, 0) || 1;
    const params = Object.freeze({
      outerWidth: width,
      outerHeight: height,
      padding,
      availableWidth,
      availableHeight,
      vBoxMaxWidth: availableWidth / 2 / visibleVerticalBoxCount,
      hBoxMaxHeight: availableHeight / 2
    });
    const maxPadding = Object.assign({}, padding);
    updateMaxPadding(maxPadding, toPadding(minPadding));
    const chartArea = Object.assign({
      maxPadding,
      w: availableWidth,
      h: availableHeight,
      x: padding.left,
      y: padding.top
    }, padding);
    const stacks = setLayoutDims(verticalBoxes.concat(horizontalBoxes), params);
    fitBoxes(boxes.fullSize, chartArea, params, stacks);
    fitBoxes(verticalBoxes, chartArea, params, stacks);
    if (fitBoxes(horizontalBoxes, chartArea, params, stacks)) {
      fitBoxes(verticalBoxes, chartArea, params, stacks);
    }
    handleMaxPadding(chartArea);
    placeBoxes(boxes.leftAndTop, chartArea, params, stacks);
    chartArea.x += chartArea.w;
    chartArea.y += chartArea.h;
    placeBoxes(boxes.rightAndBottom, chartArea, params, stacks);
    chart.chartArea = {
      left: chartArea.left,
      top: chartArea.top,
      right: chartArea.left + chartArea.w,
      bottom: chartArea.top + chartArea.h,
      height: chartArea.h,
      width: chartArea.w,
    };
    each(boxes.chartArea, (layout) => {
      const box = layout.box;
      Object.assign(box, chart.chartArea);
      box.update(chartArea.w, chartArea.h, {left: 0, top: 0, right: 0, bottom: 0});
    });
  }
};

class BasePlatform {
  acquireContext(canvas, aspectRatio) {}
  releaseContext(context) {
    return false;
  }
  addEventListener(chart, type, listener) {}
  removeEventListener(chart, type, listener) {}
  getDevicePixelRatio() {
    return 1;
  }
  getMaximumSize(element, width, height, aspectRatio) {
    width = Math.max(0, width || element.width);
    height = height || element.height;
    return {
      width,
      height: Math.max(0, aspectRatio ? Math.floor(width / aspectRatio) : height)
    };
  }
  isAttached(canvas) {
    return true;
  }
  updateConfig(config) {
  }
}

class BasicPlatform extends BasePlatform {
  acquireContext(item) {
    return item && item.getContext && item.getContext('2d') || null;
  }
  updateConfig(config) {
    config.options.animation = false;
  }
}

const EXPANDO_KEY = '$chartjs';
const EVENT_TYPES = {
  touchstart: 'mousedown',
  touchmove: 'mousemove',
  touchend: 'mouseup',
  pointerenter: 'mouseenter',
  pointerdown: 'mousedown',
  pointermove: 'mousemove',
  pointerup: 'mouseup',
  pointerleave: 'mouseout',
  pointerout: 'mouseout'
};
const isNullOrEmpty = value => value === null || value === '';
function initCanvas(canvas, aspectRatio) {
  const style = canvas.style;
  const renderHeight = canvas.getAttribute('height');
  const renderWidth = canvas.getAttribute('width');
  canvas[EXPANDO_KEY] = {
    initial: {
      height: renderHeight,
      width: renderWidth,
      style: {
        display: style.display,
        height: style.height,
        width: style.width
      }
    }
  };
  style.display = style.display || 'block';
  style.boxSizing = style.boxSizing || 'border-box';
  if (isNullOrEmpty(renderWidth)) {
    const displayWidth = readUsedSize(canvas, 'width');
    if (displayWidth !== undefined) {
      canvas.width = displayWidth;
    }
  }
  if (isNullOrEmpty(renderHeight)) {
    if (canvas.style.height === '') {
      canvas.height = canvas.width / (aspectRatio || 2);
    } else {
      const displayHeight = readUsedSize(canvas, 'height');
      if (displayHeight !== undefined) {
        canvas.height = displayHeight;
      }
    }
  }
  return canvas;
}
const eventListenerOptions = supportsEventListenerOptions ? {passive: true} : false;
function addListener(node, type, listener) {
  node.addEventListener(type, listener, eventListenerOptions);
}
function removeListener(chart, type, listener) {
  chart.canvas.removeEventListener(type, listener, eventListenerOptions);
}
function fromNativeEvent(event, chart) {
  const type = EVENT_TYPES[event.type] || event.type;
  const {x, y} = getRelativePosition(event, chart);
  return {
    type,
    chart,
    native: event,
    x: x !== undefined ? x : null,
    y: y !== undefined ? y : null,
  };
}
function nodeListContains(nodeList, canvas) {
  for (const node of nodeList) {
    if (node === canvas || node.contains(canvas)) {
      return true;
    }
  }
}
function createAttachObserver(chart, type, listener) {
  const canvas = chart.canvas;
  const observer = new MutationObserver(entries => {
    let trigger = false;
    for (const entry of entries) {
      trigger = trigger || nodeListContains(entry.addedNodes, canvas);
      trigger = trigger && !nodeListContains(entry.removedNodes, canvas);
    }
    if (trigger) {
      listener();
    }
  });
  observer.observe(document, {childList: true, subtree: true});
  return observer;
}
function createDetachObserver(chart, type, listener) {
  const canvas = chart.canvas;
  const observer = new MutationObserver(entries => {
    let trigger = false;
    for (const entry of entries) {
      trigger = trigger || nodeListContains(entry.removedNodes, canvas);
      trigger = trigger && !nodeListContains(entry.addedNodes, canvas);
    }
    if (trigger) {
      listener();
    }
  });
  observer.observe(document, {childList: true, subtree: true});
  return observer;
}
const drpListeningCharts = new Map();
let oldDevicePixelRatio = 0;
function onWindowResize() {
  const dpr = window.devicePixelRatio;
  if (dpr === oldDevicePixelRatio) {
    return;
  }
  oldDevicePixelRatio = dpr;
  drpListeningCharts.forEach((resize, chart) => {
    if (chart.currentDevicePixelRatio !== dpr) {
      resize();
    }
  });
}
function listenDevicePixelRatioChanges(chart, resize) {
  if (!drpListeningCharts.size) {
    window.addEventListener('resize', onWindowResize);
  }
  drpListeningCharts.set(chart, resize);
}
function unlistenDevicePixelRatioChanges(chart) {
  drpListeningCharts.delete(chart);
  if (!drpListeningCharts.size) {
    window.removeEventListener('resize', onWindowResize);
  }
}
function createResizeObserver(chart, type, listener) {
  const canvas = chart.canvas;
  const container = canvas && _getParentNode(canvas);
  if (!container) {
    return;
  }
  const resize = throttled((width, height) => {
    const w = container.clientWidth;
    listener(width, height);
    if (w < container.clientWidth) {
      listener();
    }
  }, window);
  const observer = new ResizeObserver(entries => {
    const entry = entries[0];
    const width = entry.contentRect.width;
    const height = entry.contentRect.height;
    if (width === 0 && height === 0) {
      return;
    }
    resize(width, height);
  });
  observer.observe(container);
  listenDevicePixelRatioChanges(chart, resize);
  return observer;
}
function releaseObserver(chart, type, observer) {
  if (observer) {
    observer.disconnect();
  }
  if (type === 'resize') {
    unlistenDevicePixelRatioChanges(chart);
  }
}
function createProxyAndListen(chart, type, listener) {
  const canvas = chart.canvas;
  const proxy = throttled((event) => {
    if (chart.ctx !== null) {
      listener(fromNativeEvent(event, chart));
    }
  }, chart, (args) => {
    const event = args[0];
    return [event, event.offsetX, event.offsetY];
  });
  addListener(canvas, type, proxy);
  return proxy;
}
class DomPlatform extends BasePlatform {
  acquireContext(canvas, aspectRatio) {
    const context = canvas && canvas.getContext && canvas.getContext('2d');
    if (context && context.canvas === canvas) {
      initCanvas(canvas, aspectRatio);
      return context;
    }
    return null;
  }
  releaseContext(context) {
    const canvas = context.canvas;
    if (!canvas[EXPANDO_KEY]) {
      return false;
    }
    const initial = canvas[EXPANDO_KEY].initial;
    ['height', 'width'].forEach((prop) => {
      const value = initial[prop];
      if (isNullOrUndef(value)) {
        canvas.removeAttribute(prop);
      } else {
        canvas.setAttribute(prop, value);
      }
    });
    const style = initial.style || {};
    Object.keys(style).forEach((key) => {
      canvas.style[key] = style[key];
    });
    canvas.width = canvas.width;
    delete canvas[EXPANDO_KEY];
    return true;
  }
  addEventListener(chart, type, listener) {
    this.removeEventListener(chart, type);
    const proxies = chart.$proxies || (chart.$proxies = {});
    const handlers = {
      attach: createAttachObserver,
      detach: createDetachObserver,
      resize: createResizeObserver
    };
    const handler = handlers[type] || createProxyAndListen;
    proxies[type] = handler(chart, type, listener);
  }
  removeEventListener(chart, type) {
    const proxies = chart.$proxies || (chart.$proxies = {});
    const proxy = proxies[type];
    if (!proxy) {
      return;
    }
    const handlers = {
      attach: releaseObserver,
      detach: releaseObserver,
      resize: releaseObserver
    };
    const handler = handlers[type] || removeListener;
    handler(chart, type, proxy);
    proxies[type] = undefined;
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio;
  }
  getMaximumSize(canvas, width, height, aspectRatio) {
    return getMaximumSize(canvas, width, height, aspectRatio);
  }
  isAttached(canvas) {
    const container = _getParentNode(canvas);
    return !!(container && container.isConnected);
  }
}

function _detectPlatform(canvas) {
  if (!_isDomSupported() || (typeof OffscreenCanvas !== 'undefined' && canvas instanceof OffscreenCanvas)) {
    return BasicPlatform;
  }
  return DomPlatform;
}

class Element {
  constructor() {
    this.x = undefined;
    this.y = undefined;
    this.active = false;
    this.options = undefined;
    this.$animations = undefined;
  }
  tooltipPosition(useFinalPosition) {
    const {x, y} = this.getProps(['x', 'y'], useFinalPosition);
    return {x, y};
  }
  hasValue() {
    return isNumber(this.x) && isNumber(this.y);
  }
  getProps(props, final) {
    const anims = this.$animations;
    if (!final || !anims) {
      return this;
    }
    const ret = {};
    props.forEach(prop => {
      ret[prop] = anims[prop] && anims[prop].active() ? anims[prop]._to : this[prop];
    });
    return ret;
  }
}
Element.defaults = {};
Element.defaultRoutes = undefined;

const formatters = {
  values(value) {
    return isArray(value) ? value : '' + value;
  },
  numeric(tickValue, index, ticks) {
    if (tickValue === 0) {
      return '0';
    }
    const locale = this.chart.options.locale;
    let notation;
    let delta = tickValue;
    if (ticks.length > 1) {
      const maxTick = Math.max(Math.abs(ticks[0].value), Math.abs(ticks[ticks.length - 1].value));
      if (maxTick < 1e-4 || maxTick > 1e+15) {
        notation = 'scientific';
      }
      delta = calculateDelta(tickValue, ticks);
    }
    const logDelta = log10(Math.abs(delta));
    const numDecimal = Math.max(Math.min(-1 * Math.floor(logDelta), 20), 0);
    const options = {notation, minimumFractionDigits: numDecimal, maximumFractionDigits: numDecimal};
    Object.assign(options, this.options.ticks.format);
    return formatNumber(tickValue, locale, options);
  },
  logarithmic(tickValue, index, ticks) {
    if (tickValue === 0) {
      return '0';
    }
    const remain = tickValue / (Math.pow(10, Math.floor(log10(tickValue))));
    if (remain === 1 || remain === 2 || remain === 5) {
      return formatters.numeric.call(this, tickValue, index, ticks);
    }
    return '';
  }
};
function calculateDelta(tickValue, ticks) {
  let delta = ticks.length > 3 ? ticks[2].value - ticks[1].value : ticks[1].value - ticks[0].value;
  if (Math.abs(delta) >= 1 && tickValue !== Math.floor(tickValue)) {
    delta = tickValue - Math.floor(tickValue);
  }
  return delta;
}
var Ticks = {formatters};

defaults.set('scale', {
  display: true,
  offset: false,
  reverse: false,
  beginAtZero: false,
  bounds: 'ticks',
  grace: 0,
  grid: {
    display: true,
    lineWidth: 1,
    drawBorder: true,
    drawOnChartArea: true,
    drawTicks: true,
    tickLength: 8,
    tickWidth: (_ctx, options) => options.lineWidth,
    tickColor: (_ctx, options) => options.color,
    offset: false,
    borderDash: [],
    borderDashOffset: 0.0,
    borderWidth: 1
  },
  title: {
    display: false,
    text: '',
    padding: {
      top: 4,
      bottom: 4
    }
  },
  ticks: {
    minRotation: 0,
    maxRotation: 50,
    mirror: false,
    textStrokeWidth: 0,
    textStrokeColor: '',
    padding: 3,
    display: true,
    autoSkip: true,
    autoSkipPadding: 3,
    labelOffset: 0,
    callback: Ticks.formatters.values,
    minor: {},
    major: {},
    align: 'center',
    crossAlign: 'near',
    showLabelBackdrop: false,
    backdropColor: 'rgba(255, 255, 255, 0.75)',
    backdropPadding: 2,
  }
});
defaults.route('scale.ticks', 'color', '', 'color');
defaults.route('scale.grid', 'color', '', 'borderColor');
defaults.route('scale.grid', 'borderColor', '', 'borderColor');
defaults.route('scale.title', 'color', '', 'color');
defaults.describe('scale', {
  _fallback: false,
  _scriptable: (name) => !name.startsWith('before') && !name.startsWith('after') && name !== 'callback' && name !== 'parser',
  _indexable: (name) => name !== 'borderDash' && name !== 'tickBorderDash',
});
defaults.describe('scales', {
  _fallback: 'scale',
});
defaults.describe('scale.ticks', {
  _scriptable: (name) => name !== 'backdropPadding' && name !== 'callback',
  _indexable: (name) => name !== 'backdropPadding',
});

function autoSkip(scale, ticks) {
  const tickOpts = scale.options.ticks;
  const ticksLimit = tickOpts.maxTicksLimit || determineMaxTicks(scale);
  const majorIndices = tickOpts.major.enabled ? getMajorIndices(ticks) : [];
  const numMajorIndices = majorIndices.length;
  const first = majorIndices[0];
  const last = majorIndices[numMajorIndices - 1];
  const newTicks = [];
  if (numMajorIndices > ticksLimit) {
    skipMajors(ticks, newTicks, majorIndices, numMajorIndices / ticksLimit);
    return newTicks;
  }
  const spacing = calculateSpacing(majorIndices, ticks, ticksLimit);
  if (numMajorIndices > 0) {
    let i, ilen;
    const avgMajorSpacing = numMajorIndices > 1 ? Math.round((last - first) / (numMajorIndices - 1)) : null;
    skip(ticks, newTicks, spacing, isNullOrUndef(avgMajorSpacing) ? 0 : first - avgMajorSpacing, first);
    for (i = 0, ilen = numMajorIndices - 1; i < ilen; i++) {
      skip(ticks, newTicks, spacing, majorIndices[i], majorIndices[i + 1]);
    }
    skip(ticks, newTicks, spacing, last, isNullOrUndef(avgMajorSpacing) ? ticks.length : last + avgMajorSpacing);
    return newTicks;
  }
  skip(ticks, newTicks, spacing);
  return newTicks;
}
function determineMaxTicks(scale) {
  const offset = scale.options.offset;
  const tickLength = scale._tickSize();
  const maxScale = scale._length / tickLength + (offset ? 0 : 1);
  const maxChart = scale._maxLength / tickLength;
  return Math.floor(Math.min(maxScale, maxChart));
}
function calculateSpacing(majorIndices, ticks, ticksLimit) {
  const evenMajorSpacing = getEvenSpacing(majorIndices);
  const spacing = ticks.length / ticksLimit;
  if (!evenMajorSpacing) {
    return Math.max(spacing, 1);
  }
  const factors = _factorize(evenMajorSpacing);
  for (let i = 0, ilen = factors.length - 1; i < ilen; i++) {
    const factor = factors[i];
    if (factor > spacing) {
      return factor;
    }
  }
  return Math.max(spacing, 1);
}
function getMajorIndices(ticks) {
  const result = [];
  let i, ilen;
  for (i = 0, ilen = ticks.length; i < ilen; i++) {
    if (ticks[i].major) {
      result.push(i);
    }
  }
  return result;
}
function skipMajors(ticks, newTicks, majorIndices, spacing) {
  let count = 0;
  let next = majorIndices[0];
  let i;
  spacing = Math.ceil(spacing);
  for (i = 0; i < ticks.length; i++) {
    if (i === next) {
      newTicks.push(ticks[i]);
      count++;
      next = majorIndices[count * spacing];
    }
  }
}
function skip(ticks, newTicks, spacing, majorStart, majorEnd) {
  const start = valueOrDefault(majorStart, 0);
  const end = Math.min(valueOrDefault(majorEnd, ticks.length), ticks.length);
  let count = 0;
  let length, i, next;
  spacing = Math.ceil(spacing);
  if (majorEnd) {
    length = majorEnd - majorStart;
    spacing = length / Math.floor(length / spacing);
  }
  next = start;
  while (next < 0) {
    count++;
    next = Math.round(start + count * spacing);
  }
  for (i = Math.max(start, 0); i < end; i++) {
    if (i === next) {
      newTicks.push(ticks[i]);
      count++;
      next = Math.round(start + count * spacing);
    }
  }
}
function getEvenSpacing(arr) {
  const len = arr.length;
  let i, diff;
  if (len < 2) {
    return false;
  }
  for (diff = arr[0], i = 1; i < len; ++i) {
    if (arr[i] - arr[i - 1] !== diff) {
      return false;
    }
  }
  return diff;
}

const reverseAlign = (align) => align === 'left' ? 'right' : align === 'right' ? 'left' : align;
const offsetFromEdge = (scale, edge, offset) => edge === 'top' || edge === 'left' ? scale[edge] + offset : scale[edge] - offset;
function sample(arr, numItems) {
  const result = [];
  const increment = arr.length / numItems;
  const len = arr.length;
  let i = 0;
  for (; i < len; i += increment) {
    result.push(arr[Math.floor(i)]);
  }
  return result;
}
function getPixelForGridLine(scale, index, offsetGridLines) {
  const length = scale.ticks.length;
  const validIndex = Math.min(index, length - 1);
  const start = scale._startPixel;
  const end = scale._endPixel;
  const epsilon = 1e-6;
  let lineValue = scale.getPixelForTick(validIndex);
  let offset;
  if (offsetGridLines) {
    if (length === 1) {
      offset = Math.max(lineValue - start, end - lineValue);
    } else if (index === 0) {
      offset = (scale.getPixelForTick(1) - lineValue) / 2;
    } else {
      offset = (lineValue - scale.getPixelForTick(validIndex - 1)) / 2;
    }
    lineValue += validIndex < index ? offset : -offset;
    if (lineValue < start - epsilon || lineValue > end + epsilon) {
      return;
    }
  }
  return lineValue;
}
function garbageCollect(caches, length) {
  each(caches, (cache) => {
    const gc = cache.gc;
    const gcLen = gc.length / 2;
    let i;
    if (gcLen > length) {
      for (i = 0; i < gcLen; ++i) {
        delete cache.data[gc[i]];
      }
      gc.splice(0, gcLen);
    }
  });
}
function getTickMarkLength(options) {
  return options.drawTicks ? options.tickLength : 0;
}
function getTitleHeight(options, fallback) {
  if (!options.display) {
    return 0;
  }
  const font = toFont(options.font, fallback);
  const padding = toPadding(options.padding);
  const lines = isArray(options.text) ? options.text.length : 1;
  return (lines * font.lineHeight) + padding.height;
}
function createScaleContext(parent, scale) {
  return createContext(parent, {
    scale,
    type: 'scale'
  });
}
function createTickContext(parent, index, tick) {
  return createContext(parent, {
    tick,
    index,
    type: 'tick'
  });
}
function titleAlign(align, position, reverse) {
  let ret = _toLeftRightCenter(align);
  if ((reverse && position !== 'right') || (!reverse && position === 'right')) {
    ret = reverseAlign(ret);
  }
  return ret;
}
function titleArgs(scale, offset, position, align) {
  const {top, left, bottom, right, chart} = scale;
  const {chartArea, scales} = chart;
  let rotation = 0;
  let maxWidth, titleX, titleY;
  const height = bottom - top;
  const width = right - left;
  if (scale.isHorizontal()) {
    titleX = _alignStartEnd(align, left, right);
    if (isObject(position)) {
      const positionAxisID = Object.keys(position)[0];
      const value = position[positionAxisID];
      titleY = scales[positionAxisID].getPixelForValue(value) + height - offset;
    } else if (position === 'center') {
      titleY = (chartArea.bottom + chartArea.top) / 2 + height - offset;
    } else {
      titleY = offsetFromEdge(scale, position, offset);
    }
    maxWidth = right - left;
  } else {
    if (isObject(position)) {
      const positionAxisID = Object.keys(position)[0];
      const value = position[positionAxisID];
      titleX = scales[positionAxisID].getPixelForValue(value) - width + offset;
    } else if (position === 'center') {
      titleX = (chartArea.left + chartArea.right) / 2 - width + offset;
    } else {
      titleX = offsetFromEdge(scale, position, offset);
    }
    titleY = _alignStartEnd(align, bottom, top);
    rotation = position === 'left' ? -HALF_PI : HALF_PI;
  }
  return {titleX, titleY, maxWidth, rotation};
}
class Scale extends Element {
  constructor(cfg) {
    super();
    this.id = cfg.id;
    this.type = cfg.type;
    this.options = undefined;
    this.ctx = cfg.ctx;
    this.chart = cfg.chart;
    this.top = undefined;
    this.bottom = undefined;
    this.left = undefined;
    this.right = undefined;
    this.width = undefined;
    this.height = undefined;
    this._margins = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    };
    this.maxWidth = undefined;
    this.maxHeight = undefined;
    this.paddingTop = undefined;
    this.paddingBottom = undefined;
    this.paddingLeft = undefined;
    this.paddingRight = undefined;
    this.axis = undefined;
    this.labelRotation = undefined;
    this.min = undefined;
    this.max = undefined;
    this._range = undefined;
    this.ticks = [];
    this._gridLineItems = null;
    this._labelItems = null;
    this._labelSizes = null;
    this._length = 0;
    this._maxLength = 0;
    this._longestTextCache = {};
    this._startPixel = undefined;
    this._endPixel = undefined;
    this._reversePixels = false;
    this._userMax = undefined;
    this._userMin = undefined;
    this._suggestedMax = undefined;
    this._suggestedMin = undefined;
    this._ticksLength = 0;
    this._borderValue = 0;
    this._cache = {};
    this._dataLimitsCached = false;
    this.$context = undefined;
  }
  init(options) {
    this.options = options.setContext(this.getContext());
    this.axis = options.axis;
    this._userMin = this.parse(options.min);
    this._userMax = this.parse(options.max);
    this._suggestedMin = this.parse(options.suggestedMin);
    this._suggestedMax = this.parse(options.suggestedMax);
  }
  parse(raw, index) {
    return raw;
  }
  getUserBounds() {
    let {_userMin, _userMax, _suggestedMin, _suggestedMax} = this;
    _userMin = finiteOrDefault(_userMin, Number.POSITIVE_INFINITY);
    _userMax = finiteOrDefault(_userMax, Number.NEGATIVE_INFINITY);
    _suggestedMin = finiteOrDefault(_suggestedMin, Number.POSITIVE_INFINITY);
    _suggestedMax = finiteOrDefault(_suggestedMax, Number.NEGATIVE_INFINITY);
    return {
      min: finiteOrDefault(_userMin, _suggestedMin),
      max: finiteOrDefault(_userMax, _suggestedMax),
      minDefined: isNumberFinite(_userMin),
      maxDefined: isNumberFinite(_userMax)
    };
  }
  getMinMax(canStack) {
    let {min, max, minDefined, maxDefined} = this.getUserBounds();
    let range;
    if (minDefined && maxDefined) {
      return {min, max};
    }
    const metas = this.getMatchingVisibleMetas();
    for (let i = 0, ilen = metas.length; i < ilen; ++i) {
      range = metas[i].controller.getMinMax(this, canStack);
      if (!minDefined) {
        min = Math.min(min, range.min);
      }
      if (!maxDefined) {
        max = Math.max(max, range.max);
      }
    }
    min = maxDefined && min > max ? max : min;
    max = minDefined && min > max ? min : max;
    return {
      min: finiteOrDefault(min, finiteOrDefault(max, min)),
      max: finiteOrDefault(max, finiteOrDefault(min, max))
    };
  }
  getPadding() {
    return {
      left: this.paddingLeft || 0,
      top: this.paddingTop || 0,
      right: this.paddingRight || 0,
      bottom: this.paddingBottom || 0
    };
  }
  getTicks() {
    return this.ticks;
  }
  getLabels() {
    const data = this.chart.data;
    return this.options.labels || (this.isHorizontal() ? data.xLabels : data.yLabels) || data.labels || [];
  }
  beforeLayout() {
    this._cache = {};
    this._dataLimitsCached = false;
  }
  beforeUpdate() {
    callback(this.options.beforeUpdate, [this]);
  }
  update(maxWidth, maxHeight, margins) {
    const {beginAtZero, grace, ticks: tickOpts} = this.options;
    const sampleSize = tickOpts.sampleSize;
    this.beforeUpdate();
    this.maxWidth = maxWidth;
    this.maxHeight = maxHeight;
    this._margins = margins = Object.assign({
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }, margins);
    this.ticks = null;
    this._labelSizes = null;
    this._gridLineItems = null;
    this._labelItems = null;
    this.beforeSetDimensions();
    this.setDimensions();
    this.afterSetDimensions();
    this._maxLength = this.isHorizontal()
      ? this.width + margins.left + margins.right
      : this.height + margins.top + margins.bottom;
    if (!this._dataLimitsCached) {
      this.beforeDataLimits();
      this.determineDataLimits();
      this.afterDataLimits();
      this._range = _addGrace(this, grace, beginAtZero);
      this._dataLimitsCached = true;
    }
    this.beforeBuildTicks();
    this.ticks = this.buildTicks() || [];
    this.afterBuildTicks();
    const samplingEnabled = sampleSize < this.ticks.length;
    this._convertTicksToLabels(samplingEnabled ? sample(this.ticks, sampleSize) : this.ticks);
    this.configure();
    this.beforeCalculateLabelRotation();
    this.calculateLabelRotation();
    this.afterCalculateLabelRotation();
    if (tickOpts.display && (tickOpts.autoSkip || tickOpts.source === 'auto')) {
      this.ticks = autoSkip(this, this.ticks);
      this._labelSizes = null;
    }
    if (samplingEnabled) {
      this._convertTicksToLabels(this.ticks);
    }
    this.beforeFit();
    this.fit();
    this.afterFit();
    this.afterUpdate();
  }
  configure() {
    let reversePixels = this.options.reverse;
    let startPixel, endPixel;
    if (this.isHorizontal()) {
      startPixel = this.left;
      endPixel = this.right;
    } else {
      startPixel = this.top;
      endPixel = this.bottom;
      reversePixels = !reversePixels;
    }
    this._startPixel = startPixel;
    this._endPixel = endPixel;
    this._reversePixels = reversePixels;
    this._length = endPixel - startPixel;
    this._alignToPixels = this.options.alignToPixels;
  }
  afterUpdate() {
    callback(this.options.afterUpdate, [this]);
  }
  beforeSetDimensions() {
    callback(this.options.beforeSetDimensions, [this]);
  }
  setDimensions() {
    if (this.isHorizontal()) {
      this.width = this.maxWidth;
      this.left = 0;
      this.right = this.width;
    } else {
      this.height = this.maxHeight;
      this.top = 0;
      this.bottom = this.height;
    }
    this.paddingLeft = 0;
    this.paddingTop = 0;
    this.paddingRight = 0;
    this.paddingBottom = 0;
  }
  afterSetDimensions() {
    callback(this.options.afterSetDimensions, [this]);
  }
  _callHooks(name) {
    this.chart.notifyPlugins(name, this.getContext());
    callback(this.options[name], [this]);
  }
  beforeDataLimits() {
    this._callHooks('beforeDataLimits');
  }
  determineDataLimits() {}
  afterDataLimits() {
    this._callHooks('afterDataLimits');
  }
  beforeBuildTicks() {
    this._callHooks('beforeBuildTicks');
  }
  buildTicks() {
    return [];
  }
  afterBuildTicks() {
    this._callHooks('afterBuildTicks');
  }
  beforeTickToLabelConversion() {
    callback(this.options.beforeTickToLabelConversion, [this]);
  }
  generateTickLabels(ticks) {
    const tickOpts = this.options.ticks;
    let i, ilen, tick;
    for (i = 0, ilen = ticks.length; i < ilen; i++) {
      tick = ticks[i];
      tick.label = callback(tickOpts.callback, [tick.value, i, ticks], this);
    }
  }
  afterTickToLabelConversion() {
    callback(this.options.afterTickToLabelConversion, [this]);
  }
  beforeCalculateLabelRotation() {
    callback(this.options.beforeCalculateLabelRotation, [this]);
  }
  calculateLabelRotation() {
    const options = this.options;
    const tickOpts = options.ticks;
    const numTicks = this.ticks.length;
    const minRotation = tickOpts.minRotation || 0;
    const maxRotation = tickOpts.maxRotation;
    let labelRotation = minRotation;
    let tickWidth, maxHeight, maxLabelDiagonal;
    if (!this._isVisible() || !tickOpts.display || minRotation >= maxRotation || numTicks <= 1 || !this.isHorizontal()) {
      this.labelRotation = minRotation;
      return;
    }
    const labelSizes = this._getLabelSizes();
    const maxLabelWidth = labelSizes.widest.width;
    const maxLabelHeight = labelSizes.highest.height;
    const maxWidth = _limitValue(this.chart.width - maxLabelWidth, 0, this.maxWidth);
    tickWidth = options.offset ? this.maxWidth / numTicks : maxWidth / (numTicks - 1);
    if (maxLabelWidth + 6 > tickWidth) {
      tickWidth = maxWidth / (numTicks - (options.offset ? 0.5 : 1));
      maxHeight = this.maxHeight - getTickMarkLength(options.grid)
				- tickOpts.padding - getTitleHeight(options.title, this.chart.options.font);
      maxLabelDiagonal = Math.sqrt(maxLabelWidth * maxLabelWidth + maxLabelHeight * maxLabelHeight);
      labelRotation = toDegrees(Math.min(
        Math.asin(_limitValue((labelSizes.highest.height + 6) / tickWidth, -1, 1)),
        Math.asin(_limitValue(maxHeight / maxLabelDiagonal, -1, 1)) - Math.asin(_limitValue(maxLabelHeight / maxLabelDiagonal, -1, 1))
      ));
      labelRotation = Math.max(minRotation, Math.min(maxRotation, labelRotation));
    }
    this.labelRotation = labelRotation;
  }
  afterCalculateLabelRotation() {
    callback(this.options.afterCalculateLabelRotation, [this]);
  }
  beforeFit() {
    callback(this.options.beforeFit, [this]);
  }
  fit() {
    const minSize = {
      width: 0,
      height: 0
    };
    const {chart, options: {ticks: tickOpts, title: titleOpts, grid: gridOpts}} = this;
    const display = this._isVisible();
    const isHorizontal = this.isHorizontal();
    if (display) {
      const titleHeight = getTitleHeight(titleOpts, chart.options.font);
      if (isHorizontal) {
        minSize.width = this.maxWidth;
        minSize.height = getTickMarkLength(gridOpts) + titleHeight;
      } else {
        minSize.height = this.maxHeight;
        minSize.width = getTickMarkLength(gridOpts) + titleHeight;
      }
      if (tickOpts.display && this.ticks.length) {
        const {first, last, widest, highest} = this._getLabelSizes();
        const tickPadding = tickOpts.padding * 2;
        const angleRadians = toRadians(this.labelRotation);
        const cos = Math.cos(angleRadians);
        const sin = Math.sin(angleRadians);
        if (isHorizontal) {
          const labelHeight = tickOpts.mirror ? 0 : sin * widest.width + cos * highest.height;
          minSize.height = Math.min(this.maxHeight, minSize.height + labelHeight + tickPadding);
        } else {
          const labelWidth = tickOpts.mirror ? 0 : cos * widest.width + sin * highest.height;
          minSize.width = Math.min(this.maxWidth, minSize.width + labelWidth + tickPadding);
        }
        this._calculatePadding(first, last, sin, cos);
      }
    }
    this._handleMargins();
    if (isHorizontal) {
      this.width = this._length = chart.width - this._margins.left - this._margins.right;
      this.height = minSize.height;
    } else {
      this.width = minSize.width;
      this.height = this._length = chart.height - this._margins.top - this._margins.bottom;
    }
  }
  _calculatePadding(first, last, sin, cos) {
    const {ticks: {align, padding}, position} = this.options;
    const isRotated = this.labelRotation !== 0;
    const labelsBelowTicks = position !== 'top' && this.axis === 'x';
    if (this.isHorizontal()) {
      const offsetLeft = this.getPixelForTick(0) - this.left;
      const offsetRight = this.right - this.getPixelForTick(this.ticks.length - 1);
      let paddingLeft = 0;
      let paddingRight = 0;
      if (isRotated) {
        if (labelsBelowTicks) {
          paddingLeft = cos * first.width;
          paddingRight = sin * last.height;
        } else {
          paddingLeft = sin * first.height;
          paddingRight = cos * last.width;
        }
      } else if (align === 'start') {
        paddingRight = last.width;
      } else if (align === 'end') {
        paddingLeft = first.width;
      } else {
        paddingLeft = first.width / 2;
        paddingRight = last.width / 2;
      }
      this.paddingLeft = Math.max((paddingLeft - offsetLeft + padding) * this.width / (this.width - offsetLeft), 0);
      this.paddingRight = Math.max((paddingRight - offsetRight + padding) * this.width / (this.width - offsetRight), 0);
    } else {
      let paddingTop = last.height / 2;
      let paddingBottom = first.height / 2;
      if (align === 'start') {
        paddingTop = 0;
        paddingBottom = first.height;
      } else if (align === 'end') {
        paddingTop = last.height;
        paddingBottom = 0;
      }
      this.paddingTop = paddingTop + padding;
      this.paddingBottom = paddingBottom + padding;
    }
  }
  _handleMargins() {
    if (this._margins) {
      this._margins.left = Math.max(this.paddingLeft, this._margins.left);
      this._margins.top = Math.max(this.paddingTop, this._margins.top);
      this._margins.right = Math.max(this.paddingRight, this._margins.right);
      this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom);
    }
  }
  afterFit() {
    callback(this.options.afterFit, [this]);
  }
  isHorizontal() {
    const {axis, position} = this.options;
    return position === 'top' || position === 'bottom' || axis === 'x';
  }
  isFullSize() {
    return this.options.fullSize;
  }
  _convertTicksToLabels(ticks) {
    this.beforeTickToLabelConversion();
    this.generateTickLabels(ticks);
    let i, ilen;
    for (i = 0, ilen = ticks.length; i < ilen; i++) {
      if (isNullOrUndef(ticks[i].label)) {
        ticks.splice(i, 1);
        ilen--;
        i--;
      }
    }
    this.afterTickToLabelConversion();
  }
  _getLabelSizes() {
    let labelSizes = this._labelSizes;
    if (!labelSizes) {
      const sampleSize = this.options.ticks.sampleSize;
      let ticks = this.ticks;
      if (sampleSize < ticks.length) {
        ticks = sample(ticks, sampleSize);
      }
      this._labelSizes = labelSizes = this._computeLabelSizes(ticks, ticks.length);
    }
    return labelSizes;
  }
  _computeLabelSizes(ticks, length) {
    const {ctx, _longestTextCache: caches} = this;
    const widths = [];
    const heights = [];
    let widestLabelSize = 0;
    let highestLabelSize = 0;
    let i, j, jlen, label, tickFont, fontString, cache, lineHeight, width, height, nestedLabel;
    for (i = 0; i < length; ++i) {
      label = ticks[i].label;
      tickFont = this._resolveTickFontOptions(i);
      ctx.font = fontString = tickFont.string;
      cache = caches[fontString] = caches[fontString] || {data: {}, gc: []};
      lineHeight = tickFont.lineHeight;
      width = height = 0;
      if (!isNullOrUndef(label) && !isArray(label)) {
        width = _measureText(ctx, cache.data, cache.gc, width, label);
        height = lineHeight;
      } else if (isArray(label)) {
        for (j = 0, jlen = label.length; j < jlen; ++j) {
          nestedLabel = label[j];
          if (!isNullOrUndef(nestedLabel) && !isArray(nestedLabel)) {
            width = _measureText(ctx, cache.data, cache.gc, width, nestedLabel);
            height += lineHeight;
          }
        }
      }
      widths.push(width);
      heights.push(height);
      widestLabelSize = Math.max(width, widestLabelSize);
      highestLabelSize = Math.max(height, highestLabelSize);
    }
    garbageCollect(caches, length);
    const widest = widths.indexOf(widestLabelSize);
    const highest = heights.indexOf(highestLabelSize);
    const valueAt = (idx) => ({width: widths[idx] || 0, height: heights[idx] || 0});
    return {
      first: valueAt(0),
      last: valueAt(length - 1),
      widest: valueAt(widest),
      highest: valueAt(highest),
      widths,
      heights,
    };
  }
  getLabelForValue(value) {
    return value;
  }
  getPixelForValue(value, index) {
    return NaN;
  }
  getValueForPixel(pixel) {}
  getPixelForTick(index) {
    const ticks = this.ticks;
    if (index < 0 || index > ticks.length - 1) {
      return null;
    }
    return this.getPixelForValue(ticks[index].value);
  }
  getPixelForDecimal(decimal) {
    if (this._reversePixels) {
      decimal = 1 - decimal;
    }
    const pixel = this._startPixel + decimal * this._length;
    return _int16Range(this._alignToPixels ? _alignPixel(this.chart, pixel, 0) : pixel);
  }
  getDecimalForPixel(pixel) {
    const decimal = (pixel - this._startPixel) / this._length;
    return this._reversePixels ? 1 - decimal : decimal;
  }
  getBasePixel() {
    return this.getPixelForValue(this.getBaseValue());
  }
  getBaseValue() {
    const {min, max} = this;
    return min < 0 && max < 0 ? max :
      min > 0 && max > 0 ? min :
      0;
  }
  getContext(index) {
    const ticks = this.ticks || [];
    if (index >= 0 && index < ticks.length) {
      const tick = ticks[index];
      return tick.$context ||
				(tick.$context = createTickContext(this.getContext(), index, tick));
    }
    return this.$context ||
			(this.$context = createScaleContext(this.chart.getContext(), this));
  }
  _tickSize() {
    const optionTicks = this.options.ticks;
    const rot = toRadians(this.labelRotation);
    const cos = Math.abs(Math.cos(rot));
    const sin = Math.abs(Math.sin(rot));
    const labelSizes = this._getLabelSizes();
    const padding = optionTicks.autoSkipPadding || 0;
    const w = labelSizes ? labelSizes.widest.width + padding : 0;
    const h = labelSizes ? labelSizes.highest.height + padding : 0;
    return this.isHorizontal()
      ? h * cos > w * sin ? w / cos : h / sin
      : h * sin < w * cos ? h / cos : w / sin;
  }
  _isVisible() {
    const display = this.options.display;
    if (display !== 'auto') {
      return !!display;
    }
    return this.getMatchingVisibleMetas().length > 0;
  }
  _computeGridLineItems(chartArea) {
    const axis = this.axis;
    const chart = this.chart;
    const options = this.options;
    const {grid, position} = options;
    const offset = grid.offset;
    const isHorizontal = this.isHorizontal();
    const ticks = this.ticks;
    const ticksLength = ticks.length + (offset ? 1 : 0);
    const tl = getTickMarkLength(grid);
    const items = [];
    const borderOpts = grid.setContext(this.getContext());
    const axisWidth = borderOpts.drawBorder ? borderOpts.borderWidth : 0;
    const axisHalfWidth = axisWidth / 2;
    const alignBorderValue = function(pixel) {
      return _alignPixel(chart, pixel, axisWidth);
    };
    let borderValue, i, lineValue, alignedLineValue;
    let tx1, ty1, tx2, ty2, x1, y1, x2, y2;
    if (position === 'top') {
      borderValue = alignBorderValue(this.bottom);
      ty1 = this.bottom - tl;
      ty2 = borderValue - axisHalfWidth;
      y1 = alignBorderValue(chartArea.top) + axisHalfWidth;
      y2 = chartArea.bottom;
    } else if (position === 'bottom') {
      borderValue = alignBorderValue(this.top);
      y1 = chartArea.top;
      y2 = alignBorderValue(chartArea.bottom) - axisHalfWidth;
      ty1 = borderValue + axisHalfWidth;
      ty2 = this.top + tl;
    } else if (position === 'left') {
      borderValue = alignBorderValue(this.right);
      tx1 = this.right - tl;
      tx2 = borderValue - axisHalfWidth;
      x1 = alignBorderValue(chartArea.left) + axisHalfWidth;
      x2 = chartArea.right;
    } else if (position === 'right') {
      borderValue = alignBorderValue(this.left);
      x1 = chartArea.left;
      x2 = alignBorderValue(chartArea.right) - axisHalfWidth;
      tx1 = borderValue + axisHalfWidth;
      tx2 = this.left + tl;
    } else if (axis === 'x') {
      if (position === 'center') {
        borderValue = alignBorderValue((chartArea.top + chartArea.bottom) / 2 + 0.5);
      } else if (isObject(position)) {
        const positionAxisID = Object.keys(position)[0];
        const value = position[positionAxisID];
        borderValue = alignBorderValue(this.chart.scales[positionAxisID].getPixelForValue(value));
      }
      y1 = chartArea.top;
      y2 = chartArea.bottom;
      ty1 = borderValue + axisHalfWidth;
      ty2 = ty1 + tl;
    } else if (axis === 'y') {
      if (position === 'center') {
        borderValue = alignBorderValue((chartArea.left + chartArea.right) / 2);
      } else if (isObject(position)) {
        const positionAxisID = Object.keys(position)[0];
        const value = position[positionAxisID];
        borderValue = alignBorderValue(this.chart.scales[positionAxisID].getPixelForValue(value));
      }
      tx1 = borderValue - axisHalfWidth;
      tx2 = tx1 - tl;
      x1 = chartArea.left;
      x2 = chartArea.right;
    }
    const limit = valueOrDefault(options.ticks.maxTicksLimit, ticksLength);
    const step = Math.max(1, Math.ceil(ticksLength / limit));
    for (i = 0; i < ticksLength; i += step) {
      const optsAtIndex = grid.setContext(this.getContext(i));
      const lineWidth = optsAtIndex.lineWidth;
      const lineColor = optsAtIndex.color;
      const borderDash = grid.borderDash || [];
      const borderDashOffset = optsAtIndex.borderDashOffset;
      const tickWidth = optsAtIndex.tickWidth;
      const tickColor = optsAtIndex.tickColor;
      const tickBorderDash = optsAtIndex.tickBorderDash || [];
      const tickBorderDashOffset = optsAtIndex.tickBorderDashOffset;
      lineValue = getPixelForGridLine(this, i, offset);
      if (lineValue === undefined) {
        continue;
      }
      alignedLineValue = _alignPixel(chart, lineValue, lineWidth);
      if (isHorizontal) {
        tx1 = tx2 = x1 = x2 = alignedLineValue;
      } else {
        ty1 = ty2 = y1 = y2 = alignedLineValue;
      }
      items.push({
        tx1,
        ty1,
        tx2,
        ty2,
        x1,
        y1,
        x2,
        y2,
        width: lineWidth,
        color: lineColor,
        borderDash,
        borderDashOffset,
        tickWidth,
        tickColor,
        tickBorderDash,
        tickBorderDashOffset,
      });
    }
    this._ticksLength = ticksLength;
    this._borderValue = borderValue;
    return items;
  }
  _computeLabelItems(chartArea) {
    const axis = this.axis;
    const options = this.options;
    const {position, ticks: optionTicks} = options;
    const isHorizontal = this.isHorizontal();
    const ticks = this.ticks;
    const {align, crossAlign, padding, mirror} = optionTicks;
    const tl = getTickMarkLength(options.grid);
    const tickAndPadding = tl + padding;
    const hTickAndPadding = mirror ? -padding : tickAndPadding;
    const rotation = -toRadians(this.labelRotation);
    const items = [];
    let i, ilen, tick, label, x, y, textAlign, pixel, font, lineHeight, lineCount, textOffset;
    let textBaseline = 'middle';
    if (position === 'top') {
      y = this.bottom - hTickAndPadding;
      textAlign = this._getXAxisLabelAlignment();
    } else if (position === 'bottom') {
      y = this.top + hTickAndPadding;
      textAlign = this._getXAxisLabelAlignment();
    } else if (position === 'left') {
      const ret = this._getYAxisLabelAlignment(tl);
      textAlign = ret.textAlign;
      x = ret.x;
    } else if (position === 'right') {
      const ret = this._getYAxisLabelAlignment(tl);
      textAlign = ret.textAlign;
      x = ret.x;
    } else if (axis === 'x') {
      if (position === 'center') {
        y = ((chartArea.top + chartArea.bottom) / 2) + tickAndPadding;
      } else if (isObject(position)) {
        const positionAxisID = Object.keys(position)[0];
        const value = position[positionAxisID];
        y = this.chart.scales[positionAxisID].getPixelForValue(value) + tickAndPadding;
      }
      textAlign = this._getXAxisLabelAlignment();
    } else if (axis === 'y') {
      if (position === 'center') {
        x = ((chartArea.left + chartArea.right) / 2) - tickAndPadding;
      } else if (isObject(position)) {
        const positionAxisID = Object.keys(position)[0];
        const value = position[positionAxisID];
        x = this.chart.scales[positionAxisID].getPixelForValue(value);
      }
      textAlign = this._getYAxisLabelAlignment(tl).textAlign;
    }
    if (axis === 'y') {
      if (align === 'start') {
        textBaseline = 'top';
      } else if (align === 'end') {
        textBaseline = 'bottom';
      }
    }
    const labelSizes = this._getLabelSizes();
    for (i = 0, ilen = ticks.length; i < ilen; ++i) {
      tick = ticks[i];
      label = tick.label;
      const optsAtIndex = optionTicks.setContext(this.getContext(i));
      pixel = this.getPixelForTick(i) + optionTicks.labelOffset;
      font = this._resolveTickFontOptions(i);
      lineHeight = font.lineHeight;
      lineCount = isArray(label) ? label.length : 1;
      const halfCount = lineCount / 2;
      const color = optsAtIndex.color;
      const strokeColor = optsAtIndex.textStrokeColor;
      const strokeWidth = optsAtIndex.textStrokeWidth;
      if (isHorizontal) {
        x = pixel;
        if (position === 'top') {
          if (crossAlign === 'near' || rotation !== 0) {
            textOffset = -lineCount * lineHeight + lineHeight / 2;
          } else if (crossAlign === 'center') {
            textOffset = -labelSizes.highest.height / 2 - halfCount * lineHeight + lineHeight;
          } else {
            textOffset = -labelSizes.highest.height + lineHeight / 2;
          }
        } else {
          if (crossAlign === 'near' || rotation !== 0) {
            textOffset = lineHeight / 2;
          } else if (crossAlign === 'center') {
            textOffset = labelSizes.highest.height / 2 - halfCount * lineHeight;
          } else {
            textOffset = labelSizes.highest.height - lineCount * lineHeight;
          }
        }
        if (mirror) {
          textOffset *= -1;
        }
      } else {
        y = pixel;
        textOffset = (1 - lineCount) * lineHeight / 2;
      }
      let backdrop;
      if (optsAtIndex.showLabelBackdrop) {
        const labelPadding = toPadding(optsAtIndex.backdropPadding);
        const height = labelSizes.heights[i];
        const width = labelSizes.widths[i];
        let top = y + textOffset - labelPadding.top;
        let left = x - labelPadding.left;
        switch (textBaseline) {
        case 'middle':
          top -= height / 2;
          break;
        case 'bottom':
          top -= height;
          break;
        }
        switch (textAlign) {
        case 'center':
          left -= width / 2;
          break;
        case 'right':
          left -= width;
          break;
        }
        backdrop = {
          left,
          top,
          width: width + labelPadding.width,
          height: height + labelPadding.height,
          color: optsAtIndex.backdropColor,
        };
      }
      items.push({
        rotation,
        label,
        font,
        color,
        strokeColor,
        strokeWidth,
        textOffset,
        textAlign,
        textBaseline,
        translation: [x, y],
        backdrop,
      });
    }
    return items;
  }
  _getXAxisLabelAlignment() {
    const {position, ticks} = this.options;
    const rotation = -toRadians(this.labelRotation);
    if (rotation) {
      return position === 'top' ? 'left' : 'right';
    }
    let align = 'center';
    if (ticks.align === 'start') {
      align = 'left';
    } else if (ticks.align === 'end') {
      align = 'right';
    }
    return align;
  }
  _getYAxisLabelAlignment(tl) {
    const {position, ticks: {crossAlign, mirror, padding}} = this.options;
    const labelSizes = this._getLabelSizes();
    const tickAndPadding = tl + padding;
    const widest = labelSizes.widest.width;
    let textAlign;
    let x;
    if (position === 'left') {
      if (mirror) {
        x = this.right + padding;
        if (crossAlign === 'near') {
          textAlign = 'left';
        } else if (crossAlign === 'center') {
          textAlign = 'center';
          x += (widest / 2);
        } else {
          textAlign = 'right';
          x += widest;
        }
      } else {
        x = this.right - tickAndPadding;
        if (crossAlign === 'near') {
          textAlign = 'right';
        } else if (crossAlign === 'center') {
          textAlign = 'center';
          x -= (widest / 2);
        } else {
          textAlign = 'left';
          x = this.left;
        }
      }
    } else if (position === 'right') {
      if (mirror) {
        x = this.left + padding;
        if (crossAlign === 'near') {
          textAlign = 'right';
        } else if (crossAlign === 'center') {
          textAlign = 'center';
          x -= (widest / 2);
        } else {
          textAlign = 'left';
          x -= widest;
        }
      } else {
        x = this.left + tickAndPadding;
        if (crossAlign === 'near') {
          textAlign = 'left';
        } else if (crossAlign === 'center') {
          textAlign = 'center';
          x += widest / 2;
        } else {
          textAlign = 'right';
          x = this.right;
        }
      }
    } else {
      textAlign = 'right';
    }
    return {textAlign, x};
  }
  _computeLabelArea() {
    if (this.options.ticks.mirror) {
      return;
    }
    const chart = this.chart;
    const position = this.options.position;
    if (position === 'left' || position === 'right') {
      return {top: 0, left: this.left, bottom: chart.height, right: this.right};
    } if (position === 'top' || position === 'bottom') {
      return {top: this.top, left: 0, bottom: this.bottom, right: chart.width};
    }
  }
  drawBackground() {
    const {ctx, options: {backgroundColor}, left, top, width, height} = this;
    if (backgroundColor) {
      ctx.save();
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(left, top, width, height);
      ctx.restore();
    }
  }
  getLineWidthForValue(value) {
    const grid = this.options.grid;
    if (!this._isVisible() || !grid.display) {
      return 0;
    }
    const ticks = this.ticks;
    const index = ticks.findIndex(t => t.value === value);
    if (index >= 0) {
      const opts = grid.setContext(this.getContext(index));
      return opts.lineWidth;
    }
    return 0;
  }
  drawGrid(chartArea) {
    const grid = this.options.grid;
    const ctx = this.ctx;
    const items = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(chartArea));
    let i, ilen;
    const drawLine = (p1, p2, style) => {
      if (!style.width || !style.color) {
        return;
      }
      ctx.save();
      ctx.lineWidth = style.width;
      ctx.strokeStyle = style.color;
      ctx.setLineDash(style.borderDash || []);
      ctx.lineDashOffset = style.borderDashOffset;
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.stroke();
      ctx.restore();
    };
    if (grid.display) {
      for (i = 0, ilen = items.length; i < ilen; ++i) {
        const item = items[i];
        if (grid.drawOnChartArea) {
          drawLine(
            {x: item.x1, y: item.y1},
            {x: item.x2, y: item.y2},
            item
          );
        }
        if (grid.drawTicks) {
          drawLine(
            {x: item.tx1, y: item.ty1},
            {x: item.tx2, y: item.ty2},
            {
              color: item.tickColor,
              width: item.tickWidth,
              borderDash: item.tickBorderDash,
              borderDashOffset: item.tickBorderDashOffset
            }
          );
        }
      }
    }
  }
  drawBorder() {
    const {chart, ctx, options: {grid}} = this;
    const borderOpts = grid.setContext(this.getContext());
    const axisWidth = grid.drawBorder ? borderOpts.borderWidth : 0;
    if (!axisWidth) {
      return;
    }
    const lastLineWidth = grid.setContext(this.getContext(0)).lineWidth;
    const borderValue = this._borderValue;
    let x1, x2, y1, y2;
    if (this.isHorizontal()) {
      x1 = _alignPixel(chart, this.left, axisWidth) - axisWidth / 2;
      x2 = _alignPixel(chart, this.right, lastLineWidth) + lastLineWidth / 2;
      y1 = y2 = borderValue;
    } else {
      y1 = _alignPixel(chart, this.top, axisWidth) - axisWidth / 2;
      y2 = _alignPixel(chart, this.bottom, lastLineWidth) + lastLineWidth / 2;
      x1 = x2 = borderValue;
    }
    ctx.save();
    ctx.lineWidth = borderOpts.borderWidth;
    ctx.strokeStyle = borderOpts.borderColor;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.restore();
  }
  drawLabels(chartArea) {
    const optionTicks = this.options.ticks;
    if (!optionTicks.display) {
      return;
    }
    const ctx = this.ctx;
    const area = this._computeLabelArea();
    if (area) {
      clipArea(ctx, area);
    }
    const items = this._labelItems || (this._labelItems = this._computeLabelItems(chartArea));
    let i, ilen;
    for (i = 0, ilen = items.length; i < ilen; ++i) {
      const item = items[i];
      const tickFont = item.font;
      const label = item.label;
      if (item.backdrop) {
        ctx.fillStyle = item.backdrop.color;
        ctx.fillRect(item.backdrop.left, item.backdrop.top, item.backdrop.width, item.backdrop.height);
      }
      let y = item.textOffset;
      renderText(ctx, label, 0, y, tickFont, item);
    }
    if (area) {
      unclipArea(ctx);
    }
  }
  drawTitle() {
    const {ctx, options: {position, title, reverse}} = this;
    if (!title.display) {
      return;
    }
    const font = toFont(title.font);
    const padding = toPadding(title.padding);
    const align = title.align;
    let offset = font.lineHeight / 2;
    if (position === 'bottom' || position === 'center' || isObject(position)) {
      offset += padding.bottom;
      if (isArray(title.text)) {
        offset += font.lineHeight * (title.text.length - 1);
      }
    } else {
      offset += padding.top;
    }
    const {titleX, titleY, maxWidth, rotation} = titleArgs(this, offset, position, align);
    renderText(ctx, title.text, 0, 0, font, {
      color: title.color,
      maxWidth,
      rotation,
      textAlign: titleAlign(align, position, reverse),
      textBaseline: 'middle',
      translation: [titleX, titleY],
    });
  }
  draw(chartArea) {
    if (!this._isVisible()) {
      return;
    }
    this.drawBackground();
    this.drawGrid(chartArea);
    this.drawBorder();
    this.drawTitle();
    this.drawLabels(chartArea);
  }
  _layers() {
    const opts = this.options;
    const tz = opts.ticks && opts.ticks.z || 0;
    const gz = valueOrDefault(opts.grid && opts.grid.z, -1);
    if (!this._isVisible() || this.draw !== Scale.prototype.draw) {
      return [{
        z: tz,
        draw: (chartArea) => {
          this.draw(chartArea);
        }
      }];
    }
    return [{
      z: gz,
      draw: (chartArea) => {
        this.drawBackground();
        this.drawGrid(chartArea);
        this.drawTitle();
      }
    }, {
      z: gz + 1,
      draw: () => {
        this.drawBorder();
      }
    }, {
      z: tz,
      draw: (chartArea) => {
        this.drawLabels(chartArea);
      }
    }];
  }
  getMatchingVisibleMetas(type) {
    const metas = this.chart.getSortedVisibleDatasetMetas();
    const axisID = this.axis + 'AxisID';
    const result = [];
    let i, ilen;
    for (i = 0, ilen = metas.length; i < ilen; ++i) {
      const meta = metas[i];
      if (meta[axisID] === this.id && (!type || meta.type === type)) {
        result.push(meta);
      }
    }
    return result;
  }
  _resolveTickFontOptions(index) {
    const opts = this.options.ticks.setContext(this.getContext(index));
    return toFont(opts.font);
  }
  _maxDigits() {
    const fontSize = this._resolveTickFontOptions(0).lineHeight;
    return (this.isHorizontal() ? this.width : this.height) / fontSize;
  }
}

class TypedRegistry {
  constructor(type, scope, override) {
    this.type = type;
    this.scope = scope;
    this.override = override;
    this.items = Object.create(null);
  }
  isForType(type) {
    return Object.prototype.isPrototypeOf.call(this.type.prototype, type.prototype);
  }
  register(item) {
    const proto = Object.getPrototypeOf(item);
    let parentScope;
    if (isIChartComponent(proto)) {
      parentScope = this.register(proto);
    }
    const items = this.items;
    const id = item.id;
    const scope = this.scope + '.' + id;
    if (!id) {
      throw new Error('class does not have id: ' + item);
    }
    if (id in items) {
      return scope;
    }
    items[id] = item;
    registerDefaults(item, scope, parentScope);
    if (this.override) {
      defaults.override(item.id, item.overrides);
    }
    return scope;
  }
  get(id) {
    return this.items[id];
  }
  unregister(item) {
    const items = this.items;
    const id = item.id;
    const scope = this.scope;
    if (id in items) {
      delete items[id];
    }
    if (scope && id in defaults[scope]) {
      delete defaults[scope][id];
      if (this.override) {
        delete overrides[id];
      }
    }
  }
}
function registerDefaults(item, scope, parentScope) {
  const itemDefaults = merge(Object.create(null), [
    parentScope ? defaults.get(parentScope) : {},
    defaults.get(scope),
    item.defaults
  ]);
  defaults.set(scope, itemDefaults);
  if (item.defaultRoutes) {
    routeDefaults(scope, item.defaultRoutes);
  }
  if (item.descriptors) {
    defaults.describe(scope, item.descriptors);
  }
}
function routeDefaults(scope, routes) {
  Object.keys(routes).forEach(property => {
    const propertyParts = property.split('.');
    const sourceName = propertyParts.pop();
    const sourceScope = [scope].concat(propertyParts).join('.');
    const parts = routes[property].split('.');
    const targetName = parts.pop();
    const targetScope = parts.join('.');
    defaults.route(sourceScope, sourceName, targetScope, targetName);
  });
}
function isIChartComponent(proto) {
  return 'id' in proto && 'defaults' in proto;
}

class Registry {
  constructor() {
    this.controllers = new TypedRegistry(DatasetController, 'datasets', true);
    this.elements = new TypedRegistry(Element, 'elements');
    this.plugins = new TypedRegistry(Object, 'plugins');
    this.scales = new TypedRegistry(Scale, 'scales');
    this._typedRegistries = [this.controllers, this.scales, this.elements];
  }
  add(...args) {
    this._each('register', args);
  }
  remove(...args) {
    this._each('unregister', args);
  }
  addControllers(...args) {
    this._each('register', args, this.controllers);
  }
  addElements(...args) {
    this._each('register', args, this.elements);
  }
  addPlugins(...args) {
    this._each('register', args, this.plugins);
  }
  addScales(...args) {
    this._each('register', args, this.scales);
  }
  getController(id) {
    return this._get(id, this.controllers, 'controller');
  }
  getElement(id) {
    return this._get(id, this.elements, 'element');
  }
  getPlugin(id) {
    return this._get(id, this.plugins, 'plugin');
  }
  getScale(id) {
    return this._get(id, this.scales, 'scale');
  }
  removeControllers(...args) {
    this._each('unregister', args, this.controllers);
  }
  removeElements(...args) {
    this._each('unregister', args, this.elements);
  }
  removePlugins(...args) {
    this._each('unregister', args, this.plugins);
  }
  removeScales(...args) {
    this._each('unregister', args, this.scales);
  }
  _each(method, args, typedRegistry) {
    [...args].forEach(arg => {
      const reg = typedRegistry || this._getRegistryForType(arg);
      if (typedRegistry || reg.isForType(arg) || (reg === this.plugins && arg.id)) {
        this._exec(method, reg, arg);
      } else {
        each(arg, item => {
          const itemReg = typedRegistry || this._getRegistryForType(item);
          this._exec(method, itemReg, item);
        });
      }
    });
  }
  _exec(method, registry, component) {
    const camelMethod = _capitalize(method);
    callback(component['before' + camelMethod], [], component);
    registry[method](component);
    callback(component['after' + camelMethod], [], component);
  }
  _getRegistryForType(type) {
    for (let i = 0; i < this._typedRegistries.length; i++) {
      const reg = this._typedRegistries[i];
      if (reg.isForType(type)) {
        return reg;
      }
    }
    return this.plugins;
  }
  _get(id, typedRegistry, type) {
    const item = typedRegistry.get(id);
    if (item === undefined) {
      throw new Error('"' + id + '" is not a registered ' + type + '.');
    }
    return item;
  }
}
var registry = new Registry();

class PluginService {
  constructor() {
    this._init = [];
  }
  notify(chart, hook, args, filter) {
    if (hook === 'beforeInit') {
      this._init = this._createDescriptors(chart, true);
      this._notify(this._init, chart, 'install');
    }
    const descriptors = filter ? this._descriptors(chart).filter(filter) : this._descriptors(chart);
    const result = this._notify(descriptors, chart, hook, args);
    if (hook === 'destroy') {
      this._notify(descriptors, chart, 'stop');
      this._notify(this._init, chart, 'uninstall');
    }
    return result;
  }
  _notify(descriptors, chart, hook, args) {
    args = args || {};
    for (const descriptor of descriptors) {
      const plugin = descriptor.plugin;
      const method = plugin[hook];
      const params = [chart, args, descriptor.options];
      if (callback(method, params, plugin) === false && args.cancelable) {
        return false;
      }
    }
    return true;
  }
  invalidate() {
    if (!isNullOrUndef(this._cache)) {
      this._oldCache = this._cache;
      this._cache = undefined;
    }
  }
  _descriptors(chart) {
    if (this._cache) {
      return this._cache;
    }
    const descriptors = this._cache = this._createDescriptors(chart);
    this._notifyStateChanges(chart);
    return descriptors;
  }
  _createDescriptors(chart, all) {
    const config = chart && chart.config;
    const options = valueOrDefault(config.options && config.options.plugins, {});
    const plugins = allPlugins(config);
    return options === false && !all ? [] : createDescriptors(chart, plugins, options, all);
  }
  _notifyStateChanges(chart) {
    const previousDescriptors = this._oldCache || [];
    const descriptors = this._cache;
    const diff = (a, b) => a.filter(x => !b.some(y => x.plugin.id === y.plugin.id));
    this._notify(diff(previousDescriptors, descriptors), chart, 'stop');
    this._notify(diff(descriptors, previousDescriptors), chart, 'start');
  }
}
function allPlugins(config) {
  const plugins = [];
  const keys = Object.keys(registry.plugins.items);
  for (let i = 0; i < keys.length; i++) {
    plugins.push(registry.getPlugin(keys[i]));
  }
  const local = config.plugins || [];
  for (let i = 0; i < local.length; i++) {
    const plugin = local[i];
    if (plugins.indexOf(plugin) === -1) {
      plugins.push(plugin);
    }
  }
  return plugins;
}
function getOpts(options, all) {
  if (!all && options === false) {
    return null;
  }
  if (options === true) {
    return {};
  }
  return options;
}
function createDescriptors(chart, plugins, options, all) {
  const result = [];
  const context = chart.getContext();
  for (let i = 0; i < plugins.length; i++) {
    const plugin = plugins[i];
    const id = plugin.id;
    const opts = getOpts(options[id], all);
    if (opts === null) {
      continue;
    }
    result.push({
      plugin,
      options: pluginOpts(chart.config, plugin, opts, context)
    });
  }
  return result;
}
function pluginOpts(config, plugin, opts, context) {
  const keys = config.pluginScopeKeys(plugin);
  const scopes = config.getOptionScopes(opts, keys);
  return config.createResolver(scopes, context, [''], {scriptable: false, indexable: false, allKeys: true});
}

function getIndexAxis(type, options) {
  const datasetDefaults = defaults.datasets[type] || {};
  const datasetOptions = (options.datasets || {})[type] || {};
  return datasetOptions.indexAxis || options.indexAxis || datasetDefaults.indexAxis || 'x';
}
function getAxisFromDefaultScaleID(id, indexAxis) {
  let axis = id;
  if (id === '_index_') {
    axis = indexAxis;
  } else if (id === '_value_') {
    axis = indexAxis === 'x' ? 'y' : 'x';
  }
  return axis;
}
function getDefaultScaleIDFromAxis(axis, indexAxis) {
  return axis === indexAxis ? '_index_' : '_value_';
}
function axisFromPosition(position) {
  if (position === 'top' || position === 'bottom') {
    return 'x';
  }
  if (position === 'left' || position === 'right') {
    return 'y';
  }
}
function determineAxis(id, scaleOptions) {
  if (id === 'x' || id === 'y') {
    return id;
  }
  return scaleOptions.axis || axisFromPosition(scaleOptions.position) || id.charAt(0).toLowerCase();
}
function mergeScaleConfig(config, options) {
  const chartDefaults = overrides[config.type] || {scales: {}};
  const configScales = options.scales || {};
  const chartIndexAxis = getIndexAxis(config.type, options);
  const firstIDs = Object.create(null);
  const scales = Object.create(null);
  Object.keys(configScales).forEach(id => {
    const scaleConf = configScales[id];
    if (!isObject(scaleConf)) {
      return console.error(`Invalid scale configuration for scale: ${id}`);
    }
    if (scaleConf._proxy) {
      return console.warn(`Ignoring resolver passed as options for scale: ${id}`);
    }
    const axis = determineAxis(id, scaleConf);
    const defaultId = getDefaultScaleIDFromAxis(axis, chartIndexAxis);
    const defaultScaleOptions = chartDefaults.scales || {};
    firstIDs[axis] = firstIDs[axis] || id;
    scales[id] = mergeIf(Object.create(null), [{axis}, scaleConf, defaultScaleOptions[axis], defaultScaleOptions[defaultId]]);
  });
  config.data.datasets.forEach(dataset => {
    const type = dataset.type || config.type;
    const indexAxis = dataset.indexAxis || getIndexAxis(type, options);
    const datasetDefaults = overrides[type] || {};
    const defaultScaleOptions = datasetDefaults.scales || {};
    Object.keys(defaultScaleOptions).forEach(defaultID => {
      const axis = getAxisFromDefaultScaleID(defaultID, indexAxis);
      const id = dataset[axis + 'AxisID'] || firstIDs[axis] || axis;
      scales[id] = scales[id] || Object.create(null);
      mergeIf(scales[id], [{axis}, configScales[id], defaultScaleOptions[defaultID]]);
    });
  });
  Object.keys(scales).forEach(key => {
    const scale = scales[key];
    mergeIf(scale, [defaults.scales[scale.type], defaults.scale]);
  });
  return scales;
}
function initOptions(config) {
  const options = config.options || (config.options = {});
  options.plugins = valueOrDefault(options.plugins, {});
  options.scales = mergeScaleConfig(config, options);
}
function initData(data) {
  data = data || {};
  data.datasets = data.datasets || [];
  data.labels = data.labels || [];
  return data;
}
function initConfig(config) {
  config = config || {};
  config.data = initData(config.data);
  initOptions(config);
  return config;
}
const keyCache = new Map();
const keysCached = new Set();
function cachedKeys(cacheKey, generate) {
  let keys = keyCache.get(cacheKey);
  if (!keys) {
    keys = generate();
    keyCache.set(cacheKey, keys);
    keysCached.add(keys);
  }
  return keys;
}
const addIfFound = (set, obj, key) => {
  const opts = resolveObjectKey(obj, key);
  if (opts !== undefined) {
    set.add(opts);
  }
};
class Config {
  constructor(config) {
    this._config = initConfig(config);
    this._scopeCache = new Map();
    this._resolverCache = new Map();
  }
  get platform() {
    return this._config.platform;
  }
  get type() {
    return this._config.type;
  }
  set type(type) {
    this._config.type = type;
  }
  get data() {
    return this._config.data;
  }
  set data(data) {
    this._config.data = initData(data);
  }
  get options() {
    return this._config.options;
  }
  set options(options) {
    this._config.options = options;
  }
  get plugins() {
    return this._config.plugins;
  }
  update() {
    const config = this._config;
    this.clearCache();
    initOptions(config);
  }
  clearCache() {
    this._scopeCache.clear();
    this._resolverCache.clear();
  }
  datasetScopeKeys(datasetType) {
    return cachedKeys(datasetType,
      () => [[
        `datasets.${datasetType}`,
        ''
      ]]);
  }
  datasetAnimationScopeKeys(datasetType, transition) {
    return cachedKeys(`${datasetType}.transition.${transition}`,
      () => [
        [
          `datasets.${datasetType}.transitions.${transition}`,
          `transitions.${transition}`,
        ],
        [
          `datasets.${datasetType}`,
          ''
        ]
      ]);
  }
  datasetElementScopeKeys(datasetType, elementType) {
    return cachedKeys(`${datasetType}-${elementType}`,
      () => [[
        `datasets.${datasetType}.elements.${elementType}`,
        `datasets.${datasetType}`,
        `elements.${elementType}`,
        ''
      ]]);
  }
  pluginScopeKeys(plugin) {
    const id = plugin.id;
    const type = this.type;
    return cachedKeys(`${type}-plugin-${id}`,
      () => [[
        `plugins.${id}`,
        ...plugin.additionalOptionScopes || [],
      ]]);
  }
  _cachedScopes(mainScope, resetCache) {
    const _scopeCache = this._scopeCache;
    let cache = _scopeCache.get(mainScope);
    if (!cache || resetCache) {
      cache = new Map();
      _scopeCache.set(mainScope, cache);
    }
    return cache;
  }
  getOptionScopes(mainScope, keyLists, resetCache) {
    const {options, type} = this;
    const cache = this._cachedScopes(mainScope, resetCache);
    const cached = cache.get(keyLists);
    if (cached) {
      return cached;
    }
    const scopes = new Set();
    keyLists.forEach(keys => {
      if (mainScope) {
        scopes.add(mainScope);
        keys.forEach(key => addIfFound(scopes, mainScope, key));
      }
      keys.forEach(key => addIfFound(scopes, options, key));
      keys.forEach(key => addIfFound(scopes, overrides[type] || {}, key));
      keys.forEach(key => addIfFound(scopes, defaults, key));
      keys.forEach(key => addIfFound(scopes, descriptors, key));
    });
    const array = Array.from(scopes);
    if (array.length === 0) {
      array.push(Object.create(null));
    }
    if (keysCached.has(keyLists)) {
      cache.set(keyLists, array);
    }
    return array;
  }
  chartOptionScopes() {
    const {options, type} = this;
    return [
      options,
      overrides[type] || {},
      defaults.datasets[type] || {},
      {type},
      defaults,
      descriptors
    ];
  }
  resolveNamedOptions(scopes, names, context, prefixes = ['']) {
    const result = {$shared: true};
    const {resolver, subPrefixes} = getResolver(this._resolverCache, scopes, prefixes);
    let options = resolver;
    if (needContext(resolver, names)) {
      result.$shared = false;
      context = isFunction(context) ? context() : context;
      const subResolver = this.createResolver(scopes, context, subPrefixes);
      options = _attachContext(resolver, context, subResolver);
    }
    for (const prop of names) {
      result[prop] = options[prop];
    }
    return result;
  }
  createResolver(scopes, context, prefixes = [''], descriptorDefaults) {
    const {resolver} = getResolver(this._resolverCache, scopes, prefixes);
    return isObject(context)
      ? _attachContext(resolver, context, undefined, descriptorDefaults)
      : resolver;
  }
}
function getResolver(resolverCache, scopes, prefixes) {
  let cache = resolverCache.get(scopes);
  if (!cache) {
    cache = new Map();
    resolverCache.set(scopes, cache);
  }
  const cacheKey = prefixes.join();
  let cached = cache.get(cacheKey);
  if (!cached) {
    const resolver = _createResolver(scopes, prefixes);
    cached = {
      resolver,
      subPrefixes: prefixes.filter(p => !p.toLowerCase().includes('hover'))
    };
    cache.set(cacheKey, cached);
  }
  return cached;
}
const hasFunction = value => isObject(value)
  && Object.getOwnPropertyNames(value).reduce((acc, key) => acc || isFunction(value[key]), false);
function needContext(proxy, names) {
  const {isScriptable, isIndexable} = _descriptors(proxy);
  for (const prop of names) {
    const scriptable = isScriptable(prop);
    const indexable = isIndexable(prop);
    const value = (indexable || scriptable) && proxy[prop];
    if ((scriptable && (isFunction(value) || hasFunction(value)))
      || (indexable && isArray(value))) {
      return true;
    }
  }
  return false;
}

var version = "3.6.1";

const KNOWN_POSITIONS = ['top', 'bottom', 'left', 'right', 'chartArea'];
function positionIsHorizontal(position, axis) {
  return position === 'top' || position === 'bottom' || (KNOWN_POSITIONS.indexOf(position) === -1 && axis === 'x');
}
function compare2Level(l1, l2) {
  return function(a, b) {
    return a[l1] === b[l1]
      ? a[l2] - b[l2]
      : a[l1] - b[l1];
  };
}
function onAnimationsComplete(context) {
  const chart = context.chart;
  const animationOptions = chart.options.animation;
  chart.notifyPlugins('afterRender');
  callback(animationOptions && animationOptions.onComplete, [context], chart);
}
function onAnimationProgress(context) {
  const chart = context.chart;
  const animationOptions = chart.options.animation;
  callback(animationOptions && animationOptions.onProgress, [context], chart);
}
function getCanvas(item) {
  if (_isDomSupported() && typeof item === 'string') {
    item = document.getElementById(item);
  } else if (item && item.length) {
    item = item[0];
  }
  if (item && item.canvas) {
    item = item.canvas;
  }
  return item;
}
const instances = {};
const getChart = (key) => {
  const canvas = getCanvas(key);
  return Object.values(instances).filter((c) => c.canvas === canvas).pop();
};
function moveNumericKeys(obj, start, move) {
  const keys = Object.keys(obj);
  for (const key of keys) {
    const intKey = +key;
    if (intKey >= start) {
      const value = obj[key];
      delete obj[key];
      if (move > 0 || intKey > start) {
        obj[intKey + move] = value;
      }
    }
  }
}
class Chart {
  constructor(item, userConfig) {
    const config = this.config = new Config(userConfig);
    const initialCanvas = getCanvas(item);
    const existingChart = getChart(initialCanvas);
    if (existingChart) {
      throw new Error(
        'Canvas is already in use. Chart with ID \'' + existingChart.id + '\'' +
				' must be destroyed before the canvas can be reused.'
      );
    }
    const options = config.createResolver(config.chartOptionScopes(), this.getContext());
    this.platform = new (config.platform || _detectPlatform(initialCanvas))();
    this.platform.updateConfig(config);
    const context = this.platform.acquireContext(initialCanvas, options.aspectRatio);
    const canvas = context && context.canvas;
    const height = canvas && canvas.height;
    const width = canvas && canvas.width;
    this.id = uid();
    this.ctx = context;
    this.canvas = canvas;
    this.width = width;
    this.height = height;
    this._options = options;
    this._aspectRatio = this.aspectRatio;
    this._layers = [];
    this._metasets = [];
    this._stacks = undefined;
    this.boxes = [];
    this.currentDevicePixelRatio = undefined;
    this.chartArea = undefined;
    this._active = [];
    this._lastEvent = undefined;
    this._listeners = {};
    this._responsiveListeners = undefined;
    this._sortedMetasets = [];
    this.scales = {};
    this._plugins = new PluginService();
    this.$proxies = {};
    this._hiddenIndices = {};
    this.attached = false;
    this._animationsDisabled = undefined;
    this.$context = undefined;
    this._doResize = debounce(mode => this.update(mode), options.resizeDelay || 0);
    this._dataChanges = [];
    instances[this.id] = this;
    if (!context || !canvas) {
      console.error("Failed to create chart: can't acquire context from the given item");
      return;
    }
    animator.listen(this, 'complete', onAnimationsComplete);
    animator.listen(this, 'progress', onAnimationProgress);
    this._initialize();
    if (this.attached) {
      this.update();
    }
  }
  get aspectRatio() {
    const {options: {aspectRatio, maintainAspectRatio}, width, height, _aspectRatio} = this;
    if (!isNullOrUndef(aspectRatio)) {
      return aspectRatio;
    }
    if (maintainAspectRatio && _aspectRatio) {
      return _aspectRatio;
    }
    return height ? width / height : null;
  }
  get data() {
    return this.config.data;
  }
  set data(data) {
    this.config.data = data;
  }
  get options() {
    return this._options;
  }
  set options(options) {
    this.config.options = options;
  }
  _initialize() {
    this.notifyPlugins('beforeInit');
    if (this.options.responsive) {
      this.resize();
    } else {
      retinaScale(this, this.options.devicePixelRatio);
    }
    this.bindEvents();
    this.notifyPlugins('afterInit');
    return this;
  }
  clear() {
    clearCanvas(this.canvas, this.ctx);
    return this;
  }
  stop() {
    animator.stop(this);
    return this;
  }
  resize(width, height) {
    if (!animator.running(this)) {
      this._resize(width, height);
    } else {
      this._resizeBeforeDraw = {width, height};
    }
  }
  _resize(width, height) {
    const options = this.options;
    const canvas = this.canvas;
    const aspectRatio = options.maintainAspectRatio && this.aspectRatio;
    const newSize = this.platform.getMaximumSize(canvas, width, height, aspectRatio);
    const newRatio = options.devicePixelRatio || this.platform.getDevicePixelRatio();
    const mode = this.width ? 'resize' : 'attach';
    this.width = newSize.width;
    this.height = newSize.height;
    this._aspectRatio = this.aspectRatio;
    if (!retinaScale(this, newRatio, true)) {
      return;
    }
    this.notifyPlugins('resize', {size: newSize});
    callback(options.onResize, [this, newSize], this);
    if (this.attached) {
      if (this._doResize(mode)) {
        this.render();
      }
    }
  }
  ensureScalesHaveIDs() {
    const options = this.options;
    const scalesOptions = options.scales || {};
    each(scalesOptions, (axisOptions, axisID) => {
      axisOptions.id = axisID;
    });
  }
  buildOrUpdateScales() {
    const options = this.options;
    const scaleOpts = options.scales;
    const scales = this.scales;
    const updated = Object.keys(scales).reduce((obj, id) => {
      obj[id] = false;
      return obj;
    }, {});
    let items = [];
    if (scaleOpts) {
      items = items.concat(
        Object.keys(scaleOpts).map((id) => {
          const scaleOptions = scaleOpts[id];
          const axis = determineAxis(id, scaleOptions);
          const isRadial = axis === 'r';
          const isHorizontal = axis === 'x';
          return {
            options: scaleOptions,
            dposition: isRadial ? 'chartArea' : isHorizontal ? 'bottom' : 'left',
            dtype: isRadial ? 'radialLinear' : isHorizontal ? 'category' : 'linear'
          };
        })
      );
    }
    each(items, (item) => {
      const scaleOptions = item.options;
      const id = scaleOptions.id;
      const axis = determineAxis(id, scaleOptions);
      const scaleType = valueOrDefault(scaleOptions.type, item.dtype);
      if (scaleOptions.position === undefined || positionIsHorizontal(scaleOptions.position, axis) !== positionIsHorizontal(item.dposition)) {
        scaleOptions.position = item.dposition;
      }
      updated[id] = true;
      let scale = null;
      if (id in scales && scales[id].type === scaleType) {
        scale = scales[id];
      } else {
        const scaleClass = registry.getScale(scaleType);
        scale = new scaleClass({
          id,
          type: scaleType,
          ctx: this.ctx,
          chart: this
        });
        scales[scale.id] = scale;
      }
      scale.init(scaleOptions, options);
    });
    each(updated, (hasUpdated, id) => {
      if (!hasUpdated) {
        delete scales[id];
      }
    });
    each(scales, (scale) => {
      layouts.configure(this, scale, scale.options);
      layouts.addBox(this, scale);
    });
  }
  _updateMetasets() {
    const metasets = this._metasets;
    const numData = this.data.datasets.length;
    const numMeta = metasets.length;
    metasets.sort((a, b) => a.index - b.index);
    if (numMeta > numData) {
      for (let i = numData; i < numMeta; ++i) {
        this._destroyDatasetMeta(i);
      }
      metasets.splice(numData, numMeta - numData);
    }
    this._sortedMetasets = metasets.slice(0).sort(compare2Level('order', 'index'));
  }
  _removeUnreferencedMetasets() {
    const {_metasets: metasets, data: {datasets}} = this;
    if (metasets.length > datasets.length) {
      delete this._stacks;
    }
    metasets.forEach((meta, index) => {
      if (datasets.filter(x => x === meta._dataset).length === 0) {
        this._destroyDatasetMeta(index);
      }
    });
  }
  buildOrUpdateControllers() {
    const newControllers = [];
    const datasets = this.data.datasets;
    let i, ilen;
    this._removeUnreferencedMetasets();
    for (i = 0, ilen = datasets.length; i < ilen; i++) {
      const dataset = datasets[i];
      let meta = this.getDatasetMeta(i);
      const type = dataset.type || this.config.type;
      if (meta.type && meta.type !== type) {
        this._destroyDatasetMeta(i);
        meta = this.getDatasetMeta(i);
      }
      meta.type = type;
      meta.indexAxis = dataset.indexAxis || getIndexAxis(type, this.options);
      meta.order = dataset.order || 0;
      meta.index = i;
      meta.label = '' + dataset.label;
      meta.visible = this.isDatasetVisible(i);
      if (meta.controller) {
        meta.controller.updateIndex(i);
        meta.controller.linkScales();
      } else {
        const ControllerClass = registry.getController(type);
        const {datasetElementType, dataElementType} = defaults.datasets[type];
        Object.assign(ControllerClass.prototype, {
          dataElementType: registry.getElement(dataElementType),
          datasetElementType: datasetElementType && registry.getElement(datasetElementType)
        });
        meta.controller = new ControllerClass(this, i);
        newControllers.push(meta.controller);
      }
    }
    this._updateMetasets();
    return newControllers;
  }
  _resetElements() {
    each(this.data.datasets, (dataset, datasetIndex) => {
      this.getDatasetMeta(datasetIndex).controller.reset();
    }, this);
  }
  reset() {
    this._resetElements();
    this.notifyPlugins('reset');
  }
  update(mode) {
    const config = this.config;
    config.update();
    const options = this._options = config.createResolver(config.chartOptionScopes(), this.getContext());
    const animsDisabled = this._animationsDisabled = !options.animation;
    this._updateScales();
    this._checkEventBindings();
    this._updateHiddenIndices();
    this._plugins.invalidate();
    if (this.notifyPlugins('beforeUpdate', {mode, cancelable: true}) === false) {
      return;
    }
    const newControllers = this.buildOrUpdateControllers();
    this.notifyPlugins('beforeElementsUpdate');
    let minPadding = 0;
    for (let i = 0, ilen = this.data.datasets.length; i < ilen; i++) {
      const {controller} = this.getDatasetMeta(i);
      const reset = !animsDisabled && newControllers.indexOf(controller) === -1;
      controller.buildOrUpdateElements(reset);
      minPadding = Math.max(+controller.getMaxOverflow(), minPadding);
    }
    minPadding = this._minPadding = options.layout.autoPadding ? minPadding : 0;
    this._updateLayout(minPadding);
    if (!animsDisabled) {
      each(newControllers, (controller) => {
        controller.reset();
      });
    }
    this._updateDatasets(mode);
    this.notifyPlugins('afterUpdate', {mode});
    this._layers.sort(compare2Level('z', '_idx'));
    if (this._lastEvent) {
      this._eventHandler(this._lastEvent, true);
    }
    this.render();
  }
  _updateScales() {
    each(this.scales, (scale) => {
      layouts.removeBox(this, scale);
    });
    this.ensureScalesHaveIDs();
    this.buildOrUpdateScales();
  }
  _checkEventBindings() {
    const options = this.options;
    const existingEvents = new Set(Object.keys(this._listeners));
    const newEvents = new Set(options.events);
    if (!setsEqual(existingEvents, newEvents) || !!this._responsiveListeners !== options.responsive) {
      this.unbindEvents();
      this.bindEvents();
    }
  }
  _updateHiddenIndices() {
    const {_hiddenIndices} = this;
    const changes = this._getUniformDataChanges() || [];
    for (const {method, start, count} of changes) {
      const move = method === '_removeElements' ? -count : count;
      moveNumericKeys(_hiddenIndices, start, move);
    }
  }
  _getUniformDataChanges() {
    const _dataChanges = this._dataChanges;
    if (!_dataChanges || !_dataChanges.length) {
      return;
    }
    this._dataChanges = [];
    const datasetCount = this.data.datasets.length;
    const makeSet = (idx) => new Set(
      _dataChanges
        .filter(c => c[0] === idx)
        .map((c, i) => i + ',' + c.splice(1).join(','))
    );
    const changeSet = makeSet(0);
    for (let i = 1; i < datasetCount; i++) {
      if (!setsEqual(changeSet, makeSet(i))) {
        return;
      }
    }
    return Array.from(changeSet)
      .map(c => c.split(','))
      .map(a => ({method: a[1], start: +a[2], count: +a[3]}));
  }
  _updateLayout(minPadding) {
    if (this.notifyPlugins('beforeLayout', {cancelable: true}) === false) {
      return;
    }
    layouts.update(this, this.width, this.height, minPadding);
    const area = this.chartArea;
    const noArea = area.width <= 0 || area.height <= 0;
    this._layers = [];
    each(this.boxes, (box) => {
      if (noArea && box.position === 'chartArea') {
        return;
      }
      if (box.configure) {
        box.configure();
      }
      this._layers.push(...box._layers());
    }, this);
    this._layers.forEach((item, index) => {
      item._idx = index;
    });
    this.notifyPlugins('afterLayout');
  }
  _updateDatasets(mode) {
    if (this.notifyPlugins('beforeDatasetsUpdate', {mode, cancelable: true}) === false) {
      return;
    }
    for (let i = 0, ilen = this.data.datasets.length; i < ilen; ++i) {
      this.getDatasetMeta(i).controller.configure();
    }
    for (let i = 0, ilen = this.data.datasets.length; i < ilen; ++i) {
      this._updateDataset(i, isFunction(mode) ? mode({datasetIndex: i}) : mode);
    }
    this.notifyPlugins('afterDatasetsUpdate', {mode});
  }
  _updateDataset(index, mode) {
    const meta = this.getDatasetMeta(index);
    const args = {meta, index, mode, cancelable: true};
    if (this.notifyPlugins('beforeDatasetUpdate', args) === false) {
      return;
    }
    meta.controller._update(mode);
    args.cancelable = false;
    this.notifyPlugins('afterDatasetUpdate', args);
  }
  render() {
    if (this.notifyPlugins('beforeRender', {cancelable: true}) === false) {
      return;
    }
    if (animator.has(this)) {
      if (this.attached && !animator.running(this)) {
        animator.start(this);
      }
    } else {
      this.draw();
      onAnimationsComplete({chart: this});
    }
  }
  draw() {
    let i;
    if (this._resizeBeforeDraw) {
      const {width, height} = this._resizeBeforeDraw;
      this._resize(width, height);
      this._resizeBeforeDraw = null;
    }
    this.clear();
    if (this.width <= 0 || this.height <= 0) {
      return;
    }
    if (this.notifyPlugins('beforeDraw', {cancelable: true}) === false) {
      return;
    }
    const layers = this._layers;
    for (i = 0; i < layers.length && layers[i].z <= 0; ++i) {
      layers[i].draw(this.chartArea);
    }
    this._drawDatasets();
    for (; i < layers.length; ++i) {
      layers[i].draw(this.chartArea);
    }
    this.notifyPlugins('afterDraw');
  }
  _getSortedDatasetMetas(filterVisible) {
    const metasets = this._sortedMetasets;
    const result = [];
    let i, ilen;
    for (i = 0, ilen = metasets.length; i < ilen; ++i) {
      const meta = metasets[i];
      if (!filterVisible || meta.visible) {
        result.push(meta);
      }
    }
    return result;
  }
  getSortedVisibleDatasetMetas() {
    return this._getSortedDatasetMetas(true);
  }
  _drawDatasets() {
    if (this.notifyPlugins('beforeDatasetsDraw', {cancelable: true}) === false) {
      return;
    }
    const metasets = this.getSortedVisibleDatasetMetas();
    for (let i = metasets.length - 1; i >= 0; --i) {
      this._drawDataset(metasets[i]);
    }
    this.notifyPlugins('afterDatasetsDraw');
  }
  _drawDataset(meta) {
    const ctx = this.ctx;
    const clip = meta._clip;
    const useClip = !clip.disabled;
    const area = this.chartArea;
    const args = {
      meta,
      index: meta.index,
      cancelable: true
    };
    if (this.notifyPlugins('beforeDatasetDraw', args) === false) {
      return;
    }
    if (useClip) {
      clipArea(ctx, {
        left: clip.left === false ? 0 : area.left - clip.left,
        right: clip.right === false ? this.width : area.right + clip.right,
        top: clip.top === false ? 0 : area.top - clip.top,
        bottom: clip.bottom === false ? this.height : area.bottom + clip.bottom
      });
    }
    meta.controller.draw();
    if (useClip) {
      unclipArea(ctx);
    }
    args.cancelable = false;
    this.notifyPlugins('afterDatasetDraw', args);
  }
  getElementsAtEventForMode(e, mode, options, useFinalPosition) {
    const method = Interaction.modes[mode];
    if (typeof method === 'function') {
      return method(this, e, options, useFinalPosition);
    }
    return [];
  }
  getDatasetMeta(datasetIndex) {
    const dataset = this.data.datasets[datasetIndex];
    const metasets = this._metasets;
    let meta = metasets.filter(x => x && x._dataset === dataset).pop();
    if (!meta) {
      meta = {
        type: null,
        data: [],
        dataset: null,
        controller: null,
        hidden: null,
        xAxisID: null,
        yAxisID: null,
        order: dataset && dataset.order || 0,
        index: datasetIndex,
        _dataset: dataset,
        _parsed: [],
        _sorted: false
      };
      metasets.push(meta);
    }
    return meta;
  }
  getContext() {
    return this.$context || (this.$context = createContext(null, {chart: this, type: 'chart'}));
  }
  getVisibleDatasetCount() {
    return this.getSortedVisibleDatasetMetas().length;
  }
  isDatasetVisible(datasetIndex) {
    const dataset = this.data.datasets[datasetIndex];
    if (!dataset) {
      return false;
    }
    const meta = this.getDatasetMeta(datasetIndex);
    return typeof meta.hidden === 'boolean' ? !meta.hidden : !dataset.hidden;
  }
  setDatasetVisibility(datasetIndex, visible) {
    const meta = this.getDatasetMeta(datasetIndex);
    meta.hidden = !visible;
  }
  toggleDataVisibility(index) {
    this._hiddenIndices[index] = !this._hiddenIndices[index];
  }
  getDataVisibility(index) {
    return !this._hiddenIndices[index];
  }
  _updateVisibility(datasetIndex, dataIndex, visible) {
    const mode = visible ? 'show' : 'hide';
    const meta = this.getDatasetMeta(datasetIndex);
    const anims = meta.controller._resolveAnimations(undefined, mode);
    if (defined(dataIndex)) {
      meta.data[dataIndex].hidden = !visible;
      this.update();
    } else {
      this.setDatasetVisibility(datasetIndex, visible);
      anims.update(meta, {visible});
      this.update((ctx) => ctx.datasetIndex === datasetIndex ? mode : undefined);
    }
  }
  hide(datasetIndex, dataIndex) {
    this._updateVisibility(datasetIndex, dataIndex, false);
  }
  show(datasetIndex, dataIndex) {
    this._updateVisibility(datasetIndex, dataIndex, true);
  }
  _destroyDatasetMeta(datasetIndex) {
    const meta = this._metasets[datasetIndex];
    if (meta && meta.controller) {
      meta.controller._destroy();
    }
    delete this._metasets[datasetIndex];
  }
  _stop() {
    let i, ilen;
    this.stop();
    animator.remove(this);
    for (i = 0, ilen = this.data.datasets.length; i < ilen; ++i) {
      this._destroyDatasetMeta(i);
    }
  }
  destroy() {
    const {canvas, ctx} = this;
    this._stop();
    this.config.clearCache();
    if (canvas) {
      this.unbindEvents();
      clearCanvas(canvas, ctx);
      this.platform.releaseContext(ctx);
      this.canvas = null;
      this.ctx = null;
    }
    this.notifyPlugins('destroy');
    delete instances[this.id];
  }
  toBase64Image(...args) {
    return this.canvas.toDataURL(...args);
  }
  bindEvents() {
    this.bindUserEvents();
    if (this.options.responsive) {
      this.bindResponsiveEvents();
    } else {
      this.attached = true;
    }
  }
  bindUserEvents() {
    const listeners = this._listeners;
    const platform = this.platform;
    const _add = (type, listener) => {
      platform.addEventListener(this, type, listener);
      listeners[type] = listener;
    };
    const listener = (e, x, y) => {
      e.offsetX = x;
      e.offsetY = y;
      this._eventHandler(e);
    };
    each(this.options.events, (type) => _add(type, listener));
  }
  bindResponsiveEvents() {
    if (!this._responsiveListeners) {
      this._responsiveListeners = {};
    }
    const listeners = this._responsiveListeners;
    const platform = this.platform;
    const _add = (type, listener) => {
      platform.addEventListener(this, type, listener);
      listeners[type] = listener;
    };
    const _remove = (type, listener) => {
      if (listeners[type]) {
        platform.removeEventListener(this, type, listener);
        delete listeners[type];
      }
    };
    const listener = (width, height) => {
      if (this.canvas) {
        this.resize(width, height);
      }
    };
    let detached;
    const attached = () => {
      _remove('attach', attached);
      this.attached = true;
      this.resize();
      _add('resize', listener);
      _add('detach', detached);
    };
    detached = () => {
      this.attached = false;
      _remove('resize', listener);
      this._stop();
      this._resize(0, 0);
      _add('attach', attached);
    };
    if (platform.isAttached(this.canvas)) {
      attached();
    } else {
      detached();
    }
  }
  unbindEvents() {
    each(this._listeners, (listener, type) => {
      this.platform.removeEventListener(this, type, listener);
    });
    this._listeners = {};
    each(this._responsiveListeners, (listener, type) => {
      this.platform.removeEventListener(this, type, listener);
    });
    this._responsiveListeners = undefined;
  }
  updateHoverStyle(items, mode, enabled) {
    const prefix = enabled ? 'set' : 'remove';
    let meta, item, i, ilen;
    if (mode === 'dataset') {
      meta = this.getDatasetMeta(items[0].datasetIndex);
      meta.controller['_' + prefix + 'DatasetHoverStyle']();
    }
    for (i = 0, ilen = items.length; i < ilen; ++i) {
      item = items[i];
      const controller = item && this.getDatasetMeta(item.datasetIndex).controller;
      if (controller) {
        controller[prefix + 'HoverStyle'](item.element, item.datasetIndex, item.index);
      }
    }
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(activeElements) {
    const lastActive = this._active || [];
    const active = activeElements.map(({datasetIndex, index}) => {
      const meta = this.getDatasetMeta(datasetIndex);
      if (!meta) {
        throw new Error('No dataset found at index ' + datasetIndex);
      }
      return {
        datasetIndex,
        element: meta.data[index],
        index,
      };
    });
    const changed = !_elementsEqual(active, lastActive);
    if (changed) {
      this._active = active;
      this._updateHoverStyles(active, lastActive);
    }
  }
  notifyPlugins(hook, args, filter) {
    return this._plugins.notify(this, hook, args, filter);
  }
  _updateHoverStyles(active, lastActive, replay) {
    const hoverOptions = this.options.hover;
    const diff = (a, b) => a.filter(x => !b.some(y => x.datasetIndex === y.datasetIndex && x.index === y.index));
    const deactivated = diff(lastActive, active);
    const activated = replay ? active : diff(active, lastActive);
    if (deactivated.length) {
      this.updateHoverStyle(deactivated, hoverOptions.mode, false);
    }
    if (activated.length && hoverOptions.mode) {
      this.updateHoverStyle(activated, hoverOptions.mode, true);
    }
  }
  _eventHandler(e, replay) {
    const args = {event: e, replay, cancelable: true};
    const eventFilter = (plugin) => (plugin.options.events || this.options.events).includes(e.native.type);
    if (this.notifyPlugins('beforeEvent', args, eventFilter) === false) {
      return;
    }
    const changed = this._handleEvent(e, replay);
    args.cancelable = false;
    this.notifyPlugins('afterEvent', args, eventFilter);
    if (changed || args.changed) {
      this.render();
    }
    return this;
  }
  _handleEvent(e, replay) {
    const {_active: lastActive = [], options} = this;
    const hoverOptions = options.hover;
    const useFinalPosition = replay;
    let active = [];
    let changed = false;
    let lastEvent = null;
    if (e.type !== 'mouseout') {
      active = this.getElementsAtEventForMode(e, hoverOptions.mode, hoverOptions, useFinalPosition);
      lastEvent = e.type === 'click' ? this._lastEvent : e;
    }
    this._lastEvent = null;
    if (_isPointInArea(e, this.chartArea, this._minPadding)) {
      callback(options.onHover, [e, active, this], this);
      if (e.type === 'mouseup' || e.type === 'click' || e.type === 'contextmenu') {
        callback(options.onClick, [e, active, this], this);
      }
    }
    changed = !_elementsEqual(active, lastActive);
    if (changed || replay) {
      this._active = active;
      this._updateHoverStyles(active, lastActive, replay);
    }
    this._lastEvent = lastEvent;
    return changed;
  }
}
const invalidatePlugins = () => each(Chart.instances, (chart) => chart._plugins.invalidate());
const enumerable = true;
Object.defineProperties(Chart, {
  defaults: {
    enumerable,
    value: defaults
  },
  instances: {
    enumerable,
    value: instances
  },
  overrides: {
    enumerable,
    value: overrides
  },
  registry: {
    enumerable,
    value: registry
  },
  version: {
    enumerable,
    value: version
  },
  getChart: {
    enumerable,
    value: getChart
  },
  register: {
    enumerable,
    value: (...items) => {
      registry.add(...items);
      invalidatePlugins();
    }
  },
  unregister: {
    enumerable,
    value: (...items) => {
      registry.remove(...items);
      invalidatePlugins();
    }
  }
});

function clipArc(ctx, element, endAngle) {
  const {startAngle, pixelMargin, x, y, outerRadius, innerRadius} = element;
  let angleMargin = pixelMargin / outerRadius;
  ctx.beginPath();
  ctx.arc(x, y, outerRadius, startAngle - angleMargin, endAngle + angleMargin);
  if (innerRadius > pixelMargin) {
    angleMargin = pixelMargin / innerRadius;
    ctx.arc(x, y, innerRadius, endAngle + angleMargin, startAngle - angleMargin, true);
  } else {
    ctx.arc(x, y, pixelMargin, endAngle + HALF_PI, startAngle - HALF_PI);
  }
  ctx.closePath();
  ctx.clip();
}
function toRadiusCorners(value) {
  return _readValueToProps(value, ['outerStart', 'outerEnd', 'innerStart', 'innerEnd']);
}
function parseBorderRadius$1(arc, innerRadius, outerRadius, angleDelta) {
  const o = toRadiusCorners(arc.options.borderRadius);
  const halfThickness = (outerRadius - innerRadius) / 2;
  const innerLimit = Math.min(halfThickness, angleDelta * innerRadius / 2);
  const computeOuterLimit = (val) => {
    const outerArcLimit = (outerRadius - Math.min(halfThickness, val)) * angleDelta / 2;
    return _limitValue(val, 0, Math.min(halfThickness, outerArcLimit));
  };
  return {
    outerStart: computeOuterLimit(o.outerStart),
    outerEnd: computeOuterLimit(o.outerEnd),
    innerStart: _limitValue(o.innerStart, 0, innerLimit),
    innerEnd: _limitValue(o.innerEnd, 0, innerLimit),
  };
}
function rThetaToXY(r, theta, x, y) {
  return {
    x: x + r * Math.cos(theta),
    y: y + r * Math.sin(theta),
  };
}
function pathArc(ctx, element, offset, spacing, end) {
  const {x, y, startAngle: start, pixelMargin, innerRadius: innerR} = element;
  const outerRadius = Math.max(element.outerRadius + spacing + offset - pixelMargin, 0);
  const innerRadius = innerR > 0 ? innerR + spacing + offset + pixelMargin : 0;
  let spacingOffset = 0;
  const alpha = end - start;
  if (spacing) {
    const noSpacingInnerRadius = innerR > 0 ? innerR - spacing : 0;
    const noSpacingOuterRadius = outerRadius > 0 ? outerRadius - spacing : 0;
    const avNogSpacingRadius = (noSpacingInnerRadius + noSpacingOuterRadius) / 2;
    const adjustedAngle = avNogSpacingRadius !== 0 ? (alpha * avNogSpacingRadius) / (avNogSpacingRadius + spacing) : alpha;
    spacingOffset = (alpha - adjustedAngle) / 2;
  }
  const beta = Math.max(0.001, alpha * outerRadius - offset / PI) / outerRadius;
  const angleOffset = (alpha - beta) / 2;
  const startAngle = start + angleOffset + spacingOffset;
  const endAngle = end - angleOffset - spacingOffset;
  const {outerStart, outerEnd, innerStart, innerEnd} = parseBorderRadius$1(element, innerRadius, outerRadius, endAngle - startAngle);
  const outerStartAdjustedRadius = outerRadius - outerStart;
  const outerEndAdjustedRadius = outerRadius - outerEnd;
  const outerStartAdjustedAngle = startAngle + outerStart / outerStartAdjustedRadius;
  const outerEndAdjustedAngle = endAngle - outerEnd / outerEndAdjustedRadius;
  const innerStartAdjustedRadius = innerRadius + innerStart;
  const innerEndAdjustedRadius = innerRadius + innerEnd;
  const innerStartAdjustedAngle = startAngle + innerStart / innerStartAdjustedRadius;
  const innerEndAdjustedAngle = endAngle - innerEnd / innerEndAdjustedRadius;
  ctx.beginPath();
  ctx.arc(x, y, outerRadius, outerStartAdjustedAngle, outerEndAdjustedAngle);
  if (outerEnd > 0) {
    const pCenter = rThetaToXY(outerEndAdjustedRadius, outerEndAdjustedAngle, x, y);
    ctx.arc(pCenter.x, pCenter.y, outerEnd, outerEndAdjustedAngle, endAngle + HALF_PI);
  }
  const p4 = rThetaToXY(innerEndAdjustedRadius, endAngle, x, y);
  ctx.lineTo(p4.x, p4.y);
  if (innerEnd > 0) {
    const pCenter = rThetaToXY(innerEndAdjustedRadius, innerEndAdjustedAngle, x, y);
    ctx.arc(pCenter.x, pCenter.y, innerEnd, endAngle + HALF_PI, innerEndAdjustedAngle + Math.PI);
  }
  ctx.arc(x, y, innerRadius, endAngle - (innerEnd / innerRadius), startAngle + (innerStart / innerRadius), true);
  if (innerStart > 0) {
    const pCenter = rThetaToXY(innerStartAdjustedRadius, innerStartAdjustedAngle, x, y);
    ctx.arc(pCenter.x, pCenter.y, innerStart, innerStartAdjustedAngle + Math.PI, startAngle - HALF_PI);
  }
  const p8 = rThetaToXY(outerStartAdjustedRadius, startAngle, x, y);
  ctx.lineTo(p8.x, p8.y);
  if (outerStart > 0) {
    const pCenter = rThetaToXY(outerStartAdjustedRadius, outerStartAdjustedAngle, x, y);
    ctx.arc(pCenter.x, pCenter.y, outerStart, startAngle - HALF_PI, outerStartAdjustedAngle);
  }
  ctx.closePath();
}
function drawArc(ctx, element, offset, spacing) {
  const {fullCircles, startAngle, circumference} = element;
  let endAngle = element.endAngle;
  if (fullCircles) {
    pathArc(ctx, element, offset, spacing, startAngle + TAU);
    for (let i = 0; i < fullCircles; ++i) {
      ctx.fill();
    }
    if (!isNaN(circumference)) {
      endAngle = startAngle + circumference % TAU;
      if (circumference % TAU === 0) {
        endAngle += TAU;
      }
    }
  }
  pathArc(ctx, element, offset, spacing, endAngle);
  ctx.fill();
  return endAngle;
}
function drawFullCircleBorders(ctx, element, inner) {
  const {x, y, startAngle, pixelMargin, fullCircles} = element;
  const outerRadius = Math.max(element.outerRadius - pixelMargin, 0);
  const innerRadius = element.innerRadius + pixelMargin;
  let i;
  if (inner) {
    clipArc(ctx, element, startAngle + TAU);
  }
  ctx.beginPath();
  ctx.arc(x, y, innerRadius, startAngle + TAU, startAngle, true);
  for (i = 0; i < fullCircles; ++i) {
    ctx.stroke();
  }
  ctx.beginPath();
  ctx.arc(x, y, outerRadius, startAngle, startAngle + TAU);
  for (i = 0; i < fullCircles; ++i) {
    ctx.stroke();
  }
}
function drawBorder(ctx, element, offset, spacing, endAngle) {
  const {options} = element;
  const inner = options.borderAlign === 'inner';
  if (!options.borderWidth) {
    return;
  }
  if (inner) {
    ctx.lineWidth = options.borderWidth * 2;
    ctx.lineJoin = 'round';
  } else {
    ctx.lineWidth = options.borderWidth;
    ctx.lineJoin = 'bevel';
  }
  if (element.fullCircles) {
    drawFullCircleBorders(ctx, element, inner);
  }
  if (inner) {
    clipArc(ctx, element, endAngle);
  }
  pathArc(ctx, element, offset, spacing, endAngle);
  ctx.stroke();
}
class ArcElement extends Element {
  constructor(cfg) {
    super();
    this.options = undefined;
    this.circumference = undefined;
    this.startAngle = undefined;
    this.endAngle = undefined;
    this.innerRadius = undefined;
    this.outerRadius = undefined;
    this.pixelMargin = 0;
    this.fullCircles = 0;
    if (cfg) {
      Object.assign(this, cfg);
    }
  }
  inRange(chartX, chartY, useFinalPosition) {
    const point = this.getProps(['x', 'y'], useFinalPosition);
    const {angle, distance} = getAngleFromPoint(point, {x: chartX, y: chartY});
    const {startAngle, endAngle, innerRadius, outerRadius, circumference} = this.getProps([
      'startAngle',
      'endAngle',
      'innerRadius',
      'outerRadius',
      'circumference'
    ], useFinalPosition);
    const rAdjust = this.options.spacing / 2;
    const _circumference = valueOrDefault(circumference, endAngle - startAngle);
    const betweenAngles = _circumference >= TAU || _angleBetween(angle, startAngle, endAngle);
    const withinRadius = _isBetween(distance, innerRadius + rAdjust, outerRadius + rAdjust);
    return (betweenAngles && withinRadius);
  }
  getCenterPoint(useFinalPosition) {
    const {x, y, startAngle, endAngle, innerRadius, outerRadius} = this.getProps([
      'x',
      'y',
      'startAngle',
      'endAngle',
      'innerRadius',
      'outerRadius',
      'circumference',
    ], useFinalPosition);
    const {offset, spacing} = this.options;
    const halfAngle = (startAngle + endAngle) / 2;
    const halfRadius = (innerRadius + outerRadius + spacing + offset) / 2;
    return {
      x: x + Math.cos(halfAngle) * halfRadius,
      y: y + Math.sin(halfAngle) * halfRadius
    };
  }
  tooltipPosition(useFinalPosition) {
    return this.getCenterPoint(useFinalPosition);
  }
  draw(ctx) {
    const {options, circumference} = this;
    const offset = (options.offset || 0) / 2;
    const spacing = (options.spacing || 0) / 2;
    this.pixelMargin = (options.borderAlign === 'inner') ? 0.33 : 0;
    this.fullCircles = circumference > TAU ? Math.floor(circumference / TAU) : 0;
    if (circumference === 0 || this.innerRadius < 0 || this.outerRadius < 0) {
      return;
    }
    ctx.save();
    let radiusOffset = 0;
    if (offset) {
      radiusOffset = offset / 2;
      const halfAngle = (this.startAngle + this.endAngle) / 2;
      ctx.translate(Math.cos(halfAngle) * radiusOffset, Math.sin(halfAngle) * radiusOffset);
      if (this.circumference >= PI) {
        radiusOffset = offset;
      }
    }
    ctx.fillStyle = options.backgroundColor;
    ctx.strokeStyle = options.borderColor;
    const endAngle = drawArc(ctx, this, radiusOffset, spacing);
    drawBorder(ctx, this, radiusOffset, spacing, endAngle);
    ctx.restore();
  }
}
ArcElement.id = 'arc';
ArcElement.defaults = {
  borderAlign: 'center',
  borderColor: '#fff',
  borderRadius: 0,
  borderWidth: 2,
  offset: 0,
  spacing: 0,
  angle: undefined,
};
ArcElement.defaultRoutes = {
  backgroundColor: 'backgroundColor'
};

function setStyle(ctx, options, style = options) {
  ctx.lineCap = valueOrDefault(style.borderCapStyle, options.borderCapStyle);
  ctx.setLineDash(valueOrDefault(style.borderDash, options.borderDash));
  ctx.lineDashOffset = valueOrDefault(style.borderDashOffset, options.borderDashOffset);
  ctx.lineJoin = valueOrDefault(style.borderJoinStyle, options.borderJoinStyle);
  ctx.lineWidth = valueOrDefault(style.borderWidth, options.borderWidth);
  ctx.strokeStyle = valueOrDefault(style.borderColor, options.borderColor);
}
function lineTo(ctx, previous, target) {
  ctx.lineTo(target.x, target.y);
}
function getLineMethod(options) {
  if (options.stepped) {
    return _steppedLineTo;
  }
  if (options.tension || options.cubicInterpolationMode === 'monotone') {
    return _bezierCurveTo;
  }
  return lineTo;
}
function pathVars(points, segment, params = {}) {
  const count = points.length;
  const {start: paramsStart = 0, end: paramsEnd = count - 1} = params;
  const {start: segmentStart, end: segmentEnd} = segment;
  const start = Math.max(paramsStart, segmentStart);
  const end = Math.min(paramsEnd, segmentEnd);
  const outside = paramsStart < segmentStart && paramsEnd < segmentStart || paramsStart > segmentEnd && paramsEnd > segmentEnd;
  return {
    count,
    start,
    loop: segment.loop,
    ilen: end < start && !outside ? count + end - start : end - start
  };
}
function pathSegment(ctx, line, segment, params) {
  const {points, options} = line;
  const {count, start, loop, ilen} = pathVars(points, segment, params);
  const lineMethod = getLineMethod(options);
  let {move = true, reverse} = params || {};
  let i, point, prev;
  for (i = 0; i <= ilen; ++i) {
    point = points[(start + (reverse ? ilen - i : i)) % count];
    if (point.skip) {
      continue;
    } else if (move) {
      ctx.moveTo(point.x, point.y);
      move = false;
    } else {
      lineMethod(ctx, prev, point, reverse, options.stepped);
    }
    prev = point;
  }
  if (loop) {
    point = points[(start + (reverse ? ilen : 0)) % count];
    lineMethod(ctx, prev, point, reverse, options.stepped);
  }
  return !!loop;
}
function fastPathSegment(ctx, line, segment, params) {
  const points = line.points;
  const {count, start, ilen} = pathVars(points, segment, params);
  const {move = true, reverse} = params || {};
  let avgX = 0;
  let countX = 0;
  let i, point, prevX, minY, maxY, lastY;
  const pointIndex = (index) => (start + (reverse ? ilen - index : index)) % count;
  const drawX = () => {
    if (minY !== maxY) {
      ctx.lineTo(avgX, maxY);
      ctx.lineTo(avgX, minY);
      ctx.lineTo(avgX, lastY);
    }
  };
  if (move) {
    point = points[pointIndex(0)];
    ctx.moveTo(point.x, point.y);
  }
  for (i = 0; i <= ilen; ++i) {
    point = points[pointIndex(i)];
    if (point.skip) {
      continue;
    }
    const x = point.x;
    const y = point.y;
    const truncX = x | 0;
    if (truncX === prevX) {
      if (y < minY) {
        minY = y;
      } else if (y > maxY) {
        maxY = y;
      }
      avgX = (countX * avgX + x) / ++countX;
    } else {
      drawX();
      ctx.lineTo(x, y);
      prevX = truncX;
      countX = 0;
      minY = maxY = y;
    }
    lastY = y;
  }
  drawX();
}
function _getSegmentMethod(line) {
  const opts = line.options;
  const borderDash = opts.borderDash && opts.borderDash.length;
  const useFastPath = !line._decimated && !line._loop && !opts.tension && opts.cubicInterpolationMode !== 'monotone' && !opts.stepped && !borderDash;
  return useFastPath ? fastPathSegment : pathSegment;
}
function _getInterpolationMethod(options) {
  if (options.stepped) {
    return _steppedInterpolation;
  }
  if (options.tension || options.cubicInterpolationMode === 'monotone') {
    return _bezierInterpolation;
  }
  return _pointInLine;
}
function strokePathWithCache(ctx, line, start, count) {
  let path = line._path;
  if (!path) {
    path = line._path = new Path2D();
    if (line.path(path, start, count)) {
      path.closePath();
    }
  }
  setStyle(ctx, line.options);
  ctx.stroke(path);
}
function strokePathDirect(ctx, line, start, count) {
  const {segments, options} = line;
  const segmentMethod = _getSegmentMethod(line);
  for (const segment of segments) {
    setStyle(ctx, options, segment.style);
    ctx.beginPath();
    if (segmentMethod(ctx, line, segment, {start, end: start + count - 1})) {
      ctx.closePath();
    }
    ctx.stroke();
  }
}
const usePath2D = typeof Path2D === 'function';
function draw(ctx, line, start, count) {
  if (usePath2D && !line.options.segment) {
    strokePathWithCache(ctx, line, start, count);
  } else {
    strokePathDirect(ctx, line, start, count);
  }
}
class LineElement extends Element {
  constructor(cfg) {
    super();
    this.animated = true;
    this.options = undefined;
    this._chart = undefined;
    this._loop = undefined;
    this._fullLoop = undefined;
    this._path = undefined;
    this._points = undefined;
    this._segments = undefined;
    this._decimated = false;
    this._pointsUpdated = false;
    this._datasetIndex = undefined;
    if (cfg) {
      Object.assign(this, cfg);
    }
  }
  updateControlPoints(chartArea, indexAxis) {
    const options = this.options;
    if ((options.tension || options.cubicInterpolationMode === 'monotone') && !options.stepped && !this._pointsUpdated) {
      const loop = options.spanGaps ? this._loop : this._fullLoop;
      _updateBezierControlPoints(this._points, options, chartArea, loop, indexAxis);
      this._pointsUpdated = true;
    }
  }
  set points(points) {
    this._points = points;
    delete this._segments;
    delete this._path;
    this._pointsUpdated = false;
  }
  get points() {
    return this._points;
  }
  get segments() {
    return this._segments || (this._segments = _computeSegments(this, this.options.segment));
  }
  first() {
    const segments = this.segments;
    const points = this.points;
    return segments.length && points[segments[0].start];
  }
  last() {
    const segments = this.segments;
    const points = this.points;
    const count = segments.length;
    return count && points[segments[count - 1].end];
  }
  interpolate(point, property) {
    const options = this.options;
    const value = point[property];
    const points = this.points;
    const segments = _boundSegments(this, {property, start: value, end: value});
    if (!segments.length) {
      return;
    }
    const result = [];
    const _interpolate = _getInterpolationMethod(options);
    let i, ilen;
    for (i = 0, ilen = segments.length; i < ilen; ++i) {
      const {start, end} = segments[i];
      const p1 = points[start];
      const p2 = points[end];
      if (p1 === p2) {
        result.push(p1);
        continue;
      }
      const t = Math.abs((value - p1[property]) / (p2[property] - p1[property]));
      const interpolated = _interpolate(p1, p2, t, options.stepped);
      interpolated[property] = point[property];
      result.push(interpolated);
    }
    return result.length === 1 ? result[0] : result;
  }
  pathSegment(ctx, segment, params) {
    const segmentMethod = _getSegmentMethod(this);
    return segmentMethod(ctx, this, segment, params);
  }
  path(ctx, start, count) {
    const segments = this.segments;
    const segmentMethod = _getSegmentMethod(this);
    let loop = this._loop;
    start = start || 0;
    count = count || (this.points.length - start);
    for (const segment of segments) {
      loop &= segmentMethod(ctx, this, segment, {start, end: start + count - 1});
    }
    return !!loop;
  }
  draw(ctx, chartArea, start, count) {
    const options = this.options || {};
    const points = this.points || [];
    if (points.length && options.borderWidth) {
      ctx.save();
      draw(ctx, this, start, count);
      ctx.restore();
    }
    if (this.animated) {
      this._pointsUpdated = false;
      this._path = undefined;
    }
  }
}
LineElement.id = 'line';
LineElement.defaults = {
  borderCapStyle: 'butt',
  borderDash: [],
  borderDashOffset: 0,
  borderJoinStyle: 'miter',
  borderWidth: 3,
  capBezierPoints: true,
  cubicInterpolationMode: 'default',
  fill: false,
  spanGaps: false,
  stepped: false,
  tension: 0,
};
LineElement.defaultRoutes = {
  backgroundColor: 'backgroundColor',
  borderColor: 'borderColor'
};
LineElement.descriptors = {
  _scriptable: true,
  _indexable: (name) => name !== 'borderDash' && name !== 'fill',
};

function inRange$1(el, pos, axis, useFinalPosition) {
  const options = el.options;
  const {[axis]: value} = el.getProps([axis], useFinalPosition);
  return (Math.abs(pos - value) < options.radius + options.hitRadius);
}
class PointElement extends Element {
  constructor(cfg) {
    super();
    this.options = undefined;
    this.parsed = undefined;
    this.skip = undefined;
    this.stop = undefined;
    if (cfg) {
      Object.assign(this, cfg);
    }
  }
  inRange(mouseX, mouseY, useFinalPosition) {
    const options = this.options;
    const {x, y} = this.getProps(['x', 'y'], useFinalPosition);
    return ((Math.pow(mouseX - x, 2) + Math.pow(mouseY - y, 2)) < Math.pow(options.hitRadius + options.radius, 2));
  }
  inXRange(mouseX, useFinalPosition) {
    return inRange$1(this, mouseX, 'x', useFinalPosition);
  }
  inYRange(mouseY, useFinalPosition) {
    return inRange$1(this, mouseY, 'y', useFinalPosition);
  }
  getCenterPoint(useFinalPosition) {
    const {x, y} = this.getProps(['x', 'y'], useFinalPosition);
    return {x, y};
  }
  size(options) {
    options = options || this.options || {};
    let radius = options.radius || 0;
    radius = Math.max(radius, radius && options.hoverRadius || 0);
    const borderWidth = radius && options.borderWidth || 0;
    return (radius + borderWidth) * 2;
  }
  draw(ctx, area) {
    const options = this.options;
    if (this.skip || options.radius < 0.1 || !_isPointInArea(this, area, this.size(options) / 2)) {
      return;
    }
    ctx.strokeStyle = options.borderColor;
    ctx.lineWidth = options.borderWidth;
    ctx.fillStyle = options.backgroundColor;
    drawPoint(ctx, options, this.x, this.y);
  }
  getRange() {
    const options = this.options || {};
    return options.radius + options.hitRadius;
  }
}
PointElement.id = 'point';
PointElement.defaults = {
  borderWidth: 1,
  hitRadius: 1,
  hoverBorderWidth: 1,
  hoverRadius: 4,
  pointStyle: 'circle',
  radius: 3,
  rotation: 0
};
PointElement.defaultRoutes = {
  backgroundColor: 'backgroundColor',
  borderColor: 'borderColor'
};

function getBarBounds(bar, useFinalPosition) {
  const {x, y, base, width, height} = bar.getProps(['x', 'y', 'base', 'width', 'height'], useFinalPosition);
  let left, right, top, bottom, half;
  if (bar.horizontal) {
    half = height / 2;
    left = Math.min(x, base);
    right = Math.max(x, base);
    top = y - half;
    bottom = y + half;
  } else {
    half = width / 2;
    left = x - half;
    right = x + half;
    top = Math.min(y, base);
    bottom = Math.max(y, base);
  }
  return {left, top, right, bottom};
}
function skipOrLimit(skip, value, min, max) {
  return skip ? 0 : _limitValue(value, min, max);
}
function parseBorderWidth(bar, maxW, maxH) {
  const value = bar.options.borderWidth;
  const skip = bar.borderSkipped;
  const o = toTRBL(value);
  return {
    t: skipOrLimit(skip.top, o.top, 0, maxH),
    r: skipOrLimit(skip.right, o.right, 0, maxW),
    b: skipOrLimit(skip.bottom, o.bottom, 0, maxH),
    l: skipOrLimit(skip.left, o.left, 0, maxW)
  };
}
function parseBorderRadius(bar, maxW, maxH) {
  const {enableBorderRadius} = bar.getProps(['enableBorderRadius']);
  const value = bar.options.borderRadius;
  const o = toTRBLCorners(value);
  const maxR = Math.min(maxW, maxH);
  const skip = bar.borderSkipped;
  const enableBorder = enableBorderRadius || isObject(value);
  return {
    topLeft: skipOrLimit(!enableBorder || skip.top || skip.left, o.topLeft, 0, maxR),
    topRight: skipOrLimit(!enableBorder || skip.top || skip.right, o.topRight, 0, maxR),
    bottomLeft: skipOrLimit(!enableBorder || skip.bottom || skip.left, o.bottomLeft, 0, maxR),
    bottomRight: skipOrLimit(!enableBorder || skip.bottom || skip.right, o.bottomRight, 0, maxR)
  };
}
function boundingRects(bar) {
  const bounds = getBarBounds(bar);
  const width = bounds.right - bounds.left;
  const height = bounds.bottom - bounds.top;
  const border = parseBorderWidth(bar, width / 2, height / 2);
  const radius = parseBorderRadius(bar, width / 2, height / 2);
  return {
    outer: {
      x: bounds.left,
      y: bounds.top,
      w: width,
      h: height,
      radius
    },
    inner: {
      x: bounds.left + border.l,
      y: bounds.top + border.t,
      w: width - border.l - border.r,
      h: height - border.t - border.b,
      radius: {
        topLeft: Math.max(0, radius.topLeft - Math.max(border.t, border.l)),
        topRight: Math.max(0, radius.topRight - Math.max(border.t, border.r)),
        bottomLeft: Math.max(0, radius.bottomLeft - Math.max(border.b, border.l)),
        bottomRight: Math.max(0, radius.bottomRight - Math.max(border.b, border.r)),
      }
    }
  };
}
function inRange(bar, x, y, useFinalPosition) {
  const skipX = x === null;
  const skipY = y === null;
  const skipBoth = skipX && skipY;
  const bounds = bar && !skipBoth && getBarBounds(bar, useFinalPosition);
  return bounds
		&& (skipX || _isBetween(x, bounds.left, bounds.right))
		&& (skipY || _isBetween(y, bounds.top, bounds.bottom));
}
function hasRadius(radius) {
  return radius.topLeft || radius.topRight || radius.bottomLeft || radius.bottomRight;
}
function addNormalRectPath(ctx, rect) {
  ctx.rect(rect.x, rect.y, rect.w, rect.h);
}
function inflateRect(rect, amount, refRect = {}) {
  const x = rect.x !== refRect.x ? -amount : 0;
  const y = rect.y !== refRect.y ? -amount : 0;
  const w = (rect.x + rect.w !== refRect.x + refRect.w ? amount : 0) - x;
  const h = (rect.y + rect.h !== refRect.y + refRect.h ? amount : 0) - y;
  return {
    x: rect.x + x,
    y: rect.y + y,
    w: rect.w + w,
    h: rect.h + h,
    radius: rect.radius
  };
}
class BarElement extends Element {
  constructor(cfg) {
    super();
    this.options = undefined;
    this.horizontal = undefined;
    this.base = undefined;
    this.width = undefined;
    this.height = undefined;
    this.inflateAmount = undefined;
    if (cfg) {
      Object.assign(this, cfg);
    }
  }
  draw(ctx) {
    const {inflateAmount, options: {borderColor, backgroundColor}} = this;
    const {inner, outer} = boundingRects(this);
    const addRectPath = hasRadius(outer.radius) ? addRoundedRectPath : addNormalRectPath;
    ctx.save();
    if (outer.w !== inner.w || outer.h !== inner.h) {
      ctx.beginPath();
      addRectPath(ctx, inflateRect(outer, inflateAmount, inner));
      ctx.clip();
      addRectPath(ctx, inflateRect(inner, -inflateAmount, outer));
      ctx.fillStyle = borderColor;
      ctx.fill('evenodd');
    }
    ctx.beginPath();
    addRectPath(ctx, inflateRect(inner, inflateAmount));
    ctx.fillStyle = backgroundColor;
    ctx.fill();
    ctx.restore();
  }
  inRange(mouseX, mouseY, useFinalPosition) {
    return inRange(this, mouseX, mouseY, useFinalPosition);
  }
  inXRange(mouseX, useFinalPosition) {
    return inRange(this, mouseX, null, useFinalPosition);
  }
  inYRange(mouseY, useFinalPosition) {
    return inRange(this, null, mouseY, useFinalPosition);
  }
  getCenterPoint(useFinalPosition) {
    const {x, y, base, horizontal} = this.getProps(['x', 'y', 'base', 'horizontal'], useFinalPosition);
    return {
      x: horizontal ? (x + base) / 2 : x,
      y: horizontal ? y : (y + base) / 2
    };
  }
  getRange(axis) {
    return axis === 'x' ? this.width / 2 : this.height / 2;
  }
}
BarElement.id = 'bar';
BarElement.defaults = {
  borderSkipped: 'start',
  borderWidth: 0,
  borderRadius: 0,
  inflateAmount: 'auto',
  pointStyle: undefined
};
BarElement.defaultRoutes = {
  backgroundColor: 'backgroundColor',
  borderColor: 'borderColor'
};

var chart_esm_elements = /*#__PURE__*/Object.freeze({
__proto__: null,
ArcElement: ArcElement,
LineElement: LineElement,
PointElement: PointElement,
BarElement: BarElement
});

function lttbDecimation(data, start, count, availableWidth, options) {
  const samples = options.samples || availableWidth;
  if (samples >= count) {
    return data.slice(start, start + count);
  }
  const decimated = [];
  const bucketWidth = (count - 2) / (samples - 2);
  let sampledIndex = 0;
  const endIndex = start + count - 1;
  let a = start;
  let i, maxAreaPoint, maxArea, area, nextA;
  decimated[sampledIndex++] = data[a];
  for (i = 0; i < samples - 2; i++) {
    let avgX = 0;
    let avgY = 0;
    let j;
    const avgRangeStart = Math.floor((i + 1) * bucketWidth) + 1 + start;
    const avgRangeEnd = Math.min(Math.floor((i + 2) * bucketWidth) + 1, count) + start;
    const avgRangeLength = avgRangeEnd - avgRangeStart;
    for (j = avgRangeStart; j < avgRangeEnd; j++) {
      avgX += data[j].x;
      avgY += data[j].y;
    }
    avgX /= avgRangeLength;
    avgY /= avgRangeLength;
    const rangeOffs = Math.floor(i * bucketWidth) + 1 + start;
    const rangeTo = Math.min(Math.floor((i + 1) * bucketWidth) + 1, count) + start;
    const {x: pointAx, y: pointAy} = data[a];
    maxArea = area = -1;
    for (j = rangeOffs; j < rangeTo; j++) {
      area = 0.5 * Math.abs(
        (pointAx - avgX) * (data[j].y - pointAy) -
        (pointAx - data[j].x) * (avgY - pointAy)
      );
      if (area > maxArea) {
        maxArea = area;
        maxAreaPoint = data[j];
        nextA = j;
      }
    }
    decimated[sampledIndex++] = maxAreaPoint;
    a = nextA;
  }
  decimated[sampledIndex++] = data[endIndex];
  return decimated;
}
function minMaxDecimation(data, start, count, availableWidth) {
  let avgX = 0;
  let countX = 0;
  let i, point, x, y, prevX, minIndex, maxIndex, startIndex, minY, maxY;
  const decimated = [];
  const endIndex = start + count - 1;
  const xMin = data[start].x;
  const xMax = data[endIndex].x;
  const dx = xMax - xMin;
  for (i = start; i < start + count; ++i) {
    point = data[i];
    x = (point.x - xMin) / dx * availableWidth;
    y = point.y;
    const truncX = x | 0;
    if (truncX === prevX) {
      if (y < minY) {
        minY = y;
        minIndex = i;
      } else if (y > maxY) {
        maxY = y;
        maxIndex = i;
      }
      avgX = (countX * avgX + point.x) / ++countX;
    } else {
      const lastIndex = i - 1;
      if (!isNullOrUndef(minIndex) && !isNullOrUndef(maxIndex)) {
        const intermediateIndex1 = Math.min(minIndex, maxIndex);
        const intermediateIndex2 = Math.max(minIndex, maxIndex);
        if (intermediateIndex1 !== startIndex && intermediateIndex1 !== lastIndex) {
          decimated.push({
            ...data[intermediateIndex1],
            x: avgX,
          });
        }
        if (intermediateIndex2 !== startIndex && intermediateIndex2 !== lastIndex) {
          decimated.push({
            ...data[intermediateIndex2],
            x: avgX
          });
        }
      }
      if (i > 0 && lastIndex !== startIndex) {
        decimated.push(data[lastIndex]);
      }
      decimated.push(point);
      prevX = truncX;
      countX = 0;
      minY = maxY = y;
      minIndex = maxIndex = startIndex = i;
    }
  }
  return decimated;
}
function cleanDecimatedDataset(dataset) {
  if (dataset._decimated) {
    const data = dataset._data;
    delete dataset._decimated;
    delete dataset._data;
    Object.defineProperty(dataset, 'data', {value: data});
  }
}
function cleanDecimatedData(chart) {
  chart.data.datasets.forEach((dataset) => {
    cleanDecimatedDataset(dataset);
  });
}
function getStartAndCountOfVisiblePointsSimplified(meta, points) {
  const pointCount = points.length;
  let start = 0;
  let count;
  const {iScale} = meta;
  const {min, max, minDefined, maxDefined} = iScale.getUserBounds();
  if (minDefined) {
    start = _limitValue(_lookupByKey(points, iScale.axis, min).lo, 0, pointCount - 1);
  }
  if (maxDefined) {
    count = _limitValue(_lookupByKey(points, iScale.axis, max).hi + 1, start, pointCount) - start;
  } else {
    count = pointCount - start;
  }
  return {start, count};
}
var plugin_decimation = {
  id: 'decimation',
  defaults: {
    algorithm: 'min-max',
    enabled: false,
  },
  beforeElementsUpdate: (chart, args, options) => {
    if (!options.enabled) {
      cleanDecimatedData(chart);
      return;
    }
    const availableWidth = chart.width;
    chart.data.datasets.forEach((dataset, datasetIndex) => {
      const {_data, indexAxis} = dataset;
      const meta = chart.getDatasetMeta(datasetIndex);
      const data = _data || dataset.data;
      if (resolve([indexAxis, chart.options.indexAxis]) === 'y') {
        return;
      }
      if (meta.type !== 'line') {
        return;
      }
      const xAxis = chart.scales[meta.xAxisID];
      if (xAxis.type !== 'linear' && xAxis.type !== 'time') {
        return;
      }
      if (chart.options.parsing) {
        return;
      }
      let {start, count} = getStartAndCountOfVisiblePointsSimplified(meta, data);
      const threshold = options.threshold || 4 * availableWidth;
      if (count <= threshold) {
        cleanDecimatedDataset(dataset);
        return;
      }
      if (isNullOrUndef(_data)) {
        dataset._data = data;
        delete dataset.data;
        Object.defineProperty(dataset, 'data', {
          configurable: true,
          enumerable: true,
          get: function() {
            return this._decimated;
          },
          set: function(d) {
            this._data = d;
          }
        });
      }
      let decimated;
      switch (options.algorithm) {
      case 'lttb':
        decimated = lttbDecimation(data, start, count, availableWidth, options);
        break;
      case 'min-max':
        decimated = minMaxDecimation(data, start, count, availableWidth);
        break;
      default:
        throw new Error(`Unsupported decimation algorithm '${options.algorithm}'`);
      }
      dataset._decimated = decimated;
    });
  },
  destroy(chart) {
    cleanDecimatedData(chart);
  }
};

function getLineByIndex(chart, index) {
  const meta = chart.getDatasetMeta(index);
  const visible = meta && chart.isDatasetVisible(index);
  return visible ? meta.dataset : null;
}
function parseFillOption(line) {
  const options = line.options;
  const fillOption = options.fill;
  let fill = valueOrDefault(fillOption && fillOption.target, fillOption);
  if (fill === undefined) {
    fill = !!options.backgroundColor;
  }
  if (fill === false || fill === null) {
    return false;
  }
  if (fill === true) {
    return 'origin';
  }
  return fill;
}
function decodeFill(line, index, count) {
  const fill = parseFillOption(line);
  if (isObject(fill)) {
    return isNaN(fill.value) ? false : fill;
  }
  let target = parseFloat(fill);
  if (isNumberFinite(target) && Math.floor(target) === target) {
    if (fill[0] === '-' || fill[0] === '+') {
      target = index + target;
    }
    if (target === index || target < 0 || target >= count) {
      return false;
    }
    return target;
  }
  return ['origin', 'start', 'end', 'stack', 'shape'].indexOf(fill) >= 0 && fill;
}
function computeLinearBoundary(source) {
  const {scale = {}, fill} = source;
  let target = null;
  let horizontal;
  if (fill === 'start') {
    target = scale.bottom;
  } else if (fill === 'end') {
    target = scale.top;
  } else if (isObject(fill)) {
    target = scale.getPixelForValue(fill.value);
  } else if (scale.getBasePixel) {
    target = scale.getBasePixel();
  }
  if (isNumberFinite(target)) {
    horizontal = scale.isHorizontal();
    return {
      x: horizontal ? target : null,
      y: horizontal ? null : target
    };
  }
  return null;
}
class simpleArc {
  constructor(opts) {
    this.x = opts.x;
    this.y = opts.y;
    this.radius = opts.radius;
  }
  pathSegment(ctx, bounds, opts) {
    const {x, y, radius} = this;
    bounds = bounds || {start: 0, end: TAU};
    ctx.arc(x, y, radius, bounds.end, bounds.start, true);
    return !opts.bounds;
  }
  interpolate(point) {
    const {x, y, radius} = this;
    const angle = point.angle;
    return {
      x: x + Math.cos(angle) * radius,
      y: y + Math.sin(angle) * radius,
      angle
    };
  }
}
function computeCircularBoundary(source) {
  const {scale, fill} = source;
  const options = scale.options;
  const length = scale.getLabels().length;
  const target = [];
  const start = options.reverse ? scale.max : scale.min;
  const end = options.reverse ? scale.min : scale.max;
  let i, center, value;
  if (fill === 'start') {
    value = start;
  } else if (fill === 'end') {
    value = end;
  } else if (isObject(fill)) {
    value = fill.value;
  } else {
    value = scale.getBaseValue();
  }
  if (options.grid.circular) {
    center = scale.getPointPositionForValue(0, start);
    return new simpleArc({
      x: center.x,
      y: center.y,
      radius: scale.getDistanceFromCenterForValue(value)
    });
  }
  for (i = 0; i < length; ++i) {
    target.push(scale.getPointPositionForValue(i, value));
  }
  return target;
}
function computeBoundary(source) {
  const scale = source.scale || {};
  if (scale.getPointPositionForValue) {
    return computeCircularBoundary(source);
  }
  return computeLinearBoundary(source);
}
function findSegmentEnd(start, end, points) {
  for (;end > start; end--) {
    const point = points[end];
    if (!isNaN(point.x) && !isNaN(point.y)) {
      break;
    }
  }
  return end;
}
function pointsFromSegments(boundary, line) {
  const {x = null, y = null} = boundary || {};
  const linePoints = line.points;
  const points = [];
  line.segments.forEach(({start, end}) => {
    end = findSegmentEnd(start, end, linePoints);
    const first = linePoints[start];
    const last = linePoints[end];
    if (y !== null) {
      points.push({x: first.x, y});
      points.push({x: last.x, y});
    } else if (x !== null) {
      points.push({x, y: first.y});
      points.push({x, y: last.y});
    }
  });
  return points;
}
function buildStackLine(source) {
  const {scale, index, line} = source;
  const points = [];
  const segments = line.segments;
  const sourcePoints = line.points;
  const linesBelow = getLinesBelow(scale, index);
  linesBelow.push(createBoundaryLine({x: null, y: scale.bottom}, line));
  for (let i = 0; i < segments.length; i++) {
    const segment = segments[i];
    for (let j = segment.start; j <= segment.end; j++) {
      addPointsBelow(points, sourcePoints[j], linesBelow);
    }
  }
  return new LineElement({points, options: {}});
}
function getLinesBelow(scale, index) {
  const below = [];
  const metas = scale.getMatchingVisibleMetas('line');
  for (let i = 0; i < metas.length; i++) {
    const meta = metas[i];
    if (meta.index === index) {
      break;
    }
    if (!meta.hidden) {
      below.unshift(meta.dataset);
    }
  }
  return below;
}
function addPointsBelow(points, sourcePoint, linesBelow) {
  const postponed = [];
  for (let j = 0; j < linesBelow.length; j++) {
    const line = linesBelow[j];
    const {first, last, point} = findPoint(line, sourcePoint, 'x');
    if (!point || (first && last)) {
      continue;
    }
    if (first) {
      postponed.unshift(point);
    } else {
      points.push(point);
      if (!last) {
        break;
      }
    }
  }
  points.push(...postponed);
}
function findPoint(line, sourcePoint, property) {
  const point = line.interpolate(sourcePoint, property);
  if (!point) {
    return {};
  }
  const pointValue = point[property];
  const segments = line.segments;
  const linePoints = line.points;
  let first = false;
  let last = false;
  for (let i = 0; i < segments.length; i++) {
    const segment = segments[i];
    const firstValue = linePoints[segment.start][property];
    const lastValue = linePoints[segment.end][property];
    if (_isBetween(pointValue, firstValue, lastValue)) {
      first = pointValue === firstValue;
      last = pointValue === lastValue;
      break;
    }
  }
  return {first, last, point};
}
function getTarget(source) {
  const {chart, fill, line} = source;
  if (isNumberFinite(fill)) {
    return getLineByIndex(chart, fill);
  }
  if (fill === 'stack') {
    return buildStackLine(source);
  }
  if (fill === 'shape') {
    return true;
  }
  const boundary = computeBoundary(source);
  if (boundary instanceof simpleArc) {
    return boundary;
  }
  return createBoundaryLine(boundary, line);
}
function createBoundaryLine(boundary, line) {
  let points = [];
  let _loop = false;
  if (isArray(boundary)) {
    _loop = true;
    points = boundary;
  } else {
    points = pointsFromSegments(boundary, line);
  }
  return points.length ? new LineElement({
    points,
    options: {tension: 0},
    _loop,
    _fullLoop: _loop
  }) : null;
}
function resolveTarget(sources, index, propagate) {
  const source = sources[index];
  let fill = source.fill;
  const visited = [index];
  let target;
  if (!propagate) {
    return fill;
  }
  while (fill !== false && visited.indexOf(fill) === -1) {
    if (!isNumberFinite(fill)) {
      return fill;
    }
    target = sources[fill];
    if (!target) {
      return false;
    }
    if (target.visible) {
      return fill;
    }
    visited.push(fill);
    fill = target.fill;
  }
  return false;
}
function _clip(ctx, target, clipY) {
  ctx.beginPath();
  target.path(ctx);
  ctx.lineTo(target.last().x, clipY);
  ctx.lineTo(target.first().x, clipY);
  ctx.closePath();
  ctx.clip();
}
function getBounds(property, first, last, loop) {
  if (loop) {
    return;
  }
  let start = first[property];
  let end = last[property];
  if (property === 'angle') {
    start = _normalizeAngle(start);
    end = _normalizeAngle(end);
  }
  return {property, start, end};
}
function _getEdge(a, b, prop, fn) {
  if (a && b) {
    return fn(a[prop], b[prop]);
  }
  return a ? a[prop] : b ? b[prop] : 0;
}
function _segments(line, target, property) {
  const segments = line.segments;
  const points = line.points;
  const tpoints = target.points;
  const parts = [];
  for (const segment of segments) {
    let {start, end} = segment;
    end = findSegmentEnd(start, end, points);
    const bounds = getBounds(property, points[start], points[end], segment.loop);
    if (!target.segments) {
      parts.push({
        source: segment,
        target: bounds,
        start: points[start],
        end: points[end]
      });
      continue;
    }
    const targetSegments = _boundSegments(target, bounds);
    for (const tgt of targetSegments) {
      const subBounds = getBounds(property, tpoints[tgt.start], tpoints[tgt.end], tgt.loop);
      const fillSources = _boundSegment(segment, points, subBounds);
      for (const fillSource of fillSources) {
        parts.push({
          source: fillSource,
          target: tgt,
          start: {
            [property]: _getEdge(bounds, subBounds, 'start', Math.max)
          },
          end: {
            [property]: _getEdge(bounds, subBounds, 'end', Math.min)
          }
        });
      }
    }
  }
  return parts;
}
function clipBounds(ctx, scale, bounds) {
  const {top, bottom} = scale.chart.chartArea;
  const {property, start, end} = bounds || {};
  if (property === 'x') {
    ctx.beginPath();
    ctx.rect(start, top, end - start, bottom - top);
    ctx.clip();
  }
}
function interpolatedLineTo(ctx, target, point, property) {
  const interpolatedPoint = target.interpolate(point, property);
  if (interpolatedPoint) {
    ctx.lineTo(interpolatedPoint.x, interpolatedPoint.y);
  }
}
function _fill(ctx, cfg) {
  const {line, target, property, color, scale} = cfg;
  const segments = _segments(line, target, property);
  for (const {source: src, target: tgt, start, end} of segments) {
    const {style: {backgroundColor = color} = {}} = src;
    const notShape = target !== true;
    ctx.save();
    ctx.fillStyle = backgroundColor;
    clipBounds(ctx, scale, notShape && getBounds(property, start, end));
    ctx.beginPath();
    const lineLoop = !!line.pathSegment(ctx, src);
    let loop;
    if (notShape) {
      if (lineLoop) {
        ctx.closePath();
      } else {
        interpolatedLineTo(ctx, target, end, property);
      }
      const targetLoop = !!target.pathSegment(ctx, tgt, {move: lineLoop, reverse: true});
      loop = lineLoop && targetLoop;
      if (!loop) {
        interpolatedLineTo(ctx, target, start, property);
      }
    }
    ctx.closePath();
    ctx.fill(loop ? 'evenodd' : 'nonzero');
    ctx.restore();
  }
}
function doFill(ctx, cfg) {
  const {line, target, above, below, area, scale} = cfg;
  const property = line._loop ? 'angle' : cfg.axis;
  ctx.save();
  if (property === 'x' && below !== above) {
    _clip(ctx, target, area.top);
    _fill(ctx, {line, target, color: above, scale, property});
    ctx.restore();
    ctx.save();
    _clip(ctx, target, area.bottom);
  }
  _fill(ctx, {line, target, color: below, scale, property});
  ctx.restore();
}
function drawfill(ctx, source, area) {
  const target = getTarget(source);
  const {line, scale, axis} = source;
  const lineOpts = line.options;
  const fillOption = lineOpts.fill;
  const color = lineOpts.backgroundColor;
  const {above = color, below = color} = fillOption || {};
  if (target && line.points.length) {
    clipArea(ctx, area);
    doFill(ctx, {line, target, above, below, area, scale, axis});
    unclipArea(ctx);
  }
}
var plugin_filler = {
  id: 'filler',
  afterDatasetsUpdate(chart, _args, options) {
    const count = (chart.data.datasets || []).length;
    const sources = [];
    let meta, i, line, source;
    for (i = 0; i < count; ++i) {
      meta = chart.getDatasetMeta(i);
      line = meta.dataset;
      source = null;
      if (line && line.options && line instanceof LineElement) {
        source = {
          visible: chart.isDatasetVisible(i),
          index: i,
          fill: decodeFill(line, i, count),
          chart,
          axis: meta.controller.options.indexAxis,
          scale: meta.vScale,
          line,
        };
      }
      meta.$filler = source;
      sources.push(source);
    }
    for (i = 0; i < count; ++i) {
      source = sources[i];
      if (!source || source.fill === false) {
        continue;
      }
      source.fill = resolveTarget(sources, i, options.propagate);
    }
  },
  beforeDraw(chart, _args, options) {
    const draw = options.drawTime === 'beforeDraw';
    const metasets = chart.getSortedVisibleDatasetMetas();
    const area = chart.chartArea;
    for (let i = metasets.length - 1; i >= 0; --i) {
      const source = metasets[i].$filler;
      if (!source) {
        continue;
      }
      source.line.updateControlPoints(area, source.axis);
      if (draw) {
        drawfill(chart.ctx, source, area);
      }
    }
  },
  beforeDatasetsDraw(chart, _args, options) {
    if (options.drawTime !== 'beforeDatasetsDraw') {
      return;
    }
    const metasets = chart.getSortedVisibleDatasetMetas();
    for (let i = metasets.length - 1; i >= 0; --i) {
      const source = metasets[i].$filler;
      if (source) {
        drawfill(chart.ctx, source, chart.chartArea);
      }
    }
  },
  beforeDatasetDraw(chart, args, options) {
    const source = args.meta.$filler;
    if (!source || source.fill === false || options.drawTime !== 'beforeDatasetDraw') {
      return;
    }
    drawfill(chart.ctx, source, chart.chartArea);
  },
  defaults: {
    propagate: true,
    drawTime: 'beforeDatasetDraw'
  }
};

const getBoxSize = (labelOpts, fontSize) => {
  let {boxHeight = fontSize, boxWidth = fontSize} = labelOpts;
  if (labelOpts.usePointStyle) {
    boxHeight = Math.min(boxHeight, fontSize);
    boxWidth = Math.min(boxWidth, fontSize);
  }
  return {
    boxWidth,
    boxHeight,
    itemHeight: Math.max(fontSize, boxHeight)
  };
};
const itemsEqual = (a, b) => a !== null && b !== null && a.datasetIndex === b.datasetIndex && a.index === b.index;
class Legend extends Element {
  constructor(config) {
    super();
    this._added = false;
    this.legendHitBoxes = [];
    this._hoveredItem = null;
    this.doughnutMode = false;
    this.chart = config.chart;
    this.options = config.options;
    this.ctx = config.ctx;
    this.legendItems = undefined;
    this.columnSizes = undefined;
    this.lineWidths = undefined;
    this.maxHeight = undefined;
    this.maxWidth = undefined;
    this.top = undefined;
    this.bottom = undefined;
    this.left = undefined;
    this.right = undefined;
    this.height = undefined;
    this.width = undefined;
    this._margins = undefined;
    this.position = undefined;
    this.weight = undefined;
    this.fullSize = undefined;
  }
  update(maxWidth, maxHeight, margins) {
    this.maxWidth = maxWidth;
    this.maxHeight = maxHeight;
    this._margins = margins;
    this.setDimensions();
    this.buildLabels();
    this.fit();
  }
  setDimensions() {
    if (this.isHorizontal()) {
      this.width = this.maxWidth;
      this.left = this._margins.left;
      this.right = this.width;
    } else {
      this.height = this.maxHeight;
      this.top = this._margins.top;
      this.bottom = this.height;
    }
  }
  buildLabels() {
    const labelOpts = this.options.labels || {};
    let legendItems = callback(labelOpts.generateLabels, [this.chart], this) || [];
    if (labelOpts.filter) {
      legendItems = legendItems.filter((item) => labelOpts.filter(item, this.chart.data));
    }
    if (labelOpts.sort) {
      legendItems = legendItems.sort((a, b) => labelOpts.sort(a, b, this.chart.data));
    }
    if (this.options.reverse) {
      legendItems.reverse();
    }
    this.legendItems = legendItems;
  }
  fit() {
    const {options, ctx} = this;
    if (!options.display) {
      this.width = this.height = 0;
      return;
    }
    const labelOpts = options.labels;
    const labelFont = toFont(labelOpts.font);
    const fontSize = labelFont.size;
    const titleHeight = this._computeTitleHeight();
    const {boxWidth, itemHeight} = getBoxSize(labelOpts, fontSize);
    let width, height;
    ctx.font = labelFont.string;
    if (this.isHorizontal()) {
      width = this.maxWidth;
      height = this._fitRows(titleHeight, fontSize, boxWidth, itemHeight) + 10;
    } else {
      height = this.maxHeight;
      width = this._fitCols(titleHeight, fontSize, boxWidth, itemHeight) + 10;
    }
    this.width = Math.min(width, options.maxWidth || this.maxWidth);
    this.height = Math.min(height, options.maxHeight || this.maxHeight);
  }
  _fitRows(titleHeight, fontSize, boxWidth, itemHeight) {
    const {ctx, maxWidth, options: {labels: {padding}}} = this;
    const hitboxes = this.legendHitBoxes = [];
    const lineWidths = this.lineWidths = [0];
    const lineHeight = itemHeight + padding;
    let totalHeight = titleHeight;
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    let row = -1;
    let top = -lineHeight;
    this.legendItems.forEach((legendItem, i) => {
      const itemWidth = boxWidth + (fontSize / 2) + ctx.measureText(legendItem.text).width;
      if (i === 0 || lineWidths[lineWidths.length - 1] + itemWidth + 2 * padding > maxWidth) {
        totalHeight += lineHeight;
        lineWidths[lineWidths.length - (i > 0 ? 0 : 1)] = 0;
        top += lineHeight;
        row++;
      }
      hitboxes[i] = {left: 0, top, row, width: itemWidth, height: itemHeight};
      lineWidths[lineWidths.length - 1] += itemWidth + padding;
    });
    return totalHeight;
  }
  _fitCols(titleHeight, fontSize, boxWidth, itemHeight) {
    const {ctx, maxHeight, options: {labels: {padding}}} = this;
    const hitboxes = this.legendHitBoxes = [];
    const columnSizes = this.columnSizes = [];
    const heightLimit = maxHeight - titleHeight;
    let totalWidth = padding;
    let currentColWidth = 0;
    let currentColHeight = 0;
    let left = 0;
    let col = 0;
    this.legendItems.forEach((legendItem, i) => {
      const itemWidth = boxWidth + (fontSize / 2) + ctx.measureText(legendItem.text).width;
      if (i > 0 && currentColHeight + itemHeight + 2 * padding > heightLimit) {
        totalWidth += currentColWidth + padding;
        columnSizes.push({width: currentColWidth, height: currentColHeight});
        left += currentColWidth + padding;
        col++;
        currentColWidth = currentColHeight = 0;
      }
      hitboxes[i] = {left, top: currentColHeight, col, width: itemWidth, height: itemHeight};
      currentColWidth = Math.max(currentColWidth, itemWidth);
      currentColHeight += itemHeight + padding;
    });
    totalWidth += currentColWidth;
    columnSizes.push({width: currentColWidth, height: currentColHeight});
    return totalWidth;
  }
  adjustHitBoxes() {
    if (!this.options.display) {
      return;
    }
    const titleHeight = this._computeTitleHeight();
    const {legendHitBoxes: hitboxes, options: {align, labels: {padding}, rtl}} = this;
    const rtlHelper = getRtlAdapter(rtl, this.left, this.width);
    if (this.isHorizontal()) {
      let row = 0;
      let left = _alignStartEnd(align, this.left + padding, this.right - this.lineWidths[row]);
      for (const hitbox of hitboxes) {
        if (row !== hitbox.row) {
          row = hitbox.row;
          left = _alignStartEnd(align, this.left + padding, this.right - this.lineWidths[row]);
        }
        hitbox.top += this.top + titleHeight + padding;
        hitbox.left = rtlHelper.leftForLtr(rtlHelper.x(left), hitbox.width);
        left += hitbox.width + padding;
      }
    } else {
      let col = 0;
      let top = _alignStartEnd(align, this.top + titleHeight + padding, this.bottom - this.columnSizes[col].height);
      for (const hitbox of hitboxes) {
        if (hitbox.col !== col) {
          col = hitbox.col;
          top = _alignStartEnd(align, this.top + titleHeight + padding, this.bottom - this.columnSizes[col].height);
        }
        hitbox.top = top;
        hitbox.left += this.left + padding;
        hitbox.left = rtlHelper.leftForLtr(rtlHelper.x(hitbox.left), hitbox.width);
        top += hitbox.height + padding;
      }
    }
  }
  isHorizontal() {
    return this.options.position === 'top' || this.options.position === 'bottom';
  }
  draw() {
    if (this.options.display) {
      const ctx = this.ctx;
      clipArea(ctx, this);
      this._draw();
      unclipArea(ctx);
    }
  }
  _draw() {
    const {options: opts, columnSizes, lineWidths, ctx} = this;
    const {align, labels: labelOpts} = opts;
    const defaultColor = defaults.color;
    const rtlHelper = getRtlAdapter(opts.rtl, this.left, this.width);
    const labelFont = toFont(labelOpts.font);
    const {color: fontColor, padding} = labelOpts;
    const fontSize = labelFont.size;
    const halfFontSize = fontSize / 2;
    let cursor;
    this.drawTitle();
    ctx.textAlign = rtlHelper.textAlign('left');
    ctx.textBaseline = 'middle';
    ctx.lineWidth = 0.5;
    ctx.font = labelFont.string;
    const {boxWidth, boxHeight, itemHeight} = getBoxSize(labelOpts, fontSize);
    const drawLegendBox = function(x, y, legendItem) {
      if (isNaN(boxWidth) || boxWidth <= 0 || isNaN(boxHeight) || boxHeight < 0) {
        return;
      }
      ctx.save();
      const lineWidth = valueOrDefault(legendItem.lineWidth, 1);
      ctx.fillStyle = valueOrDefault(legendItem.fillStyle, defaultColor);
      ctx.lineCap = valueOrDefault(legendItem.lineCap, 'butt');
      ctx.lineDashOffset = valueOrDefault(legendItem.lineDashOffset, 0);
      ctx.lineJoin = valueOrDefault(legendItem.lineJoin, 'miter');
      ctx.lineWidth = lineWidth;
      ctx.strokeStyle = valueOrDefault(legendItem.strokeStyle, defaultColor);
      ctx.setLineDash(valueOrDefault(legendItem.lineDash, []));
      if (labelOpts.usePointStyle) {
        const drawOptions = {
          radius: boxWidth * Math.SQRT2 / 2,
          pointStyle: legendItem.pointStyle,
          rotation: legendItem.rotation,
          borderWidth: lineWidth
        };
        const centerX = rtlHelper.xPlus(x, boxWidth / 2);
        const centerY = y + halfFontSize;
        drawPoint(ctx, drawOptions, centerX, centerY);
      } else {
        const yBoxTop = y + Math.max((fontSize - boxHeight) / 2, 0);
        const xBoxLeft = rtlHelper.leftForLtr(x, boxWidth);
        const borderRadius = toTRBLCorners(legendItem.borderRadius);
        ctx.beginPath();
        if (Object.values(borderRadius).some(v => v !== 0)) {
          addRoundedRectPath(ctx, {
            x: xBoxLeft,
            y: yBoxTop,
            w: boxWidth,
            h: boxHeight,
            radius: borderRadius,
          });
        } else {
          ctx.rect(xBoxLeft, yBoxTop, boxWidth, boxHeight);
        }
        ctx.fill();
        if (lineWidth !== 0) {
          ctx.stroke();
        }
      }
      ctx.restore();
    };
    const fillText = function(x, y, legendItem) {
      renderText(ctx, legendItem.text, x, y + (itemHeight / 2), labelFont, {
        strikethrough: legendItem.hidden,
        textAlign: rtlHelper.textAlign(legendItem.textAlign)
      });
    };
    const isHorizontal = this.isHorizontal();
    const titleHeight = this._computeTitleHeight();
    if (isHorizontal) {
      cursor = {
        x: _alignStartEnd(align, this.left + padding, this.right - lineWidths[0]),
        y: this.top + padding + titleHeight,
        line: 0
      };
    } else {
      cursor = {
        x: this.left + padding,
        y: _alignStartEnd(align, this.top + titleHeight + padding, this.bottom - columnSizes[0].height),
        line: 0
      };
    }
    overrideTextDirection(this.ctx, opts.textDirection);
    const lineHeight = itemHeight + padding;
    this.legendItems.forEach((legendItem, i) => {
      ctx.strokeStyle = legendItem.fontColor || fontColor;
      ctx.fillStyle = legendItem.fontColor || fontColor;
      const textWidth = ctx.measureText(legendItem.text).width;
      const textAlign = rtlHelper.textAlign(legendItem.textAlign || (legendItem.textAlign = labelOpts.textAlign));
      const width = boxWidth + halfFontSize + textWidth;
      let x = cursor.x;
      let y = cursor.y;
      rtlHelper.setWidth(this.width);
      if (isHorizontal) {
        if (i > 0 && x + width + padding > this.right) {
          y = cursor.y += lineHeight;
          cursor.line++;
          x = cursor.x = _alignStartEnd(align, this.left + padding, this.right - lineWidths[cursor.line]);
        }
      } else if (i > 0 && y + lineHeight > this.bottom) {
        x = cursor.x = x + columnSizes[cursor.line].width + padding;
        cursor.line++;
        y = cursor.y = _alignStartEnd(align, this.top + titleHeight + padding, this.bottom - columnSizes[cursor.line].height);
      }
      const realX = rtlHelper.x(x);
      drawLegendBox(realX, y, legendItem);
      x = _textX(textAlign, x + boxWidth + halfFontSize, isHorizontal ? x + width : this.right, opts.rtl);
      fillText(rtlHelper.x(x), y, legendItem);
      if (isHorizontal) {
        cursor.x += width + padding;
      } else {
        cursor.y += lineHeight;
      }
    });
    restoreTextDirection(this.ctx, opts.textDirection);
  }
  drawTitle() {
    const opts = this.options;
    const titleOpts = opts.title;
    const titleFont = toFont(titleOpts.font);
    const titlePadding = toPadding(titleOpts.padding);
    if (!titleOpts.display) {
      return;
    }
    const rtlHelper = getRtlAdapter(opts.rtl, this.left, this.width);
    const ctx = this.ctx;
    const position = titleOpts.position;
    const halfFontSize = titleFont.size / 2;
    const topPaddingPlusHalfFontSize = titlePadding.top + halfFontSize;
    let y;
    let left = this.left;
    let maxWidth = this.width;
    if (this.isHorizontal()) {
      maxWidth = Math.max(...this.lineWidths);
      y = this.top + topPaddingPlusHalfFontSize;
      left = _alignStartEnd(opts.align, left, this.right - maxWidth);
    } else {
      const maxHeight = this.columnSizes.reduce((acc, size) => Math.max(acc, size.height), 0);
      y = topPaddingPlusHalfFontSize + _alignStartEnd(opts.align, this.top, this.bottom - maxHeight - opts.labels.padding - this._computeTitleHeight());
    }
    const x = _alignStartEnd(position, left, left + maxWidth);
    ctx.textAlign = rtlHelper.textAlign(_toLeftRightCenter(position));
    ctx.textBaseline = 'middle';
    ctx.strokeStyle = titleOpts.color;
    ctx.fillStyle = titleOpts.color;
    ctx.font = titleFont.string;
    renderText(ctx, titleOpts.text, x, y, titleFont);
  }
  _computeTitleHeight() {
    const titleOpts = this.options.title;
    const titleFont = toFont(titleOpts.font);
    const titlePadding = toPadding(titleOpts.padding);
    return titleOpts.display ? titleFont.lineHeight + titlePadding.height : 0;
  }
  _getLegendItemAt(x, y) {
    let i, hitBox, lh;
    if (_isBetween(x, this.left, this.right)
      && _isBetween(y, this.top, this.bottom)) {
      lh = this.legendHitBoxes;
      for (i = 0; i < lh.length; ++i) {
        hitBox = lh[i];
        if (_isBetween(x, hitBox.left, hitBox.left + hitBox.width)
          && _isBetween(y, hitBox.top, hitBox.top + hitBox.height)) {
          return this.legendItems[i];
        }
      }
    }
    return null;
  }
  handleEvent(e) {
    const opts = this.options;
    if (!isListened(e.type, opts)) {
      return;
    }
    const hoveredItem = this._getLegendItemAt(e.x, e.y);
    if (e.type === 'mousemove') {
      const previous = this._hoveredItem;
      const sameItem = itemsEqual(previous, hoveredItem);
      if (previous && !sameItem) {
        callback(opts.onLeave, [e, previous, this], this);
      }
      this._hoveredItem = hoveredItem;
      if (hoveredItem && !sameItem) {
        callback(opts.onHover, [e, hoveredItem, this], this);
      }
    } else if (hoveredItem) {
      callback(opts.onClick, [e, hoveredItem, this], this);
    }
  }
}
function isListened(type, opts) {
  if (type === 'mousemove' && (opts.onHover || opts.onLeave)) {
    return true;
  }
  if (opts.onClick && (type === 'click' || type === 'mouseup')) {
    return true;
  }
  return false;
}
var plugin_legend = {
  id: 'legend',
  _element: Legend,
  start(chart, _args, options) {
    const legend = chart.legend = new Legend({ctx: chart.ctx, options, chart});
    layouts.configure(chart, legend, options);
    layouts.addBox(chart, legend);
  },
  stop(chart) {
    layouts.removeBox(chart, chart.legend);
    delete chart.legend;
  },
  beforeUpdate(chart, _args, options) {
    const legend = chart.legend;
    layouts.configure(chart, legend, options);
    legend.options = options;
  },
  afterUpdate(chart) {
    const legend = chart.legend;
    legend.buildLabels();
    legend.adjustHitBoxes();
  },
  afterEvent(chart, args) {
    if (!args.replay) {
      chart.legend.handleEvent(args.event);
    }
  },
  defaults: {
    display: true,
    position: 'top',
    align: 'center',
    fullSize: true,
    reverse: false,
    weight: 1000,
    onClick(e, legendItem, legend) {
      const index = legendItem.datasetIndex;
      const ci = legend.chart;
      if (ci.isDatasetVisible(index)) {
        ci.hide(index);
        legendItem.hidden = true;
      } else {
        ci.show(index);
        legendItem.hidden = false;
      }
    },
    onHover: null,
    onLeave: null,
    labels: {
      color: (ctx) => ctx.chart.options.color,
      boxWidth: 40,
      padding: 10,
      generateLabels(chart) {
        const datasets = chart.data.datasets;
        const {labels: {usePointStyle, pointStyle, textAlign, color}} = chart.legend.options;
        return chart._getSortedDatasetMetas().map((meta) => {
          const style = meta.controller.getStyle(usePointStyle ? 0 : undefined);
          const borderWidth = toPadding(style.borderWidth);
          return {
            text: datasets[meta.index].label,
            fillStyle: style.backgroundColor,
            fontColor: color,
            hidden: !meta.visible,
            lineCap: style.borderCapStyle,
            lineDash: style.borderDash,
            lineDashOffset: style.borderDashOffset,
            lineJoin: style.borderJoinStyle,
            lineWidth: (borderWidth.width + borderWidth.height) / 4,
            strokeStyle: style.borderColor,
            pointStyle: pointStyle || style.pointStyle,
            rotation: style.rotation,
            textAlign: textAlign || style.textAlign,
            borderRadius: 0,
            datasetIndex: meta.index
          };
        }, this);
      }
    },
    title: {
      color: (ctx) => ctx.chart.options.color,
      display: false,
      position: 'center',
      text: '',
    }
  },
  descriptors: {
    _scriptable: (name) => !name.startsWith('on'),
    labels: {
      _scriptable: (name) => !['generateLabels', 'filter', 'sort'].includes(name),
    }
  },
};

class Title extends Element {
  constructor(config) {
    super();
    this.chart = config.chart;
    this.options = config.options;
    this.ctx = config.ctx;
    this._padding = undefined;
    this.top = undefined;
    this.bottom = undefined;
    this.left = undefined;
    this.right = undefined;
    this.width = undefined;
    this.height = undefined;
    this.position = undefined;
    this.weight = undefined;
    this.fullSize = undefined;
  }
  update(maxWidth, maxHeight) {
    const opts = this.options;
    this.left = 0;
    this.top = 0;
    if (!opts.display) {
      this.width = this.height = this.right = this.bottom = 0;
      return;
    }
    this.width = this.right = maxWidth;
    this.height = this.bottom = maxHeight;
    const lineCount = isArray(opts.text) ? opts.text.length : 1;
    this._padding = toPadding(opts.padding);
    const textSize = lineCount * toFont(opts.font).lineHeight + this._padding.height;
    if (this.isHorizontal()) {
      this.height = textSize;
    } else {
      this.width = textSize;
    }
  }
  isHorizontal() {
    const pos = this.options.position;
    return pos === 'top' || pos === 'bottom';
  }
  _drawArgs(offset) {
    const {top, left, bottom, right, options} = this;
    const align = options.align;
    let rotation = 0;
    let maxWidth, titleX, titleY;
    if (this.isHorizontal()) {
      titleX = _alignStartEnd(align, left, right);
      titleY = top + offset;
      maxWidth = right - left;
    } else {
      if (options.position === 'left') {
        titleX = left + offset;
        titleY = _alignStartEnd(align, bottom, top);
        rotation = PI * -0.5;
      } else {
        titleX = right - offset;
        titleY = _alignStartEnd(align, top, bottom);
        rotation = PI * 0.5;
      }
      maxWidth = bottom - top;
    }
    return {titleX, titleY, maxWidth, rotation};
  }
  draw() {
    const ctx = this.ctx;
    const opts = this.options;
    if (!opts.display) {
      return;
    }
    const fontOpts = toFont(opts.font);
    const lineHeight = fontOpts.lineHeight;
    const offset = lineHeight / 2 + this._padding.top;
    const {titleX, titleY, maxWidth, rotation} = this._drawArgs(offset);
    renderText(ctx, opts.text, 0, 0, fontOpts, {
      color: opts.color,
      maxWidth,
      rotation,
      textAlign: _toLeftRightCenter(opts.align),
      textBaseline: 'middle',
      translation: [titleX, titleY],
    });
  }
}
function createTitle(chart, titleOpts) {
  const title = new Title({
    ctx: chart.ctx,
    options: titleOpts,
    chart
  });
  layouts.configure(chart, title, titleOpts);
  layouts.addBox(chart, title);
  chart.titleBlock = title;
}
var plugin_title = {
  id: 'title',
  _element: Title,
  start(chart, _args, options) {
    createTitle(chart, options);
  },
  stop(chart) {
    const titleBlock = chart.titleBlock;
    layouts.removeBox(chart, titleBlock);
    delete chart.titleBlock;
  },
  beforeUpdate(chart, _args, options) {
    const title = chart.titleBlock;
    layouts.configure(chart, title, options);
    title.options = options;
  },
  defaults: {
    align: 'center',
    display: false,
    font: {
      weight: 'bold',
    },
    fullSize: true,
    padding: 10,
    position: 'top',
    text: '',
    weight: 2000
  },
  defaultRoutes: {
    color: 'color'
  },
  descriptors: {
    _scriptable: true,
    _indexable: false,
  },
};

const chart_esm_map = new WeakMap();
var plugin_subtitle = {
  id: 'subtitle',
  start(chart, _args, options) {
    const title = new Title({
      ctx: chart.ctx,
      options,
      chart
    });
    layouts.configure(chart, title, options);
    layouts.addBox(chart, title);
    chart_esm_map.set(chart, title);
  },
  stop(chart) {
    layouts.removeBox(chart, chart_esm_map.get(chart));
    chart_esm_map.delete(chart);
  },
  beforeUpdate(chart, _args, options) {
    const title = chart_esm_map.get(chart);
    layouts.configure(chart, title, options);
    title.options = options;
  },
  defaults: {
    align: 'center',
    display: false,
    font: {
      weight: 'normal',
    },
    fullSize: true,
    padding: 0,
    position: 'top',
    text: '',
    weight: 1500
  },
  defaultRoutes: {
    color: 'color'
  },
  descriptors: {
    _scriptable: true,
    _indexable: false,
  },
};

const positioners = {
  average(items) {
    if (!items.length) {
      return false;
    }
    let i, len;
    let x = 0;
    let y = 0;
    let count = 0;
    for (i = 0, len = items.length; i < len; ++i) {
      const el = items[i].element;
      if (el && el.hasValue()) {
        const pos = el.tooltipPosition();
        x += pos.x;
        y += pos.y;
        ++count;
      }
    }
    return {
      x: x / count,
      y: y / count
    };
  },
  nearest(items, eventPosition) {
    if (!items.length) {
      return false;
    }
    let x = eventPosition.x;
    let y = eventPosition.y;
    let minDistance = Number.POSITIVE_INFINITY;
    let i, len, nearestElement;
    for (i = 0, len = items.length; i < len; ++i) {
      const el = items[i].element;
      if (el && el.hasValue()) {
        const center = el.getCenterPoint();
        const d = distanceBetweenPoints(eventPosition, center);
        if (d < minDistance) {
          minDistance = d;
          nearestElement = el;
        }
      }
    }
    if (nearestElement) {
      const tp = nearestElement.tooltipPosition();
      x = tp.x;
      y = tp.y;
    }
    return {
      x,
      y
    };
  }
};
function pushOrConcat(base, toPush) {
  if (toPush) {
    if (isArray(toPush)) {
      Array.prototype.push.apply(base, toPush);
    } else {
      base.push(toPush);
    }
  }
  return base;
}
function splitNewlines(str) {
  if ((typeof str === 'string' || str instanceof String) && str.indexOf('\n') > -1) {
    return str.split('\n');
  }
  return str;
}
function createTooltipItem(chart, item) {
  const {element, datasetIndex, index} = item;
  const controller = chart.getDatasetMeta(datasetIndex).controller;
  const {label, value} = controller.getLabelAndValue(index);
  return {
    chart,
    label,
    parsed: controller.getParsed(index),
    raw: chart.data.datasets[datasetIndex].data[index],
    formattedValue: value,
    dataset: controller.getDataset(),
    dataIndex: index,
    datasetIndex,
    element
  };
}
function getTooltipSize(tooltip, options) {
  const ctx = tooltip._chart.ctx;
  const {body, footer, title} = tooltip;
  const {boxWidth, boxHeight} = options;
  const bodyFont = toFont(options.bodyFont);
  const titleFont = toFont(options.titleFont);
  const footerFont = toFont(options.footerFont);
  const titleLineCount = title.length;
  const footerLineCount = footer.length;
  const bodyLineItemCount = body.length;
  const padding = toPadding(options.padding);
  let height = padding.height;
  let width = 0;
  let combinedBodyLength = body.reduce((count, bodyItem) => count + bodyItem.before.length + bodyItem.lines.length + bodyItem.after.length, 0);
  combinedBodyLength += tooltip.beforeBody.length + tooltip.afterBody.length;
  if (titleLineCount) {
    height += titleLineCount * titleFont.lineHeight
			+ (titleLineCount - 1) * options.titleSpacing
			+ options.titleMarginBottom;
  }
  if (combinedBodyLength) {
    const bodyLineHeight = options.displayColors ? Math.max(boxHeight, bodyFont.lineHeight) : bodyFont.lineHeight;
    height += bodyLineItemCount * bodyLineHeight
			+ (combinedBodyLength - bodyLineItemCount) * bodyFont.lineHeight
			+ (combinedBodyLength - 1) * options.bodySpacing;
  }
  if (footerLineCount) {
    height += options.footerMarginTop
			+ footerLineCount * footerFont.lineHeight
			+ (footerLineCount - 1) * options.footerSpacing;
  }
  let widthPadding = 0;
  const maxLineWidth = function(line) {
    width = Math.max(width, ctx.measureText(line).width + widthPadding);
  };
  ctx.save();
  ctx.font = titleFont.string;
  each(tooltip.title, maxLineWidth);
  ctx.font = bodyFont.string;
  each(tooltip.beforeBody.concat(tooltip.afterBody), maxLineWidth);
  widthPadding = options.displayColors ? (boxWidth + 2 + options.boxPadding) : 0;
  each(body, (bodyItem) => {
    each(bodyItem.before, maxLineWidth);
    each(bodyItem.lines, maxLineWidth);
    each(bodyItem.after, maxLineWidth);
  });
  widthPadding = 0;
  ctx.font = footerFont.string;
  each(tooltip.footer, maxLineWidth);
  ctx.restore();
  width += padding.width;
  return {width, height};
}
function determineYAlign(chart, size) {
  const {y, height} = size;
  if (y < height / 2) {
    return 'top';
  } else if (y > (chart.height - height / 2)) {
    return 'bottom';
  }
  return 'center';
}
function doesNotFitWithAlign(xAlign, chart, options, size) {
  const {x, width} = size;
  const caret = options.caretSize + options.caretPadding;
  if (xAlign === 'left' && x + width + caret > chart.width) {
    return true;
  }
  if (xAlign === 'right' && x - width - caret < 0) {
    return true;
  }
}
function determineXAlign(chart, options, size, yAlign) {
  const {x, width} = size;
  const {width: chartWidth, chartArea: {left, right}} = chart;
  let xAlign = 'center';
  if (yAlign === 'center') {
    xAlign = x <= (left + right) / 2 ? 'left' : 'right';
  } else if (x <= width / 2) {
    xAlign = 'left';
  } else if (x >= chartWidth - width / 2) {
    xAlign = 'right';
  }
  if (doesNotFitWithAlign(xAlign, chart, options, size)) {
    xAlign = 'center';
  }
  return xAlign;
}
function determineAlignment(chart, options, size) {
  const yAlign = options.yAlign || determineYAlign(chart, size);
  return {
    xAlign: options.xAlign || determineXAlign(chart, options, size, yAlign),
    yAlign
  };
}
function alignX(size, xAlign) {
  let {x, width} = size;
  if (xAlign === 'right') {
    x -= width;
  } else if (xAlign === 'center') {
    x -= (width / 2);
  }
  return x;
}
function alignY(size, yAlign, paddingAndSize) {
  let {y, height} = size;
  if (yAlign === 'top') {
    y += paddingAndSize;
  } else if (yAlign === 'bottom') {
    y -= height + paddingAndSize;
  } else {
    y -= (height / 2);
  }
  return y;
}
function getBackgroundPoint(options, size, alignment, chart) {
  const {caretSize, caretPadding, cornerRadius} = options;
  const {xAlign, yAlign} = alignment;
  const paddingAndSize = caretSize + caretPadding;
  const {topLeft, topRight, bottomLeft, bottomRight} = toTRBLCorners(cornerRadius);
  let x = alignX(size, xAlign);
  const y = alignY(size, yAlign, paddingAndSize);
  if (yAlign === 'center') {
    if (xAlign === 'left') {
      x += paddingAndSize;
    } else if (xAlign === 'right') {
      x -= paddingAndSize;
    }
  } else if (xAlign === 'left') {
    x -= Math.max(topLeft, bottomLeft) + caretSize;
  } else if (xAlign === 'right') {
    x += Math.max(topRight, bottomRight) + caretSize;
  }
  return {
    x: _limitValue(x, 0, chart.width - size.width),
    y: _limitValue(y, 0, chart.height - size.height)
  };
}
function getAlignedX(tooltip, align, options) {
  const padding = toPadding(options.padding);
  return align === 'center'
    ? tooltip.x + tooltip.width / 2
    : align === 'right'
      ? tooltip.x + tooltip.width - padding.right
      : tooltip.x + padding.left;
}
function getBeforeAfterBodyLines(callback) {
  return pushOrConcat([], splitNewlines(callback));
}
function createTooltipContext(parent, tooltip, tooltipItems) {
  return createContext(parent, {
    tooltip,
    tooltipItems,
    type: 'tooltip'
  });
}
function overrideCallbacks(callbacks, context) {
  const override = context && context.dataset && context.dataset.tooltip && context.dataset.tooltip.callbacks;
  return override ? callbacks.override(override) : callbacks;
}
class Tooltip extends Element {
  constructor(config) {
    super();
    this.opacity = 0;
    this._active = [];
    this._chart = config._chart;
    this._eventPosition = undefined;
    this._size = undefined;
    this._cachedAnimations = undefined;
    this._tooltipItems = [];
    this.$animations = undefined;
    this.$context = undefined;
    this.options = config.options;
    this.dataPoints = undefined;
    this.title = undefined;
    this.beforeBody = undefined;
    this.body = undefined;
    this.afterBody = undefined;
    this.footer = undefined;
    this.xAlign = undefined;
    this.yAlign = undefined;
    this.x = undefined;
    this.y = undefined;
    this.height = undefined;
    this.width = undefined;
    this.caretX = undefined;
    this.caretY = undefined;
    this.labelColors = undefined;
    this.labelPointStyles = undefined;
    this.labelTextColors = undefined;
  }
  initialize(options) {
    this.options = options;
    this._cachedAnimations = undefined;
    this.$context = undefined;
  }
  _resolveAnimations() {
    const cached = this._cachedAnimations;
    if (cached) {
      return cached;
    }
    const chart = this._chart;
    const options = this.options.setContext(this.getContext());
    const opts = options.enabled && chart.options.animation && options.animations;
    const animations = new Animations(this._chart, opts);
    if (opts._cacheable) {
      this._cachedAnimations = Object.freeze(animations);
    }
    return animations;
  }
  getContext() {
    return this.$context ||
			(this.$context = createTooltipContext(this._chart.getContext(), this, this._tooltipItems));
  }
  getTitle(context, options) {
    const {callbacks} = options;
    const beforeTitle = callbacks.beforeTitle.apply(this, [context]);
    const title = callbacks.title.apply(this, [context]);
    const afterTitle = callbacks.afterTitle.apply(this, [context]);
    let lines = [];
    lines = pushOrConcat(lines, splitNewlines(beforeTitle));
    lines = pushOrConcat(lines, splitNewlines(title));
    lines = pushOrConcat(lines, splitNewlines(afterTitle));
    return lines;
  }
  getBeforeBody(tooltipItems, options) {
    return getBeforeAfterBodyLines(options.callbacks.beforeBody.apply(this, [tooltipItems]));
  }
  getBody(tooltipItems, options) {
    const {callbacks} = options;
    const bodyItems = [];
    each(tooltipItems, (context) => {
      const bodyItem = {
        before: [],
        lines: [],
        after: []
      };
      const scoped = overrideCallbacks(callbacks, context);
      pushOrConcat(bodyItem.before, splitNewlines(scoped.beforeLabel.call(this, context)));
      pushOrConcat(bodyItem.lines, scoped.label.call(this, context));
      pushOrConcat(bodyItem.after, splitNewlines(scoped.afterLabel.call(this, context)));
      bodyItems.push(bodyItem);
    });
    return bodyItems;
  }
  getAfterBody(tooltipItems, options) {
    return getBeforeAfterBodyLines(options.callbacks.afterBody.apply(this, [tooltipItems]));
  }
  getFooter(tooltipItems, options) {
    const {callbacks} = options;
    const beforeFooter = callbacks.beforeFooter.apply(this, [tooltipItems]);
    const footer = callbacks.footer.apply(this, [tooltipItems]);
    const afterFooter = callbacks.afterFooter.apply(this, [tooltipItems]);
    let lines = [];
    lines = pushOrConcat(lines, splitNewlines(beforeFooter));
    lines = pushOrConcat(lines, splitNewlines(footer));
    lines = pushOrConcat(lines, splitNewlines(afterFooter));
    return lines;
  }
  _createItems(options) {
    const active = this._active;
    const data = this._chart.data;
    const labelColors = [];
    const labelPointStyles = [];
    const labelTextColors = [];
    let tooltipItems = [];
    let i, len;
    for (i = 0, len = active.length; i < len; ++i) {
      tooltipItems.push(createTooltipItem(this._chart, active[i]));
    }
    if (options.filter) {
      tooltipItems = tooltipItems.filter((element, index, array) => options.filter(element, index, array, data));
    }
    if (options.itemSort) {
      tooltipItems = tooltipItems.sort((a, b) => options.itemSort(a, b, data));
    }
    each(tooltipItems, (context) => {
      const scoped = overrideCallbacks(options.callbacks, context);
      labelColors.push(scoped.labelColor.call(this, context));
      labelPointStyles.push(scoped.labelPointStyle.call(this, context));
      labelTextColors.push(scoped.labelTextColor.call(this, context));
    });
    this.labelColors = labelColors;
    this.labelPointStyles = labelPointStyles;
    this.labelTextColors = labelTextColors;
    this.dataPoints = tooltipItems;
    return tooltipItems;
  }
  update(changed, replay) {
    const options = this.options.setContext(this.getContext());
    const active = this._active;
    let properties;
    let tooltipItems = [];
    if (!active.length) {
      if (this.opacity !== 0) {
        properties = {
          opacity: 0
        };
      }
    } else {
      const position = positioners[options.position].call(this, active, this._eventPosition);
      tooltipItems = this._createItems(options);
      this.title = this.getTitle(tooltipItems, options);
      this.beforeBody = this.getBeforeBody(tooltipItems, options);
      this.body = this.getBody(tooltipItems, options);
      this.afterBody = this.getAfterBody(tooltipItems, options);
      this.footer = this.getFooter(tooltipItems, options);
      const size = this._size = getTooltipSize(this, options);
      const positionAndSize = Object.assign({}, position, size);
      const alignment = determineAlignment(this._chart, options, positionAndSize);
      const backgroundPoint = getBackgroundPoint(options, positionAndSize, alignment, this._chart);
      this.xAlign = alignment.xAlign;
      this.yAlign = alignment.yAlign;
      properties = {
        opacity: 1,
        x: backgroundPoint.x,
        y: backgroundPoint.y,
        width: size.width,
        height: size.height,
        caretX: position.x,
        caretY: position.y
      };
    }
    this._tooltipItems = tooltipItems;
    this.$context = undefined;
    if (properties) {
      this._resolveAnimations().update(this, properties);
    }
    if (changed && options.external) {
      options.external.call(this, {chart: this._chart, tooltip: this, replay});
    }
  }
  drawCaret(tooltipPoint, ctx, size, options) {
    const caretPosition = this.getCaretPosition(tooltipPoint, size, options);
    ctx.lineTo(caretPosition.x1, caretPosition.y1);
    ctx.lineTo(caretPosition.x2, caretPosition.y2);
    ctx.lineTo(caretPosition.x3, caretPosition.y3);
  }
  getCaretPosition(tooltipPoint, size, options) {
    const {xAlign, yAlign} = this;
    const {caretSize, cornerRadius} = options;
    const {topLeft, topRight, bottomLeft, bottomRight} = toTRBLCorners(cornerRadius);
    const {x: ptX, y: ptY} = tooltipPoint;
    const {width, height} = size;
    let x1, x2, x3, y1, y2, y3;
    if (yAlign === 'center') {
      y2 = ptY + (height / 2);
      if (xAlign === 'left') {
        x1 = ptX;
        x2 = x1 - caretSize;
        y1 = y2 + caretSize;
        y3 = y2 - caretSize;
      } else {
        x1 = ptX + width;
        x2 = x1 + caretSize;
        y1 = y2 - caretSize;
        y3 = y2 + caretSize;
      }
      x3 = x1;
    } else {
      if (xAlign === 'left') {
        x2 = ptX + Math.max(topLeft, bottomLeft) + (caretSize);
      } else if (xAlign === 'right') {
        x2 = ptX + width - Math.max(topRight, bottomRight) - caretSize;
      } else {
        x2 = this.caretX;
      }
      if (yAlign === 'top') {
        y1 = ptY;
        y2 = y1 - caretSize;
        x1 = x2 - caretSize;
        x3 = x2 + caretSize;
      } else {
        y1 = ptY + height;
        y2 = y1 + caretSize;
        x1 = x2 + caretSize;
        x3 = x2 - caretSize;
      }
      y3 = y1;
    }
    return {x1, x2, x3, y1, y2, y3};
  }
  drawTitle(pt, ctx, options) {
    const title = this.title;
    const length = title.length;
    let titleFont, titleSpacing, i;
    if (length) {
      const rtlHelper = getRtlAdapter(options.rtl, this.x, this.width);
      pt.x = getAlignedX(this, options.titleAlign, options);
      ctx.textAlign = rtlHelper.textAlign(options.titleAlign);
      ctx.textBaseline = 'middle';
      titleFont = toFont(options.titleFont);
      titleSpacing = options.titleSpacing;
      ctx.fillStyle = options.titleColor;
      ctx.font = titleFont.string;
      for (i = 0; i < length; ++i) {
        ctx.fillText(title[i], rtlHelper.x(pt.x), pt.y + titleFont.lineHeight / 2);
        pt.y += titleFont.lineHeight + titleSpacing;
        if (i + 1 === length) {
          pt.y += options.titleMarginBottom - titleSpacing;
        }
      }
    }
  }
  _drawColorBox(ctx, pt, i, rtlHelper, options) {
    const labelColors = this.labelColors[i];
    const labelPointStyle = this.labelPointStyles[i];
    const {boxHeight, boxWidth, boxPadding} = options;
    const bodyFont = toFont(options.bodyFont);
    const colorX = getAlignedX(this, 'left', options);
    const rtlColorX = rtlHelper.x(colorX);
    const yOffSet = boxHeight < bodyFont.lineHeight ? (bodyFont.lineHeight - boxHeight) / 2 : 0;
    const colorY = pt.y + yOffSet;
    if (options.usePointStyle) {
      const drawOptions = {
        radius: Math.min(boxWidth, boxHeight) / 2,
        pointStyle: labelPointStyle.pointStyle,
        rotation: labelPointStyle.rotation,
        borderWidth: 1
      };
      const centerX = rtlHelper.leftForLtr(rtlColorX, boxWidth) + boxWidth / 2;
      const centerY = colorY + boxHeight / 2;
      ctx.strokeStyle = options.multiKeyBackground;
      ctx.fillStyle = options.multiKeyBackground;
      drawPoint(ctx, drawOptions, centerX, centerY);
      ctx.strokeStyle = labelColors.borderColor;
      ctx.fillStyle = labelColors.backgroundColor;
      drawPoint(ctx, drawOptions, centerX, centerY);
    } else {
      ctx.lineWidth = labelColors.borderWidth || 1;
      ctx.strokeStyle = labelColors.borderColor;
      ctx.setLineDash(labelColors.borderDash || []);
      ctx.lineDashOffset = labelColors.borderDashOffset || 0;
      const outerX = rtlHelper.leftForLtr(rtlColorX, boxWidth - boxPadding);
      const innerX = rtlHelper.leftForLtr(rtlHelper.xPlus(rtlColorX, 1), boxWidth - boxPadding - 2);
      const borderRadius = toTRBLCorners(labelColors.borderRadius);
      if (Object.values(borderRadius).some(v => v !== 0)) {
        ctx.beginPath();
        ctx.fillStyle = options.multiKeyBackground;
        addRoundedRectPath(ctx, {
          x: outerX,
          y: colorY,
          w: boxWidth,
          h: boxHeight,
          radius: borderRadius,
        });
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = labelColors.backgroundColor;
        ctx.beginPath();
        addRoundedRectPath(ctx, {
          x: innerX,
          y: colorY + 1,
          w: boxWidth - 2,
          h: boxHeight - 2,
          radius: borderRadius,
        });
        ctx.fill();
      } else {
        ctx.fillStyle = options.multiKeyBackground;
        ctx.fillRect(outerX, colorY, boxWidth, boxHeight);
        ctx.strokeRect(outerX, colorY, boxWidth, boxHeight);
        ctx.fillStyle = labelColors.backgroundColor;
        ctx.fillRect(innerX, colorY + 1, boxWidth - 2, boxHeight - 2);
      }
    }
    ctx.fillStyle = this.labelTextColors[i];
  }
  drawBody(pt, ctx, options) {
    const {body} = this;
    const {bodySpacing, bodyAlign, displayColors, boxHeight, boxWidth, boxPadding} = options;
    const bodyFont = toFont(options.bodyFont);
    let bodyLineHeight = bodyFont.lineHeight;
    let xLinePadding = 0;
    const rtlHelper = getRtlAdapter(options.rtl, this.x, this.width);
    const fillLineOfText = function(line) {
      ctx.fillText(line, rtlHelper.x(pt.x + xLinePadding), pt.y + bodyLineHeight / 2);
      pt.y += bodyLineHeight + bodySpacing;
    };
    const bodyAlignForCalculation = rtlHelper.textAlign(bodyAlign);
    let bodyItem, textColor, lines, i, j, ilen, jlen;
    ctx.textAlign = bodyAlign;
    ctx.textBaseline = 'middle';
    ctx.font = bodyFont.string;
    pt.x = getAlignedX(this, bodyAlignForCalculation, options);
    ctx.fillStyle = options.bodyColor;
    each(this.beforeBody, fillLineOfText);
    xLinePadding = displayColors && bodyAlignForCalculation !== 'right'
      ? bodyAlign === 'center' ? (boxWidth / 2 + boxPadding) : (boxWidth + 2 + boxPadding)
      : 0;
    for (i = 0, ilen = body.length; i < ilen; ++i) {
      bodyItem = body[i];
      textColor = this.labelTextColors[i];
      ctx.fillStyle = textColor;
      each(bodyItem.before, fillLineOfText);
      lines = bodyItem.lines;
      if (displayColors && lines.length) {
        this._drawColorBox(ctx, pt, i, rtlHelper, options);
        bodyLineHeight = Math.max(bodyFont.lineHeight, boxHeight);
      }
      for (j = 0, jlen = lines.length; j < jlen; ++j) {
        fillLineOfText(lines[j]);
        bodyLineHeight = bodyFont.lineHeight;
      }
      each(bodyItem.after, fillLineOfText);
    }
    xLinePadding = 0;
    bodyLineHeight = bodyFont.lineHeight;
    each(this.afterBody, fillLineOfText);
    pt.y -= bodySpacing;
  }
  drawFooter(pt, ctx, options) {
    const footer = this.footer;
    const length = footer.length;
    let footerFont, i;
    if (length) {
      const rtlHelper = getRtlAdapter(options.rtl, this.x, this.width);
      pt.x = getAlignedX(this, options.footerAlign, options);
      pt.y += options.footerMarginTop;
      ctx.textAlign = rtlHelper.textAlign(options.footerAlign);
      ctx.textBaseline = 'middle';
      footerFont = toFont(options.footerFont);
      ctx.fillStyle = options.footerColor;
      ctx.font = footerFont.string;
      for (i = 0; i < length; ++i) {
        ctx.fillText(footer[i], rtlHelper.x(pt.x), pt.y + footerFont.lineHeight / 2);
        pt.y += footerFont.lineHeight + options.footerSpacing;
      }
    }
  }
  drawBackground(pt, ctx, tooltipSize, options) {
    const {xAlign, yAlign} = this;
    const {x, y} = pt;
    const {width, height} = tooltipSize;
    const {topLeft, topRight, bottomLeft, bottomRight} = toTRBLCorners(options.cornerRadius);
    ctx.fillStyle = options.backgroundColor;
    ctx.strokeStyle = options.borderColor;
    ctx.lineWidth = options.borderWidth;
    ctx.beginPath();
    ctx.moveTo(x + topLeft, y);
    if (yAlign === 'top') {
      this.drawCaret(pt, ctx, tooltipSize, options);
    }
    ctx.lineTo(x + width - topRight, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + topRight);
    if (yAlign === 'center' && xAlign === 'right') {
      this.drawCaret(pt, ctx, tooltipSize, options);
    }
    ctx.lineTo(x + width, y + height - bottomRight);
    ctx.quadraticCurveTo(x + width, y + height, x + width - bottomRight, y + height);
    if (yAlign === 'bottom') {
      this.drawCaret(pt, ctx, tooltipSize, options);
    }
    ctx.lineTo(x + bottomLeft, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - bottomLeft);
    if (yAlign === 'center' && xAlign === 'left') {
      this.drawCaret(pt, ctx, tooltipSize, options);
    }
    ctx.lineTo(x, y + topLeft);
    ctx.quadraticCurveTo(x, y, x + topLeft, y);
    ctx.closePath();
    ctx.fill();
    if (options.borderWidth > 0) {
      ctx.stroke();
    }
  }
  _updateAnimationTarget(options) {
    const chart = this._chart;
    const anims = this.$animations;
    const animX = anims && anims.x;
    const animY = anims && anims.y;
    if (animX || animY) {
      const position = positioners[options.position].call(this, this._active, this._eventPosition);
      if (!position) {
        return;
      }
      const size = this._size = getTooltipSize(this, options);
      const positionAndSize = Object.assign({}, position, this._size);
      const alignment = determineAlignment(chart, options, positionAndSize);
      const point = getBackgroundPoint(options, positionAndSize, alignment, chart);
      if (animX._to !== point.x || animY._to !== point.y) {
        this.xAlign = alignment.xAlign;
        this.yAlign = alignment.yAlign;
        this.width = size.width;
        this.height = size.height;
        this.caretX = position.x;
        this.caretY = position.y;
        this._resolveAnimations().update(this, point);
      }
    }
  }
  draw(ctx) {
    const options = this.options.setContext(this.getContext());
    let opacity = this.opacity;
    if (!opacity) {
      return;
    }
    this._updateAnimationTarget(options);
    const tooltipSize = {
      width: this.width,
      height: this.height
    };
    const pt = {
      x: this.x,
      y: this.y
    };
    opacity = Math.abs(opacity) < 1e-3 ? 0 : opacity;
    const padding = toPadding(options.padding);
    const hasTooltipContent = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
    if (options.enabled && hasTooltipContent) {
      ctx.save();
      ctx.globalAlpha = opacity;
      this.drawBackground(pt, ctx, tooltipSize, options);
      overrideTextDirection(ctx, options.textDirection);
      pt.y += padding.top;
      this.drawTitle(pt, ctx, options);
      this.drawBody(pt, ctx, options);
      this.drawFooter(pt, ctx, options);
      restoreTextDirection(ctx, options.textDirection);
      ctx.restore();
    }
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(activeElements, eventPosition) {
    const lastActive = this._active;
    const active = activeElements.map(({datasetIndex, index}) => {
      const meta = this._chart.getDatasetMeta(datasetIndex);
      if (!meta) {
        throw new Error('Cannot find a dataset at index ' + datasetIndex);
      }
      return {
        datasetIndex,
        element: meta.data[index],
        index,
      };
    });
    const changed = !_elementsEqual(lastActive, active);
    const positionChanged = this._positionChanged(active, eventPosition);
    if (changed || positionChanged) {
      this._active = active;
      this._eventPosition = eventPosition;
      this.update(true);
    }
  }
  handleEvent(e, replay) {
    const options = this.options;
    const lastActive = this._active || [];
    let changed = false;
    let active = [];
    if (e.type !== 'mouseout') {
      active = this._chart.getElementsAtEventForMode(e, options.mode, options, replay);
      if (options.reverse) {
        active.reverse();
      }
    }
    const positionChanged = this._positionChanged(active, e);
    changed = replay || !_elementsEqual(active, lastActive) || positionChanged;
    if (changed) {
      this._active = active;
      if (options.enabled || options.external) {
        this._eventPosition = {
          x: e.x,
          y: e.y
        };
        this.update(true, replay);
      }
    }
    return changed;
  }
  _positionChanged(active, e) {
    const {caretX, caretY, options} = this;
    const position = positioners[options.position].call(this, active, e);
    return position !== false && (caretX !== position.x || caretY !== position.y);
  }
}
Tooltip.positioners = positioners;
var plugin_tooltip = {
  id: 'tooltip',
  _element: Tooltip,
  positioners,
  afterInit(chart, _args, options) {
    if (options) {
      chart.tooltip = new Tooltip({_chart: chart, options});
    }
  },
  beforeUpdate(chart, _args, options) {
    if (chart.tooltip) {
      chart.tooltip.initialize(options);
    }
  },
  reset(chart, _args, options) {
    if (chart.tooltip) {
      chart.tooltip.initialize(options);
    }
  },
  afterDraw(chart) {
    const tooltip = chart.tooltip;
    const args = {
      tooltip
    };
    if (chart.notifyPlugins('beforeTooltipDraw', args) === false) {
      return;
    }
    if (tooltip) {
      tooltip.draw(chart.ctx);
    }
    chart.notifyPlugins('afterTooltipDraw', args);
  },
  afterEvent(chart, args) {
    if (chart.tooltip) {
      const useFinalPosition = args.replay;
      if (chart.tooltip.handleEvent(args.event, useFinalPosition)) {
        args.changed = true;
      }
    }
  },
  defaults: {
    enabled: true,
    external: null,
    position: 'average',
    backgroundColor: 'rgba(0,0,0,0.8)',
    titleColor: '#fff',
    titleFont: {
      weight: 'bold',
    },
    titleSpacing: 2,
    titleMarginBottom: 6,
    titleAlign: 'left',
    bodyColor: '#fff',
    bodySpacing: 2,
    bodyFont: {
    },
    bodyAlign: 'left',
    footerColor: '#fff',
    footerSpacing: 2,
    footerMarginTop: 6,
    footerFont: {
      weight: 'bold',
    },
    footerAlign: 'left',
    padding: 6,
    caretPadding: 2,
    caretSize: 5,
    cornerRadius: 6,
    boxHeight: (ctx, opts) => opts.bodyFont.size,
    boxWidth: (ctx, opts) => opts.bodyFont.size,
    multiKeyBackground: '#fff',
    displayColors: true,
    boxPadding: 0,
    borderColor: 'rgba(0,0,0,0)',
    borderWidth: 0,
    animation: {
      duration: 400,
      easing: 'easeOutQuart',
    },
    animations: {
      numbers: {
        type: 'number',
        properties: ['x', 'y', 'width', 'height', 'caretX', 'caretY'],
      },
      opacity: {
        easing: 'linear',
        duration: 200
      }
    },
    callbacks: {
      beforeTitle: noop,
      title(tooltipItems) {
        if (tooltipItems.length > 0) {
          const item = tooltipItems[0];
          const labels = item.chart.data.labels;
          const labelCount = labels ? labels.length : 0;
          if (this && this.options && this.options.mode === 'dataset') {
            return item.dataset.label || '';
          } else if (item.label) {
            return item.label;
          } else if (labelCount > 0 && item.dataIndex < labelCount) {
            return labels[item.dataIndex];
          }
        }
        return '';
      },
      afterTitle: noop,
      beforeBody: noop,
      beforeLabel: noop,
      label(tooltipItem) {
        if (this && this.options && this.options.mode === 'dataset') {
          return tooltipItem.label + ': ' + tooltipItem.formattedValue || tooltipItem.formattedValue;
        }
        let label = tooltipItem.dataset.label || '';
        if (label) {
          label += ': ';
        }
        const value = tooltipItem.formattedValue;
        if (!isNullOrUndef(value)) {
          label += value;
        }
        return label;
      },
      labelColor(tooltipItem) {
        const meta = tooltipItem.chart.getDatasetMeta(tooltipItem.datasetIndex);
        const options = meta.controller.getStyle(tooltipItem.dataIndex);
        return {
          borderColor: options.borderColor,
          backgroundColor: options.backgroundColor,
          borderWidth: options.borderWidth,
          borderDash: options.borderDash,
          borderDashOffset: options.borderDashOffset,
          borderRadius: 0,
        };
      },
      labelTextColor() {
        return this.options.bodyColor;
      },
      labelPointStyle(tooltipItem) {
        const meta = tooltipItem.chart.getDatasetMeta(tooltipItem.datasetIndex);
        const options = meta.controller.getStyle(tooltipItem.dataIndex);
        return {
          pointStyle: options.pointStyle,
          rotation: options.rotation,
        };
      },
      afterLabel: noop,
      afterBody: noop,
      beforeFooter: noop,
      footer: noop,
      afterFooter: noop
    }
  },
  defaultRoutes: {
    bodyFont: 'font',
    footerFont: 'font',
    titleFont: 'font'
  },
  descriptors: {
    _scriptable: (name) => name !== 'filter' && name !== 'itemSort' && name !== 'external',
    _indexable: false,
    callbacks: {
      _scriptable: false,
      _indexable: false,
    },
    animation: {
      _fallback: false
    },
    animations: {
      _fallback: 'animation'
    }
  },
  additionalOptionScopes: ['interaction']
};

var plugins = /*#__PURE__*/Object.freeze({
__proto__: null,
Decimation: plugin_decimation,
Filler: plugin_filler,
Legend: plugin_legend,
SubTitle: plugin_subtitle,
Title: plugin_title,
Tooltip: plugin_tooltip
});

const addIfString = (labels, raw, index, addedLabels) => {
  if (typeof raw === 'string') {
    index = labels.push(raw) - 1;
    addedLabels.unshift({index, label: raw});
  } else if (isNaN(raw)) {
    index = null;
  }
  return index;
};
function findOrAddLabel(labels, raw, index, addedLabels) {
  const first = labels.indexOf(raw);
  if (first === -1) {
    return addIfString(labels, raw, index, addedLabels);
  }
  const last = labels.lastIndexOf(raw);
  return first !== last ? index : first;
}
const validIndex = (index, max) => index === null ? null : _limitValue(Math.round(index), 0, max);
class CategoryScale extends Scale {
  constructor(cfg) {
    super(cfg);
    this._startValue = undefined;
    this._valueRange = 0;
    this._addedLabels = [];
  }
  init(scaleOptions) {
    const added = this._addedLabels;
    if (added.length) {
      const labels = this.getLabels();
      for (const {index, label} of added) {
        if (labels[index] === label) {
          labels.splice(index, 1);
        }
      }
      this._addedLabels = [];
    }
    super.init(scaleOptions);
  }
  parse(raw, index) {
    if (isNullOrUndef(raw)) {
      return null;
    }
    const labels = this.getLabels();
    index = isFinite(index) && labels[index] === raw ? index
      : findOrAddLabel(labels, raw, valueOrDefault(index, raw), this._addedLabels);
    return validIndex(index, labels.length - 1);
  }
  determineDataLimits() {
    const {minDefined, maxDefined} = this.getUserBounds();
    let {min, max} = this.getMinMax(true);
    if (this.options.bounds === 'ticks') {
      if (!minDefined) {
        min = 0;
      }
      if (!maxDefined) {
        max = this.getLabels().length - 1;
      }
    }
    this.min = min;
    this.max = max;
  }
  buildTicks() {
    const min = this.min;
    const max = this.max;
    const offset = this.options.offset;
    const ticks = [];
    let labels = this.getLabels();
    labels = (min === 0 && max === labels.length - 1) ? labels : labels.slice(min, max + 1);
    this._valueRange = Math.max(labels.length - (offset ? 0 : 1), 1);
    this._startValue = this.min - (offset ? 0.5 : 0);
    for (let value = min; value <= max; value++) {
      ticks.push({value});
    }
    return ticks;
  }
  getLabelForValue(value) {
    const labels = this.getLabels();
    if (value >= 0 && value < labels.length) {
      return labels[value];
    }
    return value;
  }
  configure() {
    super.configure();
    if (!this.isHorizontal()) {
      this._reversePixels = !this._reversePixels;
    }
  }
  getPixelForValue(value) {
    if (typeof value !== 'number') {
      value = this.parse(value);
    }
    return value === null ? NaN : this.getPixelForDecimal((value - this._startValue) / this._valueRange);
  }
  getPixelForTick(index) {
    const ticks = this.ticks;
    if (index < 0 || index > ticks.length - 1) {
      return null;
    }
    return this.getPixelForValue(ticks[index].value);
  }
  getValueForPixel(pixel) {
    return Math.round(this._startValue + this.getDecimalForPixel(pixel) * this._valueRange);
  }
  getBasePixel() {
    return this.bottom;
  }
}
CategoryScale.id = 'category';
CategoryScale.defaults = {
  ticks: {
    callback: CategoryScale.prototype.getLabelForValue
  }
};

function generateTicks$1(generationOptions, dataRange) {
  const ticks = [];
  const MIN_SPACING = 1e-14;
  const {bounds, step, min, max, precision, count, maxTicks, maxDigits, includeBounds} = generationOptions;
  const unit = step || 1;
  const maxSpaces = maxTicks - 1;
  const {min: rmin, max: rmax} = dataRange;
  const minDefined = !isNullOrUndef(min);
  const maxDefined = !isNullOrUndef(max);
  const countDefined = !isNullOrUndef(count);
  const minSpacing = (rmax - rmin) / (maxDigits + 1);
  let spacing = niceNum((rmax - rmin) / maxSpaces / unit) * unit;
  let factor, niceMin, niceMax, numSpaces;
  if (spacing < MIN_SPACING && !minDefined && !maxDefined) {
    return [{value: rmin}, {value: rmax}];
  }
  numSpaces = Math.ceil(rmax / spacing) - Math.floor(rmin / spacing);
  if (numSpaces > maxSpaces) {
    spacing = niceNum(numSpaces * spacing / maxSpaces / unit) * unit;
  }
  if (!isNullOrUndef(precision)) {
    factor = Math.pow(10, precision);
    spacing = Math.ceil(spacing * factor) / factor;
  }
  if (bounds === 'ticks') {
    niceMin = Math.floor(rmin / spacing) * spacing;
    niceMax = Math.ceil(rmax / spacing) * spacing;
  } else {
    niceMin = rmin;
    niceMax = rmax;
  }
  if (minDefined && maxDefined && step && almostWhole((max - min) / step, spacing / 1000)) {
    numSpaces = Math.round(Math.min((max - min) / spacing, maxTicks));
    spacing = (max - min) / numSpaces;
    niceMin = min;
    niceMax = max;
  } else if (countDefined) {
    niceMin = minDefined ? min : niceMin;
    niceMax = maxDefined ? max : niceMax;
    numSpaces = count - 1;
    spacing = (niceMax - niceMin) / numSpaces;
  } else {
    numSpaces = (niceMax - niceMin) / spacing;
    if (almostEquals(numSpaces, Math.round(numSpaces), spacing / 1000)) {
      numSpaces = Math.round(numSpaces);
    } else {
      numSpaces = Math.ceil(numSpaces);
    }
  }
  const decimalPlaces = Math.max(
    _decimalPlaces(spacing),
    _decimalPlaces(niceMin)
  );
  factor = Math.pow(10, isNullOrUndef(precision) ? decimalPlaces : precision);
  niceMin = Math.round(niceMin * factor) / factor;
  niceMax = Math.round(niceMax * factor) / factor;
  let j = 0;
  if (minDefined) {
    if (includeBounds && niceMin !== min) {
      ticks.push({value: min});
      if (niceMin < min) {
        j++;
      }
      if (almostEquals(Math.round((niceMin + j * spacing) * factor) / factor, min, relativeLabelSize(min, minSpacing, generationOptions))) {
        j++;
      }
    } else if (niceMin < min) {
      j++;
    }
  }
  for (; j < numSpaces; ++j) {
    ticks.push({value: Math.round((niceMin + j * spacing) * factor) / factor});
  }
  if (maxDefined && includeBounds && niceMax !== max) {
    if (ticks.length && almostEquals(ticks[ticks.length - 1].value, max, relativeLabelSize(max, minSpacing, generationOptions))) {
      ticks[ticks.length - 1].value = max;
    } else {
      ticks.push({value: max});
    }
  } else if (!maxDefined || niceMax === max) {
    ticks.push({value: niceMax});
  }
  return ticks;
}
function relativeLabelSize(value, minSpacing, {horizontal, minRotation}) {
  const rad = toRadians(minRotation);
  const ratio = (horizontal ? Math.sin(rad) : Math.cos(rad)) || 0.001;
  const length = 0.75 * minSpacing * ('' + value).length;
  return Math.min(minSpacing / ratio, length);
}
class LinearScaleBase extends Scale {
  constructor(cfg) {
    super(cfg);
    this.start = undefined;
    this.end = undefined;
    this._startValue = undefined;
    this._endValue = undefined;
    this._valueRange = 0;
  }
  parse(raw, index) {
    if (isNullOrUndef(raw)) {
      return null;
    }
    if ((typeof raw === 'number' || raw instanceof Number) && !isFinite(+raw)) {
      return null;
    }
    return +raw;
  }
  handleTickRangeOptions() {
    const {beginAtZero} = this.options;
    const {minDefined, maxDefined} = this.getUserBounds();
    let {min, max} = this;
    const setMin = v => (min = minDefined ? min : v);
    const setMax = v => (max = maxDefined ? max : v);
    if (beginAtZero) {
      const minSign = sign(min);
      const maxSign = sign(max);
      if (minSign < 0 && maxSign < 0) {
        setMax(0);
      } else if (minSign > 0 && maxSign > 0) {
        setMin(0);
      }
    }
    if (min === max) {
      let offset = 1;
      if (max >= Number.MAX_SAFE_INTEGER || min <= Number.MIN_SAFE_INTEGER) {
        offset = Math.abs(max * 0.05);
      }
      setMax(max + offset);
      if (!beginAtZero) {
        setMin(min - offset);
      }
    }
    this.min = min;
    this.max = max;
  }
  getTickLimit() {
    const tickOpts = this.options.ticks;
    let {maxTicksLimit, stepSize} = tickOpts;
    let maxTicks;
    if (stepSize) {
      maxTicks = Math.ceil(this.max / stepSize) - Math.floor(this.min / stepSize) + 1;
      if (maxTicks > 1000) {
        console.warn(`scales.${this.id}.ticks.stepSize: ${stepSize} would result generating up to ${maxTicks} ticks. Limiting to 1000.`);
        maxTicks = 1000;
      }
    } else {
      maxTicks = this.computeTickLimit();
      maxTicksLimit = maxTicksLimit || 11;
    }
    if (maxTicksLimit) {
      maxTicks = Math.min(maxTicksLimit, maxTicks);
    }
    return maxTicks;
  }
  computeTickLimit() {
    return Number.POSITIVE_INFINITY;
  }
  buildTicks() {
    const opts = this.options;
    const tickOpts = opts.ticks;
    let maxTicks = this.getTickLimit();
    maxTicks = Math.max(2, maxTicks);
    const numericGeneratorOptions = {
      maxTicks,
      bounds: opts.bounds,
      min: opts.min,
      max: opts.max,
      precision: tickOpts.precision,
      step: tickOpts.stepSize,
      count: tickOpts.count,
      maxDigits: this._maxDigits(),
      horizontal: this.isHorizontal(),
      minRotation: tickOpts.minRotation || 0,
      includeBounds: tickOpts.includeBounds !== false
    };
    const dataRange = this._range || this;
    const ticks = generateTicks$1(numericGeneratorOptions, dataRange);
    if (opts.bounds === 'ticks') {
      _setMinAndMaxByKey(ticks, this, 'value');
    }
    if (opts.reverse) {
      ticks.reverse();
      this.start = this.max;
      this.end = this.min;
    } else {
      this.start = this.min;
      this.end = this.max;
    }
    return ticks;
  }
  configure() {
    const ticks = this.ticks;
    let start = this.min;
    let end = this.max;
    super.configure();
    if (this.options.offset && ticks.length) {
      const offset = (end - start) / Math.max(ticks.length - 1, 1) / 2;
      start -= offset;
      end += offset;
    }
    this._startValue = start;
    this._endValue = end;
    this._valueRange = end - start;
  }
  getLabelForValue(value) {
    return formatNumber(value, this.chart.options.locale, this.options.ticks.format);
  }
}

class LinearScale extends LinearScaleBase {
  determineDataLimits() {
    const {min, max} = this.getMinMax(true);
    this.min = isNumberFinite(min) ? min : 0;
    this.max = isNumberFinite(max) ? max : 1;
    this.handleTickRangeOptions();
  }
  computeTickLimit() {
    const horizontal = this.isHorizontal();
    const length = horizontal ? this.width : this.height;
    const minRotation = toRadians(this.options.ticks.minRotation);
    const ratio = (horizontal ? Math.sin(minRotation) : Math.cos(minRotation)) || 0.001;
    const tickFont = this._resolveTickFontOptions(0);
    return Math.ceil(length / Math.min(40, tickFont.lineHeight / ratio));
  }
  getPixelForValue(value) {
    return value === null ? NaN : this.getPixelForDecimal((value - this._startValue) / this._valueRange);
  }
  getValueForPixel(pixel) {
    return this._startValue + this.getDecimalForPixel(pixel) * this._valueRange;
  }
}
LinearScale.id = 'linear';
LinearScale.defaults = {
  ticks: {
    callback: Ticks.formatters.numeric
  }
};

function isMajor(tickVal) {
  const remain = tickVal / (Math.pow(10, Math.floor(log10(tickVal))));
  return remain === 1;
}
function generateTicks(generationOptions, dataRange) {
  const endExp = Math.floor(log10(dataRange.max));
  const endSignificand = Math.ceil(dataRange.max / Math.pow(10, endExp));
  const ticks = [];
  let tickVal = finiteOrDefault(generationOptions.min, Math.pow(10, Math.floor(log10(dataRange.min))));
  let exp = Math.floor(log10(tickVal));
  let significand = Math.floor(tickVal / Math.pow(10, exp));
  let precision = exp < 0 ? Math.pow(10, Math.abs(exp)) : 1;
  do {
    ticks.push({value: tickVal, major: isMajor(tickVal)});
    ++significand;
    if (significand === 10) {
      significand = 1;
      ++exp;
      precision = exp >= 0 ? 1 : precision;
    }
    tickVal = Math.round(significand * Math.pow(10, exp) * precision) / precision;
  } while (exp < endExp || (exp === endExp && significand < endSignificand));
  const lastTick = finiteOrDefault(generationOptions.max, tickVal);
  ticks.push({value: lastTick, major: isMajor(tickVal)});
  return ticks;
}
class LogarithmicScale extends Scale {
  constructor(cfg) {
    super(cfg);
    this.start = undefined;
    this.end = undefined;
    this._startValue = undefined;
    this._valueRange = 0;
  }
  parse(raw, index) {
    const value = LinearScaleBase.prototype.parse.apply(this, [raw, index]);
    if (value === 0) {
      this._zero = true;
      return undefined;
    }
    return isNumberFinite(value) && value > 0 ? value : null;
  }
  determineDataLimits() {
    const {min, max} = this.getMinMax(true);
    this.min = isNumberFinite(min) ? Math.max(0, min) : null;
    this.max = isNumberFinite(max) ? Math.max(0, max) : null;
    if (this.options.beginAtZero) {
      this._zero = true;
    }
    this.handleTickRangeOptions();
  }
  handleTickRangeOptions() {
    const {minDefined, maxDefined} = this.getUserBounds();
    let min = this.min;
    let max = this.max;
    const setMin = v => (min = minDefined ? min : v);
    const setMax = v => (max = maxDefined ? max : v);
    const exp = (v, m) => Math.pow(10, Math.floor(log10(v)) + m);
    if (min === max) {
      if (min <= 0) {
        setMin(1);
        setMax(10);
      } else {
        setMin(exp(min, -1));
        setMax(exp(max, +1));
      }
    }
    if (min <= 0) {
      setMin(exp(max, -1));
    }
    if (max <= 0) {
      setMax(exp(min, +1));
    }
    if (this._zero && this.min !== this._suggestedMin && min === exp(this.min, 0)) {
      setMin(exp(min, -1));
    }
    this.min = min;
    this.max = max;
  }
  buildTicks() {
    const opts = this.options;
    const generationOptions = {
      min: this._userMin,
      max: this._userMax
    };
    const ticks = generateTicks(generationOptions, this);
    if (opts.bounds === 'ticks') {
      _setMinAndMaxByKey(ticks, this, 'value');
    }
    if (opts.reverse) {
      ticks.reverse();
      this.start = this.max;
      this.end = this.min;
    } else {
      this.start = this.min;
      this.end = this.max;
    }
    return ticks;
  }
  getLabelForValue(value) {
    return value === undefined
      ? '0'
      : formatNumber(value, this.chart.options.locale, this.options.ticks.format);
  }
  configure() {
    const start = this.min;
    super.configure();
    this._startValue = log10(start);
    this._valueRange = log10(this.max) - log10(start);
  }
  getPixelForValue(value) {
    if (value === undefined || value === 0) {
      value = this.min;
    }
    if (value === null || isNaN(value)) {
      return NaN;
    }
    return this.getPixelForDecimal(value === this.min
      ? 0
      : (log10(value) - this._startValue) / this._valueRange);
  }
  getValueForPixel(pixel) {
    const decimal = this.getDecimalForPixel(pixel);
    return Math.pow(10, this._startValue + decimal * this._valueRange);
  }
}
LogarithmicScale.id = 'logarithmic';
LogarithmicScale.defaults = {
  ticks: {
    callback: Ticks.formatters.logarithmic,
    major: {
      enabled: true
    }
  }
};

function getTickBackdropHeight(opts) {
  const tickOpts = opts.ticks;
  if (tickOpts.display && opts.display) {
    const padding = toPadding(tickOpts.backdropPadding);
    return valueOrDefault(tickOpts.font && tickOpts.font.size, defaults.font.size) + padding.height;
  }
  return 0;
}
function measureLabelSize(ctx, font, label) {
  label = isArray(label) ? label : [label];
  return {
    w: _longestText(ctx, font.string, label),
    h: label.length * font.lineHeight
  };
}
function determineLimits(angle, pos, size, min, max) {
  if (angle === min || angle === max) {
    return {
      start: pos - (size / 2),
      end: pos + (size / 2)
    };
  } else if (angle < min || angle > max) {
    return {
      start: pos - size,
      end: pos
    };
  }
  return {
    start: pos,
    end: pos + size
  };
}
function fitWithPointLabels(scale) {
  const furthestLimits = {
    l: 0,
    r: scale.width,
    t: 0,
    b: scale.height - scale.paddingTop
  };
  const furthestAngles = {};
  const labelSizes = [];
  const padding = [];
  const valueCount = scale.getLabels().length;
  for (let i = 0; i < valueCount; i++) {
    const opts = scale.options.pointLabels.setContext(scale.getPointLabelContext(i));
    padding[i] = opts.padding;
    const pointPosition = scale.getPointPosition(i, scale.drawingArea + padding[i]);
    const plFont = toFont(opts.font);
    const textSize = measureLabelSize(scale.ctx, plFont, scale._pointLabels[i]);
    labelSizes[i] = textSize;
    const angleRadians = scale.getIndexAngle(i);
    const angle = toDegrees(angleRadians);
    const hLimits = determineLimits(angle, pointPosition.x, textSize.w, 0, 180);
    const vLimits = determineLimits(angle, pointPosition.y, textSize.h, 90, 270);
    if (hLimits.start < furthestLimits.l) {
      furthestLimits.l = hLimits.start;
      furthestAngles.l = angleRadians;
    }
    if (hLimits.end > furthestLimits.r) {
      furthestLimits.r = hLimits.end;
      furthestAngles.r = angleRadians;
    }
    if (vLimits.start < furthestLimits.t) {
      furthestLimits.t = vLimits.start;
      furthestAngles.t = angleRadians;
    }
    if (vLimits.end > furthestLimits.b) {
      furthestLimits.b = vLimits.end;
      furthestAngles.b = angleRadians;
    }
  }
  scale._setReductions(scale.drawingArea, furthestLimits, furthestAngles);
  scale._pointLabelItems = buildPointLabelItems(scale, labelSizes, padding);
}
function buildPointLabelItems(scale, labelSizes, padding) {
  const items = [];
  const valueCount = scale.getLabels().length;
  const opts = scale.options;
  const tickBackdropHeight = getTickBackdropHeight(opts);
  const outerDistance = scale.getDistanceFromCenterForValue(opts.ticks.reverse ? scale.min : scale.max);
  for (let i = 0; i < valueCount; i++) {
    const extra = (i === 0 ? tickBackdropHeight / 2 : 0);
    const pointLabelPosition = scale.getPointPosition(i, outerDistance + extra + padding[i]);
    const angle = toDegrees(scale.getIndexAngle(i));
    const size = labelSizes[i];
    const y = yForAngle(pointLabelPosition.y, size.h, angle);
    const textAlign = getTextAlignForAngle(angle);
    const left = leftForTextAlign(pointLabelPosition.x, size.w, textAlign);
    items.push({
      x: pointLabelPosition.x,
      y,
      textAlign,
      left,
      top: y,
      right: left + size.w,
      bottom: y + size.h
    });
  }
  return items;
}
function getTextAlignForAngle(angle) {
  if (angle === 0 || angle === 180) {
    return 'center';
  } else if (angle < 180) {
    return 'left';
  }
  return 'right';
}
function leftForTextAlign(x, w, align) {
  if (align === 'right') {
    x -= w;
  } else if (align === 'center') {
    x -= (w / 2);
  }
  return x;
}
function yForAngle(y, h, angle) {
  if (angle === 90 || angle === 270) {
    y -= (h / 2);
  } else if (angle > 270 || angle < 90) {
    y -= h;
  }
  return y;
}
function drawPointLabels(scale, labelCount) {
  const {ctx, options: {pointLabels}} = scale;
  for (let i = labelCount - 1; i >= 0; i--) {
    const optsAtIndex = pointLabels.setContext(scale.getPointLabelContext(i));
    const plFont = toFont(optsAtIndex.font);
    const {x, y, textAlign, left, top, right, bottom} = scale._pointLabelItems[i];
    const {backdropColor} = optsAtIndex;
    if (!isNullOrUndef(backdropColor)) {
      const padding = toPadding(optsAtIndex.backdropPadding);
      ctx.fillStyle = backdropColor;
      ctx.fillRect(left - padding.left, top - padding.top, right - left + padding.width, bottom - top + padding.height);
    }
    renderText(
      ctx,
      scale._pointLabels[i],
      x,
      y + (plFont.lineHeight / 2),
      plFont,
      {
        color: optsAtIndex.color,
        textAlign: textAlign,
        textBaseline: 'middle'
      }
    );
  }
}
function pathRadiusLine(scale, radius, circular, labelCount) {
  const {ctx} = scale;
  if (circular) {
    ctx.arc(scale.xCenter, scale.yCenter, radius, 0, TAU);
  } else {
    let pointPosition = scale.getPointPosition(0, radius);
    ctx.moveTo(pointPosition.x, pointPosition.y);
    for (let i = 1; i < labelCount; i++) {
      pointPosition = scale.getPointPosition(i, radius);
      ctx.lineTo(pointPosition.x, pointPosition.y);
    }
  }
}
function drawRadiusLine(scale, gridLineOpts, radius, labelCount) {
  const ctx = scale.ctx;
  const circular = gridLineOpts.circular;
  const {color, lineWidth} = gridLineOpts;
  if ((!circular && !labelCount) || !color || !lineWidth || radius < 0) {
    return;
  }
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  ctx.setLineDash(gridLineOpts.borderDash);
  ctx.lineDashOffset = gridLineOpts.borderDashOffset;
  ctx.beginPath();
  pathRadiusLine(scale, radius, circular, labelCount);
  ctx.closePath();
  ctx.stroke();
  ctx.restore();
}
function chart_esm_numberOrZero(param) {
  return isNumber(param) ? param : 0;
}
function createPointLabelContext(parent, index, label) {
  return createContext(parent, {
    label,
    index,
    type: 'pointLabel'
  });
}
class RadialLinearScale extends LinearScaleBase {
  constructor(cfg) {
    super(cfg);
    this.xCenter = undefined;
    this.yCenter = undefined;
    this.drawingArea = undefined;
    this._pointLabels = [];
    this._pointLabelItems = [];
  }
  setDimensions() {
    this.width = this.maxWidth;
    this.height = this.maxHeight;
    this.paddingTop = getTickBackdropHeight(this.options) / 2;
    this.xCenter = Math.floor(this.width / 2);
    this.yCenter = Math.floor((this.height - this.paddingTop) / 2);
    this.drawingArea = Math.min(this.height - this.paddingTop, this.width) / 2;
  }
  determineDataLimits() {
    const {min, max} = this.getMinMax(false);
    this.min = isNumberFinite(min) && !isNaN(min) ? min : 0;
    this.max = isNumberFinite(max) && !isNaN(max) ? max : 0;
    this.handleTickRangeOptions();
  }
  computeTickLimit() {
    return Math.ceil(this.drawingArea / getTickBackdropHeight(this.options));
  }
  generateTickLabels(ticks) {
    LinearScaleBase.prototype.generateTickLabels.call(this, ticks);
    this._pointLabels = this.getLabels().map((value, index) => {
      const label = callback(this.options.pointLabels.callback, [value, index], this);
      return label || label === 0 ? label : '';
    });
  }
  fit() {
    const opts = this.options;
    if (opts.display && opts.pointLabels.display) {
      fitWithPointLabels(this);
    } else {
      this.setCenterPoint(0, 0, 0, 0);
    }
  }
  _setReductions(largestPossibleRadius, furthestLimits, furthestAngles) {
    let radiusReductionLeft = furthestLimits.l / Math.sin(furthestAngles.l);
    let radiusReductionRight = Math.max(furthestLimits.r - this.width, 0) / Math.sin(furthestAngles.r);
    let radiusReductionTop = -furthestLimits.t / Math.cos(furthestAngles.t);
    let radiusReductionBottom = -Math.max(furthestLimits.b - (this.height - this.paddingTop), 0) / Math.cos(furthestAngles.b);
    radiusReductionLeft = chart_esm_numberOrZero(radiusReductionLeft);
    radiusReductionRight = chart_esm_numberOrZero(radiusReductionRight);
    radiusReductionTop = chart_esm_numberOrZero(radiusReductionTop);
    radiusReductionBottom = chart_esm_numberOrZero(radiusReductionBottom);
    this.drawingArea = Math.max(largestPossibleRadius / 2, Math.min(
      Math.floor(largestPossibleRadius - (radiusReductionLeft + radiusReductionRight) / 2),
      Math.floor(largestPossibleRadius - (radiusReductionTop + radiusReductionBottom) / 2)));
    this.setCenterPoint(radiusReductionLeft, radiusReductionRight, radiusReductionTop, radiusReductionBottom);
  }
  setCenterPoint(leftMovement, rightMovement, topMovement, bottomMovement) {
    const maxRight = this.width - rightMovement - this.drawingArea;
    const maxLeft = leftMovement + this.drawingArea;
    const maxTop = topMovement + this.drawingArea;
    const maxBottom = (this.height - this.paddingTop) - bottomMovement - this.drawingArea;
    this.xCenter = Math.floor(((maxLeft + maxRight) / 2) + this.left);
    this.yCenter = Math.floor(((maxTop + maxBottom) / 2) + this.top + this.paddingTop);
  }
  getIndexAngle(index) {
    const angleMultiplier = TAU / this.getLabels().length;
    const startAngle = this.options.startAngle || 0;
    return _normalizeAngle(index * angleMultiplier + toRadians(startAngle));
  }
  getDistanceFromCenterForValue(value) {
    if (isNullOrUndef(value)) {
      return NaN;
    }
    const scalingFactor = this.drawingArea / (this.max - this.min);
    if (this.options.reverse) {
      return (this.max - value) * scalingFactor;
    }
    return (value - this.min) * scalingFactor;
  }
  getValueForDistanceFromCenter(distance) {
    if (isNullOrUndef(distance)) {
      return NaN;
    }
    const scaledDistance = distance / (this.drawingArea / (this.max - this.min));
    return this.options.reverse ? this.max - scaledDistance : this.min + scaledDistance;
  }
  getPointLabelContext(index) {
    const pointLabels = this._pointLabels || [];
    if (index >= 0 && index < pointLabels.length) {
      const pointLabel = pointLabels[index];
      return createPointLabelContext(this.getContext(), index, pointLabel);
    }
  }
  getPointPosition(index, distanceFromCenter) {
    const angle = this.getIndexAngle(index) - HALF_PI;
    return {
      x: Math.cos(angle) * distanceFromCenter + this.xCenter,
      y: Math.sin(angle) * distanceFromCenter + this.yCenter,
      angle
    };
  }
  getPointPositionForValue(index, value) {
    return this.getPointPosition(index, this.getDistanceFromCenterForValue(value));
  }
  getBasePosition(index) {
    return this.getPointPositionForValue(index || 0, this.getBaseValue());
  }
  getPointLabelPosition(index) {
    const {left, top, right, bottom} = this._pointLabelItems[index];
    return {
      left,
      top,
      right,
      bottom,
    };
  }
  drawBackground() {
    const {backgroundColor, grid: {circular}} = this.options;
    if (backgroundColor) {
      const ctx = this.ctx;
      ctx.save();
      ctx.beginPath();
      pathRadiusLine(this, this.getDistanceFromCenterForValue(this._endValue), circular, this.getLabels().length);
      ctx.closePath();
      ctx.fillStyle = backgroundColor;
      ctx.fill();
      ctx.restore();
    }
  }
  drawGrid() {
    const ctx = this.ctx;
    const opts = this.options;
    const {angleLines, grid} = opts;
    const labelCount = this.getLabels().length;
    let i, offset, position;
    if (opts.pointLabels.display) {
      drawPointLabels(this, labelCount);
    }
    if (grid.display) {
      this.ticks.forEach((tick, index) => {
        if (index !== 0) {
          offset = this.getDistanceFromCenterForValue(tick.value);
          const optsAtIndex = grid.setContext(this.getContext(index - 1));
          drawRadiusLine(this, optsAtIndex, offset, labelCount);
        }
      });
    }
    if (angleLines.display) {
      ctx.save();
      for (i = this.getLabels().length - 1; i >= 0; i--) {
        const optsAtIndex = angleLines.setContext(this.getPointLabelContext(i));
        const {color, lineWidth} = optsAtIndex;
        if (!lineWidth || !color) {
          continue;
        }
        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = color;
        ctx.setLineDash(optsAtIndex.borderDash);
        ctx.lineDashOffset = optsAtIndex.borderDashOffset;
        offset = this.getDistanceFromCenterForValue(opts.ticks.reverse ? this.min : this.max);
        position = this.getPointPosition(i, offset);
        ctx.beginPath();
        ctx.moveTo(this.xCenter, this.yCenter);
        ctx.lineTo(position.x, position.y);
        ctx.stroke();
      }
      ctx.restore();
    }
  }
  drawBorder() {}
  drawLabels() {
    const ctx = this.ctx;
    const opts = this.options;
    const tickOpts = opts.ticks;
    if (!tickOpts.display) {
      return;
    }
    const startAngle = this.getIndexAngle(0);
    let offset, width;
    ctx.save();
    ctx.translate(this.xCenter, this.yCenter);
    ctx.rotate(startAngle);
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    this.ticks.forEach((tick, index) => {
      if (index === 0 && !opts.reverse) {
        return;
      }
      const optsAtIndex = tickOpts.setContext(this.getContext(index));
      const tickFont = toFont(optsAtIndex.font);
      offset = this.getDistanceFromCenterForValue(this.ticks[index].value);
      if (optsAtIndex.showLabelBackdrop) {
        ctx.font = tickFont.string;
        width = ctx.measureText(tick.label).width;
        ctx.fillStyle = optsAtIndex.backdropColor;
        const padding = toPadding(optsAtIndex.backdropPadding);
        ctx.fillRect(
          -width / 2 - padding.left,
          -offset - tickFont.size / 2 - padding.top,
          width + padding.width,
          tickFont.size + padding.height
        );
      }
      renderText(ctx, tick.label, 0, -offset, tickFont, {
        color: optsAtIndex.color,
      });
    });
    ctx.restore();
  }
  drawTitle() {}
}
RadialLinearScale.id = 'radialLinear';
RadialLinearScale.defaults = {
  display: true,
  animate: true,
  position: 'chartArea',
  angleLines: {
    display: true,
    lineWidth: 1,
    borderDash: [],
    borderDashOffset: 0.0
  },
  grid: {
    circular: false
  },
  startAngle: 0,
  ticks: {
    showLabelBackdrop: true,
    callback: Ticks.formatters.numeric
  },
  pointLabels: {
    backdropColor: undefined,
    backdropPadding: 2,
    display: true,
    font: {
      size: 10
    },
    callback(label) {
      return label;
    },
    padding: 5
  }
};
RadialLinearScale.defaultRoutes = {
  'angleLines.color': 'borderColor',
  'pointLabels.color': 'color',
  'ticks.color': 'color'
};
RadialLinearScale.descriptors = {
  angleLines: {
    _fallback: 'grid'
  }
};

const INTERVALS = {
  millisecond: {common: true, size: 1, steps: 1000},
  second: {common: true, size: 1000, steps: 60},
  minute: {common: true, size: 60000, steps: 60},
  hour: {common: true, size: 3600000, steps: 24},
  day: {common: true, size: 86400000, steps: 30},
  week: {common: false, size: 604800000, steps: 4},
  month: {common: true, size: 2.628e9, steps: 12},
  quarter: {common: false, size: 7.884e9, steps: 4},
  year: {common: true, size: 3.154e10}
};
const UNITS = (Object.keys(INTERVALS));
function sorter(a, b) {
  return a - b;
}
function parse(scale, input) {
  if (isNullOrUndef(input)) {
    return null;
  }
  const adapter = scale._adapter;
  const {parser, round, isoWeekday} = scale._parseOpts;
  let value = input;
  if (typeof parser === 'function') {
    value = parser(value);
  }
  if (!isNumberFinite(value)) {
    value = typeof parser === 'string'
      ? adapter.parse(value, parser)
      : adapter.parse(value);
  }
  if (value === null) {
    return null;
  }
  if (round) {
    value = round === 'week' && (isNumber(isoWeekday) || isoWeekday === true)
      ? adapter.startOf(value, 'isoWeek', isoWeekday)
      : adapter.startOf(value, round);
  }
  return +value;
}
function determineUnitForAutoTicks(minUnit, min, max, capacity) {
  const ilen = UNITS.length;
  for (let i = UNITS.indexOf(minUnit); i < ilen - 1; ++i) {
    const interval = INTERVALS[UNITS[i]];
    const factor = interval.steps ? interval.steps : Number.MAX_SAFE_INTEGER;
    if (interval.common && Math.ceil((max - min) / (factor * interval.size)) <= capacity) {
      return UNITS[i];
    }
  }
  return UNITS[ilen - 1];
}
function determineUnitForFormatting(scale, numTicks, minUnit, min, max) {
  for (let i = UNITS.length - 1; i >= UNITS.indexOf(minUnit); i--) {
    const unit = UNITS[i];
    if (INTERVALS[unit].common && scale._adapter.diff(max, min, unit) >= numTicks - 1) {
      return unit;
    }
  }
  return UNITS[minUnit ? UNITS.indexOf(minUnit) : 0];
}
function determineMajorUnit(unit) {
  for (let i = UNITS.indexOf(unit) + 1, ilen = UNITS.length; i < ilen; ++i) {
    if (INTERVALS[UNITS[i]].common) {
      return UNITS[i];
    }
  }
}
function addTick(ticks, time, timestamps) {
  if (!timestamps) {
    ticks[time] = true;
  } else if (timestamps.length) {
    const {lo, hi} = _lookup(timestamps, time);
    const timestamp = timestamps[lo] >= time ? timestamps[lo] : timestamps[hi];
    ticks[timestamp] = true;
  }
}
function setMajorTicks(scale, ticks, map, majorUnit) {
  const adapter = scale._adapter;
  const first = +adapter.startOf(ticks[0].value, majorUnit);
  const last = ticks[ticks.length - 1].value;
  let major, index;
  for (major = first; major <= last; major = +adapter.add(major, 1, majorUnit)) {
    index = map[major];
    if (index >= 0) {
      ticks[index].major = true;
    }
  }
  return ticks;
}
function ticksFromTimestamps(scale, values, majorUnit) {
  const ticks = [];
  const map = {};
  const ilen = values.length;
  let i, value;
  for (i = 0; i < ilen; ++i) {
    value = values[i];
    map[value] = i;
    ticks.push({
      value,
      major: false
    });
  }
  return (ilen === 0 || !majorUnit) ? ticks : setMajorTicks(scale, ticks, map, majorUnit);
}
class TimeScale extends Scale {
  constructor(props) {
    super(props);
    this._cache = {
      data: [],
      labels: [],
      all: []
    };
    this._unit = 'day';
    this._majorUnit = undefined;
    this._offsets = {};
    this._normalized = false;
    this._parseOpts = undefined;
  }
  init(scaleOpts, opts) {
    const time = scaleOpts.time || (scaleOpts.time = {});
    const adapter = this._adapter = new adapters._date(scaleOpts.adapters.date);
    mergeIf(time.displayFormats, adapter.formats());
    this._parseOpts = {
      parser: time.parser,
      round: time.round,
      isoWeekday: time.isoWeekday
    };
    super.init(scaleOpts);
    this._normalized = opts.normalized;
  }
  parse(raw, index) {
    if (raw === undefined) {
      return null;
    }
    return parse(this, raw);
  }
  beforeLayout() {
    super.beforeLayout();
    this._cache = {
      data: [],
      labels: [],
      all: []
    };
  }
  determineDataLimits() {
    const options = this.options;
    const adapter = this._adapter;
    const unit = options.time.unit || 'day';
    let {min, max, minDefined, maxDefined} = this.getUserBounds();
    function _applyBounds(bounds) {
      if (!minDefined && !isNaN(bounds.min)) {
        min = Math.min(min, bounds.min);
      }
      if (!maxDefined && !isNaN(bounds.max)) {
        max = Math.max(max, bounds.max);
      }
    }
    if (!minDefined || !maxDefined) {
      _applyBounds(this._getLabelBounds());
      if (options.bounds !== 'ticks' || options.ticks.source !== 'labels') {
        _applyBounds(this.getMinMax(false));
      }
    }
    min = isNumberFinite(min) && !isNaN(min) ? min : +adapter.startOf(Date.now(), unit);
    max = isNumberFinite(max) && !isNaN(max) ? max : +adapter.endOf(Date.now(), unit) + 1;
    this.min = Math.min(min, max - 1);
    this.max = Math.max(min + 1, max);
  }
  _getLabelBounds() {
    const arr = this.getLabelTimestamps();
    let min = Number.POSITIVE_INFINITY;
    let max = Number.NEGATIVE_INFINITY;
    if (arr.length) {
      min = arr[0];
      max = arr[arr.length - 1];
    }
    return {min, max};
  }
  buildTicks() {
    const options = this.options;
    const timeOpts = options.time;
    const tickOpts = options.ticks;
    const timestamps = tickOpts.source === 'labels' ? this.getLabelTimestamps() : this._generate();
    if (options.bounds === 'ticks' && timestamps.length) {
      this.min = this._userMin || timestamps[0];
      this.max = this._userMax || timestamps[timestamps.length - 1];
    }
    const min = this.min;
    const max = this.max;
    const ticks = _filterBetween(timestamps, min, max);
    this._unit = timeOpts.unit || (tickOpts.autoSkip
      ? determineUnitForAutoTicks(timeOpts.minUnit, this.min, this.max, this._getLabelCapacity(min))
      : determineUnitForFormatting(this, ticks.length, timeOpts.minUnit, this.min, this.max));
    this._majorUnit = !tickOpts.major.enabled || this._unit === 'year' ? undefined
      : determineMajorUnit(this._unit);
    this.initOffsets(timestamps);
    if (options.reverse) {
      ticks.reverse();
    }
    return ticksFromTimestamps(this, ticks, this._majorUnit);
  }
  initOffsets(timestamps) {
    let start = 0;
    let end = 0;
    let first, last;
    if (this.options.offset && timestamps.length) {
      first = this.getDecimalForValue(timestamps[0]);
      if (timestamps.length === 1) {
        start = 1 - first;
      } else {
        start = (this.getDecimalForValue(timestamps[1]) - first) / 2;
      }
      last = this.getDecimalForValue(timestamps[timestamps.length - 1]);
      if (timestamps.length === 1) {
        end = last;
      } else {
        end = (last - this.getDecimalForValue(timestamps[timestamps.length - 2])) / 2;
      }
    }
    const limit = timestamps.length < 3 ? 0.5 : 0.25;
    start = _limitValue(start, 0, limit);
    end = _limitValue(end, 0, limit);
    this._offsets = {start, end, factor: 1 / (start + 1 + end)};
  }
  _generate() {
    const adapter = this._adapter;
    const min = this.min;
    const max = this.max;
    const options = this.options;
    const timeOpts = options.time;
    const minor = timeOpts.unit || determineUnitForAutoTicks(timeOpts.minUnit, min, max, this._getLabelCapacity(min));
    const stepSize = valueOrDefault(timeOpts.stepSize, 1);
    const weekday = minor === 'week' ? timeOpts.isoWeekday : false;
    const hasWeekday = isNumber(weekday) || weekday === true;
    const ticks = {};
    let first = min;
    let time, count;
    if (hasWeekday) {
      first = +adapter.startOf(first, 'isoWeek', weekday);
    }
    first = +adapter.startOf(first, hasWeekday ? 'day' : minor);
    if (adapter.diff(max, min, minor) > 100000 * stepSize) {
      throw new Error(min + ' and ' + max + ' are too far apart with stepSize of ' + stepSize + ' ' + minor);
    }
    const timestamps = options.ticks.source === 'data' && this.getDataTimestamps();
    for (time = first, count = 0; time < max; time = +adapter.add(time, stepSize, minor), count++) {
      addTick(ticks, time, timestamps);
    }
    if (time === max || options.bounds === 'ticks' || count === 1) {
      addTick(ticks, time, timestamps);
    }
    return Object.keys(ticks).sort((a, b) => a - b).map(x => +x);
  }
  getLabelForValue(value) {
    const adapter = this._adapter;
    const timeOpts = this.options.time;
    if (timeOpts.tooltipFormat) {
      return adapter.format(value, timeOpts.tooltipFormat);
    }
    return adapter.format(value, timeOpts.displayFormats.datetime);
  }
  _tickFormatFunction(time, index, ticks, format) {
    const options = this.options;
    const formats = options.time.displayFormats;
    const unit = this._unit;
    const majorUnit = this._majorUnit;
    const minorFormat = unit && formats[unit];
    const majorFormat = majorUnit && formats[majorUnit];
    const tick = ticks[index];
    const major = majorUnit && majorFormat && tick && tick.major;
    const label = this._adapter.format(time, format || (major ? majorFormat : minorFormat));
    const formatter = options.ticks.callback;
    return formatter ? callback(formatter, [label, index, ticks], this) : label;
  }
  generateTickLabels(ticks) {
    let i, ilen, tick;
    for (i = 0, ilen = ticks.length; i < ilen; ++i) {
      tick = ticks[i];
      tick.label = this._tickFormatFunction(tick.value, i, ticks);
    }
  }
  getDecimalForValue(value) {
    return value === null ? NaN : (value - this.min) / (this.max - this.min);
  }
  getPixelForValue(value) {
    const offsets = this._offsets;
    const pos = this.getDecimalForValue(value);
    return this.getPixelForDecimal((offsets.start + pos) * offsets.factor);
  }
  getValueForPixel(pixel) {
    const offsets = this._offsets;
    const pos = this.getDecimalForPixel(pixel) / offsets.factor - offsets.end;
    return this.min + pos * (this.max - this.min);
  }
  _getLabelSize(label) {
    const ticksOpts = this.options.ticks;
    const tickLabelWidth = this.ctx.measureText(label).width;
    const angle = toRadians(this.isHorizontal() ? ticksOpts.maxRotation : ticksOpts.minRotation);
    const cosRotation = Math.cos(angle);
    const sinRotation = Math.sin(angle);
    const tickFontSize = this._resolveTickFontOptions(0).size;
    return {
      w: (tickLabelWidth * cosRotation) + (tickFontSize * sinRotation),
      h: (tickLabelWidth * sinRotation) + (tickFontSize * cosRotation)
    };
  }
  _getLabelCapacity(exampleTime) {
    const timeOpts = this.options.time;
    const displayFormats = timeOpts.displayFormats;
    const format = displayFormats[timeOpts.unit] || displayFormats.millisecond;
    const exampleLabel = this._tickFormatFunction(exampleTime, 0, ticksFromTimestamps(this, [exampleTime], this._majorUnit), format);
    const size = this._getLabelSize(exampleLabel);
    const capacity = Math.floor(this.isHorizontal() ? this.width / size.w : this.height / size.h) - 1;
    return capacity > 0 ? capacity : 1;
  }
  getDataTimestamps() {
    let timestamps = this._cache.data || [];
    let i, ilen;
    if (timestamps.length) {
      return timestamps;
    }
    const metas = this.getMatchingVisibleMetas();
    if (this._normalized && metas.length) {
      return (this._cache.data = metas[0].controller.getAllParsedValues(this));
    }
    for (i = 0, ilen = metas.length; i < ilen; ++i) {
      timestamps = timestamps.concat(metas[i].controller.getAllParsedValues(this));
    }
    return (this._cache.data = this.normalize(timestamps));
  }
  getLabelTimestamps() {
    const timestamps = this._cache.labels || [];
    let i, ilen;
    if (timestamps.length) {
      return timestamps;
    }
    const labels = this.getLabels();
    for (i = 0, ilen = labels.length; i < ilen; ++i) {
      timestamps.push(parse(this, labels[i]));
    }
    return (this._cache.labels = this._normalized ? timestamps : this.normalize(timestamps));
  }
  normalize(values) {
    return _arrayUnique(values.sort(sorter));
  }
}
TimeScale.id = 'time';
TimeScale.defaults = {
  bounds: 'data',
  adapters: {},
  time: {
    parser: false,
    unit: false,
    round: false,
    isoWeekday: false,
    minUnit: 'millisecond',
    displayFormats: {}
  },
  ticks: {
    source: 'auto',
    major: {
      enabled: false
    }
  }
};

function interpolate(table, val, reverse) {
  let lo = 0;
  let hi = table.length - 1;
  let prevSource, nextSource, prevTarget, nextTarget;
  if (reverse) {
    if (val >= table[lo].pos && val <= table[hi].pos) {
      ({lo, hi} = _lookupByKey(table, 'pos', val));
    }
    ({pos: prevSource, time: prevTarget} = table[lo]);
    ({pos: nextSource, time: nextTarget} = table[hi]);
  } else {
    if (val >= table[lo].time && val <= table[hi].time) {
      ({lo, hi} = _lookupByKey(table, 'time', val));
    }
    ({time: prevSource, pos: prevTarget} = table[lo]);
    ({time: nextSource, pos: nextTarget} = table[hi]);
  }
  const span = nextSource - prevSource;
  return span ? prevTarget + (nextTarget - prevTarget) * (val - prevSource) / span : prevTarget;
}
class TimeSeriesScale extends TimeScale {
  constructor(props) {
    super(props);
    this._table = [];
    this._minPos = undefined;
    this._tableRange = undefined;
  }
  initOffsets() {
    const timestamps = this._getTimestampsForTable();
    const table = this._table = this.buildLookupTable(timestamps);
    this._minPos = interpolate(table, this.min);
    this._tableRange = interpolate(table, this.max) - this._minPos;
    super.initOffsets(timestamps);
  }
  buildLookupTable(timestamps) {
    const {min, max} = this;
    const items = [];
    const table = [];
    let i, ilen, prev, curr, next;
    for (i = 0, ilen = timestamps.length; i < ilen; ++i) {
      curr = timestamps[i];
      if (curr >= min && curr <= max) {
        items.push(curr);
      }
    }
    if (items.length < 2) {
      return [
        {time: min, pos: 0},
        {time: max, pos: 1}
      ];
    }
    for (i = 0, ilen = items.length; i < ilen; ++i) {
      next = items[i + 1];
      prev = items[i - 1];
      curr = items[i];
      if (Math.round((next + prev) / 2) !== curr) {
        table.push({time: curr, pos: i / (ilen - 1)});
      }
    }
    return table;
  }
  _getTimestampsForTable() {
    let timestamps = this._cache.all || [];
    if (timestamps.length) {
      return timestamps;
    }
    const data = this.getDataTimestamps();
    const label = this.getLabelTimestamps();
    if (data.length && label.length) {
      timestamps = this.normalize(data.concat(label));
    } else {
      timestamps = data.length ? data : label;
    }
    timestamps = this._cache.all = timestamps;
    return timestamps;
  }
  getDecimalForValue(value) {
    return (interpolate(this._table, value) - this._minPos) / this._tableRange;
  }
  getValueForPixel(pixel) {
    const offsets = this._offsets;
    const decimal = this.getDecimalForPixel(pixel) / offsets.factor - offsets.end;
    return interpolate(this._table, decimal * this._tableRange + this._minPos, true);
  }
}
TimeSeriesScale.id = 'timeseries';
TimeSeriesScale.defaults = TimeScale.defaults;

var scales = /*#__PURE__*/Object.freeze({
__proto__: null,
CategoryScale: CategoryScale,
LinearScale: LinearScale,
LogarithmicScale: LogarithmicScale,
RadialLinearScale: RadialLinearScale,
TimeScale: TimeScale,
TimeSeriesScale: TimeSeriesScale
});

const registerables = [
  controllers,
  chart_esm_elements,
  plugins,
  scales,
];



;// CONCATENATED MODULE: ./node_modules/chart.js/auto/auto.esm.js


Chart.register(...registerables);

/* harmony default export */ const auto_esm = (Chart);

;// CONCATENATED MODULE: ./src/Stats.ts
const IDX_TIME = 0;
const IDX_AVERAGE_FONT_SIZE = 1;
// const sample: TodayStats = {
//   date: '2021-12-05',
//   times: {
//     '1638508380148': 3,
//     '1638508380248': 6,
//   },
//   scores: [5, 6, 7, 6, 5],
// };
// const sample2: AllStats = {
//   '2021-12-03': [10, 5.5],
//   '2021-12-04': [4, 5.4],
// };
// console.log(sample, sample2);

;// CONCATENATED MODULE: ./src/ChartHelper.ts




class ChartHelper {
    constructor($chartSession, $chartAll, allStats, todayStats) {
        this.chartSession = new auto_esm($chartSession, {
            type: 'line',
            data: {
                labels: [],
                datasets: [
                    {
                        label: 'Average Font Size',
                        backgroundColor: ChartHelper.RED,
                        borderColor: ChartHelper.RED,
                        data: [],
                    },
                ],
            },
            options: {
                aspectRatio: 1.5,
                plugins: {
                    title: {
                        display: true,
                        text: 'This session',
                    },
                },
            },
        });
        this.chartAll = new auto_esm($chartAll, {
            type: 'line',
            data: {
                labels: [],
                datasets: [
                    {
                        label: 'Average Font Size',
                        backgroundColor: ChartHelper.RED,
                        borderColor: ChartHelper.RED,
                        data: [],
                        yAxisID: 'y',
                    },
                    {
                        label: 'Playing Time',
                        backgroundColor: ChartHelper.BLUE,
                        borderColor: ChartHelper.BLUE,
                        data: [],
                        yAxisID: 'y1',
                        fill: true,
                    },
                ],
            },
            options: {
                aspectRatio: 1.5,
                plugins: {
                    title: {
                        display: true,
                        text: 'Recent days',
                    },
                },
                scales: {
                    y: {
                        position: 'left',
                        title: {
                            display: true,
                            text: 'mm',
                        },
                        min: TargetFactory.fontSizeMin,
                    },
                    y1: {
                        position: 'right',
                        title: {
                            display: true,
                            text: 'minutes',
                        },
                        min: 0,
                    },
                },
            },
        });
        this.updateTodayChart(todayStats, allStats);
    }
    updateAllChart(stats) {
        this.chartAll.data.labels = Object.keys(stats);
        const values = Object.values(stats);
        this.chartAll.data.datasets[0].data = values.map((v) => v[IDX_AVERAGE_FONT_SIZE]);
        this.chartAll.data.datasets[1].data = values.map((v) => v[IDX_TIME]);
        this.chartAll.update();
    }
    updateTodayChart(today, all) {
        this.chartSession.data.labels = Utils.range(today.scores.length);
        this.chartSession.data.datasets[0].data = today.scores;
        this.chartSession.update();
        this.updateAllChart(all);
    }
    addValueToTodayChart(val) {
        var _a;
        (_a = this.chartSession.data.labels) === null || _a === void 0 ? void 0 : _a.push('');
        this.chartSession.data.datasets[0].data.push(val);
        this.chartSession.update();
    }
}
ChartHelper.RED = 'rgb(255, 99, 132)';
ChartHelper.BLUE = 'rgb(99, 132, 255)';

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(795);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(569);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(565);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(216);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(589);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/styles.scss
var styles = __webpack_require__(137);
;// CONCATENATED MODULE: ./src/styles/styles.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(styles/* default */.Z, options);




       /* harmony default export */ const styles_styles = (styles/* default */.Z && styles/* default.locals */.Z.locals ? styles/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/index.ts





const src_Cookies = __webpack_require__(646);

class Index {
    constructor() {
        // Find elements
        this.$board = document.getElementById('board');
        this.$canvas = document.getElementById('canvas');
        this.$input = document.getElementById('input');
        this.$health = document.getElementById('health');
        this.$notification = (document.getElementById('notification'));
        this.$checkKorean = (document.getElementById('check-korean'));
        this.$buttonStats = (document.getElementById('button-stats'));
        this.$stats = document.getElementById('stats');
        // Construct
        this.opticTyping = new OpticTyping(this.$board, this.$canvas, this.$input, this.$health, this.$notification, this.$checkKorean, this.averageFontSize);
        this.statHelper = new StatHelper();
        this.chartHelper = new ChartHelper(document.getElementById('chart-session'), document.getElementById('chart-recent'), StatHelper.allStats, StatHelper.todayStats);
        // Register events
        this.opticTyping.onHit = (fontSize) => {
            this.statHelper.pushFontSize(fontSize);
            this.chartHelper.addValueToTodayChart(fontSize);
        };
        this.statHelper.onStatChanged = (todayStats, allStats) => {
            this.chartHelper.updateAllChart(allStats);
        };
        this.$buttonStats.addEventListener('click', () => {
            this.$stats.classList.toggle('hidden');
            this.$input.focus();
        });
        document.addEventListener('keydown', (ev) => {
            if (ev.key == 'Tab') {
                this.$stats.classList.toggle('hidden');
                this.$input.focus();
                ev.preventDefault();
            }
        });
    }
    init() {
        this.restoreSettings();
        this.opticTyping.init();
        this.$input.focus();
    }
    restoreSettings() {
        if (src_Cookies.get('korean') == '1') {
            this.$checkKorean.checked = true;
            this.opticTyping.korean = true;
        }
    }
    get averageFontSize() {
        const allStats = StatHelper.allStats;
        if (Object.keys(allStats).length === 0) {
            return 8;
        }
        const averages = Object.values(StatHelper.allStats).map((ar) => {
            return ar[IDX_AVERAGE_FONT_SIZE];
        });
        return Utils.average(averages);
    }
}
new Index().init();

})();

/******/ })()
;
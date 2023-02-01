"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["recap"],{

/***/ "./assets/js/recap.js":
/*!****************************!*\
  !*** ./assets/js/recap.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ajaxyear": () => (/* binding */ Ajaxyear)
/* harmony export */ });
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.url-search-params.js */ "./node_modules/core-js/modules/web.url-search-params.js");
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.url.js */ "./node_modules/core-js/modules/web.url.js");
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _sumHours__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./sumHours */ "./assets/js/sumHours.js");
/* harmony import */ var _sumEuros__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./sumEuros */ "./assets/js/sumEuros.js");
/* harmony import */ var _sumPay__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./sumPay */ "./assets/js/sumPay.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


















 // GRAB LES ELEMENTS DU DOM

var selectYear = document.getElementById('selectYear');
var totalParagraph = document.querySelector('.total-paragraphe');
var modal = document.querySelector('.modal-adherer');
var dureeP = document.querySelector('.total-heure');
var payerP = document.querySelector('.total-payer');
var donP = document.querySelector('.total-don');
var valoriseeP = document.querySelector('.total-valorisees');
var duree = document.querySelectorAll('.duree');
var payerTd = document.querySelectorAll('.payerTd');
var donTd = document.querySelectorAll('.donTd');
var valoriseesTd = document.querySelectorAll('.valoriseesTd');
var alertMessage = document.querySelector('.alert-message');
var reset = document.querySelector('.arrowTurn');
var main = document.querySelector('.content-container'); // SUPPRIMER SAISIE AVEC AJAX
// EVENT POUR OUVRIR LE MODAL 

var openModal = function openModal() {
  modal.dataset.active = true;
  main.style.opacity = '0.4';
};

var closeModal = function closeModal() {
  delete modal.dataset.active;
  main.style.opacity = '1';
};

var baseOption = document.createElement('option');
baseOption.text = 'Tous';
baseOption.value = 'rien'; // baseOption.className = 'select-dd';

selectYear.add(baseOption);
var currentYear = new Date().getFullYear();
var earliestYear = 1965;

while (currentYear >= earliestYear) {
  var dateOption = document.createElement('option');
  dateOption.text = currentYear;
  dateOption.value = currentYear; // dateOption.className = 'select-dd';

  selectYear.add(dateOption);
  currentYear -= 1;
} // CREATION SELECT MONTH


var selectMonth = document.getElementById('selectMonth');
var table = document.querySelector('.table');
var btnSubmit = document.querySelector(".btn-submit");
var months = [{
  value: '',
  text: 'Tous'
}, {
  value: '01',
  text: 'Janvier'
}, {
  value: '02',
  text: 'Février'
}, {
  value: '03',
  text: 'Mars'
}, {
  value: '04',
  text: 'Avril'
}, {
  value: '05',
  text: 'Mai'
}, {
  value: '06',
  text: 'Juin'
}, {
  value: '07',
  text: 'Juillet'
}, {
  value: '08',
  text: 'Août'
}, {
  value: '09',
  text: 'Septembre'
}, {
  value: '10',
  text: 'Octobre'
}, {
  value: '11',
  text: 'Novembre'
}, {
  value: '12',
  text: 'Décembre'
}];

for (var i = 0; i < months.length; i++) {
  var monthOption = document.createElement('option');
  monthOption.text = months[i].text;
  monthOption.value = months[i].value;
  monthOption.className = 'select-month';
  selectMonth.add(monthOption);
} // CREATION SELECT ASSOC 


var assocs = document.querySelectorAll('.data-assoc');
var selectAssoc = document.querySelector('.selectAssoc');
var addEl = document.createElement('option');
addEl.text = "Toutes";
addEl.value = "rien";
selectAssoc.add(addEl);
assocs.forEach(function (el) {
  var assocOptions = document.createElement('option');
  assocOptions.text = el.dataset.association;
  assocOptions.value = el.dataset.id;
  selectAssoc.add(assocOptions);
}); // DELETE SAISIE

var dataId = document.querySelectorAll('.actionDelete');
var trash = document.querySelectorAll('.modal-open-delete');
var btnNo = document.querySelector('.btn-no');
var btnYes = document.querySelector('.btn-yes');
btnSubmit.addEventListener('click', Ajaxyear);
var totalDuree;
var aPayerSumAjax;
var donSumAjax;
var valoriseesSumAjax; // APPEL AJAX POUR AFFICHER LES DONNEES

function Ajaxyear() {
  btnPdfAll.style.display = "none";
  var data = selectYear.options[selectYear.selectedIndex];
  var month = selectMonth.options[selectMonth.selectedIndex];
  var assoc = selectAssoc.options[selectAssoc.selectedIndex];
  var queryString = new URLSearchParams();
  queryString.append('year', data.value);
  queryString.append('month', month.value);
  queryString.append('association', assoc.value);
  var url = new URL(window.location.href);
  axios.post(url.pathname + "?" + queryString.toString() + "&ajax=1", {
    'year': data.value,
    'month': month.value,
    'association': assoc.value
  }).then(function (data) {
    // ON APPEND LES DONNEES SI ON LES RECOIS
    // SI ON LES RECOIS PAS ON APPEND UN MSG EN ROUGE A UNE DIV
    var trContainer = document.querySelector('.ajaxDivContent');
    var trContainerPdf = document.querySelector('.ajaxDivContentPdf');
    var dataUser = data.data.content;
    var dataUserPdf = data.data.contentPdf; // CAS OU ON RECOIS RIEN DU SERV

    if (dataUser == "") {
      // ON RETIRE LE CONTENU DE LA DIV SI ON L'A DEJA AJOUTEE
      [totalParagraph, dureeP, payerP, donP, valoriseeP].forEach(function (el) {
        el.textContent = "";
      });
      alertMessage.style.display = "block";
      alertMessage.innerHTML = '<p style="color:red; text-align: center;">aucune donnée trouvée pour cette recherche</p>';
      btnPdfAll.style.display = "none";
      btnPdf.style.display = "none"; // TIMEOUT POUR SUPPR LE MESSAGE D ERREUR

      setTimeout(function () {
        alertMessage.style.display = "none";
      }, 3000); // CAS OU ON RECOIS DES DONNEES
    } else {
      btnPdf.style.display = "block";
      var year = selectYear.options[selectYear.selectedIndex].value; // trContainer.innerHTML = dataUser;

      trContainer.innerHTML = dataUser;
      trContainerPdf.innerHTML = dataUserPdf; // CALCUL DU TOTAL DES HEURES VALORISEES

      var tr = document.querySelectorAll('.duree');
      var trData = Array.from(tr).map(function (el) {
        return el.dataset.duree;
      });
      totalDuree = (0,_sumHours__WEBPACK_IMPORTED_MODULE_16__.sumHours)(trData);
      dureeP.innerHTML = "B\xE9n\xE9volat : <span style=\"\n            color:#097969;\n            font-weight: bold;\n            \"> ".concat(totalDuree, "</span>"); // CALCUL DU TOTAL A PAYER

      var payerTdAjax = document.querySelectorAll('.payerTd');
      var trpayer = Array.from(payerTdAjax).map(function (el) {
        return el.dataset.payer;
      });
      aPayerSumAjax = (0,_sumPay__WEBPACK_IMPORTED_MODULE_18__.sumPay)(trpayer);
      payerP.innerHTML = "Remboursements : <span style=\"\n            color:#097969;\n            font-weight: bold;\n            \"> ".concat(aPayerSumAjax, "\u20AC</span>"); // CALCUL DES DONS 

      var donTdAjax = document.querySelectorAll('.donTd');
      var trdon = Array.from(donTdAjax).map(function (el) {
        return el.dataset.don;
      });
      donSumAjax = (0,_sumEuros__WEBPACK_IMPORTED_MODULE_17__.sumEuros)(trdon);
      donP.innerHTML = "Dons :<span style=\"\n            color:#097969;\n            font-weight: bold;\n            \"> ".concat(donSumAjax, "\u20AC</span>"); // CALCUL DES VALORISATION

      var valoriseesTdAjax = document.querySelectorAll('.valoriseesTd');
      var trvalorisees = Array.from(valoriseesTdAjax).map(function (el) {
        return el.dataset.valorisees;
      });
      valoriseesSumAjax = (0,_sumEuros__WEBPACK_IMPORTED_MODULE_17__.sumEuros)(trvalorisees);
      valoriseeP.innerHTML = "Valoris\xE9es : <span style=\"\n            color:#097969;\n            font-weight: bold;\n            \">".concat(valoriseesSumAjax, "\u20AC</span> ");

      if (month.value == '' && typeof year !== 'undefined') {
        totalParagraph.innerHTML = "Total pour l'ann\xE9e <span style=\"\n            color:#152149;\n            font-weight: bold;\n            \">".concat(year, "</span>:");
      }

      if (month.value == "" && year == 'rien') {
        console.log('passe par la');
        totalParagraph.innerHTML = "Total de toutes vos saisies :";
      }

      if (year != 'rien' && month.value != '') {
        // console.log(data.val);
        totalParagraph.innerHTML = "Total pour le <span style=\"\n            color:#152149;\n            font-weight: bold;\n            \">".concat(month.value, "/").concat(year, "</span>:");
      }

      if (year == 'rien' && month.value != '') {
        totalParagraph.innerHTML = "Total pour tout les mois de <span style=\"\n            color:#152149;\n            font-weight: bold;\n            \">".concat(month.text, "</span>:");
      }
    }
  })["catch"](function (err) {
    console.log(err);
  });
} // CALCUL AVEC LA FONCTION QU'ON IMPORTE LIGNE 1 ET APPEND POUR LA DUREE 

var data = Array.from(duree).map(function (el) {
  return el.dataset.duree;
}); // console.log(data);
// console.log(data);

var dureeAjax = (0,_sumHours__WEBPACK_IMPORTED_MODULE_16__.sumHours)(data);
dureeP.innerHTML = "B\xE9n\xE9volat : <span style=\"\n            color:#097969;\n            font-weight: bold;\n            \">".concat(dureeAjax, "</span>"); // CALCUL AVEC LA FONCTION QU'ON IMPORTE LIGNE 3 ET APPEND POUR LE REMBOURSEMENT

var dataPayer = Array.from(payerTd).map(function (el) {
  return el.dataset.payer;
});
var aPayerSum = (0,_sumPay__WEBPACK_IMPORTED_MODULE_18__.sumPay)(dataPayer);
payerP.innerHTML = "Remboursement : <span style=\"\n            color:#097969;\n            font-weight: bold;\n            \">".concat(aPayerSum, "\u20AC</span>"); // CALCUL AVEC LA FONCTION QU'ON IMPORTE LIGNE 2 ET APPEND POUR LE DON

var dataDon = Array.from(donTd).map(function (el) {
  return el.dataset.don;
});
var donSum = (0,_sumEuros__WEBPACK_IMPORTED_MODULE_17__.sumEuros)(dataDon);
donP.innerHTML = "Dons :<span style=\"\n            color:#097969;\n            font-weight: bold;\n            \"> ".concat(donSum, "\u20AC</span>"); // CALCUL AVEC LA FONCTION QU'ON IMPORTE LIGNE 2 ET APPEND POUR LA VALORISATION

var dataValorisees = Array.from(valoriseesTd).map(function (el) {
  return el.dataset.valorisees;
});
var valoriseesSum = (0,_sumEuros__WEBPACK_IMPORTED_MODULE_17__.sumEuros)(dataValorisees);
valoriseeP.innerHTML = "Valoris\xE9es : <span style=\"\n            color:#097969;\n            font-weight: bold;\n            \">".concat(valoriseesSum, "\u20AC</span>"); // ENVOIE DONNEES VERS PDF !! 

var pdfAction = document.querySelectorAll('.pdfIcone');
var baseHref = document.URL;
pdfAction.forEach(function (el) {
  el.addEventListener('click', function (event) {
    event.preventDefault();
    var actionId = el.dataset.id;
    var endPoint = "".concat(baseHref, "/pdf/").concat(actionId);
    console.log(dureeAjax);
    axios.post(endPoint).then(function (response) {
      console.log(response);
      window.location.href = endPoint;
    })["catch"](function (error) {
      console.log(error);
    });
  });
}); // CA CA MARCHE 

var wrapper = document.querySelector('.wrapper-pdf');
var pdfBenevolat = document.querySelector('.pdf-benevolat');
var pdfDon = document.querySelector('.pdf-don');
var pdfRemboursement = document.querySelector('.pdf-remboursement');
var pdfValorisee = document.querySelector('.pdf-valorisee');

function generatePdf() {
  return _generatePdf.apply(this, arguments);
}

function _generatePdf() {
  _generatePdf = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var options;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            wrapper.style.display = "flex";
            pdfBenevolat.innerHTML = "B\xE9n\xE9volat : <span style=\"\n            color:#097969;\n            font-weight: bold;\n            \"> ".concat(totalDuree, "</span>");
            pdfDon.innerHTML = "Dons :<span style=\"\n            color:#097969;\n            font-weight: bold;\n            \"> ".concat(donSumAjax, "\u20AC</span>");
            pdfRemboursement.innerHTML = "Remboursements : <span style=\"color:#097969;\n            font-weight: bold;\n            \"> ".concat(aPayerSumAjax, "\u20AC</span>");
            pdfValorisee.innerHTML = "Valoris\xE9es : <span style=\"\n            color:#097969;\n            font-weight: bold;\n            \">".concat(valoriseesSumAjax, "\u20AC</span> "); // GENERATION DU PDF AVEC TOUTES LES INFOS

            options = {
              filename: 'Saved_pdf.pdf',
              margin: 1,
              image: {
                type: 'jpeg'
              },
              html2canvas: {
                scale: 10
              },
              jsPDF: {
                orientation: 'landscape'
              }
            };
            html2pdf().from(wrapper).set(options).save();

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _generatePdf.apply(this, arguments);
}

function generatePdfAll() {
  return _generatePdfAll.apply(this, arguments);
} // APPELLE DEMANDE PDF ON CLICK


function _generatePdfAll() {
  _generatePdfAll = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var optionsAll;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            wrapper.style.display = "flex";
            pdfBenevolat.innerHTML = "B\xE9n\xE9volat : <span style=\"\n            color:#097969;\n            font-weight: bold;\n            \"> ".concat(dureeAjax, "</span>");
            pdfDon.innerHTML = "Dons :<span style=\"\n            color:#097969;\n            font-weight: bold;\n            \"> ".concat(donSum, "\u20AC</span>");
            pdfRemboursement.innerHTML = "Remboursements : <span style=\"color:#097969;\n            font-weight: bold;\n            \"> ".concat(aPayerSum, "\u20AC</span>");
            pdfValorisee.innerHTML = "Valoris\xE9es : <span style=\"\n            color:#097969;\n            font-weight: bold;\n            \">".concat(valoriseesSum, "\u20AC</span> "); // GENERATION DU PDF AVEC TOUTES LES INFOS

            optionsAll = {
              filename: 'Saved_pdf.pdf',
              margin: 1,
              image: {
                type: 'jpeg'
              },
              html2canvas: {
                scale: 10
              },
              jsPDF: {
                orientation: 'landscape'
              }
            };
            html2pdf().from(wrapper).set(optionsAll).save();

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _generatePdfAll.apply(this, arguments);
}

var btnPdf = document.querySelector('.btn-pdf');
var btnPdfAll = document.querySelector('.btn-pdf-all');
btnPdf.addEventListener('click', function () {
  generatePdf().then(function () {
    wrapper.style.display = "none";
  })["catch"](function (err) {
    console.log(err);
  });
});
btnPdfAll.addEventListener('click', function () {
  generatePdfAll().then(function () {
    wrapper.style.display = "none";
  })["catch"](function (err) {
    console.log(err);
  });
});
table.addEventListener('click', function (event) {
  if (event.target.matches(".pdf_icone")) {
    var idPdf = event.target.dataset.id;
    window.location.href = "/recapitulatif/pdf/".concat(idPdf);
  }
}); // INITIE LA VARIABLE AVANT FONCTION IMPORTANT

var idAction;
table.addEventListener('click', function (e) {
  if (e.target.matches('.trash-png')) {
    idAction = e.target.dataset.id;
    openModal();
  }
});
btnYes.addEventListener('click', function (event) {
  event.preventDefault();
  var baseHref = document.URL;
  var endPoint = "".concat(baseHref, "/remove/").concat(idAction); // APPELLE AJAX SUR L'ENDPOINT 

  axios.post(endPoint).then(function (res) {
    console.log(res);
    var domToRemove = document.querySelector(".tr-".concat(idAction));
    domToRemove.remove();
    closeModal();
    Toastify({
      text: "Saisie bien supprimé",
      duration: 5000,
      newWindow: true,
      close: true,
      gravity: "top",
      // `top` or `bottom`
      position: "right",
      // `left`, `center` or `right`
      stopOnFocus: true,
      // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)"
      },
      onClick: function onClick() {}
    }).showToast();
    Ajaxyear();
  })["catch"](function (err) {
    console.log(err);
  });
});
btnNo.addEventListener('click', function () {
  closeModal();
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_export_js-node_modules_core-js_internals_is-constructor_js","vendors-node_modules_core-js_internals_advance-string-index_js-node_modules_core-js_internals-a3cf5d","vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-ffb95b","vendors-node_modules_core-js_modules_es_parse-int_js-node_modules_core-js_modules_es_string_s-03957f","vendors-node_modules_core-js_modules_web_dom-collections_iterator_js-node_modules_core-js_mod-8b7c91","vendors-node_modules_core-js_modules_es_promise_js-node_modules_regenerator-runtime_runtime_js","assets_js_sumEuros_js-assets_js_sumHours_js-assets_js_sumPay_js-node_modules_core-js_modules_-0b9320"], () => (__webpack_exec__("./assets/js/recap.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjYXAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQU1BOztBQUNBLElBQU1HLFVBQVUsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFlBQXhCLENBQW5CO0FBQ0EsSUFBTUMsY0FBYyxHQUFHRixRQUFRLENBQUNHLGFBQVQsQ0FBdUIsbUJBQXZCLENBQXZCO0FBQ0EsSUFBTUMsS0FBSyxHQUFHSixRQUFRLENBQUNHLGFBQVQsQ0FBdUIsZ0JBQXZCLENBQWQ7QUFDQSxJQUFNRSxNQUFNLEdBQUdMLFFBQVEsQ0FBQ0csYUFBVCxDQUF1QixjQUF2QixDQUFmO0FBQ0EsSUFBTUcsTUFBTSxHQUFHTixRQUFRLENBQUNHLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBZjtBQUNBLElBQU1JLElBQUksR0FBR1AsUUFBUSxDQUFDRyxhQUFULENBQXVCLFlBQXZCLENBQWI7QUFDQSxJQUFNSyxVQUFVLEdBQUdSLFFBQVEsQ0FBQ0csYUFBVCxDQUF1QixtQkFBdkIsQ0FBbkI7QUFDQSxJQUFNTSxLQUFLLEdBQUdULFFBQVEsQ0FBQ1UsZ0JBQVQsQ0FBMEIsUUFBMUIsQ0FBZDtBQUNBLElBQU1DLE9BQU8sR0FBR1gsUUFBUSxDQUFDVSxnQkFBVCxDQUEwQixVQUExQixDQUFoQjtBQUNBLElBQU1FLEtBQUssR0FBR1osUUFBUSxDQUFDVSxnQkFBVCxDQUEwQixRQUExQixDQUFkO0FBQ0EsSUFBTUcsWUFBWSxHQUFHYixRQUFRLENBQUNVLGdCQUFULENBQTBCLGVBQTFCLENBQXJCO0FBQ0EsSUFBTUksWUFBWSxHQUFHZCxRQUFRLENBQUNHLGFBQVQsQ0FBdUIsZ0JBQXZCLENBQXJCO0FBQ0EsSUFBTVksS0FBSyxHQUFHZixRQUFRLENBQUNHLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBZDtBQUNBLElBQU1hLElBQUksR0FBR2hCLFFBQVEsQ0FBQ0csYUFBVCxDQUF1QixvQkFBdkIsQ0FBYixFQUlBO0FBQ0k7O0FBQ0osSUFBTWMsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUNwQmIsRUFBQUEsS0FBSyxDQUFDYyxPQUFOLENBQWNDLE1BQWQsR0FBdUIsSUFBdkI7QUFDQUgsRUFBQUEsSUFBSSxDQUFDSSxLQUFMLENBQVdDLE9BQVgsR0FBcUIsS0FBckI7QUFDSCxDQUhEOztBQU1BLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDckIsU0FBT2xCLEtBQUssQ0FBQ2MsT0FBTixDQUFjQyxNQUFyQjtBQUNBSCxFQUFBQSxJQUFJLENBQUNJLEtBQUwsQ0FBV0MsT0FBWCxHQUFxQixHQUFyQjtBQUNILENBSEQ7O0FBTUEsSUFBSUUsVUFBVSxHQUFHdkIsUUFBUSxDQUFDd0IsYUFBVCxDQUF1QixRQUF2QixDQUFqQjtBQUNBRCxVQUFVLENBQUNFLElBQVgsR0FBa0IsTUFBbEI7QUFDQUYsVUFBVSxDQUFDRyxLQUFYLEdBQW1CLE1BQW5CLEVBQ0E7O0FBQ0EzQixVQUFVLENBQUM0QixHQUFYLENBQWVKLFVBQWY7QUFFQSxJQUFJSyxXQUFXLEdBQUcsSUFBSUMsSUFBSixHQUFXQyxXQUFYLEVBQWxCO0FBQ0EsSUFBSUMsWUFBWSxHQUFHLElBQW5COztBQUNBLE9BQU9ILFdBQVcsSUFBSUcsWUFBdEIsRUFBb0M7QUFDaEMsTUFBSUMsVUFBVSxHQUFHaEMsUUFBUSxDQUFDd0IsYUFBVCxDQUF1QixRQUF2QixDQUFqQjtBQUNBUSxFQUFBQSxVQUFVLENBQUNQLElBQVgsR0FBa0JHLFdBQWxCO0FBQ0FJLEVBQUFBLFVBQVUsQ0FBQ04sS0FBWCxHQUFtQkUsV0FBbkIsQ0FIZ0MsQ0FJaEM7O0FBQ0E3QixFQUFBQSxVQUFVLENBQUM0QixHQUFYLENBQWVLLFVBQWY7QUFDQUosRUFBQUEsV0FBVyxJQUFJLENBQWY7QUFDSCxFQUlEOzs7QUFDQSxJQUFNSyxXQUFXLEdBQUdqQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsYUFBeEIsQ0FBcEI7QUFDQSxJQUFNaUMsS0FBSyxHQUFHbEMsUUFBUSxDQUFDRyxhQUFULENBQXVCLFFBQXZCLENBQWQ7QUFDQSxJQUFNZ0MsU0FBUyxHQUFHbkMsUUFBUSxDQUFDRyxhQUFULENBQXVCLGFBQXZCLENBQWxCO0FBRUEsSUFBTWlDLE1BQU0sR0FBRyxDQUNYO0FBQUNWLEVBQUFBLEtBQUssRUFBRSxFQUFSO0FBQVlELEVBQUFBLElBQUksRUFBRTtBQUFsQixDQURXLEVBRVg7QUFBQ0MsRUFBQUEsS0FBSyxFQUFFLElBQVI7QUFBY0QsRUFBQUEsSUFBSSxFQUFFO0FBQXBCLENBRlcsRUFHWDtBQUFDQyxFQUFBQSxLQUFLLEVBQUUsSUFBUjtBQUFjRCxFQUFBQSxJQUFJLEVBQUU7QUFBcEIsQ0FIVyxFQUlYO0FBQUNDLEVBQUFBLEtBQUssRUFBRSxJQUFSO0FBQWNELEVBQUFBLElBQUksRUFBRTtBQUFwQixDQUpXLEVBS1g7QUFBQ0MsRUFBQUEsS0FBSyxFQUFFLElBQVI7QUFBY0QsRUFBQUEsSUFBSSxFQUFFO0FBQXBCLENBTFcsRUFNWDtBQUFDQyxFQUFBQSxLQUFLLEVBQUUsSUFBUjtBQUFjRCxFQUFBQSxJQUFJLEVBQUU7QUFBcEIsQ0FOVyxFQU9YO0FBQUNDLEVBQUFBLEtBQUssRUFBRSxJQUFSO0FBQWNELEVBQUFBLElBQUksRUFBRTtBQUFwQixDQVBXLEVBUVg7QUFBQ0MsRUFBQUEsS0FBSyxFQUFFLElBQVI7QUFBY0QsRUFBQUEsSUFBSSxFQUFFO0FBQXBCLENBUlcsRUFTWDtBQUFDQyxFQUFBQSxLQUFLLEVBQUUsSUFBUjtBQUFjRCxFQUFBQSxJQUFJLEVBQUU7QUFBcEIsQ0FUVyxFQVVYO0FBQUNDLEVBQUFBLEtBQUssRUFBRSxJQUFSO0FBQWNELEVBQUFBLElBQUksRUFBRTtBQUFwQixDQVZXLEVBV1g7QUFBQ0MsRUFBQUEsS0FBSyxFQUFFLElBQVI7QUFBY0QsRUFBQUEsSUFBSSxFQUFFO0FBQXBCLENBWFcsRUFZWDtBQUFDQyxFQUFBQSxLQUFLLEVBQUUsSUFBUjtBQUFjRCxFQUFBQSxJQUFJLEVBQUU7QUFBcEIsQ0FaVyxFQWFYO0FBQUNDLEVBQUFBLEtBQUssRUFBRSxJQUFSO0FBQWNELEVBQUFBLElBQUksRUFBRTtBQUFwQixDQWJXLENBQWY7O0FBZ0JBLEtBQUksSUFBSVksQ0FBQyxHQUFDLENBQVYsRUFBYUEsQ0FBQyxHQUFDRCxNQUFNLENBQUNFLE1BQXRCLEVBQThCRCxDQUFDLEVBQS9CLEVBQWtDO0FBQzlCLE1BQU1FLFdBQVcsR0FBR3ZDLFFBQVEsQ0FBQ3dCLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBcEI7QUFDQWUsRUFBQUEsV0FBVyxDQUFDZCxJQUFaLEdBQW1CVyxNQUFNLENBQUNDLENBQUQsQ0FBTixDQUFVWixJQUE3QjtBQUNBYyxFQUFBQSxXQUFXLENBQUNiLEtBQVosR0FBb0JVLE1BQU0sQ0FBQ0MsQ0FBRCxDQUFOLENBQVVYLEtBQTlCO0FBQ0FhLEVBQUFBLFdBQVcsQ0FBQ0MsU0FBWixHQUF3QixjQUF4QjtBQUNBUCxFQUFBQSxXQUFXLENBQUNOLEdBQVosQ0FBZ0JZLFdBQWhCO0FBQ0gsRUFHRDs7O0FBQ0EsSUFBTUUsTUFBTSxHQUFHekMsUUFBUSxDQUFDVSxnQkFBVCxDQUEwQixhQUExQixDQUFmO0FBQ0EsSUFBTWdDLFdBQVcsR0FBRzFDLFFBQVEsQ0FBQ0csYUFBVCxDQUF1QixjQUF2QixDQUFwQjtBQUVBLElBQU13QyxLQUFLLEdBQUczQyxRQUFRLENBQUN3QixhQUFULENBQXVCLFFBQXZCLENBQWQ7QUFDQW1CLEtBQUssQ0FBQ2xCLElBQU4sR0FBYSxRQUFiO0FBQ0FrQixLQUFLLENBQUNqQixLQUFOLEdBQWMsTUFBZDtBQUNBZ0IsV0FBVyxDQUFDZixHQUFaLENBQWdCZ0IsS0FBaEI7QUFFQUYsTUFBTSxDQUFDRyxPQUFQLENBQWUsVUFBQUMsRUFBRSxFQUFJO0FBQ2pCLE1BQU1DLFlBQVksR0FBRzlDLFFBQVEsQ0FBQ3dCLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBckI7QUFDQXNCLEVBQUFBLFlBQVksQ0FBQ3JCLElBQWIsR0FBb0JvQixFQUFFLENBQUMzQixPQUFILENBQVc2QixXQUEvQjtBQUNBRCxFQUFBQSxZQUFZLENBQUNwQixLQUFiLEdBQXFCbUIsRUFBRSxDQUFDM0IsT0FBSCxDQUFXOEIsRUFBaEM7QUFDQU4sRUFBQUEsV0FBVyxDQUFDZixHQUFaLENBQWdCbUIsWUFBaEI7QUFDSCxDQUxELEdBT0E7O0FBQ0EsSUFBSUcsTUFBTSxHQUFHakQsUUFBUSxDQUFDVSxnQkFBVCxDQUEwQixlQUExQixDQUFiO0FBQ0EsSUFBSXdDLEtBQUssR0FBR2xELFFBQVEsQ0FBQ1UsZ0JBQVQsQ0FBMEIsb0JBQTFCLENBQVo7QUFDQSxJQUFNeUMsS0FBSyxHQUFHbkQsUUFBUSxDQUFDRyxhQUFULENBQXVCLFNBQXZCLENBQWQ7QUFDQSxJQUFNaUQsTUFBTSxHQUFHcEQsUUFBUSxDQUFDRyxhQUFULENBQXVCLFVBQXZCLENBQWY7QUFHQWdDLFNBQVMsQ0FBQ2tCLGdCQUFWLENBQTJCLE9BQTNCLEVBQW9DQyxRQUFwQztBQUNBLElBQUlDLFVBQUo7QUFDQSxJQUFJQyxhQUFKO0FBQ0EsSUFBSUMsVUFBSjtBQUNBLElBQUlDLGlCQUFKLEVBR0E7O0FBQ08sU0FBU0osUUFBVCxHQUFtQjtBQUN0QkssRUFBQUEsU0FBUyxDQUFDdkMsS0FBVixDQUFnQndDLE9BQWhCLEdBQTBCLE1BQTFCO0FBQ0EsTUFBSUMsSUFBSSxHQUFHOUQsVUFBVSxDQUFDK0QsT0FBWCxDQUFtQi9ELFVBQVUsQ0FBQ2dFLGFBQTlCLENBQVg7QUFDQSxNQUFJQyxLQUFLLEdBQUcvQixXQUFXLENBQUM2QixPQUFaLENBQW9CN0IsV0FBVyxDQUFDOEIsYUFBaEMsQ0FBWjtBQUNBLE1BQUlFLEtBQUssR0FBR3ZCLFdBQVcsQ0FBQ29CLE9BQVosQ0FBb0JwQixXQUFXLENBQUNxQixhQUFoQyxDQUFaO0FBQ0EsTUFBSUcsV0FBVyxHQUFHLElBQUlDLGVBQUosRUFBbEI7QUFDQUQsRUFBQUEsV0FBVyxDQUFDRSxNQUFaLENBQW1CLE1BQW5CLEVBQTJCUCxJQUFJLENBQUNuQyxLQUFoQztBQUNBd0MsRUFBQUEsV0FBVyxDQUFDRSxNQUFaLENBQW1CLE9BQW5CLEVBQTRCSixLQUFLLENBQUN0QyxLQUFsQztBQUNBd0MsRUFBQUEsV0FBVyxDQUFDRSxNQUFaLENBQW1CLGFBQW5CLEVBQWtDSCxLQUFLLENBQUN2QyxLQUF4QztBQUNBLE1BQUkyQyxHQUFHLEdBQUcsSUFBSUMsR0FBSixDQUFRQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLElBQXhCLENBQVY7QUFFQUMsRUFBQUEsS0FBSyxDQUFDQyxJQUFOLENBQVdOLEdBQUcsQ0FBQ08sUUFBSixHQUFlLEdBQWYsR0FBcUJWLFdBQVcsQ0FBQ1csUUFBWixFQUFyQixHQUE4QyxTQUF6RCxFQUFvRTtBQUNoRSxZQUFRaEIsSUFBSSxDQUFDbkMsS0FEbUQ7QUFFaEUsYUFBU3NDLEtBQUssQ0FBQ3RDLEtBRmlEO0FBR2hFLG1CQUFldUMsS0FBSyxDQUFDdkM7QUFIMkMsR0FBcEUsRUFLQ29ELElBTEQsQ0FLTSxVQUFBakIsSUFBSSxFQUFJO0FBQ1Y7QUFDQTtBQUNBLFFBQU1rQixXQUFXLEdBQUcvRSxRQUFRLENBQUNHLGFBQVQsQ0FBdUIsaUJBQXZCLENBQXBCO0FBQ0EsUUFBTTZFLGNBQWMsR0FBR2hGLFFBQVEsQ0FBQ0csYUFBVCxDQUF1QixvQkFBdkIsQ0FBdkI7QUFFQSxRQUFJOEUsUUFBUSxHQUFHcEIsSUFBSSxDQUFDQSxJQUFMLENBQVVxQixPQUF6QjtBQUNBLFFBQUlDLFdBQVcsR0FBR3RCLElBQUksQ0FBQ0EsSUFBTCxDQUFVdUIsVUFBNUIsQ0FQVSxDQVFWOztBQUVBLFFBQUlILFFBQVEsSUFBSSxFQUFoQixFQUFvQjtBQUNoQjtBQUNBLE9BQUMvRSxjQUFELEVBQWlCRyxNQUFqQixFQUF5QkMsTUFBekIsRUFBaUNDLElBQWpDLEVBQXVDQyxVQUF2QyxFQUFtRG9DLE9BQW5ELENBQTJELFVBQUFDLEVBQUUsRUFBSTtBQUM3REEsUUFBQUEsRUFBRSxDQUFDd0MsV0FBSCxHQUFpQixFQUFqQjtBQUNILE9BRkQ7QUFJQXZFLE1BQUFBLFlBQVksQ0FBQ00sS0FBYixDQUFtQndDLE9BQW5CLEdBQTZCLE9BQTdCO0FBQ0E5QyxNQUFBQSxZQUFZLENBQUN3RSxTQUFiLEdBQXlCLDBGQUF6QjtBQUNBM0IsTUFBQUEsU0FBUyxDQUFDdkMsS0FBVixDQUFnQndDLE9BQWhCLEdBQTBCLE1BQTFCO0FBQ0EyQixNQUFBQSxNQUFNLENBQUNuRSxLQUFQLENBQWF3QyxPQUFiLEdBQXVCLE1BQXZCLENBVGdCLENBWWhCOztBQUNBNEIsTUFBQUEsVUFBVSxDQUFDLFlBQUk7QUFDWDFFLFFBQUFBLFlBQVksQ0FBQ00sS0FBYixDQUFtQndDLE9BQW5CLEdBQTZCLE1BQTdCO0FBQ0gsT0FGUyxFQUVQLElBRk8sQ0FBVixDQWJnQixDQWlCcEI7QUFDQyxLQWxCRCxNQWtCTztBQUNIMkIsTUFBQUEsTUFBTSxDQUFDbkUsS0FBUCxDQUFhd0MsT0FBYixHQUF1QixPQUF2QjtBQUVBLFVBQUk2QixJQUFJLEdBQUcxRixVQUFVLENBQUMrRCxPQUFYLENBQW1CL0QsVUFBVSxDQUFDZ0UsYUFBOUIsRUFBNkNyQyxLQUF4RCxDQUhHLENBS0g7O0FBQ0FxRCxNQUFBQSxXQUFXLENBQUNPLFNBQVosR0FBd0JMLFFBQXhCO0FBQ0FELE1BQUFBLGNBQWMsQ0FBQ00sU0FBZixHQUEyQkgsV0FBM0IsQ0FQRyxDQVFIOztBQUNBLFVBQU1PLEVBQUUsR0FBRzFGLFFBQVEsQ0FBQ1UsZ0JBQVQsQ0FBMEIsUUFBMUIsQ0FBWDtBQUNBLFVBQU1pRixNQUFNLEdBQUdDLEtBQUssQ0FBQ0MsSUFBTixDQUFXSCxFQUFYLEVBQWVJLEdBQWYsQ0FBbUIsVUFBQWpELEVBQUU7QUFBQSxlQUFJQSxFQUFFLENBQUMzQixPQUFILENBQVdULEtBQWY7QUFBQSxPQUFyQixDQUFmO0FBQ0E4QyxNQUFBQSxVQUFVLEdBQUczRCxvREFBUSxDQUFDK0YsTUFBRCxDQUFyQjtBQUNBdEYsTUFBQUEsTUFBTSxDQUFDaUYsU0FBUCwySEFHSy9CLFVBSEwsYUFaRyxDQWlCSDs7QUFDQSxVQUFNd0MsV0FBVyxHQUFHL0YsUUFBUSxDQUFDVSxnQkFBVCxDQUEwQixVQUExQixDQUFwQjtBQUNBLFVBQU1zRixPQUFPLEdBQUdKLEtBQUssQ0FBQ0MsSUFBTixDQUFXRSxXQUFYLEVBQXdCRCxHQUF4QixDQUE0QixVQUFBakQsRUFBRTtBQUFBLGVBQUlBLEVBQUUsQ0FBQzNCLE9BQUgsQ0FBVytFLEtBQWY7QUFBQSxPQUE5QixDQUFoQjtBQUNBekMsTUFBQUEsYUFBYSxHQUFHMUQsZ0RBQU0sQ0FBQ2tHLE9BQUQsQ0FBdEI7QUFDQTFGLE1BQUFBLE1BQU0sQ0FBQ2dGLFNBQVAsMEhBR0s5QixhQUhMLG1CQXJCRyxDQTBCSDs7QUFDQSxVQUFNMEMsU0FBUyxHQUFHbEcsUUFBUSxDQUFDVSxnQkFBVCxDQUEwQixRQUExQixDQUFsQjtBQUNBLFVBQU15RixLQUFLLEdBQUdQLEtBQUssQ0FBQ0MsSUFBTixDQUFXSyxTQUFYLEVBQXNCSixHQUF0QixDQUEwQixVQUFBakQsRUFBRTtBQUFBLGVBQUlBLEVBQUUsQ0FBQzNCLE9BQUgsQ0FBV2tGLEdBQWY7QUFBQSxPQUE1QixDQUFkO0FBQ0EzQyxNQUFBQSxVQUFVLEdBQUc1RCxvREFBUSxDQUFDc0csS0FBRCxDQUFyQjtBQUNBNUYsTUFBQUEsSUFBSSxDQUFDK0UsU0FBTCwrR0FHSzdCLFVBSEwsbUJBOUJHLENBb0NIOztBQUNBLFVBQU00QyxnQkFBZ0IsR0FBR3JHLFFBQVEsQ0FBQ1UsZ0JBQVQsQ0FBMEIsZUFBMUIsQ0FBekI7QUFDQSxVQUFNNEYsWUFBWSxHQUFHVixLQUFLLENBQUNDLElBQU4sQ0FBV1EsZ0JBQVgsRUFBNkJQLEdBQTdCLENBQWlDLFVBQUFqRCxFQUFFO0FBQUEsZUFBSUEsRUFBRSxDQUFDM0IsT0FBSCxDQUFXcUYsVUFBZjtBQUFBLE9BQW5DLENBQXJCO0FBQ0E3QyxNQUFBQSxpQkFBaUIsR0FBRzdELG9EQUFRLENBQUN5RyxZQUFELENBQTVCO0FBQ0E5RixNQUFBQSxVQUFVLENBQUM4RSxTQUFYLHdIQUdJNUIsaUJBSEo7O0FBTUEsVUFBR00sS0FBSyxDQUFDdEMsS0FBTixJQUFlLEVBQWYsSUFBcUIsT0FBTytELElBQVAsS0FBZ0IsV0FBeEMsRUFBb0Q7QUFDcER2RixRQUFBQSxjQUFjLENBQUNvRixTQUFmLDhIQUdJRyxJQUhKO0FBSUM7O0FBQ0QsVUFBR3pCLEtBQUssQ0FBQ3RDLEtBQU4sSUFBZSxFQUFmLElBQXFCK0QsSUFBSSxJQUFJLE1BQWhDLEVBQXVDO0FBQ25DZSxRQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaO0FBQ0F2RyxRQUFBQSxjQUFjLENBQUNvRixTQUFmLEdBQTJCLCtCQUEzQjtBQUNIOztBQUVELFVBQUdHLElBQUksSUFBSSxNQUFSLElBQWtCekIsS0FBSyxDQUFDdEMsS0FBTixJQUFlLEVBQXBDLEVBQXVDO0FBQ25DO0FBQ0F4QixRQUFBQSxjQUFjLENBQUNvRixTQUFmLHNIQUdBdEIsS0FBSyxDQUFDdEMsS0FITixjQUdlK0QsSUFIZjtBQUlIOztBQUVELFVBQUdBLElBQUksSUFBSSxNQUFSLElBQWtCekIsS0FBSyxDQUFDdEMsS0FBTixJQUFlLEVBQXBDLEVBQXVDO0FBQ25DeEIsUUFBQUEsY0FBYyxDQUFDb0YsU0FBZixvSUFHQXRCLEtBQUssQ0FBQ3ZDLElBSE47QUFJSDtBQUNKO0FBQ0osR0F6R0QsV0EwR08sVUFBQWlGLEdBQUcsRUFBSTtBQUNWRixJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsR0FBWjtBQUNILEdBNUdEO0FBNkdILEVBRUQ7O0FBQ0EsSUFBTTdDLElBQUksR0FBRytCLEtBQUssQ0FBQ0MsSUFBTixDQUFXcEYsS0FBWCxFQUFrQnFGLEdBQWxCLENBQXNCLFVBQUFqRCxFQUFFO0FBQUEsU0FBSUEsRUFBRSxDQUFDM0IsT0FBSCxDQUFXVCxLQUFmO0FBQUEsQ0FBeEIsQ0FBYixFQUNBO0FBQ0E7O0FBQ0EsSUFBSWtHLFNBQVMsR0FBRy9HLG9EQUFRLENBQUNpRSxJQUFELENBQXhCO0FBQ0F4RCxNQUFNLENBQUNpRixTQUFQLDBIQUdnQnFCLFNBSGhCLGNBS0E7O0FBQ0EsSUFBTUMsU0FBUyxHQUFHaEIsS0FBSyxDQUFDQyxJQUFOLENBQVdsRixPQUFYLEVBQW9CbUYsR0FBcEIsQ0FBd0IsVUFBQWpELEVBQUU7QUFBQSxTQUFJQSxFQUFFLENBQUMzQixPQUFILENBQVcrRSxLQUFmO0FBQUEsQ0FBMUIsQ0FBbEI7QUFDQSxJQUFJWSxTQUFTLEdBQUcvRyxnREFBTSxDQUFDOEcsU0FBRCxDQUF0QjtBQUNBdEcsTUFBTSxDQUFDZ0YsU0FBUCx3SEFHZ0J1QixTQUhoQixvQkFLQTs7QUFDQSxJQUFNQyxPQUFPLEdBQUdsQixLQUFLLENBQUNDLElBQU4sQ0FBV2pGLEtBQVgsRUFBa0JrRixHQUFsQixDQUFzQixVQUFBakQsRUFBRTtBQUFBLFNBQUlBLEVBQUUsQ0FBQzNCLE9BQUgsQ0FBV2tGLEdBQWY7QUFBQSxDQUF4QixDQUFoQjtBQUNBLElBQUlXLE1BQU0sR0FBR2xILG9EQUFRLENBQUNpSCxPQUFELENBQXJCO0FBQ0F2RyxJQUFJLENBQUMrRSxTQUFMLCtHQUdpQnlCLE1BSGpCLG9CQUtBOztBQUNBLElBQU1DLGNBQWMsR0FBR3BCLEtBQUssQ0FBQ0MsSUFBTixDQUFXaEYsWUFBWCxFQUF5QmlGLEdBQXpCLENBQTZCLFVBQUFqRCxFQUFFO0FBQUEsU0FBSUEsRUFBRSxDQUFDM0IsT0FBSCxDQUFXcUYsVUFBZjtBQUFBLENBQS9CLENBQXZCO0FBQ0EsSUFBSVUsYUFBYSxHQUFHcEgsb0RBQVEsQ0FBQ21ILGNBQUQsQ0FBNUI7QUFDQXhHLFVBQVUsQ0FBQzhFLFNBQVgsd0hBR2dCMkIsYUFIaEIsb0JBTUE7O0FBQ0EsSUFBTUMsU0FBUyxHQUFHbEgsUUFBUSxDQUFDVSxnQkFBVCxDQUEwQixXQUExQixDQUFsQjtBQUNBLElBQU15RyxRQUFRLEdBQUduSCxRQUFRLENBQUNzRSxHQUExQjtBQUdBNEMsU0FBUyxDQUFDdEUsT0FBVixDQUFrQixVQUFBQyxFQUFFLEVBQUk7QUFDcEJBLEVBQUFBLEVBQUUsQ0FBQ1EsZ0JBQUgsQ0FBb0IsT0FBcEIsRUFBNkIsVUFBQytELEtBQUQsRUFBVztBQUNwQ0EsSUFBQUEsS0FBSyxDQUFDQyxjQUFOO0FBQ0EsUUFBTUMsUUFBUSxHQUFHekUsRUFBRSxDQUFDM0IsT0FBSCxDQUFXOEIsRUFBNUI7QUFDQSxRQUFNdUUsUUFBUSxhQUFNSixRQUFOLGtCQUFzQkcsUUFBdEIsQ0FBZDtBQUNBZCxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUUsU0FBWjtBQUNBakMsSUFBQUEsS0FBSyxDQUFDQyxJQUFOLENBQVc0QyxRQUFYLEVBQ0N6QyxJQURELENBQ00sVUFBQzBDLFFBQUQsRUFBYztBQUNoQmhCLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZZSxRQUFaO0FBQ0FqRCxNQUFBQSxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLElBQWhCLEdBQXVCOEMsUUFBdkI7QUFDSCxLQUpELFdBS08sVUFBQ0UsS0FBRCxFQUFXO0FBQ2xCakIsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlnQixLQUFaO0FBQ0MsS0FQRDtBQVFILEdBYkQ7QUFjSCxDQWZELEdBbUJBOztBQUNBLElBQU1DLE9BQU8sR0FBRzFILFFBQVEsQ0FBQ0csYUFBVCxDQUF1QixjQUF2QixDQUFoQjtBQUNBLElBQU13SCxZQUFZLEdBQUczSCxRQUFRLENBQUNHLGFBQVQsQ0FBdUIsZ0JBQXZCLENBQXJCO0FBQ0EsSUFBTXlILE1BQU0sR0FBRzVILFFBQVEsQ0FBQ0csYUFBVCxDQUF1QixVQUF2QixDQUFmO0FBQ0EsSUFBTTBILGdCQUFnQixHQUFHN0gsUUFBUSxDQUFDRyxhQUFULENBQXVCLG9CQUF2QixDQUF6QjtBQUNBLElBQU0ySCxZQUFZLEdBQUc5SCxRQUFRLENBQUNHLGFBQVQsQ0FBdUIsZ0JBQXZCLENBQXJCOztTQUVlNEg7Ozs7O3lFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVJTCxZQUFBQSxPQUFPLENBQUN0RyxLQUFSLENBQWN3QyxPQUFkLEdBQXdCLE1BQXhCO0FBQ0ErRCxZQUFBQSxZQUFZLENBQUNyQyxTQUFiLDJIQUdhL0IsVUFIYjtBQUlBcUUsWUFBQUEsTUFBTSxDQUFDdEMsU0FBUCwrR0FHYTdCLFVBSGI7QUFJQW9FLFlBQUFBLGdCQUFnQixDQUFDdkMsU0FBakIsNEdBRWE5QixhQUZiO0FBR0FzRSxZQUFBQSxZQUFZLENBQUN4QyxTQUFiLHdIQUdZNUIsaUJBSFosb0JBZEosQ0FtQkk7O0FBQ0lJLFlBQUFBLE9BcEJSLEdBb0JrQjtBQUNWa0UsY0FBQUEsUUFBUSxFQUFFLGVBREE7QUFFVkMsY0FBQUEsTUFBTSxFQUFFLENBRkU7QUFHVkMsY0FBQUEsS0FBSyxFQUFFO0FBQ0hDLGdCQUFBQSxJQUFJLEVBQUU7QUFESCxlQUhHO0FBTVZDLGNBQUFBLFdBQVcsRUFBRTtBQUNUQyxnQkFBQUEsS0FBSyxFQUFFO0FBREUsZUFOSDtBQVNWQyxjQUFBQSxLQUFLLEVBQUU7QUFDSEMsZ0JBQUFBLFdBQVcsRUFBRTtBQURWO0FBVEcsYUFwQmxCO0FBa0NJQyxZQUFBQSxRQUFRLEdBQ1AzQyxJQURELENBQ002QixPQUROLEVBRUNlLEdBRkQsQ0FFSzNFLE9BRkwsRUFHQzRFLElBSEQ7O0FBbENKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7O1NBeUNlQzs7RUF3Q2Y7Ozs7NEVBeENBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVJakIsWUFBQUEsT0FBTyxDQUFDdEcsS0FBUixDQUFjd0MsT0FBZCxHQUF3QixNQUF4QjtBQUNBK0QsWUFBQUEsWUFBWSxDQUFDckMsU0FBYiwySEFHYXFCLFNBSGI7QUFJQWlCLFlBQUFBLE1BQU0sQ0FBQ3RDLFNBQVAsK0dBR2F5QixNQUhiO0FBSUFjLFlBQUFBLGdCQUFnQixDQUFDdkMsU0FBakIsNEdBRWF1QixTQUZiO0FBR0FpQixZQUFBQSxZQUFZLENBQUN4QyxTQUFiLHdIQUdZMkIsYUFIWixvQkFkSixDQW1CSTs7QUFDSTJCLFlBQUFBLFVBcEJSLEdBb0JxQjtBQUNiWixjQUFBQSxRQUFRLEVBQUUsZUFERztBQUViQyxjQUFBQSxNQUFNLEVBQUUsQ0FGSztBQUdiQyxjQUFBQSxLQUFLLEVBQUU7QUFDSEMsZ0JBQUFBLElBQUksRUFBRTtBQURILGVBSE07QUFNYkMsY0FBQUEsV0FBVyxFQUFFO0FBQ1RDLGdCQUFBQSxLQUFLLEVBQUU7QUFERSxlQU5BO0FBU2JDLGNBQUFBLEtBQUssRUFBRTtBQUNIQyxnQkFBQUEsV0FBVyxFQUFFO0FBRFY7QUFUTSxhQXBCckI7QUFrQ0lDLFlBQUFBLFFBQVEsR0FDUDNDLElBREQsQ0FDTTZCLE9BRE4sRUFFQ2UsR0FGRCxDQUVLRyxVQUZMLEVBR0NGLElBSEQ7O0FBbENKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7O0FBeUNBLElBQU1uRCxNQUFNLEdBQUd2RixRQUFRLENBQUNHLGFBQVQsQ0FBdUIsVUFBdkIsQ0FBZjtBQUNBLElBQU13RCxTQUFTLEdBQUczRCxRQUFRLENBQUNHLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBbEI7QUFHQW9GLE1BQU0sQ0FBQ2xDLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDLFlBQU07QUFDbkMwRSxFQUFBQSxXQUFXLEdBQ1ZqRCxJQURELENBQ00sWUFBTTtBQUNSNEMsSUFBQUEsT0FBTyxDQUFDdEcsS0FBUixDQUFjd0MsT0FBZCxHQUF3QixNQUF4QjtBQUNILEdBSEQsV0FJTyxVQUFDOEMsR0FBRCxFQUFTO0FBQ1pGLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxHQUFaO0FBQ0gsR0FORDtBQU9ILENBUkQ7QUFVQS9DLFNBQVMsQ0FBQ04sZ0JBQVYsQ0FBMkIsT0FBM0IsRUFBb0MsWUFBTTtBQUN0Q3NGLEVBQUFBLGNBQWMsR0FDYjdELElBREQsQ0FDTSxZQUFNO0FBQ1I0QyxJQUFBQSxPQUFPLENBQUN0RyxLQUFSLENBQWN3QyxPQUFkLEdBQXdCLE1BQXhCO0FBQ0gsR0FIRCxXQUlPLFVBQUM4QyxHQUFELEVBQVM7QUFDWkYsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlDLEdBQVo7QUFDSCxHQU5EO0FBT0gsQ0FSRDtBQVdBeEUsS0FBSyxDQUFDbUIsZ0JBQU4sQ0FBdUIsT0FBdkIsRUFBZ0MsVUFBQytELEtBQUQsRUFBVztBQUN2QyxNQUFHQSxLQUFLLENBQUN5QixNQUFOLENBQWFDLE9BQWIsQ0FBcUIsWUFBckIsQ0FBSCxFQUFzQztBQUNsQyxRQUFJQyxLQUFLLEdBQUczQixLQUFLLENBQUN5QixNQUFOLENBQWEzSCxPQUFiLENBQXFCOEIsRUFBakM7QUFDQXVCLElBQUFBLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsSUFBaEIsZ0NBQTZDc0UsS0FBN0M7QUFDSDtBQUNKLENBTEQsR0FTQTs7QUFDQSxJQUFJQyxRQUFKO0FBRUE5RyxLQUFLLENBQUNtQixnQkFBTixDQUF1QixPQUF2QixFQUFnQyxVQUFDNEYsQ0FBRCxFQUFPO0FBQ25DLE1BQUdBLENBQUMsQ0FBQ0osTUFBRixDQUFTQyxPQUFULENBQWlCLFlBQWpCLENBQUgsRUFBa0M7QUFDOUJFLElBQUFBLFFBQVEsR0FBR0MsQ0FBQyxDQUFDSixNQUFGLENBQVMzSCxPQUFULENBQWlCOEIsRUFBNUI7QUFDQS9CLElBQUFBLFNBQVM7QUFDWjtBQUNKLENBTEQ7QUFRQW1DLE1BQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsVUFBQytELEtBQUQsRUFBVztBQUN4Q0EsRUFBQUEsS0FBSyxDQUFDQyxjQUFOO0FBQ0EsTUFBTUYsUUFBUSxHQUFHbkgsUUFBUSxDQUFDc0UsR0FBMUI7QUFDQSxNQUFNaUQsUUFBUSxhQUFNSixRQUFOLHFCQUF5QjZCLFFBQXpCLENBQWQsQ0FId0MsQ0FLeEM7O0FBQ0F0RSxFQUFBQSxLQUFLLENBQUNDLElBQU4sQ0FBVzRDLFFBQVgsRUFBcUJ6QyxJQUFyQixDQUEwQixVQUFDb0UsR0FBRCxFQUFTO0FBQy9CMUMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVl5QyxHQUFaO0FBQ0EsUUFBTUMsV0FBVyxHQUFHbkosUUFBUSxDQUFDRyxhQUFULGVBQThCNkksUUFBOUIsRUFBcEI7QUFDQUcsSUFBQUEsV0FBVyxDQUFDQyxNQUFaO0FBQ0E5SCxJQUFBQSxVQUFVO0FBQ1YrSCxJQUFBQSxRQUFRLENBQUM7QUFDRDVILE1BQUFBLElBQUksRUFBRSxzQkFETDtBQUVENkgsTUFBQUEsUUFBUSxFQUFFLElBRlQ7QUFHREMsTUFBQUEsU0FBUyxFQUFFLElBSFY7QUFJREMsTUFBQUEsS0FBSyxFQUFFLElBSk47QUFLREMsTUFBQUEsT0FBTyxFQUFFLEtBTFI7QUFLZTtBQUNoQkMsTUFBQUEsUUFBUSxFQUFFLE9BTlQ7QUFNa0I7QUFDbkJDLE1BQUFBLFdBQVcsRUFBRSxJQVBaO0FBT2tCO0FBQ25CdkksTUFBQUEsS0FBSyxFQUFFO0FBQ0h3SSxRQUFBQSxVQUFVLEVBQUU7QUFEVCxPQVJOO0FBV0RDLE1BQUFBLE9BQU8sRUFBRSxtQkFBVSxDQUFFO0FBWHBCLEtBQUQsQ0FBUixDQVlPQyxTQVpQO0FBYUl4RyxJQUFBQSxRQUFRO0FBQ2YsR0FuQkQsV0FvQk8sVUFBQ29ELEdBQUQsRUFBUztBQUNaRixJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsR0FBWjtBQUNILEdBdEJEO0FBdUJILENBN0JEO0FBK0JBdkQsS0FBSyxDQUFDRSxnQkFBTixDQUF1QixPQUF2QixFQUFnQyxZQUFNO0FBQ2pDL0IsRUFBQUEsVUFBVTtBQUNkLENBRkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVjYXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc3VtSG91cnMgfSBmcm9tIFwiLi9zdW1Ib3Vyc1wiO1xuaW1wb3J0IHsgc3VtRXVyb3MgfSBmcm9tIFwiLi9zdW1FdXJvc1wiO1xuaW1wb3J0IHsgc3VtUGF5IH0gZnJvbSBcIi4vc3VtUGF5XCI7XG5cblxuXG5cbi8vIEdSQUIgTEVTIEVMRU1FTlRTIERVIERPTVxuY29uc3Qgc2VsZWN0WWVhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWxlY3RZZWFyJyk7XG5jb25zdCB0b3RhbFBhcmFncmFwaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3RhbC1wYXJhZ3JhcGhlJyk7XG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1hZGhlcmVyJyk7XG5jb25zdCBkdXJlZVAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG90YWwtaGV1cmUnKTtcbmNvbnN0IHBheWVyUCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3RhbC1wYXllcicpO1xuY29uc3QgZG9uUCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3RhbC1kb24nKTtcbmNvbnN0IHZhbG9yaXNlZVAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG90YWwtdmFsb3Jpc2VlcycpO1xuY29uc3QgZHVyZWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZHVyZWUnKTtcbmNvbnN0IHBheWVyVGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGF5ZXJUZCcpO1xuY29uc3QgZG9uVGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZG9uVGQnKTtcbmNvbnN0IHZhbG9yaXNlZXNUZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy52YWxvcmlzZWVzVGQnKTtcbmNvbnN0IGFsZXJ0TWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGVydC1tZXNzYWdlJyk7XG5jb25zdCByZXNldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcnJvd1R1cm4nKTtcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC1jb250YWluZXInKTtcblxuXG5cbi8vIFNVUFBSSU1FUiBTQUlTSUUgQVZFQyBBSkFYXG4gICAgLy8gRVZFTlQgUE9VUiBPVVZSSVIgTEUgTU9EQUwgXG5jb25zdCBvcGVuTW9kYWwgPSAoKSA9PiB7XG4gICAgbW9kYWwuZGF0YXNldC5hY3RpdmUgPSB0cnVlO1xuICAgIG1haW4uc3R5bGUub3BhY2l0eSA9ICcwLjQnO1xufVxuXG5cbmNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiB7XG4gICAgZGVsZXRlIG1vZGFsLmRhdGFzZXQuYWN0aXZlO1xuICAgIG1haW4uc3R5bGUub3BhY2l0eSA9ICcxJztcbn1cblxuXG5sZXQgYmFzZU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuYmFzZU9wdGlvbi50ZXh0ID0gJ1RvdXMnO1xuYmFzZU9wdGlvbi52YWx1ZSA9ICdyaWVuJztcbi8vIGJhc2VPcHRpb24uY2xhc3NOYW1lID0gJ3NlbGVjdC1kZCc7XG5zZWxlY3RZZWFyLmFkZChiYXNlT3B0aW9uKTtcblxubGV0IGN1cnJlbnRZZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpOyAgICBcbmxldCBlYXJsaWVzdFllYXIgPSAxOTY1OyAgICAgXG53aGlsZSAoY3VycmVudFllYXIgPj0gZWFybGllc3RZZWFyKSB7ICAgICAgXG4gICAgbGV0IGRhdGVPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTsgICAgICAgICAgXG4gICAgZGF0ZU9wdGlvbi50ZXh0ID0gY3VycmVudFllYXI7ICAgICAgXG4gICAgZGF0ZU9wdGlvbi52YWx1ZSA9IGN1cnJlbnRZZWFyO1xuICAgIC8vIGRhdGVPcHRpb24uY2xhc3NOYW1lID0gJ3NlbGVjdC1kZCc7XG4gICAgc2VsZWN0WWVhci5hZGQoZGF0ZU9wdGlvbik7ICAgICAgXG4gICAgY3VycmVudFllYXIgLT0gMTsgICAgXG59XG5cblxuXG4vLyBDUkVBVElPTiBTRUxFQ1QgTU9OVEhcbmNvbnN0IHNlbGVjdE1vbnRoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlbGVjdE1vbnRoJyk7XG5jb25zdCB0YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YWJsZScpO1xuY29uc3QgYnRuU3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG4tc3VibWl0XCIpXG5cbmNvbnN0IG1vbnRocyA9IFtcbiAgICB7dmFsdWU6ICcnLCB0ZXh0OiAnVG91cyd9LFxuICAgIHt2YWx1ZTogJzAxJywgdGV4dDogJ0phbnZpZXInfSxcbiAgICB7dmFsdWU6ICcwMicsIHRleHQ6ICdGw6l2cmllcid9LFxuICAgIHt2YWx1ZTogJzAzJywgdGV4dDogJ01hcnMnfSxcbiAgICB7dmFsdWU6ICcwNCcsIHRleHQ6ICdBdnJpbCd9LFxuICAgIHt2YWx1ZTogJzA1JywgdGV4dDogJ01haSd9LFxuICAgIHt2YWx1ZTogJzA2JywgdGV4dDogJ0p1aW4nfSxcbiAgICB7dmFsdWU6ICcwNycsIHRleHQ6ICdKdWlsbGV0J30sXG4gICAge3ZhbHVlOiAnMDgnLCB0ZXh0OiAnQW/Du3QnfSxcbiAgICB7dmFsdWU6ICcwOScsIHRleHQ6ICdTZXB0ZW1icmUnfSxcbiAgICB7dmFsdWU6ICcxMCcsIHRleHQ6ICdPY3RvYnJlJ30sXG4gICAge3ZhbHVlOiAnMTEnLCB0ZXh0OiAnTm92ZW1icmUnfSxcbiAgICB7dmFsdWU6ICcxMicsIHRleHQ6ICdEw6ljZW1icmUnfVxuXTtcblxuZm9yKGxldCBpPTA7IGk8bW9udGhzLmxlbmd0aDsgaSsrKXtcbiAgICBjb25zdCBtb250aE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG1vbnRoT3B0aW9uLnRleHQgPSBtb250aHNbaV0udGV4dDtcbiAgICBtb250aE9wdGlvbi52YWx1ZSA9IG1vbnRoc1tpXS52YWx1ZTtcbiAgICBtb250aE9wdGlvbi5jbGFzc05hbWUgPSAnc2VsZWN0LW1vbnRoJztcbiAgICBzZWxlY3RNb250aC5hZGQobW9udGhPcHRpb24pO1xufVxuXG5cbi8vIENSRUFUSU9OIFNFTEVDVCBBU1NPQyBcbmNvbnN0IGFzc29jcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYXRhLWFzc29jJyk7XG5jb25zdCBzZWxlY3RBc3NvYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RBc3NvYycpO1xuXG5jb25zdCBhZGRFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuYWRkRWwudGV4dCA9IFwiVG91dGVzXCI7XG5hZGRFbC52YWx1ZSA9IFwicmllblwiO1xuc2VsZWN0QXNzb2MuYWRkKGFkZEVsKTtcblxuYXNzb2NzLmZvckVhY2goZWwgPT4ge1xuICAgIGNvbnN0IGFzc29jT3B0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgYXNzb2NPcHRpb25zLnRleHQgPSBlbC5kYXRhc2V0LmFzc29jaWF0aW9uXG4gICAgYXNzb2NPcHRpb25zLnZhbHVlID0gZWwuZGF0YXNldC5pZFxuICAgIHNlbGVjdEFzc29jLmFkZChhc3NvY09wdGlvbnMpO1xufSlcblxuLy8gREVMRVRFIFNBSVNJRVxubGV0IGRhdGFJZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY3Rpb25EZWxldGUnKTtcbmxldCB0cmFzaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbC1vcGVuLWRlbGV0ZScpO1xuY29uc3QgYnRuTm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLW5vJyk7XG5jb25zdCBidG5ZZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLXllcycpO1xuXG5cbmJ0blN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIEFqYXh5ZWFyKTtcbmxldCB0b3RhbER1cmVlXG5sZXQgYVBheWVyU3VtQWpheFxubGV0IGRvblN1bUFqYXhcbmxldCB2YWxvcmlzZWVzU3VtQWpheFxuXG5cbi8vIEFQUEVMIEFKQVggUE9VUiBBRkZJQ0hFUiBMRVMgRE9OTkVFU1xuZXhwb3J0IGZ1bmN0aW9uIEFqYXh5ZWFyKCl7XG4gICAgYnRuUGRmQWxsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgIGxldCBkYXRhID0gc2VsZWN0WWVhci5vcHRpb25zW3NlbGVjdFllYXIuc2VsZWN0ZWRJbmRleF07XG4gICAgbGV0IG1vbnRoID0gc2VsZWN0TW9udGgub3B0aW9uc1tzZWxlY3RNb250aC5zZWxlY3RlZEluZGV4XTtcbiAgICBsZXQgYXNzb2MgPSBzZWxlY3RBc3NvYy5vcHRpb25zW3NlbGVjdEFzc29jLnNlbGVjdGVkSW5kZXhdO1xuICAgIGxldCBxdWVyeVN0cmluZyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcbiAgICBxdWVyeVN0cmluZy5hcHBlbmQoJ3llYXInLCBkYXRhLnZhbHVlKTtcbiAgICBxdWVyeVN0cmluZy5hcHBlbmQoJ21vbnRoJywgbW9udGgudmFsdWUpO1xuICAgIHF1ZXJ5U3RyaW5nLmFwcGVuZCgnYXNzb2NpYXRpb24nLCBhc3NvYy52YWx1ZSk7XG4gICAgbGV0IHVybCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuXG4gICAgYXhpb3MucG9zdCh1cmwucGF0aG5hbWUgKyBcIj9cIiArIHF1ZXJ5U3RyaW5nLnRvU3RyaW5nKCkgKyBcIiZhamF4PTFcIiwge1xuICAgICAgICAneWVhcic6IGRhdGEudmFsdWUsXG4gICAgICAgICdtb250aCc6IG1vbnRoLnZhbHVlLFxuICAgICAgICAnYXNzb2NpYXRpb24nOiBhc3NvYy52YWx1ZVxuICAgIH0pXG4gICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIC8vIE9OIEFQUEVORCBMRVMgRE9OTkVFUyBTSSBPTiBMRVMgUkVDT0lTXG4gICAgICAgIC8vIFNJIE9OIExFUyBSRUNPSVMgUEFTIE9OIEFQUEVORCBVTiBNU0cgRU4gUk9VR0UgQSBVTkUgRElWXG4gICAgICAgIGNvbnN0IHRyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFqYXhEaXZDb250ZW50Jyk7XG4gICAgICAgIGNvbnN0IHRyQ29udGFpbmVyUGRmID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFqYXhEaXZDb250ZW50UGRmJyk7XG5cbiAgICAgICAgbGV0IGRhdGFVc2VyID0gZGF0YS5kYXRhLmNvbnRlbnQ7XG4gICAgICAgIGxldCBkYXRhVXNlclBkZiA9IGRhdGEuZGF0YS5jb250ZW50UGRmXG4gICAgICAgIC8vIENBUyBPVSBPTiBSRUNPSVMgUklFTiBEVSBTRVJWXG5cbiAgICAgICAgaWYgKGRhdGFVc2VyID09IFwiXCIpIHtcbiAgICAgICAgICAgIC8vIE9OIFJFVElSRSBMRSBDT05URU5VIERFIExBIERJViBTSSBPTiBMJ0EgREVKQSBBSk9VVEVFXG4gICAgICAgICAgICBbdG90YWxQYXJhZ3JhcGgsIGR1cmVlUCwgcGF5ZXJQLCBkb25QLCB2YWxvcmlzZWVQXS5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgICAgICAgICBlbC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgYWxlcnRNZXNzYWdlLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgICBhbGVydE1lc3NhZ2UuaW5uZXJIVE1MID0gJzxwIHN0eWxlPVwiY29sb3I6cmVkOyB0ZXh0LWFsaWduOiBjZW50ZXI7XCI+YXVjdW5lIGRvbm7DqWUgdHJvdXbDqWUgcG91ciBjZXR0ZSByZWNoZXJjaGU8L3A+JzsgICAgXG4gICAgICAgICAgICBidG5QZGZBbGwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgYnRuUGRmLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBUSU1FT1VUIFBPVVIgU1VQUFIgTEUgTUVTU0FHRSBEIEVSUkVVUlxuICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICAgIGFsZXJ0TWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICB9LCAzMDAwKTtcblxuICAgICAgICAvLyBDQVMgT1UgT04gUkVDT0lTIERFUyBET05ORUVTXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBidG5QZGYuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxuXG4gICAgICAgICAgICBsZXQgeWVhciA9IHNlbGVjdFllYXIub3B0aW9uc1tzZWxlY3RZZWFyLnNlbGVjdGVkSW5kZXhdLnZhbHVlO1xuXG4gICAgICAgICAgICAvLyB0ckNvbnRhaW5lci5pbm5lckhUTUwgPSBkYXRhVXNlcjtcbiAgICAgICAgICAgIHRyQ29udGFpbmVyLmlubmVySFRNTCA9IGRhdGFVc2VyXG4gICAgICAgICAgICB0ckNvbnRhaW5lclBkZi5pbm5lckhUTUwgPSBkYXRhVXNlclBkZlxuICAgICAgICAgICAgLy8gQ0FMQ1VMIERVIFRPVEFMIERFUyBIRVVSRVMgVkFMT1JJU0VFU1xuICAgICAgICAgICAgY29uc3QgdHIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZHVyZWUnKTtcbiAgICAgICAgICAgIGNvbnN0IHRyRGF0YSA9IEFycmF5LmZyb20odHIpLm1hcChlbCA9PiBlbC5kYXRhc2V0LmR1cmVlKVxuICAgICAgICAgICAgdG90YWxEdXJlZSA9IHN1bUhvdXJzKHRyRGF0YSk7XG4gICAgICAgICAgICBkdXJlZVAuaW5uZXJIVE1MID0gYELDqW7DqXZvbGF0IDogPHNwYW4gc3R5bGU9XCJcbiAgICAgICAgICAgIGNvbG9yOiMwOTc5Njk7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIFwiPiAke3RvdGFsRHVyZWV9PC9zcGFuPmA7XG5cbiAgICAgICAgICAgIC8vIENBTENVTCBEVSBUT1RBTCBBIFBBWUVSXG4gICAgICAgICAgICBjb25zdCBwYXllclRkQWpheCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYXllclRkJyk7XG4gICAgICAgICAgICBjb25zdCB0cnBheWVyID0gQXJyYXkuZnJvbShwYXllclRkQWpheCkubWFwKGVsID0+IGVsLmRhdGFzZXQucGF5ZXIpO1xuICAgICAgICAgICAgYVBheWVyU3VtQWpheCA9IHN1bVBheSh0cnBheWVyKTtcbiAgICAgICAgICAgIHBheWVyUC5pbm5lckhUTUwgPSBgUmVtYm91cnNlbWVudHMgOiA8c3BhbiBzdHlsZT1cIlxuICAgICAgICAgICAgY29sb3I6IzA5Nzk2OTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgXCI+ICR7YVBheWVyU3VtQWpheH3igqw8L3NwYW4+YDtcblxuICAgICAgICAgICAgLy8gQ0FMQ1VMIERFUyBET05TIFxuICAgICAgICAgICAgY29uc3QgZG9uVGRBamF4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRvblRkJyk7XG4gICAgICAgICAgICBjb25zdCB0cmRvbiA9IEFycmF5LmZyb20oZG9uVGRBamF4KS5tYXAoZWwgPT4gZWwuZGF0YXNldC5kb24pXG4gICAgICAgICAgICBkb25TdW1BamF4ID0gc3VtRXVyb3ModHJkb24pO1xuICAgICAgICAgICAgZG9uUC5pbm5lckhUTUwgPSBgRG9ucyA6PHNwYW4gc3R5bGU9XCJcbiAgICAgICAgICAgIGNvbG9yOiMwOTc5Njk7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIFwiPiAke2RvblN1bUFqYXh94oKsPC9zcGFuPmA7XG5cblxuICAgICAgICAgICAgLy8gQ0FMQ1VMIERFUyBWQUxPUklTQVRJT05cbiAgICAgICAgICAgIGNvbnN0IHZhbG9yaXNlZXNUZEFqYXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudmFsb3Jpc2Vlc1RkJyk7XG4gICAgICAgICAgICBjb25zdCB0cnZhbG9yaXNlZXMgPSBBcnJheS5mcm9tKHZhbG9yaXNlZXNUZEFqYXgpLm1hcChlbCA9PiBlbC5kYXRhc2V0LnZhbG9yaXNlZXMpXG4gICAgICAgICAgICB2YWxvcmlzZWVzU3VtQWpheCA9IHN1bUV1cm9zKHRydmFsb3Jpc2Vlcyk7XG4gICAgICAgICAgICB2YWxvcmlzZWVQLmlubmVySFRNTCA9IGBWYWxvcmlzw6llcyA6IDxzcGFuIHN0eWxlPVwiXG4gICAgICAgICAgICBjb2xvcjojMDk3OTY5O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBcIj4ke3ZhbG9yaXNlZXNTdW1BamF4feKCrDwvc3Bhbj4gYDtcbiAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgaWYobW9udGgudmFsdWUgPT0gJycgJiYgdHlwZW9mIHllYXIgIT09ICd1bmRlZmluZWQnKXtcbiAgICAgICAgICAgIHRvdGFsUGFyYWdyYXBoLmlubmVySFRNTCA9IGBUb3RhbCBwb3VyIGwnYW5uw6llIDxzcGFuIHN0eWxlPVwiXG4gICAgICAgICAgICBjb2xvcjojMTUyMTQ5O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBcIj4ke3llYXJ9PC9zcGFuPjpgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihtb250aC52YWx1ZSA9PSBcIlwiICYmIHllYXIgPT0gJ3JpZW4nKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncGFzc2UgcGFyIGxhJylcbiAgICAgICAgICAgICAgICB0b3RhbFBhcmFncmFwaC5pbm5lckhUTUwgPSBcIlRvdGFsIGRlIHRvdXRlcyB2b3Mgc2Fpc2llcyA6XCI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKHllYXIgIT0gJ3JpZW4nICYmIG1vbnRoLnZhbHVlICE9ICcnKXtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhLnZhbCk7XG4gICAgICAgICAgICAgICAgdG90YWxQYXJhZ3JhcGguaW5uZXJIVE1MID0gYFRvdGFsIHBvdXIgbGUgPHNwYW4gc3R5bGU9XCJcbiAgICAgICAgICAgIGNvbG9yOiMxNTIxNDk7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIFwiPiR7bW9udGgudmFsdWV9LyR7eWVhcn08L3NwYW4+OmA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKHllYXIgPT0gJ3JpZW4nICYmIG1vbnRoLnZhbHVlICE9ICcnKXtcbiAgICAgICAgICAgICAgICB0b3RhbFBhcmFncmFwaC5pbm5lckhUTUwgPSBgVG90YWwgcG91ciB0b3V0IGxlcyBtb2lzIGRlIDxzcGFuIHN0eWxlPVwiXG4gICAgICAgICAgICBjb2xvcjojMTUyMTQ5O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBcIj4ke21vbnRoLnRleHR9PC9zcGFuPjpgO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSlcbiAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9KSAgXG59XG5cbi8vIENBTENVTCBBVkVDIExBIEZPTkNUSU9OIFFVJ09OIElNUE9SVEUgTElHTkUgMSBFVCBBUFBFTkQgUE9VUiBMQSBEVVJFRSBcbmNvbnN0IGRhdGEgPSBBcnJheS5mcm9tKGR1cmVlKS5tYXAoZWwgPT4gZWwuZGF0YXNldC5kdXJlZSk7XG4vLyBjb25zb2xlLmxvZyhkYXRhKTtcbi8vIGNvbnNvbGUubG9nKGRhdGEpO1xubGV0IGR1cmVlQWpheCA9IHN1bUhvdXJzKGRhdGEpO1xuZHVyZWVQLmlubmVySFRNTCA9IGBCw6luw6l2b2xhdCA6IDxzcGFuIHN0eWxlPVwiXG4gICAgICAgICAgICBjb2xvcjojMDk3OTY5O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBcIj4ke2R1cmVlQWpheH08L3NwYW4+YDtcblxuLy8gQ0FMQ1VMIEFWRUMgTEEgRk9OQ1RJT04gUVUnT04gSU1QT1JURSBMSUdORSAzIEVUIEFQUEVORCBQT1VSIExFIFJFTUJPVVJTRU1FTlRcbmNvbnN0IGRhdGFQYXllciA9IEFycmF5LmZyb20ocGF5ZXJUZCkubWFwKGVsID0+IGVsLmRhdGFzZXQucGF5ZXIpO1xubGV0IGFQYXllclN1bSA9IHN1bVBheShkYXRhUGF5ZXIpO1xucGF5ZXJQLmlubmVySFRNTCA9IGBSZW1ib3Vyc2VtZW50IDogPHNwYW4gc3R5bGU9XCJcbiAgICAgICAgICAgIGNvbG9yOiMwOTc5Njk7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIFwiPiR7YVBheWVyU3VtfeKCrDwvc3Bhbj5gO1xuXG4vLyBDQUxDVUwgQVZFQyBMQSBGT05DVElPTiBRVSdPTiBJTVBPUlRFIExJR05FIDIgRVQgQVBQRU5EIFBPVVIgTEUgRE9OXG5jb25zdCBkYXRhRG9uID0gQXJyYXkuZnJvbShkb25UZCkubWFwKGVsID0+IGVsLmRhdGFzZXQuZG9uKTtcbmxldCBkb25TdW0gPSBzdW1FdXJvcyhkYXRhRG9uKTtcbmRvblAuaW5uZXJIVE1MID0gYERvbnMgOjxzcGFuIHN0eWxlPVwiXG4gICAgICAgICAgICBjb2xvcjojMDk3OTY5O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBcIj4gJHtkb25TdW194oKsPC9zcGFuPmA7XG5cbi8vIENBTENVTCBBVkVDIExBIEZPTkNUSU9OIFFVJ09OIElNUE9SVEUgTElHTkUgMiBFVCBBUFBFTkQgUE9VUiBMQSBWQUxPUklTQVRJT05cbmNvbnN0IGRhdGFWYWxvcmlzZWVzID0gQXJyYXkuZnJvbSh2YWxvcmlzZWVzVGQpLm1hcChlbCA9PiBlbC5kYXRhc2V0LnZhbG9yaXNlZXMpO1xubGV0IHZhbG9yaXNlZXNTdW0gPSBzdW1FdXJvcyhkYXRhVmFsb3Jpc2Vlcyk7XG52YWxvcmlzZWVQLmlubmVySFRNTCA9IGBWYWxvcmlzw6llcyA6IDxzcGFuIHN0eWxlPVwiXG4gICAgICAgICAgICBjb2xvcjojMDk3OTY5O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBcIj4ke3ZhbG9yaXNlZXNTdW194oKsPC9zcGFuPmA7XG5cblxuLy8gRU5WT0lFIERPTk5FRVMgVkVSUyBQREYgISEgXG5jb25zdCBwZGZBY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGRmSWNvbmUnKTsgXG5jb25zdCBiYXNlSHJlZiA9IGRvY3VtZW50LlVSTDsgXG5cblxucGRmQWN0aW9uLmZvckVhY2goZWwgPT4ge1xuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGFjdGlvbklkID0gZWwuZGF0YXNldC5pZDtcbiAgICAgICAgY29uc3QgZW5kUG9pbnQgPSBgJHtiYXNlSHJlZn0vcGRmLyR7YWN0aW9uSWR9YDtcbiAgICAgICAgY29uc29sZS5sb2coZHVyZWVBamF4KVxuICAgICAgICBheGlvcy5wb3N0KGVuZFBvaW50KVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHsgXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZW5kUG9pbnQ7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgIH0pXG4gICAgfSlcbn0pXG5cblxuXG4vLyBDQSBDQSBNQVJDSEUgXG5jb25zdCB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndyYXBwZXItcGRmJyk7XG5jb25zdCBwZGZCZW5ldm9sYXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGRmLWJlbmV2b2xhdCcpO1xuY29uc3QgcGRmRG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBkZi1kb24nKTtcbmNvbnN0IHBkZlJlbWJvdXJzZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGRmLXJlbWJvdXJzZW1lbnQnKTtcbmNvbnN0IHBkZlZhbG9yaXNlZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wZGYtdmFsb3Jpc2VlJyk7XG5cbmFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlUGRmKCl7XG5cbiAgICB3cmFwcGVyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICBwZGZCZW5ldm9sYXQuaW5uZXJIVE1MID0gYELDqW7DqXZvbGF0IDogPHNwYW4gc3R5bGU9XCJcbiAgICAgICAgICAgIGNvbG9yOiMwOTc5Njk7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIFwiPiAke3RvdGFsRHVyZWV9PC9zcGFuPmA7XG4gICAgcGRmRG9uLmlubmVySFRNTCA9IGBEb25zIDo8c3BhbiBzdHlsZT1cIlxuICAgICAgICAgICAgY29sb3I6IzA5Nzk2OTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgXCI+ICR7ZG9uU3VtQWpheH3igqw8L3NwYW4+YDtcbiAgICBwZGZSZW1ib3Vyc2VtZW50LmlubmVySFRNTCA9IGBSZW1ib3Vyc2VtZW50cyA6IDxzcGFuIHN0eWxlPVwiY29sb3I6IzA5Nzk2OTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgXCI+ICR7YVBheWVyU3VtQWpheH3igqw8L3NwYW4+YDtcbiAgICBwZGZWYWxvcmlzZWUuaW5uZXJIVE1MID0gYFZhbG9yaXPDqWVzIDogPHNwYW4gc3R5bGU9XCJcbiAgICAgICAgICAgIGNvbG9yOiMwOTc5Njk7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIFwiPiR7dmFsb3Jpc2Vlc1N1bUFqYXh94oKsPC9zcGFuPiBgO1xuXG4gICAgLy8gR0VORVJBVElPTiBEVSBQREYgQVZFQyBUT1VURVMgTEVTIElORk9TXG4gICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgIGZpbGVuYW1lOiAnU2F2ZWRfcGRmLnBkZicsXG4gICAgICAgIG1hcmdpbjogMSxcbiAgICAgICAgaW1hZ2U6IHtcbiAgICAgICAgICAgIHR5cGU6ICdqcGVnJ1xuICAgICAgICB9LFxuICAgICAgICBodG1sMmNhbnZhczogeyBcbiAgICAgICAgICAgIHNjYWxlOiAxMFxuICAgICAgICB9LFxuICAgICAgICBqc1BERjoge1xuICAgICAgICAgICAgb3JpZW50YXRpb246ICdsYW5kc2NhcGUnXG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgIGh0bWwycGRmKClcbiAgICAuZnJvbSh3cmFwcGVyKVxuICAgIC5zZXQob3B0aW9ucylcbiAgICAuc2F2ZSgpXG59XG5cblxuYXN5bmMgZnVuY3Rpb24gZ2VuZXJhdGVQZGZBbGwoKXtcblxuICAgIHdyYXBwZXIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIHBkZkJlbmV2b2xhdC5pbm5lckhUTUwgPSBgQsOpbsOpdm9sYXQgOiA8c3BhbiBzdHlsZT1cIlxuICAgICAgICAgICAgY29sb3I6IzA5Nzk2OTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgXCI+ICR7ZHVyZWVBamF4fTwvc3Bhbj5gO1xuICAgIHBkZkRvbi5pbm5lckhUTUwgPSBgRG9ucyA6PHNwYW4gc3R5bGU9XCJcbiAgICAgICAgICAgIGNvbG9yOiMwOTc5Njk7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIFwiPiAke2RvblN1bX3igqw8L3NwYW4+YDtcbiAgICBwZGZSZW1ib3Vyc2VtZW50LmlubmVySFRNTCA9IGBSZW1ib3Vyc2VtZW50cyA6IDxzcGFuIHN0eWxlPVwiY29sb3I6IzA5Nzk2OTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgXCI+ICR7YVBheWVyU3VtfeKCrDwvc3Bhbj5gO1xuICAgIHBkZlZhbG9yaXNlZS5pbm5lckhUTUwgPSBgVmFsb3Jpc8OpZXMgOiA8c3BhbiBzdHlsZT1cIlxuICAgICAgICAgICAgY29sb3I6IzA5Nzk2OTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgXCI+JHt2YWxvcmlzZWVzU3VtfeKCrDwvc3Bhbj4gYDtcblxuICAgIC8vIEdFTkVSQVRJT04gRFUgUERGIEFWRUMgVE9VVEVTIExFUyBJTkZPU1xuICAgIGxldCBvcHRpb25zQWxsID0ge1xuICAgICAgICBmaWxlbmFtZTogJ1NhdmVkX3BkZi5wZGYnLFxuICAgICAgICBtYXJnaW46IDEsXG4gICAgICAgIGltYWdlOiB7XG4gICAgICAgICAgICB0eXBlOiAnanBlZydcbiAgICAgICAgfSxcbiAgICAgICAgaHRtbDJjYW52YXM6IHsgXG4gICAgICAgICAgICBzY2FsZTogMTBcbiAgICAgICAgfSxcbiAgICAgICAganNQREY6IHtcbiAgICAgICAgICAgIG9yaWVudGF0aW9uOiAnbGFuZHNjYXBlJ1xuICAgICAgICB9LFxuICAgIH07XG5cbiAgICBodG1sMnBkZigpXG4gICAgLmZyb20od3JhcHBlcilcbiAgICAuc2V0KG9wdGlvbnNBbGwpXG4gICAgLnNhdmUoKVxufVxuXG4vLyBBUFBFTExFIERFTUFOREUgUERGIE9OIENMSUNLXG5jb25zdCBidG5QZGYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLXBkZicpO1xuY29uc3QgYnRuUGRmQWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1wZGYtYWxsJyk7XG5cblxuYnRuUGRmLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGdlbmVyYXRlUGRmKClcbiAgICAudGhlbigoKSA9PiB7IFxuICAgICAgICB3cmFwcGVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICB9KVxufSlcblxuYnRuUGRmQWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGdlbmVyYXRlUGRmQWxsKClcbiAgICAudGhlbigoKSA9PiB7IFxuICAgICAgICB3cmFwcGVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICB9KVxufSlcblxuXG50YWJsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGlmKGV2ZW50LnRhcmdldC5tYXRjaGVzKFwiLnBkZl9pY29uZVwiKSl7XG4gICAgICAgIGxldCBpZFBkZiA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LmlkO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGAvcmVjYXBpdHVsYXRpZi9wZGYvJHtpZFBkZn1gXG4gICAgfVxufSlcblxuXG5cbi8vIElOSVRJRSBMQSBWQVJJQUJMRSBBVkFOVCBGT05DVElPTiBJTVBPUlRBTlRcbmxldCBpZEFjdGlvblxuXG50YWJsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYoZS50YXJnZXQubWF0Y2hlcygnLnRyYXNoLXBuZycpKXtcbiAgICAgICAgaWRBY3Rpb24gPSBlLnRhcmdldC5kYXRhc2V0LmlkO1xuICAgICAgICBvcGVuTW9kYWwoKTtcbiAgICB9XG59KVxuXG5cbmJ0blllcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgYmFzZUhyZWYgPSBkb2N1bWVudC5VUkw7XG4gICAgY29uc3QgZW5kUG9pbnQgPSBgJHtiYXNlSHJlZn0vcmVtb3ZlLyR7aWRBY3Rpb259YDtcblxuICAgIC8vIEFQUEVMTEUgQUpBWCBTVVIgTCdFTkRQT0lOVCBcbiAgICBheGlvcy5wb3N0KGVuZFBvaW50KS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgY29uc3QgZG9tVG9SZW1vdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAudHItJHtpZEFjdGlvbn1gKTtcbiAgICAgICAgZG9tVG9SZW1vdmUucmVtb3ZlKCk7XG4gICAgICAgIGNsb3NlTW9kYWwoKTtcbiAgICAgICAgVG9hc3RpZnkoe1xuICAgICAgICAgICAgICAgIHRleHQ6IFwiU2Fpc2llIGJpZW4gc3VwcHJpbcOpXCIsXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDUwMDAsXG4gICAgICAgICAgICAgICAgbmV3V2luZG93OiB0cnVlLFxuICAgICAgICAgICAgICAgIGNsb3NlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGdyYXZpdHk6IFwidG9wXCIsIC8vIGB0b3BgIG9yIGBib3R0b21gXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IFwicmlnaHRcIiwgLy8gYGxlZnRgLCBgY2VudGVyYCBvciBgcmlnaHRgXG4gICAgICAgICAgICAgICAgc3RvcE9uRm9jdXM6IHRydWUsIC8vIFByZXZlbnRzIGRpc21pc3Npbmcgb2YgdG9hc3Qgb24gaG92ZXJcbiAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBcImxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzAwYjA5YiwgIzk2YzkzZClcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uKCl7fVxuICAgICAgICAgICAgfSkuc2hvd1RvYXN0KCk7XG4gICAgICAgICAgICBBamF4eWVhcigpOyBcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfSlcbn0pXG5cbmJ0bk5vLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICBjbG9zZU1vZGFsKCk7XG59KVxuIl0sIm5hbWVzIjpbInN1bUhvdXJzIiwic3VtRXVyb3MiLCJzdW1QYXkiLCJzZWxlY3RZZWFyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInRvdGFsUGFyYWdyYXBoIiwicXVlcnlTZWxlY3RvciIsIm1vZGFsIiwiZHVyZWVQIiwicGF5ZXJQIiwiZG9uUCIsInZhbG9yaXNlZVAiLCJkdXJlZSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwYXllclRkIiwiZG9uVGQiLCJ2YWxvcmlzZWVzVGQiLCJhbGVydE1lc3NhZ2UiLCJyZXNldCIsIm1haW4iLCJvcGVuTW9kYWwiLCJkYXRhc2V0IiwiYWN0aXZlIiwic3R5bGUiLCJvcGFjaXR5IiwiY2xvc2VNb2RhbCIsImJhc2VPcHRpb24iLCJjcmVhdGVFbGVtZW50IiwidGV4dCIsInZhbHVlIiwiYWRkIiwiY3VycmVudFllYXIiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJlYXJsaWVzdFllYXIiLCJkYXRlT3B0aW9uIiwic2VsZWN0TW9udGgiLCJ0YWJsZSIsImJ0blN1Ym1pdCIsIm1vbnRocyIsImkiLCJsZW5ndGgiLCJtb250aE9wdGlvbiIsImNsYXNzTmFtZSIsImFzc29jcyIsInNlbGVjdEFzc29jIiwiYWRkRWwiLCJmb3JFYWNoIiwiZWwiLCJhc3NvY09wdGlvbnMiLCJhc3NvY2lhdGlvbiIsImlkIiwiZGF0YUlkIiwidHJhc2giLCJidG5ObyIsImJ0blllcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJBamF4eWVhciIsInRvdGFsRHVyZWUiLCJhUGF5ZXJTdW1BamF4IiwiZG9uU3VtQWpheCIsInZhbG9yaXNlZXNTdW1BamF4IiwiYnRuUGRmQWxsIiwiZGlzcGxheSIsImRhdGEiLCJvcHRpb25zIiwic2VsZWN0ZWRJbmRleCIsIm1vbnRoIiwiYXNzb2MiLCJxdWVyeVN0cmluZyIsIlVSTFNlYXJjaFBhcmFtcyIsImFwcGVuZCIsInVybCIsIlVSTCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImF4aW9zIiwicG9zdCIsInBhdGhuYW1lIiwidG9TdHJpbmciLCJ0aGVuIiwidHJDb250YWluZXIiLCJ0ckNvbnRhaW5lclBkZiIsImRhdGFVc2VyIiwiY29udGVudCIsImRhdGFVc2VyUGRmIiwiY29udGVudFBkZiIsInRleHRDb250ZW50IiwiaW5uZXJIVE1MIiwiYnRuUGRmIiwic2V0VGltZW91dCIsInllYXIiLCJ0ciIsInRyRGF0YSIsIkFycmF5IiwiZnJvbSIsIm1hcCIsInBheWVyVGRBamF4IiwidHJwYXllciIsInBheWVyIiwiZG9uVGRBamF4IiwidHJkb24iLCJkb24iLCJ2YWxvcmlzZWVzVGRBamF4IiwidHJ2YWxvcmlzZWVzIiwidmFsb3Jpc2VlcyIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJkdXJlZUFqYXgiLCJkYXRhUGF5ZXIiLCJhUGF5ZXJTdW0iLCJkYXRhRG9uIiwiZG9uU3VtIiwiZGF0YVZhbG9yaXNlZXMiLCJ2YWxvcmlzZWVzU3VtIiwicGRmQWN0aW9uIiwiYmFzZUhyZWYiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiYWN0aW9uSWQiLCJlbmRQb2ludCIsInJlc3BvbnNlIiwiZXJyb3IiLCJ3cmFwcGVyIiwicGRmQmVuZXZvbGF0IiwicGRmRG9uIiwicGRmUmVtYm91cnNlbWVudCIsInBkZlZhbG9yaXNlZSIsImdlbmVyYXRlUGRmIiwiZmlsZW5hbWUiLCJtYXJnaW4iLCJpbWFnZSIsInR5cGUiLCJodG1sMmNhbnZhcyIsInNjYWxlIiwianNQREYiLCJvcmllbnRhdGlvbiIsImh0bWwycGRmIiwic2V0Iiwic2F2ZSIsImdlbmVyYXRlUGRmQWxsIiwib3B0aW9uc0FsbCIsInRhcmdldCIsIm1hdGNoZXMiLCJpZFBkZiIsImlkQWN0aW9uIiwiZSIsInJlcyIsImRvbVRvUmVtb3ZlIiwicmVtb3ZlIiwiVG9hc3RpZnkiLCJkdXJhdGlvbiIsIm5ld1dpbmRvdyIsImNsb3NlIiwiZ3Jhdml0eSIsInBvc2l0aW9uIiwic3RvcE9uRm9jdXMiLCJiYWNrZ3JvdW5kIiwib25DbGljayIsInNob3dUb2FzdCJdLCJzb3VyY2VSb290IjoiIn0=
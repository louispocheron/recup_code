(self["webpackChunk"] = self["webpackChunk"] || []).push([["admin"],{

/***/ "./assets/js/admin.js":
/*!****************************!*\
  !*** ./assets/js/admin.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.url-search-params.js */ "./node_modules/core-js/modules/web.url-search-params.js");
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.url.js */ "./node_modules/core-js/modules/web.url.js");
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _sumHours__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./sumHours */ "./assets/js/sumHours.js");
/* harmony import */ var _sumEuros__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./sumEuros */ "./assets/js/sumEuros.js");
/* harmony import */ var _sumPay__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./sumPay */ "./assets/js/sumPay.js");
















 //NOMBRE D'HEURE ET MINUTES PAR ADHERENT

var selectYear = document.getElementById('selectYear');
var totalParagraph = document.querySelector('.total-paragraphe');
var dureeP = document.querySelector('.total-heure');
var payerP = document.querySelector('.total-payer');
var donP = document.querySelector('.total-don');
var valoriseeP = document.querySelector('.total-valorisees');
var duree = document.querySelectorAll('.duree');
var payerTd = document.querySelectorAll('.payerTd');
var donTd = document.querySelectorAll('.donTd');
var valoriseesTd = document.querySelectorAll('.valoriseesTd');
var alertMessage = document.querySelector('.alert-message'); // OPTION DE BASE POUR LE SELECT YEAR

var baseOption = document.createElement('option');
baseOption.text = 'Tous';
baseOption.value = 'rien'; // baseOption.className = 'select-dd';  

selectYear.add(baseOption); // OPTION AVEC LES ANNNES 

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
}

btnSubmit.addEventListener('click', sendYear);

function sendYear() {
  var data = selectYear.options[selectYear.selectedIndex];
  var month = selectMonth.options[selectMonth.selectedIndex];
  var queryString = new URLSearchParams();
  queryString.append('year', data.value);
  queryString.append('month', month.value);
  var url = new URL(window.location.href);
  axios.post(url.pathname + "?" + queryString.toString() + "&ajax=1", {
    'year': data.value,
    'month': month.value
  }).then(function (data) {
    var trContainer = document.querySelector('.ajaxDivContent');
    var dataUser = data.data.content;

    if (dataUser == "") {
      // ON RETIRE LE CONTENU DE LA DIV SI ON L'A DEJA AJOUTEE
      [totalParagraph, dureeP, payerP, donP, valoriseeP].forEach(function (el) {
        el.textContent = "";
      });
      alertMessage.style.display = "block";
      alertMessage.innerHTML = '<p style="color:red; text-align: center;">aucune donnée trouvée pour cette recherche</p>'; // TIMEOUT POUR SUPPR LE MESSAGE D ERREUR

      setTimeout(function () {
        alertMessage.style.display = "none";
      }, 3000);
    } else {
      var year = selectYear.options[selectYear.selectedIndex].value;
      trContainer.innerHTML = dataUser;
      var tr = document.querySelectorAll('.duree');
      var trData = Array.from(tr).map(function (el) {
        return el.dataset.duree;
      });
      var totalDuree = (0,_sumHours__WEBPACK_IMPORTED_MODULE_14__.sumHours)(trData);
      dureeP.innerHTML = "Dur\xE9e :<span style=\"\n            color:#097969;\n            font-weight: bold;\n            \"> ".concat(totalDuree, "</span>"); // APPEL DES FONCTIONS POUR CALCULER LES DONNEES

      var payerTdAjax = document.querySelectorAll('.payerTd');
      var trpayer = Array.from(payerTdAjax).map(function (el) {
        return el.dataset.payer;
      });
      var aPayerSumAjax = (0,_sumPay__WEBPACK_IMPORTED_MODULE_16__.sumPay)(trpayer);
      payerP.innerHTML = "A payer :<span style=\"\n            color:#097969;\n            font-weight: bold;\n            \"> ".concat(aPayerSumAjax, "\u20AC</span>");
      var donTdAjax = document.querySelectorAll('.donTd');
      var trdon = Array.from(donTdAjax).map(function (el) {
        return el.dataset.don;
      });
      var donSumAjax = (0,_sumEuros__WEBPACK_IMPORTED_MODULE_15__.sumEuros)(trdon);
      donP.innerHTML = "Don :<span style=\"\n            color:#097969;\n            font-weight: bold;\n            \"> ".concat(donSumAjax, "\u20AC</span>");
      var valoriseesTdAjax = document.querySelectorAll('.valoriseesTd');
      var trvalorisees = Array.from(valoriseesTdAjax).map(function (el) {
        return el.dataset.valorisees;
      });
      var valoriseesSumAjax = (0,_sumEuros__WEBPACK_IMPORTED_MODULE_15__.sumEuros)(trvalorisees);
      valoriseeP.innerHTML = "Valorisees :<span style=\"\n            color:#097969;\n            font-weight: bold;\n            \">".concat(valoriseesSumAjax, "\u20AC</span> ");

      if (month.value == '') {
        totalParagraph.innerHTML = "Total pour l'ann\xE9e <span style=\"\n            color:#152149;\n            font-weight: bold;\n            \">".concat(year, "</span>:");
      }

      if (data.value == 'rien' && month.value == '') {
        totalParagraph.innerHTML = "Total de toutes vos saisies :";
      }

      if (data.value != 'rien' && month.value != '') {
        totalParagraph.innerHTML = "Total pour le <span style=\"\n            color:#152149;\n            font-weight: bold;\n            \">".concat(month.value, "/").concat(year, "</span>:");
      }
    }
  })["catch"](function (err) {
    console.log(err);
  });
} // CALCUL AVEC LA FONCTION QU'ON IMPORTE LIGNE 1 ET APPEND POUR LA DUREE 


var data = Array.from(duree).map(function (el) {
  return el.dataset.duree;
}); // console.log(data);

var dureeAjax = (0,_sumHours__WEBPACK_IMPORTED_MODULE_14__.sumHours)(data);
dureeP.innerHTML = "Dur\xE9e : <span style=\"\n            color:#097969;\n            font-weight: bold;\n            \">".concat(dureeAjax, "</span>"); // CALCUL AVEC LA FONCTION QU'ON IMPORTE LIGNE 3 ET APPEND POUR LE REMBOURSEMENT

var dataPayer = Array.from(payerTd).map(function (el) {
  return el.dataset.payer;
});
console.log(dataPayer);
var aPayerSum = (0,_sumPay__WEBPACK_IMPORTED_MODULE_16__.sumPay)(dataPayer);
payerP.innerHTML = "A payer : <span style=\"\n            color:#097969;\n            font-weight: bold;\n            \">".concat(aPayerSum, "\u20AC</span>"); // CALCUL AVEC LA FONCTION QU'ON IMPORTE LIGNE 2 ET APPEND POUR LE DON

var dataDon = Array.from(donTd).map(function (el) {
  return el.dataset.don;
});
var donSum = (0,_sumEuros__WEBPACK_IMPORTED_MODULE_15__.sumEuros)(dataDon);
donP.innerHTML = "Don :<span style=\"\n            color:#097969;\n            font-weight: bold;\n            \"> ".concat(donSum, "\u20AC</span>"); // CALCUL AVEC LA FONCTION QU'ON IMPORTE LIGNE 2 ET APPEND POUR LA VALORISATION

var dataValorisees = Array.from(valoriseesTd).map(function (el) {
  return el.dataset.valorisees;
});
var valoriseesSum = (0,_sumEuros__WEBPACK_IMPORTED_MODULE_15__.sumEuros)(dataValorisees);
valoriseeP.innerHTML = "Valorisation : <span style=\"\n            color:#097969;\n            font-weight: bold;\n            \">".concat(valoriseesSum, "\u20AC</span>"); // EVENT DU MODAL

var modal = document.querySelector('.modal-adherer');
var bg = document.querySelector(".content-container");
var actionToDelete = document.querySelectorAll('.last-td-poubelle');
var no = document.querySelector('.btn-no');
var yes = document.querySelector('.btn-yes');

var openModal = function openModal() {
  modal.dataset.active = true; // bg.style.opacity = "0.4"
};

var closeModal = function closeModal() {
  delete modal.dataset.active; // bg.style.opacity = "1";
};

var idAction;
table.addEventListener('click', function (event) {
  if (event.target.matches('.trash-png')) {
    idAction = event.target.dataset.id;
    openModal();
  }
});
yes.addEventListener('click', function (e) {
  e.preventDefault();
  var baseHref = document.URL;
  var endPoint = "".concat(baseHref, "/remove/").concat(idAction);
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
    sendYear();
  })["catch"](function (err) {
    console.log(err);
  });
}); // EVENT BTN NON

no.addEventListener('click', function () {
  closeModal();
});

/***/ }),

/***/ "./node_modules/core-js/internals/array-slice.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/array-slice.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");

module.exports = uncurryThis([].slice);


/***/ }),

/***/ "./node_modules/core-js/internals/check-correctness-of-iteration.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/check-correctness-of-iteration.js ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),

/***/ "./node_modules/core-js/internals/engine-is-node.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/engine-is-node.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

module.exports = classof(global.process) == 'process';


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_export_js-node_modules_core-js_internals_is-constructor_js","vendors-node_modules_core-js_internals_advance-string-index_js-node_modules_core-js_internals-a3cf5d","vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-ffb95b","vendors-node_modules_core-js_modules_es_parse-int_js-node_modules_core-js_modules_es_string_s-03957f","vendors-node_modules_core-js_modules_web_dom-collections_iterator_js-node_modules_core-js_mod-8b7c91","assets_js_sumEuros_js-assets_js_sumHours_js-assets_js_sumPay_js-node_modules_core-js_modules_-0b9320"], () => (__webpack_exec__("./assets/js/admin.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFBQ2dELEdBQUQsRUFBUztBQUNiQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtBQUNILEdBdEJEO0FBdUJILENBM0JELEdBOEJBOztBQUNBYSxFQUFFLENBQUM5RCxnQkFBSCxDQUFvQixPQUFwQixFQUE2QixZQUFNO0FBQy9Ca0UsRUFBQUEsVUFBVTtBQUNiLENBRkQ7Ozs7Ozs7Ozs7QUN0UUEsa0JBQWtCLG1CQUFPLENBQUMscUdBQW9DOztBQUU5RDs7Ozs7Ozs7Ozs7QUNGQSxzQkFBc0IsbUJBQU8sQ0FBQyw2RkFBZ0M7O0FBRTlEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2YsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsVUFBVTtBQUN6RCxFQUFFLGdCQUFnQjs7QUFFbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksZ0JBQWdCO0FBQ3BCO0FBQ0E7Ozs7Ozs7Ozs7O0FDckNBLGNBQWMsbUJBQU8sQ0FBQyxpRkFBMEI7QUFDaEQsYUFBYSxtQkFBTyxDQUFDLHVFQUFxQjs7QUFFMUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYWRtaW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LXNsaWNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jaGVjay1jb3JyZWN0bmVzcy1vZi1pdGVyYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2VuZ2luZS1pcy1ub2RlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN1bUhvdXJzIH0gZnJvbSBcIi4vc3VtSG91cnNcIjtcbmltcG9ydCB7IHN1bUV1cm9zIH0gZnJvbSBcIi4vc3VtRXVyb3NcIjtcbmltcG9ydCB7IHN1bVBheSB9IGZyb20gXCIuL3N1bVBheVwiO1xuXG4vL05PTUJSRSBEJ0hFVVJFIEVUIE1JTlVURVMgUEFSIEFESEVSRU5UXG5cbmNvbnN0IHNlbGVjdFllYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VsZWN0WWVhcicpO1xuY29uc3QgdG90YWxQYXJhZ3JhcGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG90YWwtcGFyYWdyYXBoZScpO1xuY29uc3QgZHVyZWVQID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvdGFsLWhldXJlJyk7XG5jb25zdCBwYXllclAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG90YWwtcGF5ZXInKTtcbmNvbnN0IGRvblAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG90YWwtZG9uJyk7XG5jb25zdCB2YWxvcmlzZWVQID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvdGFsLXZhbG9yaXNlZXMnKTtcbmNvbnN0IGR1cmVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmR1cmVlJyk7XG5jb25zdCBwYXllclRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBheWVyVGQnKTtcbmNvbnN0IGRvblRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRvblRkJyk7XG5jb25zdCB2YWxvcmlzZWVzVGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudmFsb3Jpc2Vlc1RkJyk7XG5jb25zdCBhbGVydE1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxlcnQtbWVzc2FnZScpO1xuXG4vLyBPUFRJT04gREUgQkFTRSBQT1VSIExFIFNFTEVDVCBZRUFSXG5sZXQgYmFzZU9wdGlvbiAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbmJhc2VPcHRpb24udGV4dCA9ICdUb3VzJztcbmJhc2VPcHRpb24udmFsdWUgPSAncmllbic7XG4vLyBiYXNlT3B0aW9uLmNsYXNzTmFtZSA9ICdzZWxlY3QtZGQnOyAgXG5zZWxlY3RZZWFyLmFkZChiYXNlT3B0aW9uKTtcblxuLy8gT1BUSU9OIEFWRUMgTEVTIEFOTk5FUyBcbmxldCBjdXJyZW50WWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTsgICAgXG5sZXQgZWFybGllc3RZZWFyID0gMTk2NTsgICAgIFxud2hpbGUgKGN1cnJlbnRZZWFyID49IGVhcmxpZXN0WWVhcikgeyAgICAgIFxuICAgIGxldCBkYXRlT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7ICAgICAgICAgIFxuICAgIGRhdGVPcHRpb24udGV4dCA9IGN1cnJlbnRZZWFyOyAgICAgIFxuICAgIGRhdGVPcHRpb24udmFsdWUgPSBjdXJyZW50WWVhcjtcbiAgICAvLyBkYXRlT3B0aW9uLmNsYXNzTmFtZSA9ICdzZWxlY3QtZGQnO1xuICAgIHNlbGVjdFllYXIuYWRkKGRhdGVPcHRpb24pOyAgICAgIFxuICAgIGN1cnJlbnRZZWFyIC09IDE7ICAgIFxufVxuXG4vLyBDUkVBVElPTiBTRUxFQ1QgTU9OVEhcbmNvbnN0IHNlbGVjdE1vbnRoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlbGVjdE1vbnRoJyk7XG5jb25zdCB0YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YWJsZScpO1xuY29uc3QgYnRuU3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG4tc3VibWl0XCIpXG5cbmNvbnN0IG1vbnRocyA9IFtcbiAgICB7dmFsdWU6ICcnLCB0ZXh0OiAnVG91cyd9LFxuICAgIHt2YWx1ZTogJzAxJywgdGV4dDogJ0phbnZpZXInfSxcbiAgICB7dmFsdWU6ICcwMicsIHRleHQ6ICdGw6l2cmllcid9LFxuICAgIHt2YWx1ZTogJzAzJywgdGV4dDogJ01hcnMnfSxcbiAgICB7dmFsdWU6ICcwNCcsIHRleHQ6ICdBdnJpbCd9LFxuICAgIHt2YWx1ZTogJzA1JywgdGV4dDogJ01haSd9LFxuICAgIHt2YWx1ZTogJzA2JywgdGV4dDogJ0p1aW4nfSxcbiAgICB7dmFsdWU6ICcwNycsIHRleHQ6ICdKdWlsbGV0J30sXG4gICAge3ZhbHVlOiAnMDgnLCB0ZXh0OiAnQW/Du3QnfSxcbiAgICB7dmFsdWU6ICcwOScsIHRleHQ6ICdTZXB0ZW1icmUnfSxcbiAgICB7dmFsdWU6ICcxMCcsIHRleHQ6ICdPY3RvYnJlJ30sXG4gICAge3ZhbHVlOiAnMTEnLCB0ZXh0OiAnTm92ZW1icmUnfSxcbiAgICB7dmFsdWU6ICcxMicsIHRleHQ6ICdEw6ljZW1icmUnfVxuXTtcblxuZm9yKGxldCBpPTA7IGk8bW9udGhzLmxlbmd0aDsgaSsrKXtcbiAgICBjb25zdCBtb250aE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG1vbnRoT3B0aW9uLnRleHQgPSBtb250aHNbaV0udGV4dDtcbiAgICBtb250aE9wdGlvbi52YWx1ZSA9IG1vbnRoc1tpXS52YWx1ZTtcbiAgICBtb250aE9wdGlvbi5jbGFzc05hbWUgPSAnc2VsZWN0LW1vbnRoJztcbiAgICBzZWxlY3RNb250aC5hZGQobW9udGhPcHRpb24pO1xufSAgIFxuXG5idG5TdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZW5kWWVhcik7XG5cblxuXG5cbmZ1bmN0aW9uIHNlbmRZZWFyKCl7XG4gICAgbGV0IGRhdGEgPSBzZWxlY3RZZWFyLm9wdGlvbnNbc2VsZWN0WWVhci5zZWxlY3RlZEluZGV4XTtcbiAgICBsZXQgbW9udGggPSBzZWxlY3RNb250aC5vcHRpb25zW3NlbGVjdE1vbnRoLnNlbGVjdGVkSW5kZXhdO1xuICAgIGxldCBxdWVyeVN0cmluZyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcbiAgICBxdWVyeVN0cmluZy5hcHBlbmQoJ3llYXInLCBkYXRhLnZhbHVlKTtcbiAgICBxdWVyeVN0cmluZy5hcHBlbmQoJ21vbnRoJywgbW9udGgudmFsdWUpO1xuICAgIGxldCB1cmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcblxuXG4gICAgYXhpb3MucG9zdCh1cmwucGF0aG5hbWUgKyBcIj9cIiArIHF1ZXJ5U3RyaW5nLnRvU3RyaW5nKCkgKyBcIiZhamF4PTFcIiwge1xuICAgICAgICAneWVhcic6IGRhdGEudmFsdWUsXG4gICAgICAgICdtb250aCc6IG1vbnRoLnZhbHVlXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgY29uc3QgdHJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWpheERpdkNvbnRlbnQnKTtcbiAgICAgICAgICAgIGxldCBkYXRhVXNlciA9IGRhdGEuZGF0YS5jb250ZW50O1xuICAgICAgICAgICAgaWYoZGF0YVVzZXIgPT0gXCJcIil7XG4gICAgICAgICAgICAgICAgICAgLy8gT04gUkVUSVJFIExFIENPTlRFTlUgREUgTEEgRElWIFNJIE9OIEwnQSBERUpBIEFKT1VURUVcbiAgICAgICAgICAgIFt0b3RhbFBhcmFncmFwaCwgZHVyZWVQLCBwYXllclAsIGRvblAsIHZhbG9yaXNlZVBdLmZvckVhY2goZWwgPT4ge1xuICAgICAgICAgICAgICAgIGVsLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBhbGVydE1lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxuICAgICAgICAgICAgYWxlcnRNZXNzYWdlLmlubmVySFRNTCA9ICc8cCBzdHlsZT1cImNvbG9yOnJlZDsgdGV4dC1hbGlnbjogY2VudGVyO1wiPmF1Y3VuZSBkb25uw6llIHRyb3V2w6llIHBvdXIgY2V0dGUgcmVjaGVyY2hlPC9wPic7XG4gICAgICAgICAgICAvLyBUSU1FT1VUIFBPVVIgU1VQUFIgTEUgTUVTU0FHRSBEIEVSUkVVUlxuICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICAgIGFsZXJ0TWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICB9LCAzMDAwKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuXG4gICAgICAgICAgbGV0IHllYXIgPSBzZWxlY3RZZWFyLm9wdGlvbnNbc2VsZWN0WWVhci5zZWxlY3RlZEluZGV4XS52YWx1ZTtcbiAgICAgICAgICAgIHRyQ29udGFpbmVyLmlubmVySFRNTCA9IGRhdGFVc2VyO1xuXG4gICAgICAgICAgICBjb25zdCB0ciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kdXJlZScpO1xuICAgICAgICAgICAgY29uc3QgdHJEYXRhID0gQXJyYXkuZnJvbSh0cikubWFwKGVsID0+IGVsLmRhdGFzZXQuZHVyZWUpXG4gICAgICAgICAgICBsZXQgdG90YWxEdXJlZSA9IHN1bUhvdXJzKHRyRGF0YSk7XG4gICAgICAgICAgICBkdXJlZVAuaW5uZXJIVE1MID0gYER1csOpZSA6PHNwYW4gc3R5bGU9XCJcbiAgICAgICAgICAgIGNvbG9yOiMwOTc5Njk7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIFwiPiAke3RvdGFsRHVyZWV9PC9zcGFuPmA7XG5cbiAgICAgICAgICAgIC8vIEFQUEVMIERFUyBGT05DVElPTlMgUE9VUiBDQUxDVUxFUiBMRVMgRE9OTkVFU1xuICAgICAgICAgICAgY29uc3QgcGF5ZXJUZEFqYXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGF5ZXJUZCcpO1xuICAgICAgICAgICAgY29uc3QgdHJwYXllciA9IEFycmF5LmZyb20ocGF5ZXJUZEFqYXgpLm1hcChlbCA9PiBlbC5kYXRhc2V0LnBheWVyKVxuICAgICAgICAgICAgbGV0IGFQYXllclN1bUFqYXggPSBzdW1QYXkodHJwYXllcik7XG4gICAgICAgICAgICBwYXllclAuaW5uZXJIVE1MID0gYEEgcGF5ZXIgOjxzcGFuIHN0eWxlPVwiXG4gICAgICAgICAgICBjb2xvcjojMDk3OTY5O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBcIj4gJHthUGF5ZXJTdW1BamF4feKCrDwvc3Bhbj5gO1xuXG5cbiAgICAgICAgICAgIGNvbnN0IGRvblRkQWpheCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kb25UZCcpO1xuICAgICAgICAgICAgY29uc3QgdHJkb24gPSBBcnJheS5mcm9tKGRvblRkQWpheCkubWFwKGVsID0+IGVsLmRhdGFzZXQuZG9uKVxuICAgICAgICAgICAgbGV0IGRvblN1bUFqYXggPSBzdW1FdXJvcyh0cmRvbik7XG4gICAgICAgICAgICBkb25QLmlubmVySFRNTCA9IGBEb24gOjxzcGFuIHN0eWxlPVwiXG4gICAgICAgICAgICBjb2xvcjojMDk3OTY5O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBcIj4gJHtkb25TdW1BamF4feKCrDwvc3Bhbj5gO1xuXG5cbiAgICAgICAgICAgIGNvbnN0IHZhbG9yaXNlZXNUZEFqYXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudmFsb3Jpc2Vlc1RkJyk7XG4gICAgICAgICAgICBjb25zdCB0cnZhbG9yaXNlZXMgPSBBcnJheS5mcm9tKHZhbG9yaXNlZXNUZEFqYXgpLm1hcChlbCA9PiBlbC5kYXRhc2V0LnZhbG9yaXNlZXMpXG4gICAgICAgICAgICBsZXQgdmFsb3Jpc2Vlc1N1bUFqYXggPSBzdW1FdXJvcyh0cnZhbG9yaXNlZXMpO1xuICAgICAgICAgICAgdmFsb3Jpc2VlUC5pbm5lckhUTUwgPSBgVmFsb3Jpc2VlcyA6PHNwYW4gc3R5bGU9XCJcbiAgICAgICAgICAgIGNvbG9yOiMwOTc5Njk7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIFwiPiR7dmFsb3Jpc2Vlc1N1bUFqYXh94oKsPC9zcGFuPiBgO1xuICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKG1vbnRoLnZhbHVlID09ICcnKXtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB0b3RhbFBhcmFncmFwaC5pbm5lckhUTUwgPSBgVG90YWwgcG91ciBsJ2FubsOpZSA8c3BhbiBzdHlsZT1cIlxuICAgICAgICAgICAgY29sb3I6IzE1MjE0OTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgXCI+JHt5ZWFyfTwvc3Bhbj46YFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoZGF0YS52YWx1ZSA9PSAncmllbicgJiYgbW9udGgudmFsdWUgPT0gJycpe1xuXG4gICAgICAgICAgICAgICAgdG90YWxQYXJhZ3JhcGguaW5uZXJIVE1MID0gXCJUb3RhbCBkZSB0b3V0ZXMgdm9zIHNhaXNpZXMgOlwiO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihkYXRhLnZhbHVlICE9ICdyaWVuJyAmJiBtb250aC52YWx1ZSAhPSAnJyl7XG5cbiAgICAgICAgICAgICAgICB0b3RhbFBhcmFncmFwaC5pbm5lckhUTUwgPSBgVG90YWwgcG91ciBsZSA8c3BhbiBzdHlsZT1cIlxuICAgICAgICAgICAgY29sb3I6IzE1MjE0OTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgXCI+JHttb250aC52YWx1ZX0vJHt5ZWFyfTwvc3Bhbj46YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgfSlcbn1cblxuXG5cblxuLy8gQ0FMQ1VMIEFWRUMgTEEgRk9OQ1RJT04gUVUnT04gSU1QT1JURSBMSUdORSAxIEVUIEFQUEVORCBQT1VSIExBIERVUkVFIFxuY29uc3QgZGF0YSA9IEFycmF5LmZyb20oZHVyZWUpLm1hcChlbCA9PiBlbC5kYXRhc2V0LmR1cmVlKTtcbi8vIGNvbnNvbGUubG9nKGRhdGEpO1xubGV0IGR1cmVlQWpheCA9IHN1bUhvdXJzKGRhdGEpO1xuZHVyZWVQLmlubmVySFRNTCA9IGBEdXLDqWUgOiA8c3BhbiBzdHlsZT1cIlxuICAgICAgICAgICAgY29sb3I6IzA5Nzk2OTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgXCI+JHtkdXJlZUFqYXh9PC9zcGFuPmA7XG5cbi8vIENBTENVTCBBVkVDIExBIEZPTkNUSU9OIFFVJ09OIElNUE9SVEUgTElHTkUgMyBFVCBBUFBFTkQgUE9VUiBMRSBSRU1CT1VSU0VNRU5UXG5jb25zdCBkYXRhUGF5ZXIgPSBBcnJheS5mcm9tKHBheWVyVGQpLm1hcChlbCA9PiBlbC5kYXRhc2V0LnBheWVyKTtcbmNvbnNvbGUubG9nKGRhdGFQYXllcik7XG5sZXQgYVBheWVyU3VtID0gc3VtUGF5KGRhdGFQYXllcik7XG5wYXllclAuaW5uZXJIVE1MID0gYEEgcGF5ZXIgOiA8c3BhbiBzdHlsZT1cIlxuICAgICAgICAgICAgY29sb3I6IzA5Nzk2OTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgXCI+JHthUGF5ZXJTdW194oKsPC9zcGFuPmA7XG5cbi8vIENBTENVTCBBVkVDIExBIEZPTkNUSU9OIFFVJ09OIElNUE9SVEUgTElHTkUgMiBFVCBBUFBFTkQgUE9VUiBMRSBET05cbmNvbnN0IGRhdGFEb24gPSBBcnJheS5mcm9tKGRvblRkKS5tYXAoZWwgPT4gZWwuZGF0YXNldC5kb24pO1xubGV0IGRvblN1bSA9IHN1bUV1cm9zKGRhdGFEb24pO1xuZG9uUC5pbm5lckhUTUwgPSBgRG9uIDo8c3BhbiBzdHlsZT1cIlxuICAgICAgICAgICAgY29sb3I6IzA5Nzk2OTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgXCI+ICR7ZG9uU3VtfeKCrDwvc3Bhbj5gO1xuXG4vLyBDQUxDVUwgQVZFQyBMQSBGT05DVElPTiBRVSdPTiBJTVBPUlRFIExJR05FIDIgRVQgQVBQRU5EIFBPVVIgTEEgVkFMT1JJU0FUSU9OXG5jb25zdCBkYXRhVmFsb3Jpc2VlcyA9IEFycmF5LmZyb20odmFsb3Jpc2Vlc1RkKS5tYXAoZWwgPT4gZWwuZGF0YXNldC52YWxvcmlzZWVzKTtcbmxldCB2YWxvcmlzZWVzU3VtID0gc3VtRXVyb3MoZGF0YVZhbG9yaXNlZXMpO1xudmFsb3Jpc2VlUC5pbm5lckhUTUwgPSBgVmFsb3Jpc2F0aW9uIDogPHNwYW4gc3R5bGU9XCJcbiAgICAgICAgICAgIGNvbG9yOiMwOTc5Njk7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIFwiPiR7dmFsb3Jpc2Vlc1N1bX3igqw8L3NwYW4+YDtcblxuLy8gRVZFTlQgRFUgTU9EQUxcbmNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWFkaGVyZXInKTtcbmNvbnN0IGJnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50LWNvbnRhaW5lclwiKTtcbmNvbnN0IGFjdGlvblRvRGVsZXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxhc3QtdGQtcG91YmVsbGUnKTtcbmNvbnN0IG5vID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1ubycpO1xuY29uc3QgeWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi15ZXMnKTtcblxuY29uc3Qgb3Blbk1vZGFsID0gKCkgPT4ge1xuICAgIG1vZGFsLmRhdGFzZXQuYWN0aXZlID0gdHJ1ZTtcbiAgICAvLyBiZy5zdHlsZS5vcGFjaXR5ID0gXCIwLjRcIlxufSBcblxuY29uc3QgY2xvc2VNb2RhbCA9ICgpID0+IHsgXG4gICAgZGVsZXRlIG1vZGFsLmRhdGFzZXQuYWN0aXZlO1xuICAgIC8vIGJnLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcbn1cblxuXG5sZXQgaWRBY3Rpb25cbnRhYmxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7IFxuICAgIGlmKGV2ZW50LnRhcmdldC5tYXRjaGVzKCcudHJhc2gtcG5nJykpe1xuICAgICAgICBpZEFjdGlvbiA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LmlkOyBcbiAgICAgICAgb3Blbk1vZGFsKCk7XG4gICAgfVxufSlcblxuXG55ZXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBiYXNlSHJlZiA9IGRvY3VtZW50LlVSTFxuICAgIGNvbnN0IGVuZFBvaW50ID0gYCR7YmFzZUhyZWZ9L3JlbW92ZS8ke2lkQWN0aW9ufWA7IFxuICAgIGF4aW9zLnBvc3QoZW5kUG9pbnQpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMpOyBcbiAgICAgICAgY29uc3QgZG9tVG9SZW1vdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAudHItJHtpZEFjdGlvbn1gKTtcbiAgICAgICAgZG9tVG9SZW1vdmUucmVtb3ZlKCk7XG4gICAgICAgIGNsb3NlTW9kYWwoKTtcbiAgICAgICAgVG9hc3RpZnkoe1xuICAgICAgICAgICAgICAgIHRleHQ6IFwiU2Fpc2llIGJpZW4gc3VwcHJpbcOpXCIsXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDUwMDAsXG4gICAgICAgICAgICAgICAgbmV3V2luZG93OiB0cnVlLFxuICAgICAgICAgICAgICAgIGNsb3NlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGdyYXZpdHk6IFwidG9wXCIsIC8vIGB0b3BgIG9yIGBib3R0b21gXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IFwicmlnaHRcIiwgLy8gYGxlZnRgLCBgY2VudGVyYCBvciBgcmlnaHRgXG4gICAgICAgICAgICAgICAgc3RvcE9uRm9jdXM6IHRydWUsIC8vIFByZXZlbnRzIGRpc21pc3Npbmcgb2YgdG9hc3Qgb24gaG92ZXJcbiAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBcImxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzAwYjA5YiwgIzk2YzkzZClcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uKCl7fVxuICAgICAgICAgICAgfSkuc2hvd1RvYXN0KCk7XG4gICAgICAgICAgICBzZW5kWWVhcigpO1xuICAgIH0pXG4gICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfSlcbn0pXG5cblxuLy8gRVZFTlQgQlROIE5PTlxubm8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY2xvc2VNb2RhbCgpO1xufSkiLCJ2YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gdW5jdXJyeVRoaXMoW10uc2xpY2UpO1xuIiwidmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgSVRFUkFUT1IgPSB3ZWxsS25vd25TeW1ib2woJ2l0ZXJhdG9yJyk7XG52YXIgU0FGRV9DTE9TSU5HID0gZmFsc2U7XG5cbnRyeSB7XG4gIHZhciBjYWxsZWQgPSAwO1xuICB2YXIgaXRlcmF0b3JXaXRoUmV0dXJuID0ge1xuICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB7IGRvbmU6ICEhY2FsbGVkKysgfTtcbiAgICB9LFxuICAgICdyZXR1cm4nOiBmdW5jdGlvbiAoKSB7XG4gICAgICBTQUZFX0NMT1NJTkcgPSB0cnVlO1xuICAgIH1cbiAgfTtcbiAgaXRlcmF0b3JXaXRoUmV0dXJuW0lURVJBVE9SXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWFycmF5LWZyb20sIG5vLXRocm93LWxpdGVyYWwgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgQXJyYXkuZnJvbShpdGVyYXRvcldpdGhSZXR1cm4sIGZ1bmN0aW9uICgpIHsgdGhyb3cgMjsgfSk7XG59IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMsIFNLSVBfQ0xPU0lORykge1xuICBpZiAoIVNLSVBfQ0xPU0lORyAmJiAhU0FGRV9DTE9TSU5HKSByZXR1cm4gZmFsc2U7XG4gIHZhciBJVEVSQVRJT05fU1VQUE9SVCA9IGZhbHNlO1xuICB0cnkge1xuICAgIHZhciBvYmplY3QgPSB7fTtcbiAgICBvYmplY3RbSVRFUkFUT1JdID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiB7IGRvbmU6IElURVJBVElPTl9TVVBQT1JUID0gdHJ1ZSB9O1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH07XG4gICAgZXhlYyhvYmplY3QpO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIHJldHVybiBJVEVSQVRJT05fU1VQUE9SVDtcbn07XG4iLCJ2YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzc29mKGdsb2JhbC5wcm9jZXNzKSA9PSAncHJvY2Vzcyc7XG4iXSwibmFtZXMiOlsic3VtSG91cnMiLCJzdW1FdXJvcyIsInN1bVBheSIsInNlbGVjdFllYXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidG90YWxQYXJhZ3JhcGgiLCJxdWVyeVNlbGVjdG9yIiwiZHVyZWVQIiwicGF5ZXJQIiwiZG9uUCIsInZhbG9yaXNlZVAiLCJkdXJlZSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwYXllclRkIiwiZG9uVGQiLCJ2YWxvcmlzZWVzVGQiLCJhbGVydE1lc3NhZ2UiLCJiYXNlT3B0aW9uIiwiY3JlYXRlRWxlbWVudCIsInRleHQiLCJ2YWx1ZSIsImFkZCIsImN1cnJlbnRZZWFyIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiZWFybGllc3RZZWFyIiwiZGF0ZU9wdGlvbiIsInNlbGVjdE1vbnRoIiwidGFibGUiLCJidG5TdWJtaXQiLCJtb250aHMiLCJpIiwibGVuZ3RoIiwibW9udGhPcHRpb24iLCJjbGFzc05hbWUiLCJhZGRFdmVudExpc3RlbmVyIiwic2VuZFllYXIiLCJkYXRhIiwib3B0aW9ucyIsInNlbGVjdGVkSW5kZXgiLCJtb250aCIsInF1ZXJ5U3RyaW5nIiwiVVJMU2VhcmNoUGFyYW1zIiwiYXBwZW5kIiwidXJsIiwiVVJMIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiYXhpb3MiLCJwb3N0IiwicGF0aG5hbWUiLCJ0b1N0cmluZyIsInRoZW4iLCJ0ckNvbnRhaW5lciIsImRhdGFVc2VyIiwiY29udGVudCIsImZvckVhY2giLCJlbCIsInRleHRDb250ZW50Iiwic3R5bGUiLCJkaXNwbGF5IiwiaW5uZXJIVE1MIiwic2V0VGltZW91dCIsInllYXIiLCJ0ciIsInRyRGF0YSIsIkFycmF5IiwiZnJvbSIsIm1hcCIsImRhdGFzZXQiLCJ0b3RhbER1cmVlIiwicGF5ZXJUZEFqYXgiLCJ0cnBheWVyIiwicGF5ZXIiLCJhUGF5ZXJTdW1BamF4IiwiZG9uVGRBamF4IiwidHJkb24iLCJkb24iLCJkb25TdW1BamF4IiwidmFsb3Jpc2Vlc1RkQWpheCIsInRydmFsb3Jpc2VlcyIsInZhbG9yaXNlZXMiLCJ2YWxvcmlzZWVzU3VtQWpheCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJkdXJlZUFqYXgiLCJkYXRhUGF5ZXIiLCJhUGF5ZXJTdW0iLCJkYXRhRG9uIiwiZG9uU3VtIiwiZGF0YVZhbG9yaXNlZXMiLCJ2YWxvcmlzZWVzU3VtIiwibW9kYWwiLCJiZyIsImFjdGlvblRvRGVsZXRlIiwibm8iLCJ5ZXMiLCJvcGVuTW9kYWwiLCJhY3RpdmUiLCJjbG9zZU1vZGFsIiwiaWRBY3Rpb24iLCJldmVudCIsInRhcmdldCIsIm1hdGNoZXMiLCJpZCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImJhc2VIcmVmIiwiZW5kUG9pbnQiLCJyZXMiLCJkb21Ub1JlbW92ZSIsInJlbW92ZSIsIlRvYXN0aWZ5IiwiZHVyYXRpb24iLCJuZXdXaW5kb3ciLCJjbG9zZSIsImdyYXZpdHkiLCJwb3NpdGlvbiIsInN0b3BPbkZvY3VzIiwiYmFja2dyb3VuZCIsIm9uQ2xpY2siLCJzaG93VG9hc3QiXSwic291cmNlUm9vdCI6IiJ9
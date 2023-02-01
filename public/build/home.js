(self["webpackChunk"] = self["webpackChunk"] || []).push([["home"],{

/***/ "./assets/js/home.js":
/*!***************************!*\
  !*** ./assets/js/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.url.js */ "./node_modules/core-js/modules/web.url.js");
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.url-search-params.js */ "./node_modules/core-js/modules/web.url-search-params.js");
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _sumHours__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sumHours */ "./assets/js/sumHours.js");
/* harmony import */ var _sumEuros__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sumEuros */ "./assets/js/sumEuros.js");
/* harmony import */ var _sumPay__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sumPay */ "./assets/js/sumPay.js");











var benevolatDom = document.querySelector('.benevolat-card');
var remboursementDom = document.querySelector('.remboursement-card');
var heureDom = document.querySelector(".heure-card");
var donDom = document.querySelector('.dons-card');
var url = new URL(window.location.href);
var href = url.pathname;
var valorisees = [];
var dons = [];
var remboursement = [];
var benevolat = [];
console.log("xd");

window.onload = function () {
  axios.get(href + 'ajax_endpoint').then(function (response) {
    var data = response.data.data;

    if (data.length >= 1) {
      data.forEach(function (el) {
        valorisees.push(el.heuresValorisees);
        dons.push(el.dons);
        remboursement.push(el.aPayer);
        benevolat.push(el.duree);
      }); // OK

      var total_valorisee = (0,_sumEuros__WEBPACK_IMPORTED_MODULE_9__.sumEuros)(valorisees);
      benevolatDom.innerHTML = total_valorisee + "€"; // OK

      var total_remboursement = (0,_sumPay__WEBPACK_IMPORTED_MODULE_10__.sumPay)(remboursement);
      remboursementDom.innerHTML = total_remboursement + "€";
      var total_benevolat = (0,_sumHours__WEBPACK_IMPORTED_MODULE_8__.sumHours)(benevolat);
      console.log(total_benevolat);
      heureDom.innerHTML = total_benevolat; // console.log(total_remboursement);

      var total_dons = (0,_sumEuros__WEBPACK_IMPORTED_MODULE_9__.sumEuros)(dons);
      donDom.innerHTML = total_dons + "€";
    } else {
      benevolatDom.innerHTML = "0€";
      remboursementDom.innerHTML = "0€";
      heureDom.innerHTML = "00h00";
      donDom.innerHTML = "0€";
    }
  })["catch"](function (error) {
    console.log(error);
  });
};

/***/ }),

/***/ "./assets/js/sumEuros.js":
/*!*******************************!*\
  !*** ./assets/js/sumEuros.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sumEuros": () => (/* binding */ sumEuros)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_10__);











function sumEuros(data) {
  if (data.length > 1) {
    // on calcul le total des euros
    // SI DATA NULL ON CHOPE SON IDX DANS ARRAY ET ON LE REMPLACE AVEC 0 EN STRING
    data.forEach(function (el) {
      if (el == null) {
        var index = data.indexOf(el);

        if (index !== -1) {
          data[index] = '0';
        }
      }
    });
    var euros = data.map(function (el) {
      return el.split('.')[0];
    });
    euros = euros.map(function (el) {
      return parseInt(el);
    });
    var totalEuros = euros.reduce(function (a, b) {
      return a + b;
    });
    var cents = data.map(function (el) {
      return el.split('.')[1];
    }); // On enleve les valeurs NaN

    cents = cents.filter(function (el) {
      return !isNaN(el);
    });
    cents = cents.map(function (el) {
      return parseInt(el);
    });
    var totalCents;

    if (cents.length > 1) {
      totalCents = cents.reduce(function (a, b) {
        return a + b;
      });
    } else {
      totalCents = 0;
    } // on ajoute les centimes au total des euros


    while (totalCents > 99) {
      totalEuros++;
      totalCents = totalCents - 100;
    }

    var totalSum = "".concat(totalEuros, ".").concat(totalCents);

    if (totalCents == 0) {
      totalSum = "".concat(totalEuros);
    }

    return totalSum;
  }

  if (data.length == 1 && data[0] != null) {
    return data[0];
  } else {
    return '0';
  }
}

/***/ }),

/***/ "./assets/js/sumHours.js":
/*!*******************************!*\
  !*** ./assets/js/sumHours.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sumHours": () => (/* binding */ sumHours)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_9__);










function sumHours(data) {
  if (data.length >= 1) {
    data.forEach(function (el) {
      if (el == 0 || el == undefined) {
        var idx = data.indexOf(el);

        if (idx != -1) {
          data[idx] = '00h00';
        }
      }
    }); // ON CHOPE LA PREMIERE PARTIE DE LA DUREE

    var hours = data.map(function (el) {
      return el.split('h')[0];
    }); // ET ON LA CONVERTIE EN INT

    hours = hours.map(function (el) {
      return parseInt(el);
    }); // ET LA FONCTION REDUCE() POUR SUM TOUT LES EL

    var totalHours = hours.reduce(function (a, b) {
      return a + b;
    }); // PAREIL POUR MINUTE MTN

    var minutes = data.map(function (el) {
      return el.split('h')[1].split('m')[0];
    });
    minutes = minutes.map(function (el) {
      return parseInt(el);
    });
    var totalMinutes = minutes.reduce(function (a, b) {
      return a + b;
    }); // SI TOTAL MIN > 60 ON FAIT LE CALCUL

    while (totalMinutes > 59) {
      totalHours++;
      totalMinutes = totalMinutes - 60;
    }

    if (totalMinutes < 10) {
      totalMinutes = "0".concat(totalMinutes);
    }

    var total = "".concat(totalHours, "h").concat(totalMinutes); // ON AFFICHE LE TOTAL

    return total;
  }

  if (data.length == 1) {
    return data[0];
  }
}

/***/ }),

/***/ "./assets/js/sumPay.js":
/*!*****************************!*\
  !*** ./assets/js/sumPay.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sumPay": () => (/* binding */ sumPay)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_10__);











function sumPay(data) {
  if (data.length > 1) {
    // on calcul le total des euros
    data.forEach(function (el) {
      if (el == '' || el == undefined) {
        var idx = data.indexOf(el);

        if (idx !== -1) {
          data[idx] = '0';
        }
      }
    });
    var euros = data.map(function (el) {
      return el.split('.')[0];
    });
    euros = euros.map(function (el) {
      return parseInt(el);
    }); // console.log(euros)

    var totalEuros = 0;

    if (euros != undefined) {
      totalEuros = euros.reduce(function (a, b) {
        return a + b;
      });
    } // puis le total des centimes
    // check if there is a cent
    // check if theres a cent


    var cents = data.map(function (el) {
      return el.split('.')[1];
    });
    var totalCents = null;
    cents.forEach(function (el) {
      if (el == undefined) {
        var idx = cents.indexOf(el);

        if (idx !== -1) {
          cents[idx] = '0';
        }
      }
    }); // On enleve les valeurs NaN

    cents = cents.filter(function (el) {
      return !isNaN(el);
    });
    cents = cents.map(function (el) {
      return parseInt(el);
    });
    totalCents = cents.reduce(function (a, b) {
      return a + b;
    }); // console.log(totalCents); 
    // on ajoute les centimes au total des euros

    while (totalCents > 99) {
      totalEuros++;
      totalCents = totalCents - 10;
    }

    var totalSum = "".concat(totalEuros, ".").concat(totalCents); // if(totalCents == 0){
    //     totalSum = `${totalEuros}`
    // }

    return totalSum;
  } else {
    return data[0];
  }
}

/***/ }),

/***/ "./node_modules/core-js/internals/array-reduce.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/array-reduce.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var aCallable = __webpack_require__(/*! ../internals/a-callable */ "./node_modules/core-js/internals/a-callable.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");

var TypeError = global.TypeError;

// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    aCallable(callbackfn);
    var O = toObject(that);
    var self = IndexedObject(O);
    var length = lengthOfArrayLike(O);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2) while (true) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }
      index += i;
      if (IS_RIGHT ? index < 0 : length <= index) {
        throw TypeError('Reduce of empty array with no initial value');
      }
    }
    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
    return memo;
  };
};

module.exports = {
  // `Array.prototype.reduce` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduce
  left: createMethod(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduceright
  right: createMethod(true)
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


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.filter.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.filter.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $filter = (__webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").filter);
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');

// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.map.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.map.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $map = (__webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").map);
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');

// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.reduce.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.reduce.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $reduce = (__webpack_require__(/*! ../internals/array-reduce */ "./node_modules/core-js/internals/array-reduce.js").left);
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");
var CHROME_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");
var IS_NODE = __webpack_require__(/*! ../internals/engine-is-node */ "./node_modules/core-js/internals/engine-is-node.js");

var STRICT_METHOD = arrayMethodIsStrict('reduce');
// Chrome 80-82 has a critical bug
// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;

// `Array.prototype.reduce` method
// https://tc39.es/ecma262/#sec-array.prototype.reduce
$({ target: 'Array', proto: true, forced: !STRICT_METHOD || CHROME_BUG }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    var length = arguments.length;
    return $reduce(this, callbackfn, length, length > 1 ? arguments[1] : undefined);
  }
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_export_js-node_modules_core-js_internals_is-constructor_js","vendors-node_modules_core-js_internals_advance-string-index_js-node_modules_core-js_internals-a3cf5d","vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-ffb95b","vendors-node_modules_core-js_modules_es_parse-int_js-node_modules_core-js_modules_es_string_s-03957f","vendors-node_modules_core-js_modules_web_dom-collections_iterator_js-node_modules_core-js_mod-8b7c91"], () => (__webpack_exec__("./assets/js/home.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7OztBQzFDQSxjQUFjLG1CQUFPLENBQUMsaUZBQTBCO0FBQ2hELGFBQWEsbUJBQU8sQ0FBQyx1RUFBcUI7O0FBRTFDOzs7Ozs7Ozs7Ozs7QUNIYTtBQUNiLFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsY0FBYyx1SEFBOEM7QUFDNUQsbUNBQW1DLG1CQUFPLENBQUMsMkhBQStDOztBQUUxRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDREQUE0RDtBQUNoRTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUNkWTtBQUNiLFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsV0FBVyxvSEFBMkM7QUFDdEQsbUNBQW1DLG1CQUFPLENBQUMsMkhBQStDOztBQUUxRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDREQUE0RDtBQUNoRTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUNkWTtBQUNiLFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsY0FBYywrR0FBeUM7QUFDdkQsMEJBQTBCLG1CQUFPLENBQUMsdUdBQXFDO0FBQ3ZFLHFCQUFxQixtQkFBTyxDQUFDLDZGQUFnQztBQUM3RCxjQUFjLG1CQUFPLENBQUMsdUZBQTZCOztBQUVuRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSxvRUFBb0U7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3N1bUV1cm9zLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9zdW1Ib3Vycy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvc3VtUGF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1yZWR1Y2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2VuZ2luZS1pcy1ub2RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuZmlsdGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkubWFwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkucmVkdWNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN1bUhvdXJzIH0gZnJvbSBcIi4vc3VtSG91cnNcIjtcclxuaW1wb3J0IHsgc3VtRXVyb3MgfSBmcm9tIFwiLi9zdW1FdXJvc1wiO1xyXG5pbXBvcnQgeyBzdW1QYXkgfSBmcm9tIFwiLi9zdW1QYXlcIjtcclxuXHJcbmNvbnN0IGJlbmV2b2xhdERvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iZW5ldm9sYXQtY2FyZCcpO1xyXG5jb25zdCByZW1ib3Vyc2VtZW50RG9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlbWJvdXJzZW1lbnQtY2FyZCcpO1xyXG5jb25zdCBoZXVyZURvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGV1cmUtY2FyZFwiKTtcclxuY29uc3QgZG9uRG9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRvbnMtY2FyZCcpO1xyXG5cclxubGV0IHVybCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xyXG5jb25zdCBocmVmID0gdXJsLnBhdGhuYW1lXHJcblxyXG5jb25zdCB2YWxvcmlzZWVzID0gW107XHJcbmNvbnN0IGRvbnMgPSBbXTtcclxuY29uc3QgcmVtYm91cnNlbWVudCA9IFtdO1xyXG5jb25zdCBiZW5ldm9sYXQgPSBbXTtcclxuY29uc29sZS5sb2coXCJ4ZFwiKVxyXG5cclxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcclxuICAgIGF4aW9zLmdldChocmVmICsgJ2FqYXhfZW5kcG9pbnQnKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSByZXNwb25zZS5kYXRhLmRhdGFcclxuICAgICAgICBpZihkYXRhLmxlbmd0aCA+PSAxKXtcclxuICAgICAgICAgICAgZGF0YS5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICAgICAgICAgIHZhbG9yaXNlZXMucHVzaChlbC5oZXVyZXNWYWxvcmlzZWVzKVxyXG4gICAgICAgICAgICAgICAgZG9ucy5wdXNoKGVsLmRvbnMpXHJcbiAgICAgICAgICAgICAgICByZW1ib3Vyc2VtZW50LnB1c2goZWwuYVBheWVyKVxyXG4gICAgICAgICAgICAgICAgYmVuZXZvbGF0LnB1c2goZWwuZHVyZWUpXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAvLyBPS1xyXG4gICAgICAgICAgICBjb25zdCB0b3RhbF92YWxvcmlzZWUgPSBzdW1FdXJvcyh2YWxvcmlzZWVzKVxyXG4gICAgICAgICAgICBiZW5ldm9sYXREb20uaW5uZXJIVE1MID0gdG90YWxfdmFsb3Jpc2VlICsgXCLigqxcIlxyXG5cclxuICAgICAgICAgICAgLy8gT0tcclxuICAgICAgICAgICAgY29uc3QgdG90YWxfcmVtYm91cnNlbWVudCA9IHN1bVBheShyZW1ib3Vyc2VtZW50KVxyXG4gICAgICAgICAgICByZW1ib3Vyc2VtZW50RG9tLmlubmVySFRNTCA9IHRvdGFsX3JlbWJvdXJzZW1lbnQgKyBcIuKCrFwiXHJcblxyXG4gICAgICAgICAgICBjb25zdCB0b3RhbF9iZW5ldm9sYXQgPSBzdW1Ib3VycyhiZW5ldm9sYXQpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0b3RhbF9iZW5ldm9sYXQpXHJcbiAgICAgICAgICAgIGhldXJlRG9tLmlubmVySFRNTCA9IHRvdGFsX2JlbmV2b2xhdFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codG90YWxfcmVtYm91cnNlbWVudCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRvdGFsX2RvbnMgPSBzdW1FdXJvcyhkb25zKTtcclxuICAgICAgICAgICAgZG9uRG9tLmlubmVySFRNTCA9IHRvdGFsX2RvbnMgKyBcIuKCrFwiXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGJlbmV2b2xhdERvbS5pbm5lckhUTUwgPSBcIjDigqxcIlxyXG4gICAgICAgICAgICByZW1ib3Vyc2VtZW50RG9tLmlubmVySFRNTCA9IFwiMOKCrFwiXHJcbiAgICAgICAgICAgIGhldXJlRG9tLmlubmVySFRNTCA9IFwiMDBoMDBcIlxyXG4gICAgICAgICAgICBkb25Eb20uaW5uZXJIVE1MID0gXCIw4oKsXCJcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9KVxyXG59IiwiXHJcbmV4cG9ydCBmdW5jdGlvbiBzdW1FdXJvcyhkYXRhKXtcclxuICAgIGlmKGRhdGEubGVuZ3RoID4gMSl7XHJcbiAgICAgICAgLy8gb24gY2FsY3VsIGxlIHRvdGFsIGRlcyBldXJvc1xyXG5cclxuICAgICAgICAvLyBTSSBEQVRBIE5VTEwgT04gQ0hPUEUgU09OIElEWCBEQU5TIEFSUkFZIEVUIE9OIExFIFJFTVBMQUNFIEFWRUMgMCBFTiBTVFJJTkdcclxuICAgICAgICBkYXRhLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgICAgICBpZihlbCA9PSBudWxsKXtcclxuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IGRhdGEuaW5kZXhPZihlbCk7XHJcbiAgICAgICAgICAgICAgICBpZihpbmRleCAhPT0gLTEpe1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFbaW5kZXhdID0gJzAnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuXHJcbiAgICAgICAgbGV0IGV1cm9zID0gZGF0YS5tYXAoZWwgPT4gZWwuc3BsaXQoJy4nKVswXSk7XHJcbiAgICAgICAgZXVyb3MgPSBldXJvcy5tYXAoZWwgPT4gcGFyc2VJbnQoZWwpKTtcclxuICAgICAgICBsZXQgdG90YWxFdXJvcyA9IGV1cm9zLnJlZHVjZSgoYSwgYikgPT4gYSArIGIpO1xyXG4gICAgXHJcblxyXG4gICAgICAgIGxldCBjZW50cyA9IGRhdGEubWFwKGVsID0+IGVsLnNwbGl0KCcuJylbMV0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIE9uIGVubGV2ZSBsZXMgdmFsZXVycyBOYU5cclxuICAgICAgICBjZW50cyA9IGNlbnRzLmZpbHRlcihlbCA9PiAhaXNOYU4oZWwpKTtcclxuICAgICAgICBjZW50cyA9IGNlbnRzLm1hcChlbCA9PiBwYXJzZUludChlbCkpO1xyXG4gICAgICAgIGxldCB0b3RhbENlbnRzXHJcbiAgICAgICAgaWYoY2VudHMubGVuZ3RoID4gMSl7XHJcbiAgICAgICAgICAgIHRvdGFsQ2VudHMgPSBjZW50cy5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdG90YWxDZW50cyA9IDBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIG9uIGFqb3V0ZSBsZXMgY2VudGltZXMgYXUgdG90YWwgZGVzIGV1cm9zXHJcbiAgICB3aGlsZSh0b3RhbENlbnRzID4gOTkpe1xyXG4gICAgICAgICAgICB0b3RhbEV1cm9zICsrO1xyXG4gICAgICAgICAgICB0b3RhbENlbnRzID0gdG90YWxDZW50cyAtIDEwMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB0b3RhbFN1bSA9IGAke3RvdGFsRXVyb3N9LiR7dG90YWxDZW50c31gXHJcbiAgICAgICAgaWYodG90YWxDZW50cyA9PSAwKXtcclxuICAgICAgICAgICAgdG90YWxTdW0gPSBgJHt0b3RhbEV1cm9zfWBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0b3RhbFN1bTtcclxuICAgIH1cclxuICAgIGlmKGRhdGEubGVuZ3RoID09IDEgJiYgZGF0YVswXSAhPSBudWxsKXtcclxuICAgICAgICByZXR1cm4gZGF0YVswXTtcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgICAgcmV0dXJuICcwJ1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIHN1bUhvdXJzKGRhdGEpe1xyXG4gICAgaWYoZGF0YS5sZW5ndGggPj0gMSl7XHJcblxyXG5cclxuICAgICAgICBkYXRhLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgICAgICBpZihlbCA9PSAwIHx8IGVsID09IHVuZGVmaW5lZCl7IFxyXG4gICAgICAgICAgICAgICAgY29uc3QgaWR4ID0gZGF0YS5pbmRleE9mKGVsKTsgXHJcbiAgICAgICAgICAgICAgICBpZihpZHggIT0gLTEpe1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFbaWR4XSA9ICcwMGgwMCdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gT04gQ0hPUEUgTEEgUFJFTUlFUkUgUEFSVElFIERFIExBIERVUkVFXHJcbiAgICAgICAgbGV0IGhvdXJzID0gZGF0YS5tYXAoZWwgPT4gZWwuc3BsaXQoJ2gnKVswXSk7XHJcblxyXG4gICAgICAgIC8vIEVUIE9OIExBIENPTlZFUlRJRSBFTiBJTlRcclxuICAgICAgICBob3VycyA9IGhvdXJzLm1hcChlbCA9PiBwYXJzZUludChlbCkpO1xyXG5cclxuICAgICAgICAvLyBFVCBMQSBGT05DVElPTiBSRURVQ0UoKSBQT1VSIFNVTSBUT1VUIExFUyBFTFxyXG4gICAgICAgIGxldCB0b3RhbEhvdXJzID0gaG91cnMucmVkdWNlKChhLCBiKSA9PiBhICsgYik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gUEFSRUlMIFBPVVIgTUlOVVRFIE1UTlxyXG4gICAgICAgIGxldCBtaW51dGVzID0gZGF0YS5tYXAoZWwgPT4gZWwuc3BsaXQoJ2gnKVsxXS5zcGxpdCgnbScpWzBdKTtcclxuICAgICAgICBtaW51dGVzID0gbWludXRlcy5tYXAoZWwgPT4gcGFyc2VJbnQoZWwpKTtcclxuICAgICAgICBsZXQgdG90YWxNaW51dGVzID0gbWludXRlcy5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiKTtcclxuXHJcblxyXG4gICAgICAgIC8vIFNJIFRPVEFMIE1JTiA+IDYwIE9OIEZBSVQgTEUgQ0FMQ1VMXHJcbiAgICAgICAgd2hpbGUodG90YWxNaW51dGVzID4gNTkpe1xyXG4gICAgICAgICAgICB0b3RhbEhvdXJzICsrO1xyXG4gICAgICAgICAgICB0b3RhbE1pbnV0ZXMgPSB0b3RhbE1pbnV0ZXMgLSA2MDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodG90YWxNaW51dGVzIDwgMTApe1xyXG4gICAgICAgICAgICB0b3RhbE1pbnV0ZXMgPSBgMCR7dG90YWxNaW51dGVzfWBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB0b3RhbCA9IGAke3RvdGFsSG91cnN9aCR7dG90YWxNaW51dGVzfWBcclxuICAgICAgICAvLyBPTiBBRkZJQ0hFIExFIFRPVEFMXHJcbiAgICAgICAgcmV0dXJuIHRvdGFsXHJcbiAgICB9XHJcbiAgICBpZihkYXRhLmxlbmd0aCA9PSAxKXtcclxuICAgICAgICByZXR1cm4gZGF0YVswXVxyXG4gICAgfVxyXG5cclxuICAgIFxyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIHN1bVBheShkYXRhKXtcclxuICAgIGlmKGRhdGEubGVuZ3RoID4gMSl7XHJcbiAgICAgICAgLy8gb24gY2FsY3VsIGxlIHRvdGFsIGRlcyBldXJvc1xyXG4gICAgICAgIGRhdGEuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgICAgIGlmKGVsID09ICcnIHx8IGVsID09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICBsZXQgaWR4ID0gZGF0YS5pbmRleE9mKGVsKTtcclxuICAgICAgICAgICAgICAgIGlmKGlkeCAhPT0gLTEpeyBcclxuICAgICAgICAgICAgICAgICAgICBkYXRhW2lkeF0gPSAnMCdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgbGV0IGV1cm9zID0gZGF0YS5tYXAoZWwgPT4gZWwuc3BsaXQoJy4nKVswXSk7XHJcbiAgICAgICAgZXVyb3MgPSBldXJvcy5tYXAoZWwgPT4gcGFyc2VJbnQoZWwpKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhldXJvcylcclxuICAgICAgICBsZXQgdG90YWxFdXJvcyA9IDA7XHJcbiAgICAgICAgaWYoZXVyb3MgIT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgdG90YWxFdXJvcyA9IGV1cm9zLnJlZHVjZSgoYSwgYikgPT4gYSArIGIpO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIC8vIHB1aXMgbGUgdG90YWwgZGVzIGNlbnRpbWVzXHJcblxyXG4gICAgICAgIC8vIGNoZWNrIGlmIHRoZXJlIGlzIGEgY2VudFxyXG4gICAgICAgIC8vIGNoZWNrIGlmIHRoZXJlcyBhIGNlbnRcclxuICAgICAgICBsZXQgY2VudHMgPSBkYXRhLm1hcChlbCA9PiBlbC5zcGxpdCgnLicpWzFdKTtcclxuICAgICAgICBsZXQgdG90YWxDZW50cyA9IG51bGw7XHJcblxyXG4gICAgICAgIGNlbnRzLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgICAgICBpZihlbCA9PSB1bmRlZmluZWQpeyBcclxuICAgICAgICAgICAgICAgIGxldCBpZHggPSBjZW50cy5pbmRleE9mKGVsKTsgXHJcbiAgICAgICAgICAgICAgICBpZihpZHggIT09IC0xKXsgXHJcbiAgICAgICAgICAgICAgICAgICAgY2VudHNbaWR4XSA9ICcwJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLy8gT24gZW5sZXZlIGxlcyB2YWxldXJzIE5hTlxyXG4gICAgICAgIGNlbnRzID0gY2VudHMuZmlsdGVyKGVsID0+ICFpc05hTihlbCkpO1xyXG5cclxuICAgICAgICBjZW50cyA9IGNlbnRzLm1hcChlbCA9PiBwYXJzZUludChlbCkpO1xyXG4gICAgICAgIHRvdGFsQ2VudHMgPSBjZW50cy5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0b3RhbENlbnRzKTsgXHJcbiAgICAgICAgLy8gb24gYWpvdXRlIGxlcyBjZW50aW1lcyBhdSB0b3RhbCBkZXMgZXVyb3NcclxuICAgICAgICB3aGlsZSh0b3RhbENlbnRzID4gOTkpe1xyXG4gICAgICAgICAgICAgICAgdG90YWxFdXJvcyArKztcclxuICAgICAgICAgICAgICAgIHRvdGFsQ2VudHMgPSB0b3RhbENlbnRzIC0gMTA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBsZXQgdG90YWxTdW0gPSBgJHt0b3RhbEV1cm9zfS4ke3RvdGFsQ2VudHN9YFxyXG4gICAgICAgIC8vIGlmKHRvdGFsQ2VudHMgPT0gMCl7XHJcbiAgICAgICAgLy8gICAgIHRvdGFsU3VtID0gYCR7dG90YWxFdXJvc31gXHJcbiAgICAgICAgLy8gfVxyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIHRvdGFsU3VtO1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgICByZXR1cm4gZGF0YVswXTtcclxuICAgIH1cclxufSIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgYUNhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtY2FsbGFibGUnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciBJbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luZGV4ZWQtb2JqZWN0Jyk7XG52YXIgbGVuZ3RoT2ZBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UnKTtcblxudmFyIFR5cGVFcnJvciA9IGdsb2JhbC5UeXBlRXJyb3I7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUueyByZWR1Y2UsIHJlZHVjZVJpZ2h0IH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cbnZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbiAoSVNfUklHSFQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0aGF0LCBjYWxsYmFja2ZuLCBhcmd1bWVudHNMZW5ndGgsIG1lbW8pIHtcbiAgICBhQ2FsbGFibGUoY2FsbGJhY2tmbik7XG4gICAgdmFyIE8gPSB0b09iamVjdCh0aGF0KTtcbiAgICB2YXIgc2VsZiA9IEluZGV4ZWRPYmplY3QoTyk7XG4gICAgdmFyIGxlbmd0aCA9IGxlbmd0aE9mQXJyYXlMaWtlKE8pO1xuICAgIHZhciBpbmRleCA9IElTX1JJR0hUID8gbGVuZ3RoIC0gMSA6IDA7XG4gICAgdmFyIGkgPSBJU19SSUdIVCA/IC0xIDogMTtcbiAgICBpZiAoYXJndW1lbnRzTGVuZ3RoIDwgMikgd2hpbGUgKHRydWUpIHtcbiAgICAgIGlmIChpbmRleCBpbiBzZWxmKSB7XG4gICAgICAgIG1lbW8gPSBzZWxmW2luZGV4XTtcbiAgICAgICAgaW5kZXggKz0gaTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBpbmRleCArPSBpO1xuICAgICAgaWYgKElTX1JJR0hUID8gaW5kZXggPCAwIDogbGVuZ3RoIDw9IGluZGV4KSB7XG4gICAgICAgIHRocm93IFR5cGVFcnJvcignUmVkdWNlIG9mIGVtcHR5IGFycmF5IHdpdGggbm8gaW5pdGlhbCB2YWx1ZScpO1xuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKDtJU19SSUdIVCA/IGluZGV4ID49IDAgOiBsZW5ndGggPiBpbmRleDsgaW5kZXggKz0gaSkgaWYgKGluZGV4IGluIHNlbGYpIHtcbiAgICAgIG1lbW8gPSBjYWxsYmFja2ZuKG1lbW8sIHNlbGZbaW5kZXhdLCBpbmRleCwgTyk7XG4gICAgfVxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIGBBcnJheS5wcm90b3R5cGUucmVkdWNlYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUucmVkdWNlXG4gIGxlZnQ6IGNyZWF0ZU1ldGhvZChmYWxzZSksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUucmVkdWNlUmlnaHRgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5yZWR1Y2VyaWdodFxuICByaWdodDogY3JlYXRlTWV0aG9kKHRydWUpXG59O1xuIiwidmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3NvZihnbG9iYWwucHJvY2VzcykgPT0gJ3Byb2Nlc3MnO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJGZpbHRlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5maWx0ZXI7XG52YXIgYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydCcpO1xuXG52YXIgSEFTX1NQRUNJRVNfU1VQUE9SVCA9IGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQoJ2ZpbHRlcicpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmZpbHRlcmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5maWx0ZXJcbi8vIHdpdGggYWRkaW5nIHN1cHBvcnQgb2YgQEBzcGVjaWVzXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhSEFTX1NQRUNJRVNfU1VQUE9SVCB9LCB7XG4gIGZpbHRlcjogZnVuY3Rpb24gZmlsdGVyKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG4gICAgcmV0dXJuICRmaWx0ZXIodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICRtYXAgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykubWFwO1xudmFyIGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQnKTtcblxudmFyIEhBU19TUEVDSUVTX1NVUFBPUlQgPSBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0KCdtYXAnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5tYXBgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUubWFwXG4vLyB3aXRoIGFkZGluZyBzdXBwb3J0IG9mIEBAc3BlY2llc1xuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogIUhBU19TUEVDSUVTX1NVUFBPUlQgfSwge1xuICBtYXA6IGZ1bmN0aW9uIG1hcChjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuICAgIHJldHVybiAkbWFwKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkcmVkdWNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXJlZHVjZScpLmxlZnQ7XG52YXIgYXJyYXlNZXRob2RJc1N0cmljdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaXMtc3RyaWN0Jyk7XG52YXIgQ0hST01FX1ZFUlNJT04gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXY4LXZlcnNpb24nKTtcbnZhciBJU19OT0RFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS1pcy1ub2RlJyk7XG5cbnZhciBTVFJJQ1RfTUVUSE9EID0gYXJyYXlNZXRob2RJc1N0cmljdCgncmVkdWNlJyk7XG4vLyBDaHJvbWUgODAtODIgaGFzIGEgY3JpdGljYWwgYnVnXG4vLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD0xMDQ5OTgyXG52YXIgQ0hST01FX0JVRyA9ICFJU19OT0RFICYmIENIUk9NRV9WRVJTSU9OID4gNzkgJiYgQ0hST01FX1ZFUlNJT04gPCA4MztcblxuLy8gYEFycmF5LnByb3RvdHlwZS5yZWR1Y2VgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUucmVkdWNlXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhU1RSSUNUX01FVEhPRCB8fCBDSFJPTUVfQlVHIH0sIHtcbiAgcmVkdWNlOiBmdW5jdGlvbiByZWR1Y2UoY2FsbGJhY2tmbiAvKiAsIGluaXRpYWxWYWx1ZSAqLykge1xuICAgIHZhciBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIHJldHVybiAkcmVkdWNlKHRoaXMsIGNhbGxiYWNrZm4sIGxlbmd0aCwgbGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbInN1bUhvdXJzIiwic3VtRXVyb3MiLCJzdW1QYXkiLCJiZW5ldm9sYXREb20iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJyZW1ib3Vyc2VtZW50RG9tIiwiaGV1cmVEb20iLCJkb25Eb20iLCJ1cmwiLCJVUkwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJwYXRobmFtZSIsInZhbG9yaXNlZXMiLCJkb25zIiwicmVtYm91cnNlbWVudCIsImJlbmV2b2xhdCIsImNvbnNvbGUiLCJsb2ciLCJvbmxvYWQiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJsZW5ndGgiLCJmb3JFYWNoIiwiZWwiLCJwdXNoIiwiaGV1cmVzVmFsb3Jpc2VlcyIsImFQYXllciIsImR1cmVlIiwidG90YWxfdmFsb3Jpc2VlIiwiaW5uZXJIVE1MIiwidG90YWxfcmVtYm91cnNlbWVudCIsInRvdGFsX2JlbmV2b2xhdCIsInRvdGFsX2RvbnMiLCJlcnJvciIsImluZGV4IiwiaW5kZXhPZiIsImV1cm9zIiwibWFwIiwic3BsaXQiLCJwYXJzZUludCIsInRvdGFsRXVyb3MiLCJyZWR1Y2UiLCJhIiwiYiIsImNlbnRzIiwiZmlsdGVyIiwiaXNOYU4iLCJ0b3RhbENlbnRzIiwidG90YWxTdW0iLCJ1bmRlZmluZWQiLCJpZHgiLCJob3VycyIsInRvdGFsSG91cnMiLCJtaW51dGVzIiwidG90YWxNaW51dGVzIiwidG90YWwiXSwic291cmNlUm9vdCI6IiJ9
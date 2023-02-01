(self["webpackChunk"] = self["webpackChunk"] || []).push([["superAdminFetch"],{

/***/ "./assets/js/SuperAdminFetching.js":
/*!*****************************************!*\
  !*** ./assets/js/SuperAdminFetching.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sumHours__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sumHours */ "./assets/js/sumHours.js");
/* harmony import */ var _sumEuros__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sumEuros */ "./assets/js/sumEuros.js");
/* harmony import */ var _sumPay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sumPay */ "./assets/js/sumPay.js");






var benevolatDom = document.querySelector('.benevolat-card');
var remboursementDom = document.querySelector('.remboursement-card');
var heureDom = document.querySelector(".heure-card");
var donDom = document.querySelector('.dons-card');
var valorisees = [];
var dons = [];
var remboursement = [];
var benevolat = [];
var baseHref = document.URL;
var endPoint = "".concat(baseHref, "/ajax_endpoint");

window.onload = function () {
  axios.get(endPoint).then(function (response) {
    var data = response.data.data;
    console.log(data.length);

    if (data.length >= 1) {
      console.log("sup a 1"); // console.log(data);

      data.forEach(function (el) {
        valorisees.push(el.heuresValorisees);
        dons.push(el.dons);
        remboursement.push(el.aPayer);
        benevolat.push(el.duree);
      }); // OK

      var total_valorisee = (0,_sumEuros__WEBPACK_IMPORTED_MODULE_4__.sumEuros)(valorisees);
      benevolatDom.innerHTML = total_valorisee + "€"; // OK

      var total_remboursement = (0,_sumPay__WEBPACK_IMPORTED_MODULE_5__.sumPay)(remboursement);
      remboursementDom.innerHTML = total_remboursement + "€";
      var total_benevolat = (0,_sumHours__WEBPACK_IMPORTED_MODULE_3__.sumHours)(benevolat);
      heureDom.innerHTML = total_benevolat; // console.log(total_remboursement);

      var total_dons = (0,_sumEuros__WEBPACK_IMPORTED_MODULE_4__.sumEuros)(dons);
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

console.log(valorisees, remboursement, benevolat, dons);

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
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_export_js-node_modules_core-js_internals_is-constructor_js","vendors-node_modules_core-js_internals_advance-string-index_js-node_modules_core-js_internals-a3cf5d","vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-ffb95b","vendors-node_modules_core-js_modules_es_parse-int_js-node_modules_core-js_modules_es_string_s-03957f"], () => (__webpack_exec__("./assets/js/SuperAdminFetching.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDMUNBLGNBQWMsbUJBQU8sQ0FBQyxpRkFBMEI7QUFDaEQsYUFBYSxtQkFBTyxDQUFDLHVFQUFxQjs7QUFFMUM7Ozs7Ozs7Ozs7OztBQ0hhO0FBQ2IsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxjQUFjLHVIQUE4QztBQUM1RCxtQ0FBbUMsbUJBQU8sQ0FBQywySEFBK0M7O0FBRTFGOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksNERBQTREO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ2RZO0FBQ2IsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxXQUFXLG9IQUEyQztBQUN0RCxtQ0FBbUMsbUJBQU8sQ0FBQywySEFBK0M7O0FBRTFGOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksNERBQTREO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ2RZO0FBQ2IsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxjQUFjLCtHQUF5QztBQUN2RCwwQkFBMEIsbUJBQU8sQ0FBQyx1R0FBcUM7QUFDdkUscUJBQXFCLG1CQUFPLENBQUMsNkZBQWdDO0FBQzdELGNBQWMsbUJBQU8sQ0FBQyx1RkFBNkI7O0FBRW5EO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLG9FQUFvRTtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvU3VwZXJBZG1pbkZldGNoaW5nLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9zdW1FdXJvcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvc3VtSG91cnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3N1bVBheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktcmVkdWNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbmdpbmUtaXMtbm9kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5Lm1hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LnJlZHVjZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzdW1Ib3VycyB9IGZyb20gXCIuL3N1bUhvdXJzXCI7XG5pbXBvcnQgeyBzdW1FdXJvcyB9IGZyb20gXCIuL3N1bUV1cm9zXCI7XG5pbXBvcnQgeyBzdW1QYXkgfSBmcm9tIFwiLi9zdW1QYXlcIjtcblxuY29uc3QgYmVuZXZvbGF0RG9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJlbmV2b2xhdC1jYXJkJyk7XG5jb25zdCByZW1ib3Vyc2VtZW50RG9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlbWJvdXJzZW1lbnQtY2FyZCcpO1xuY29uc3QgaGV1cmVEb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhldXJlLWNhcmRcIik7XG5jb25zdCBkb25Eb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZG9ucy1jYXJkJyk7XG5cblxuY29uc3QgdmFsb3Jpc2VlcyA9IFtdO1xuY29uc3QgZG9ucyA9IFtdO1xuY29uc3QgcmVtYm91cnNlbWVudCA9IFtdO1xuY29uc3QgYmVuZXZvbGF0ID0gW107XG5cbmNvbnN0IGJhc2VIcmVmID0gZG9jdW1lbnQuVVJMXG5jb25zdCBlbmRQb2ludCA9IGAke2Jhc2VIcmVmfS9hamF4X2VuZHBvaW50YFxuXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuICAgIGF4aW9zLmdldChlbmRQb2ludCkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHJlc3BvbnNlLmRhdGEuZGF0YTtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YS5sZW5ndGgpXG4gICAgICAgIGlmKGRhdGEubGVuZ3RoID49IDEpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdXAgYSAxXCIpXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgIGRhdGEuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgICAgICAgICAgdmFsb3Jpc2Vlcy5wdXNoKGVsLmhldXJlc1ZhbG9yaXNlZXMpXG4gICAgICAgICAgICAgICAgZG9ucy5wdXNoKGVsLmRvbnMpXG4gICAgICAgICAgICAgICAgcmVtYm91cnNlbWVudC5wdXNoKGVsLmFQYXllcilcbiAgICAgICAgICAgICAgICBiZW5ldm9sYXQucHVzaChlbC5kdXJlZSlcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIC8vIE9LXG4gICAgICAgICAgICBjb25zdCB0b3RhbF92YWxvcmlzZWUgPSBzdW1FdXJvcyh2YWxvcmlzZWVzKVxuICAgICAgICAgICAgYmVuZXZvbGF0RG9tLmlubmVySFRNTCA9IHRvdGFsX3ZhbG9yaXNlZSArIFwi4oKsXCJcbiAgICBcbiAgICAgICAgICAgIC8vIE9LXG4gICAgICAgICAgICBjb25zdCB0b3RhbF9yZW1ib3Vyc2VtZW50ID0gc3VtUGF5KHJlbWJvdXJzZW1lbnQpXG4gICAgICAgICAgICByZW1ib3Vyc2VtZW50RG9tLmlubmVySFRNTCA9IHRvdGFsX3JlbWJvdXJzZW1lbnQgKyBcIuKCrFwiXG4gICAgXG4gICAgICAgICAgICBjb25zdCB0b3RhbF9iZW5ldm9sYXQgPSBzdW1Ib3VycyhiZW5ldm9sYXQpO1xuICAgICAgICAgICAgaGV1cmVEb20uaW5uZXJIVE1MID0gdG90YWxfYmVuZXZvbGF0XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0b3RhbF9yZW1ib3Vyc2VtZW50KTtcbiAgICAgICAgICAgIGNvbnN0IHRvdGFsX2RvbnMgPSBzdW1FdXJvcyhkb25zKTtcbiAgICAgICAgICAgIGRvbkRvbS5pbm5lckhUTUwgPSB0b3RhbF9kb25zICsgXCLigqxcIlxuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBiZW5ldm9sYXREb20uaW5uZXJIVE1MID0gXCIw4oKsXCJcbiAgICAgICAgICAgIHJlbWJvdXJzZW1lbnREb20uaW5uZXJIVE1MID0gXCIw4oKsXCJcbiAgICAgICAgICAgIGhldXJlRG9tLmlubmVySFRNTCA9IFwiMDBoMDBcIlxuICAgICAgICAgICAgZG9uRG9tLmlubmVySFRNTCA9IFwiMOKCrFwiXG4gICAgICAgIH1cbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgfSlcbn1cbmNvbnNvbGUubG9nKHZhbG9yaXNlZXMsIHJlbWJvdXJzZW1lbnQsIGJlbmV2b2xhdCwgZG9ucykiLCJcclxuZXhwb3J0IGZ1bmN0aW9uIHN1bUV1cm9zKGRhdGEpe1xyXG4gICAgaWYoZGF0YS5sZW5ndGggPiAxKXtcclxuICAgICAgICAvLyBvbiBjYWxjdWwgbGUgdG90YWwgZGVzIGV1cm9zXHJcblxyXG4gICAgICAgIC8vIFNJIERBVEEgTlVMTCBPTiBDSE9QRSBTT04gSURYIERBTlMgQVJSQVkgRVQgT04gTEUgUkVNUExBQ0UgQVZFQyAwIEVOIFNUUklOR1xyXG4gICAgICAgIGRhdGEuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgICAgIGlmKGVsID09IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gZGF0YS5pbmRleE9mKGVsKTtcclxuICAgICAgICAgICAgICAgIGlmKGluZGV4ICE9PSAtMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YVtpbmRleF0gPSAnMCdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG5cclxuICAgICAgICBsZXQgZXVyb3MgPSBkYXRhLm1hcChlbCA9PiBlbC5zcGxpdCgnLicpWzBdKTtcclxuICAgICAgICBldXJvcyA9IGV1cm9zLm1hcChlbCA9PiBwYXJzZUludChlbCkpO1xyXG4gICAgICAgIGxldCB0b3RhbEV1cm9zID0gZXVyb3MucmVkdWNlKChhLCBiKSA9PiBhICsgYik7XHJcbiAgICBcclxuXHJcbiAgICAgICAgbGV0IGNlbnRzID0gZGF0YS5tYXAoZWwgPT4gZWwuc3BsaXQoJy4nKVsxXSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gT24gZW5sZXZlIGxlcyB2YWxldXJzIE5hTlxyXG4gICAgICAgIGNlbnRzID0gY2VudHMuZmlsdGVyKGVsID0+ICFpc05hTihlbCkpO1xyXG4gICAgICAgIGNlbnRzID0gY2VudHMubWFwKGVsID0+IHBhcnNlSW50KGVsKSk7XHJcbiAgICAgICAgbGV0IHRvdGFsQ2VudHNcclxuICAgICAgICBpZihjZW50cy5sZW5ndGggPiAxKXtcclxuICAgICAgICAgICAgdG90YWxDZW50cyA9IGNlbnRzLnJlZHVjZSgoYSwgYikgPT4gYSArIGIpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0b3RhbENlbnRzID0gMFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gb24gYWpvdXRlIGxlcyBjZW50aW1lcyBhdSB0b3RhbCBkZXMgZXVyb3NcclxuICAgIHdoaWxlKHRvdGFsQ2VudHMgPiA5OSl7XHJcbiAgICAgICAgICAgIHRvdGFsRXVyb3MgKys7XHJcbiAgICAgICAgICAgIHRvdGFsQ2VudHMgPSB0b3RhbENlbnRzIC0gMTAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHRvdGFsU3VtID0gYCR7dG90YWxFdXJvc30uJHt0b3RhbENlbnRzfWBcclxuICAgICAgICBpZih0b3RhbENlbnRzID09IDApe1xyXG4gICAgICAgICAgICB0b3RhbFN1bSA9IGAke3RvdGFsRXVyb3N9YFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRvdGFsU3VtO1xyXG4gICAgfVxyXG4gICAgaWYoZGF0YS5sZW5ndGggPT0gMSAmJiBkYXRhWzBdICE9IG51bGwpe1xyXG4gICAgICAgIHJldHVybiBkYXRhWzBdO1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgICByZXR1cm4gJzAnXHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZnVuY3Rpb24gc3VtSG91cnMoZGF0YSl7XHJcbiAgICBpZihkYXRhLmxlbmd0aCA+PSAxKXtcclxuXHJcblxyXG4gICAgICAgIGRhdGEuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgICAgIGlmKGVsID09IDAgfHwgZWwgPT0gdW5kZWZpbmVkKXsgXHJcbiAgICAgICAgICAgICAgICBjb25zdCBpZHggPSBkYXRhLmluZGV4T2YoZWwpOyBcclxuICAgICAgICAgICAgICAgIGlmKGlkeCAhPSAtMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YVtpZHhdID0gJzAwaDAwJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgICAgICAvLyBPTiBDSE9QRSBMQSBQUkVNSUVSRSBQQVJUSUUgREUgTEEgRFVSRUVcclxuICAgICAgICBsZXQgaG91cnMgPSBkYXRhLm1hcChlbCA9PiBlbC5zcGxpdCgnaCcpWzBdKTtcclxuXHJcbiAgICAgICAgLy8gRVQgT04gTEEgQ09OVkVSVElFIEVOIElOVFxyXG4gICAgICAgIGhvdXJzID0gaG91cnMubWFwKGVsID0+IHBhcnNlSW50KGVsKSk7XHJcblxyXG4gICAgICAgIC8vIEVUIExBIEZPTkNUSU9OIFJFRFVDRSgpIFBPVVIgU1VNIFRPVVQgTEVTIEVMXHJcbiAgICAgICAgbGV0IHRvdGFsSG91cnMgPSBob3Vycy5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBQQVJFSUwgUE9VUiBNSU5VVEUgTVROXHJcbiAgICAgICAgbGV0IG1pbnV0ZXMgPSBkYXRhLm1hcChlbCA9PiBlbC5zcGxpdCgnaCcpWzFdLnNwbGl0KCdtJylbMF0pO1xyXG4gICAgICAgIG1pbnV0ZXMgPSBtaW51dGVzLm1hcChlbCA9PiBwYXJzZUludChlbCkpO1xyXG4gICAgICAgIGxldCB0b3RhbE1pbnV0ZXMgPSBtaW51dGVzLnJlZHVjZSgoYSwgYikgPT4gYSArIGIpO1xyXG5cclxuXHJcbiAgICAgICAgLy8gU0kgVE9UQUwgTUlOID4gNjAgT04gRkFJVCBMRSBDQUxDVUxcclxuICAgICAgICB3aGlsZSh0b3RhbE1pbnV0ZXMgPiA1OSl7XHJcbiAgICAgICAgICAgIHRvdGFsSG91cnMgKys7XHJcbiAgICAgICAgICAgIHRvdGFsTWludXRlcyA9IHRvdGFsTWludXRlcyAtIDYwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0b3RhbE1pbnV0ZXMgPCAxMCl7XHJcbiAgICAgICAgICAgIHRvdGFsTWludXRlcyA9IGAwJHt0b3RhbE1pbnV0ZXN9YFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHRvdGFsID0gYCR7dG90YWxIb3Vyc31oJHt0b3RhbE1pbnV0ZXN9YFxyXG4gICAgICAgIC8vIE9OIEFGRklDSEUgTEUgVE9UQUxcclxuICAgICAgICByZXR1cm4gdG90YWxcclxuICAgIH1cclxuICAgIGlmKGRhdGEubGVuZ3RoID09IDEpe1xyXG4gICAgICAgIHJldHVybiBkYXRhWzBdXHJcbiAgICB9XHJcblxyXG4gICAgXHJcbn0iLCJleHBvcnQgZnVuY3Rpb24gc3VtUGF5KGRhdGEpe1xyXG4gICAgaWYoZGF0YS5sZW5ndGggPiAxKXtcclxuICAgICAgICAvLyBvbiBjYWxjdWwgbGUgdG90YWwgZGVzIGV1cm9zXHJcbiAgICAgICAgZGF0YS5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICAgICAgaWYoZWwgPT0gJycgfHwgZWwgPT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgICAgIGxldCBpZHggPSBkYXRhLmluZGV4T2YoZWwpO1xyXG4gICAgICAgICAgICAgICAgaWYoaWR4ICE9PSAtMSl7IFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFbaWR4XSA9ICcwJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBsZXQgZXVyb3MgPSBkYXRhLm1hcChlbCA9PiBlbC5zcGxpdCgnLicpWzBdKTtcclxuICAgICAgICBldXJvcyA9IGV1cm9zLm1hcChlbCA9PiBwYXJzZUludChlbCkpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGV1cm9zKVxyXG4gICAgICAgIGxldCB0b3RhbEV1cm9zID0gMDtcclxuICAgICAgICBpZihldXJvcyAhPSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICB0b3RhbEV1cm9zID0gZXVyb3MucmVkdWNlKChhLCBiKSA9PiBhICsgYik7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgLy8gcHVpcyBsZSB0b3RhbCBkZXMgY2VudGltZXNcclxuXHJcbiAgICAgICAgLy8gY2hlY2sgaWYgdGhlcmUgaXMgYSBjZW50XHJcbiAgICAgICAgLy8gY2hlY2sgaWYgdGhlcmVzIGEgY2VudFxyXG4gICAgICAgIGxldCBjZW50cyA9IGRhdGEubWFwKGVsID0+IGVsLnNwbGl0KCcuJylbMV0pO1xyXG4gICAgICAgIGxldCB0b3RhbENlbnRzID0gbnVsbDtcclxuXHJcbiAgICAgICAgY2VudHMuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgICAgIGlmKGVsID09IHVuZGVmaW5lZCl7IFxyXG4gICAgICAgICAgICAgICAgbGV0IGlkeCA9IGNlbnRzLmluZGV4T2YoZWwpOyBcclxuICAgICAgICAgICAgICAgIGlmKGlkeCAhPT0gLTEpeyBcclxuICAgICAgICAgICAgICAgICAgICBjZW50c1tpZHhdID0gJzAnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAvLyBPbiBlbmxldmUgbGVzIHZhbGV1cnMgTmFOXHJcbiAgICAgICAgY2VudHMgPSBjZW50cy5maWx0ZXIoZWwgPT4gIWlzTmFOKGVsKSk7XHJcblxyXG4gICAgICAgIGNlbnRzID0gY2VudHMubWFwKGVsID0+IHBhcnNlSW50KGVsKSk7XHJcbiAgICAgICAgdG90YWxDZW50cyA9IGNlbnRzLnJlZHVjZSgoYSwgYikgPT4gYSArIGIpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRvdGFsQ2VudHMpOyBcclxuICAgICAgICAvLyBvbiBham91dGUgbGVzIGNlbnRpbWVzIGF1IHRvdGFsIGRlcyBldXJvc1xyXG4gICAgICAgIHdoaWxlKHRvdGFsQ2VudHMgPiA5OSl7XHJcbiAgICAgICAgICAgICAgICB0b3RhbEV1cm9zICsrO1xyXG4gICAgICAgICAgICAgICAgdG90YWxDZW50cyA9IHRvdGFsQ2VudHMgLSAxMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGxldCB0b3RhbFN1bSA9IGAke3RvdGFsRXVyb3N9LiR7dG90YWxDZW50c31gXHJcbiAgICAgICAgLy8gaWYodG90YWxDZW50cyA9PSAwKXtcclxuICAgICAgICAvLyAgICAgdG90YWxTdW0gPSBgJHt0b3RhbEV1cm9zfWBcclxuICAgICAgICAvLyB9XHJcblxyXG5cclxuICAgICAgICByZXR1cm4gdG90YWxTdW07XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICAgIHJldHVybiBkYXRhWzBdO1xyXG4gICAgfVxyXG59IiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBhQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1jYWxsYWJsZScpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIEluZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QnKTtcbnZhciBsZW5ndGhPZkFycmF5TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9sZW5ndGgtb2YtYXJyYXktbGlrZScpO1xuXG52YXIgVHlwZUVycm9yID0gZ2xvYmFsLlR5cGVFcnJvcjtcblxuLy8gYEFycmF5LnByb3RvdHlwZS57IHJlZHVjZSwgcmVkdWNlUmlnaHQgfWAgbWV0aG9kcyBpbXBsZW1lbnRhdGlvblxudmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uIChJU19SSUdIVCkge1xuICByZXR1cm4gZnVuY3Rpb24gKHRoYXQsIGNhbGxiYWNrZm4sIGFyZ3VtZW50c0xlbmd0aCwgbWVtbykge1xuICAgIGFDYWxsYWJsZShjYWxsYmFja2ZuKTtcbiAgICB2YXIgTyA9IHRvT2JqZWN0KHRoYXQpO1xuICAgIHZhciBzZWxmID0gSW5kZXhlZE9iamVjdChPKTtcbiAgICB2YXIgbGVuZ3RoID0gbGVuZ3RoT2ZBcnJheUxpa2UoTyk7XG4gICAgdmFyIGluZGV4ID0gSVNfUklHSFQgPyBsZW5ndGggLSAxIDogMDtcbiAgICB2YXIgaSA9IElTX1JJR0hUID8gLTEgOiAxO1xuICAgIGlmIChhcmd1bWVudHNMZW5ndGggPCAyKSB3aGlsZSAodHJ1ZSkge1xuICAgICAgaWYgKGluZGV4IGluIHNlbGYpIHtcbiAgICAgICAgbWVtbyA9IHNlbGZbaW5kZXhdO1xuICAgICAgICBpbmRleCArPSBpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGluZGV4ICs9IGk7XG4gICAgICBpZiAoSVNfUklHSFQgPyBpbmRleCA8IDAgOiBsZW5ndGggPD0gaW5kZXgpIHtcbiAgICAgICAgdGhyb3cgVHlwZUVycm9yKCdSZWR1Y2Ugb2YgZW1wdHkgYXJyYXkgd2l0aCBubyBpbml0aWFsIHZhbHVlJyk7XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAoO0lTX1JJR0hUID8gaW5kZXggPj0gMCA6IGxlbmd0aCA+IGluZGV4OyBpbmRleCArPSBpKSBpZiAoaW5kZXggaW4gc2VsZikge1xuICAgICAgbWVtbyA9IGNhbGxiYWNrZm4obWVtbywgc2VsZltpbmRleF0sIGluZGV4LCBPKTtcbiAgICB9XG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5yZWR1Y2VgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5yZWR1Y2VcbiAgbGVmdDogY3JlYXRlTWV0aG9kKGZhbHNlKSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5yZWR1Y2VSaWdodGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLnJlZHVjZXJpZ2h0XG4gIHJpZ2h0OiBjcmVhdGVNZXRob2QodHJ1ZSlcbn07XG4iLCJ2YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzc29mKGdsb2JhbC5wcm9jZXNzKSA9PSAncHJvY2Vzcyc7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkZmlsdGVyID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLmZpbHRlcjtcbnZhciBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0Jyk7XG5cbnZhciBIQVNfU1BFQ0lFU19TVVBQT1JUID0gYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCgnZmlsdGVyJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuZmlsdGVyYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZpbHRlclxuLy8gd2l0aCBhZGRpbmcgc3VwcG9ydCBvZiBAQHNwZWNpZXNcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6ICFIQVNfU1BFQ0lFU19TVVBQT1JUIH0sIHtcbiAgZmlsdGVyOiBmdW5jdGlvbiBmaWx0ZXIoY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pIHtcbiAgICByZXR1cm4gJGZpbHRlcih0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJG1hcCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5tYXA7XG52YXIgYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydCcpO1xuXG52YXIgSEFTX1NQRUNJRVNfU1VQUE9SVCA9IGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQoJ21hcCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLm1hcGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5tYXBcbi8vIHdpdGggYWRkaW5nIHN1cHBvcnQgb2YgQEBzcGVjaWVzXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhSEFTX1NQRUNJRVNfU1VQUE9SVCB9LCB7XG4gIG1hcDogZnVuY3Rpb24gbWFwKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG4gICAgcmV0dXJuICRtYXAodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICRyZWR1Y2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktcmVkdWNlJykubGVmdDtcbnZhciBhcnJheU1ldGhvZElzU3RyaWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1pcy1zdHJpY3QnKTtcbnZhciBDSFJPTUVfVkVSU0lPTiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdjgtdmVyc2lvbicpO1xudmFyIElTX05PREUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLWlzLW5vZGUnKTtcblxudmFyIFNUUklDVF9NRVRIT0QgPSBhcnJheU1ldGhvZElzU3RyaWN0KCdyZWR1Y2UnKTtcbi8vIENocm9tZSA4MC04MiBoYXMgYSBjcml0aWNhbCBidWdcbi8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTEwNDk5ODJcbnZhciBDSFJPTUVfQlVHID0gIUlTX05PREUgJiYgQ0hST01FX1ZFUlNJT04gPiA3OSAmJiBDSFJPTUVfVkVSU0lPTiA8IDgzO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnJlZHVjZWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5yZWR1Y2VcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6ICFTVFJJQ1RfTUVUSE9EIHx8IENIUk9NRV9CVUcgfSwge1xuICByZWR1Y2U6IGZ1bmN0aW9uIHJlZHVjZShjYWxsYmFja2ZuIC8qICwgaW5pdGlhbFZhbHVlICovKSB7XG4gICAgdmFyIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgcmV0dXJuICRyZWR1Y2UodGhpcywgY2FsbGJhY2tmbiwgbGVuZ3RoLCBsZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsic3VtSG91cnMiLCJzdW1FdXJvcyIsInN1bVBheSIsImJlbmV2b2xhdERvbSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInJlbWJvdXJzZW1lbnREb20iLCJoZXVyZURvbSIsImRvbkRvbSIsInZhbG9yaXNlZXMiLCJkb25zIiwicmVtYm91cnNlbWVudCIsImJlbmV2b2xhdCIsImJhc2VIcmVmIiwiVVJMIiwiZW5kUG9pbnQiLCJ3aW5kb3ciLCJvbmxvYWQiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwiZm9yRWFjaCIsImVsIiwicHVzaCIsImhldXJlc1ZhbG9yaXNlZXMiLCJhUGF5ZXIiLCJkdXJlZSIsInRvdGFsX3ZhbG9yaXNlZSIsImlubmVySFRNTCIsInRvdGFsX3JlbWJvdXJzZW1lbnQiLCJ0b3RhbF9iZW5ldm9sYXQiLCJ0b3RhbF9kb25zIiwiZXJyb3IiLCJpbmRleCIsImluZGV4T2YiLCJldXJvcyIsIm1hcCIsInNwbGl0IiwicGFyc2VJbnQiLCJ0b3RhbEV1cm9zIiwicmVkdWNlIiwiYSIsImIiLCJjZW50cyIsImZpbHRlciIsImlzTmFOIiwidG90YWxDZW50cyIsInRvdGFsU3VtIiwidW5kZWZpbmVkIiwiaWR4IiwiaG91cnMiLCJ0b3RhbEhvdXJzIiwibWludXRlcyIsInRvdGFsTWludXRlcyIsInRvdGFsIl0sInNvdXJjZVJvb3QiOiIifQ==
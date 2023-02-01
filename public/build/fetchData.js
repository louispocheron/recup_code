(self["webpackChunk"] = self["webpackChunk"] || []).push([["fetchData"],{

/***/ "./assets/js/fetchData.js":
/*!********************************!*\
  !*** ./assets/js/fetchData.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _sumHours__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sumHours */ "./assets/js/sumHours.js");
/* harmony import */ var _sumEuros__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sumEuros */ "./assets/js/sumEuros.js");
/* harmony import */ var _sumPay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sumPay */ "./assets/js/sumPay.js");







var benevolatDom = document.querySelector('.benevolat-card');
var remboursementDom = document.querySelector('.remboursement-card');
var heureDom = document.querySelector(".heure-card");
var donDom = document.querySelector('.dons-card');
var valorisees = [];
var dons = [];
var remboursement = [];
var benevolat = [];
var baseHref = document.URL;
var endPoint = baseHref + '/ajax_endpoint';
console.log(endPoint);

window.onload = function () {
  axios.get(endPoint).then(function (response) {
    var data = response.data.data;

    if (data.length >= 1) {
      // console.log(data);
      data.forEach(function (el) {
        valorisees.push(el.heuresValorisees);
        dons.push(el.dons);
        remboursement.push(el.aPayer);
        benevolat.push(el.duree);
      }); // OK

      var total_valorisee = (0,_sumEuros__WEBPACK_IMPORTED_MODULE_5__.sumEuros)(valorisees);
      benevolatDom.innerHTML = total_valorisee + "€"; // OK

      var total_remboursement = (0,_sumPay__WEBPACK_IMPORTED_MODULE_6__.sumPay)(remboursement);
      remboursementDom.innerHTML = total_remboursement + "€";
      var total_benevolat = (0,_sumHours__WEBPACK_IMPORTED_MODULE_4__.sumHours)(benevolat);
      heureDom.innerHTML = total_benevolat; // console.log(total_remboursement);

      var total_dons = (0,_sumEuros__WEBPACK_IMPORTED_MODULE_5__.sumEuros)(dons);
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
}; // EVENT MODAL POUR SUPPRIMER USER ADMIN 


var modal = document.querySelector('.modal-adherer-del');
var trashUser = document.querySelectorAll('.delete-user');
var btnYes = document.querySelector('.btn-yes');
var btnNo = document.querySelector('.btn-no');

var openModal = function openModal() {
  modal.dataset.active = true;
};

var closeModal = function closeModal() {
  delete modal.dataset.active;
};

btnNo.addEventListener('click', function () {
  closeModal();
});
var userId;
var assocId;
trashUser.forEach(function (el) {
  el.addEventListener("click", function () {
    openModal();
    userId = el.dataset.id;
    assocId = el.dataset.assoc;
  });
});
btnYes.addEventListener('click', function (event) {
  event.preventDefault();
  axios.post("/admin/".concat(assocId, "/user/remove/").concat(userId)).then(function (res) {
    var trToDel = document.querySelector(".tr-".concat(userId));
    trToDel.remove();
    closeModal();
  });
});

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
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_export_js-node_modules_core-js_internals_is-constructor_js","vendors-node_modules_core-js_internals_advance-string-index_js-node_modules_core-js_internals-a3cf5d","vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-ffb95b","vendors-node_modules_core-js_modules_es_parse-int_js-node_modules_core-js_modules_es_string_s-03957f"], () => (__webpack_exec__("./assets/js/fetchData.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsd0NBQXdDO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUMxQ0EsY0FBYyxtQkFBTyxDQUFDLGlGQUEwQjtBQUNoRCxhQUFhLG1CQUFPLENBQUMsdUVBQXFCOztBQUUxQzs7Ozs7Ozs7Ozs7O0FDSGE7QUFDYixRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLGNBQWMsdUhBQThDO0FBQzVELG1DQUFtQyxtQkFBTyxDQUFDLDJIQUErQzs7QUFFMUY7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSSw0REFBNEQ7QUFDaEU7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDZFk7QUFDYixRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLFdBQVcsb0hBQTJDO0FBQ3RELG1DQUFtQyxtQkFBTyxDQUFDLDJIQUErQzs7QUFFMUY7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSSw0REFBNEQ7QUFDaEU7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDZFk7QUFDYixRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLGNBQWMsK0dBQXlDO0FBQ3ZELDBCQUEwQixtQkFBTyxDQUFDLHVHQUFxQztBQUN2RSxxQkFBcUIsbUJBQU8sQ0FBQyw2RkFBZ0M7QUFDN0QsY0FBYyxtQkFBTyxDQUFDLHVGQUE2Qjs7QUFFbkQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksb0VBQW9FO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9qcy9mZXRjaERhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3N1bUV1cm9zLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9zdW1Ib3Vycy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvc3VtUGF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1yZWR1Y2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2VuZ2luZS1pcy1ub2RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuZmlsdGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkubWFwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkucmVkdWNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN1bUhvdXJzIH0gZnJvbSBcIi4vc3VtSG91cnNcIjtcbmltcG9ydCB7IHN1bUV1cm9zIH0gZnJvbSBcIi4vc3VtRXVyb3NcIjtcbmltcG9ydCB7IHN1bVBheSB9IGZyb20gXCIuL3N1bVBheVwiO1xuXG5jb25zdCBiZW5ldm9sYXREb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmVuZXZvbGF0LWNhcmQnKTtcbmNvbnN0IHJlbWJvdXJzZW1lbnREb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVtYm91cnNlbWVudC1jYXJkJyk7XG5jb25zdCBoZXVyZURvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGV1cmUtY2FyZFwiKTtcbmNvbnN0IGRvbkRvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kb25zLWNhcmQnKTtcblxuXG5jb25zdCB2YWxvcmlzZWVzID0gW107XG5jb25zdCBkb25zID0gW107XG5jb25zdCByZW1ib3Vyc2VtZW50ID0gW107XG5jb25zdCBiZW5ldm9sYXQgPSBbXTtcblxuY29uc3QgYmFzZUhyZWYgPSBkb2N1bWVudC5VUkxcbmNvbnN0IGVuZFBvaW50ID0gYmFzZUhyZWYgKyAnL2FqYXhfZW5kcG9pbnQnXG5jb25zb2xlLmxvZyhlbmRQb2ludClcblxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcbiAgICBheGlvcy5nZXQoZW5kUG9pbnQpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSByZXNwb25zZS5kYXRhLmRhdGE7XG4gICAgICAgIGlmKGRhdGEubGVuZ3RoID49IDEpe1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICBkYXRhLmZvckVhY2goZWwgPT4ge1xuICAgICAgICAgICAgICAgIHZhbG9yaXNlZXMucHVzaChlbC5oZXVyZXNWYWxvcmlzZWVzKVxuICAgICAgICAgICAgICAgIGRvbnMucHVzaChlbC5kb25zKVxuICAgICAgICAgICAgICAgIHJlbWJvdXJzZW1lbnQucHVzaChlbC5hUGF5ZXIpXG4gICAgICAgICAgICAgICAgYmVuZXZvbGF0LnB1c2goZWwuZHVyZWUpXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAvLyBPS1xuICAgICAgICAgICAgY29uc3QgdG90YWxfdmFsb3Jpc2VlID0gc3VtRXVyb3ModmFsb3Jpc2VlcylcbiAgICAgICAgICAgIGJlbmV2b2xhdERvbS5pbm5lckhUTUwgPSB0b3RhbF92YWxvcmlzZWUgKyBcIuKCrFwiXG4gICAgXG4gICAgICAgICAgICAvLyBPS1xuICAgICAgICAgICAgY29uc3QgdG90YWxfcmVtYm91cnNlbWVudCA9IHN1bVBheShyZW1ib3Vyc2VtZW50KVxuICAgICAgICAgICAgcmVtYm91cnNlbWVudERvbS5pbm5lckhUTUwgPSB0b3RhbF9yZW1ib3Vyc2VtZW50ICsgXCLigqxcIlxuICAgIFxuICAgICAgICAgICAgY29uc3QgdG90YWxfYmVuZXZvbGF0ID0gc3VtSG91cnMoYmVuZXZvbGF0KTtcbiAgICAgICAgICAgIGhldXJlRG9tLmlubmVySFRNTCA9IHRvdGFsX2JlbmV2b2xhdFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codG90YWxfcmVtYm91cnNlbWVudCk7XG4gICAgICAgICAgICBjb25zdCB0b3RhbF9kb25zID0gc3VtRXVyb3MoZG9ucyk7XG4gICAgICAgICAgICBkb25Eb20uaW5uZXJIVE1MID0gdG90YWxfZG9ucyArIFwi4oKsXCJcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgYmVuZXZvbGF0RG9tLmlubmVySFRNTCA9IFwiMOKCrFwiXG4gICAgICAgICAgICByZW1ib3Vyc2VtZW50RG9tLmlubmVySFRNTCA9IFwiMOKCrFwiXG4gICAgICAgICAgICBoZXVyZURvbS5pbm5lckhUTUwgPSBcIjAwaDAwXCJcbiAgICAgICAgICAgIGRvbkRvbS5pbm5lckhUTUwgPSBcIjDigqxcIlxuICAgICAgICB9XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgIH0pXG59XG5cbi8vIEVWRU5UIE1PREFMIFBPVVIgU1VQUFJJTUVSIFVTRVIgQURNSU4gXG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1hZGhlcmVyLWRlbCcpO1xuY29uc3QgdHJhc2hVc2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlbGV0ZS11c2VyJyk7XG5jb25zdCBidG5ZZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLXllcycpXG5jb25zdCBidG5ObyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tbm8nKVxuXG5jb25zdCBvcGVuTW9kYWwgPSAoKSA9PiB7XG4gICAgbW9kYWwuZGF0YXNldC5hY3RpdmUgPSB0cnVlO1xufVxuXG5jb25zdCBjbG9zZU1vZGFsID0gKCkgPT4geyBcbiAgICBkZWxldGUgbW9kYWwuZGF0YXNldC5hY3RpdmVcbn1cblxuYnRuTm8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY2xvc2VNb2RhbCgpO1xufSlcblxuXG5cbmxldCB1c2VySWRcbmxldCBhc3NvY0lkXG50cmFzaFVzZXIuZm9yRWFjaChlbCA9PiB7IFxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7IFxuICAgICAgICBvcGVuTW9kYWwoKTtcbiAgICAgICAgdXNlcklkID0gZWwuZGF0YXNldC5pZFxuICAgICAgICBhc3NvY0lkID0gZWwuZGF0YXNldC5hc3NvY1xuICAgIH0pXG59KVxuIFxuYnRuWWVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBheGlvcy5wb3N0KGAvYWRtaW4vJHthc3NvY0lkfS91c2VyL3JlbW92ZS8ke3VzZXJJZH1gKS50aGVuKChyZXMpID0+IHsgXG4gICAgICAgIGNvbnN0IHRyVG9EZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAudHItJHt1c2VySWR9YClcbiAgICAgICAgdHJUb0RlbC5yZW1vdmUoKTtcbiAgICAgICAgY2xvc2VNb2RhbCgpO1xuICAgIH0pO1xufSlcblxuIiwiXHJcbmV4cG9ydCBmdW5jdGlvbiBzdW1FdXJvcyhkYXRhKXtcclxuICAgIGlmKGRhdGEubGVuZ3RoID4gMSl7XHJcbiAgICAgICAgLy8gb24gY2FsY3VsIGxlIHRvdGFsIGRlcyBldXJvc1xyXG5cclxuICAgICAgICAvLyBTSSBEQVRBIE5VTEwgT04gQ0hPUEUgU09OIElEWCBEQU5TIEFSUkFZIEVUIE9OIExFIFJFTVBMQUNFIEFWRUMgMCBFTiBTVFJJTkdcclxuICAgICAgICBkYXRhLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgICAgICBpZihlbCA9PSBudWxsKXtcclxuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IGRhdGEuaW5kZXhPZihlbCk7XHJcbiAgICAgICAgICAgICAgICBpZihpbmRleCAhPT0gLTEpe1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFbaW5kZXhdID0gJzAnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuXHJcbiAgICAgICAgbGV0IGV1cm9zID0gZGF0YS5tYXAoZWwgPT4gZWwuc3BsaXQoJy4nKVswXSk7XHJcbiAgICAgICAgZXVyb3MgPSBldXJvcy5tYXAoZWwgPT4gcGFyc2VJbnQoZWwpKTtcclxuICAgICAgICBsZXQgdG90YWxFdXJvcyA9IGV1cm9zLnJlZHVjZSgoYSwgYikgPT4gYSArIGIpO1xyXG4gICAgXHJcblxyXG4gICAgICAgIGxldCBjZW50cyA9IGRhdGEubWFwKGVsID0+IGVsLnNwbGl0KCcuJylbMV0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIE9uIGVubGV2ZSBsZXMgdmFsZXVycyBOYU5cclxuICAgICAgICBjZW50cyA9IGNlbnRzLmZpbHRlcihlbCA9PiAhaXNOYU4oZWwpKTtcclxuICAgICAgICBjZW50cyA9IGNlbnRzLm1hcChlbCA9PiBwYXJzZUludChlbCkpO1xyXG4gICAgICAgIGxldCB0b3RhbENlbnRzXHJcbiAgICAgICAgaWYoY2VudHMubGVuZ3RoID4gMSl7XHJcbiAgICAgICAgICAgIHRvdGFsQ2VudHMgPSBjZW50cy5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdG90YWxDZW50cyA9IDBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIG9uIGFqb3V0ZSBsZXMgY2VudGltZXMgYXUgdG90YWwgZGVzIGV1cm9zXHJcbiAgICB3aGlsZSh0b3RhbENlbnRzID4gOTkpe1xyXG4gICAgICAgICAgICB0b3RhbEV1cm9zICsrO1xyXG4gICAgICAgICAgICB0b3RhbENlbnRzID0gdG90YWxDZW50cyAtIDEwMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB0b3RhbFN1bSA9IGAke3RvdGFsRXVyb3N9LiR7dG90YWxDZW50c31gXHJcbiAgICAgICAgaWYodG90YWxDZW50cyA9PSAwKXtcclxuICAgICAgICAgICAgdG90YWxTdW0gPSBgJHt0b3RhbEV1cm9zfWBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0b3RhbFN1bTtcclxuICAgIH1cclxuICAgIGlmKGRhdGEubGVuZ3RoID09IDEgJiYgZGF0YVswXSAhPSBudWxsKXtcclxuICAgICAgICByZXR1cm4gZGF0YVswXTtcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgICAgcmV0dXJuICcwJ1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIHN1bUhvdXJzKGRhdGEpe1xyXG4gICAgaWYoZGF0YS5sZW5ndGggPj0gMSl7XHJcblxyXG5cclxuICAgICAgICBkYXRhLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgICAgICBpZihlbCA9PSAwIHx8IGVsID09IHVuZGVmaW5lZCl7IFxyXG4gICAgICAgICAgICAgICAgY29uc3QgaWR4ID0gZGF0YS5pbmRleE9mKGVsKTsgXHJcbiAgICAgICAgICAgICAgICBpZihpZHggIT0gLTEpe1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFbaWR4XSA9ICcwMGgwMCdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gT04gQ0hPUEUgTEEgUFJFTUlFUkUgUEFSVElFIERFIExBIERVUkVFXHJcbiAgICAgICAgbGV0IGhvdXJzID0gZGF0YS5tYXAoZWwgPT4gZWwuc3BsaXQoJ2gnKVswXSk7XHJcblxyXG4gICAgICAgIC8vIEVUIE9OIExBIENPTlZFUlRJRSBFTiBJTlRcclxuICAgICAgICBob3VycyA9IGhvdXJzLm1hcChlbCA9PiBwYXJzZUludChlbCkpO1xyXG5cclxuICAgICAgICAvLyBFVCBMQSBGT05DVElPTiBSRURVQ0UoKSBQT1VSIFNVTSBUT1VUIExFUyBFTFxyXG4gICAgICAgIGxldCB0b3RhbEhvdXJzID0gaG91cnMucmVkdWNlKChhLCBiKSA9PiBhICsgYik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gUEFSRUlMIFBPVVIgTUlOVVRFIE1UTlxyXG4gICAgICAgIGxldCBtaW51dGVzID0gZGF0YS5tYXAoZWwgPT4gZWwuc3BsaXQoJ2gnKVsxXS5zcGxpdCgnbScpWzBdKTtcclxuICAgICAgICBtaW51dGVzID0gbWludXRlcy5tYXAoZWwgPT4gcGFyc2VJbnQoZWwpKTtcclxuICAgICAgICBsZXQgdG90YWxNaW51dGVzID0gbWludXRlcy5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiKTtcclxuXHJcblxyXG4gICAgICAgIC8vIFNJIFRPVEFMIE1JTiA+IDYwIE9OIEZBSVQgTEUgQ0FMQ1VMXHJcbiAgICAgICAgd2hpbGUodG90YWxNaW51dGVzID4gNTkpe1xyXG4gICAgICAgICAgICB0b3RhbEhvdXJzICsrO1xyXG4gICAgICAgICAgICB0b3RhbE1pbnV0ZXMgPSB0b3RhbE1pbnV0ZXMgLSA2MDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodG90YWxNaW51dGVzIDwgMTApe1xyXG4gICAgICAgICAgICB0b3RhbE1pbnV0ZXMgPSBgMCR7dG90YWxNaW51dGVzfWBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB0b3RhbCA9IGAke3RvdGFsSG91cnN9aCR7dG90YWxNaW51dGVzfWBcclxuICAgICAgICAvLyBPTiBBRkZJQ0hFIExFIFRPVEFMXHJcbiAgICAgICAgcmV0dXJuIHRvdGFsXHJcbiAgICB9XHJcbiAgICBpZihkYXRhLmxlbmd0aCA9PSAxKXtcclxuICAgICAgICByZXR1cm4gZGF0YVswXVxyXG4gICAgfVxyXG5cclxuICAgIFxyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIHN1bVBheShkYXRhKXtcclxuICAgIGlmKGRhdGEubGVuZ3RoID4gMSl7XHJcbiAgICAgICAgLy8gb24gY2FsY3VsIGxlIHRvdGFsIGRlcyBldXJvc1xyXG4gICAgICAgIGRhdGEuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgICAgIGlmKGVsID09ICcnIHx8IGVsID09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICBsZXQgaWR4ID0gZGF0YS5pbmRleE9mKGVsKTtcclxuICAgICAgICAgICAgICAgIGlmKGlkeCAhPT0gLTEpeyBcclxuICAgICAgICAgICAgICAgICAgICBkYXRhW2lkeF0gPSAnMCdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgbGV0IGV1cm9zID0gZGF0YS5tYXAoZWwgPT4gZWwuc3BsaXQoJy4nKVswXSk7XHJcbiAgICAgICAgZXVyb3MgPSBldXJvcy5tYXAoZWwgPT4gcGFyc2VJbnQoZWwpKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhldXJvcylcclxuICAgICAgICBsZXQgdG90YWxFdXJvcyA9IDA7XHJcbiAgICAgICAgaWYoZXVyb3MgIT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgdG90YWxFdXJvcyA9IGV1cm9zLnJlZHVjZSgoYSwgYikgPT4gYSArIGIpO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIC8vIHB1aXMgbGUgdG90YWwgZGVzIGNlbnRpbWVzXHJcblxyXG4gICAgICAgIC8vIGNoZWNrIGlmIHRoZXJlIGlzIGEgY2VudFxyXG4gICAgICAgIC8vIGNoZWNrIGlmIHRoZXJlcyBhIGNlbnRcclxuICAgICAgICBsZXQgY2VudHMgPSBkYXRhLm1hcChlbCA9PiBlbC5zcGxpdCgnLicpWzFdKTtcclxuICAgICAgICBsZXQgdG90YWxDZW50cyA9IG51bGw7XHJcblxyXG4gICAgICAgIGNlbnRzLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgICAgICBpZihlbCA9PSB1bmRlZmluZWQpeyBcclxuICAgICAgICAgICAgICAgIGxldCBpZHggPSBjZW50cy5pbmRleE9mKGVsKTsgXHJcbiAgICAgICAgICAgICAgICBpZihpZHggIT09IC0xKXsgXHJcbiAgICAgICAgICAgICAgICAgICAgY2VudHNbaWR4XSA9ICcwJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLy8gT24gZW5sZXZlIGxlcyB2YWxldXJzIE5hTlxyXG4gICAgICAgIGNlbnRzID0gY2VudHMuZmlsdGVyKGVsID0+ICFpc05hTihlbCkpO1xyXG5cclxuICAgICAgICBjZW50cyA9IGNlbnRzLm1hcChlbCA9PiBwYXJzZUludChlbCkpO1xyXG4gICAgICAgIHRvdGFsQ2VudHMgPSBjZW50cy5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0b3RhbENlbnRzKTsgXHJcbiAgICAgICAgLy8gb24gYWpvdXRlIGxlcyBjZW50aW1lcyBhdSB0b3RhbCBkZXMgZXVyb3NcclxuICAgICAgICB3aGlsZSh0b3RhbENlbnRzID4gOTkpe1xyXG4gICAgICAgICAgICAgICAgdG90YWxFdXJvcyArKztcclxuICAgICAgICAgICAgICAgIHRvdGFsQ2VudHMgPSB0b3RhbENlbnRzIC0gMTA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBsZXQgdG90YWxTdW0gPSBgJHt0b3RhbEV1cm9zfS4ke3RvdGFsQ2VudHN9YFxyXG4gICAgICAgIC8vIGlmKHRvdGFsQ2VudHMgPT0gMCl7XHJcbiAgICAgICAgLy8gICAgIHRvdGFsU3VtID0gYCR7dG90YWxFdXJvc31gXHJcbiAgICAgICAgLy8gfVxyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIHRvdGFsU3VtO1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgICByZXR1cm4gZGF0YVswXTtcclxuICAgIH1cclxufSIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgYUNhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtY2FsbGFibGUnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciBJbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luZGV4ZWQtb2JqZWN0Jyk7XG52YXIgbGVuZ3RoT2ZBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UnKTtcblxudmFyIFR5cGVFcnJvciA9IGdsb2JhbC5UeXBlRXJyb3I7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUueyByZWR1Y2UsIHJlZHVjZVJpZ2h0IH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cbnZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbiAoSVNfUklHSFQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0aGF0LCBjYWxsYmFja2ZuLCBhcmd1bWVudHNMZW5ndGgsIG1lbW8pIHtcbiAgICBhQ2FsbGFibGUoY2FsbGJhY2tmbik7XG4gICAgdmFyIE8gPSB0b09iamVjdCh0aGF0KTtcbiAgICB2YXIgc2VsZiA9IEluZGV4ZWRPYmplY3QoTyk7XG4gICAgdmFyIGxlbmd0aCA9IGxlbmd0aE9mQXJyYXlMaWtlKE8pO1xuICAgIHZhciBpbmRleCA9IElTX1JJR0hUID8gbGVuZ3RoIC0gMSA6IDA7XG4gICAgdmFyIGkgPSBJU19SSUdIVCA/IC0xIDogMTtcbiAgICBpZiAoYXJndW1lbnRzTGVuZ3RoIDwgMikgd2hpbGUgKHRydWUpIHtcbiAgICAgIGlmIChpbmRleCBpbiBzZWxmKSB7XG4gICAgICAgIG1lbW8gPSBzZWxmW2luZGV4XTtcbiAgICAgICAgaW5kZXggKz0gaTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBpbmRleCArPSBpO1xuICAgICAgaWYgKElTX1JJR0hUID8gaW5kZXggPCAwIDogbGVuZ3RoIDw9IGluZGV4KSB7XG4gICAgICAgIHRocm93IFR5cGVFcnJvcignUmVkdWNlIG9mIGVtcHR5IGFycmF5IHdpdGggbm8gaW5pdGlhbCB2YWx1ZScpO1xuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKDtJU19SSUdIVCA/IGluZGV4ID49IDAgOiBsZW5ndGggPiBpbmRleDsgaW5kZXggKz0gaSkgaWYgKGluZGV4IGluIHNlbGYpIHtcbiAgICAgIG1lbW8gPSBjYWxsYmFja2ZuKG1lbW8sIHNlbGZbaW5kZXhdLCBpbmRleCwgTyk7XG4gICAgfVxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIGBBcnJheS5wcm90b3R5cGUucmVkdWNlYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUucmVkdWNlXG4gIGxlZnQ6IGNyZWF0ZU1ldGhvZChmYWxzZSksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUucmVkdWNlUmlnaHRgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5yZWR1Y2VyaWdodFxuICByaWdodDogY3JlYXRlTWV0aG9kKHRydWUpXG59O1xuIiwidmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3NvZihnbG9iYWwucHJvY2VzcykgPT0gJ3Byb2Nlc3MnO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJGZpbHRlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5maWx0ZXI7XG52YXIgYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydCcpO1xuXG52YXIgSEFTX1NQRUNJRVNfU1VQUE9SVCA9IGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQoJ2ZpbHRlcicpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmZpbHRlcmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5maWx0ZXJcbi8vIHdpdGggYWRkaW5nIHN1cHBvcnQgb2YgQEBzcGVjaWVzXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhSEFTX1NQRUNJRVNfU1VQUE9SVCB9LCB7XG4gIGZpbHRlcjogZnVuY3Rpb24gZmlsdGVyKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG4gICAgcmV0dXJuICRmaWx0ZXIodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICRtYXAgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykubWFwO1xudmFyIGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQnKTtcblxudmFyIEhBU19TUEVDSUVTX1NVUFBPUlQgPSBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0KCdtYXAnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5tYXBgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUubWFwXG4vLyB3aXRoIGFkZGluZyBzdXBwb3J0IG9mIEBAc3BlY2llc1xuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogIUhBU19TUEVDSUVTX1NVUFBPUlQgfSwge1xuICBtYXA6IGZ1bmN0aW9uIG1hcChjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuICAgIHJldHVybiAkbWFwKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkcmVkdWNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXJlZHVjZScpLmxlZnQ7XG52YXIgYXJyYXlNZXRob2RJc1N0cmljdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaXMtc3RyaWN0Jyk7XG52YXIgQ0hST01FX1ZFUlNJT04gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXY4LXZlcnNpb24nKTtcbnZhciBJU19OT0RFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS1pcy1ub2RlJyk7XG5cbnZhciBTVFJJQ1RfTUVUSE9EID0gYXJyYXlNZXRob2RJc1N0cmljdCgncmVkdWNlJyk7XG4vLyBDaHJvbWUgODAtODIgaGFzIGEgY3JpdGljYWwgYnVnXG4vLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD0xMDQ5OTgyXG52YXIgQ0hST01FX0JVRyA9ICFJU19OT0RFICYmIENIUk9NRV9WRVJTSU9OID4gNzkgJiYgQ0hST01FX1ZFUlNJT04gPCA4MztcblxuLy8gYEFycmF5LnByb3RvdHlwZS5yZWR1Y2VgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUucmVkdWNlXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhU1RSSUNUX01FVEhPRCB8fCBDSFJPTUVfQlVHIH0sIHtcbiAgcmVkdWNlOiBmdW5jdGlvbiByZWR1Y2UoY2FsbGJhY2tmbiAvKiAsIGluaXRpYWxWYWx1ZSAqLykge1xuICAgIHZhciBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIHJldHVybiAkcmVkdWNlKHRoaXMsIGNhbGxiYWNrZm4sIGxlbmd0aCwgbGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbInN1bUhvdXJzIiwic3VtRXVyb3MiLCJzdW1QYXkiLCJiZW5ldm9sYXREb20iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJyZW1ib3Vyc2VtZW50RG9tIiwiaGV1cmVEb20iLCJkb25Eb20iLCJ2YWxvcmlzZWVzIiwiZG9ucyIsInJlbWJvdXJzZW1lbnQiLCJiZW5ldm9sYXQiLCJiYXNlSHJlZiIsIlVSTCIsImVuZFBvaW50IiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsIm9ubG9hZCIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImxlbmd0aCIsImZvckVhY2giLCJlbCIsInB1c2giLCJoZXVyZXNWYWxvcmlzZWVzIiwiYVBheWVyIiwiZHVyZWUiLCJ0b3RhbF92YWxvcmlzZWUiLCJpbm5lckhUTUwiLCJ0b3RhbF9yZW1ib3Vyc2VtZW50IiwidG90YWxfYmVuZXZvbGF0IiwidG90YWxfZG9ucyIsImVycm9yIiwibW9kYWwiLCJ0cmFzaFVzZXIiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYnRuWWVzIiwiYnRuTm8iLCJvcGVuTW9kYWwiLCJkYXRhc2V0IiwiYWN0aXZlIiwiY2xvc2VNb2RhbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ1c2VySWQiLCJhc3NvY0lkIiwiaWQiLCJhc3NvYyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJwb3N0IiwicmVzIiwidHJUb0RlbCIsInJlbW92ZSIsImluZGV4IiwiaW5kZXhPZiIsImV1cm9zIiwibWFwIiwic3BsaXQiLCJwYXJzZUludCIsInRvdGFsRXVyb3MiLCJyZWR1Y2UiLCJhIiwiYiIsImNlbnRzIiwiZmlsdGVyIiwiaXNOYU4iLCJ0b3RhbENlbnRzIiwidG90YWxTdW0iLCJ1bmRlZmluZWQiLCJpZHgiLCJob3VycyIsInRvdGFsSG91cnMiLCJtaW51dGVzIiwidG90YWxNaW51dGVzIiwidG90YWwiXSwic291cmNlUm9vdCI6IiJ9
(self["webpackChunk"] = self["webpackChunk"] || []).push([["superAdmin"],{

/***/ "./assets/js/superAdmin.js":
/*!*********************************!*\
  !*** ./assets/js/superAdmin.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");

console.log("superAdmin");
var modal = document.querySelector('.modal-adherer');
var delUser = document.querySelector('.trash-user');
var modal2 = document.querySelector('.modal-adherer-del');
var btnNo = document.querySelector('.btn-no');
var btnYes = document.querySelector('.btn-yes');
var buttonForModal = document.querySelectorAll('.change-admin-btn');

var openModal = function openModal() {
  modal.dataset.active = true;
};

var closeModal = function closeModal() {
  delete modal.dataset.active;
};

btnNo.addEventListener('click', function () {
  return closeModal();
});
var index;
buttonForModal.forEach(function (el, idx) {
  el.addEventListener('click', function () {
    openModal();
    index = idx;
  });
});
btnYes.addEventListener('click', function (event) {
  // event.preventDefault();
  var id = buttonForModal[index].dataset.id;
  var baseHref = document.URL;
  var endPoint = "".concat(baseHref, "/").concat(id, "/endpoint");
  axios.post(endPoint).then(function (response) {
    console.log(response);
    closeModal();
    Toastify({
      text: "Administrateur bien changé !",
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
  })["catch"](function (error) {
    console.log(error);
  });
});
delUser.addEventListener('click', function () {
  console.log("clicked trash");
});
console.log('test dqsdsq');

/***/ }),

/***/ "./node_modules/core-js/internals/array-method-is-strict.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-is-strict.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call -- required for testing
    method.call(null, argument || function () { return 1; }, 1);
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-species-constructor.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/internals/array-species-constructor.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var isConstructor = __webpack_require__(/*! ../internals/is-constructor */ "./node_modules/core-js/internals/is-constructor.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');
var Array = global.Array;

// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (isConstructor(C) && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-species-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/array-species-create.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arraySpeciesConstructor = __webpack_require__(/*! ../internals/array-species-constructor */ "./node_modules/core-js/internals/array-species-constructor.js");

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-property.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/create-property.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ "./node_modules/core-js/internals/to-property-key.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = function (object, key, value) {
  var propertyKey = toPropertyKey(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-array.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/is-array.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) == 'Array';
};


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_export_js-node_modules_core-js_internals_is-constructor_js","vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-ffb95b"], () => (__webpack_exec__("./assets/js/superAdmin.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVksYUFBWjs7Ozs7Ozs7Ozs7QUM3RGE7QUFDYixZQUFZLG1CQUFPLENBQUMscUVBQW9COztBQUV4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxXQUFXO0FBQzNELEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7QUNUQSxhQUFhLG1CQUFPLENBQUMsdUVBQXFCO0FBQzFDLGNBQWMsbUJBQU8sQ0FBQywyRUFBdUI7QUFDN0Msb0JBQW9CLG1CQUFPLENBQUMsdUZBQTZCO0FBQ3pELGVBQWUsbUJBQU8sQ0FBQyw2RUFBd0I7QUFDL0Msc0JBQXNCLG1CQUFPLENBQUMsNkZBQWdDOztBQUU5RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjs7Ozs7Ozs7Ozs7QUN0QkEsOEJBQThCLG1CQUFPLENBQUMsNkdBQXdDOztBQUU5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNOYTtBQUNiLG9CQUFvQixtQkFBTyxDQUFDLHlGQUE4QjtBQUMxRCwyQkFBMkIsbUJBQU8sQ0FBQyx1R0FBcUM7QUFDeEUsK0JBQStCLG1CQUFPLENBQUMsK0dBQXlDOztBQUVoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1RBLGNBQWMsbUJBQU8sQ0FBQyxpRkFBMEI7O0FBRWhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9qcy9zdXBlckFkbWluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1tZXRob2QtaXMtc3RyaWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1zcGVjaWVzLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1hcnJheS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zb2xlLmxvZyhcInN1cGVyQWRtaW5cIik7XHJcblxyXG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1hZGhlcmVyJyk7XHJcbmNvbnN0IGRlbFVzZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHJhc2gtdXNlcicpO1xyXG5jb25zdCBtb2RhbDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtYWRoZXJlci1kZWwnKTtcclxuY29uc3QgYnRuTm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLW5vJyk7XHJcbmNvbnN0IGJ0blllcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4teWVzJyk7XHJcbmNvbnN0IGJ1dHRvbkZvck1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoYW5nZS1hZG1pbi1idG4nKTtcclxuXHJcbmNvbnN0IG9wZW5Nb2RhbCA9ICgpID0+IHtcclxuICAgICBtb2RhbC5kYXRhc2V0LmFjdGl2ZSA9IHRydWU7XHJcbn1cclxuY29uc3QgY2xvc2VNb2RhbCA9ICgpID0+IHtcclxuICAgIGRlbGV0ZSBtb2RhbC5kYXRhc2V0LmFjdGl2ZVxyXG59XHJcblxyXG5idG5Oby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNsb3NlTW9kYWwoKSk7XHJcblxyXG5sZXQgaW5kZXhcclxuYnV0dG9uRm9yTW9kYWwuZm9yRWFjaCgoZWwsIGlkeCkgPT4ge1xyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgb3Blbk1vZGFsKCk7XHJcbiAgICAgICAgaW5kZXggPSBpZHhcclxuICAgIH0pXHJcbn0pXHJcblxyXG5idG5ZZXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgIC8vIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBpZCA9IGJ1dHRvbkZvck1vZGFsW2luZGV4XS5kYXRhc2V0LmlkO1xyXG4gICAgY29uc3QgYmFzZUhyZWYgPSBkb2N1bWVudC5VUkw7XHJcbiAgICBjb25zdCBlbmRQb2ludCA9IGAke2Jhc2VIcmVmfS8ke2lkfS9lbmRwb2ludGA7XHJcbiAgICBcclxuICAgIGF4aW9zLnBvc3QoZW5kUG9pbnQpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgIGNsb3NlTW9kYWwoKTtcclxuICAgICAgICAgVG9hc3RpZnkoe1xyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJBZG1pbmlzdHJhdGV1ciBiaWVuIGNoYW5nw6kgIVwiLFxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDUwMDAsXHJcbiAgICAgICAgICAgICAgICBuZXdXaW5kb3c6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjbG9zZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGdyYXZpdHk6IFwidG9wXCIsIC8vIGB0b3BgIG9yIGBib3R0b21gXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJyaWdodFwiLCAvLyBgbGVmdGAsIGBjZW50ZXJgIG9yIGByaWdodGBcclxuICAgICAgICAgICAgICAgIHN0b3BPbkZvY3VzOiB0cnVlLCAvLyBQcmV2ZW50cyBkaXNtaXNzaW5nIG9mIHRvYXN0IG9uIGhvdmVyXHJcbiAgICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwibGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDBiMDliLCAjOTZjOTNkKVwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uKCl7fVxyXG4gICAgICAgICAgICB9KS5zaG93VG9hc3QoKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfSlcclxufSlcclxuXHJcbmRlbFVzZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcclxuICAgIGNvbnNvbGUubG9nKFwiY2xpY2tlZCB0cmFzaFwiKVxyXG59KVxyXG5cclxuXHJcblxyXG5cclxuY29uc29sZS5sb2coJ3Rlc3QgZHFzZHNxJyk7IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE1FVEhPRF9OQU1FLCBhcmd1bWVudCkge1xuICB2YXIgbWV0aG9kID0gW11bTUVUSE9EX05BTUVdO1xuICByZXR1cm4gISFtZXRob2QgJiYgZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2VsZXNzLWNhbGwgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgICBtZXRob2QuY2FsbChudWxsLCBhcmd1bWVudCB8fCBmdW5jdGlvbiAoKSB7IHJldHVybiAxOyB9LCAxKTtcbiAgfSk7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWFycmF5Jyk7XG52YXIgaXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jb25zdHJ1Y3RvcicpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgU1BFQ0lFUyA9IHdlbGxLbm93blN5bWJvbCgnc3BlY2llcycpO1xudmFyIEFycmF5ID0gZ2xvYmFsLkFycmF5O1xuXG4vLyBhIHBhcnQgb2YgYEFycmF5U3BlY2llc0NyZWF0ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5c3BlY2llc2NyZWF0ZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3JpZ2luYWxBcnJheSkge1xuICB2YXIgQztcbiAgaWYgKGlzQXJyYXkob3JpZ2luYWxBcnJheSkpIHtcbiAgICBDID0gb3JpZ2luYWxBcnJheS5jb25zdHJ1Y3RvcjtcbiAgICAvLyBjcm9zcy1yZWFsbSBmYWxsYmFja1xuICAgIGlmIChpc0NvbnN0cnVjdG9yKEMpICYmIChDID09PSBBcnJheSB8fCBpc0FycmF5KEMucHJvdG90eXBlKSkpIEMgPSB1bmRlZmluZWQ7XG4gICAgZWxzZSBpZiAoaXNPYmplY3QoQykpIHtcbiAgICAgIEMgPSBDW1NQRUNJRVNdO1xuICAgICAgaWYgKEMgPT09IG51bGwpIEMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9IHJldHVybiBDID09PSB1bmRlZmluZWQgPyBBcnJheSA6IEM7XG59O1xuIiwidmFyIGFycmF5U3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXNwZWNpZXMtY29uc3RydWN0b3InKTtcblxuLy8gYEFycmF5U3BlY2llc0NyZWF0ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5c3BlY2llc2NyZWF0ZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3JpZ2luYWxBcnJheSwgbGVuZ3RoKSB7XG4gIHJldHVybiBuZXcgKGFycmF5U3BlY2llc0NvbnN0cnVjdG9yKG9yaWdpbmFsQXJyYXkpKShsZW5ndGggPT09IDAgPyAwIDogbGVuZ3RoKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgdG9Qcm9wZXJ0eUtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcm9wZXJ0eS1rZXknKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICB2YXIgcHJvcGVydHlLZXkgPSB0b1Byb3BlcnR5S2V5KGtleSk7XG4gIGlmIChwcm9wZXJ0eUtleSBpbiBvYmplY3QpIGRlZmluZVByb3BlcnR5TW9kdWxlLmYob2JqZWN0LCBwcm9wZXJ0eUtleSwgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDAsIHZhbHVlKSk7XG4gIGVsc2Ugb2JqZWN0W3Byb3BlcnR5S2V5XSA9IHZhbHVlO1xufTtcbiIsInZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG5cbi8vIGBJc0FycmF5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtaXNhcnJheVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWFycmF5LWlzYXJyYXkgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkoYXJndW1lbnQpIHtcbiAgcmV0dXJuIGNsYXNzb2YoYXJndW1lbnQpID09ICdBcnJheSc7XG59O1xuIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJtb2RhbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImRlbFVzZXIiLCJtb2RhbDIiLCJidG5ObyIsImJ0blllcyIsImJ1dHRvbkZvck1vZGFsIiwicXVlcnlTZWxlY3RvckFsbCIsIm9wZW5Nb2RhbCIsImRhdGFzZXQiLCJhY3RpdmUiLCJjbG9zZU1vZGFsIiwiYWRkRXZlbnRMaXN0ZW5lciIsImluZGV4IiwiZm9yRWFjaCIsImVsIiwiaWR4IiwiZXZlbnQiLCJpZCIsImJhc2VIcmVmIiwiVVJMIiwiZW5kUG9pbnQiLCJheGlvcyIsInBvc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJUb2FzdGlmeSIsInRleHQiLCJkdXJhdGlvbiIsIm5ld1dpbmRvdyIsImNsb3NlIiwiZ3Jhdml0eSIsInBvc2l0aW9uIiwic3RvcE9uRm9jdXMiLCJzdHlsZSIsImJhY2tncm91bmQiLCJvbkNsaWNrIiwic2hvd1RvYXN0IiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9
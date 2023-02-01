(self["webpackChunk"] = self["webpackChunk"] || []).push([["deleteActionSuperAdmin"],{

/***/ "./assets/js/deleteActionSuperAdmin.js":
/*!*********************************************!*\
  !*** ./assets/js/deleteActionSuperAdmin.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");

// EVENT POUR SUPPRIMER UN UTILISATEUR : 
var supprAction = document.querySelectorAll('.trash-action-user');
var btnYesAction = document.querySelector('.btn-yes');
var modal = document.querySelector('.modal-adherer');
var btnNo = document.querySelector('.btn-no');

var openModal = function openModal() {
  modal.dataset.active = true;
};

var closeModal = function closeModal() {
  delete modal.dataset.active;
};

var id;
supprAction.forEach(function (el, idx) {
  el.addEventListener('click', function () {
    openModal();
    id = el.dataset.id;
  });
});
btnYesAction.addEventListener('click', function (event) {
  event.preventDefault();
  var baseHref = document.URL;
  var endPoint = "".concat(baseHref, "/delete/").concat(id);
  axios.post(endPoint).then(function (response) {
    var trToDelete = document.querySelector(".tr-".concat(id));
    trToDelete.remove();
    closeModal();
    Toastify({
      text: "action bien supprimé",
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
btnNo.addEventListener('click', function () {
  closeModal();
});

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
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_export_js-node_modules_core-js_internals_is-constructor_js","vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-ffb95b"], () => (__webpack_exec__("./assets/js/deleteActionSuperAdmin.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QXdCO0FBQy9DLHNCQUFzQixtQkFBTyxDQUFDLDZGQUFnQzs7QUFFOUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7Ozs7Ozs7Ozs7O0FDdEJBLDhCQUE4QixtQkFBTyxDQUFDLDZHQUF3Qzs7QUFFOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDTmE7QUFDYixvQkFBb0IsbUJBQU8sQ0FBQyx5RkFBOEI7QUFDMUQsMkJBQTJCLG1CQUFPLENBQUMsdUdBQXFDO0FBQ3hFLCtCQUErQixtQkFBTyxDQUFDLCtHQUF5Qzs7QUFFaEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNUQSxjQUFjLG1CQUFPLENBQUMsaUZBQTBCOztBQUVoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZGVsZXRlQWN0aW9uU3VwZXJBZG1pbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWlzLXN0cmljdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktc3BlY2llcy1jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktc3BlY2llcy1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG4vLyBFVkVOVCBQT1VSIFNVUFBSSU1FUiBVTiBVVElMSVNBVEVVUiA6IFxuY29uc3Qgc3VwcHJBY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudHJhc2gtYWN0aW9uLXVzZXInKTtcbmNvbnN0IGJ0blllc0FjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4teWVzJyk7XG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1hZGhlcmVyJyk7XG5jb25zdCBidG5ObyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tbm8nKTtcblxuXG5jb25zdCBvcGVuTW9kYWwgPSAoKSA9PiB7XG4gICAgIG1vZGFsLmRhdGFzZXQuYWN0aXZlID0gdHJ1ZTtcbn1cbmNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiB7XG4gICAgZGVsZXRlIG1vZGFsLmRhdGFzZXQuYWN0aXZlXG59XG5cblxubGV0IGlkXG5zdXBwckFjdGlvbi5mb3JFYWNoKChlbCwgaWR4KSA9PiB7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICBvcGVuTW9kYWwoKTtcbiAgICAgICAgIGlkID0gZWwuZGF0YXNldC5pZFxuICAgIH0pXG59KVxuXG5idG5ZZXNBY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyBcbiAgICBjb25zdCBiYXNlSHJlZiA9IGRvY3VtZW50LlVSTDtcbiAgICBjb25zdCBlbmRQb2ludCA9IGAke2Jhc2VIcmVmfS9kZWxldGUvJHtpZH1gO1xuXG4gICAgYXhpb3MucG9zdChlbmRQb2ludCkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgY29uc3QgdHJUb0RlbGV0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIGAudHItJHtpZH1gKTtcbiAgICAgICAgdHJUb0RlbGV0ZS5yZW1vdmUoKTtcbiAgICAgICAgY2xvc2VNb2RhbCgpO1xuICAgICAgICBUb2FzdGlmeSh7XG4gICAgICAgICAgICAgICAgdGV4dDogXCJhY3Rpb24gYmllbiBzdXBwcmltw6lcIixcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogNTAwMCxcbiAgICAgICAgICAgICAgICBuZXdXaW5kb3c6IHRydWUsXG4gICAgICAgICAgICAgICAgY2xvc2U6IHRydWUsXG4gICAgICAgICAgICAgICAgZ3Jhdml0eTogXCJ0b3BcIiwgLy8gYHRvcGAgb3IgYGJvdHRvbWBcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJyaWdodFwiLCAvLyBgbGVmdGAsIGBjZW50ZXJgIG9yIGByaWdodGBcbiAgICAgICAgICAgICAgICBzdG9wT25Gb2N1czogdHJ1ZSwgLy8gUHJldmVudHMgZGlzbWlzc2luZyBvZiB0b2FzdCBvbiBob3ZlclxuICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwibGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDBiMDliLCAjOTZjOTNkKVwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25DbGljazogZnVuY3Rpb24oKXt9XG4gICAgICAgICAgICB9KS5zaG93VG9hc3QoKTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHsgXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgIH0pXG59KTsgXG5cbmJ0bk5vLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNsb3NlTW9kYWwoKTtcbn0pXG4iLCIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTUVUSE9EX05BTUUsIGFyZ3VtZW50KSB7XG4gIHZhciBtZXRob2QgPSBbXVtNRVRIT0RfTkFNRV07XG4gIHJldHVybiAhIW1ldGhvZCAmJiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZWxlc3MtY2FsbCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuICAgIG1ldGhvZC5jYWxsKG51bGwsIGFyZ3VtZW50IHx8IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDE7IH0sIDEpO1xuICB9KTtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXknKTtcbnZhciBpc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNvbnN0cnVjdG9yJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBTUEVDSUVTID0gd2VsbEtub3duU3ltYm9sKCdzcGVjaWVzJyk7XG52YXIgQXJyYXkgPSBnbG9iYWwuQXJyYXk7XG5cbi8vIGEgcGFydCBvZiBgQXJyYXlTcGVjaWVzQ3JlYXRlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXlzcGVjaWVzY3JlYXRlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcmlnaW5hbEFycmF5KSB7XG4gIHZhciBDO1xuICBpZiAoaXNBcnJheShvcmlnaW5hbEFycmF5KSkge1xuICAgIEMgPSBvcmlnaW5hbEFycmF5LmNvbnN0cnVjdG9yO1xuICAgIC8vIGNyb3NzLXJlYWxtIGZhbGxiYWNrXG4gICAgaWYgKGlzQ29uc3RydWN0b3IoQykgJiYgKEMgPT09IEFycmF5IHx8IGlzQXJyYXkoQy5wcm90b3R5cGUpKSkgQyA9IHVuZGVmaW5lZDtcbiAgICBlbHNlIGlmIChpc09iamVjdChDKSkge1xuICAgICAgQyA9IENbU1BFQ0lFU107XG4gICAgICBpZiAoQyA9PT0gbnVsbCkgQyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH0gcmV0dXJuIEMgPT09IHVuZGVmaW5lZCA/IEFycmF5IDogQztcbn07XG4iLCJ2YXIgYXJyYXlTcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktc3BlY2llcy1jb25zdHJ1Y3RvcicpO1xuXG4vLyBgQXJyYXlTcGVjaWVzQ3JlYXRlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXlzcGVjaWVzY3JlYXRlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcmlnaW5hbEFycmF5LCBsZW5ndGgpIHtcbiAgcmV0dXJuIG5ldyAoYXJyYXlTcGVjaWVzQ29uc3RydWN0b3Iob3JpZ2luYWxBcnJheSkpKGxlbmd0aCA9PT0gMCA/IDAgOiBsZW5ndGgpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciB0b1Byb3BlcnR5S2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByb3BlcnR5LWtleScpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHZhciBwcm9wZXJ0eUtleSA9IHRvUHJvcGVydHlLZXkoa2V5KTtcbiAgaWYgKHByb3BlcnR5S2V5IGluIG9iamVjdCkgZGVmaW5lUHJvcGVydHlNb2R1bGUuZihvYmplY3QsIHByb3BlcnR5S2V5LCBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoMCwgdmFsdWUpKTtcbiAgZWxzZSBvYmplY3RbcHJvcGVydHlLZXldID0gdmFsdWU7XG59O1xuIiwidmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcblxuLy8gYElzQXJyYXlgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1pc2FycmF5XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tYXJyYXktaXNhcnJheSAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmd1bWVudCkge1xuICByZXR1cm4gY2xhc3NvZihhcmd1bWVudCkgPT0gJ0FycmF5Jztcbn07XG4iXSwibmFtZXMiOlsic3VwcHJBY3Rpb24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJidG5ZZXNBY3Rpb24iLCJxdWVyeVNlbGVjdG9yIiwibW9kYWwiLCJidG5ObyIsIm9wZW5Nb2RhbCIsImRhdGFzZXQiLCJhY3RpdmUiLCJjbG9zZU1vZGFsIiwiaWQiLCJmb3JFYWNoIiwiZWwiLCJpZHgiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImJhc2VIcmVmIiwiVVJMIiwiZW5kUG9pbnQiLCJheGlvcyIsInBvc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJ0clRvRGVsZXRlIiwicmVtb3ZlIiwiVG9hc3RpZnkiLCJ0ZXh0IiwiZHVyYXRpb24iLCJuZXdXaW5kb3ciLCJjbG9zZSIsImdyYXZpdHkiLCJwb3NpdGlvbiIsInN0b3BPbkZvY3VzIiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwib25DbGljayIsInNob3dUb2FzdCIsImVycm9yIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=
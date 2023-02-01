(self["webpackChunk"] = self["webpackChunk"] || []).push([["association"],{

/***/ "./assets/js/association.js":
/*!**********************************!*\
  !*** ./assets/js/association.js ***!
  \**********************************/
/***/ (() => {

var btnAdherer = document.querySelector('.btn-adherer');
var href = document.querySelector('.btnAdherer').href;
var hrefQuit = document.querySelector('.btnQuitter').href;
var modal = document.querySelector('.modal-adherer');
var modalUnfollow = document.querySelector('.modal-desadherer');
var btnNo = document.querySelector('.btn-no');
var btnYes = document.querySelector('.btn-yes');
var btnYesQuit = document.querySelector('.btn-yes-quit');
var btnNoQuit = document.querySelector('.btn-no-quit');
var btnQuit = document.querySelector('.btn-quitter');
var background = document.querySelector('.flex-me');

var openModal = function openModal() {
  modal.dataset.active = true;
  background.style.opacity = "0.4";
};

var closeModal = function closeModal() {
  delete modal.dataset.active;
  background.style.opacity = "1";
};

btnAdherer.addEventListener("click", function () {
  openModal();
});
btnNo.addEventListener("click", function () {
  closeModal();
});
btnYes.addEventListener('click', function (event) {
  event.preventDefault();
  axios.get(href).then(function (res) {
    if (res.data.adherer == true) {
      closeModal();
      Toastify({
        text: "Vous avez bien adhéré",
        duration: 3000,
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
        onClick: function onClick() {} // Callback after click

      }).showToast();
    } else {
      closeModal();
      Toastify({
        text: "Vous êtes déjà adhérent de l'association",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top",
        // `top` or `bottom`
        position: "right",
        // `left`, `center` or `right`
        stopOnFocus: true,
        // Prevents dismissing of toast on hover
        style: {
          // red as default
          background: "linear-gradient(315deg, #bbf0f3 0%, #f6d285 74%)"
        },
        onClick: function onClick() {} // Callback after click

      }).showToast();
    }
  })["catch"](function (err) {
    if (err.response.status === 403) {
      window.alert('Vous devez etre connectez pour adhérer a une association');
    } else {
      closeModal();
      Toastify({
        text: "une erreur est survenue, réessayez plus tard",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top",
        // `top` or `bottom`
        position: "right",
        // `left`, `center` or `right`
        stopOnFocus: true,
        // Prevents dismissing of toast on hover
        style: {
          // red as default
          background: ""
        },
        onClick: function onClick() {} // Callback after click

      }).showToast();
    }
  });
}); // console.log(modalUnfollow)
// POUR QUITTER UNE ASSOCIATION 

var openModalUnfollow = function openModalUnfollow() {
  modalUnfollow.dataset.active = true;
  background.style.opacity = "0.4";
};

var closeModalUnfollow = function closeModalUnfollow() {
  delete modalUnfollow.dataset.active;
  background.style.opacity = "1";
};

btnQuit.addEventListener('click', function () {
  openModalUnfollow();
});
btnNoQuit.addEventListener("click", function () {
  closeModalUnfollow();
});
btnYesQuit.addEventListener("click", function (event) {
  event.preventDefault();
  axios.get(hrefQuit).then(function (res) {
    var adherant = res.data.adherant;

    if (adherant) {
      closeModalUnfollow();
      Toastify({
        text: "Vous avez bien quitté l'association",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top",
        // `top` or `bottom`
        position: "right",
        // `left`, `center` or `right`
        stopOnFocus: true,
        // Prevents dismissing of toast on hover
        style: {
          // red as default
          background: "linear-gradient(315deg, #3f0d12 0%, #a71d31 74%)"
        },
        onClick: function onClick() {} // Callback after click

      }).showToast();
    } else {
      closeModalUnfollow();
      Toastify({
        text: "Vous n'êtes pas adherent de l'association",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top",
        // `top` or `bottom`
        position: "right",
        // `left`, `center` or `right`
        stopOnFocus: true,
        // Prevents dismissing of toast on hover
        style: {
          // red as default
          background: "linear-gradient(315deg, #bbf0f3 0%, #f6d285 74%)"
        },
        onClick: function onClick() {} // Callback after click

      }).showToast();
    }
  });
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./assets/js/association.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFRLEVBQUUsT0FOTDtBQU1jO0FBQ25CQyxRQUFBQSxXQUFXLEVBQUUsSUFQUjtBQU9jO0FBQ25CbkIsUUFBQUEsS0FBSyxFQUFFO0FBQ0Y7QUFDREosVUFBQUEsVUFBVSxFQUFFO0FBRlQsU0FSRjtBQVlMd0IsUUFBQUEsT0FBTyxFQUFFLG1CQUFVLENBQUUsQ0FaaEIsQ0FZaUI7O0FBWmpCLE9BQUQsQ0FBUixDQWFHQyxTQWJIO0FBY0gsS0FoQkQsTUFpQkk7QUFDQU8sTUFBQUEsa0JBQWtCO0FBQ2xCaEIsTUFBQUEsUUFBUSxDQUFDO0FBQ0xDLFFBQUFBLElBQUksRUFBRSwyQ0FERDtBQUVMQyxRQUFBQSxRQUFRLEVBQUUsSUFGTDtBQUdMQyxRQUFBQSxTQUFTLEVBQUUsSUFITjtBQUlMQyxRQUFBQSxLQUFLLEVBQUUsSUFKRjtBQUtMQyxRQUFBQSxPQUFPLEVBQUUsS0FMSjtBQUtXO0FBQ2hCQyxRQUFBQSxRQUFRLEVBQUUsT0FOTDtBQU1jO0FBQ25CQyxRQUFBQSxXQUFXLEVBQUUsSUFQUjtBQU9jO0FBQ25CbkIsUUFBQUEsS0FBSyxFQUFFO0FBQ0Y7QUFDREosVUFBQUEsVUFBVSxFQUFFO0FBRlQsU0FSRjtBQVlMd0IsUUFBQUEsT0FBTyxFQUFFLG1CQUFVLENBQUUsQ0FaaEIsQ0FZaUI7O0FBWmpCLE9BQUQsQ0FBUixDQWFHQyxTQWJIO0FBY0g7QUFDSixHQXBDRDtBQXFDSCxDQXZDRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hc3NvY2lhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBidG5BZGhlcmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1hZGhlcmVyJyk7XG5jb25zdCBocmVmID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bkFkaGVyZXInKS5ocmVmO1xuY29uc3QgaHJlZlF1aXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuUXVpdHRlcicpLmhyZWY7XG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1hZGhlcmVyJyk7XG5jb25zdCBtb2RhbFVuZm9sbG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWRlc2FkaGVyZXInKVxuY29uc3QgYnRuTm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLW5vJyk7XG5jb25zdCBidG5ZZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLXllcycpO1xuY29uc3QgYnRuWWVzUXVpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4teWVzLXF1aXQnKTtcbmNvbnN0IGJ0bk5vUXVpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tbm8tcXVpdCcpO1xuY29uc3QgYnRuUXVpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tcXVpdHRlcicpO1xuY29uc3QgYmFja2dyb3VuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mbGV4LW1lJyk7XG5cblxuXG5cbmNvbnN0IG9wZW5Nb2RhbCA9ICgpID0+IHtcbiAgICBtb2RhbC5kYXRhc2V0LmFjdGl2ZSA9IHRydWU7XG4gICAgYmFja2dyb3VuZC5zdHlsZS5vcGFjaXR5ID0gXCIwLjRcIjtcbn07XG5cbmNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiB7XG4gICAgZGVsZXRlIG1vZGFsLmRhdGFzZXQuYWN0aXZlO1xuICAgIGJhY2tncm91bmQuc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xuXG59O1xuXG5idG5BZGhlcmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgb3Blbk1vZGFsKCk7XG59KVxuXG5cbmJ0bk5vLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY2xvc2VNb2RhbCgpO1xufSlcblxuYnRuWWVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBheGlvcy5nZXQoaHJlZikudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGlmKHJlcy5kYXRhLmFkaGVyZXIgPT0gdHJ1ZSl7XG4gICAgICAgICAgICBjbG9zZU1vZGFsKCk7XG4gICAgICAgICAgICBUb2FzdGlmeSh7XG4gICAgICAgICAgICAgICAgdGV4dDogXCJWb3VzIGF2ZXogYmllbiBhZGjDqXLDqVwiLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAzMDAwLFxuICAgICAgICAgICAgICAgIG5ld1dpbmRvdzogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjbG9zZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBncmF2aXR5OiBcInRvcFwiLCAvLyBgdG9wYCBvciBgYm90dG9tYFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInJpZ2h0XCIsIC8vIGBsZWZ0YCwgYGNlbnRlcmAgb3IgYHJpZ2h0YFxuICAgICAgICAgICAgICAgIHN0b3BPbkZvY3VzOiB0cnVlLCAvLyBQcmV2ZW50cyBkaXNtaXNzaW5nIG9mIHRvYXN0IG9uIGhvdmVyXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCJsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMGIwOWIsICM5NmM5M2QpXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbkNsaWNrOiBmdW5jdGlvbigpe30gLy8gQ2FsbGJhY2sgYWZ0ZXIgY2xpY2tcbiAgICAgICAgICAgIH0pLnNob3dUb2FzdCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBjbG9zZU1vZGFsKClcbiAgICAgICAgICAgIFRvYXN0aWZ5KHtcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIlZvdXMgw6p0ZXMgZMOpasOgIGFkaMOpcmVudCBkZSBsJ2Fzc29jaWF0aW9uXCIsXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDMwMDAsXG4gICAgICAgICAgICAgICAgbmV3V2luZG93OiB0cnVlLFxuICAgICAgICAgICAgICAgIGNsb3NlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGdyYXZpdHk6IFwidG9wXCIsIC8vIGB0b3BgIG9yIGBib3R0b21gXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IFwicmlnaHRcIiwgLy8gYGxlZnRgLCBgY2VudGVyYCBvciBgcmlnaHRgXG4gICAgICAgICAgICAgICAgc3RvcE9uRm9jdXM6IHRydWUsIC8vIFByZXZlbnRzIGRpc21pc3Npbmcgb2YgdG9hc3Qgb24gaG92ZXJcbiAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgLy8gcmVkIGFzIGRlZmF1bHRcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCJsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjYmJmMGYzIDAlLCAjZjZkMjg1IDc0JSlcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uKCl7fSAvLyBDYWxsYmFjayBhZnRlciBjbGlja1xuICAgICAgICAgICAgfSkuc2hvd1RvYXN0KCk7XG4gICAgICAgIH1cbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGlmKGVyci5yZXNwb25zZS5zdGF0dXMgPT09IDQwMyl7XG4gICAgICAgICAgICB3aW5kb3cuYWxlcnQoJ1ZvdXMgZGV2ZXogZXRyZSBjb25uZWN0ZXogcG91ciBhZGjDqXJlciBhIHVuZSBhc3NvY2lhdGlvbicpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBjbG9zZU1vZGFsKCk7XG4gICAgICAgICAgICBUb2FzdGlmeSh7XG4gICAgICAgICAgICAgICAgdGV4dDogXCJ1bmUgZXJyZXVyIGVzdCBzdXJ2ZW51ZSwgcsOpZXNzYXlleiBwbHVzIHRhcmRcIixcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMzAwMCxcbiAgICAgICAgICAgICAgICBuZXdXaW5kb3c6IHRydWUsXG4gICAgICAgICAgICAgICAgY2xvc2U6IHRydWUsXG4gICAgICAgICAgICAgICAgZ3Jhdml0eTogXCJ0b3BcIiwgLy8gYHRvcGAgb3IgYGJvdHRvbWBcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJyaWdodFwiLCAvLyBgbGVmdGAsIGBjZW50ZXJgIG9yIGByaWdodGBcbiAgICAgICAgICAgICAgICBzdG9wT25Gb2N1czogdHJ1ZSwgLy8gUHJldmVudHMgZGlzbWlzc2luZyBvZiB0b2FzdCBvbiBob3ZlclxuICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAvLyByZWQgYXMgZGVmYXVsdFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBcIlwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25DbGljazogZnVuY3Rpb24oKXt9IC8vIENhbGxiYWNrIGFmdGVyIGNsaWNrXG4gICAgICAgICAgICB9KS5zaG93VG9hc3QoKTtcbiAgICAgICAgfVxuICAgIH0pXG59KVxuXG4vLyBjb25zb2xlLmxvZyhtb2RhbFVuZm9sbG93KVxuXG4vLyBQT1VSIFFVSVRURVIgVU5FIEFTU09DSUFUSU9OIFxuY29uc3Qgb3Blbk1vZGFsVW5mb2xsb3cgPSAoKSA9PiB7XG4gICAgbW9kYWxVbmZvbGxvdy5kYXRhc2V0LmFjdGl2ZSA9IHRydWU7XG4gICAgYmFja2dyb3VuZC5zdHlsZS5vcGFjaXR5ID0gXCIwLjRcIjtcblxufVxuXG5jb25zdCBjbG9zZU1vZGFsVW5mb2xsb3cgPSAoKSA9PiB7XG4gICAgZGVsZXRlIG1vZGFsVW5mb2xsb3cuZGF0YXNldC5hY3RpdmVcbiAgICBiYWNrZ3JvdW5kLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcbn1cblxuYnRuUXVpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBvcGVuTW9kYWxVbmZvbGxvdygpO1xufSlcblxuYnRuTm9RdWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY2xvc2VNb2RhbFVuZm9sbG93KCk7XG59KVxuXG5cbmJ0blllc1F1aXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgYXhpb3MuZ2V0KGhyZWZRdWl0KS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgY29uc3QgYWRoZXJhbnQgPSByZXMuZGF0YS5hZGhlcmFudFxuICAgICAgICBpZihhZGhlcmFudCl7XG4gICAgICAgICAgICBjbG9zZU1vZGFsVW5mb2xsb3coKTtcbiAgICAgICAgICAgIFRvYXN0aWZ5KHtcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIlZvdXMgYXZleiBiaWVuIHF1aXR0w6kgbCdhc3NvY2lhdGlvblwiLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAzMDAwLFxuICAgICAgICAgICAgICAgIG5ld1dpbmRvdzogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjbG9zZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBncmF2aXR5OiBcInRvcFwiLCAvLyBgdG9wYCBvciBgYm90dG9tYFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInJpZ2h0XCIsIC8vIGBsZWZ0YCwgYGNlbnRlcmAgb3IgYHJpZ2h0YFxuICAgICAgICAgICAgICAgIHN0b3BPbkZvY3VzOiB0cnVlLCAvLyBQcmV2ZW50cyBkaXNtaXNzaW5nIG9mIHRvYXN0IG9uIGhvdmVyXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgIC8vIHJlZCBhcyBkZWZhdWx0XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwibGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzNmMGQxMiAwJSwgI2E3MWQzMSA3NCUpXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbkNsaWNrOiBmdW5jdGlvbigpe30gLy8gQ2FsbGJhY2sgYWZ0ZXIgY2xpY2tcbiAgICAgICAgICAgIH0pLnNob3dUb2FzdCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBjbG9zZU1vZGFsVW5mb2xsb3coKTtcbiAgICAgICAgICAgIFRvYXN0aWZ5KHtcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIlZvdXMgbifDqnRlcyBwYXMgYWRoZXJlbnQgZGUgbCdhc3NvY2lhdGlvblwiLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAzMDAwLFxuICAgICAgICAgICAgICAgIG5ld1dpbmRvdzogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjbG9zZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBncmF2aXR5OiBcInRvcFwiLCAvLyBgdG9wYCBvciBgYm90dG9tYFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInJpZ2h0XCIsIC8vIGBsZWZ0YCwgYGNlbnRlcmAgb3IgYHJpZ2h0YFxuICAgICAgICAgICAgICAgIHN0b3BPbkZvY3VzOiB0cnVlLCAvLyBQcmV2ZW50cyBkaXNtaXNzaW5nIG9mIHRvYXN0IG9uIGhvdmVyXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgIC8vIHJlZCBhcyBkZWZhdWx0XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwibGluZWFyLWdyYWRpZW50KDMxNWRlZywgI2JiZjBmMyAwJSwgI2Y2ZDI4NSA3NCUpXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbkNsaWNrOiBmdW5jdGlvbigpe30gLy8gQ2FsbGJhY2sgYWZ0ZXIgY2xpY2tcbiAgICAgICAgICAgIH0pLnNob3dUb2FzdCgpO1xuICAgICAgICB9XG4gICAgfSlcbn0pXG5cblxuXG4iXSwibmFtZXMiOlsiYnRuQWRoZXJlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImhyZWYiLCJocmVmUXVpdCIsIm1vZGFsIiwibW9kYWxVbmZvbGxvdyIsImJ0bk5vIiwiYnRuWWVzIiwiYnRuWWVzUXVpdCIsImJ0bk5vUXVpdCIsImJ0blF1aXQiLCJiYWNrZ3JvdW5kIiwib3Blbk1vZGFsIiwiZGF0YXNldCIsImFjdGl2ZSIsInN0eWxlIiwib3BhY2l0eSIsImNsb3NlTW9kYWwiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlcyIsImRhdGEiLCJhZGhlcmVyIiwiVG9hc3RpZnkiLCJ0ZXh0IiwiZHVyYXRpb24iLCJuZXdXaW5kb3ciLCJjbG9zZSIsImdyYXZpdHkiLCJwb3NpdGlvbiIsInN0b3BPbkZvY3VzIiwib25DbGljayIsInNob3dUb2FzdCIsImVyciIsInJlc3BvbnNlIiwic3RhdHVzIiwid2luZG93IiwiYWxlcnQiLCJvcGVuTW9kYWxVbmZvbGxvdyIsImNsb3NlTW9kYWxVbmZvbGxvdyIsImFkaGVyYW50Il0sInNvdXJjZVJvb3QiOiIifQ==
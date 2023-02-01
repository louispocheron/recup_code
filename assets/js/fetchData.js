import { sumHours } from "./sumHours";
import { sumEuros } from "./sumEuros";
import { sumPay } from "./sumPay";

const benevolatDom = document.querySelector('.benevolat-card');
const remboursementDom = document.querySelector('.remboursement-card');
const heureDom = document.querySelector(".heure-card");
const donDom = document.querySelector('.dons-card');


const valorisees = [];
const dons = [];
const remboursement = [];
const benevolat = [];

const baseHref = document.URL
const endPoint = baseHref + '/ajax_endpoint'
console.log(endPoint)

window.onload = () => {
    axios.get(endPoint).then((response) => {
        const data = response.data.data;
        if(data.length >= 1){
            // console.log(data);
            data.forEach(el => {
                valorisees.push(el.heuresValorisees)
                dons.push(el.dons)
                remboursement.push(el.aPayer)
                benevolat.push(el.duree)
            })

            // OK
            const total_valorisee = sumEuros(valorisees)
            benevolatDom.innerHTML = total_valorisee + "€"
    
            // OK
            const total_remboursement = sumPay(remboursement)
            remboursementDom.innerHTML = total_remboursement + "€"
    
            const total_benevolat = sumHours(benevolat);
            heureDom.innerHTML = total_benevolat
                
            // console.log(total_remboursement);
            const total_dons = sumEuros(dons);
            donDom.innerHTML = total_dons + "€"
        }
        else{
            benevolatDom.innerHTML = "0€"
            remboursementDom.innerHTML = "0€"
            heureDom.innerHTML = "00h00"
            donDom.innerHTML = "0€"
        }
    })
    .catch((error) => {
        console.log(error)
    })
}

// EVENT MODAL POUR SUPPRIMER USER ADMIN 
const modal = document.querySelector('.modal-adherer-del');
const trashUser = document.querySelectorAll('.delete-user');
const btnYes = document.querySelector('.btn-yes')
const btnNo = document.querySelector('.btn-no')

const openModal = () => {
    modal.dataset.active = true;
}

const closeModal = () => { 
    delete modal.dataset.active
}

btnNo.addEventListener('click', () => {
    closeModal();
})



let userId
let assocId
trashUser.forEach(el => { 
    el.addEventListener("click", () => { 
        openModal();
        userId = el.dataset.id
        assocId = el.dataset.assoc
    })
})
 
btnYes.addEventListener('click', (event) => {
    event.preventDefault();
    axios.post(`/admin/${assocId}/user/remove/${userId}`).then((res) => { 
        const trToDel = document.querySelector(`.tr-${userId}`)
        trToDel.remove();
        closeModal();
    });
})


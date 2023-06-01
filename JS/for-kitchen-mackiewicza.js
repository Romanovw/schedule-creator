let mon11 = document.getElementById('mon11');
let mon12 = document.getElementById('mon12');
let mon13 = document.getElementById('mon13');
let tue11 = document.getElementById('tue11');
let tue12 = document.getElementById('tue12');
let tue13 = document.getElementById('tue13');
let wed11 = document.getElementById('wed11');
let wed12 = document.getElementById('wed12');
let wed13 = document.getElementById('wed13');
let thu11 = document.getElementById('thu11');
let thu12 = document.getElementById('thu12');
let thu13 = document.getElementById('thu13');
let fri11 = document.getElementById('fri11');
let fri12 = document.getElementById('fri12');
let fri13 = document.getElementById('fri13');
let sat11 = document.getElementById('sat11');
let sat12 = document.getElementById('sat12');
let sat13 = document.getElementById('sat13');
let sun11 = document.getElementById('sun11');
let sun12 = document.getElementById('sun12');
let sun13 = document.getElementById('sun13');

let mon21 = document.getElementById('mon21');
let mon22 = document.getElementById('mon22');
let mon23 = document.getElementById('mon23');
let tue21 = document.getElementById('tue21');
let tue22 = document.getElementById('tue22');
let tue23 = document.getElementById('tue23');
let wed21 = document.getElementById('wed21');
let wed22 = document.getElementById('wed22');
let wed23 = document.getElementById('wed23');
let thu21 = document.getElementById('thu21');
let thu22 = document.getElementById('thu22');
let thu23 = document.getElementById('thu23');
let fri21 = document.getElementById('fri21');
let fri22 = document.getElementById('fri22');
let fri23 = document.getElementById('fri23');
let sat21 = document.getElementById('sat21');
let sat22 = document.getElementById('sat22');
let sat23 = document.getElementById('sat23');
let sun21 = document.getElementById('sun21');
let sun22 = document.getElementById('sun22');
let sun23 = document.getElementById('sun23');

let allForMon1 = [];
let allForMon2 = [];
let allForTue1 = [];
let allForTue2 = [];
let allForWed1 = [];
let allForWed2 = [];
let allForThu1 = [];
let allForThu2 = [];
let allForFri1 = [];
let allForFri2 = [];
let allForSat1 = [];
let allForSat2 = [];
let allForSun1 = [];
let allForSun2 = [];

//red text on double click
function holdByCheck (cell){
    let isChecked = false;
    let currentColor = 'black';

cell.addEventListener('dblclick', function() {
  isChecked = !isChecked;
  currentColor = isChecked ? 'red' : 'black';
  cell.style.color = currentColor;
})};

holdByCheck (mon11);
holdByCheck (mon12);
holdByCheck (mon13);
holdByCheck (tue11);
holdByCheck (tue12);
holdByCheck (tue13);
holdByCheck (wed11);
holdByCheck (wed12);
holdByCheck (wed13);
holdByCheck (thu11);
holdByCheck (thu12);
holdByCheck (thu13);
holdByCheck (fri11);
holdByCheck (fri12);
holdByCheck (fri13);
holdByCheck (sat11);
holdByCheck (sat12);
holdByCheck (sat13);
holdByCheck (sun11);
holdByCheck (sun12);
holdByCheck (sun13);

holdByCheck (mon21);
holdByCheck (mon22);
holdByCheck (mon23);
holdByCheck (tue21);
holdByCheck (tue22);
holdByCheck (tue23);
holdByCheck (wed21);
holdByCheck (wed22);
holdByCheck (wed23);
holdByCheck (thu21);
holdByCheck (thu22);
holdByCheck (thu23);
holdByCheck (fri21);
holdByCheck (fri22);
holdByCheck (fri23);
holdByCheck (sat21);
holdByCheck (sat22);
holdByCheck (sat23);
holdByCheck (sun21);
holdByCheck (sun22);
holdByCheck (sun23);

//Add a name to the array when the checkbox is enabled and remove it when it is disabled  
function handleCheckboxChange(name, checkbox, allFor, button) {
    let isPressed = false;
    button.addEventListener('click', function() {
        isPressed = !isPressed;
       // Change the state of the checkbox
        if (isPressed){
            if (!checkbox.checked) {
        checkbox.checked = true;
            
        // Calling the change event
        const event = new Event('change');
        checkbox.dispatchEvent(event);
            }
        }
        else {
            if (checkbox.checked){
            checkbox.checked = false;
            // Calling the change event
            const event = new Event('change');
            checkbox.dispatchEvent(event);
            }  
        }
      }); 
  checkbox.addEventListener('change', function() {
    if (this.checked) {
      allFor.push(name.value);
    } else {
      const index = allFor.indexOf(name.value);
      if (index > -1) {
        allFor.splice(index, 1);
      }
    }
  });
}

const fullButton1 = document.getElementById('full1');
const fullButton2 = document.getElementById('full2');
const fullButton3 = document.getElementById('full3');
const fullButton4 = document.getElementById('full4');
const fullButton5 = document.getElementById('full5');
const fullButton6 = document.getElementById('full6');
const fullButton7 = document.getElementById('full7');
const fullButton8 = document.getElementById('full8');
const fullButton9 = document.getElementById('full9');
const fullButton10 = document.getElementById('full10');
const fullButton11 = document.getElementById('full11');
const fullButton12 = document.getElementById('full12');

let name1 = document.getElementById('name1');
let p1zm1mon = document.getElementById('p1zm1mon');
let p1zm2mon = document.getElementById('p1zm2mon');
let p1zm1tue = document.getElementById('p1zm1tue');
let p1zm2tue = document.getElementById('p1zm2tue');
let p1zm1wed = document.getElementById('p1zm1wed');
let p1zm2wed = document.getElementById('p1zm2wed');
let p1zm1thu = document.getElementById('p1zm1thu');
let p1zm2thu = document.getElementById('p1zm2thu');
let p1zm1fri = document.getElementById('p1zm1fri');
let p1zm2fri = document.getElementById('p1zm2fri');
let p1zm1sat = document.getElementById('p1zm1sat');
let p1zm2sat = document.getElementById('p1zm2sat');
let p1zm1sun = document.getElementById('p1zm1sun');
let p1zm2sun = document.getElementById('p1zm2sun');
handleCheckboxChange(name1, p1zm1mon, allForMon1, fullButton1);
handleCheckboxChange(name1, p1zm2mon, allForMon2, fullButton1);
handleCheckboxChange(name1, p1zm1tue, allForTue1, fullButton1);
handleCheckboxChange(name1, p1zm2tue, allForTue2, fullButton1);
handleCheckboxChange(name1, p1zm1wed, allForWed1, fullButton1);
handleCheckboxChange(name1, p1zm2wed, allForWed2, fullButton1);
handleCheckboxChange(name1, p1zm1thu, allForThu1, fullButton1);
handleCheckboxChange(name1, p1zm2thu, allForThu2, fullButton1);
handleCheckboxChange(name1, p1zm1fri, allForFri1, fullButton1);
handleCheckboxChange(name1, p1zm2fri, allForFri2, fullButton1);
handleCheckboxChange(name1, p1zm1sat, allForSat1, fullButton1);
handleCheckboxChange(name1, p1zm2sat, allForSat2, fullButton1);
handleCheckboxChange(name1, p1zm1sun, allForSun1, fullButton1);
handleCheckboxChange(name1, p1zm2sun, allForSun2, fullButton1);

let name2 = document.getElementById('name2');
let p2zm1mon = document.getElementById('p2zm1mon');
let p2zm2mon = document.getElementById('p2zm2mon');
let p2zm1tue = document.getElementById('p2zm1tue');
let p2zm2tue = document.getElementById('p2zm2tue');
let p2zm1wed = document.getElementById('p2zm1wed');
let p2zm2wed = document.getElementById('p2zm2wed');
let p2zm1thu = document.getElementById('p2zm1thu');
let p2zm2thu = document.getElementById('p2zm2thu');
let p2zm1fri = document.getElementById('p2zm1fri');
let p2zm2fri = document.getElementById('p2zm2fri');
let p2zm1sat = document.getElementById('p2zm1sat');
let p2zm2sat = document.getElementById('p2zm2sat');
let p2zm1sun = document.getElementById('p2zm1sun');
let p2zm2sun = document.getElementById('p2zm2sun');
handleCheckboxChange(name2, p2zm1mon, allForMon1, fullButton2);
handleCheckboxChange(name2, p2zm2mon, allForMon2, fullButton2);
handleCheckboxChange(name2, p2zm1tue, allForTue1, fullButton2);
handleCheckboxChange(name2, p2zm2tue, allForTue2, fullButton2);
handleCheckboxChange(name2, p2zm1wed, allForWed1, fullButton2);
handleCheckboxChange(name2, p2zm2wed, allForWed2, fullButton2);
handleCheckboxChange(name2, p2zm1thu, allForThu1, fullButton2);
handleCheckboxChange(name2, p2zm2thu, allForThu2, fullButton2);
handleCheckboxChange(name2, p2zm1fri, allForFri1, fullButton2);
handleCheckboxChange(name2, p2zm2fri, allForFri2, fullButton2);
handleCheckboxChange(name2, p2zm1sat, allForSat1, fullButton2);
handleCheckboxChange(name2, p2zm2sat, allForSat2, fullButton2);
handleCheckboxChange(name2, p2zm1sun, allForSun1, fullButton2);
handleCheckboxChange(name2, p2zm2sun, allForSun2, fullButton2);

let name3 = document.getElementById('name3');
let p3zm1mon = document.getElementById('p3zm1mon');
let p3zm2mon = document.getElementById('p3zm2mon');
let p3zm1tue = document.getElementById('p3zm1tue');
let p3zm2tue = document.getElementById('p3zm2tue');
let p3zm1wed = document.getElementById('p3zm1wed');
let p3zm2wed = document.getElementById('p3zm2wed');
let p3zm1thu = document.getElementById('p3zm1thu');
let p3zm2thu = document.getElementById('p3zm2thu');
let p3zm1fri = document.getElementById('p3zm1fri');
let p3zm2fri = document.getElementById('p3zm2fri');
let p3zm1sat = document.getElementById('p3zm1sat');
let p3zm2sat = document.getElementById('p3zm2sat');
let p3zm1sun = document.getElementById('p3zm1sun');
let p3zm2sun = document.getElementById('p3zm2sun');
handleCheckboxChange(name3, p3zm1mon, allForMon1, fullButton3);
handleCheckboxChange(name3, p3zm2mon, allForMon2, fullButton3);
handleCheckboxChange(name3, p3zm1tue, allForTue1, fullButton3);
handleCheckboxChange(name3, p3zm2tue, allForTue2, fullButton3);
handleCheckboxChange(name3, p3zm1wed, allForWed1, fullButton3);
handleCheckboxChange(name3, p3zm2wed, allForWed2, fullButton3);
handleCheckboxChange(name3, p3zm1thu, allForThu1, fullButton3);
handleCheckboxChange(name3, p3zm2thu, allForThu2, fullButton3);
handleCheckboxChange(name3, p3zm1fri, allForFri1, fullButton3);
handleCheckboxChange(name3, p3zm2fri, allForFri2, fullButton3);
handleCheckboxChange(name3, p3zm1sat, allForSat1, fullButton3);
handleCheckboxChange(name3, p3zm2sat, allForSat2, fullButton3);
handleCheckboxChange(name3, p3zm1sun, allForSun1, fullButton3);
handleCheckboxChange(name3, p3zm2sun, allForSun2, fullButton3);

let name4 = document.getElementById('name4');
let p4zm1mon = document.getElementById('p4zm1mon');
let p4zm2mon = document.getElementById('p4zm2mon');
let p4zm1tue = document.getElementById('p4zm1tue');
let p4zm2tue = document.getElementById('p4zm2tue');
let p4zm1wed = document.getElementById('p4zm1wed');
let p4zm2wed = document.getElementById('p4zm2wed');
let p4zm1thu = document.getElementById('p4zm1thu');
let p4zm2thu = document.getElementById('p4zm2thu');
let p4zm1fri = document.getElementById('p4zm1fri');
let p4zm2fri = document.getElementById('p4zm2fri');
let p4zm1sat = document.getElementById('p4zm1sat');
let p4zm2sat = document.getElementById('p4zm2sat');
let p4zm1sun = document.getElementById('p4zm1sun');
let p4zm2sun = document.getElementById('p4zm2sun');
handleCheckboxChange(name4, p4zm1mon, allForMon1, fullButton4);
handleCheckboxChange(name4, p4zm2mon, allForMon2, fullButton4);
handleCheckboxChange(name4, p4zm1tue, allForTue1, fullButton4);
handleCheckboxChange(name4, p4zm2tue, allForTue2, fullButton4);
handleCheckboxChange(name4, p4zm1wed, allForWed1, fullButton4);
handleCheckboxChange(name4, p4zm2wed, allForWed2, fullButton4);
handleCheckboxChange(name4, p4zm1thu, allForThu1, fullButton4);
handleCheckboxChange(name4, p4zm2thu, allForThu2, fullButton4);
handleCheckboxChange(name4, p4zm1fri, allForFri1, fullButton4);
handleCheckboxChange(name4, p4zm2fri, allForFri2, fullButton4);
handleCheckboxChange(name4, p4zm1sat, allForSat1, fullButton4);
handleCheckboxChange(name4, p4zm2sat, allForSat2, fullButton4);
handleCheckboxChange(name4, p4zm1sun, allForSun1, fullButton4);
handleCheckboxChange(name4, p4zm2sun, allForSun2, fullButton4);

let name5 = document.getElementById('name5');
let p5zm1mon = document.getElementById('p5zm1mon');
let p5zm2mon = document.getElementById('p5zm2mon');
let p5zm1tue = document.getElementById('p5zm1tue');
let p5zm2tue = document.getElementById('p5zm2tue');
let p5zm1wed = document.getElementById('p5zm1wed');
let p5zm2wed = document.getElementById('p5zm2wed');
let p5zm1thu = document.getElementById('p5zm1thu');
let p5zm2thu = document.getElementById('p5zm2thu');
let p5zm1fri = document.getElementById('p5zm1fri');
let p5zm2fri = document.getElementById('p5zm2fri');
let p5zm1sat = document.getElementById('p5zm1sat');
let p5zm2sat = document.getElementById('p5zm2sat');
let p5zm1sun = document.getElementById('p5zm1sun');
let p5zm2sun = document.getElementById('p5zm2sun');
handleCheckboxChange(name5, p5zm1mon, allForMon1, fullButton5);
handleCheckboxChange(name5, p5zm2mon, allForMon2, fullButton5);
handleCheckboxChange(name5, p5zm1tue, allForTue1, fullButton5);
handleCheckboxChange(name5, p5zm2tue, allForTue2, fullButton5);
handleCheckboxChange(name5, p5zm1wed, allForWed1, fullButton5);
handleCheckboxChange(name5, p5zm2wed, allForWed2, fullButton5);
handleCheckboxChange(name5, p5zm1thu, allForThu1, fullButton5);
handleCheckboxChange(name5, p5zm2thu, allForThu2, fullButton5);
handleCheckboxChange(name5, p5zm1fri, allForFri1, fullButton5);
handleCheckboxChange(name5, p5zm2fri, allForFri2, fullButton5);
handleCheckboxChange(name5, p5zm1sat, allForSat1, fullButton5);
handleCheckboxChange(name5, p5zm2sat, allForSat2, fullButton5);
handleCheckboxChange(name5, p5zm1sun, allForSun1, fullButton5);
handleCheckboxChange(name5, p5zm2sun, allForSun2, fullButton5);

let name6 = document.getElementById('name6');
let p6zm1mon = document.getElementById('p6zm1mon');
let p6zm2mon = document.getElementById('p6zm2mon');
let p6zm1tue = document.getElementById('p6zm1tue');
let p6zm2tue = document.getElementById('p6zm2tue');
let p6zm1wed = document.getElementById('p6zm1wed');
let p6zm2wed = document.getElementById('p6zm2wed');
let p6zm1thu = document.getElementById('p6zm1thu');
let p6zm2thu = document.getElementById('p6zm2thu');
let p6zm1fri = document.getElementById('p6zm1fri');
let p6zm2fri = document.getElementById('p6zm2fri');
let p6zm1sat = document.getElementById('p6zm1sat');
let p6zm2sat = document.getElementById('p6zm2sat');
let p6zm1sun = document.getElementById('p6zm1sun');
let p6zm2sun = document.getElementById('p6zm2sun');
handleCheckboxChange(name6, p6zm1mon, allForMon1, fullButton6);
handleCheckboxChange(name6, p6zm2mon, allForMon2, fullButton6);
handleCheckboxChange(name6, p6zm1tue, allForTue1, fullButton6);
handleCheckboxChange(name6, p6zm2tue, allForTue2, fullButton6);
handleCheckboxChange(name6, p6zm1wed, allForWed1, fullButton6);
handleCheckboxChange(name6, p6zm2wed, allForWed2, fullButton6);
handleCheckboxChange(name6, p6zm1thu, allForThu1, fullButton6);
handleCheckboxChange(name6, p6zm2thu, allForThu2, fullButton6);
handleCheckboxChange(name6, p6zm1fri, allForFri1, fullButton6);
handleCheckboxChange(name6, p6zm2fri, allForFri2, fullButton6);
handleCheckboxChange(name6, p6zm1sat, allForSat1, fullButton6);
handleCheckboxChange(name6, p6zm2sat, allForSat2, fullButton6);
handleCheckboxChange(name6, p6zm1sun, allForSun1, fullButton6);
handleCheckboxChange(name6, p6zm2sun, allForSun2, fullButton6);

let name7 = document.getElementById('name7');
let p7zm1mon = document.getElementById('p7zm1mon');
let p7zm2mon = document.getElementById('p7zm2mon');
let p7zm1tue = document.getElementById('p7zm1tue');
let p7zm2tue = document.getElementById('p7zm2tue');
let p7zm1wed = document.getElementById('p7zm1wed');
let p7zm2wed = document.getElementById('p7zm2wed');
let p7zm1thu = document.getElementById('p7zm1thu');
let p7zm2thu = document.getElementById('p7zm2thu');
let p7zm1fri = document.getElementById('p7zm1fri');
let p7zm2fri = document.getElementById('p7zm2fri');
let p7zm1sat = document.getElementById('p7zm1sat');
let p7zm2sat = document.getElementById('p7zm2sat');
let p7zm1sun = document.getElementById('p7zm1sun');
let p7zm2sun = document.getElementById('p7zm2sun');
handleCheckboxChange(name7, p7zm1mon, allForMon1, fullButton7);
handleCheckboxChange(name7, p7zm2mon, allForMon2, fullButton7);
handleCheckboxChange(name7, p7zm1tue, allForTue1, fullButton7);
handleCheckboxChange(name7, p7zm2tue, allForTue2, fullButton7);
handleCheckboxChange(name7, p7zm1wed, allForWed1, fullButton7);
handleCheckboxChange(name7, p7zm2wed, allForWed2, fullButton7);
handleCheckboxChange(name7, p7zm1thu, allForThu1, fullButton7);
handleCheckboxChange(name7, p7zm2thu, allForThu2, fullButton7);
handleCheckboxChange(name7, p7zm1fri, allForFri1, fullButton7);
handleCheckboxChange(name7, p7zm2fri, allForFri2, fullButton7);
handleCheckboxChange(name7, p7zm1sat, allForSat1, fullButton7);
handleCheckboxChange(name7, p7zm2sat, allForSat2, fullButton7);
handleCheckboxChange(name7, p7zm1sun, allForSun1, fullButton7);
handleCheckboxChange(name7, p7zm2sun, allForSun2, fullButton7);

let name8 = document.getElementById('name8');
let p8zm1mon = document.getElementById('p8zm1mon');
let p8zm2mon = document.getElementById('p8zm2mon');
let p8zm1tue = document.getElementById('p8zm1tue');
let p8zm2tue = document.getElementById('p8zm2tue');
let p8zm1wed = document.getElementById('p8zm1wed');
let p8zm2wed = document.getElementById('p8zm2wed');
let p8zm1thu = document.getElementById('p8zm1thu');
let p8zm2thu = document.getElementById('p8zm2thu');
let p8zm1fri = document.getElementById('p8zm1fri');
let p8zm2fri = document.getElementById('p8zm2fri');
let p8zm1sat = document.getElementById('p8zm1sat');
let p8zm2sat = document.getElementById('p8zm2sat');
let p8zm1sun = document.getElementById('p8zm1sun');
let p8zm2sun = document.getElementById('p8zm2sun');
handleCheckboxChange(name8, p8zm1mon, allForMon1, fullButton8);
handleCheckboxChange(name8, p8zm2mon, allForMon2, fullButton8);
handleCheckboxChange(name8, p8zm1tue, allForTue1, fullButton8);
handleCheckboxChange(name8, p8zm2tue, allForTue2, fullButton8);
handleCheckboxChange(name8, p8zm1wed, allForWed1, fullButton8);
handleCheckboxChange(name8, p8zm2wed, allForWed2, fullButton8);
handleCheckboxChange(name8, p8zm1thu, allForThu1, fullButton8);
handleCheckboxChange(name8, p8zm2thu, allForThu2, fullButton8);
handleCheckboxChange(name8, p8zm1fri, allForFri1, fullButton8);
handleCheckboxChange(name8, p8zm2fri, allForFri2, fullButton8);
handleCheckboxChange(name8, p8zm1sat, allForSat1, fullButton8);
handleCheckboxChange(name8, p8zm2sat, allForSat2, fullButton8);
handleCheckboxChange(name8, p8zm1sun, allForSun1, fullButton8);
handleCheckboxChange(name8, p8zm2sun, allForSun2, fullButton8);


let name9 = document.getElementById('name9');
let p9zm1mon = document.getElementById('p9zm1mon');
let p9zm2mon = document.getElementById('p9zm2mon');
let p9zm1tue = document.getElementById('p9zm1tue');
let p9zm2tue = document.getElementById('p9zm2tue');
let p9zm1wed = document.getElementById('p9zm1wed');
let p9zm2wed = document.getElementById('p9zm2wed');
let p9zm1thu = document.getElementById('p9zm1thu');
let p9zm2thu = document.getElementById('p9zm2thu');
let p9zm1fri = document.getElementById('p9zm1fri');
let p9zm2fri = document.getElementById('p9zm2fri');
let p9zm1sat = document.getElementById('p9zm1sat');
let p9zm2sat = document.getElementById('p9zm2sat');
let p9zm1sun = document.getElementById('p9zm1sun');
let p9zm2sun = document.getElementById('p9zm2sun');
handleCheckboxChange(name9, p9zm1mon, allForMon1, fullButton9);
handleCheckboxChange(name9, p9zm2mon, allForMon2, fullButton9);
handleCheckboxChange(name9, p9zm1tue, allForTue1, fullButton9);
handleCheckboxChange(name9, p9zm2tue, allForTue2, fullButton9);
handleCheckboxChange(name9, p9zm1wed, allForWed1, fullButton9);
handleCheckboxChange(name9, p9zm2wed, allForWed2, fullButton9);
handleCheckboxChange(name9, p9zm1thu, allForThu1, fullButton9);
handleCheckboxChange(name9, p9zm2thu, allForThu2, fullButton9);
handleCheckboxChange(name9, p9zm1fri, allForFri1, fullButton9);
handleCheckboxChange(name9, p9zm2fri, allForFri2, fullButton9);
handleCheckboxChange(name9, p9zm1sat, allForSat1, fullButton9);
handleCheckboxChange(name9, p9zm2sat, allForSat2, fullButton9);
handleCheckboxChange(name9, p9zm1sun, allForSun1, fullButton9);
handleCheckboxChange(name9, p9zm2sun, allForSun2, fullButton9);

let name10 = document.getElementById('name10');
let p10zm1mon = document.getElementById('p10zm1mon');
let p10zm2mon = document.getElementById('p10zm2mon');
let p10zm1tue = document.getElementById('p10zm1tue');
let p10zm2tue = document.getElementById('p10zm2tue');
let p10zm1wed = document.getElementById('p10zm1wed');
let p10zm2wed = document.getElementById('p10zm2wed');
let p10zm1thu = document.getElementById('p10zm1thu');
let p10zm2thu = document.getElementById('p10zm2thu');
let p10zm1fri = document.getElementById('p10zm1fri');
let p10zm2fri = document.getElementById('p10zm2fri');
let p10zm1sat = document.getElementById('p10zm1sat');
let p10zm2sat = document.getElementById('p10zm2sat');
let p10zm1sun = document.getElementById('p10zm1sun');
let p10zm2sun = document.getElementById('p10zm2sun');
handleCheckboxChange(name10, p10zm1mon, allForMon1, fullButton10);
handleCheckboxChange(name10, p10zm2mon, allForMon2, fullButton10);
handleCheckboxChange(name10, p10zm1tue, allForTue1, fullButton10);
handleCheckboxChange(name10, p10zm2tue, allForTue2, fullButton10);
handleCheckboxChange(name10, p10zm1wed, allForWed1, fullButton10);
handleCheckboxChange(name10, p10zm2wed, allForWed2, fullButton10);
handleCheckboxChange(name10, p10zm1thu, allForThu1, fullButton10);
handleCheckboxChange(name10, p10zm2thu, allForThu2, fullButton10);
handleCheckboxChange(name10, p10zm1fri, allForFri1, fullButton10);
handleCheckboxChange(name10, p10zm2fri, allForFri2, fullButton10);
handleCheckboxChange(name10, p10zm1sat, allForSat1, fullButton10);
handleCheckboxChange(name10, p10zm2sat, allForSat2, fullButton10);
handleCheckboxChange(name10, p10zm1sun, allForSun1, fullButton10);
handleCheckboxChange(name10, p10zm2sun, allForSun2, fullButton10);

let name11 = document.getElementById('name11');
let p11zm1mon = document.getElementById('p11zm1mon');
let p11zm2mon = document.getElementById('p11zm2mon');
let p11zm1tue = document.getElementById('p11zm1tue');
let p11zm2tue = document.getElementById('p11zm2tue');
let p11zm1wed = document.getElementById('p11zm1wed');
let p11zm2wed = document.getElementById('p11zm2wed');
let p11zm1thu = document.getElementById('p11zm1thu');
let p11zm2thu = document.getElementById('p11zm2thu');
let p11zm1fri = document.getElementById('p11zm1fri');
let p11zm2fri = document.getElementById('p11zm2fri');
let p11zm1sat = document.getElementById('p11zm1sat');
let p11zm2sat = document.getElementById('p11zm2sat');
let p11zm1sun = document.getElementById('p11zm1sun');
let p11zm2sun = document.getElementById('p11zm2sun');
handleCheckboxChange(name11, p11zm1mon, allForMon1, fullButton11);
handleCheckboxChange(name11, p11zm2mon, allForMon2, fullButton11);
handleCheckboxChange(name11, p11zm1tue, allForTue1, fullButton11);
handleCheckboxChange(name11, p11zm2tue, allForTue2, fullButton11);
handleCheckboxChange(name11, p11zm1wed, allForWed1, fullButton11);
handleCheckboxChange(name11, p11zm2wed, allForWed2, fullButton11);
handleCheckboxChange(name11, p11zm1thu, allForThu1, fullButton11);
handleCheckboxChange(name11, p11zm2thu, allForThu2, fullButton11);
handleCheckboxChange(name11, p11zm1fri, allForFri1, fullButton11);
handleCheckboxChange(name11, p11zm2fri, allForFri2, fullButton11);
handleCheckboxChange(name11, p11zm1sat, allForSat1, fullButton11);
handleCheckboxChange(name11, p11zm2sat, allForSat2, fullButton11);
handleCheckboxChange(name11, p11zm1sun, allForSun1, fullButton11);
handleCheckboxChange(name11, p11zm2sun, allForSun2, fullButton11);

let name12 = document.getElementById('name12');
let p12zm1mon = document.getElementById('p12zm1mon');
let p12zm2mon = document.getElementById('p12zm2mon');
let p12zm1tue = document.getElementById('p12zm1tue');
let p12zm2tue = document.getElementById('p12zm2tue');
let p12zm1wed = document.getElementById('p12zm1wed');
let p12zm2wed = document.getElementById('p12zm2wed');
let p12zm1thu = document.getElementById('p12zm1thu');
let p12zm2thu = document.getElementById('p12zm2thu');
let p12zm1fri = document.getElementById('p12zm1fri');
let p12zm2fri = document.getElementById('p12zm2fri');
let p12zm1sat = document.getElementById('p12zm1sat');
let p12zm2sat = document.getElementById('p12zm2sat');
let p12zm1sun = document.getElementById('p12zm1sun');
let p12zm2sun = document.getElementById('p12zm2sun');
handleCheckboxChange(name12, p12zm1mon, allForMon1, fullButton12);
handleCheckboxChange(name12, p12zm2mon, allForMon2, fullButton12);
handleCheckboxChange(name12, p12zm1tue, allForTue1, fullButton12);
handleCheckboxChange(name12, p12zm2tue, allForTue2, fullButton12);
handleCheckboxChange(name12, p12zm1wed, allForWed1, fullButton12);
handleCheckboxChange(name12, p12zm2wed, allForWed2, fullButton12);
handleCheckboxChange(name12, p12zm1thu, allForThu1, fullButton12);
handleCheckboxChange(name12, p12zm2thu, allForThu2, fullButton12);
handleCheckboxChange(name12, p12zm1fri, allForFri1, fullButton12);
handleCheckboxChange(name12, p12zm2fri, allForFri2, fullButton12);
handleCheckboxChange(name12, p12zm1sat, allForSat1, fullButton12);
handleCheckboxChange(name12, p12zm2sat, allForSat2, fullButton12);
handleCheckboxChange(name12, p12zm1sun, allForSun1, fullButton12);
handleCheckboxChange(name12, p12zm2sun, allForSun2, fullButton12);


const nameAuto = document.getElementById ('nameAuto')
nameAuto.addEventListener('click', function(){
    name1.value = 'Ania';
    name2.value = 'Asia K.';
    name3.value = 'Asia B.';
    name4.value = 'Daniel';
    name5.value = 'Daria';
    name6.value = 'Daniel';
    name7.value = 'Teresa';
});

// Generating a random element
let randomIndexMon11, randomIndexMon12,
        randomIndexMon21, randomIndexMon22,
        randomIndexTue11, randomIndexTue12,
        randomIndexTue21, randomIndexTue22,
        randomIndexWed11, randomIndexWed12,
        randomIndexWed21, randomIndexWed22,
        randomIndexThu11, randomIndexThu12,
        randomIndexThu21, randomIndexThu22,
        randomIndexFri11, randomIndexFri12,
        randomIndexFri21, randomIndexFri22,
        randomIndexSat11, randomIndexSat12,
        randomIndexSat21, randomIndexSat22,
        randomIndexSun11, randomIndexSun12,
        randomIndexSun21, randomIndexSun22;
    let randomElementMon11, randomElementMon12,
        randomElementMon21, randomElementMon22,
        randomElementTue11, randomElementTue12,
        randomElementTue21, randomElementTue22,
        randomElementWed11, randomElementWed12,
        randomElementWed21, randomElementWed22,
        randomElementThu11, randomElementThu12,
        randomElementThu21, randomElementThu22,
        randomElementFri11, randomElementFri12,
        randomElementFri21, randomElementFri22,
        randomElementSat11, randomElementSat12,
        randomElementSat21, randomElementSat22,
        randomElementSun11, randomElementSun12,
        randomElementSun21, randomElementSun22;


    function generateForAllDays (randomIndex1, randomIndex2, allForZm,  //element generating function
         randomElement1, randomElement2, person1, person2,) {
  
            if (allForZm.length >= 2) {
                
                do {randomIndex1 = Math.floor(Math.random() * allForZm.length);
                    if (person1.style.color !== 'red'){
                    randomElement1 = allForZm[randomIndex1];
                    person1.textContent = randomElement1;
                    }

            } while (person1.textContent === person2.textContent);
            
            do {
                randomIndex2 = Math.floor(Math.random() * allForZm.length);
                if (person2.style.color !== 'red'){
                randomElement2 = allForZm[randomIndex2];
                person2.textContent = randomElement2;
                }

            } while (person2.textContent === person1.textContent);
        
        } else if (allForZm.length === 1) {
            randomIndex1 = Math.floor(Math.random() * allForZm.length);
            if (person1.style.color !== 'red'){
            randomElement1 = allForZm[randomIndex1];
            person1.textContent = randomElement1;
            }
            if (person2.style.color !== 'red'){
            person2.textContent = '';
            }
        } else {
            if (person1.style.color !== 'red'){
            person1.textContent = '';
            }
            if (person2.style.color !== 'red'){
            person2.textContent = '';
            }
        }
         };
         
// Table with shift counter
const schedule = document.getElementById ('schedule');
const countSh1 = document.getElementById ('countSh1');
const countSh2 = document.getElementById ('countSh2');
const countSh3 = document.getElementById ('countSh3');
const countSh4 = document.getElementById ('countSh4');
const countSh5 = document.getElementById ('countSh5');
const countSh6 = document.getElementById ('countSh6');
const countSh7 = document.getElementById ('countSh7');
const countSh8 = document.getElementById ('countSh8');
const countSh9 = document.getElementById ('countSh9');
const countSh10 = document.getElementById ('countSh10');
const countSh11 = document.getElementById ('countSh11');
const countSh12 = document.getElementById ('countSh12');
         
const per1 = document.getElementById('per1');
const per2 = document.getElementById('per2');
const per3 = document.getElementById('per3');
const per4 = document.getElementById('per4');
const per5 = document.getElementById('per5');
const per6 = document.getElementById('per6');
const per7 = document.getElementById('per7');
const per8 = document.getElementById('per8');
const per9 = document.getElementById('per9');
const per10 = document.getElementById('per10');
const per11 = document.getElementById('per11');
const per12 = document.getElementById('per12');
         
         
//shift counter
function countOfShifts (){
function persons (per, name){
    per.textContent = name.value
}
         
persons (per1, name1);
persons (per2, name2);
persons (per3, name3);
persons (per4, name4);
persons (per5, name5);
persons (per6, name6);
persons (per7, name7);
persons (per8, name8);
persons (per9, name9);
persons (per10, name10);
persons (per11, name11);
persons (per12, name12);
                                     
         
function countShifts (name, countSh){
    let count = 0;
    for (let i = 0, row; row = schedule.rows[i]; i++) {
    for (let j = 0, cell; cell = row.cells[j]; j++) {
        if (cell.textContent == name.value) {
            count++;
        }
    }  
    }
    countSh.textContent = count;
    if (name.value === '') {
    countSh.textContent = '';
    }
    };
                         
countShifts (name1, countSh1);
countShifts (name2, countSh2);
countShifts (name3, countSh3);
countShifts (name4, countSh4);
countShifts (name5, countSh5);
countShifts (name6, countSh6);
countShifts (name7, countSh7);
countShifts (name8, countSh8);
countShifts (name9, countSh9);
countShifts (name10, countSh10);
countShifts (name11, countSh11);
countShifts (name12, countSh12);
};  

sellsMenuForDay (mon11, mon12, mon13, allForMon1);
sellsMenuForDay (mon21, mon22, mon23, allForMon2);
sellsMenuForDay (tue11, tue12, tue13, allForTue1);
sellsMenuForDay (tue21, tue22, tue23, allForTue2);
sellsMenuForDay (wed11, wed12, wed13, allForWed1);
sellsMenuForDay (wed21, wed22, wed23, allForWed2);
sellsMenuForDay (thu11, thu12, thu13, allForThu1);
sellsMenuForDay (thu21, thu22, thu23, allForThu2);
sellsMenuForDay (fri11, fri12, fri13, allForFri1);
sellsMenuForDay (fri21, fri22, fri23, allForFri2);
sellsMenuForDay (sat11, sat12, sat13, allForSat1);
sellsMenuForDay (sat21, sat22, sat23, allForSat2);
sellsMenuForDay (sun11, sun12, sun13, allForSun1);
sellsMenuForDay (sun21, sun22, sun23, allForSun2);

const wholeDayP1 = document.getElementById ('wholeDayP1');
const wholeDayP2 = document.getElementById ('wholeDayP2');
const wholeDayP3 = document.getElementById ('wholeDayP3');
const wholeDayP4 = document.getElementById ('wholeDayP4');
const wholeDayP5 = document.getElementById ('wholeDayP5');
const wholeDayP6 = document.getElementById ('wholeDayP6');
const wholeDayP7 = document.getElementById ('wholeDayP7');
const wholeDayP8 = document.getElementById ('wholeDayP8');
const wholeDayP9 = document.getElementById ('wholeDayP9');
const wholeDayP10 = document.getElementById ('wholeDayP10');
const wholeDayP11 = document.getElementById ('wholeDayP11');
const wholeDayP12 = document.getElementById ('wholeDayP12');


// Button that launches all generation fields
let generate = document.getElementById('generate');
generate.addEventListener('click', function() {

         //a function that excludes the same name on the second shift of the previous day and the first of the next 
         function notRepeat (previousDay21, previousDay22, nextDay11, nextDay12,
            randomIndexNextDay11, randomIndexNextDay12, allForNextDay1, 
                    randomElementNextDay11, randomElementNextDay12, randomIndexPreviousDay21, randomIndexPreviousDay22, allForPreviousDay2, 
                    randomElementPreviousDay21, randomElementPreviousDay22,) 
                    {
            let count = 0; 
            while (previousDay21.textContent === nextDay11.textContent || previousDay21.textContent === nextDay12.textContent ||
                 previousDay22.textContent === nextDay11.textContent || previousDay22.textContent === nextDay12.textContent)
                 {generateForAllDays (randomIndexNextDay11, randomIndexNextDay12, allForNextDay1, 
                    randomElementNextDay11, randomElementNextDay12, 
                    nextDay11, nextDay12,);

                count++;
                if (count >= 1000){
                    if (nextDay11.textContent === previousDay21.textContent || nextDay11.textContent === previousDay22.textContent) {
                        if (nextDay11.style.color === 'red'){
                        }
                        else {
                        nextDay11.textContent = '';
                        }
                    }
                    if (previousDay21.textContent === nextDay12.textContent || previousDay22.textContent === nextDay12.textContent) {
                        if (nextDay12.style.color === 'red'){

                        }
                        else {
                        nextDay12.textContent = '';
                        }
                    }
                    break;
                }
                }

                if (nextDay11.style.color === 'red' || nextDay12.style.color === 'red'){      
                let count1 = 0; 
                while (previousDay21.textContent === nextDay11.textContent || previousDay21.textContent === nextDay12.textContent ||
                 previousDay22.textContent === nextDay11.textContent || previousDay22.textContent === nextDay12.textContent) {
                    generateForAllDays (randomIndexPreviousDay21, randomIndexPreviousDay22, allForPreviousDay2, 
                        randomElementPreviousDay21, randomElementPreviousDay22, 
                        previousDay21, previousDay22);   
                        count1++;
                        if (count1 >= 1000){
                            if (nextDay11.textContent === previousDay21.textContent || nextDay12.textContent === previousDay21.textContent) {
                                if (previousDay21.style.color === 'red'){
                                }
                                else {
                                previousDay21.textContent = '';
                                }
                            }
                            if (previousDay22.textContent === nextDay11.textContent || previousDay22.textContent === nextDay12.textContent) {
                                if (previousDay22.style.color === 'red'){

                                }
                                else {
                                previousDay22.textContent = '';
                                }
                            }
                            break;
                        }
                        }
                        }
         };

    generateForAllDays (randomIndexMon11, randomIndexMon12, allForMon1, 
                            randomElementMon11, randomElementMon12, 
                            mon11, mon12,);
    generateForAllDays (randomIndexMon21, randomIndexMon22, allForMon2, 
                            randomElementMon21, randomElementMon22, 
                            mon21, mon22,);
    generateForAllDays (randomIndexTue11, randomIndexTue12, allForTue1, 
                            randomElementTue11, randomElementTue12, 
                            tue11, tue12,);  

        notRepeat (mon21, mon22, tue11, tue12,
                    randomIndexTue11, randomIndexTue12, allForTue1, 
                    randomElementTue11, randomElementTue12, 
                    randomIndexMon21, randomIndexMon22, allForMon2, 
                    randomElementMon21, randomElementMon22);
                           
    generateForAllDays (randomIndexTue21, randomIndexTue22, allForTue2, 
                            randomElementTue21, randomElementTue22,
                            tue21, tue22);    
    generateForAllDays (randomIndexWed11, randomIndexWed12, allForWed1, 
                            randomElementWed11, randomElementWed12, 
                            wed11, wed12);
        notRepeat (tue21, tue22, wed11, wed12,
                    randomIndexWed11, randomIndexWed12, allForWed1, 
                    randomElementWed11, randomElementWed12, 
                    randomIndexTue21, randomIndexTue22, allForTue2, 
                    randomElementTue21, randomElementTue22);
                            
    generateForAllDays (randomIndexWed21, randomIndexWed22, allForWed2, 
                            randomElementWed21, randomElementWed22, 
                            wed21, wed22);    
    generateForAllDays (randomIndexThu11, randomIndexThu12, allForThu1, 
                            randomElementThu11, randomElementThu12, 
                            thu11, thu12);
        notRepeat (wed21, wed22, thu11, thu12,
                    randomIndexThu11, randomIndexThu12, allForThu1, 
                    randomElementThu11, randomElementThu12, 
                    randomIndexWed21, randomIndexWed22, allForWed2, 
                    randomElementWed21, randomElementWed22);

    generateForAllDays (randomIndexThu21, randomIndexThu22, allForThu2, 
                            randomElementThu21, randomElementThu22, 
                            thu21, thu22);    
    generateForAllDays (randomIndexFri11, randomIndexFri12, allForFri1, 
                            randomElementFri11, randomElementFri12, 
                            fri11, fri12);
        notRepeat (thu21, thu22, fri11, fri12,
                    randomIndexFri11, randomIndexFri12, allForFri1, 
                    randomElementFri11, randomElementFri12, 
                    randomIndexThu21, randomIndexThu22, allForThu2, 
                    randomElementThu21, randomElementThu22);
                            
    generateForAllDays (randomIndexFri21, randomIndexFri22, allForFri2, 
                            randomElementFri21, randomElementFri22, 
                            fri21, fri22);
    generateForAllDays (randomIndexSat11, randomIndexSat12, allForSat1, 
                            randomElementSat11, randomElementSat12, 
                            sat11, sat12);
        notRepeat (fri21, fri22, sat11, sat12,
                    randomIndexSat11, randomIndexSat12, allForSat1, 
                    randomElementSat11, randomElementSat12, 
                    randomIndexFri21, randomIndexFri22, allForFri2, 
                    randomElementFri21, randomElementFri22);
                            

    generateForAllDays (randomIndexSat21, randomIndexSat22, allForSat2, 
                            randomElementSat21, randomElementSat22, 
                            sat21, sat22);
    generateForAllDays (randomIndexSun11, randomIndexSun12, allForSun1, 
                            randomElementSun11, randomElementSun12, 
                            sun11, sun12);
        notRepeat (sat21, sat22, sun11, sun12,
                    randomIndexSun11, randomIndexSun12, allForSun1, 
                    randomElementSun11, randomElementSun12, 
                    randomIndexSat21, randomIndexSat22, allForSat2, 
                    randomElementSat21, randomElementSat22);

    generateForAllDays (randomIndexSun21, randomIndexSun22, allForSun2, 
                            randomElementSun21, randomElementSun22, 
                            sun21, sun22);
    countOfShifts ();

                });

const changeMon1 = document.getElementById ('changeMon1');
const changeTue1 = document.getElementById ('changeTue1');
const changeWed1 = document.getElementById ('changeWed1');
const changeThu1 = document.getElementById ('changeThu1');
const changeFri1 = document.getElementById ('changeFri1');
const changeSat1 = document.getElementById ('changeSat1');
const changeSun1 = document.getElementById ('changeSun1');
const changeMon2 = document.getElementById ('changeMon2');
const changeTue2 = document.getElementById ('changeTue2');
const changeWed2 = document.getElementById ('changeWed2');
const changeThu2 = document.getElementById ('changeThu2');
const changeFri2 = document.getElementById ('changeFri2');
const changeSat2 = document.getElementById ('changeSat2');
const changeSun2 = document.getElementById ('changeSun2');

//renewal of employees in a separate shift                 
changeMon1.addEventListener('click', function(){                    
    generateForAllDays (randomIndexMon11, randomIndexMon12, allForMon1, 
                        randomElementMon11, randomElementMon12, 
                         mon11, mon12);
    countOfShifts ();

});

changeMon2.addEventListener('click', function(){                   
    generateForAllDays (randomIndexMon21, randomIndexMon22, allForMon2, 
                        randomElementMon21, randomElementMon22, 
                        mon21, mon22);
    countOfShifts ();
});

changeTue1.addEventListener('click', function(){                   
    generateForAllDays (randomIndexTue11, randomIndexTue12, allForTue1, 
                    randomElementTue11, randomElementTue12, 
                    tue11, tue12);
    countOfShifts ();
});

changeTue2.addEventListener('click', function(){                   
    generateForAllDays (randomIndexTue21, randomIndexTue22, allForTue2, 
        randomElementTue21, randomElementTue22, 
        tue21, tue22);
    countOfShifts ();
});

changeWed1.addEventListener('click', function(){                   
    generateForAllDays (randomIndexWed11, randomIndexWed12, allForWed1, 
        randomElementWed11, randomElementWed12, 
        wed11, wed12);
    countOfShifts ();
});

changeWed2.addEventListener('click', function(){                   
    generateForAllDays (randomIndexWed21, randomIndexWed22, allForWed2, 
        randomElementWed21, randomElementWed22, 
        wed21, wed22); 
    countOfShifts ();
});

changeThu1.addEventListener('click', function(){                   
    generateForAllDays (randomIndexThu11, randomIndexThu12, allForThu1, 
        randomElementThu11, randomElementThu12, 
        thu11, thu12);
    countOfShifts ();
});

changeThu2.addEventListener('click', function(){                   
    generateForAllDays (randomIndexThu21, randomIndexThu22, allForThu2, 
        randomElementThu21, randomElementThu22, 
        thu21, thu22);
    countOfShifts ();
});

changeFri1.addEventListener('click', function(){                   
    generateForAllDays (randomIndexFri11, randomIndexFri12, allForFri1, 
        randomElementFri11, randomElementFri12, 
        fri11, fri12);
    countOfShifts ();
});

changeFri2.addEventListener('click', function(){                   
    generateForAllDays (randomIndexFri21, randomIndexFri22, allForFri2, 
        randomElementFri21, randomElementFri22, 
        fri21, fri22);
    countOfShifts ();
});

changeSat1.addEventListener('click', function(){                   
    generateForAllDays (randomIndexSat11, randomIndexSat12, allForSat1, 
        randomElementSat11, randomElementSat12, 
        sat11, sat12);
    countOfShifts ();
});

changeSat2.addEventListener('click', function(){                   
    generateForAllDays (randomIndexSat21, randomIndexSat22, allForSat2, 
        randomElementSat21, randomElementSat22, 
        sat21, sat22);
    countOfShifts ();
});

changeSun1.addEventListener('click', function(){                   
    generateForAllDays (randomIndexSun11, randomIndexSun12, allForSun1, 
        randomElementSun11, randomElementSun12, 
        sun11, sun12);
    countOfShifts ();
});

changeSun2.addEventListener('click', function(){                   
    generateForAllDays (randomIndexSun21, randomIndexSun22, allForSun2, 
        randomElementSun21, randomElementSun22, 
        sun21, sun22);
    countOfShifts ();
});

//Drop down menu with names
function sellsMenu (cellId, allFor){
const dropdownMenu = document.getElementById("dropdown-menu");
let singleClickTimer;

cellId.addEventListener("mousedown", handleMouseDown);
cellId.addEventListener("input", hideMenu);

document.addEventListener("click", (event) => {
  const target = event.target;

   // Checking if the target of the click event is a menu item or a table cell
  const isMenuClicked = target === dropdownMenu || dropdownMenu.contains(target);
  const isCellClicked = target === cellId;

  if (!isMenuClicked && !isCellClicked) {
    hideMenu();
  }
});

function handleMouseDown(event) {
  if (event.detail === 2) {
    clearTimeout(singleClickTimer);
    hideMenu();
  } else {
    if (dropdownMenu.style.display === "block") {
      hideMenu();
    } else {
      singleClickTimer = setTimeout(() => {
        showMenu();
      }, 200);
    }
  }
}

function showMenu() {
  // Clearing Previous Menu Items
  dropdownMenu.innerHTML = "";

  // Creating menu items from an array
  allFor.forEach(option => {
    const menuItem = document.createElement("div");
    menuItem.className = "dropdown-menu-item";
    menuItem.innerText = option;
    menuItem.addEventListener("click", () => {
      cellId.innerText = option;
      hideMenu();
      countOfShifts();
    });
    dropdownMenu.appendChild(menuItem);
  });

  // Positioning the menu below the cell
  const cellRect = cellId.getBoundingClientRect();
  dropdownMenu.style.left = cellRect.left + "px";
  dropdownMenu.style.top = cellRect.bottom + "px";

  // Menu display
  dropdownMenu.style.display = "block";
}

function hideMenu() {
  dropdownMenu.style.display = "none";
}
}
function sellsMenuForDay (cell1, cell2, cell3, allFor) {
sellsMenu (cell1, allFor);
sellsMenu (cell2, allFor);
sellsMenu (cell3, allFor);
}

let monday1 = document.getElementById ('monday1');
let tuesday1 = document.getElementById ('tuesday1');
let wednesday1 = document.getElementById ('wednesday1');
let thursday1 = document.getElementById ('thursday1');
let friday1 = document.getElementById ('friday1');
let saturday1 = document.getElementById ('saturday1');
let sunday1 = document.getElementById ('sunday1');

let monday2 = document.getElementById ('monday2');
let tuesday2 = document.getElementById ('tuesday2');
let wednesday2 = document.getElementById ('wednesday2');
let thursday2 = document.getElementById ('thursday2');
let friday2 = document.getElementById ('friday2');
let saturday2 = document.getElementById ('saturday2');
let sunday2 = document.getElementById ('sunday2');

function sameText (day1, day2){
day1 = day1.innerText;
day2.innerText = day1;
}

const printButton = document.getElementById ('printButton');
    printButton.addEventListener('click', () => {
        window.print();
      });

      const navLinks = document.querySelectorAll('.nav-links a');

      //Header
      navLinks.forEach(link => {
        if (link.href === window.location.href) {
          link.classList.add('active');
        }
      });
//Delete schedule
function deleteAll (person){
    if (person.style.color !== 'red'){
        person.textContent = "";
       }
       }
const deleteButton = document.getElementById ('deleteButton');
deleteButton.addEventListener('click', function() {
    deleteAll (mon11);
    deleteAll (mon12);
    deleteAll (mon13);
    deleteAll (mon22);
    deleteAll (mon23);
    deleteAll (tue11);
    deleteAll (tue12);
    deleteAll (tue13);
    deleteAll (tue21);
    deleteAll (tue22);
    deleteAll (tue23);
    deleteAll (wed11);
    deleteAll (wed12);
    deleteAll (wed13);
    deleteAll (wed21);
    deleteAll (wed22);
    deleteAll (wed23);
    deleteAll (thu11);
    deleteAll (thu12);
    deleteAll (thu13);
    deleteAll (thu21);
    deleteAll (thu22);
    deleteAll (thu23);
    deleteAll (fri11);
    deleteAll (fri12);
    deleteAll (fri13);
    deleteAll (fri21);
    deleteAll (fri22);
    deleteAll (fri23);
    deleteAll (sat11);
    deleteAll (sat12);
    deleteAll (sat13);
    deleteAll (sat21);
    deleteAll (sat22);
    deleteAll (sat23);
    deleteAll (sun11);
    deleteAll (sun12);
    deleteAll (sun13);
    deleteAll (sun21);
    deleteAll (sun22);
    deleteAll (sun23);
    countOfShifts ();
    });
//save jpg
const saveButton = document.getElementById('saveButton');
const table = document.getElementById('schedule');
      
    saveButton.addEventListener('click', function() {
    const buttons = table.querySelectorAll('button');
    buttons.forEach(function(button) {
        button.style.visibility = 'hidden';
        });
      
    html2canvas(table)
        .then(function(canvas) {
        buttons.forEach(function(button) {
        button.style.visibility = '';
        });
      
        const image = canvas.toDataURL('image/jpeg', 1.0);
        const downloadLink = document.createElement('a');
        downloadLink.href = image;
        downloadLink.download = 'table.jpg';
        downloadLink.click();
        });
    });


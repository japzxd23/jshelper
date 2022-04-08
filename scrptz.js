function waitForElement(querySelector, timeout=0){
    const startTime = new Date().getTime();
    return new Promise((resolve, reject)=>{
        const timer = setInterval(()=>{
            const now = new Date().getTime();
            if(document.querySelector(querySelector)){
                clearInterval(timer);
                resolve();
            }else if(timeout && now - startTime >= timeout){
                clearInterval(timer);
                reject();
            }
        }, 100);
    });
}

waitForElement("#rc-tabs-2-panel-1 > div:nth-child(8) > div > div > div > div > div > div > div > div > div > div.ant-table-container > div", 5000).then(function(){
const ccr = document.querySelector("#rc-tabs-2-panel-1 > div:nth-child(8) > div > div > div > div > div > div > div > div > div > div.ant-table-title > div");
const ccra = document.createElement('button');
const ccras = document.createElement('span');
ccra.setAttribute('class', 'ant-btn title-button-icon  ant-btn-primary ant-btn-icon-only');
ccra.setAttribute('onclick', 'funcx()');
ccra.innerHTML += './.';
ccr.appendChild(ccra);
ccra.appendChild(ccras);

const namea = document.querySelector("#rc-tabs-2-panel-1 > div:nth-child(2) > div > div > div > div > div > div > div > div.ant-table-title > div");
const nameb = document.createElement('button');
const namec = document.createElement('span');
nameb.setAttribute('class', 'ant-btn title-button-icon  ant-btn-primary ant-btn-icon-only');
namea.appendChild(nameb);
nameb.appendChild(namec);
namec.innerHTML += './.';


}).catch(()=>{
   
});

function funcx(){
  var element = "#rc-tabs-2-panel-1 > div:nth-child(3) > div > div > div > div > div > div > div > div > div > div.ant-table-container > div";

var aa = document.querySelector("head").outerHTML;
var text = "";
var a = document.querySelector("#rc-tabs-2-panel-1 > div:nth-child(8) > div > div > div > div > div > div > div > div > div > div.ant-table-container > div > table");
var rows = a.rows.length;
for (let i = 2; i < rows; i++){
  
try{
text += i-1+". Subject to "+document.querySelector("#rc-tabs-2-panel-1 > div:nth-child(8) > div > div > div > div > div > div > div > div > div > div.ant-table-container > div > table > tbody > tr:nth-child("+i+") > td:nth-child(2)").innerHTML+", recorded in Book "+document.querySelector("#rc-tabs-2-panel-1 > div:nth-child(8) > div > div > div > div > div > div > div > div > div > div.ant-table-container > div > table > tbody > tr:nth-child("+i+") > td:nth-child(4)").innerHTML+" Page "+document.querySelector("#rc-tabs-2-panel-1 > div:nth-child(8) > div > div > div > div > div > div > div > div > div > div.ant-table-container > div > table > tbody > tr:nth-child("+i+") > td:nth-child(5)").innerHTML+" in the official records of the "+document.querySelector("#rc-tabs-2-panel-1 > div:nth-child(1) > div > div.ant-row > div.ant-col.ant-col-5 > div > div > h4:nth-child(4)").innerHTML+" County Recording Office."+"\n\n";
}catch (e){alert(e);}
}
var myWindow = window.open('','','width='+screen.width+',height=700');
var doc = myWindow.document;
doc.open();
doc.write(aa+"<textarea rows=\"60\" cols=\"150\">"+text+"</textarea>");
doc.close();

};


const targetNode = document.body;
const counter = "0";
var com = "";
const config = { childList: true, subtree: true };


const callback = function(mutationsList, observer) {
    for(let mutation of mutationsList) {


        if (mutation.type === 'childList') {


const jj = document.body.querySelector("div[class='ant-modal-confirm-content']").innerHTML;

if (jj.includes('fully')) { 
document.querySelector('.close-icon').click();

}

        }
       
    }


};

const observer = new MutationObserver(callback);
observer.observe(targetNode, config);
   
    document.addEventListener("keyup", function(event) {

      if (event.altKey && event.key === "1") {
        try {
          document.querySelector("#rc-tabs-2-panel-1 > div:nth-child(2) > div > div > div > div > div > div > div > div.ant-table-title > div > span > button.ant-btn.button-htwt.ant-btn-dashed.ant-btn-square.ant-btn-icon-only").click();
        } catch (err) {
          document.querySelector("#rc-tabs-2-panel-1 > div:nth-child(2) > div > div > div > div.ant-empty-footer > div > button > span:nth-child(3)").click();

        }
      }

      if (event.altKey && event.key === "2") {
        try {
          document.querySelector("#rc-tabs-2-panel-1 > div:nth-child(3) > div > div > div > div > div > div > div > div > div > div.ant-table-title > div > span > button.ant-btn.button-htwt.ant-btn-dashed.ant-btn-square.ant-btn-icon-only").click();

        } catch (err) {
          document.querySelector("#rc-tabs-2-panel-1 > div:nth-child(3) > div > div > div > div.ant-empty-footer > div > button").click();
        }
      }

      if (event.altKey && event.key === "3") {

        try {
          document.querySelector("#rc-tabs-2-panel-1 > div:nth-child(4) > div > div > div > div > div > div > div > div > div > div.ant-table-title > div > span > button.ant-btn.button-htwt.ant-btn-dashed.ant-btn-square.ant-btn-icon-only").click();
        } catch (err) {
          document.querySelector("#rc-tabs-2-panel-1 > div:nth-child(4) > div > div > div > div.ant-empty-footer > div > button").click();
        }
      }

      if (event.altKey && event.key === "q") {

        try {
          document.querySelector("#rc-tabs-2-panel-1 > div:nth-child(5) > div > div > div > div > div > div > div > div > div > div.ant-table-title > div > span > button.ant-btn.button-htwt.ant-btn-dashed.ant-btn-square.ant-btn-icon-only").click();
        } catch (err) {
          document.querySelector("#rc-tabs-2-panel-1 > div:nth-child(5) > div > div > div > div.ant-empty-footer > div > button").click();
        }

      }

      if (event.altKey && event.key === "w") {
        try {
          document.querySelector("#rc-tabs-2-panel-1 > div:nth-child(6) > div > div > div > div > div > div > div > div > div > div.ant-table-title > div > span > button.ant-btn.button-htwt.ant-btn-dashed.ant-btn-square.ant-btn-icon-only").click();
        } catch (err) {
          document.querySelector("#rc-tabs-2-panel-1 > div:nth-child(6) > div > div > div > div.ant-empty-footer > div > button").click();
        }
      }


      if (event.altKey && event.key === "a") {
        try {
          document.querySelector("#rc-tabs-2-panel-1 > div:nth-child(7) > div > div > div > div > div > div > div > div > div > div.ant-table-title > div > span > button.ant-btn.button-htwt.ant-btn-dashed.ant-btn-square.ant-btn-icon-only").click();
        } catch (err) {
          document.querySelector("#rc-tabs-2-panel-1 > div:nth-child(7) > div > div > div > div.ant-empty-footer > div > button").click();
        }
      }


      if (event.altKey && event.key === "s") {
        try {
          document.querySelector("#rc-tabs-2-panel-1 > div:nth-child(8) > div > div > div > div > div > div > div > div > div > div.ant-table-title > div > span > button.ant-btn.button-htwt.ant-btn-dashed.ant-btn-square.ant-btn-icon-only").click();
        } catch (err) {
          document.querySelector("#rc-tabs-2-panel-1 > div:nth-child(8) > div > div > div > div.ant-empty-footer > div > button").click();
        }
      }

      if (event.altKey && event.key === "z") {

var divText = document.querySelectorAll('.ant-col.ant-col-24.subgridtable')[0].outerHTML;
var myWindow = window.open('','','width='+screen.width+',height=400');
var doc = myWindow.document;
doc.open();
doc.write(divText);
doc.close();

    }

    
          if (event.altKey && event.key === "b") {

var divText = document.querySelector("#rc-tabs-2-panel-1 > div:nth-child(8) > div > div > div > div > div > div > div > div > div > div.ant-table-container > div").outerHTML;
var myWindow = window.open('','','width='+screen.width+',height=400');
var doc = myWindow.document;
doc.open();
doc.write(divText);
doc.close();

    }

  if (event.altKey && event.key === "x") {
var he = document.querySelector("head").outerHTML;
var divText = document.querySelectorAll('.ant-col.ant-col-24.subgridtable')[1].outerHTML;
var myWindow = window.open('','','width='+screen.width+',height=400');
var doc = myWindow.document;
doc.open();
doc.write(divText);
doc.close();
    }

if (event.altKey && event.key === "c") {

var divText = document.querySelectorAll('.ant-col.ant-col-24.subgridtable')[2].outerHTML;
var myWindow = window.open('','','width='+screen.width+',height=500');
var doc = myWindow.document;
doc.open();
doc.write(divText);
doc.close();
    }


if (event.altKey && event.key === "r") {
  try {
var elemh = "<textarea rows=\"4\" disabled=\"\" style=\"margin: 0px; height: 464px; width: 653px;\">";
var eleme = "</textarea>";
var divText = document.querySelector("textarea[name='legalDescription']").innerHTML;
var myWindow = window.open('','','width='+screen.width+',height=500');
var doc = myWindow.document;
doc.open();
doc.write(elemh+divText+eleme);
doc.close();
}catch (err){
  alert(err);
}
    }



if (event.altKey && event.key === "v") {
try{
document.querySelectorAll('.ant-btn.icon-button.button-htwt.editbtn.ant-btn-primary.ant-btn-square.ant-btn-icon-only')[1].click();
setTimeout(function() {
 var x;
    var name=prompt("Please enter notes","");
    if (name!=null){
       x=name;
       document.querySelector('.ant-input').removeAttribute("spellcheck");
  var myTextArea = document.querySelectorAll('.ant-input')[2];
myTextArea.value += '\n'+name;

}
}, 800);
}catch(err){
  var x;
    var name=prompt("Please enter notes","");
    if (name!=null){
       x=name;
  var myTextArea = document.querySelectorAll('.ant-input')[2];
myTextArea.value += '\n'+name;
}
}

}

    });
    
    

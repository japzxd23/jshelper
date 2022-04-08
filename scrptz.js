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

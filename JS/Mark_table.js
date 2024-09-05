function MakeMarksPage() {
//CAF
var CAF411 = document.getElementById("CAF_Name").innerHTML;
var CAF411_FA1 = document.getElementById("CAF_FA1").innerHTML;
var CAF411_FA2 = document.getElementById("CAF_FA2").innerHTML;
var CAF411_FA3 = document.getElementById("CAF_FA3").innerHTML;
//PRP
var PRP411 = document.getElementById("PRP_Name").innerHTML;
var PRP411_FA1 = document.getElementById("PRP_FA1").innerHTML;
var PRP411_FA2 = document.getElementById("PRP_FA2").innerHTML;
var PRP411_FA3 = document.getElementById("PRP_FA3").innerHTML;
//PPD
var PPD411 = document.getElementById("PPD_Name").innerHTML;
var PPD411_FA1 = document.getElementById("PPD_FA1").innerHTML;
var PPD411_FA2 = document.getElementById("PPD_FA2").innerHTML;
var PPD411_FA3 = document.getElementById("PPD_FA3").innerHTML;
//DLP
var DLP411 = document.getElementById("DLP_Name").innerHTML;
var DLP411_FA1 = document.getElementById("DLP_FA1").innerHTML;
var DLP411_FA2 = document.getElementById("DLP_FA2").innerHTML;
var DLP411_FA3 = document.getElementById("DLP_FA3").innerHTML;
//CWD
var CWD412 = document.getElementById("CWD_Name").innerHTML;
var CWD412_FA1 = document.getElementById("CWD_FA1").innerHTML;
var CWD412_FA2 = document.getElementById("CWD_FA2").innerHTML;
var CWD412_FA3 = document.getElementById("CWD_FA3").innerHTML;
//ENA
var ENA412 = document.getElementById("ENA_Name").innerHTML;
var ENA412_FA1 = document.getElementById("ENA_FA1").innerHTML;
var ENA412_FA2 = document.getElementById("ENA_FA2").innerHTML;
var ENA412_FA3 = document.getElementById("ENA_FA3").innerHTML;
//CF
var CF412 = document.getElementById("CF_Name").innerHTML;
var CF412_FA1 = document.getElementById("CF_FA1").innerHTML;
var CF412_FA2 = document.getElementById("CF_FA2").innerHTML;
var CF412_FA3 = document.getElementById("CF_FA3").innerHTML;
//RD
var RD412 = document.getElementById("RD_Name").innerHTML;
var RD412_FA1 = document.getElementById("RD_FA1").innerHTML;
var RD412_FA2 = document.getElementById("RD_FA2").innerHTML;
var RD412_FA3 = document.getElementById("RD_FA3").innerHTML;
//WIL
var WIL = document.getElementById("WIL_Name").innerHTML;
var WIL_M = document.getElementById("WIL_Mark").innerHTML;
var FA1 = document.getElementById("FA1").innerHTML;
var FA2 = document.getElementById("FA2").innerHTML;
var FA3 = document.getElementById("FA3").innerHTML;

Marks = [
CAF411, FA1, CAF411_FA1, FA2, CAF411_FA2, FA3, CAF411_FA3,
PRP411, FA1, PRP411_FA1, FA2, PRP411_FA2, FA3, PRP411_FA3,
PPD411, FA1,  PPD411_FA1, FA2, PPD411_FA2, FA3, PPD411_FA3, 
DLP411, FA1,  DLP411_FA1, FA2, DLP411_FA2, FA3, DLP411_FA3, 
CWD412, FA1,  CWD412_FA1, FA2, CWD412_FA2, FA3, CWD412_FA3,
ENA412, FA1,  ENA412_FA1, FA2, ENA412_FA2, FA3, ENA412_FA3,
CF412, FA1,  CF412_FA1, FA2, CF412_FA2, FA3, CF412_FA3,
ENA412, FA1,  ENA412_FA1, FA2, ENA412_FA2, FA3, ENA412_FA3,
RD412, FA1,  RD412_FA1, FA2, RD412_FA2, FA3, RD412_FA3,
WIL, WIL_M
];
console.log(Marks);
    }
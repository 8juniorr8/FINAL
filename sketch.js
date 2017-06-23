
///Screen 1: INPUT 


/* Formulas:
Mt = amount of plastic in the ocean at moment t (in metric tons)
MZero = amount of plastic in the ocean at moment t = 0 (in metric tons)
e = Euler Number, const 
k =  degration rate of plastics in the ocean (in per year)
In = Inflow  rate of plastics into the oveans (in Metric tonnes per year)
******* Mt = M0 * e –k*t + ln/ k (1- e –k*t) ********


*/


const degrationRate = math.E;
var mT;
var mZero;
var inRate;
var inFlowRateYear;
var inFlowDayDay = inFlowRateYear/365;
var plasticLifetimeYear = 50;
var t;

var halfTime = {
BioBag: 1, 
ConBag: 10, 
StyroCup: 50,
PlasBottle: 450,
Microplastic: 10
};

mT = math.eval(2+3); 

console.log(degrationRate);
console.log(mT);


///Screen Two: Accumulation in Foodchain


/*
Direct Plastic Intake
phIngestion Year = human Intake of plastic in Mussels per Year (in particles)
phIngestion Portion = human Intake of plastic in portion Mussels (in particles)  
mpPollutionFood = microPlastic Pollution in Food (in particles/gram)
AvFoodConsumption = average food consumption per Year (in kg)
AvFoodPortion = average food consumption per Portion (in g)

pIngestionYear  =   AvFoodConsumption * mpPollutionFood 
pIngestion Portion =   AvFood Portion * mpPollutionFood 

Vectorisierung PCB
pcbIngestion Year = human pollution of pcb per Year (in microgram/gram)
pcbIngestion Portion = human pollution of pcb per Portion (in microgram/gram)
mpPCBPollution =   Contamination found in Animal Tissue (in ng/g)
AvFoodConsumption = average food consumption per Year (in kg)
AvFoodPortion = average food consumption per Portion (in g)
pcbIngestionYear = AvFoodConsumption  * Microplastic PCB Contamination in ng/g 
pcbIngestionPortion = AvFoodPortion  * Microplastic PCB Contamination in ng/g 



///Screen Three: Accumulation in Body

 
x = accumulation of pollutants in human body in percent, (e.g x = 0,8  equals 80 %)

f(x) = 1 – 1/(x+1)

*/




function setup() {

}

function draw() {

}

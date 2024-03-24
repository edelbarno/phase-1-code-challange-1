function getPayee(basicSalary){
    console.log("Calculating Payee");
    switch (basicSalary){
        case basicSalary <= 24000:
            return 0.1 * basicSalary;
        case basicSalary <= 32333:
            return 0.25 * basicSalary;
        case basicSalary <= 500000:
            return 0.3 * basicSalary;
        case basicSalary < 800000:
            return 0.325 * basicSalary        
        default:
            return 0.35 * basicSalary

    }
}
function getNHIFDeducions(basicSalary){
    switch (basicSalary){
        case basicSalary <= 5999:
            return 150;
        case basicSalary <= 7999:
            return 300;
        case basicSalary <= 11999:
            return 400;
        case basicSalary <= 14999:
            return 500;
        case basicSalary <= 19999:
            return 600;
        case basicSalary <= 24999:
            return 750;  
        case basicSalary <= 29999:
            return 850;
        case basicSalary <= 34999:
            return 900;

        case basicSalary <= 39999:
            return 950;
        case basicSalary <= 44999:
            return 1000;
        case basicSalary <= 49999:
            return 1100;
        case basicSalary <= 59999:
            return 1200;
        case basicSalary <= 69999:
            return 1300;
        case basicSalary <= 79999:
            return 1400;
        case basicSalary <= 89999:
            return 1500;
        case basicSalary <= 99999:
            return 1600;
        default:
            return 1700;

    }
}
 
function getNSSFDeductions(basicSalary){
//calculate NSSF deductions

const NSSF = 0.06 * basicSalary;
return NSSF;

}

function calculateSalary({ basicSalary, benefits}){

    const Payee = getPayee(basicSalary);
    const NHIF = getNHIFDeducions(basicSalary);
    const NSSF = getNSSFDeductions(basicSalary);
 
    console.log({ NSSF, NHIF , Payee });

}
calculateSalary({ basicSalary : 100000 , benefits: 15})

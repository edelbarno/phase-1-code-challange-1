function speedDetector(speed){
    const speedLimit = 70;
    const addDemeritperKm =5;
    const demeritLimit = 12; 
if (speed <= speedLimit){
    return 'Ok';
}
const excessSpeed = speed - speedLimit;
const demeritpoints = Math.floor(excessSpeed/addDemeritperKm);

if(demeritpoints > demeritLimit){
    return 'license suspended';

}else {
    console.log(demeritpoints);
    return;
}

}
console.log(speedDetector(60))

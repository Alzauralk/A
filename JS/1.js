const myAlert = () => {
    const x = "HELP!";
    let count = 0;
    const alerter = () => {
        alert(`${x} ${++count}`);
    };
    return alerter;

};
//log will happen first!
const funcAlert = myAlert();
const funcAlert2 = myAlert();
funcAlert();
funcAlert2();
funcAlert2();
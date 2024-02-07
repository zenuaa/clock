// First clock

// const clock = (time) => {

//     const currentTime = () => {
//         return new Date().toLocaleTimeString();
//     }
//     const tickTack = () => {
//         const timerId = setInterval(() => {
//             if (time !== 0) {
//                 console.clear();
//                 console.log(currentTime());
//                 time--;
//             }
//             else {
//                 clearInterval(timerId)
//             }
//         }, 1000);
//     }
//     tickTack(10);
// }

// clock(5);

// Second clock

const getTime = () => new Date();
const clear = () => console.clear();

const serializeClockTime = date => ({
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds()
});


const appendAMPM = clockTime => ({
    ...clockTime,
    ampm: clockTime.hours >= 12 ? 'PM' : 'AM'
})

const civilianHours = timeObj => ({
    ...timeObj,
    hours: timeObj.hours > 12 ? timeObj.hours - 12 : timeObj.hours
});

const formatClock = formatStr => timeObj =>
    formatStr
        .replace('hh', timeObj.hours < 10 ? '0' + timeObj.hours : timeObj.hours)
        .replace('mm', timeObj.minutes < 10 ? '0' + timeObj.minutes : timeObj.minutes)
        .replace('ss', timeObj.seconds < 10 ? '0' + timeObj.seconds : timeObj.seconds)
        .replace('tt', timeObj.ampm);


const tickTack = (count) => {
    let i = 0;
    const intervalId = setInterval(() => {
        if (i < count) {
            const timeObj = civilianHours(appendAMPM(serializeClockTime(getTime())));
            const formattedTime = formatClock('hh:mm:ss tt')(timeObj);
            clear();
            console.log(formattedTime);
            i++;
        } else {
            clearInterval(intervalId);
        }
    }, 1000);
};
tickTack(10)
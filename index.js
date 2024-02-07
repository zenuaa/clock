// First clock
const currentTime = () => {
    return new Date().toLocaleTimeString();
}
const tickTack= (time) => {
    const timerId = setInterval(() => {
        if (time !== 0) {
            console.clear();
            console.log(currentTime());
            time --;
        }
        else {
            clearInterval(timerId)
        }
    }, 1000);
}
// tickTack(10);

// Second clock

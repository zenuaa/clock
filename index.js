// First clock

const clock = (time) => {

    const currentTime = () => {
        return new Date().toLocaleTimeString();
    }
    const tickTack = () => {
        const timerId = setInterval(() => {
            if (time !== 0) {
                console.clear();
                console.log(currentTime());
                time--;
            }
            else {
                clearInterval(timerId)
            }
        }, 1000);
    }
    tickTack(10);
}

clock(5);

// Second clock

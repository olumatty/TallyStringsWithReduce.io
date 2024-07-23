const timeNodes = Array.from(document.querySelectorAll('[data-time]'));

const seconds = timeNodes
    .map(node => node.dataset.time)
    .map(timeCode => {
        console.log('timeCode:', timeCode)
        const [minutes, secs] = timeCode.split(':').map(parseFloat);

        console.log('mins:',minutes,'secs:', secs)
        return(minutes * 60) + secs;
    })
    .reduce((total, vidSeconds) => total + vidSeconds);

    let secondsLeft = seconds;
    const hours = Math.floor(secondsLeft / 3600);
    secondsLeft = secondsLeft % 3600;

    const mins = Math.floor(secondsLeft / 60);  
    secondsLeft = secondsLeft % 60;

    console.log(hours,mins, secondsLeft);
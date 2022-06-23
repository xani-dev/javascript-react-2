const sleep = ms => new Promise(r => setTimeout(r, ms));

const main = async () => {
    let startTime = new Date();
    await sleep(2000)
    let endTime = new Date();
    
    // Compute delta
    let delta = (endTime.getTime() - startTime.getTime()) / 1000;
    console.log(delta)
}

main()


function callback(func, time) {
    return setTimeout(() => {
        func
    }, time)
}

callback(console.log("oin"), 1000)
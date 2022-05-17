Fucntion doTask() {
    console.log(`Task is complete`)
}

function startTask() {
    return setInterval(doTask, 5000)
}
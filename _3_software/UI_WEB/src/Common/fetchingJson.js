const fetchingJson = () => {
    let cfgCommon
    let cfgLampe
    let cfgPomodoro
    fetch('http://localhost:3000/localCFG.json').then((resp) => resp.json()).then(({ common, lampe, pomodoro }) => {
        cfgCommon = common
        cfgLampe = lampe
        cfgPomodoro = pomodoro
    })

    console.log('cfgCommon', cfgCommon)
    console.log('cfgLampe', cfgLampe)
    console.log('cfgPomodoro', cfgPomodoro)

    return {common: cfgCommon,
            lampe: cfgLampe,
            pomodoro: cfgPomodoro}
}

export default fetchingJson
export const devLog = (name, params) => {
    console.log('/*----------------------------------------\n\n')
    console.log(`\t${name} :\n\t`, params)
    console.log('\n----------------------------------------*/')
}


export const devWarning = (name, params, err=null) => {
    console.warn('/!\\----------------------------------------/!\\\n\n')
    err && console.warn(`\tSomthing get wrong : ${err}`)
    console.warn(`${name} :\n\t`, params) 
    console.warn('\n/!\\----------------------------------------/!\\\n')
    
}

export const devError = (name, params, err=null) => {
    console.log('/!\\----------------------------------------/!\\\n\n')
    err && console.error(`\tSomthing get wrong : ${err}`)
    console.error(`${name} :\n\t`, params) 
    console.error('\n/!\\----------------------------------------/!\\\n')
    
}

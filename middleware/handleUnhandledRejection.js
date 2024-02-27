

const handleUnhandledRejection =  (err , server) =>{

    console.log(`unhandledRejection ${err}`)
    
// use it to shot down server after complete all requiste 
    server.close(()=>{
        console.log('app shot down ')
        process.exit(1)
    })
    
}

module.exports = handleUnhandledRejection;
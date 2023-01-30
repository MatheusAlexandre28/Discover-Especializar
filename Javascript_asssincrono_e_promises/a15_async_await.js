const promessa = new Promise( function( resolve, reject ) {

  return resolve('ok')
})

promessa
  .then(function(response){
    console.log(response)
  })
  .catch(function (error){
    console.log(error)
  })
  .finally( function(){
    console.log('sempre irei executar')
  })
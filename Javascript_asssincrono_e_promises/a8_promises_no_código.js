/*
  * Promese
  *
  *  A promessa de qe algo irá acontecer
  * Poderá dar certo ou errado,
  * mas irá acontecer
*/

let aceitar = false 

console.log('pedir uber')
const promessa = new Promise((resolve, reject)) => {
  return reject('carro chegou')
}

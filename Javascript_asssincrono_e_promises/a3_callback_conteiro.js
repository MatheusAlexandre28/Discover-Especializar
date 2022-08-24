// Funções aceitam qualuqer tipo de dado como argumento
function imprimirDado(dado) {
  console.log('outras tarefas')
  console.log(dado())
}

imprimirDado(function() {
  return 'Ola mundo'
})
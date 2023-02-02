// fetch('https://api.github.com/users/maykbrito')
// .then( response = response.json())
// .then( data => fetch(data.repos_url))
// .then( res => res.json())
// .then( d => console.log(d))
// .catch( err => console.log(err))

//ent parece q o codigo fica com uma maneira mais sincrona, este é o grande lance do async await, transformar um codigo q antes tinha encadeamento em uma ideia um pouco mais sincrona.

async function start(){
  const response = await fetch('https://api.github.com/users/maykbrito')
  const user = await response.json()
  const reposResponse = await fetch(user.repos_url)
}

start()

// Tbm podemos usar este codigo mais sincrono com o try catch para pegar o erro
async function start(){
  try {
    const response = await fetch('https://api.github.com/users/maykbrito')
    const user = await response.json()
    const reposResponse = await fetch(user.repos_url)
    const repos = await reposResponse.json()
    console.log(repos)
  }
  catch(e){
    console.log(e);
  }
}

start()

// ou deste jeito
async function start(){
  const response = await fetch('https://api.github.com/users/maykbrito')
  const user = await response.json()
  const reposResponse = await fetch(user.repos_url)
  const repos = await reposResponse.json()
  console.log(repos)
}

start().catch(e => console.log(e))

// usando o then para tirar linhas
async function start(){
  const user = await fetch('https://api.github.com/users/maykbrito').then(r => r.json())
  const repos = await fetch(user.repos_url).then(r => r.json())
  console.log(repos)
}

start().catch(e => console.log(e))
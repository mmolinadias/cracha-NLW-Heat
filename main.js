const socialMediaUsers ={
  github: 'mmolinadias',
  facebook: 'matheus.molinadias',
  twitter: 'mmxlina',
  instagram: 'mxleraa'
}

function changeUsers(){
  for (let li of socialMedias.children){
    const social = li.getAttribute('class')
    li.children[0].href=`https://${social}.com/${socialMediaUsers[social]}`
  }
}
changeUsers()

function getInfoGit (){
  const url =`https://api.github.com/users/${socialMediaUsers.github}`

  fetch(url)
  .then(response => response.json())
  .then(data=>{
    username.textContent=data.name
    bio.textContent=data.bio
    gitLink.href=data.html_url
    photo.src=data.avatar_url
    gitLogin.textContent=data.login
  })
  
}
getInfoGit()
const LinksSocialMedia = {
  github: 'charlesYS',
  youtube: 'UC9d3rxDF9w8qwW-4xVWnDkQ',
  facebook: 'charles.mendes.33865',
  instagram: 'chachatheysay',
  twitter: 'CharlesYS2'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`
  // comando fetch ele vai até url dá api e pega o que a api responde e traz pra gente
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGithubProfileInfos()

/* ARROW FUNCTIONS
  functions nomedafuncao(argumentos)

  arrow/

  argumento => { }
*/

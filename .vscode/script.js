function toogleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  //pegar a tag img
  const img = document.querySelector("#profile img")
  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, add a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    //se não, manter a imagem original
  } else {
    img.setAttribute("src", "./assets/coder_image.png")
  }
}

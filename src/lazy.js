let counter = 0;
let counterLoading = 0;

const isIntersecting= (entry) => {
  return entry.isIntersecting //true dentro de la pantalla y false si esta fuera de la pantalla
}
const loadImage = (entry)=>{
  const container = entry.target;
  const imagen = container.firstChild;
  const url = imagen.dataset.src;
  imagen.src = url;
  imagen.onload = () =>{
    counterLoading +=1;
    messageLoad();
  }
  observer.unobserve(container) //ya no cuenta cuando scroll hacia arriba, por q escucha una sola vez
  
}

const observer = new IntersectionObserver((entries)=>{
  entries //estas entradas es un array
    .filter(isIntersecting)
    .forEach(loadImage)
})

export const messageLoad = ()=>{
  const message = `⚪️ Total Imágenes: ${counter}
  🟣 Imágenes cargadas: ${counterLoading}
  -------------------------------------
  `
  console.log(message)
}

export const registerImage = (image) =>{
  observer.observe(image) //observa la imagen que estamos recibiendo
  counter ++;
  messageLoad();
}

export const cleanImage= (mountNode) => {
  const cleanImages = [...mountNode.childNodes];
  cleanImages.map((item)=>{
    item.remove()
    counter = 0;
    counterLoading = 0;
  })
  messageLoad();
}
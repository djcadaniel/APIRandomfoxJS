import { registerImage } from './lazy';
import { messageLoad } from './lazy'
import { cleanImage } from './lazy'
//crear una imagen
//agtregar a nuestro contenedor 

const createImageNode = () =>{

  const minimum = 1;
  const maximum = 123;
  const random = () => Math.floor(Math.random() * (maximum - minimum) + minimum);

  const container = document.createElement('div');
  container.className = 'p-3';
  container.style.width = '200'
  container.style.height = '200'
  container.style.minWidth = 320
  // container.style = 'background-color: green';

  const image = document.createElement('img');
  image.className = 'mx-auto rounded-md bg-gray-300';
  image.dataset.src = `https://randomfox.ca/images/${random()}.jpg`;
  image.width = 320;

  const imageWrapper = document.createElement('div');
  imageWrapper.style = 'background-color: gray';
  imageWrapper.style.width = '200'
  imageWrapper.style.height = '200'
  imageWrapper.style.borderRadius = '15px'

  container.appendChild(imageWrapper);
  imageWrapper.appendChild(image);
  return [container,imageWrapper];
};

const mountNode = document.getElementById('images');
mountNode.className = 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-flow-row gap-4';

const addButton = document.querySelector('button');
const cleanButton  = document.querySelector('.btnClean')

const addImage = () => {
  const [container, imageWrapper] = createImageNode();
  mountNode.append(container);
  registerImage(imageWrapper);
}


addButton.addEventListener('click', addImage);
cleanButton.addEventListener('click',()=> cleanImage(mountNode));
// Importa la biblioteca Three.js desde el archivo three.js en el mismo directorio.
import * as THREE from './three.js';

// Crea una nueva escena donde se colocarán los objetos 3D.
const scene = new THREE.Scene();

// Crea una cámara de perspectiva para ver la escena.
// Los parámetros son: campo de visión, relación de aspecto, distancia cercana y distancia lejana.
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Crea un renderizador WebGL para renderizar la escena en el navegador.
const renderer = new THREE.WebGLRenderer();

// Establece el tamaño del renderizador para que coincida con el tamaño de la ventana.
renderer.setSize(window.innerWidth, window.innerHeight);

// Agrega el renderizador al cuerpo del documento HTML.
document.body.appendChild(renderer.domElement);

// Crea una geometría de cubo con lados de longitud 2.
const geometry = new THREE.BoxGeometry(2,2,2);

// Crea un material básico con color rojo para el cubo.
const material = new THREE.MeshBasicMaterial({ color: 'green' });

// Crea un objeto de malla combinando la geometría y el material del cubo.
const cube = new THREE.Mesh(geometry, material);

// Agrega el cubo a la escena.
scene.add(cube);

// Ajusta la posición de la cámara para que esté a cierta distancia de la escena.
camera.position.z = 5;

// Función de animación que se ejecutará en cada fotograma de la animación.
function animate() {
    // Rota el cubo sobre los ejes X e Y.
    //cube.rotation.x += 0.01;
    cube.rotation.y += 0.10;
    //cube.rotation.z += 0.01;

    // Renderiza la escena con la cámara actual.
    renderer.render(scene, camera);
}

// Establece la función animate como un bucle de animación.
renderer.setAnimationLoop(animate);

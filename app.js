//guardamos los contenedores de nuestros colores 
const colores = document.getElementsByClassName("color-container");
//Creamos un arreglo que contendra los valores  RGB correspondientes
// 								R  G  B
const colorRGB = [0, 0, 0];
//En un ciclo for para recorrer los 3 elementos, asignamos lo que hara al momento de actualizar el valor
for (let i = 0; i < colores.length; i++){	
	//Accedemos al elemento input
	colores[i].children[1].addEventListener('input', () => {
		//Obtenemos el valor del color y lo guardamos en el arreglo en la posición correspondiente a dicho color
		colorRGB[i] = colores[i].children[1].value;
		//ya que tenemos el color, actualizamos el color de fondo del body
		document.body.style.backgroundColor = `rgb(${colorRGB[0]}, ${colorRGB[1]}, ${colorRGB[2]})`;
		//actualizamos el texto de la etiqueta p con el valor del color correspondiente actual
		colores[i].children[2].textContent = colores[i].children[1].value;		
	});
}
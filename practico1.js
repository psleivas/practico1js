//           Practico N1 Javascript
//             leiva Salazar Pablo


//   Ejercicio uno 

function Piramide(numero) {
    for (let i = 1; i <= numero; i++) {
      let linea = '';
           for (let k = 1; k <= i; k++) {
        linea += k + ' ';
      }
      console.log(linea);
      }
  }
 
  Piramide(6);
  
  // Ejercicio dos
  
  function elemeCoin(array1, array2) {
    const coincidentes = [];
    
    for (let i = 0; i < array1.length; i++) {
      if (array2.includes(array1[i])) {
        coincidentes.push(array1[i]);
      }
    }
    
    return coincidentes;
  }
  
  const array1 = [1, 2, 3, 4, 5];
  const array2 = [3, 4, 5, 6, 7];
  const coincidentes = elemeCoin(array1, array2);
  console.log(coincidentes);
   
  
// Ejercicio 3.1

  class Producto {
    constructor(nombre) {
      this.nombre = nombre;
    }
  }
  
  class Carrito {
    constructor() {
      this.montoTotal = 0;
      this.productos = [];
    }
  
    agregarProducto(nombre) {
      const producto = new Producto(nombre);
      this.productos.push(producto);
    }
  }
  
  const carrito = new Carrito();
  carrito.montoTotal = 10;
  carrito.agregarProducto("Leche");
  

 // Ejercicio 3.2
  class Producto {
    constructor(nombre, precio, unidades) {
      this.nombre = nombre;
      this.precio = precio;
      this.unidades = unidades;
    }
  }
  
  class Carrito {
    constructor() {
      this.montoTotal = 0;
      this.productos = [];
    }
  
    agregarProducto(nombre, precio, unidades) {
      const producto = new Producto(nombre, precio, unidades);
      this.productos.push(producto);
      this.montoTotal += precio * unidades;
    }
  }
  
  const carrito = new Carrito();
  carrito.agregarProducto("Leche", 2.5, 3);
  console.log(carrito.montoTotal); // Imprime total
  console.log(carrito.productos); // Imprime producto

    // Ejercicio 3.3

  class Producto {
    constructor(nombre, precio, unidades) {
      this.nombre = nombre;
      this.precio = precio;
      this.unidades = unidades;
    }
  }
  
  class Carrito {
    constructor() {
      this.montoTotal = 0;
      this.productos = [];
    }
  
    agregarProducto(nombre, precio, unidades) {
      // Verificar si el producto ya existe en el carrito
      const productoExistente = this.productos.find(producto => producto.nombre === nombre);
      
      if (productoExistente) {
        console.log(`El producto "${nombre}" ya existe con ${productoExistente.unidades} unidades.`);
      } else {
        const producto = new Producto(nombre, precio, unidades);
        this.productos.push(producto);
        this.montoTotal += precio * unidades;
      }
    }
  }
  
  
  const carrito = new Carrito();
  carrito.agregarProducto("Leche", 2.5, 3); // Agrega el producto normalmente
  carrito.agregarProducto("Leche", 2.5, 2); // Imprime el mensaje de que el producto ya existe
  console.log(carrito.montoTotal); // Imprime total
  console.log(carrito.productos); // Imprime Producto
  
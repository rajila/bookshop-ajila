# Book Shop

'**`Book Shop`**' es un portal web en donde podrá encontrar todo tipo de libro y poder adquirirlo sin moverse de casa.

No olvide que '**`Book Shop`**' siempre ofrece los mejores precios que la competencia.

> Nota: Realizamos entregas en toda España con envío **GRATIS**.

## Categorías
Nuestra tienda de libros cuenta actualmente con 3 tipos de categorías, en donde podra encontrar diferentes tipos de libros a su gusto.
- Computación
- Matemáticas
- Medicina

## Funcionalidades
- Ver catálogo de libros disponibles en la tienda.
- Mostrar libros por categoría.
- Ver detalle del libro.
- Agregar uno o varios ejemplares de un libro al carrito de compras.
- Eliminar ítems del carrito de compras.
- Vacíar el carrito de compras.
- Tramitar una orden de compra.
- Ver ticket de compra

## Diagrama de componentes
A continuación se detallan los componentes utilizados en el desarrollo de la aplicación.

- #### Componente general
<p align="center">
  <img src="https://github.com/rajila/bookshop-ajila/blob/main/resource_doc/componenteGeneral.drawio.png">
</p>

- #### Componente barra de menú
<p align="center">
  <img src="https://github.com/rajila/bookshop-ajila/blob/main/resource_doc/componenteNavBar.drawio.png">
</p>

- #### Componente de catálogo de libros
<p align="center">
  <img src="https://github.com/rajila/bookshop-ajila/blob/main/resource_doc/componenteInicio.drawio.png">
</p>

- #### Componente detalle del libro
<p align="center">
  <img src="https://github.com/rajila/bookshop-ajila/blob/main/resource_doc/componentItemDetalle.drawio.png">
</p>

- #### Componente carrito de compras
<p align="center">
  <img src="https://github.com/rajila/bookshop-ajila/blob/main/resource_doc/componentCart.drawio.png">
</p>

- #### Componente tramitar pedido
<p align="center">
  <img src="https://github.com/rajila/bookshop-ajila/blob/main/resource_doc/componentOrder.drawio.png">
</p>

- #### Componente ticket de compra
<p align="center">
  <img src="https://github.com/rajila/bookshop-ajila/blob/main/resource_doc/componentTicket.drawio.png">
</p>

## Diagrama de colecciones en Firebase
A continuación se listan las colecciones usadas en la implemtación de la aplicación.
- **books**.- Almacena los libros disponibles en la aplicación.
- **categories**.- Almacena las categorías, las cuales permiten clasificar a los libros.
- **orders**.- Almacena la orden de compra del cliente, en donde guarda los items y la información del cliente.

<p align="center">
  <img src="https://github.com/rajila/bookshop-ajila/blob/main/resource_doc/diagramaClases.drawio.png">
</p>

## Dependencias de la aplicación
A continuación se listan las depencias utilizadas para el desarrollo de la aplicación.
- **ReacJS** ^18.1.0 - Librería principal
- **React Router DOM** ^6.3.0 - Navegación de la aplicación.
- **Bootstrap** ^5.1.3 - Maquetación y estilos.
- **React icons** ^4.4.0 - Iconos de la aplicación.
- **Firebase** ^9.8.3 - Servicio de base de datos.

## Demostración de la aplicación
![image description](https://github.com/rajila/bookshop-ajila/blob/main/resource_doc/BookShopNav.gif)
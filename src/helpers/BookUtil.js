const BookCategories = {
      computacion: "computacion",
      matematicas: "matematicas",
      medicina: "medicina"
};

const BookCategoriesLabel = {
      computacion: "Computación",
      matematicas: "Matemáticas",
      medicina: "Medicina"
};

const BookUtil = {
      data: [
            {
                  id: 1,
                  title: 'CriptoMonedas',
                  description: `Asegure sus activos hoy y opere con vista al futuro. Usted estará bien preparado para la era digital y ya se beneficiará de ventajas como generosas opciones de financiación, nuevas formas de comercio de acciones, aumento extremo del valor de su propia inversión y mucho más.`,
                  publication: 2021,
                  autor: 'William Lakefield',
                  price: 14.95,
                  stock: 10,
                  category: BookCategories.computacion,
                  pictureUrl: 'CriptoMonedas.jpg'
            },
            {
                  id: 2,
                  title: 'Docker In Action',
                  description: `The idea behind Docker is simple. Create a tiny virtual environment called a container that holds just your application and its dependencies. The Docker engine uses the host operating system to keep track of your containers. Applications running inside containers share resources, making their footprints small. They are easy to install, manage, and remove. Docker in Action, Second Edition  teaches you to create, deploy, and manage applications hosted in Docker containers running on Linux`,
                  publication: 2022,
                  autor: 'Jeff Nickoloff, Stephen Kuenzli, Bret Fisher',
                  price: 46.17,
                  stock: 2,
                  category: BookCategories.computacion,
                  pictureUrl: 'DockerInAction.jpg'
            },
            {
                  id: 3,
                  title: 'Patrones de Diseño',
                  description: `Es un libro de patrones de diseño que describen soluciones simples y elegantes para problemas específicos del diseño de software orientado a objetos.`,
                  publication: 2002,
                  autor: 'César Fernández Acebal',
                  price: 39.76,
                  stock: 1,
                  category: BookCategories.computacion,
                  pictureUrl: 'PatronDisenio.jpg'
            },
            {
                  id: 4,
                  title: 'The Road to React',
                  description: `In "The Road to React" you will learn about all the fundamentals of React.js with Hooks while building a full-blown React application step by step. While you create the React application, every chapter will introduce you to a new React key feature. However, there is more than only the fundamentals: The book dives into related topics (e.g. React with TypeScript, Testing, Performance Optimizations) and advanced feature implementations like client- and server-side searching. At the end of the book, you will have a fully working deployed React application.`,
                  publication: 2022,
                  autor: 'Robin Wieruch',
                  price: 27.82,
                  stock: 7,
                  category: BookCategories.computacion,
                  pictureUrl: 'RoadReact.jpg'
            },
            {
                  id: 5,
                  title: 'Atlas de anatomía humana',
                  description: `Nueva edición del atlas de anatomía humana concebido desde una perspectiva clínica gracias a las incomparables ilustraciones Netter. Nueva sección que contiene ilustraciones de cuerpo entero que muestran la anatomía de superficie, los vasos sanguíneos, los nervios y los vasos linfáticos. Proporcionan, por primera vez, una imagen completa del cuerpo humano.`,
                  publication: 2019,
                  autor: 'DRK EDICION SL',
                  price: 59.89,
                  stock: 15,
                  category: BookCategories.medicina,
                  pictureUrl: 'AtlasAnatomiaHumana.jpg'
            },
            {
                  id: 6,
                  title: 'Cálculo diferencial',
                  description: `El libro Cálculo diferencial presenta, tanto la teoría como los ejercicios, en forma asequible para cualquier estudiante de nuevo ingreso en escuelas o facultades de ingeniería. Por esta razón se ha incluido en él gran número de gráficas, ejemplos y ejercicios. Hemos puesto atención en una didáctica útil para los procesos de abstracción implícitos en el contenido matemático desglosado en sus 10 capítulos.`,
                  publication: 2008,
                  autor: 'Ernesto Javier Espinosa Herrera, Ignacio Canals Navarrete, Manuel Meda Vidal, Rafae Pérez Flores',
                  price: 29.64,
                  stock: 3,
                  category: BookCategories.matematicas,
                  pictureUrl: 'CalculoDiferencial.jpg'
            },
            {
                  id: 7,
                  title: 'Álgebra lineal',
                  description: `Este libro tiene como objetivo el estudio del Álgebra Lineal, a través de la comprensión de los conceptos teóricos y del manejo adecuado de los instrumentos y técnicas que esta materia proporciona.`,
                  publication: 2013,
                  autor: 'Paloma Sanz Alvaro, Francisco J. Vázquez Hernández',
                  price: 27.55,
                  stock: 0,
                  category: BookCategories.matematicas,
                  pictureUrl: 'AlgebraLineal.jpg'
            } 
      ]
}

export const dataBook = BookUtil.data;
export const categoriesLabel = BookCategoriesLabel;
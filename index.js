const express = require('express');
const dotenv = require('dotenv');

const app = express();
const PORT = process.env.PORT || 3000;
const DB_URL = process.env.DB_URL;

// Cargar el archivo de entorno correcto según NODE_ENV
if (process.env.NODE_ENV === 'production') {
  dotenv.config({ path: '.env.production' });
} else {
  dotenv.config({ path: '.env' });
}

console.log(`Entorno actual: ${process.env.NODE_ENV}`);

// Configurar el motor de vistas
app.set('view engine', 'ejs');
app.set('views', './views');

// Middleware para archivos estáticos
app.use(express.static('public'));

// Importar rutas
const mainRouter = require('./routes/main');
app.use('/', mainRouter);

app.get('/', (req, res) => {
  const testimonials = [
      { name: 'Oliver', story: 'Oliver fue rescatado de la calle y ahora vive feliz con su nueva familia. Es muy juguetón y le encanta explorar su nuevo hogar.', adopter: 'María' },
      { name: 'Luna', story: 'Luna llegó a nosotros en mal estado, pero con mucho amor y cuidados, se recuperó por completo. Hoy es la reina de su casa.', adopter: 'Carlos' },
      { name: 'Max', story: 'Max fue encontrado abandonado, pero ahora disfruta de largos paseos por el jardín y muchas caricias de su nueva familia.', adopter: 'Ana' },
      { name: 'Mia', story: 'Mia es una gata cariñosa que encontró su hogar para siempre. Le encanta dormir junto a su adoptante y ronronear todo el día.', adopter: 'Javier' },
  ];
  res.render('home', { title: 'Inicio', testimonials });
});


app.get('/faq', (req, res) => {
  res.render('faqs', { title: 'Preguntas Frecuentes' });
});

// Configurar la ruta principal
app.get('/', (req, res) => {
  // Renderizar la vista 'home' y pasar la variable 'gatos'
  res.render('home', { gatos });
});



// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
  console.log(`Conectando a la base de datos: ${DB_URL}`);
});


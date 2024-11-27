const axios = require('axios'); // Para realizar solicitudes HTTP

// Controlador para la página principal
exports.home = async (req, res) => {
  try {
    // Usa el nombre del servicio del backend
    const response = await axios.get('http://localhost:4000/cats/adoptables');
    const gatos = response.data;

    res.render('home', {
      title: 'Página Principal',
      message: 'Bienvenido a la protectora de gatos',
      gatos,
      error: null,
    });
  } catch (err) {
    console.error('Error al obtener los gatos adoptables:', err.message);

    res.render('home', {
      title: 'Página Principal',
      message: 'Bienvenido a la protectora de gatos',
      gatos: [],
      error: 'No se pudieron cargar los gatos adoptables',
    });
  }
};
  
  // Controlador para la página "about"
  exports.about = (req, res) => {
    res.render('about', {
      title: 'Sobre Nosotros',
      message: 'Información sobre la protectora'
    });
  };
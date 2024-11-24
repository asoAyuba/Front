const axios = require('axios'); // Para realizar solicitudes HTTP

// Controlador para la página principal
exports.home = async (req, res) => {
    try {
      // Realizar la llamada al endpoint del back-end
      const response = await axios.get('http://localhost:4000/cats/adoptables');
      const gatos = response.data;
  
      console.log('Datos de gatos adoptables:', gatos);
  
      // Renderizar la vista 'home' con los datos obtenidos
      res.render('home', {
        title: 'Página Principal',
        message: 'Bienvenido a la protectora de gatos',
        gatos
      });
    } catch (error) {
      console.error('Error al obtener los gatos adoptables:', error.message);
  
      // Renderizar la vista 'home' con un mensaje de error y sin gatos
      res.render('home', {
        title: 'Página Principal',
        message: 'Bienvenido a la protectora de gatos',
        gatos: [],
        error: 'No se pudieron cargar los gatos adoptables'
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
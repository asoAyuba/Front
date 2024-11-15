// Controlador para la página principal
exports.home = (req, res) => {
  const gatos = [
      {
          id: '1',
          name: 'Oliver',
          image: '/images/oliver.jpg',
          description: 'Un gato cariñoso y juguetón que busca un hogar amoroso.',
          gender: 'Macho',
          observations: 'Le encanta jugar con otros gatos.'
      },
      {
          id: '2',
          name: 'Luna',
          image: '/images/luna.jpg',
          description: 'Una gata tranquila y dulce, ideal para un hogar calmado.',
          gender: 'Hembra',
          observations: 'Tiene un pelaje muy suave y le gusta dormir mucho.'
      },
      {
          id: '3',
          name: 'Max',
          image: '/images/max.jpg',
          description: 'Max es un gato curioso que siempre está explorando.',
          gender: 'Macho',
          observations: 'Tiene un pequeño problema en una pata, pero es muy activo.'
      },
      {
          id: '5',
          name: 'Mia',
          image: '/images/mia.jpg',
          description: 'Mia es una gata muy cariñosa que ama ser acariciada.',
          gender: 'Hembra',
          observations: 'Prefiere estar sola o con humanos, no le gustan mucho otros gatos.'
      },
      {
        id: '6',
        name: 'Oliver',
        image: '/images/oliver.jpg',
        description: 'Un gato cariñoso y juguetón que busca un hogar amoroso.',
        gender: 'Macho',
        observations: 'Le encanta jugar con otros gatos.'
    },
    {
        id: '7',
        name: 'Luna',
        image: '/images/luna.jpg',
        description: 'Una gata tranquila y dulce, ideal para un hogar calmado.',
        gender: 'Hembra',
        observations: 'Tiene un pelaje muy suave y le gusta dormir mucho.'
    },
    {
        id: '8',
        name: 'Max',
        image: '/images/max.jpg',
        description: 'Max es un gato curioso que siempre está explorando.',
        gender: 'Macho',
        observations: 'Tiene un pequeño problema en una pata, pero es muy activo.'
    },
    {
        id: '9',
        name: 'Mia',
        image: '/images/mia.jpg',
        description: 'Mia es una gata muy cariñosa que ama ser acariciada.',
        gender: 'Hembra',
        observations: 'Prefiere estar sola o con humanos, no le gustan mucho otros gatos.'
    }
  ];

  // Renderizar la vista 'home' pasando todas las variables
  res.render('home', {
      title: 'Página Principal',
      message: 'Bienvenido a la protectora de gatos',
      gatos
  });
}
  // Controlador para la página "about"
  exports.about = (req, res) => {
    res.render('about', { title: 'Sobre Nosotros', message: 'Información sobre la protectora' });
  };




const tours = [
    { id: '1', name: 'Waduk Gajah Mungkur', origin: 'Wonogiri', category: 'Wisata Buatan' },
    { id: '2', name: 'Kalibiru', origin: 'Yogyakarta', category: 'Wisata Alam' },
    { id: '3', name: 'Raja Ampat', origin: 'Papua', category: 'Wisata Alam' },
    { id: '4', name: 'Labuan Bajo', origin: 'NTT', category: 'Wisata Alam' },
    { id: '5', name: 'Kuta', origin: 'Bali', category: 'Wisata Alam' },
    { id: '6', name: 'Malioboro', origin: 'Yogyakarta', category: 'Wisata Buatan' }
  ];
  
  const resolvers = {
    Query: {
      getAllTours: () => tours,
      getTourById: (_, { id }) => tours.find(tour => tour.id === id)
    },
    Mutation: {
      addTour: (_, { name, origin, category }) => {
        const id = String(tours.length + 1);
        const newtour = { id, name, origin, category };
        tours.push(newtour);
        return newtour;
      },
      updateTour: (_, { id, name, origin, category }) => {
        const index = tours.findIndex(tour => tour.id === id);
        if (index !== -1) {
          if (name) tours[index].name = name;
          if (origin) tours[index].origin = origin;
          if (category) tours[index].category = category;
          return tours[index];
        }
        return null;
      },
      deleteTour: (_, { id }) => {
        const index = tours.findIndex(tour => tour.id === id);
        if (index !== -1) {
          tours.splice(index, 1);
          return id;
        }
        return null;
      }
    }
  };
  
  module.exports = resolvers;
  
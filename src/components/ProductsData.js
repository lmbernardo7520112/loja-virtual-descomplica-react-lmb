import images from '../images';

const productsData = [
  {
    id: 1,
    name: 'Camiseta Casual',
    description: 'Conforto e estilo em um só produto.',
    price: 49.90,
    image: images.camiseta,
    carouselImage: 'https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(35).webp', // Update this URL
    carouselCaption: 'Explore sua jornada rumo à liberdade em cada clique.',
  },
  {
    id: 2,
    name: 'Tênis Esportivo',
    description: 'Desempenho e qualidade para seus treinos.',
    price: 99.90,
    image: images.tenis,
    carouselImage: 'https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(40).webp', // Update this URL
    carouselCaption: 'Explore o site no seu ritmo!',
  },
  {
    id: 3,
    name: 'Vestido Elegante',
    description: 'Destaque-se em qualquer ocasião.',
    price: 79.90,
    image: images.vestido,
    carouselImage: 'https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(19).webp', // Update this URL
    carouselCaption: 'Descubra estilo e qualidade em nossa loja virtual!',
  },
];

export default productsData;

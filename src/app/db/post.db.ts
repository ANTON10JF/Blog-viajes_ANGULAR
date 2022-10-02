import { Post } from "../interfaces/post";
import { Categorias } from "../interfaces/categorias";


export const POST: Post[] = [
    {
        id: 1,
        titulo: 'Post 1',
        imagen: 'https://img.freepik.com/fotos-premium/selva-palmeras-filipinas-concepto-sobre-viajes-tropicales-wanderlust-balanceandose-rio-gente-divirtiendose_186382-1220.jpg?w=740',
        textoPublicacion: 'mi primer viaje',
        fechaPublicacion: '2020-01-01',
        categoria: 'playa',
    },
    {
        id: 2,
        titulo: 'Post 2',
        imagen: 'https://img.freepik.com/fotos-premium/personas-concierto_31965-3617.jpg?w=900',
        textoPublicacion: 'mi segundo viaje',
        fechaPublicacion: '2020-01-02',
        categoria: 'festivales',
    },
    {
        id: 3,
        titulo: 'Post 3',
        imagen: 'https://img.freepik.com/foto-gratis/joven-madre-su-hija-pasando-tiempo-naturaleza_23-2149453428.jpg?t=st=1658694331~exp=1658694931~hmac=b82fc7be3cdc003af539479905112165a7d7ffc1edb56266d64430c3d4eea9e4&w=740',
        textoPublicacion: 'mi tercer viaje',
        fechaPublicacion: '2020-01-03',
        categoria: 'rural',
    },
    {
        id: 4,
        titulo: 'Post 4',
        imagen: 'https://img.freepik.com/foto-gratis/hermosa-foto-cascada-que-baja-montanas_181624-1282.jpg?t=st=1658694401~exp=1658695001~hmac=9d80bcd3c40d285fbc35459a764167c3baac395a10be7cefbfeeb8f6166ab186&w=740',
        textoPublicacion: 'mi cuarto viaje',
        fechaPublicacion: '2020-01-04',
        categoria: 'montaña',
    },
    {
        id: 5,
        titulo: 'Post 5',
        imagen: 'https://img.freepik.com/foto-gratis/cruce-calle-alcala-gran-via-noche_1398-2173.jpg?t=st=1658694474~exp=1658695074~hmac=504167e677dbc13f165320ee37a4d9ebefa35555aeeb1e668abbd89a7bd9443c&w=360',
        textoPublicacion: 'mi quinto viaje',
        fechaPublicacion: '2020-01-05',
        categoria: 'ciudad',
    },
]
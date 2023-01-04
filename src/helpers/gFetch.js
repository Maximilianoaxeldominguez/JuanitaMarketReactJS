//  Promesas -> 3 estados: pendiente, rachazado, aceptada


let productos = [
    {id: '1', name: 'CEPILLO DE LIMPIEZA FACIAL BEAR', categoria: 'limpieza',stock: '100',price: '1500',  foto:"https://d3ugyf2ht6aenh.cloudfront.net/stores/902/565/products/4533b65f-65fb-46ce-a5a7-6557be4b3f661-edc14bb49b1c3be5e716277470400592-1024-1024.webp"},
    {id: '2', name: 'CEPILLO LIMPIA BOTELLAS CON PUNTA DOBLADA', categoria: 'limpieza',stock: '100',price: '1500',  foto:'https://d3ugyf2ht6aenh.cloudfront.net/stores/902/565/products/whatsapp-image-2022-02-14-at-17-26-411-bd11a8c134f4fccbb816448706399263-1024-1024.webp'},
    {id: '3', name: 'GUANTE DE LIMPIEZA GREY', categoria: 'limpieza',stock: '100',price: '1500',  foto:'https://d3ugyf2ht6aenh.cloudfront.net/stores/902/565/products/whatsapp-image-2022-02-25-at-12-53-23-11-e2aa783fa33d5398fc16458047364113-1024-1024.webp'},
    {id: '4', name: 'ESCURRIDOR DE COCINA RETRACTIL', categoria: 'cocina',stock: '100',price: '1500',  foto:'https://d3ugyf2ht6aenh.cloudfront.net/stores/902/565/products/fe777f47851c9e0dc5746812d9a971fb1-a1519163a5dc83887415535504705871-1024-1024.webp'},
    {id: '5', name: 'ORGANIZADOR DE COCINA GREY DELUXE', categoria: 'cocina',stock: '100',price: '1500',  foto:'https://d3ugyf2ht6aenh.cloudfront.net/stores/902/565/products/whatsapp-image-2021-11-19-at-08-18-05-11-2be53155a541c4f1c316373318711684-1024-1024.webp'},
    {id: '5', name: 'SET LATA VERTEDOR QUE MIRAS BOBO', categoria: 'cocina',stock: '100',price: '1500',  foto:'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/197/214/products/img_20221223_15301311-46a52e20085c12be0216718276572139-1024-1024.webp'}
]


export const gFetch = (id) => {
    return new Promise( ( resolve, reject)=> {
        // acciones 
        setTimeout(()=>{
            resolve(id  ? productos.find(prod => prod.id === id) : productos) //{resultado: 6}
        }, 1000 )
        // rechazado( '404 todo mal' )
    } )
}
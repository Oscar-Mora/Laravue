//este archivo será el de Vue router

const Home = ()=>import('./components/Home.vue');
const Contact = ()=>import('./components/Contact.vue');

//importamos los componentes para el blog
const Mostrar = ()=>import('./components/blog/Mostrar.vue');
const Crear = ()=>import('./components/blog/Mostrar.vue');
const Editar = ()=>import('./components/blog/Mostrar.vue');


export const routes=[
    {
        name:'home',
        path:'/',
        component:Home
    },
    {
        name:'contact',
        path:'/contact',
        component:Contact
    },
    {
        name:'mostrarBlog',
        path:'/blogs',
        component:Mostrar
    },
    {
        name:'crearBlog',
        path:'/crear',
        component:Crear
    },
    {
        name:'editarBlog',
        path:'/editar/:id',
        component:Editar
    }
]

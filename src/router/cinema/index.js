export default {
    path:'/cinema',
    component:()=>import('@/views/Cinema'),
    children:[
        {
            path: "ciList",
            component:()=>import('@/components/CiList')
        },
        {
            path:'northAmerica',
            component:()=>import('@/components/NorthAmerica')
        },
        {
            path:'newTicket',
            component:()=>import('@/components/NewTicket')
        },
        {
            path:'detail',
            components:{
                detail:()=>import('@/views/Cinema/detail')
            },
            props:{
                detail:true,
            },
        },
        {
            path:'/cinema',
            redirect:'/cinema/CiList'
        },
     
    ]
}
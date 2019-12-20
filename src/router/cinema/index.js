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
            path:'/cinema',
            redirect:'/cinema/CiList'
        },
     
    ]
}
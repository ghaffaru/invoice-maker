const routes = [
    {
        path: '',
        component: () => import("../views/Register.vue"),
        name: 'register'
    },
    {
        path: '/login',
        component: () => import("../views/Login.vue")
    },
    {
        path: '/logout',
        component: () => import("../views/Logout.vue")
    },
    {
        path: '/dashboard',
        component: () => import("../views/dashboard/Home.vue") 
   },
   {
       path: '/create-invoice',
       component: () => import("../views/dashboard/CreateInvoice.vue")
   }
]

export default routes;

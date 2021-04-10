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
   },
   {
       path: '/preview-invoice/:id',
       component: () => import("../views/dashboard/InvoicePreview.vue")
   },
   {
       path: '/all-invoices',
       component: () => import("../views/dashboard/Invoices.vue")
   }
]

export default routes;

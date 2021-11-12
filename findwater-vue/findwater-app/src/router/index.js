import { createWebHistory, createRouter } from "vue-router"

import About from '@/components/About'
import Contact from '@/components/Contact'
import ForgotPassword from '@/components/ForgotPassword'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Privacy from '@/components/Privacy'
import Register from '@/components/Register'
import ResetPassword from '@/components/ResetPassword'
import SearchResults from '@/components/SearchResults'
import Submit from '@/components/Submit'
import WaterSource from '@/components/WaterSource'
import WaterSourceEdit from '@/components/WaterSourceEdit'

const routes = [
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: '/forgotpassword',
    name: 'ForgotPassword',
    component: ForgotPassword
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: Privacy
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },    
  {
    path: '/resetpassword',
    name: 'ResetPassword',
    component: ResetPassword
  },
  {
    path: '/searchresults',
    name: 'SearchResults',
    component: SearchResults
  },
  {
    path: '/submit',
    name: 'Submit',
    component: Submit
  },
  {
    path: '/watersource',
    name: 'WaterSource',
    component: WaterSource,
    props: true
  },
  {
    path: '/watersourceEdit',
    name: 'WaterSourceEdit',
    component: WaterSourceEdit,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
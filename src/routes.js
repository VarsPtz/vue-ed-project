import VueRouter from 'vue-router'
import Home from './pages/Home'
import Cars from './pages/Cars'
import Car from './pages/Car'
import CarFull from './pages/CarFull'
import ErrorCmp from "./pages/Error";

export default new VueRouter({
  routes: [
    {
      path: '', // localhost:8080
      component: Home
    },
    {
      path: '/cars', // localhost:8080/cars
      component: Cars,
      name: 'cars'
    },
    {
      path: '/car/:id',
      component: Car,
      children: [
        {
          path: 'full', // localhost:8080/car/10/full
          component: CarFull,
          name: 'carFull'
        }
      ]
    },
    {
      path: '/none',
      redirect: '/'
    },
    {
      path: '/allcars',
      redirect: {
        name: 'cars'
      }
    },
    {
      path: '*',
      component: ErrorCmp
    }
  ],
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {

    if (savedPosition) {
      return savedPosition
    }

    if (to.hash) {
      return  { selector: to.hash }
    }

    return {
      x: 0,
      y: 0
    }
  }
})

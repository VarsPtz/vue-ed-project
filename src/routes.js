import VueRouter from 'vue-router'
import Home from './pages/Home'
import CarFull from './pages/CarFull'
import ErrorCmp from "./pages/Error";

const Cars = resolve => {
  require.ensure(['./pages/Cars.vue'], () => {
    resolve(
      require('./pages/Cars')
    )
  })
}

const Car = resolve => {
  require.ensure(['./pages/Car.vue'], () => {
    resolve(
      require('./pages/Car')
    )
  })
}

//About require.ensure - https://webpack.js.org/api/module-methods/

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
          name: 'carFull',
          beforeEnter (to, from, next) {
            console.log('beforeEnter')
            // if (false) {
            //   next(true)
            // } else  {
            //   next(false)
            // }
            next()
          }
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

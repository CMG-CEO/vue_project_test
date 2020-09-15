import  Vue from 'vue'
import VueRouter from 'vue-router'
import Msite from '../pages/Msite/Msite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'

Vue.use(VueRouter)

export default new VueRouter({
		routes:[
			{
				path:'/msite',
				component:Msite,
				meta:{
					showfoot:true
				}
			},
			{
				path:'/search',
				component:Search,
				meta:{
					showfoot:true
				}
			},
			{
				path:'/order',
				component:Order,
				meta:{
					showfoot:true
				}
			},
			{
				path:'/profile',
				component:Profile,
				meta:{
					showfoot:true
				}
			},
			{
				path:'/',
				redirect:'/msite'
			},
			{
				path:'/login',
				component:Login
			}
		]
})
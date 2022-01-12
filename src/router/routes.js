import About from '../Pages/About'
import PostIdPage from '../Pages/PostIdPage'
import Posts from '../Pages/Posts'


export const routes = [
    {path: '/about', component: About,},
    {path: '/posts', component: Posts,},
    {path: '/posts/:id', component: PostIdPage,},
]
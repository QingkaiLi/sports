import App from '../components/app'
import CommentBox from '../components/CommentBox'
import About from '../components/about'

const routes = {
  path: '/',
  component: App,
  indexRoute: { component: CommentBox },
  childRoutes: [
    { path: 'about', component: About }
  ]
}

export default routes

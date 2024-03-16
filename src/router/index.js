import { createRouter, createWebHashHistory } from 'vue-router'
import AddJob from '@/components/AddJob.vue'
import ListStaff from '@/views/ListStaff.vue'
import JobEdit from '@/components/JobEdit.vue'
import Editor from '@/components/Editor.vue'
import Home from '@/components/Home.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/addjob',
    name: 'addjob',
    component: AddJob
  },
  {
    path: '/liststaff',
    name: 'liststaff',
    component: ListStaff
  },
  {
    path: '/edit/:id',
    name: 'edit',
    props: true,
    component: JobEdit
  },
  {
    path: '/editor',
    name: 'editor',
    component: Editor
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

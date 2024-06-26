import { withProviders } from './providers'

import { Header } from 'widgets/Header'
import { TasksList } from 'widgets/TasksList'

import './index.css'

const App: React.FC = () => {
  return (
    <>
      <Header />
      <TasksList />
    </>
  )
}

export default withProviders(App)

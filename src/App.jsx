import { Login } from './features/login'
import { useViewer } from './shared/auth'


function App() {
  const viewer = useViewer();

  return (
    <div>
      <Login />

      <div>
        <p>
          {viewer?.email}
        </p>

        <p>
          {viewer?.uid}
        </p>
      </div>
    </div>
    
  )
}

export default App

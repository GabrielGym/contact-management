import { AuthProvider } from "./providers/AuthProvider"
import { RoutesMain } from "./routes"

export const App = () => {

  return (
    <>
      <AuthProvider>
        <RoutesMain />
      </AuthProvider>
    </>
  )
}

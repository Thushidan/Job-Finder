import MainNavigation from "./router/MainNavigation";
import AuthProvider from "./store/provider/AuthProvider";

function App() {

  return (
    <AuthProvider>
      <MainNavigation />
    </AuthProvider>
  
  )
}

export default App;
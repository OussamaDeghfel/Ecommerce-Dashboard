import SideNavbar from "./components/sideNavBar"
import Dashboard from "./pages/overview/dashboard"

function App() {

  return (
    <>
      <div className="flex">
        <SideNavbar />
        <Dashboard />
      </div>
    </>
  )
}

export default App

import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Outlet />
    </div>
  )
}

export default Layout

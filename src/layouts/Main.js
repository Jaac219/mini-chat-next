import NavBarServers from "@/components/NavBarServers"

export default function MainLayout({ children }){
  return (
    <>
      <NavBarServers/>
      {children}
      <footer>This is commons footer</footer>
    </>
  )
}
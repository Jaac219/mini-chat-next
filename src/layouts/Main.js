import NavBar from "@/components/NavBar"

export default function MainLayout({ children }){
  return (
    <>
      <NavBar/>
        {children}
      <footer>This is commons footer</footer>
    </>
  )
}
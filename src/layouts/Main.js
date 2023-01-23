import NavBar from "@/components/NavBar"

const MainLayout = ({ children })=>{
  return (
    <>
      <NavBar/>
        {children}
      <footer>This is commons footer</footer>
    </>
  )
}

export default MainLayout
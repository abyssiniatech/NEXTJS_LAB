  "use client"
import Links from "./Links"

const Header = () => {
  return (
    <div className=" bg-indigo-800 text-white flex justify-between items-center">
   <h2>My website</h2>
   <Links />
    </div>
  )
}

export default Header
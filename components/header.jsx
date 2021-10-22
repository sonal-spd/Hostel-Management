
import Link from "next/link";
import LeftMenu from "./leftmenu";

const Header = () => {

  
  return (
    <nav
      className="stickey"
      style={{ backgroundColor: "#C4C4C4", boxShadow: "0 0 5px #ddd" }}
    >
      <div className="mx-auto py-4">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-between items-center px-8 md:px-0">
            <div className="hidden md:block">
              <LeftMenu/>
            </div>

            <div className="flex cursor-pointer red md:pl-8">
              <Link href="/">
                <a>
                  <img
                    src="/logo.png"
                    // className="hidden lg:block"
                    style={{ width: "90%" }}
                  />
                 
                </a>
              </Link>
            </div>

            
          </div>

          
            
         
        </div>
      </div>
    </nav>
  );
};


export default Header;

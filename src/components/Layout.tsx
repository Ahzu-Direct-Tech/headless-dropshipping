import Link from "next/link";
import Image from "next/image";
import useWishlistState from "../hooks/useWishlistState";
import useSnipcartCount from "../hooks/useSnipcartCount";
import Footer from "./Footer";


const Layout = ({ children }) => {
  const { hasItems } = useWishlistState();
  const { cart } = useSnipcartCount();
  const cartHasItems = cart.items.count !== 0;



  return (
    <>
      <header className="py-2 px-2 pr-4 md:py-2 md:px-6 md:pr-5 bg-black sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-3">
          <div className="flex items-center justify-between">
            <div className="md:w-1/3">
              <Link href="/">
                  <div className="flex items-center text-white  font-serif">
                    <div className="rounded-full w-12 h-12 flex items-center justify-center mr-4 cursor-pointer">
                      <Image src={"https://www.ahzudirecttech.com/adt-logo.svg"}
                      width={32}
                      height={32}
                      alt="logo">
                      </Image>
                    </div>
                    <div className="text-white  hover:bg-[#161616] hover:shadow-sm px-3 py-1 rounded-md"><Link href={"/"}>ADT Shop</Link></div>
                    
                  </div>
                </Link>
            </div>
            <div className="flex-1 items-center justify-start hidden md:block">
              <nav className="flex items-center justify-start space-x-3 md:space-x-6">
              <Link href="/products">
                    <div className="text-white font-serif hover:text-slate-50 p-1 transition cursor-pointer hover:bg-[#161616] px-3 py-1 rounded-md">
                      Products
                    </div>
                  </Link>
                  <Link href="/services">
                    <div className="text-white font-serif hover:text-slate-50 p-1 transition cursor-pointer hover:bg-[#161616] px-3 py-1 rounded-md">
                      Services
                    </div>
                  </Link>
                  
                </nav>
            </div>
            <div className="md:w-1/3 flex items-center justify-end space-x-3 -mr-2.5">
              <button
                className="snipcart-customer-signin appearance-none px-2 text-white hover:text-slate-400 cursor-pointer focus:outline-none focus:text-slate-400 transition relative p-2 rounded-full hover:bg-[#161616] border-1 border-slate-50"
                aria-label="User login"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 fill-current"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M4 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
                </svg>
              </button>
              <Link href="/wishlist">
                <div
                  className="px-2 text-white cursor-pointer focus:outline-none focus:text-slate-400 relative transition hover:bg-[#161616] rounded-full p-2"
                  aria-label="Wishlist"
                >
                  {hasItems && (
                    <div className="absolute bg-red-500 rounded-full w-2 h-2 top-2 right-2 -mt-1 -mr-1"></div>
                  )}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 fill-current"
                  >
                    <path fill="none" d="M0 0H24V24H0z" />
                    <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                  </svg>
                </div>
              </Link>
              <button
                className="snipcart-checkout appearance-none px-2 text-white cursor-pointer focus:outline-none focus:text-slate-400 transition relative hover:bg-[#161616] rounded-full p-2"
                aria-label="Cart"
              >
                {cartHasItems && (
                  <span className="absolute bg-lime-600 rounded-full w-2 h-2 top-2 right-2 -mt-1 -mr-1 "></span>
                )}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 fill-current"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M4 16V4H2V2h3a1 1 0 0 1 1 1v12h12.438l2-8H8V5h13.72a1 1 0 0 1 .97 1.243l-2.5 10a1 1 0 0 1-.97.757H5a1 1 0 0 1-1-1zm2 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm12 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
      <main className="min-h-screen">
        <div className="mx-auto">{children}</div>
      </main>
      <footer className="container-fluid bg-black">
        <Footer />
      </footer>
    </>
  );
};

export default Layout;

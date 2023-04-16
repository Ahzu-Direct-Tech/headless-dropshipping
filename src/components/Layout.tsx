import Link from "next/link";
import Image from "next/image";

import useWishlistState from "../hooks/useWishlistState";
import useSnipcartCount from "../hooks/useSnipcartCount";

const company = [
  {
    id: "1",
    title: "About Us",
    url: "https://ahzudirecttech.com/company/about-us",
  },
  {
    id: "2",
    title: "Projects",
    url: "https://ahzudirecttech.com/company/projects",
  },
  {
    id: "3",
    title: "Portfolio",
    url: "https://ahzudirecttech.com/company/portfolio",
  },
  {
    id: "4",
    title: "Case Studies",
    url: "https://ahzudirecttech.com/company/case-studies",
  },
  {
    id: "5",
    title: "Tutorials",
    url: "https://ahzudirecttech.com/company/tutorials",
  },
  {
    id: "6",
    title: "Blog",
    url: "https://ahzudirecttech.com/blog",
  },
];

const products = [
  {
    id: "1",
    title: "Clothing",
    url: "/products/clothing",
  },
  {
    id: "2",
    title: "Foot Wear",
    url: "/products/foot-wear",
  },
  {
    id: "3",
    title: "Electronics",
    url: "/products/electronics",
  },
  {
    id: "4",
    title: "Downloads",
    url: "/products/downloads",
  },
];

const services = [
  {
    id: "1",
    title: "UI/UX Design",
    url: "",
  },
  {
    id: "2",
    title: "Web Administration",
    url: "/services/web-administration",
  },
  {
    id: "3",
    title: "App Development",
    url: "/services/app-development",
  },
  {
    id: "4",
    title: "Deploments",
    url: "/services/deployments",
  },
];

const follow = [
  {
    id: "1",
    title: "Twitter",
    url: "https://twitter.com/ahzudirecttech",
    target: "_blank",
  },
  {
    id: "2",
    title: "Facebook",
    url: "https://facebook.com/ahzudirecttech",
  },
  {
    id: "3",
    title: "Instagram",
    url: "https://instragram.com/ahzu_direct_tech_llc",
  },
  {
    id: "4",
    title: "YouTube",
    url: "https://www.youtube.com/channel/UCfdIQnFFeUQGvdKV6Jhtijg",
  },
];

const technologies = [
  {
    id: "1",
    title: "Next JS",
    url: "",
  },
  {
    id: "2",
    title: "React",
    url: "",
  },
  {
    id: "3",
    title: "Tailwind",
    url: "",
  },
  {
    id: "4",
    title: "Bootstrap",
    url: "",
  },
  {
    id: "5",
    title: "Node JS",
    url: "",
  },
  {
    id: "6",
    title: "Mongo DB",
    url: "",
  },
];

const community = [
  {
    id: "1",
    title: "GitHub",
    url: "https://github.com/Ahzu-Direct-Tech",
  },
  {
    id: "2",
    title: "Open Collective",
    url: "https://opencollective.com/ahzu-direct-tech-llc",
  },
  {
    id: "3",
    title: "Facebook Group",
    url: "https://facebook.com/groups/ahzudirecttech",
  },
  {
    id: "4",
    title: "Documentation",
    url: "https://docs.ahzudirecttech.com",
  },
];

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
                  <div className="flex items-center text-gray-900">
                    <div className="rounded-full w-12 h-12 flex items-center justify-center mr-4">
                      <Image src={"https://www.ahzudirecttech.com/adt-logo.svg"}
                      width={32}
                      height={32}>
                      </Image>
                    </div>
                  </div>
                </Link>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <nav className="flex items-center justify-start space-x-3 md:space-x-6">
              <Link href="/products">
                    <div className="text-white hover:text-blue-600 p-1 transition">
                      Products
                    </div>
                  </Link>
                  <Link href="/services">
                    <div className="text-white hover:text-blue-600 p-1 transition">
                      Services
                    </div>
                  </Link>
                  
                </nav>
            </div>
            <div className="md:w-1/3 flex items-center justify-end space-x-3 -mr-2.5">
              <button
                className="snipcart-customer-signin appearance-none px-2 text-white hover:text-blue-600 rounded-md cursor-pointer focus:outline-none focus:text-blue-600 transition relative"
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
                  className="px-2 text-white hover:text-blue-600 rounded-md cursor-pointer focus:outline-none focus:text-blue-600 relative transition"
                  aria-label="Wishlist"
                >
                  {hasItems && (
                    <div className="absolute bg-red-500 rounded-full w-2 h-2 top-0 right-0 -mt-1 -mr-1"></div>
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
                className="snipcart-checkout appearance-none px-2 text-white hover:text-blue-600 rounded-md cursor-pointer focus:outline-none focus:text-blue-600 transition relative"
                aria-label="Cart"
              >
                {cartHasItems && (
                  <span className="absolute bg-lime-600 rounded-full w-2 h-2 top-0 right-0 -mt-1 -mr-1 "></span>
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
      <footer className="container-fluid">
      <div className="container-fluid bg-black ">
        <div className="max-w-7xl mx-auto px-6">
        <div className="text-white justify-between mx-auto mb-6 py-32 grid grid-cols-2 gap-12 md:grid-cols-3 lg:grid-cols-6 xs:grid-cols-2">
          <div className="text-white">
            <div className="text-xl mb-2">Company</div>
            {company.map((item) => (
            <Link key={item.id} href={item.url}>
              <div className="my-1">
                <p className="text-sm text-white hover:underline cursor-pointer">{item.title}</p>
              </div>
            </Link>
          ))}
          </div>
          <div className="text-white mb-2">
            <div className="text-white font-semibold text-start text-xl mb-2">Products</div>
            {products.map((item) => (
            <Link key={item.id} href={item.url} >
              <div className="my-1">
                <p className="text-sm text-white hover:underline cursor-pointer">{item.title}</p>
              </div>
            </Link>
          ))}
          </div>
          <div className="text-white mb-2">
            <div className="text-white font-semibold text-start text-xl">Services</div>
            {services.map((item) => (
            <Link key={item.id} href={item.url} >
              <div className="my-1">
                <p className="text-sm text-white hover:underline cursor-pointer">{item.title}</p>
              </div>
            </Link>
          ))}
          </div>
          <div className="text-white mb-2">
            <div className="text-white font-semibold text-start text-xl">Technologies</div>
            {technologies.map((item) => (
            <Link key={item.id} href={item.url} >
              <div className="my-1">
                <p className="text-sm text-white hover:underline cursor-pointer" >{item.title}</p>
              </div>
            </Link>
          ))}
          </div>
          <div className="text-white mb-2">
            <div className="text-white font-semibold text-start text-xl">Community</div>
            {community.map((item) => (
            <a key={item.id} href={item.url} target={`_blank`}>
              <div className="my-1">
                <p className="text-sm text-white hover:underline cursor-pointer">{item.title}</p>
              </div>
            </a>
          ))}
          </div>

          <div className="text-white mb-2">
            <div className="text-white font-semibold text-start text-xl">Follow Us</div>
            {follow.map((item) => (
            <a key={item.id} href={item.url} target="_blank">
              <div className="my-1">
                <p className="text-sm text-white hover:underline cursor-pointer">{item.title}</p>
              </div>
            </a>
          ))}
          </div>
        </div>
        <div className="max-w-7xl mx-auto">
        <div className="flex flex-row justify-between py-10 mx-auto gap-6 bg-black text-white ">
          <div className="text-xs mb-3">&copy; 2023 AHZU DIRECT TECH LLC</div>
          <div className="text-xs ">
            Designed <span className="text-red-600 text-lg"> ❤️ </span> by {" "}
            <a
              className=" text-white hover:underline "
              href="https://github.com/ahzu" target={`_blank`}
            >
              Ahzu
            </a>
          </div>
        </div>
      </div>
      </div>
      </div>
      </footer>
    </>
  );
};

export default Layout;

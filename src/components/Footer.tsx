import Link from "next/link";

export default function Footer () {
    return (
        <>
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
            <Link key={item.id} href={item.url}>
              <div className="my-1">
                <p className="text-sm text-white hover:underline cursor-pointer">{item.title}</p>
              </div>
            </Link>
          ))}
          </div>

          <div className="text-white mb-2">
            <div className="text-white font-semibold text-start text-xl">Follow Us</div>
            {follow.map((item) => (
            <Link key={item.id} href={item.url}>
              <div className="my-1">
                <p className="text-sm text-white hover:underline cursor-pointer">{item.title}</p>
              </div>
            </Link>
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
        </>
    )
}
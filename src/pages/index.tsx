import Section1 from "../components/home/section-1";
import Image from "next/image";

function HomePage() {
  return (
    <>
      <div className="mb-12">
        <Section1 />
      </div>

      <div className="max-w-7xl px-6 mx-auto prose prose-blue mb-12">
        <div className="flex flex-col md:flex-row gap-8 my-2 h-full py-[5rem] justify-between items-center">
          <div className="w-full md:w-1/2 justify-between items-center align-middle">
            <div className="text-3xl">Sell Custom Products Hassle-Free with Our E-Commerce App</div>
            <p>
              Sell custom products hassle-free with our e-commerce app. Use Snip
              Cart and Printful to create and sell high-quality, customized
              products. Upload your designs, and let Printful take care of
              printing and fulfillment
            </p>
            <button className="bg-green-600 py-1 px-3 rounded-md text-white font-semibold hover:bg-green-700">
              Get Started
            </button>
          </div>
          <div className="">
          <Image src={"https://www.ahzudirecttech.com/adt-logo.svg"}
                      width={400}
                      height={400}
                      alt="logo">
                      </Image>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 my-2 h-full py-[5rem] justify-between items-center">
          <div className="">
          <Image src={"https://www.ahzudirecttech.com/adt-logo.svg"}
                      width={400}
                      height={400}
                      alt="logo">
                      </Image>
          </div>
          <div className="w-full md:w-1/2">
            <div className="text-3xl">Effortless E-commerce with Printful and Snip Cart</div>
            <p>
              Our e-commerce app uses Printful and Snip Cart to make it easy for
              you to sell custom products online. Printful takes care of
              inventory, processing, and shipping, while Snip Cart provides a
              flexible and lightning-fast platform for selling your products.
              With multiple payment gateways and detailed analytics, you can
              start selling in minutes and track your sales with ease.
            </p>
            <div className="my-4">
              <button className="bg-green-600 py-1 px-3 rounded-md text-white font-semibold hover:bg-green-700">
                Get Started
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col px-4 text-center h-full py-[5rem] justify-center items-center border bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-md my-16">
          <div className="text-white font-semibold text-4xl my-4 max-w-2xl mx-auto leading-normal">
            Seamless E-Commerce Experience with Snip Cart and Printful
          </div>
          <div className="max-w-4xl mx-auto">
            Sell online with ease using Snip Cart and Printful! Customize your
            store to match your brand, add products, and start selling in
            minutes. Snip Cart offers detailed analytics and reports to track
            your sales and customer behavior. Our app, built on Vercel, is fast,
            reliable, and scalable. Let us help you sell your products online
            today!
          </div>
          <div className="my-4">
            <button className="bg-green-600 py-1 px-3 rounded-md text-white font-semibold hover:bg-green-700">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;

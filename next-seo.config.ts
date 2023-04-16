const description =
  "Shop the latest trends in men's and women's apparel, including t-shirts, caps, and more at Ahzu Direct Tech. Our online store offers a wide range of high-quality clothing options at affordable prices.";
const title = " Shop | Ahzu Direct Tech LLC";
const url = "https://shop.ahzudirect.com/";

const seo = {
  title,
  titleTemplate: "%s | Ahzu Direct Tech LLC",
  description,
  openGraph: {
    description,
    title,
    type: "website",
    url,
  },
  twitter: {
    handle: "@ahzudirecttech",
    site: "@ahzudirecttech",
  },
};

export { seo as defaultSEO, url as defaultUrl };

const description =
  "Headless E-Commerce theme by Ahzu Direct Tech, LLC";
const title = "E-Com";
const url = "https://ahzudirect.com/themes/ahzushop";

const seo = {
  title,
  titleTemplate: "%s | AhzuShop Starter Theme",
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

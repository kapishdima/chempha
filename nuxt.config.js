// https://nuxt.com/docs/api/configuration/nuxt-config

import axios from "axios";

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      mailTo: process.env.MAIL_TO,
    },
  },
  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL,
  },
  // sitemap: {
  //   urls: async () => {
  //     const client = axios.create({
  //       baseURL: "127.0.0.1:1337/api",
  //     });
  //     try {
  //       console.log("SITEMAP", process.env.STRAPI_URL);

  //       const { data: responseProducts } = await client.get(`/tovaries`);
  //       const { data: responsePosts } = await client.get(`/novostis`);
  //       const { data: responseCategories } = await client.get(`/categories`);
  //       const { data: responseSubCategories } = await client.get(
  //         `/pod-kategoriyas`
  //       );

  //       if (
  //         !responseProducts.data &&
  //         !responsePosts.data &&
  //         !responseCategories.data &&
  //         !responseSubCategories.data
  //       ) {
  //         return [];
  //       }

  //       const productUrls = responseProducts.data.map((product) => {
  //         return {
  //           loc: `/products/${product.id}`,
  //           lastmod: new Date(),
  //         };
  //       });

  //       const postsUrls = responsePosts.data.map((post) => {
  //         return {
  //           loc: `/posts/${post.id}`,
  //           lastmod: new Date(),
  //         };
  //       });

  //       const categoriesUrl = responseCategories.data.map((category) => {
  //         const section =
  //           category.attributes.section === "ingredients"
  //             ? "ingredients"
  //             : "applications";
  //         return {
  //           loc: `/${section}/${category.id}`,
  //           lastmod: new Date(),
  //         };
  //       });

  //       const subcategoriesUrl = responseSubCategories.data.map((category) => {
  //         return {
  //           loc: `/subcategory/${category.id}`,
  //           lastmod: new Date(),
  //         };
  //       });

  //       return [
  //         ...productUrls,
  //         ...postsUrls,
  //         ...categoriesUrl,
  //         ...subcategoriesUrl,
  //       ];
  //     } catch (error) {
  //       console.log(JSON.stringify(error));
  //     }
  //   },
  // },

  devtools: { enabled: true },
  modules: ["@nuxtjs/strapi", "@nuxt/image", "nuxt-simple-sitemap"],
  css: ["~/assets/scss/main.scss"],

  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
          crossorigin: "",
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/favicon/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon/favicon-16x16.png",
        },
        {
          rel: "manifest",
          href: "/favicon/site.webmanifest",
        },
        {
          rel: "mask-icon",
          type: "image/png",
          href: "/favicon/safari-pinned-tab.svg",
          color: "#5bbad5",
        },
      ],
    },
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@use "@/assets/scss/vars/_colors.scss" as *; @use "@/assets/scss/vars/_fonts.scss" as *;',
        },
      },
    },
  },

  // nitro: {
  //   prerender: {
  //     crawlLinks: true,
  //     routes: ["/", "sitemap.xml"],
  //   },
  // },

  // @ts-ignore
  strapi: {
    url: process.env.STRAPI_URL || "http://localhost:1337",
  },
});

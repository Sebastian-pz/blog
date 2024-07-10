import { postInterface, PostTypes } from "@/utilities/interfaces";

// ----| Images | ---
import PersonImage from "@/public/person.jpg";
import BlogPostMedia from "@/public/blog-post.webp";
import useEffectImg from "@/public/blog/useEffect.webp";
import tddImg from "@/public/blog/tdd-post.webp";

const author = "Sebastian Pérez";

export const posts: Array<postInterface> = [
  {
    id: "1d0d966b84354712b92c359cc28a06c2",
    type: PostTypes.experience,
    title:
      "As a full stack developer I worked on the creation of a complete Management System.",
    mediaType: "video",
    media: "https://www.youtube.com/embed/fL83GTilWjw",
    image: BlogPostMedia,
    description: [
      "I created a FullStack web application that manages the sales, costs, expenses, and inventories of a bar, thus facilitating the store's processes.",

      "Initially, in November, due to a mutual acquaintance, I was contacted to inquire about certain administrative processes of the bar in question. During my observations, I was told that they were creating specific software for sales management (as I mentioned in a previous blog post).",

      "Since the software was already being built, my involvement in the process was limited to creating an Excel spreadsheet to temporarily solve the sales and inventory management problem. However, by the end of November, early December, I was given the remaining project information.",

      "The bar's idea was to have custom software developed for their unique management needs. However, they were being sold a license for pre-made software, and they were being charged a significantly high monthly fee (I'm not sure if it's appropriate to mention the exact amount). Things were already going wrong: they were being charged for the application and the monthly license, which added up to a large sum of money.",

      "Additionally, during the 'delivery' of the software, they were told that to run the application, they would need to install Windows on their computer (they use a MacBook Pro in the business). This led to the business owner feeling uncomfortable with the situation.",

      "To keep it short, after that conversation with the other software provider, I was approached, and by the following Monday, I started working on the project.",

      "Stack used for this project were mainly TypeScript, NodeJS, React, Vite, Tailwind, NodeJS, Express, MongoDB (Atlas), byCrypt, JSON web tokens (JWT), Cors, and ESLint with standard to improve the code.",
    ],

    author,
    creationDate: "01/16/2024",
  },
];

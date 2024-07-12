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
  {
    author: author,
    creationDate: "07/08/2024",
    id: "bcaa1e968b6a43daaea2f4638025fac8",
    image: tddImg,
    mediaType: "image",
    type: PostTypes.opinion,
    title: "Software Development Using TDD",
    description: [
      "This is a short post sharing my personal thoughts on working with TDD, but before diving into that, let's first explain what TDD is:",
      "|subtitle| What is TDD?",
      "Test-Driven Development is a programming practice that involves writing tests (usually unit tests) first, then writing the code to make those tests pass, and finally refactoring the written code. (Herranz, J. 2023)",
      "|image|https://images.spiceworks.com/wp-content/uploads/2022/09/29095630/How-TDD-Works.png",
      "Image sourced from: SpiceWorks.com",

      "|subtitle| My Opinion on Working with Test-Driven Development",
      "Recently, I worked on a project using TDD methodology, and it gave me some insight into why this methodology is so polarizing within the community.",
      "I've firsthand heard the opinion that 'writing tests is tedious because I know my code works when I write it.' And I understand that, but from my perspective, tests aren't just for yourself; they're meant to help your colleague (or yourself in the future) who might need to modify the code and ensure they aren't breaking anything.",
      "The primary purpose of Test-Driven Development isn't just to help you write code (though it does), it wants to ensure that future changes don't affect the overall functionality of the application. It's a safeguard to prevent changes from breaking everything.",
      "For example, let's say you worked on a feature to schedule users in a calendar, and it works perfectly. But tomorrow, you're asked to change the user schema. Both features work perfectly on their own, but when you integrate them, you might find it doesn't compile. Maybe the change in the user schema affected the scheduling process—perhaps a property, maybe a state, or anything else. TDD helps you foresee these issues.",
      "Working with TDD means more development time, questioning whether 'the code works anyway,' and dealing with the pressure to deliver. But it helps develop more robust, scalable code and makes your teammates's jobs easier (or your own in the future) by avoiding bugs.",
      "Yes, it's more code, but it's worth it.",
      "|note| Note: It should be clarified that using TDD or not is a specific decision to each project. Some projects will benefit from it, while others may not. It's not a golden rule that must always be followed.",
      "",

      "Herranz, Jose Ignacio. (April 13, 2023). TDD as a Software Design Methodology, retrieved from: https://www.paradigmadigital.com/dev/tdd-como-metodologia-de-diseno-de-software/",
    ],
  },
];

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
  {
    id: "fc2aaada30594ed9a39fa1928d267655",
    type: PostTypes.opinion,
    title: "Best Practices for React's useEffect by an Expert",
    mediaType: "image",
    image: useEffectImg,
    description: [
      "Using named functions within the useEffect hook in React sounds a bit... odd, doesn't it? Well, not for Cory House.",
      "Not long ago, I saw a post on X discussing the use of named functions within the useEffect hook in React (yes, as the first parameter). The idea intrigued me, so I delved into the thread to see what people had to say about it.",
      "It's a way to improve code readability, making it easier to understand what a useEffect is doing in our application. And yes, from this perspective, it makes sense. However, it didn't convince everyone, with some arguing that it complicates development.",
      "On one hand, we have the readability aspect (which, yes, is more readable from my point of view). On the other hand, we have to consider conventions—it's much more common to see this hook used with a simple arrow function as a parameter. So, I understand the clash of opinions on this topic.",
      "Some people say that a simple comment explaining what the useEffect does solves everything. In other words, comment VS naming the function, to which the author of the post responds with the following:",
      "✅ Code tends to stay up to date, whereas comments often become outdated. Therefore, comments 'lie' more frequently than code.",
      "✅ Named functions improve stack tracking, enhancing debugging and error logging.",
      "✅ Comments should not replace a function name; they should complement the function name in exceptional cases where the name alone is not sufficient.",
      "There are also those who complain that now, thanks to this change, useEffects become too complex... Finding the right name for a function is harder than it seems 🤣.",
      "As for me, I think I prefer to continue using an arrow function with an inner function that I'll call later. It may not be the most optimal solution, but I find it quite decent and readable 🤯.",
      "Credits to Cory House @housecor on X, where I saw this post.",
      "What is your opinion on this? Is it better to use named functions or stick with typical arrow functions?",

      "Link to the original post:",
      "|link|https://twitter.com/housecor/status/1753777632976461954",
    ],

    author,
    creationDate: "02/17/2024",
  },
  {
    id: "7a46a12b32e4461e911ef2e941303a33",
    type: PostTypes.project,
    title: "The Blog is Almost Ready 🚀👨🏻‍🚀!",
    mediaType: "image",
    image: BlogPostMedia,
    description: [
      "Primarily focused on tech posts and updates about my projects, the blog is almost complete. There are just a few final touches left, but the overall functionality and details of the application are already finished.",

      "The creation of the application started in the first week of November 2023 and progressed gradually. After finishing my academic term at university, the project was almost entirely complete; in fact, only the styling details were left to finalize.",

      "Initially, there was no estimate of the development time required for this blog. Being so close to the final exam periods made budgeting somewhat uncertain.",

      "Finally, as of today, November 16, 2023, the project is practically finished.",

      "The technologies used for this project were primarily TypeScript, NextJS - React, Tailwind for styling, and ESLint with standard to improve the code quality.",

      "|note|(Update) 07/12/2024 Blog development is still in process xD",
      "|note| There were many changes so far",
    ],
    author,
    creationDate: "11/16/2023",
  },
  {
    id: "3ae67a3496d74fdfa5c16f6cbef1ed73",
    type: PostTypes.opinion,
    title:
      "What Was It Like Working with Visual Basic for the First Time at the Regional Office of a Multinational?",
    mediaType: "image",
    image: BlogPostMedia,
    description: [
      "What do you think my experience was like working for a multinational company, on a regional project, with a programming language I had never used before, and with a high level of confidentiality?",

      "Initially, if you haven't read the article about my experience as a developer for the company, here's the link for you to check it out first:",

      "The link will be added when the blog is updated 😬",

      "As I mentioned in that article, my experience working for this company was curious. Initially, they contacted me while avoiding giving too much information. I knew my job was to unify information, but nothing in detail.",

      "It was quite interesting working with a company directly helping the HR sector (in the legal environment). It was very different from what I had done before. There was a lot at stake, and the processes were carried out in very different ways. It was also the time I worked with the most data, and everything had to be handled in detail and optimized.",

      "The result of this work made me feel accomplished. Achieving, through programming, that a really tedious and time-consuming process became a matter of a few clicks is something I find truly rewarding. Comparing the fact that previously, obtaining information about a regional employee took hours (literally) and now it can be done in a few seconds by typing their name, ID, or email and clicking a button, is something that excites me.",

      "Honestly, I thought it would be a more difficult process; however, due to my previous programming knowledge, it didn't take me long to adapt to using VBA.",

      "I made the tool relatively simply. Perhaps I missed using some best practices, but it was a job that I found rewarding, and when I finished it, I felt proud of it.",

      "|subtitle| Personal Mini Reflection",

      "The last thing I want to say is that sometimes taking on new challenges can be a bit scary, but at least in the programming world, it is totally worth it. As I mentioned earlier, I entered this project without knowing anything about Visual Basic, and in the end, it was completed with a lot of learning along the way. I am very happy with what I achieved there.",

      "Thanks to the company in question!",
      "I hope they are better prepared for their next audits 🤣",
    ],

    author,
    creationDate: "11/28/2023",
  },
  {
    id: "f9cac5ffb2f5476b909abcd56e6fe641",
    type: PostTypes.opinion,
    title: "The Commit Show by BettaTech and the Talk with MiduDev",
    mediaType: "video",
    media: "https://www.youtube.com/embed/fL83GTilWjw",
    image: PersonImage,
    description: [
      "As a programmer, I have been following Midudev's content for years. He is one of my tech references (Spanish) and I have learned a lot from him.",
      "During the talk at BettaTech's The Commit Show, Midu talks about many topics related to technology and programming in general. He discusses who he is, his experience, and his perspective on the current and future state of the development world.",
      "One of the most relevant topics discussed in this talk is that when a programmer is looking to enter the market for the first time (or the first few times), it is very important to join a company that offers mentorship. This means having someone who can guide you through the process, which is one of the most educational aspects. In fact, he defines that 'It's much more important than the salary at the beginning.'",
      "While it is true that the lack of a mentor can lead a programmer to develop self-sufficiency, in some cases, this tends to become a mental burden that affects health and, in the end, is not worth it.",
      "The talk covers other important topics to consider in the development world, such as salaries and perhaps most importantly, what it means to be a senior developer.",
      "In my opinion, it is a highly recommended talk that provides a broad view of the programming environment.",
    ],

    author,
    creationDate: "11/03/2023",
  },
  {
    id: "89ad3aea22014a68963c69621baf1ea2",
    type: PostTypes.project,
    title: "I Created a Rock, Paper, Scissors Game App",
    mediaType: "image",
    image: PersonImage,
    description: [
      "I created a web application inspired by the popular game of rock, paper, scissors to test my knowledge during my free time at university and my work.",
      "Initially, I wanted to practice my frontend skills and came across this challenge on *Frontend Mentor*. It was only focused on developing the visual aspect, but I decided to take it a step further and implement the necessary logic to make it playable.",
      "First, I developed the visual part to test my CSS skills. As I mentioned earlier, I took on this challenge to improve my understanding of the front end. I wanted to test my vanilla CSS knowledge and improve wherever necessary.",
      "Once the visual part was completed, I felt I could make it functional without much effort. So, I added the logic. In other words, I added JS to the HTML and CSS.",
      "It was a really fun project that helped me improve my code, styles, and best practices.",
      "To develop the project, I used the following technologies: TypeScript as the programming language, Vite as the build tool, React as the main development library, and vanilla CSS for styling the application.",
      "If you want to see the game, here it is: ",
      "|link|https://rps-game-navy.vercel.app/",
    ],

    author,
    creationDate: "11/03/2023",
  },
  {
    id: "5e14c5bb00be4450b2376eda189a64fb",
    type: PostTypes.project,
    title: "I Created a Timed Math Challenge App 👨🏻‍🔬⌛!",
    mediaType: "video",
    media: "https://www.youtube.com/embed/LZVsATLj4Tw",
    image: PersonImage,
    description: [
      "I created a quick math challenge game! The goal is to improve the response time and accuracy of my classmates at university  when faced with basic math problems.",
      "The idea came from a moment in my university classes where we were tested on how fluently we could respond to math questions. Personally, I did well (#humility), but my classmates struggled.",
      "Because of this, I came up with the idea to create an app to practice the speed at which you can answer basic math questions (related to addition, subtraction, multiplication, and division).",
      "I made this game with a scoring system to track the players' improvement, allowing them to compare their progress as they play.",
      "Honestly, this is a project I want to revisit today. It's interesting and I can scale it up a bit more just for fun.",
      "The scores are saved per person and are available whenever the player decides to return and play again!",
      "The stack I used for developing the game was: TypeScript as the programming language, Vite, and Tailwind 😄",
    ],

    author,
    creationDate: "11/03/2023",
  },
  {
    id: "5c9ef6fa3e12415ca8a853150643b993",
    type: PostTypes.experience,
    title:
      "I Worked for a Multinational Using Programming (Visual Basic for Apps) 🦖!",
    mediaType: "video",
    media: "https://www.youtube.com/embed/LZVsATLj4Tw",
    image: PersonImage,
    description: [
      "Due to contacts at my university, a company reached out to me for help with a problem they had regarding the validation of some profiles in Excel.",

      "Initially, for 'Company A' (as I will call it to protect their privacy), a very large international company in the country, a regional office specifically contacted me to help with a platform transition process they were going through (it wasn't going well and needed to be done urgently).",

      "Their general problem was that there was a lot of scattered information in many places, many files, and many platforms.",

      "My role was to unify information from different Excel files and platforms automatically, gathering employee information and using various algorithms with VBA (Visual Basic for Applications) to verify if they met the job requirements.",

      "If an employee did NOT meet the job profile, it would alert the HR responsible and add them to a list of 'invalid' people. Then, each section head would be notified to ensure the employee completed their profile if needed.",

      "In the best case, when the employee met the profile, they would be added to the list of those in compliance with the company, and no intervention was necessary.",

      "From these two lists, statistics were also generated to address various points of interest, such as the most affected sectors, the most critical requirements, the roles at greatest risk, and so on.",

      "Once this validation (employee vs. job profile) was done, the information was consolidated and stored in a OneDrive folder and the new platform, so all employee information was available in one place.",

      "In general, it wasn't difficult; it was just too many files to review one by one, hence the need to automate this process.",

      "After developing the entire algorithm for the company, the information query times were optimized by more than 99%. It went from taking more than an hour per employee to just a few clicks (previously, it involved searching through multiple Excel files and platforms).",

      "It's worth noting that the company had issues with profile compliance, and thanks to the development of the program, this point was progressively improved, allowing them to better respond to their audit processes.",
    ],

    author,
    creationDate: "11/26/2023",
  },
];

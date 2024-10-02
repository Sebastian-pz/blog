import { postInterface, PostTypes } from '@/utilities/interfaces'

// ----| Images | ---
import useEffectImg from '@/public/blog/useEffect.webp'
import tddImg from '@/public/blog/tdd-post.webp'
import theCommitShowImg from '@/public/blog/thecommitshow.webp'
import firstTimeVisualBasic from '@/public/blog/firstTimeVisualBasic.webp'
import rockPaperScissorsGame from '@/public/blog/rock-paper-scissors.webp'
import fastMaths from '@/public/blog/fastMaths.webp'
import barVB from '@/public/blog/bar-vb.webp'
import degreeImg from '@/public/blog/degree.webp'
import duckerImg from '@/public/blog/ducker.webp'
import UnderConstruction from '@/public/blog/UnderConstruction.webp'
import nutricionVitalImg from '@/public/blog/NutricionVital.webp'
import chatBotImg from '@/public/blog/ChatBot.webp'
import blogImg from '@/public/blog/Blog.webp'
import opinionAboutVB from '@/public/blog/opinionAboutVB.webp'
import CallStack from '@/public/blog/CallStack.webp'
import npmPackages from '@/public/blog/npmPackages.webp'
import generativeAI from '@/public/blog/generativeAI.webp'

import TAGS from '../../Tags/Tags'

const author = 'Sebastian Pérez'

export const posts: Array<postInterface> = [
  {
    id: 'e143b6e16309449086f2b86d4a5d8fb8',
    type: PostTypes.opinion,
    title:
      'The Road to Generative AI Implementation: More Than Just Connecting a Model',
    mediaType: 'image',
    image: generativeAI,
    author,
    creationDate: '10/07/2024',
    tags: [TAGS.opinion, TAGS.fullstack, TAGS.tools],
    description: [
      "Artificial Intelligence (AI), especially generative AI, is revolutionizing how we create and consume content. In my quest to stay current with these emerging technologies, I enrolled in Microsoft's Professional Foundations of Generative AI course. While many think that implementing AI is just a matter of 'connecting' a pre-trained model, the reality is much more complex. Understanding what's behind these tools is crucial to effectively harnessing their full potential.",

      '|subtitle|More Than Just Connecting Models',
      "When we talk about implementing a generative AI model, such as a Generative Adversarial Network (GAN) or a Variational Autoencoder (VAE), it's easy to fall into the trap of thinking that it's enough to download and use them as they are. However, this approach overlooks many technical and ethical aspects that cannot be ignored.",

      "First, there's the issue of data quality. AI models, like GANs or VAEs, need large, well-prepared datasets to train properly. These datasets must be curated and balanced to avoid biases that affect the model's output. For example, if you're training a model to generate images of people, but your dataset is unbalanced (containing more images of a single demographic group), the generated results will reflect that bias.",

      '|subtitle|Prompts: The New Cornerstone of Generative AI',
      "The use of prompts is at the heart of generative models. A prompt is simply the input we provide to the model so that it can generate a response. In generative AI, learning to structure prompts accurately is key. It's not just about giving a vague instruction like 'generate an image', but detailing the characteristics you want to see in the result. Small variations in prompts can lead to very different outcomes.",

      'With tools like GPT and DALL-E, creating efficient prompts is a skill that not only impacts the quality of the generated content but also the efficiency of the models. By refining the prompts, we are optimizing the inference process, making it more effective and less computationally expensive.',

      '|subtitle|Infrastructure and Optimization: A Complex World',
      'One aspect that cannot be overlooked is the infrastructure needed to run these models. Notebooks like Google Colab or Jupyter Notebooks have facilitated access to AI development environments, but it is important to understand that these only offer a starting point. When implementing AI in production, hardware requirements increase considerably.',

      'Generative models, especially those with complex architectures like GANs or Transformers, are demanding in terms of processing. It is essential to optimize not only the model itself but also the infrastructure on which it will run. Factors such as memory consumption, computing power, and scalability must be carefully planned.',

      "In addition, the challenge of 'fine-tuning' arises. Many pre-trained models need to be fine-tuned to the specific needs of each use case. This involves more than just running the model; it requires an iterative process of testing and adjustment, where hyperparameters, datasets, and optimization techniques are adjusted.",

      '|subtitle|Bias in AI: A Necessary Debate',
      "During the course, I came across the phrase 'The biggest bias in AI is the human inferiority complex.' Personally, I do not share this statement. While it is true that there is some resistance to AI for fear of replacing human skills, I believe that the real challenge lies in how we reduce the intrinsic bias in the models themselves.",

      "The bias of an AI model can arise from the data it has been trained on or even from decisions developers make during its creation. For example, in GANs, where a generator model tries to fool a discriminator, bias can manifest in how the discriminator 'learns' to evaluate the generated content. If the discriminator has been trained on biased data, the generator will produce content reflecting those same biases.",

      '|subtitle|Where Are We Going?',
      'The distinction between human-generated and AI-generated content will become increasingly blurred. Models like Transformers have shown that it is possible to generate text, images, and even videos that mimic human creations with remarkable accuracy. Implementing AI in real-world projects requires not only connecting a model but also addressing all these complexities that lie beneath the surface.',

      'Generative AI is not a passing fad, but a technology that is shaping the present and future of content creation and software development. For those of us in this field, it is essential to not only learn how to use these tools but also understand the implications they have on the quality of what we develop.',

      'What do you think about the challenges presented by generative AI? How prepared are we to integrate it ethically and efficiently into our solutions?',
    ],
  },
  {
    id: '8ce398224bbc4120b17745f4db481cf9',
    type: PostTypes.opinion,
    title: 'Create and use your own npm packages in multiple projects',
    mediaType: 'image',
    // media: "https://www.youtube.com/embed/fL83GTilWjw",
    image: npmPackages,
    description: [
      'In the world of software development, efficiency and scalability are not just desirable, they are a must. As developers, we are constantly looking for tools and strategies to optimize our workflow and create robust and maintainable applications.',

      'In the web development ecosystem, one of these strategies, often underestimated, is the creation and use of own NPM packages.',

      'My path as a full-stack developer has exposed me to a wide range of projects. Throughout this journey, I have learned that code reuse is not simply a "good practice", but a strategic necessity. On countless occasions, I found myself repeating the same logic and functions in different projects, which led me to the idea: the need to centralize and reuse my own code.',

      'A paradigmatic case was my experience with the "xlsx" package. While it is a powerful tool for handling Excel files, its sometimes complex syntax and the need for additional code to adapt it to my needs made me rethink my approach. I then decided to encapsulate the specific logic I needed in an NPM package of my own, thus extending the functionality of "xlsx" and creating a tailor-made tool for my projects.',

      '|subtitle|Some of the benefits of creating your own NPM packages are:',

      '• Cleaner and more readable code: Abstracting complex logic into a standalone package made my code more concise and easier to understand.',

      '• Accelerated development: Reusing my own code through an NPM package significantly accelerated the development of new features.',

      '• Simplified maintenance: Updates or fixes were centralized in the package, making it easier to update all projects that used it.',

      'Creating and publishing my own NPM package not only streamlined my workflow, but also empowered me as a developer. It allowed me to take control of my development ecosystem and create custom solutions for recurring challenges.',

      "I used a tutorial that I can't find at the moment, but I saw this one and I think it's pretty accurate (it's in Spanish):",

      '|link|https://www.youtube.com/watch?v=SgmkNLFFCjM',
    ],

    author,
    creationDate: '09/10/2024',
    tags: [TAGS.project, TAGS.CI_CD, TAGS.nodeJS, TAGS.javaScript, TAGS.nodeJS],
  },
  {
    id: '1d0d966b84354712b92c359cc28a06c2',
    type: PostTypes.experience,
    title:
      'As a full stack developer I worked on the creation of a complete Management System.',
    mediaType: 'image',
    // media: "https://www.youtube.com/embed/fL83GTilWjw",
    image: UnderConstruction,
    description: [
      "I created a FullStack web application that manages the sales, costs, expenses, and inventories of a bar, thus facilitating the store's processes.",

      'Initially, in November, due to a mutual acquaintance, I was contacted to inquire about certain administrative processes of the bar in question. During my observations, I was told that they were creating specific software for sales management (as I mentioned in a previous blog post).',

      'Since the software was already being built, my involvement in the process was limited to creating an Excel spreadsheet to temporarily solve the sales and inventory management problem. However, by the end of November, early December, I was given the remaining project information.',

      "The bar's idea was to have custom software developed for their unique management needs. However, they were being sold a license for pre-made software, and they were being charged a significantly high monthly fee (I'm not sure if it's appropriate to mention the exact amount). Things were already going wrong: they were being charged for the application and the monthly license, which added up to a large sum of money.",

      "Additionally, during the 'delivery' of the software, they were told that to run the application, they would need to install Windows on their computer (they use a MacBook Pro in the business). This led to the business owner feeling uncomfortable with the situation.",

      'To keep it short, after that conversation with the other software provider, I was approached, and by the following Monday, I started working on the project.',

      'Stack used for this project were mainly TypeScript, NodeJS, React, Vite, Tailwind, Express, MongoDB, PostgreSQL, NestJS and NextJS.',
    ],

    author,
    creationDate: '07/16/2024',
    tags: [
      TAGS.experience,
      TAGS.fullstack,
      TAGS.nestjs,
      TAGS.nextjs,
      TAGS.CI_CD,
      TAGS.nodeJS,
      TAGS.javaScript,
    ],
  },
  {
    author,
    creationDate: '08/10/2024',
    description: [
      "The other day, I was browsing YouTube when I stumbled upon a video explaining how JavaScript works under the hood. Truth be told, it's a topic I've studied and understood before, but I wanted to refresh my knowledge. To my surprise, this video explained it so clearly and simply that I was hooked!",
      '|subtitle|Why is understanding the Call Stack important? (The Single Thread Problem)',
      'Now, why is understanding the call stack so crucial? Mainly because JavaScript operates on a single thread, unlike languages like C# or Java, which can utilize multiple threads for executing their algorithms.',
      "Imagine JavaScript as a chef with only one hand 👨‍🍳. They can create many delicious dishes, but they can only work on one thing at a time. If they're busy chopping onions for an omelet, they can't simultaneously whisk eggs for dessert.",
      "Because JavaScript is single-threaded, any process that takes a long time effectively freezes the entire application. It's like the chef endlessly chopping onions while the rest of the kitchen comes to a standstill.",

      '|subtitle|Additional resources to better understand the Call Stack',
      "Lydia Hallie's explanation is excellent, and the visuals make everything much easier to grasp. However, if you want to delve deeper or still have some lingering questions, here are some other resources you can explore:",
      '|linkIntroduction|Another great explanation, but in Spanish',
      '|link|https://www.youtube.com/watch?v=ygA5U7Wgsg8',
      '|linkIntroduction|Understanding JavaScript in depth, 33 essential concepts (concept 1 covers the call stack):',
      '|link|https://github.com/leonardomso/33-js-concepts ',
    ],
    id: '3806f8aa09ae45fb978096e651733e47',
    image: CallStack,
    mediaType: 'video',
    tags: [TAGS.opinion, TAGS.tools, TAGS.nodeJS, TAGS.javaScript],
    title: 'How does the Call Stack work in JavaScript?',
    type: PostTypes.opinion,
    media: 'https://www.youtube.com/embed/eiC58R16hb8?si=yLZCFhwKV5ZWu1ZO',
  },
  {
    author,
    creationDate: '07/23/2024',
    description: [
      'Recently, a friend reached out to me for a small project at a startup. They needed a chatbot, and although I had never created one before, curiosity got the better of me (thankfully, my bosses gave me the freedom to explore!).',
      "So, I dived into the world of AI with Python as my travel companion. Two libraries became my allies: one for the 'mind' of the chatbot, processing language and responding, and the other to give it 'life', launching it and connecting it.",
      "What blew my mind was the AI's ability to learn. I simply trained an algorithm with company information, and it was able to answer customer questions! 🤯",
      'Of course, the bot is still basic. The information was limited, and connecting it to databases is the next challenge. But seeing how with just a few lines of code, the AI brought a chatbot to life, interpreting and responding, left me speechless.',
      "How far can we go using AIs? I don't know, just wow.",
    ],
    id: 'f66d239b17b14cdda4889da32608cad4',
    image: chatBotImg,
    mediaType: 'image',
    title: 'AI Left Me Speechless: My First Experience with Chatbots 🤖',
    type: PostTypes.opinion,
    tags: [TAGS.opinion, TAGS.experience, TAGS.backend],
  },
  {
    author,
    creationDate: '07/08/2024',
    id: 'bcaa1e968b6a43daaea2f4638025fac8',
    image: tddImg,
    mediaType: 'image',
    type: PostTypes.opinion,
    title: 'Software Development Using TDD',
    description: [
      "This is a short post sharing my personal thoughts on working with TDD, but before diving into that, let's first explain what TDD is:",
      '|subtitle| What is TDD?',
      'Test-Driven Development is a programming practice that involves writing tests (usually unit tests) first, then writing the code to make those tests pass, and finally refactoring the written code. (Herranz, J. 2023)',
      '|image|https://images.spiceworks.com/wp-content/uploads/2022/09/29095630/How-TDD-Works.png',
      'Image sourced from: SpiceWorks.com',

      '|subtitle| My Opinion on Working with Test-Driven Development',
      'Recently, I worked on a project using TDD methodology, and it gave me some insight into why this methodology is so polarizing within the community.',
      "I've firsthand heard the opinion that 'writing tests is tedious because I know my code works when I write it.' And I understand that, but from my perspective, tests aren't just for yourself; they're meant to help your colleague (or yourself in the future) who might need to modify the code and ensure they aren't breaking anything.",
      "The primary purpose of Test-Driven Development isn't just to help you write code (though it does), it wants to ensure that future changes don't affect the overall functionality of the application. It's a safeguard to prevent changes from breaking everything.",
      "For example, let's say you worked on a feature to schedule users in a calendar, and it works perfectly. But tomorrow, you're asked to change the user schema. Both features work perfectly on their own, but when you integrate them, you might find it doesn't compile. Maybe the change in the user schema affected the scheduling process—perhaps a property, maybe a state, or anything else. TDD helps you foresee these issues.",
      "Working with TDD means more development time, questioning whether 'the code works anyway,' and dealing with the pressure to deliver. But it helps develop more robust, scalable code and makes your teammates's jobs easier (or your own in the future) by avoiding bugs.",
      "Yes, it's more code, but it's worth it.",
      "|note| Note: It should be clarified that using TDD or not is a specific decision to each project. Some projects will benefit from it, while others may not. It's not a golden rule that must always be followed.",
      '',

      'Herranz, Jose Ignacio. (April 13, 2023). TDD as a Software Design Methodology, retrieved from: https://www.paradigmadigital.com/dev/tdd-como-metodologia-de-diseno-de-software/',
    ],
    tags: [TAGS.testing, TAGS.CI_CD, TAGS.cleanCode, TAGS.opinion],
  },
  {
    id: 'fc2aaada30594ed9a39fa1928d267655',
    type: PostTypes.opinion,
    title: "Best Practices for React's useEffect by an Expert",
    mediaType: 'image',
    image: useEffectImg,
    description: [
      "Using named functions within the useEffect hook in React sounds a bit... odd, doesn't it? Well, not for Cory House.",
      'Not long ago, I saw a post on X discussing the use of named functions within the useEffect hook in React (yes, as the first parameter). The idea intrigued me, so I delved into the thread to see what people had to say about it.',
      "It's a way to improve code readability, making it easier to understand what a useEffect is doing in our application. And yes, from this perspective, it makes sense. However, it didn't convince everyone, with some arguing that it complicates development.",
      "On one hand, we have the readability aspect (which, yes, is more readable from my point of view). On the other hand, we have to consider conventions—it's much more common to see this hook used with a simple arrow function as a parameter. So, I understand the clash of opinions on this topic.",
      'Some people say that a simple comment explaining what the useEffect does solves everything. In other words, comment VS naming the function, to which the author of the post responds with the following:',
      "✅ Code tends to stay up to date, whereas comments often become outdated. Therefore, comments 'lie' more frequently than code.",
      '✅ Named functions improve stack tracking, enhancing debugging and error logging.',
      '✅ Comments should not replace a function name; they should complement the function name in exceptional cases where the name alone is not sufficient.',
      'There are also those who complain that now, thanks to this change, useEffects become too complex... Finding the right name for a function is harder than it seems 🤣.',
      "As for me, I think I prefer to continue using an arrow function with an inner function that I'll call later. It may not be the most optimal solution, but I find it quite decent and readable 🤯.",
      'Credits to Cory House @housecor on X, where I saw this post.',
      'What is your opinion on this? Is it better to use named functions or stick with typical arrow functions?',

      '|linkIntroduction|Link to the original post:',
      '|link|https://twitter.com/housecor/status/1753777632976461954',
    ],

    author,
    creationDate: '02/17/2024',
    tags: [TAGS.cleanCode, TAGS.opinion],
  },
  {
    id: '7a46a12b32e4461e911ef2e941303a33',
    type: PostTypes.project,
    title: 'Blog is Almost Ready 🚀👨🏻‍🚀!',
    mediaType: 'image',
    image: blogImg,
    description: [
      'Primarily focused on tech posts and updates about my projects, the blog is almost complete. There are just a few final touches left, but the overall functionality and details of the application are already finished.',

      'The creation of the application started in the first week of November 2023 and progressed gradually. After finishing my academic term at university, the project was almost entirely complete; in fact, only the styling details were left to finalize.',

      'Initially, there was no estimate of the development time required for this blog. Being so close to the final exam periods made budgeting somewhat uncertain.',

      'Finally, as of today, November 16, 2023, the project is practically finished.',

      'The technologies used for this project were primarily TypeScript, NextJS - React, Tailwind for styling, and ESLint with standard to improve the code quality.',

      '|note|(Update) 07/12/2024 Blog development is still in process xD',
      '|note| There were many changes so far',
    ],
    author,
    creationDate: '11/16/2023',
    tags: [TAGS.project, TAGS.fullstack, TAGS.nextjs, TAGS.CI_CD],
  },
  {
    id: '3ae67a3496d74fdfa5c16f6cbef1ed73',
    type: PostTypes.opinion,
    title:
      'What Was It Like Working with Visual Basic for the First Time at the Regional Office of a Multinational?',
    mediaType: 'image',
    image: opinionAboutVB,
    description: [
      'What do you think my experience was like working for a multinational company, on a regional project, with a programming language I had never used before, and with a high level of confidentiality?',

      "Initially, if you haven't read the article about my experience as a developer for the company, here's the link for you to check it out first:",

      'The link will be added when the blog is updated 😬',

      'As I mentioned in that article, my experience working for this company was curious. Initially, they contacted me while avoiding giving too much information. I knew my job was to unify information, but nothing in detail.',

      'It was quite interesting working with a company directly helping the HR sector (in the legal environment). It was very different from what I had done before. There was a lot at stake, and the processes were carried out in very different ways. It was also the time I worked with the most data, and everything had to be handled in detail and optimized.',

      'The result of this work made me feel accomplished. Achieving, through programming, that a really tedious and time-consuming process became a matter of a few clicks is something I find truly rewarding. Comparing the fact that previously, obtaining information about a regional employee took hours (literally) and now it can be done in a few seconds by typing their name, ID, or email and clicking a button, is something that excites me.',

      "Honestly, I thought it would be a more difficult process; however, due to my previous programming knowledge, it didn't take me long to adapt to using VBA.",

      'I made the tool relatively simply. Perhaps I missed using some best practices, but it was a job that I found rewarding, and when I finished it, I felt proud of it.',

      '|subtitle| Personal Mini Reflection',

      'The last thing I want to say is that sometimes taking on new challenges can be a bit scary, but at least in the programming world, it is totally worth it. As I mentioned earlier, I entered this project without knowing anything about Visual Basic, and in the end, it was completed with a lot of learning along the way. I am very happy with what I achieved there.',

      'Thanks to the company in question!',
      'I hope they are better prepared for their next audits 🤣',
    ],

    author,
    creationDate: '11/28/2023',
    tags: [TAGS.opinion, TAGS.experience, TAGS.tools, TAGS.cleanCode],
  },
  {
    id: 'f9cac5ffb2f5476b909abcd56e6fe641',
    type: PostTypes.opinion,
    title: 'The Commit Show by BettaTech and the Talk with MiduDev',
    mediaType: 'video',
    media: 'https://www.youtube.com/embed/fL83GTilWjw',
    image: theCommitShowImg,
    description: [
      "As a programmer, I have been following Midudev's content for years. He is one of my tech references (Spanish) and I have learned a lot from him.",
      "During the talk at BettaTech's The Commit Show, Midu talks about many topics related to technology and programming in general. He discusses who he is, his experience, and his perspective on the current and future state of the development world.",
      "One of the most relevant topics discussed in this talk is that when a programmer is looking to enter the market for the first time (or the first few times), it is very important to join a company that offers mentorship. This means having someone who can guide you through the process, which is one of the most educational aspects. In fact, he defines that 'It's much more important than the salary at the beginning.'",
      'While it is true that the lack of a mentor can lead a programmer to develop self-sufficiency, in some cases, this tends to become a mental burden that affects health and, in the end, is not worth it.',
      'The talk covers other important topics to consider in the development world, such as salaries and perhaps most importantly, what it means to be a senior developer.',
      'In my opinion, it is a highly recommended talk that provides a broad view of the programming environment.',
    ],

    author,
    creationDate: '11/03/2023',
    tags: [TAGS.opinion],
  },
  {
    id: '89ad3aea22014a68963c69621baf1ea2',
    type: PostTypes.project,
    title: 'I Created a Rock, Paper, Scissors Game App',
    mediaType: 'image',
    image: rockPaperScissorsGame,
    description: [
      'I created a web application inspired by the popular game of rock, paper, scissors to test my knowledge during my free time at university and my work.',
      'Initially, I wanted to practice my frontend skills and came across this challenge on *Frontend Mentor*. It was only focused on developing the visual aspect, but I decided to take it a step further and implement the necessary logic to make it playable.',
      'First, I developed the visual part to test my CSS skills. As I mentioned earlier, I took on this challenge to improve my understanding of the front end. I wanted to test my vanilla CSS knowledge and improve wherever necessary.',
      'Once the visual part was completed, I felt I could make it functional without much effort. So, I added the logic. In other words, I added JS to the HTML and CSS.',
      'It was a really fun project that helped me improve my code, styles, and best practices.',
      'To develop the project, I used the following technologies: TypeScript as the programming language, Vite as the build tool, React as the main development library, and vanilla CSS for styling the application.',
      'If you want to see the game, here it is: ',
      '|link|https://rps-game-navy.vercel.app/',
    ],

    author,
    creationDate: '11/03/2023',
    tags: [TAGS.project, TAGS.frontend, TAGS.react],
  },
  {
    id: '5e14c5bb00be4450b2376eda189a64fb',
    type: PostTypes.project,
    title: 'I Created a Timed Math Challenge App 👨🏻‍🔬⌛!',
    mediaType: 'image',
    // media: "https://www.youtube.com/embed/LZVsATLj4Tw",
    image: fastMaths,
    description: [
      'I created a quick math challenge game! The goal is to improve the response time and accuracy of my classmates at university  when faced with basic math problems.',
      'The idea came from a moment in my university classes where we were tested on how fluently we could respond to math questions. Personally, I did well (#humility), but my classmates struggled.',
      'Because of this, I came up with the idea to create an app to practice the speed at which you can answer basic math questions (related to addition, subtraction, multiplication, and division).',
      "I made this game with a scoring system to track the players' improvement, allowing them to compare their progress as they play.",
      "Honestly, this is a project I want to revisit today. It's interesting and I can scale it up a bit more just for fun.",
      'The scores are saved per person and are available whenever the player decides to return and play again!',
      'The stack I used for developing the game was: TypeScript as the programming language, Vite, and Tailwind 😄',
    ],

    author,
    creationDate: '11/03/2023',
    tags: [TAGS.project, TAGS.frontend, TAGS.react],
  },
  {
    id: '5c9ef6fa3e12415ca8a853150643b993',
    type: PostTypes.experience,
    title:
      'I Worked for a Multinational Using Programming (Visual Basic for Apps) 🦖!',
    mediaType: 'image',
    image: firstTimeVisualBasic,
    description: [
      'Due to contacts at my university, a company reached out to me for help with a problem they had regarding the validation of some profiles in Excel.',

      "Initially, for 'Company A' (as I will call it to protect their privacy), a very large international company in the country, a regional office specifically contacted me to help with a platform transition process they were going through (it wasn't going well and needed to be done urgently).",

      'Their general problem was that there was a lot of scattered information in many places, many files, and many platforms.',

      'My role was to unify information from different Excel files and platforms automatically, gathering employee information and using various algorithms with VBA (Visual Basic for Applications) to verify if they met the job requirements.',

      "If an employee did NOT meet the job profile, it would alert the HR responsible and add them to a list of 'invalid' people. Then, each section head would be notified to ensure the employee completed their profile if needed.",

      'In the best case, when the employee met the profile, they would be added to the list of those in compliance with the company, and no intervention was necessary.',

      'From these two lists, statistics were also generated to address various points of interest, such as the most affected sectors, the most critical requirements, the roles at greatest risk, and so on.',

      'Once this validation (employee vs. job profile) was done, the information was consolidated and stored in a OneDrive folder and the new platform, so all employee information was available in one place.',

      "In general, it wasn't difficult; it was just too many files to review one by one, hence the need to automate this process.",

      'After developing the entire algorithm for the company, the information query times were optimized by more than 99%. It went from taking more than an hour per employee to just a few clicks (previously, it involved searching through multiple Excel files and platforms).',

      "It's worth noting that the company had issues with profile compliance, and thanks to the development of the program, this point was progressively improved, allowing them to better respond to their audit processes.",
    ],

    author,
    creationDate: '11/26/2023',
    tags: [TAGS.experience, TAGS.cleanCode, TAGS.tools],
  },
  {
    id: '930a849815984e8a95d4f54f132aac29',
    type: PostTypes.experience,
    title:
      'I Created a Sales, Inventory, and Payroll System Using Visual Basic for Apps 🧮',
    mediaType: 'image',
    // media: "https://www.youtube.com/embed/LZVsATLj4Tw",
    image: barVB,
    description: [
      'I intervened in a bar to improve their situation and management. The business had no information system in place, no inventories, payroll, accounting books, or supplier records, etc.',

      'Initially, my intervention was focused on creating a temporary file (an algorithm) to manage sales, inventory, and payroll (because the company had already paid for the development of a software, so they would only use this Excel file for a short period of time).',

      "I was responsible for creating the necessary algorithms to determine each table's payments, automate inventory deductions, and automatically record cash income or increases in accounts receivable (accounting tasks).",

      'Yes, besides using my programming knowledge, I also used my skills as an administrator and financial accountant to help them with their issues (which were many, as mentioned earlier).',

      'Once I developed the Excel file with macros to handle these functions, I noticed it was common for bills in such businesses to be paid separately. So, while my work was functional and what they had asked for, I decided to personalize it further to make their lives easier.',

      'So yes, I intervened in many ways in this bar, and the most important achievement was that they now have the necessary tools to create the basic accounting records required to comply with DIAN and IyC.',

      "I really enjoyed doing this work, both as a programmer and a financial 'expert', and felt that I made a significant contribution to the business.",

      'Regarding the development, primarily Excel and its macros programmed in VBA were used (later I found out that you can also program in Excel with Python 🤦🏻‍♂️, maybe next time). The development of this algorithm was not very complex; it was about adapting to the local needs and writing code to meet them.',

      'I wish them much success, and thank you for the opportunity given.',
    ],
    author,
    creationDate: '11/26/2023',
    tags: [TAGS.experience, TAGS.opinion, TAGS.tools],
  },
  {
    id: '6957b082e06f4ba0a18b377143ce407b',
    type: PostTypes.experience,
    title: 'I Worked as a Fullstack Developer for NutriciónVital 🏪',
    mediaType: 'image',
    // media: "https://www.youtube.com/embed/LZVsATLj4Tw",
    image: nutricionVitalImg,
    description: [
      'I worked as a fullstack developer in creating an e-commerce platform for dietary supplements and nutritional plan sales services.',

      'I was contacted to join as a fullstack developer in the creation of an e-commerce application for the Argentine company Nutrición Vital, along with other developers in the same role.',

      'The company wanted to leverage its relationship with some gyms to sell products to their clients online. They wanted to offer the possibility to purchase items and have them delivered directly to their homes. To achieve this, they decided to create an online store from scratch with all the necessary functionalities for this type of sale.',

      '|image|/blog/webVitalExample.gif',

      '|note|Compressed and optimized GIF to improve performance although it loses a little quality.',

      'Initially, my responsibilities included creating and optimizing the code and functionality of the web application.',

      "Additionally, during the development of the application, I had to 'get involved' at a high level in the project architecture and best practices to make it more efficient.",

      'As a fullstack developer, I was involved in the entire development of the application, from databases, API creation, authentication, authorization, security, to creating the visual part of the application (front end).',

      'During the development of this project, I continued improving my skills with TypeScript, NodeJS, Express, React, Bootstrap, Redux, JWT, MercadoPago, email sending manager, MongoDB with mongoose, algorithmic logic, among others.',

      '|image|/blog/webVitalPayExample.gif',

      'Thanks for read!',
    ],
    author,
    creationDate: '11/27/2023',
    tags: [
      TAGS.experience,
      TAGS.fullstack,
      TAGS.CI_CD,
      TAGS.react,
      TAGS.express,
    ],
  },
  {
    id: '2bb2193700824b11bcc33c9dc5dd3c65',
    type: PostTypes.experience,
    title: 'I Worked as a Fullstack Developer for UCA 🎓',
    mediaType: 'image',
    // media: "https://www.youtube.com/embed/LZVsATLj4Tw",
    image: UnderConstruction,
    description: [
      'In January 2023, I joined a group of developers tasked with creating a web application for the Universidad Católica Argentina (UCA), an application designed to educate their students.',

      'I was hired as a fullstack developer, responsible for both frontend and backend development. The application aimed to simulate processes that law students would commonly face when entering the professional world. In short, our role was to recreate processes that legal professionals handle in their daily work.',

      'This way, students could better mentally prepare and adapt to the tools and situations they would encounter in the future.',

      'During this job, I used Agile methodology, pair programming, and the stack of Python, NodeJS, TypeScript, Express, React, Redux, MaterialUI, and more.',

      'Finally, the project was presented to the university and the result was its approval. In semester 2 (SII-2023), the application went into production and began being used by students.',

      '|subtitle|Some of my responsibilities in this job were:',

      '✅ Frontend Logic Development: Implemented the main logic functions in the frontend, ensuring that the code was simple, scalable, and maintainable.',
      '✅ Frontend and API Integration: Connected the frontend with the API, creating reusable functions and corresponding application services to promote best practices and facilitate future refactorings.',
      '✅ User Session Management: Managed user sessions with appropriate validations, both in the backend and frontend, ensuring that each user had access to specific functions and renderings according to their role. Implemented a token re-authentication and automatic logout system based on token expiration.',
      '✅ User Interface Development: With the help of my colleagues, designed clean user interfaces aligned with the nature of the application, prioritizing user intuition and ease of use.',
      '✅ Request Handling and Backend Development: Supported and developed with the team the responsibilities of handling requests, developing the API, establishing database connections, file management, and creating the login system, among other tasks.',
      '✅ Code Optimization: Ensured that the developed code was optimal, following good programming practices and keeping it easy to understand to facilitate teamwork and future maintenance.',
      '✅ Collaboration and Pair Programming: Actively participated in pair programming during the project development, collaborating with my colleagues to solve problems, share knowledge, and improve code quality together.',

      'Undoubtedly, one of the experiences where I have learned the most as a programmer.',

      'Just want to say thank you to UCA for giving me this opportunity 💚.',
    ],
    author,
    creationDate: '11/27/2023',
    tags: [TAGS.experience, TAGS.fullstack, TAGS.react, TAGS.CI_CD],
  },
  {
    id: '3036dd4b2fbb4b0496571af11af2aa6d',
    type: PostTypes.project,
    title: 'I Did My Graduation Project with Programming!',
    mediaType: 'image',
    // media: "https://www.youtube.com/embed/LZVsATLj4Tw",
    image: degreeImg,
    description: [
      'My graduation project was one of the most time-consuming tasks for me this year. I wanted to create something meaningful and not so commonly seen, and in some way, I wanted to use programming tools.',

      "To achieve this, I created an algorithm based on 'classes' using TypeScript that allowed me to analyze the content published by brands on various social media platforms.",

      'In short, the goal of this algorithm was to identify behavioral patterns, color patterns, posting frequency patterns, and overall how users interact with popular clothing brands on social media.',

      'Although initially the algorithm was tied to a dependency that allowed dynamic examination of different social media accounts, this idea had to be discarded because it did not comply with the policies for presenting the graduation project.',

      "Once the program was completed, it provides results on the primary color range for products, frequent posting times, determined content frequency, patterns that may indicate 'success' or 'failure' of a post, post categories that generate more interactions, content used to improve social media visibility, and more.",

      'It became a very comprehensive tool that helps understand the practices of successful companies on social media.',

      'For the original exercise, the last 150 posts of the company being analyzed were taken. From there, posts were divided into categories (products, memes, or quotes) and other data was added for categorization: date, time, and primary colors.',

      'Some examples of the functions of the algorithm include:',
      '✅ Identifying categories with the highest number of interactions.',
      '✅ Identifying colors with the highest number of interactions.',
      '✅ Identifying posts with the highest number of interactions.',
      '✅ Determining the frequency in days with which each type of content is posted.',
      '✅ Deviations and Xi².',
      '✅ Assessing potential loss from using colors not aligned with the category.',
      '✅ Identifying categories used in advertising strategies.',

      'Thanks to this tool, one can observe how the strategies of established companies work and try to replicate them in smaller companies or those just entering the market.',

      'Overall, it provides an overview of the content strategies that work for large companies with an established audience.',
      'Creating the tests was the most satisfying part...',

      'The algorithm is now available for our graduation project advisor to use with students.',
      'You can see the repo with all the information here:',
      '|link|https://github.com/Sebastian-pz/TDG-2023',
    ],
    author,
    creationDate: '11/03/2023',
    tags: [TAGS.project, TAGS.opinion, TAGS.tools],
  },
  {
    id: 'a17fbef4cb244ce3b2a107bf7fde4482',
    type: PostTypes.project,
    title: 'We Created a Social Network Inspired by Twitter (X) 🦆!',
    mediaType: 'image',
    // media: "https://www.youtube.com/embed/LZVsATLj4Tw",
    image: duckerImg,
    description: [
      'At the end of 2022, I proposed to my programmer friends Matias Straface and Mesila Hellrigl to create a social network inspired by the then Twitter, and in the first days of 2023, we got started on it.',
      'The name is directly a parody to allude to it being a copy of Twitter (we decided to name it Ducker 🦆).',
      'With the knowledge we had at that time, it wasn’t difficult to advance quickly on the project. In fact, it was progressing much faster than we expected.',
      'In the blink of an eye, we had already completed most of the backend (seriously, in a couple of days of pair programming it was almost 90% done). This was the motivation we needed to put even more determination into the project.',
      'Next, once the Ducker API was finished, we went straight to the visual aspects. We wanted to make it very similar to Twitter; however, we also wanted to experiment on our own, see what we could change, and what we could improve (from our perspective).',
      'Just like with the backend, the frontend progressed quickly. Within a week, most of the views were done, the API connections were ready, and we had the main social network actions functioning: posting Quaks, liking, commenting, and favoriting.',
      'The next part we worked on was the profile section, allowing users to personalize their profile with a photo, name, description, location, interests, and more. This part didn’t pose a major challenge for Team Ducker; by this point, we were very comfortable working on the project.',
      'From then on, it was all about refining details, improving visual aspects, and fixing bugs (which surprisingly weren’t many).',
      'Oh, of course, the stack is the usual: TypeScript, JavaScript, NodeJS, React, SASS, Express, JWT, MongoDB, Google Auth Library, Cors, WebSockets, and others.',
      'I want to thank my Team Ducker mates Mati and Meli, first of all for joining the project, second because when we transitioned to the frontend, my CSS skills weren’t as developed as they are now. They were incredibly patient and explained things to me gradually, and third, for being so cool and making this project a very enjoyable and fun experience.',
    ],
    author,
    creationDate: '11/27/2023',
    tags: [TAGS.project, TAGS.fullstack, TAGS.webSockets, TAGS.CI_CD],
  },
]

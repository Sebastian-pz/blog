import personImage from "../../../public/person.jpg";

export async function getPosts() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts").then(
    (res) => res.json()
  );

  return normalizeData(data);
}

function normalizeData(data: any) {
  return data.map((data: any) => {
    return {
      title: data.title,
      description: [data.body],
      author: "Sebastian Pérez",
      creationDate: "11/04/2023",
      image: personImage,
    };
  });
}

// export interface postInterface {
//   title: string;
//   image: any;
//   description: Array<String>;
//   author: string;
//   creationDate: string;
// }

export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
  imageUrl: string;
}

export const projects: Project[] = [
  {
    title: "Project One",
    year: 2023,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam veritatis dolorem rem praesentium dicta labore, at laudantium quisquam.",
    url: "https://example.com/",
    imageUrl: "photos/photo1.jpg",
  },
  {
    title: "Project Two",
    year: 2022,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam veritatis dolorem rem praesentium dicta labore, at laudantium quisquam.",
    url: "https://example.com/",
    imageUrl: "photos/photo2.jpg",
  },
  {
    title: "Project Three",
    year: 2021,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam veritatis dolorem rem praesentium dicta labore, at laudantium quisquam.",
    url: "https://example.com/",
    imageUrl: "photos/photo3.jpg",
  },
];

{
  // union Types
  type frontentDeveloper = "fakibazDeveloper" | "JuniorDeveloper";
  type fullStackDeveloper = "fakibazDeveloper" | "FullStackDeveloper";

  type Developer = frontentDeveloper | fullStackDeveloper;

  const newDeveloper: frontentDeveloper = "fakibazDeveloper";

  type User = {
    name: string;
    email: string;
    gender: "Male" | "Female";
    bloodGrup: "o+" | "o-" | "A+" | "A-";
  };

  const user1: User = {
    name: "Alauddin",
    email: "alauddin@gmail.com",
    gender: "Male",
    bloodGrup: "A-",
  };

  type FrontendDeveloper = {
    skills: string[];
    designatio1: "Front End Developer";
  };
  type BackendDeveloper = {
    skills: string[];
    designatio2: "Back End Developer";
  };

  type FulStackDeveloper = FrontendDeveloper & BackendDeveloper;
  const fullstackdeveloper: FulStackDeveloper = {
    skills: ["HTML", "css"],
    designatio1: "Front End Developer",
    designatio2: "Back End Developer",
  };
}

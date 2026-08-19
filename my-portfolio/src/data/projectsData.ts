//We define the shape of our project card data
export type Project = {
    id:number;
    slug: string;
    title: string;
    shortDescription: string;
    image: string;
    description: string;
    gallery:[
        "/images/hackjam-1.png",
        "/images/hackjam-2.png"];
    githubUrl: string;
}

//This is where we input all specifc project data instances
export const projects:Project[] = [
    {
        id:1,
        slug: "hackjam",
        title: "HackJam",
        shortDescription: "A full-stack application...",
        image: "/hackjam.png",
        description: "HackJam is a full-stack application for collaborating on project ideas and building prototypes.",
            gallery:[
        "/images/hackjam-1.png",
        "/images/hackjam-2.png"],
        githubUrl: "https://github.com/"
    },
    {
        id:2,
        slug: "fix-a-habit",
        title: "Fix-a-Habit",
        shortDescription: "A habit tracking application...",
        image: "/habit.png",
        description: "Fix-a-Habit helps users track their daily habits and build more consistent routines.",
            gallery:[
        "/images/hackjam-1.png",
        "/images/hackjam-2.png"],
        githubUrl: "https://github.com/"
    },
    {
        id:3,
        slug: "weather-dashboard",
        title: "Weather Dashboard application",
        shortDescription: "A WPF application...",
        image: "/loan.png",
        description: "A WPF desktop application that presents weather information in a simple dashboard.",
        gallery:[
        "/images/hackjam-1.png",
        "/images/hackjam-2.png"],
        githubUrl: "https://github.com/"
    }
]
//We define the shape of our project card data
export type Project = {
    id:number;
    slug: string;
    title: string;
    shortDescription: string;
    image: string;
    description: string;
    gallery: string[];
    techStack: string[];
    githubUrl: string;
}

//This is where we input all specifc project data instances
export const projects:Project[] = [
    {
        id:1,
        slug: "hackjam",
        title: "HackJam",
        shortDescription: "A full-stack application...",
        image: "/images/project-thumbnails/hackjam.svg",
        description: "HackJam is a full-stack application for collaborating on project ideas and building prototypes.",
        gallery:[
        "/images/project-thumbnails/hackjam.svg",
        "/images/project-thumbnails/fix-a-habit.svg",
        "/images/project-thumbnails/weather-dashboard.svg"],
        techStack: ['React', 'TypeScript', 'Node.js'],
        githubUrl: "https://github.com/"
    },
    {
        id:2,
        slug: "fix-a-habit",
        title: "Fix-a-Habit",
        shortDescription: "A habit tracking application...",
        image: "/images/project-thumbnails/fix-a-habit.svg",
        description: "Fix-a-Habit helps users track their daily habits and build more consistent routines.",
        gallery:[
        "/images/project-thumbnails/fix-a-habit.svg",
        "/images/project-thumbnails/hackjam.svg",
        "/images/project-thumbnails/weather-dashboard.svg"],
        techStack: ['React', 'JavaScript', 'CSS'],
        githubUrl: "https://github.com/"
    },
    {
        id:3,
        slug: "weather-dashboard",
        title: "Weather Dashboard application",
        shortDescription: "A WPF application...",
        image: "/images/project-thumbnails/weather-dashboard.svg",
        description: "A WPF desktop application that presents weather information in a simple dashboard.",
        gallery:[
        "/images/project-thumbnails/weather-dashboard.svg",
        "/images/project-thumbnails/hackjam.svg",
        "/images/project-thumbnails/fix-a-habit.svg"],
        techStack: ['C#', 'WPF', '.NET'],
        githubUrl: "https://github.com/"
    }
]
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
        shortDescription: "A hackathon-built team communication web app designed to help teams share ideas and collaborate effectively.",
        image: "/images/hackjam/hackjam%20thumbnail.jpg",
        description: "HackJam was created during a hackathon where our team developed an innovative web application focused on team communication. The project explored how a focused digital workspace could help teams share ideas, coordinate work, and collaborate more effectively.",
        gallery:[
        "/images/hackjam/hackjam%20screenshot.jpg",
        "/images/hackjam/hackjam%20screenshot%202.jpg",
        "/images/hackjam/hackjam%20screenshot%203.jpg"],
        techStack: ['React', 'Tailwind CSS', 'Vite', 'ASP.NET', 'C#', 'MySQL'],
        githubUrl: "https://github.com/UnOriginal00/HackJam-CodeMafia-Project"
    },
    {
        id:2,
        slug: "clam",
        title: "Clam (In development)",
        shortDescription: "A team communication SaaS for students and small startups, currently under construction.",
        image: "/images/project-thumbnails/clam-construction.svg",
        description: "Clam is a solo-built SaaS project focused on team communication for small teams such as students and early-stage startups. It is currently under construction as I develop the product, refine the experience, and turn the idea into a reliable communication tool.",
        gallery:[
        "/images/project-thumbnails/clam-construction.svg",
        "/images/project-thumbnails/clam-construction.svg",
        "/images/project-thumbnails/clam-construction.svg"],
        techStack: ['ASP.NET', 'C#', 'React', 'TypeScript', 'Vite', 'MySQL'],
        githubUrl: "https://github.com/UnOriginal00/ClamProject/"
    },
    {
        id:3,
        slug: "portfolio",
        title: "Personal Portfolio",
        shortDescription: "This portfolio website, built to present my projects, skills, education, and continued growth.",
        image: "/images/portfolio-project/portfolio%20thumbnail.png",
        description: "This portfolio is an ongoing project built to bring my work and learning into one clear, interactive experience. Screenshots and further project details will be added as the site and its featured projects continue to develop.",
        gallery:[
        "/images/portfolio-project/portfolio%20screenshot%20(main).png",
        "/images/portfolio-project/portfolio%20screenshot.png",
        "/images/portfolio-project/portfolio%20screenshot%20(2).png"],
        techStack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
        githubUrl: "https://github.com/UnOriginal00/Ripfumelo-Junior-Chauke---Portfolio-Website"
    }
]
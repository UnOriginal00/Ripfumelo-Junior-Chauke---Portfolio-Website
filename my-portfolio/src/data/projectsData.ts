//We define the shape of our project card data
export type Project = {
    title: string;
    shortDescription: string;
    image: string;
}

//This is where we input all specifc project data instances
export const projects:Project[] = [
    {
        title: "HackJam",
        shortDescription: "A full-stack application...",
        image: "/hackjam.png"
    },

    {
        title: "Fix-a-Habit",
        shortDescription: "A habit tracking application...",
        image: "/habit.png"
    },

    {
        title: "Weather Dashboard application",
        shortDescription: "A WPF application...",
        image: "/loan.png"
    }
]
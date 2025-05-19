import html5 from '../../assets/icons8-html-5-50.png';
import css3 from '../../assets/icons8-css3-50.png';
import javascript from '../../assets/icons8-javascript-50.png';
import scss from '../../assets/icons8-sass-50.png';
import bootstrap from '../../assets/icons8-bootstrap-50.png';
import tailwindcss from '../../assets/icons8-tailwind-css-48.png';
import react from '../../assets/icons8-react-60.png';
import angular from '../../assets/icons8-angularjs-50.png';
import nextjs from '../../assets/icons8-nextjs-48.png'
import redux from '../../assets/icons8-redux-50.png'
import vue from '../../assets/icons8-vuejs-50.png'
import chakra from '../../assets/icons8-chakra-ui-48.png'
import antd from '../../assets/ant-design-icon-511x512-gnj20nc8.png'
import nextui from '../../assets/nextui.png'
import astro from '../../assets/astro.webp'
import typescript from '../../assets/typescript-def.png';
import angularMaterial from '../../assets/angular-material-extensions-logo.svg'
import noventer from '../../../public/noventer.png'
import travello from '../../../public/travello1.png'
export const skillsCard = [
    {
        id: "1",
        name: "HTML5",
        icon: html5,
        color: "#de4b25",
        description: 'Semantic Markup Language',
        titles: "Structures content on web pages."
    },
    
    {
        id: "3",
        name: "CSS",
        icon: css3,
        color: "#244bde",
        description: 'Style Sheet Language',
        titles: "Styles the appearance of web elements."
    },
    {
        id: "4",
        name: "SCSS",
        icon: scss,
        color: "#c36796",
        description: 'CSS Preprocessor',
        titles: "Enhanced syntax for writing CSS"
    },
    {
        id: "5",
        name: "BOOTSTRAP",
        icon: bootstrap,
        color: "#8412f3",
        description: 'Front-End Framework',
        titles: "Pre-built UI components library."
    },
    {
        id: "6",
        name: "TAILWINDCSS",
        icon: tailwindcss,
        color: "#00cfcc",
        description: 'CSS Framework',
        titles: "A utility-first CSS framework."
    },
    {
        id: "2",
        name: "JAVA SCRIPT",
        icon: javascript,
        color: "#EFD81B",
        description: 'Programming Language',
        titles: "JavaScript language used to build interactive web pages."
    },
    {
        id: "7",
        name: "REACT",
        icon: react,
        color: "#00ccff",
        description: 'JavaScript Framework',
        titles: "Facebook's open-source JavaScript library for building user interfaces."
    },
    {
        id: "8",
        name: "CHAKRA UI",
        icon: chakra,
        color: "#0d9488",
        description: 'React UI Framework',
        titles: "React UI framework built by Facebook."

    },
    {
        id: "13",
        name: "ANGULAR MATERIAL",
        icon: angularMaterial,
        color: "#764ABC",
        description: 'ANGULAR UI framework built',
        titles: "React UI framework built by Google."
    },
    {
        id: "9",
        name: "ANT DESIGN",
        icon: antd,
        color: "#E34F26",
        description: 'React UI Framework',
        titles: "React UI framework built by Ant Design."
    },
    {
        id: "10",
        name: "NEXT UI",
        icon: nextui,
        color: "white",
        description: 'React UI Framework',
        titles: "React UI framework built by Vercel."
    },
    {
        id: "11",
        name: "ANGULAR",
        icon: angular,
        color: "red",
        description: 'JavaScript Framework',
        titles: "Google's open-source JavaScript framework."
    },
    {
        id: "12",
        name: "NEXTJS",
        icon: nextjs,
        color: "#0f3661",
        description: 'React Framework',
        titles: "React framework built by Vercel."
    },
    {
        id: "15",
        name: "ASTRO",
        icon: astro,
        color: "#E34F26",
        description: 'Framework for static web sites.',
        titles: "A static-site generator for React."
    },
    {
        id: "16",
        name: "TYPESCRIPT",
        icon: typescript,
        color: "blue",
        description: 'Typed extension of JavaScript.',
        titles: "TypeScript adds static type checking to JavaScript."
    },
    {
        id: "13",
        name: "REDUX",
        icon: redux,
        color: "#7248b6",
        description: 'JavaScript Framework',
        titles: "Redux is a predictable state container for JavaScript apps."
    },
    {
        id: "14",
        name: "VUE",
        icon: vue,
        color: "#41b17f",
        description: 'JavaScript Framework',
        titles: "Vue.js is a progressive, incrementally-adoptable JavaScript framework."

    },
]




import abplast from '../../assets/abplastnew.png'
import gamburger from '../../assets/gamburger.png'
import pixel from '../../assets/pixels.png'
import videplayer from '../../assets/videplayer.png'
import weather from '../../assets/weaTHER.png'
export const projectCard = [
    {
        id: 1,
        name: "AB Plast",
        description: "AB Plast заниматься производством и поставкой всех видов полимерных труб для подачи воды, газа и комплектующих материалов к ним.",
        link: "https://abplast.uz/",
        image: abplast,
        techStack: ["HTML", "SCSS", "Swiper", "Java Script"],
    },
    {
        id: 2,
        name: "Weather App",
        description: "Stay updated with real-time weather conditions for any city.",
        link: "https://weather-app-new-three.vercel.app/",
        techStack: ["Tailwindcss", "HTML","Java script"],
        image: weather, 
        github: "https://github.com/amirkhan-kh/weatherAppNew",

    },
    {
        id: 3,
        name: "MEGA BOX",
        description: "Displays total revenue, profit, and sales trends.",
        link: "https://66ca909f0c815f87b0879493--peppy-flan-26c1ac.netlify.app/",
        techStack: ["React","React Router","Bootstrap Icons","Recharts","Chart js",],
        image: travello,
        github: "https://github.com/amirkhan-kh/dashboardMegaBox",
    },
    {
        id: 8,
        name: "NovEnter",
        description: `A project developed for the 'NovEnter' company with highly optimized SEO.`,
        link: "https://noventer-one.vercel.app/ru",
        techStack: ["NextJs", "SCSS", "Tailwindcss", "i18n", "Next initl"],
        image: noventer,
        github: "https://github.com/amirkhan-kh/noventer",
    },
    {
        id: 4,
        name: "Pixels",
        description: `Pixels is a platform offering high-quality, worldwide.`,
        link: "https://willowy-cascaron-7c187a.netlify.app/",
        techStack: ["HTML","Java script", "Tailwindcss"],
        image: pixel,
        github: "https://github.com/amirkhan-kh/photos_Site/tree/master",
    },
    {
        id: 5,
        name: "Video Player",
        description: `Book Library is your ultimate destination for dison of books across next great read.`,
        link: "https://video-contents-beta.vercel.app/",
        techStack: ["HTML", "SCSS", "Java Script"],
        image: videplayer,
        github: "https://github.com/amirkhan-kh/VideoContents",
    },
    {
        id: 6,
        name: "Tasty Food Collections",
        description: "Tasty Food Collections  from savory mains to sweet desserts, perfect for any occasion.  your next meal.",
        link: "https://stirring-meerkat-2a8728.netlify.app/",
        techStack: ["React","Next js", "Tailwindcss"],
        image: gamburger,
        github: "https://github.com/amirkhan-kh/initialNextJs",
    },
    
   
    
    

]
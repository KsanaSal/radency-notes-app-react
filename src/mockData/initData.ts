import iconListCheck from "../assets/images/icon-list-check.svg";
import iconIdea from "../assets/images/icon-idea.svg";
import iconRandomThought from "../assets/images/icon-random-thought.svg";
import iconQuote from "../assets/images/icon-quote.svg";

const initData = [
    {
        categoryId: "1",
        categoryName: "Task",
        categoryImg: iconListCheck,
        createDate: "July 29, 2023",
        content:
            "Bread, milk, tomatoes, eggplants, yogurt, ice cream, chocolate",
        nameTitle: "Shopping list",
        mode: "add",
        recordId: "1663524239469",
        modificationDate: [],
        archived: true,
    },
    {
        categoryId: "1",
        categoryName: "Task",
        categoryImg: iconListCheck,
        createDate: "August 08, 2023",
        content: "Move the trip to the theater from 08.08.2023 to 08.12.2023",
        nameTitle: "Theater",
        mode: "add",
        recordId: "166356581685225",
        modificationDate: ["08/08/2023", "08/12/2023"],
        archived: false,
    },
    {
        categoryId: "1",
        categoryName: "Task",
        categoryImg: iconListCheck,
        createDate: "July 31, 2023",
        content: "The start learn a new programme Angular",
        nameTitle: "Books",
        mode: "add",
        recordId: "166352427247887",
        modificationDate: [],
        archived: false,
    },
    {
        categoryId: "3",
        categoryName: "Idea",
        categoryImg: iconIdea,
        createDate: "August 1, 2024",
        content: "I am implementing a new artistic wall painting",
        nameTitle: "New features",
        mode: "add",
        recordId: "1663524307213",
        modificationDate: [],
        archived: true,
    },
    {
        categoryId: "1",
        categoryName: "Task",
        categoryImg: iconListCheck,
        createDate: "August 08, 2023",
        content:
            "The planned trip to Prague is postponed from 09.25.2023 to 12.23.2023",
        nameTitle: "Travel",
        mode: "add",
        recordId: "1663565816886",
        modificationDate: ["09/25/2023", "12/23/2023"],
        archived: false,
    },
    {
        categoryId: "1",
        categoryName: "Task",
        categoryImg: iconListCheck,
        createDate: "July 25, 2023",
        content:
            "Wine, bread, sausage, cheese, cookies, tomatoes, cucumbers, cabbage, meat, cake, coffee, tea, sour cream",
        nameTitle: "Shopping list",
        mode: "add",
        recordId: "1663525334145",
        modificationDate: [],
        archived: true,
    },
    {
        categoryId: "2",
        categoryName: "Random Thought",
        categoryImg: iconRandomThought,
        createDate: "July 27, 2023",
        content:
            "The theory of evolution about the origin of humans from aliens",
        nameTitle: "The theory evolution",
        mode: "add",
        recordId: "1663525342591",
        modificationDate: [],
        archived: false,
    },
    {
        categoryId: "4",
        categoryName: "Quote",
        categoryImg: iconQuote,
        createDate: "June 27, 2023",
        content:
            "Here comes 40. I'm feeling my age and I've ordered the Ferrari. I'm going to get the whole mid-life crisis package.",
        nameTitle: "Keanu Reeves",
        mode: "add",
        recordId: "1663525348710",
        modificationDate: [],
        archived: false,
    },
    {
        categoryId: "1",
        categoryName: "Task",
        categoryImg: iconListCheck,
        createDate: "July 29, 2023",
        content: "Dentist appointment postponed from 07/29/2023 to 08/02/2023",
        nameTitle: "Dentist",
        mode: "add",
        recordId: "1663565816123",
        modificationDate: ["07/29/2023", "08/02/2023"],
        archived: false,
    },
    {
        categoryId: "3",
        categoryName: "Idea",
        categoryImg: iconQuote,
        createDate: "September 1, 2023",
        content:
            "Change hairstyle and hair color. Add new accessories to your wardrobe.",
        nameTitle: "New image",
        mode: "add",
        recordId: "1663565816833454",
        modificationDate: [],
        archived: false,
    },
];
export default initData;

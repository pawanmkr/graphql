import { nanoid } from 'nanoid';

class Course {
    constructor(id, { courseName, category, price, language, email, stack, teachingAssists }) {
        this.id = id;
        this.courseName = courseName;
        this.category = category;
        this.price = price;
        this.language = language;
        this.email = email;
        this.stack = stack;
        this.teachingAssists = teachingAssists;
    }
}

//this empty object will hold all the courses in key value pair
const courseHolder = {};

//resolver map
const resolvers = {
    getCourse: ({ id }) => {
        return new Course(id, courseHolder[id]);
    },
    createCourse: ({ input }) => {
        let id = nanoid();
        courseHolder[id] = input;
        return new Course(id, input);
    }
}

export default resolvers;
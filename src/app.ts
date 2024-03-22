showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt!.innerText = `Hello from ${name}`;
}

interface IBook {
    title: string;
    author: string;
    year: number;
}

type BookRequiredFields = Required<IBook>;

const bookRequiredFields: BookRequiredFields = { title: 'TypeScript for dummies', author: 'Vitaliy Zhyrytskyy', year: 2024 };

type UpdatedBook = Partial<IBook>;

const updatedBook: UpdatedBook = { title: 'JavaScript' };

interface Author {
    name: string;
    email: string;
    age: number;
}

type AuthorWoEmail = Omit<Author, 'email'>;

type CreateCustomerFunctionType = (str: string, num: number) => string;
const createCustomer: CreateCustomerFunctionType = (str, num) => str + num.toString();

let params: Parameters<CreateCustomerFunctionType> = ['Roma', 33];

createCustomer(params[0], params[1]);

type fn = (arg1: string, arg2: number, arg3: boolean) => symbol;

type Param1<T> = T extends (arg1: infer U, ...args: any[]) => any ? U : never;
type Param2<T> = T extends (arg1: any, arg2: infer U, ...args: any[]) => any ? U : never;
type Param3<T> = T extends (arg1: any, arg2: any, arg3: infer U, ...args: any[]) => any ? U : never;

type P1<T> = Param1<fn>;
type P2<T> = Param2<fn>;
type P3<T> = Param3<fn>;

type RequiredProps<T extends object> = {
    [P in keyof T]-?: T[P];
};

type OptionalProps<T extends object> = {
    [P in keyof T]+?: T[P];
};

interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
    subTitle?: string;
}

type BookRequiredProps = RequiredProps<Book>;
type BookOptionalProps = OptionalProps<Book>;

type RemoveProps<T extends object, TProps extends keyof T> = Omit<T, TProps>;

type BookRequiredPropsType = RemoveProps<Book, keyof BookOptionalProps>;
type BookOptionalPropsType = BookOptionalProps;

const obj1: BookRequiredPropsType = {}; // незрозуміло чому немає помилки, BookRequiredPropsType потребує обовʼязкових полів
const obj2: BookOptionalPropsType = {};

// не впевнений що зрозумів останне завдання(
function update<T extends boolean>(flag: T): T extends true ? string : number {
    if (flag) {
        return 'true' as T extends true ? string : number;
    } else {
        return 123 as T extends true ? string : number;
    }
}
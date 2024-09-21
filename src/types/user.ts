export interface userRegisterData {
    email: string;
    nickname: string;
    password: string;
    username: string;
    [property: string]: any;
}

export interface userLoginData {
    password: string;
    username: string;
    [property: string]: any;
}

export interface userBaseInfo {
    birthday: string;
    email: string;
    intro: string;
    label: string[];
    nickname: string;
    profession: string;
    qq: string;
    sex: string;
    [property: string]: any;
}


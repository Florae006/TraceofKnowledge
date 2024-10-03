export interface userRegisterRes {
    email: string;
    nickname: string;
    password: string;
    username: string;
}

export interface userLoginRes {
    password: string;
    username: string;
}

export interface userProfileRes {
    username: string,
    nickname: string,
    sex: string,
    avatar: string,
    school: string,
    level: string,
    class: string,
    email: string,
    phone: string,
    address: string,
}


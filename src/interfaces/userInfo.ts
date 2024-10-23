interface Data {
    email: string;
}

interface Info {
    data: Data;
    iat: number;
    exp: number;
}

export interface UserInfo {
    token: string;
    info: Info;
}

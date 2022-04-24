export enum LoginCode {
    Fail = 1001,
    Success,
    WrongToken,
    RightToken,
}

export enum RegisterCode {
    Existed = 2001,
    Success,
}

export enum DocsItemCode {
    Success = 3001,
    Fail,
}

export enum CreateDocCode {
    Success = 4001,
    Fail,
}

interface QuestionResponse {
    title: string;
    response: string;
}

export interface FAQ {
    General: QuestionResponse[];
    "Rastreo de envíos": QuestionResponse[];
    Servicios: QuestionResponse[];
    Pagos: QuestionResponse[];
    Tecnología: QuestionResponse[];
    [key: string]: QuestionResponse[];
}

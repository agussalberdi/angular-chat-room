export interface Message {
    id: string;
    user: string;
    text: string;
    date: Date;
}

export interface ChatRoom {
    id: string;
    name: string;
    users: string[];
    messages: Message[];
    favorite: boolean;
}

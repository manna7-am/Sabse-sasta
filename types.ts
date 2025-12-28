export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  shortDescription: string;
  description: string;
  category: string;
  rating: number;
  reviews: number;
  tags: string[];
}

export interface NavItem {
  label: string;
  path: string;
}

export enum ChatSender {
  USER = 'user',
  BOT = 'bot'
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: ChatSender;
  timestamp: number;
}
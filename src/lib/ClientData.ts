// lib/clientsData.ts
import { faker } from '@faker-js/faker';

export type Client = {
  id: string;
  fullName: string;
  role: string; 
  email: string;
  phone: string;
  image?: string;
  createdAt: string;
};

export const generateClients = (count: number = 20): Client[] => {
  return Array.from({ length: count }, () => ({
    id: faker.string.uuid(),
    fullName: faker.person.fullName(),
    role: faker.person.jobTitle(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    image: faker.image.avatar(),
    createdAt: faker.date.past().toISOString().split('T')[0],
  }));
};

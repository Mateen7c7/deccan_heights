import { Client, Databases, ID } from 'appwrite';

const client = new Client()
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || 'https://fra.cloud.appwrite.io/v1')
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || '6a68a4b40000fca4fd22');

export const databases = new Databases(client);
export const DATABASE_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID || '6a68ac860033a3f60a88';
export const COLLECTION_ID = process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID || 'form';
export { ID };

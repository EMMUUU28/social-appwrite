import { Client, Account, Databases, Storage, Avatars } from 'appwrite'

const VITE_PROJECT_ID='659c2b78c58bca89ed50';
const VITE_PROJECT_URL='https://cloud.appwrite.io/v1';
const VITE_APPWRITE_STORAGE_ID='65a0fb7e9948823f0ab3';
const VITE_APPWRITE_DATABASE_ID='65a0fbf2bcbbc40ee76b'
const VITE_APPWRITE_DATABASE_SAVES = '65afe6e957210e1e9734';
const VITE_APPWRITE_DATABASE_USERS = '65afe6ce108ac70a2172';
const VITE_APPWRITE_DATABASE_POSTS = '65afe6865788433f68e9'; 

export const appwriteConfig = {
    projectId:VITE_PROJECT_ID,
    url:VITE_PROJECT_URL,
    databaseid:VITE_APPWRITE_DATABASE_ID,
    usersid:VITE_APPWRITE_DATABASE_USERS,
    savesid:VITE_APPWRITE_DATABASE_SAVES,
    postid:VITE_APPWRITE_DATABASE_POSTS,
    storageid:VITE_APPWRITE_STORAGE_ID,

}
const client = new Client();
client
  .setEndpoint(appwriteConfig.url)
  .setProject(appwriteConfig.projectId); // Replace with your project ID

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
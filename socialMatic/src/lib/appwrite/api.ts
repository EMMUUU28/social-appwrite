import { INewUser } from "@/types";
import { account, appwriteConfig, avatars, databases } from "./config";
import { Account, ID } from 'appwrite';
import { log } from "console";

export async function createUserAccount(user:INewUser){
    try {
        const newAccount = await account.create(
            ID.unique(),
            
            user.email,
            user.password,
            user.name,
            
        )

    const avatarUrl = avatars.getInitials(user.name)
    const newUser = await saveUserToDB({
        accountId:newAccount.$id,
        name:newAccount.name,
        email:newAccount.email,
        username:user.username,
        imageUrl:avatarUrl,
    });
        return newUser;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export async function saveUserToDB(user:
    {
    accountId:string,
    email:string,
    imageUrl:URL,
    name:string,
    username?:string

}){
    try {
        const newUser = await databases.createDocument(
            appwriteConfig.databaseid,
            appwriteConfig.usersid,
            ID.unique(),
            user
        )
    } catch (error) {
        console.log(error);
        
    }
}
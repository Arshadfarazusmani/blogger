

import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf";


export class AuthService {
    clint = new Client();
    account ;

    constructor(){
        this.clint
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.projectID)

        this.account=new Account(this.clint)
    }



    async createAccount ({email ,password , name ,}){
        try {

             const UserAccount = await this.account.create(ID.unique(),email,password , name ) ; 

             if(UserAccount){

                return this.Login({email,password});






                
             }else{
                return UserAccount
             }


            
        } catch (error) {
            throw error ; 
            
        }
    }

    async Login ({email,password}){
        try {
            const session = await account.createEmailPasswordSession(
                email, 
                password
            );


            return session
        


        




            
        } catch (error) {
            throw error
        }

    }


    async getCurrentUser(){

        try {
            return  await this.account.get()
            
        } catch (error) {

            throw error
        }  

        
        
      
        }

    async Logout(){

        try {

            await this.account.deleteSessions()
            
        } catch (error) {
            console.log("Appwrite service logout issue :", error);
            
            
        }
    }
    }








const authService = new AuthService();



export default authService;




// const client = new Client()
//     .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
//     .setProject('<PROJECT_ID>');                 // Your project ID

// const account = new Account(client);

// const user = await account.create(
//     ID.unique(), 
//     'email@example.com', 
//     'password'
// );

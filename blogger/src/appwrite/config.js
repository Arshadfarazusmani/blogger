import { Client, Account, ID , Databases , Storage , Query } from "appwrite";
import conf from "../conf/conf";


export class Service{
    clint = new Client();
    databases;
    bucket;

    constructor(){
        this.clint
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.projectID)

        this.databases=new Databases(this.clint)
        this.bucket= new Storage(this.clint)
    }

    async CreatePost({title,slug,content,coverImage,status,UserId}){
        try {
            return await this.databases.createDocument(
                conf.dbID,
                conf.collectionID,
                slug,
                {
                    title,
                    content,
                    coverImage,
                    status,
                    UserId
                }
            )
        } catch (error) {
            console.log("Appwrite service create post error ",error);
            
        }

    }

    async UpdatePost(slug,{title,content,coverImage,status}){
        try {

            return await this.databases.updateDocument(
                conf.dbID,
                conf.collectionID,
                slug,
                {
                    title,
                    content, 
                    coverImage,
                    status
                }
            )

            
        } catch (error) {
            console.log("Appwrite service update post err",error);
            
        }



    }

    async deletePost (slug){
        try {


             await this.databases.deleteDocument(
                conf.dbID,
                conf.collectionID,
                slug
             )
            return true;
        } catch (error) {
            console.log(error)

            return false;
            
        }
    }

     async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            
            )
        } catch (error) {
            console.log("Appwrite serive :: getPost :: error", error);
            return false
        }
    }


     async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
                

            )
        } catch (error) {
            console.log("Appwrite serive :: getPosts :: error", error);
            return false
        }
    }


     async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite serive :: uploadFile :: error", error);
            return false
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: deleteFile :: error", error);
            return false
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }

}



const service = new Service();

export default service
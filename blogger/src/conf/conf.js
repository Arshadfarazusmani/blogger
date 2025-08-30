const conf = {
    appwriteUrl:String(import.meta.env.VITE_REACT_APP_APPWRITE_URL),
    projectID: String(import.meta.env.VITE_REACT_APP_APPWRITE_PROJECT_ID),
    dbID:String(import.meta.env.VITE_REACT_APP_APPWRITE_DATABASE_ID),
    collectionID: String(import.meta.env.VITE_REACT_APP_APPWRITE_COLLECTION_ID),
    bucketID: String(import.meta.env.VITE_REACT_APP_APPWRITE_BUCKET_ID)

}

export default conf
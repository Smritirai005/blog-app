const config={
    appwriteURL: String(import.meta.env.VITE_BLOGAPP_URL),
    appwriteProject_id: String(import.meta.env.VITE_BLOGAPP_PROJECT_URL),
    appwriteDatabase_id: String(import.meta.env.VITE_BLOGAPP_DATABASE_URL),
    appwriteCollection_id: String(import.meta.env.VITE_COLLECTION_PROJECT_URL),
    appwriteBucket_id: String(import.meta.env.VITE_BLOGAPP_BUCKET_URL)
}
export default config;
//NEVER READ FROM PROCESS.ENV always put in a object and export it.
export const config = {
    port: process.env.PORT || 8080,
    baseURL: process.env.BASE_URL || "localhost"
}
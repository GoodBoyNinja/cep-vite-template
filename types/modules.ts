declare module "*.svg" {
    const path: string;
    export default path;
}

declare module "*.png" {
    const content: any;
    export default content;
}

declare module "*.jsx?extendscript" {
    const content: string;
    export default content;
}

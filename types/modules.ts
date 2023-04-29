declare module "*.svg" {
    const content: SVGElement | string;
    export default content;
}

declare module "*.png" {
    const content: any;
    export default content;
}

declare module "*.jsx?extendscript" {
    const content: string;
    export default content;
}

declare module '*.vue' {
    import { ComponentOptions } from 'vue'
    const componentOptions: ComponentOptions
    // export function request(): { username: string, password:string}
    export default componentOptions
}
declare module "*.svg" {
    const content: string;
    export default content;
}
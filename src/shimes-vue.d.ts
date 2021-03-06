declare module '*.vue' {
    import { ComponentOptions } from 'vue'
    const componentOptions: ComponentOptions
    export default componentOptions
}
declare module "*.svg" {
    const content: string;
    export default content;
}
declare module '*.md' {
    const str: string
    export default str
}
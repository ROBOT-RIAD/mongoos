export interface INotes{
    title:string, 
    content:string, 
    category : "personal"|"work"|"Study",
    pinned : boolean,
    tags :{
        label: string,
        color: string,
    }  
}
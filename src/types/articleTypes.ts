export interface ArticleContentTypes {
    sectionId: string
    sectionName: string
    sectionTitle: string
    paragraphs: React.ReactNode
}
 
export interface ArticleTypes {
    id: number
    articleName: string
    content: ArticleContentTypes[]
}
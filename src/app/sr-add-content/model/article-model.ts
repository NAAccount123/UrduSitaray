export class ArticleModel{
    constructor()
    {
       this.FullPictureName="..\\assets\\"+this.BlogId+"\\"+this.PictureName;
    }
    FullPictureName:string;
    PictureName:string;
    Id:number;
    BlogId:number;
    Title:string=null;
    Description:string=null;
    Alt:string=null;
    IsComments:boolean;
    Link:string=null;
    Category:string=null;
    LinkedToBlog:number=-1;

    }
export class Serie {
    id: number;
    name: String;
    channel: String;
    seasons: number;
    descripcion :String;
    link:String;
    imageUrl:String;
    constructor(id:number, nombre: String , canal: String, temporada:number, descripcion:String, link : String , imageUrl: String) {
            this.id = id;
            this.name = nombre;
            this.channel = canal;
            this.seasons = temporada;
            this.descripcion = descripcion;
            this.link = link;
            this.imageUrl = imageUrl;
        }
    


}

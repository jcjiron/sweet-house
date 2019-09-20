export class FileItem {

    public file: File;
    public fileName: string;
    public url: string;
    public isUploading: boolean;
    public progress: number;
    public imageUrl: string | ArrayBuffer

    constructor( file: File ) {

        this.file = file;
        this.fileName = file.name;

        this.isUploading = false;
        this.progress = 0;
        this.getImageUrl();
    }

    private getImageUrl(){

        let reader = new FileReader();
        reader.readAsDataURL(this.file); 
        reader.onload = (_event) => { 
          this.imageUrl = reader.result; 
        }
    }

}

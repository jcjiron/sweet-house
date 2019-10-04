export class FileItem {

    public file: File;
    public fileName: string;
    public url: string;
    public isUploading: boolean;
    public progress: number;
    public imageUrl: string | ArrayBuffer
    public size: number


    constructor( file: File ) {
        console.log(file);
        
        this.file = file;
        this.fileName = file.name;
        this.size = file.size;

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

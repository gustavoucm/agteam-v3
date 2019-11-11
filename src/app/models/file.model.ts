export class FileItem{
    public file: File;
    public fileName: string;
    public url: string;
    public progress: number;
    public uploading: false;
    
    constructor(file: File) {
        this.file = file;
        this.fileName = file.name;
        this.progress = 0;
    }
}
export class DownloadFiles {
    constructor() {}

    static downloadFile(path: string, fileName: string) {

        const downloadInstance = document.createElement('a');
        downloadInstance.href = path ?? 'link';
        downloadInstance.target = '_blank';
        downloadInstance.download = fileName ?? 'Orden del Día';

        document.body.appendChild(downloadInstance);
        downloadInstance.click();
        document.body.removeChild(downloadInstance);
    }
}
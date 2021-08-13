import * as path from 'path';
import * as vscode from 'vscode';

export class FileInfo {
    private type: string;
    private name: string;
    private itemPath: string;

    /**
     * Extracts the needed information about the provider file path.
     * 
     * @throws Error if the path is invalid or you don't have permissions to it
     */
    constructor(itemPath:string) {

        this.itemPath = itemPath;

        vscode.workspace.fs.stat(vscode.Uri.parse(itemPath)).then(stat => {
            this.type = stat.type === 2 ? 'dir' : 'file';
        })
        
        this.name = path.basename(itemPath);
    }

    isDirectory(): boolean {
        return this.type == 'dir';
    }

    getPath() {
        return this.itemPath;
    }

    getName() {
        return this.name;
    }
}

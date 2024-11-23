export class FolderNode {
  id: number;

  name: string;

  children: FolderNode[];

  constructor(id: number, name: string, children: FolderNode[]) {
    this.id = id;
    this.name = name;
    this.children = structuredClone(children);
  }
}
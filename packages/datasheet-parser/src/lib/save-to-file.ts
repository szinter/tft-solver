import { writeFile } from 'node:fs';
import { Buffer } from 'node:buffer';
import * as path from "path";

export default function saveToFile(content: String, filePath: String): void {
  const data: Uint8Array = new Uint8Array(Buffer.from(content));
  writeFile(path.resolve(filePath.toString()), data, (err) => {
    if (err) throw err;
    console.log(`The file(${filePath.split('/').at(-1)}) has been saved!`);
  });
}

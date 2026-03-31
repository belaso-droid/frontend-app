import fs from 'fs';
import path from 'path';

const parseFile = (filePath) => {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const lines = fileContent.split('\n');
    const data = lines.map((line) => {
      const trimmedLine = line.trim();
      if (!trimmedLine) return null;
      const [key, value] = trimmedLine.split('=');
      return { key, value };
    }).filter((item) => item!== null);
    return data;
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.error(`Error: File not found at path: ${filePath}`);
    } else {
      console.error(`Error: ${error.message}`);
    }
    return [];
  }
};

export default parseFile;
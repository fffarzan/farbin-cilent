export function removeDotFromObjectFileType(data: any, prop: string): any {
  const length = data.length;

  for (let i = 0; i < length; i++) {
    if (data[i][prop]) {
      if (data[i][prop].charAt(0) === '.') data[i][prop] = data[i][prop].substr(1);
    }
  }

  return data;
}


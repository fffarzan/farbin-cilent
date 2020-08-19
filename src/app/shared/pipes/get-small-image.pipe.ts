import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getSmallImage'
})
export class GetSmallImagePipe implements PipeTransform {
  transform(value: string): string {
    if (!value.includes("\\Small\\")) {
      if (!value.includes("/Small/")) {
        let temp = [];

        if (value.includes("Picture/")) {
          temp = value.split("/");
          let tempLength = temp.length;
          temp.splice(tempLength - 1, 0, 'Small');
          value = temp.join("/");
        } else if (value.includes("Picture\\")) {
          temp = value.split("\\");
          let tempLength = temp.length;
          temp.splice(tempLength - 1, 0, 'Small');
          value = temp.join("\\");
        }

        return value;
      }
    }
  }
}
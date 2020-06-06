import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getSmallImage'
})
export class GetSmallImagePipe implements PipeTransform {
  transform(input: string) {
    if (!input.includes("\\Small\\")) {
      if (!input.includes("/Small/")) {
        let temp = [];

        if (input.includes("Picture/")) {
          temp = input.split("/");
          let tempLength = temp.length;
          temp.splice(tempLength - 1, 0, 'Small');
          input = temp.join("/");
        } else if (input.includes("Picture\\")) {
          temp = input.split("\\");
          let tempLength = temp.length;
          temp.splice(tempLength - 1, 0, 'Small');
          input = temp.join("\\");
        }

        return input;
      }
    }
  }
}
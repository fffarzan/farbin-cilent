export class AboutUsUtils {
  static filterListByCategory(list: object[], idList: string[], item?: object, idField?: string) {
    let filteredList = [];

    if (item) {
      let itemId: string = item[idField];

      // pushing id of the item to idList array if the list was empty.
      if (!idList.length) idList.push(itemId);
      else {
        /**
         * searching in idList and compare ids with the id has came
         * from template. If were same, delete the id from list and break. 
         * (means we want to remove a filter)
         */
        for (let i = 0; i < idList.length; i++) {
          if (idList[i] === itemId) {
            idList.splice(i, 1);

            if (!idList.length) filteredList = list;

            break;
          } else if (idList[i] !== itemId) {
            /**
             * pushing itemId to idList if the id was not exist 
             * (means we applied an item to list).
             */
            idList.push(itemId);  
          }
           
        }
      }

      // pushing all items with ids that are in idList.
      for (let i = 0; i < idList.length; i++) {
        for (let j = 0; j < list.length; j++) {
          if (idList[i] === list[j][idField]) filteredList.push(list[j]);
        }
      }
    } else filteredList = list;

    return filteredList;
  }
}
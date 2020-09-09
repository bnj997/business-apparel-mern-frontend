
export const useSort = () => {
  const sortString = (garments, type) => {
    if (type === "name") {
      let sorted = garments.sort(function(a, b){
        var x = a.name.toLowerCase();
        var y = b.name.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
      });
      return sorted;
    } else {
      let sorted = garments.sort(function(a, b){
        var x = a.category.toLowerCase();
        var y = b.category.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
      });
      return sorted;
    }
  }

  const sortNum = (garments) => {
    return garments.sort((a, b) => parseFloat(b.price) - parseFloat(a.price)) 
  }


  const filterGarments = (garment, filter) => {
    return garment.filter(function(item) {
      return item.name.toLowerCase().includes(filter.toLowerCase()) === true
    });
  }

  return {sortNum, sortString, filterGarments }
}
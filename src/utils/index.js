export function convertToB(a) {
    let b = {
      "new_info": {},
      "giaobanngay_id": a.id
    };
  
    // Biểu diễn dữ liệu a thông qua dữ liệu b
    for (let key in a) {
      if (key !== 'id' && a.hasOwnProperty(key)) {
        b.new_info[key] = a[key];
      }
    }
  
    return b;
  }
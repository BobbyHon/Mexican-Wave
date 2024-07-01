function wave(str){
    let strArray = []
    str.split('').forEach((x,i) => {
      if (x == ' '){}
      else{
        strArray.push(str.slice(0, i).concat(str[i].toUpperCase(), str.slice(i + 1)))
      }
    })
    return strArray
  }
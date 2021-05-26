class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]+/g, '')
  }

  static titleize(string) {
    const noCapital = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by','from']
    const title = []
    string = string.toLowerCase().split(' ')
    for(let i = 0; i < string.length; i++){
      if (i === 0 || !noCapital.includes(string[i])){
        title.push(this.capitalize(string[i]))
      } else {
        title.push(string[i])
      }
    }
    return title.join(' ')
  } 
}
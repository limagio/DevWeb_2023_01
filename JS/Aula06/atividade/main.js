var varUnidimensional = ["HTML", 1993, "CSS", 1996, "Bootstrap", 2011, "JS", 1995, "React", 2013, "Java", 1995]
console.log(varUnidimensional)
console.log(varUnidimensional.length)
console.log(varUnidimensional[6])
console.log(varUnidimensional.toString())
console.log(varUnidimensional.join("/"))
console.log (varUnidimensional.unshift("IOS"));
console.log("Novo array com a informação IOS no início:", varUnidimensional);
console.log("Quantidade de posições atualizadas:", varUnidimensional.length);

let varBidimensional = [
  ["HTML", 1993],
  ["CSS", 1996],
  ["Bootstrap", 2011],
  ["JS", 1995],
  ["React", 2013],
  ["Java", 1995]
];

console.log(varBidimensional);

console.log("Tamanho do array:", varBidimensional.length);

let ano2013 = varBidimensional[4][1];
console.log("Ano 2013:", ano2013);

varBidimensional[3][0] = "JavaScript";
console.log("Array com informação JS trocada por JavaScript:", varBidimensional);

varBidimensional.splice(5, 1);
console.log("Array sem a informação Java:", varBidimensional);

varBidimensional.push(["pipoca"]);
console.log("Array com a informação pipoca adicionada:", varBidimensional);

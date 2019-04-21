let arr = ["2332355", "154486", "379459", "799529", "51876", "34484", "7962929"];

for(let i = 0; i < arr.length; i++) {
    if(arr[i][0] == "3" || arr[i][0] == "7") {
        console.log( parseInt(arr[i]) );
    } 
}

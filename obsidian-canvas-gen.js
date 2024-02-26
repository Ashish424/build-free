// Obsidian accepts base 36 16 digits strings as ids
// sl - https://forum.obsidian.md/t/how-is-the-canvas-node-element-id-determined/50739


// js bitwise OR with 0 to truncate to an integer trick 
// sl -  https://stackoverflow.com/questions/48265771/js-bitwise-what-are-the-rules-of-math-random-2-being-interpreted-as-0-and 
function generate_unique_string(len = 16,base = 36){
    let result = '';
    for(let i = 0;i<len;++i){
        // NOTE : string concatenation generates garbage 
        // TODO: see if you can eliminate this 
        result += (Math.random()*base | 0).toString(base);
    }
    return result;
}

function generate_unique_strings_array(array_length){
    const unique_strings = new Set();
    while (unique_strings.size < array_length) {
        unique_strings.add(generate_unique_string());
    }
    return Array.from(unique_strings);
};



// canvas object reference
// const ref_structure = {
//     "id": "d23a1a150aaa560f",
//     "type": "text",
//     "text": "",
//     "x": -557,
//     "y": 1460,
//     "width": 250,
//     "height": 60
// };



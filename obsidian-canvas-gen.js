// Obsidian accepts base 36 16 digits strings as ids
// sl - https://forum.obsidian.md/t/how-is-the-canvas-node-element-id-determined/50739
function generate_unique_string(){
    let result = '';
    while (result.length < 16) {
        result += Math.random().toString(36).slice(2, 16);
    }
    return result.slice(0, 16);
};

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



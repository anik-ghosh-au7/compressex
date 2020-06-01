const index_length = (idx) => (idx + '').toString().length;

String.prototype.insert = function(idx, str) {
    return this.slice(0, idx) + str + this.slice(idx);
};

String.prototype.delete = function(idx, count) {
    return this.slice(0, idx) + this.slice(idx + count);
};

const cal_count = (input) => {
    let count_arr = Array(input.length).fill(0);
    let left = 0;
    let right = 0;
    for (let i = 1; i < input.length; i++) {
        if (i > right) {
            left = right = i;
            while (right < input.length && input[right] === input[right - left]) {
                right++;
            };
            count_arr[i] = right - left;
            right--;
        } else {
            let j = i - left;
            if (count_arr[j] < right - i + 1) {
                count_arr[i] = count_arr[j];
            } else {
                left = i;
                while (right < input.length && input[right] === input[right - left]) {
                    right++;
                };
                count_arr[i] = right - left;
                right--; 
            }
        }
    }
    return count_arr;
};

module.exports.compress = (input) => {

let data_obj = [];
let unmatched_str = '';

while (input.length > 0) {

    let count_arr = cal_count(input);
    
    unique_count = [...new Set([...count_arr].sort())];

    while (unique_count.length > 0) {
    
    let max_count = unique_count.pop();

    if (max_count == 0) {
        unmatched_str = unmatched_str + input[0];
        input = input.slice(1);
        break;
        
    } else if (max_count > index_length(count_arr.indexOf(max_count))) {
        if (unmatched_str) {
            data_obj.push(unmatched_str);
        };
        unmatched_str = '';
        key = input.slice(0, max_count);
        value = '';
        count_arr.forEach((elem,index) => {
            if (elem == max_count && index_length(index) < max_count) {
                if (value) {
                    value = value + ',' + index
                } else {
                    value = value + index;
                } 
            }
        });
        data_obj.push({[key]: value});
        let value_arr = value.split(',').map(elem => Number(elem))
        for (let i = value_arr.length-1; i >=0; i--) {
            input = input.delete(value_arr[i], max_count)
        };
        input = input.delete(0, max_count)
        break;
        }
    }
};
if (unmatched_str) {
    data_obj.push(unmatched_str);
}
    return data_obj;
}

module.exports.decompress = (compressed_input) => {

    let output_str = '';

    for (let i = compressed_input.length-1; i >= 0; i--) {
        if (typeof(compressed_input[i])=== "object") {
            let key = Object.keys(compressed_input[i]);
            let indices = Object.values(compressed_input[i])[0].split(',').map(elem => Number(elem));
            output_str = output_str.insert(0, key);
            for (let j = 0; j < indices.length; j++) {
                output_str = output_str.insert(indices[j], key);
            };
        } else {
            output_str = compressed_input[i] + output_str;
        };
    };

    return output_str;
};
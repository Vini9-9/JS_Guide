// double function in a single line

const numbers = [1, 2, 3];

function double([number, ...rest]) {
    return !number && number!=0 ? [] : [number * 2, ...double(rest)];
}


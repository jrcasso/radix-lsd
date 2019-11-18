module.exports = function lsdSort(arr){
    array = arr;
    function sort(index) {
        var doNextRadix = false;
        var i, j, k;
        const currentIndexValue = 10 ** index;
        const nextIndexValue = 10 ** (index + 1);
        const bins = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
        i = 0;
        for (j = 0; j < array.length; j++) {
            var value = array[j];
            var magnitude = Math.abs(value);
            if(magnitude >= nextIndexValue){
                doNextRadix = true;
            }
            const digit = Math.floor(magnitude / currentIndexValue) % 10;
            if(value >= 0){
                bins[digit + 10].push(value);
            }
            else{
                bins[10 - digit].push(value);
            }
        }
        for (j = 0; j < bins.length; j++) {
            const bin = bins[j];
            for(k = 0; k < bin.length; k++){
                array[i++] = bin[k];
            }
        }
        return doNextRadix;
    }

    var radix = 0;
    if (array.length > 1) {
        while (sort(radix++));
    }
    return array;
}
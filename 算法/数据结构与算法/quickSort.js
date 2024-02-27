const quickSort = (arr, l, r) => {
    if (l >= r) {
        return;
    }

    let i = l;
    let j = r;
    const base = arr[l];
    while (i < j) {
        while (arr[j] >= base && i < j) {
            j--;
        }
        while (arr[i] <= base && i < j) {
            i++;
        }
        const tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }


    arr[l] = arr[i];
    arr[i] = base;
    quickSort(arr, l, i - 1);
    quickSort(arr, i + 1, r);
}

const arr = [5, 6, 3, 1, 2, 7, 9, 4, 8];
quickSort(arr, 0, arr.length - 1);

console.log(arr);

function countSmaller(nums: number[]): number[] {
    const n = nums.length;
    const counts = new Array(n).fill(0);

    const indices = Array.from({ length: n }, (_, i) => i);
    const temp = new Array(n);

    function mergeSort(left: number, right: number): void {
        if (left >= right) return;

        const mid = Math.floor((left + right) / 2);

        mergeSort(left, mid);
        mergeSort(mid + 1, right);

        let i = left;
        let j = mid + 1;
        let k = left;
        let smallerCount = 0;

        while (i <= mid && j <= right) {
            if (nums[indices[j]] < nums[indices[i]]) {
                temp[k++] = indices[j++];
                smallerCount++;
            } else {
                counts[indices[i]] += smallerCount;
                temp[k++] = indices[i++];
            }
        }

        while (i <= mid) {
            counts[indices[i]] += smallerCount;
            temp[k++] = indices[i++];
        }

        while (j <= right) {
            temp[k++] = indices[j++];
        }

        for (let p = left; p <= right; p++) {
            indices[p] = temp[p];
        }
    }

    mergeSort(0, n - 1);

    return counts;
}

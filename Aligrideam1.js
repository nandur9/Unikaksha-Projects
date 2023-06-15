function checkElement(arr) {
    const n = arr.length;
    for (let i = 1; i < n - 1; i++) {
      let smaller = true;
      let greater = true;
      for (let j = 0; j < i; j++) {
        if (arr[i] <= arr[j]) {
          smaller = false;
          break;
        }
      }
      for (let j = i + 1; j < n; j++) {
        if (arr[i] >= arr[j]) {
          greater = false;
          break;
        }
      }
      if (smaller && greater) {
        return true;
      }
    }
    return false;
  }
  
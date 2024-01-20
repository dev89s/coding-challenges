
def largestPermutation(k, arr):
    # Write your code here
    r = arr.copy()
    r.sort(reverse=True)

    for i in range(0, len(arr)):
        print(k)
        if (r[i] == arr[i]):
            continue
        else:
            tempInd = arr.index(r[i])
            temp = arr[i]
            arr[i] = r[i]
            arr[tempInd] = temp
            print("This is at index: ", i)
            k -= 1
            print(k)
            if k <= 0:
                break

    return arr

arr = [4, 2, 3, 5, 1]
k = 2

print(largestPermutation(k, arr))

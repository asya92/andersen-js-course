/**
 * Реализовать функцию union в этом файле, и экспортировать ее.
 *
 * Функция принимает 2 массива, и возвращает массив объедененных значений,
 * без дублирования
 *
 * console.log(union([5, 1, 2, 3, 3], [4, 3, 2])); -> [5, 1, 2, 3, 4]
 * console.log(union([5, 1, 3, 3, 4], [1, 3, 4])); -> [5, 1, 3, 4]
 */
export function union(arr, arr2) {
    let arrNew=[];
    ArrayUnion(arr,arr2);
    ArrayUnion(arr2,arr);
    return arrNew;
      
        
        function ArrayUnion(array1, array2){ 
            for (let value of array1) 
            if (!arrNew.includes(value)) 
                arrNew.push(value);
    
        }
    }
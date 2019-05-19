// const reDuplicate = (s) => {
//     //let s = str.split(");
//     const set = new Set();
//     let res = "";
//     for(let i = 0; i < s.length-1; i++){
//         if(set.has(s[i])) {
//             continue;
//         } else{
//             res += s[i];
//             set.add(s[i]);
//         }
//     }
//     return res;
// } 
// console.log(reDuplicate("aabbccdd"));

// const rev = (s) => {
//     let res = "";
//     for(let i = s.length-1; i >= 0; i--){
//         res = res + s[i];
//     }
//     return res;
// }
// console.log(rev("aabbcdd"));

var dfs = (nums, index, res) => {
    if (index === nums.length) {
        res.push(nums.slice(0));
        return;
    }
    for (let i = index; i < nums.length; i++) { //destructing
        [nums[i], nums[index]] = [nums[index], nums[i]];
        dfs(nums, index + 1, res);
        [nums[i], nums[index]] = [nums[index], nums[i]];
    }
}

var permute = function(nums) {
let res = [];
dfs(nums, 0, res);
return res;

}
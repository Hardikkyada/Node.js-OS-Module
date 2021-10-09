const os = require("os");

console.log("Architecture :- " + os.arch());
console.log("Free Memory :- " + Math.round(os.freemem / (1024 * 1024 * 1024)));
console.log("Total Memory :- " + Math.round(os.totalmem / (1024 * 1024 * 1024)));
console.log("Platform :- " + os.platform());

console.log("..!!!....Information Of Current User....!!!..");
console.log("User Name:- " + os.userInfo().username);
console.log("User GID:- " + os.userInfo().gid);
console.log("User Home Directory:- " + os.userInfo().homedir);
console.log("User Shell:- " + os.userInfo().shell);
console.log("User UID:- " + os.userInfo().uid);


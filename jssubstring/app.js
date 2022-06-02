const s = ['jedan' ,'dva' ,'tri' ,'cetiri' ,'pet'];
const subs = (str) =>{
    let noviStr = str.map(el => el.charAt(0).toUpperCase() + el.substring(1 , el.lenght));
    return noviStr;
}
console.log(subs(s));
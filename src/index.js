function slugger(...args){

    var shit = '';
    args.forEach(value => {
        shit+="-"+ value;
    })

    shit = shit.substr(1,shit.length);
    //console.log(shit);
    return shit;
}

module.exports = {slugger};
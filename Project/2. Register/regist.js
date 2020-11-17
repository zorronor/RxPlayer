
let data = {
    name:'',
    email:'',
    password:'',
    gender:'',
    payment:'',
    tnc: false
}

nameAdd = (val) => {
    if(data.name.search(" ") === -1) return data.name = val;
    return alert('err');
};

emailAdd = (val) => {
    if(val.search("@") != -1) return data.email = val;
    return alert('err');
};

passwordAdd = (val) => {
    if(val.length > 5) return data.password = val;
    return alert('err');
};

genderAdd = (val) => {
    return data.gender = val;
};

paymentAdd = (val) => {
    return data.payment = val;
};

tncAdd = (val) => {
    if(val.checked === true) return data.tnc = true;
    else return data.tnc = false;
};

submitbtn = () => {
    if(!data.name || !data.email || !data.password || !data.gender || !data.payment || data.tnc === false) return alert('Terdapat data yang kurang');
    return alert(`nama:${data.name}\nemail:${data.email}\npassword:${data.password}\ngender:${data.gender}\npayment:${data.payment}\ntnc-check?:${data.tnc}`);
};

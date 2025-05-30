let secretcode={};
fetch('./javascript/codes.json')
    .then(response => response.json())
    .then(data =>{secretcode=data;text=data;})
    .catch(error => console.error('載入 JSON 失敗:', error));

function checkcode(){
    let code=document.getElementById('secret-code').value;
    for(let i=0;i<34;i++) if(secretcode[i].code==code) window.location.href='./secret-site/'+secretcode[i].site;
}
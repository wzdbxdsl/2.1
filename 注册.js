//注册
        var usernameTemp = document.querySelector(".register");
        let obj1
        usernameTemp.addEventListener('keyup', () => {
            obj1 = { username: usernameTemp.value };
            obj1 = JSON.stringify(obj1)
        })
        async function add() {
            let res = await fetch('http://runninglili.club:8080/register', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: obj1
            })

            let json = await res.json()
            console.log(json)
        }
//登录
        var usernameTemp1 = document.querySelector(".login");
        let obj2
        usernameTemp1.addEventListener('keyup', () => {
            obj2 = { username: usernameTemp.value };
            obj2 = JSON.stringify(obj2)
        })
        async function login() {
            let res = await fetch('http://runninglili.club:8080/login', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: obj2
            })

            let json = await res.json()
            console.log(json)
           // var  token 
            //token = JSON.stringify(JSON.token);
            localStorage.setItem('userToken', json.token)
            let token = localStorage.getItem('userToken')

            
           
        }

//获取留言
GET()
async function GET() {
    let res = await fetch('http://runninglili.club:8080/getAllMessages')
    let json = await res.json()
    console.log(json)
    let arr=''
    json.forEach(element => {
        console.log(element)
        arr+=`
        <ul class="myUL">
                <li>${element.username}</li>
                <li class="colletion">${element.words}</li> 
            </ul>
        `
    });
    //console.log(arr);
    myUL.innerHTML=arr;
}
//上传留言       
var myUL=document.querySelector(".myUL ");
var sub=document.querySelector(".sub ")
var put=document.querySelector(".put")
let obj3
put.addEventListener('keyup', () => {
    obj3 = { put: put.value };
    obj3 = JSON.stringify(obj3)
})

sub.addEventListener('submit',function(e){
    e.preventDefault()
    submit()
})
async function submit() {
    let res = await fetch('http://runninglili.club:8080/sendMes', {
        method: 'post',
        headers: {
            //'Content-Type': 'application/json',
            'Authorization':'Bearer ' + this.token
        },
        body: obj3
    })

    let json = await res.json()
    console.log(json)
}

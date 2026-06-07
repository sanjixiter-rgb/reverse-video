*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Inter,sans-serif;
}

body{
    background:#0d0d0d;
    color:white;
    display:flex;
    min-height:100vh;
}

.sidebar{
    width:240px;
    background:#111;
    border-right:1px solid #222;
    padding:25px;
}

.sidebar h1{
    color:#00d4ff;
}

.main{
    flex:1;
    padding:30px;
}

.topbar{
    margin-bottom:25px;
}

.topbar p{
    color:#aaa;
    margin-top:5px;
}

.upload-area{
    border:2px dashed #333;
    background:#161616;
    border-radius:16px;
    padding:50px;
    text-align:center;
    cursor:pointer;
    transition:.2s;
}

.upload-area:hover{
    border-color:#00d4ff;
}

#videoInput{
    margin-top:15px;
}

#preview{
    width:100%;
    max-height:500px;
    margin-top:20px;
    border-radius:15px;
    background:black;
}

.buttons{
    margin-top:20px;
    display:flex;
    gap:15px;
}

button{
    padding:12px 24px;
    border:none;
    border-radius:10px;
    background:#00d4ff;
    color:black;
    font-weight:bold;
    cursor:pointer;
}

button:hover{
    opacity:.9;
}

.progress-container{
    width:100%;
    height:12px;
    background:#222;
    border-radius:999px;
    overflow:hidden;
    margin-top:20px;
}

.progress-bar{
    width:0%;
    height:100%;
    background:#00d4ff;
    transition:.2s;
}

#status{
    margin-top:10px;
    color:#aaa;
}

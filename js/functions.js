let url = "https://atividadesetejoaott905.herokuapp.com/books"

/*
    Formulários
*/

function submitPost(){
    console.log("entrei na função");
    
    const form = document.forms['postForm'];    
    const mensagem = form["mensagem"].value;
    callFetchWithPost(mensagem);
    return false; // Evitar o reload da tela.
}

function submitPut(){
    const form = document.forms['putForm'];  
    const id = form["id"].value;  
    const mensagem = form["mensagem"].value;
    callFetchWithPut(id, mensagem);
    return false; // Evitar o reload da tela.
}

function submitDelete(){
    const form = document.forms['deleteForm'];  
    const id = form["id"].value;  
    callFetchWithDelete(id);
    return false; // Evitar o reload da tela.
}
function MakeCard(){
    injectHere.innerHTML="";
    //Build out the card body
    //Build out H5 Element ------------------
    let h5 = document.createElement('h5');
    h5.className="card-title";
    // h5.classList.add('card-title');
    h5.textContent = "I am the header";
    //-----------------------------------------
    //Build out p tag
    let p = document.createElement('p');
    p.className="card-text";
    p.textContent= "Some quick example text to build on the card title and make up the bulk of the card's content.";
    //------------------------------
    //Build out a tag
    let a = document.createElement('a');
    a.className="btn btn-primary";
    a.textContent = "Go somewhere";
    a.addEventListener('click',function(e){
        alert("You clicked this card");
    })
    let bodyDiv = document.createElement('div');
    bodyDiv.className = "card-body";
    //--------------------------------
    //Put together body div
    bodyDiv.appendChild(h5);
    bodyDiv.appendChild(p);
    bodyDiv.appendChild(a);
    //Build Image tag
    let img = document.createElement('img');
    img.className="card-img-top";
    img.src="...";
    img.alt="...";
    //--------------------------
    //Build outer div
    let outerDiv = document.createElement('div');
    outerDiv.className="card";
    outerDiv.style="width: 18rem;";
    //--------------------------
    //put it all together
    outerDiv.appendChild(img);
    outerDiv.appendChild(bodyDiv);
    injectHere.appendChild(outerDiv);
    // SayHello()
}

export { MakeCard }
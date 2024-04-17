function alterarStatus(id){
    let itemClicado = document.querySelector(`#game-${id}`);
    let img = itemClicado.querySelector('div');
    let botao = itemClicado.querySelector('a');
    img.className = img.className === 'dashboard__item__img--rented'? 'dashboard__item__img' : 'dashboard__item__img--rented';
    
    if(botao.classList.contains('dashboard__item__button--return')){
        botao.classList.remove('dashboard__item__button--return');
        botao.innerText = 'Alugar';
    }else{
        botao.classList.add('dashboard__item__button--return');
        botao.innerText = 'Devolver';
    }
}

    
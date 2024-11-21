function adicionarItem() {
    const novoItem = document.getElementById('novoItem').value;
    const lista = document.getElementById('minhaLista');
    const novoElemento = document.createElement('li');
    novoElemento.textContent = novoItem;
    
    if (novoItem === '') {
        alert('Por favor, digite um item.');
    } else {
        lista.appendChild(novoElemento);
        document.getElementById('novoItem').value = '';
    }
}
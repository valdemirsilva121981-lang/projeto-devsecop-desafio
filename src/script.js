// ✅ SEGURANÇA: Chaves de API e senhas removidas do código estático (Hardcoded)
const API_KEY = "";
const DB_PASSWORD = "";

// Busca tarefas do "banco de dados"
fetch('db.json')
    .then(response => response.json())
    .then(data => {
        // ✅ SEGURANÇA: innerText é seguro contra XSS
        document.getElementById('db-status').innerText = data.status;

        const list = document.getElementById('task-list');
        data.itens.forEach(item => {
            let li = document.createElement('li');
            li.innerText = item.task;
            list.appendChild(li);
        });
    })
    .catch(err => {        
        // ✅ SEGURANÇA: Mensagem genérica para não vazar a pilha de erros (err.stack) para o usuário final
        document.getElementById('db-status').innerText = 'Erro ao carregar o banco de dados.';
    });

// Adiciona nova tarefa na tela
function addTask() {
    const input = document.getElementById('new-task');
    const output = document.getElementById('output');

    // ✅ SEGURANÇA: Criando o elemento e usando innerText em vez de innerHTML para bloquear injeções de script (XSS)
    const li = document.createElement('li');
    li.innerText = input.value;
    output.innerHTML = ''; // Limpa o output anterior de forma segura
    output.appendChild(li);

    // ✅ SEGURANÇA: Removido o uso perigoso da função eval()
    console.log("Tarefa adicionada com segurança");

    input.value = '';
}

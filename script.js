// Função para validar campos obrigatórios
function validarCamposObrigatorios(etapa) {
    const camposObrigatorios = document.querySelectorAll(`#etapa-${etapa} input[required], #etapa-${etapa} textarea[required]`);
    let camposValidos = true;

    camposObrigatorios.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = "#e74c3c"; // Borda vermelha em campos vazios
            camposValidos = false;
        } else {
            input.style.borderColor = "#BDC3C7"; // Borda normal
        }
    });

    return camposValidos;
}

// Função para avançar para a próxima etapa
function avancarEtapa(proximaEtapa) {
    // Verificar se todos os campos obrigatórios da etapa atual estão preenchidos
    if (!validarCamposObrigatorios(proximaEtapa - 1)) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
    }

    // Esconder a etapa atual
    const etapas = document.querySelectorAll('.etapa');
    etapas.forEach((etapa) => {
        etapa.classList.remove('ativa');
    });

    // Mostrar a próxima etapa
    const novaEtapa = document.getElementById(`etapa-${proximaEtapa}`);
    novaEtapa.classList.add('ativa');
}

// Função para adicionar cursos
function adicionarCurso() {
    const curso = document.getElementById("curso").value;
    const instituicao = document.getElementById("instituicao").value;
    const dataConclusao = document.getElementById("data_conclusao").value;

    // Verificar se todos os campos de curso estão preenchidos
    if (curso && instituicao && dataConclusao) {
        const cursosList = document.getElementById("cursosList");

        const cursoElement = document.createElement("p");
        cursoElement.textContent = `${curso} - ${instituicao} (Concluído em: ${dataConclusao})`;

        cursosList.appendChild(cursoElement);

        // Limpa os campos
        document.getElementById("curso").value = '';
        document.getElementById("instituicao").value = '';
        document.getElementById("data_conclusao").value = '';
    } else {
        alert("Por favor, preencha todos os campos de curso.");
    }
}

// Função para adicionar experiências profissionais
function adicionarExperiencia() {
    const cargo = document.getElementById("cargo").value;
    const empresa = document.getElementById("empresa").value;
    const periodo = document.getElementById("periodo").value;

    // Verificar se todos os campos de experiência estão preenchidos
    if (cargo && empresa && periodo) {
        const experienciasList = document.getElementById("experienciasList");

        const experienciaElement = document.createElement("p");
        experienciaElement.textContent = `${cargo} na ${empresa} (${periodo})`;

        experienciasList.appendChild(experienciaElement);

        // Limpa os campos
        document.getElementById("cargo").value = '';
        document.getElementById("empresa").value = '';
        document.getElementById("periodo").value = '';
    } else {
        alert("Por favor, preencha todos os campos de experiência.");
    }
}

// Exibir a primeira etapa ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    avancarEtapa(1);
});


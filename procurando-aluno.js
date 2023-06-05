const alunos = ['João', 'Juliana', 'Ana', 'Caio'];

const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeENota(aluno) {

    if(listaDeAlunosEMedias[0].includes(aluno)) {

        const alunos = listaDeAlunosEMedias[0];
        const medias = listaDeAlunosEMedias[1];

        console.log(`${aluno} está cadastrado`);

        const indice = alunos.indexOf(aluno);

        console.log(indice);

        const mediaDoAluno = medias[1][indice];

        console.log(`${aluno} tem a média ${mediaDoAluno}`)

    } else {

        console.log('Aluno não encontrado!');
    }
}

exibeNomeENota('João');
exibeNomeENota('Everaldo');
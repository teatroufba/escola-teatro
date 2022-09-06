interface IDocente {
	imagemAlt: string;
	email: string;
	imagemUrl: string;
	interesses: string;
	link: string;
	nome: string;
	uid: string;
}

interface IInformacoes {
	endereco: string;
	email: string;
	telefone: string;
	uid: string;
}

interface ICorpoTecnico {
	email: string;
	nome: string;
	funcao: string;
}

interface IMembro {
	email: string;
	nome: string;
	telefone: string;
	funcao: string;
}

interface ISetor {
	membros: IMembro[];
}

interface ISetor {
	membros: IMembro[];
	nome: string;
}
interface IFormaIngresso {
	link: string;
	titulo: string;
}

interface IFormasIngresso {
	formas: IFormaIngresso[];
}

interface IConteudo {
	conteudo: string;
	titulo: string;
}

interface IConteudos {
	conteudos: IConteudo[];
}

interface IApresentacaoItem {
	conteudo: string;
	imageAlt: string;
	imageUrl: string;
	titulo: string;
}

interface IApresentacao {
	conteudos: IApresentacaoItem[];
}

export const conteudoLongo =
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus amet, eget facilisis enim, felis pellentesque. Mus risus, varius in tincidunt varius pretium non egestas. Odio placerat diam fringilla ultricies. Dolor eget hendrerit donec ipsum convallis pretium, neque nisi.Porta placerat id sit quis diam augue. Nibh purus morbi nec tortor. Pharetra phasellus consequat, turpis enim amet, etiam. Aliquam orci mauris quis amet fermentum. At in orci a molestie. Sit vitae, egestas pellentesque a. Mauris scelerisque adipiscing tellus velit mauris placerat pellentesque a. Nibh sodales amet faucibus quam nulla mauris.".repeat(
		2
	);
export const conteudoCurto =
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus amet, eget facilisis enim, felis pellentesque. Mus risus, varius in tincidunt varius pretium non egestas. Odio placerat diam fringilla ultricies. Dolor eget hendrerit donec ipsum convallis pretium, neque nisi.Porta placerat id sit quis diam augue. Nibh purus morbi nec tortor. Pharetra phasellus consequat, turpis enim amet, etiam. Aliquam orci mauris quis amet fermentum. At in orci a molestie. Sit vitae, egestas pellentesque a.";

export const apresentacaoItem1 = {
	conteudo: conteudoLongo,
	imageAlt: "mulher sorrindo",
	imageUrl:
		"https://images.pexels.com/photos/5473391/pexels-photo-5473391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	titulo: "Pagina 01",
};
export const apresentacaoItem2 = {
	conteudo: conteudoLongo,
	imageAlt: "mulher sorrindo",
	imageUrl:
		"https://images.pexels.com/photos/13187759/pexels-photo-13187759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	titulo: "Pagina 02",
};
export const apresentacaoItem3 = {
	conteudo: conteudoCurto,
	imageAlt: "mulher sorrindo",
	imageUrl:
		"https://images.pexels.com/photos/5473391/pexels-photo-5473391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	titulo: "Pagina 03",
};

export const conteudosApresentacao = [
	apresentacaoItem1,
	apresentacaoItem2,
	apresentacaoItem3,
];

export const formaIngresso1: IFormaIngresso = {
	link: "https://ingresso.ufba.br/",
	titulo: "Ingresso UFBA",
};
export const formaIngresso2: IFormaIngresso = {
	link: "https://ingresso.ufba.br/vagas-residuais",
	titulo: "Vagas Residuais UFBA",
};
export const formaIngresso3: IFormaIngresso = {
	link: "http://www.ppgac.tea.ufba.br/pt/home/",
	titulo: "PPGAC-UFBA",
};
export const formaIngresso4: IFormaIngresso = {
	link: "https://ingresso.ufba.br/egressos-bi",
	titulo: "Engressos do B.I.",
};

export const conteudo1: IConteudo = {
	conteudo:
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus amet, eget facilisis enim, felis pellentesque. Mus risus, varius in tincidunt varius pretium non egestas. Odio placerat diam fringilla ultricies. Dolor eget hendrerit donec ipsum convallis pretium, neque nisi.Porta placerat id sit quis diam augue. Nibh purus morbi nec tortor. Pharetra phasellus consequat, turpis enim amet, etiam. Aliquam orci mauris quis amet fermentum. At in orci a molestie. Sit vitae, egestas pellentesque a. Mauris scelerisque adipiscing tellus velit mauris placerat pellentesque a. Nibh sodales amet faucibus quam nulla mauris.".repeat(
			2
		),
	titulo: "Pagina 01",
};
export const conteudo2: IConteudo = {
	conteudo:
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus amet, eget facilisis enim, felis pellentesque. Mus risus, varius in tincidunt varius pretium non egestas. Odio placerat diam fringilla ultricies. Dolor eget hendrerit donec ipsum convallis pretium, neque nisi.Porta placerat id sit quis diam augue. Nibh purus morbi nec tortor. Pharetra phasellus consequat, turpis enim amet, etiam. Aliquam orci mauris quis amet fermentum. At in orci a molestie. Sit vitae, egestas pellentesque a. Mauris scelerisque adipiscing tellus velit mauris placerat pellentesque a. Nibh sodales amet faucibus quam nulla mauris.",
	titulo: "Pagina 02",
};

export const conteudo3: IConteudo = {
	conteudo:
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus amet, eget facilisis enim, felis pellentesque. Mus risus, varius in tincidunt varius pretium non egestas. Odio placerat diam fringilla ultricies. Dolor eget hendrerit donec ipsum convallis pretium, neque nisi.Porta placerat id sit quis diam augue. Nibh purus morbi nec tortor. Pharetra phasellus consequat, turpis enim amet, etiam. Aliquam orci mauris quis amet fermentum. At in orci a molestie. Sit vitae, egestas pellentesque a. Mauris scelerisque adipiscing tellus velit mauris placerat pellentesque a. Nibh sodales amet faucibus quam nulla mauris.",
	titulo: "Pagina 03",
};

export const formasIngresso: IFormasIngresso = {
	formas: [formaIngresso1, formaIngresso2, formaIngresso3, formaIngresso4],
};
export const conteudo: IConteudos = {
	conteudos: [conteudo1, conteudo2, conteudo3],
};

export const membro1: IMembro = {
	nome: "Membro do setor",
	email: "email@ufba.br",
	funcao: "administrativo-financeiro",
	telefone: "(71) 99999-9999",
};

export const membro2: IMembro = {
	nome: "Membro de outro setor",
	email: "email@ufba.br",
	funcao: "operacional",
	telefone: "(71) 99999-9999",
};

export const setor1: ISetor = {
	nome: "Administrativo-Financeiro",
	membros: [membro1, membro1, membro1, membro1],
};
export const setor2: ISetor = {
	nome: "Operacional",
	membros: [membro2, membro2, membro2, membro2],
};

export const setores = [setor1, setor2, setor1, setor2];

export const info = {
	endereco: "Av. Araújo Pinho, 292 - Canela, Salvador - BA, 40110-150",
	email: "email@ufba.br",
	telefone: "71 1234-1234",
};

export const funcionario: ICorpoTecnico = {
	nome: "Funcionario",
	funcao: "Administrativo",
	email: "ufba@ufba.com.br",
};

export const corpoTecnico: ICorpoTecnico[] = [
	funcionario,
	funcionario,
	funcionario,
	funcionario,
	funcionario,
	funcionario,
	funcionario,
];

export const docente = {
	imagemAlt: "foto do docente",
	email: "ufba@ufba.com.br",
	imagemUrl:
		"https://images.pexels.com/photos/5473391/pexels-photo-5473391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	interesses: "lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum ",
	link: "https://www.google.com.br",
	nome: "Docente de nome gigantesco",
	uid: "123",
};

export const listaDocentes = [
	docente,
	docente,
	docente,
	docente,
	docente,
	docente,
	docente,
	docente,
	docente,
];

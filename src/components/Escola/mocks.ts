import { randomUUID } from "crypto";

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
	uid: string;
	email: string;
	nome: string;
	funcao: string;
}

interface IMembro {
	uid: string;
	email: string;
	nome: string;
	telefone: string;
	funcao: string;
}

interface ISetor {
	uid: string;
	membros: IMembro[];
	nome: string;
}
interface IFormaIngresso {
	uid: string;
	link: string;
	titulo: string;
}

interface IFormasIngresso {
	formas: IFormaIngresso[];
}

interface IConteudo {
	uid: string;
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
	uid: "1",
	conteudo: conteudoLongo,
	imageAlt: "mulher sorrindo",
	imageUrl:
		"https://images.pexels.com/photos/713149/pexels-photo-713149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	titulo: "Pagina 01",
};
export const apresentacaoItem2 = {
	uid: "2",
	conteudo: conteudoLongo,
	imageAlt: "mulher sorrindo",
	imageUrl:
		"https://images.pexels.com/photos/3689547/pexels-photo-3689547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	titulo: "Pagina 02",
};
export const apresentacaoItem3 = {
	uid: "3",
	conteudo: conteudoCurto,
	imageAlt: "mulher sorrindo",
	imageUrl:
		"https://images.pexels.com/photos/7097457/pexels-photo-7097457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	titulo: "Pagina 03",
};

export const conteudosApresentacao = [
	apresentacaoItem1,
	apresentacaoItem2,
	apresentacaoItem3,
];

export const formaIngresso1: IFormaIngresso = {
	uid: "1",
	link: "https://ingresso.ufba.br/",
	titulo: "Ingresso UFBA",
};
export const formaIngresso2: IFormaIngresso = {
	uid: "2",
	link: "https://ingresso.ufba.br/vagas-residuais",
	titulo: "Vagas Residuais UFBA",
};
export const formaIngresso3: IFormaIngresso = {
	uid: "3",
	link: "http://www.ppgac.tea.ufba.br/pt/home/",
	titulo: "PPGAC-UFBA",
};
export const formaIngresso4: IFormaIngresso = {
	uid: "4",
	link: "https://ingresso.ufba.br/egressos-bi",
	titulo: "Engressos do B.I.",
};

export const conteudo1: IConteudo = {
	uid: "1",
	conteudo:
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus amet, eget facilisis enim, felis pellentesque. Mus risus, varius in tincidunt varius pretium non egestas. Odio placerat diam fringilla ultricies. Dolor eget hendrerit donec ipsum convallis pretium, neque nisi.Porta placerat id sit quis diam augue. Nibh purus morbi nec tortor. Pharetra phasellus consequat, turpis enim amet, etiam. Aliquam orci mauris quis amet fermentum. At in orci a molestie. Sit vitae, egestas pellentesque a. Mauris scelerisque adipiscing tellus velit mauris placerat pellentesque a. Nibh sodales amet faucibus quam nulla mauris.".repeat(
			2
		),
	titulo: "Pagina 01",
};
export const conteudo2: IConteudo = {
	uid: "2",
	conteudo:
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus amet, eget facilisis enim, felis pellentesque. Mus risus, varius in tincidunt varius pretium non egestas. Odio placerat diam fringilla ultricies. Dolor eget hendrerit donec ipsum convallis pretium, neque nisi.Porta placerat id sit quis diam augue. Nibh purus morbi nec tortor. Pharetra phasellus consequat, turpis enim amet, etiam. Aliquam orci mauris quis amet fermentum. At in orci a molestie. Sit vitae, egestas pellentesque a. Mauris scelerisque adipiscing tellus velit mauris placerat pellentesque a. Nibh sodales amet faucibus quam nulla mauris.",
	titulo: "Pagina 02",
};

export const conteudo3: IConteudo = {
	uid: "3",
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
	uid: "1",
	nome: "Membro do setor",
	email: "email@ufba.br",
	funcao: "administrativo-financeiro",
	telefone: "(71) 99999-9999",
};

export const membro2: IMembro = {
	uid: "2",
	nome: "Membro de outro setor",
	email: "email@ufba.br",
	funcao: "operacional",
	telefone: "(71) 99999-9999",
};
export const membro3: IMembro = {
	uid: "3",
	nome: "Membro de outro setor",
	email: "email@ufba.br",
	funcao: "operacional",
	telefone: "(71) 99999-9999",
};
export const membro4: IMembro = {
	uid: "4",
	nome: "Membro de outro setor",
	email: "email@ufba.br",
	funcao: "operacional",
	telefone: "(71) 99999-9999",
};
export const membro5: IMembro = {
	uid: "5",
	nome: "Membro de outro setor",
	email: "email@ufba.br",
	funcao: "operacional",
	telefone: "(71) 99999-9999",
};
export const membro6: IMembro = {
	uid: "6",
	nome: "Membro de outro setor",
	email: "email@ufba.br",
	funcao: "operacional",
	telefone: "(71) 99999-9999",
};
export const membro7: IMembro = {
	uid: "7",
	nome: "Membro de outro setor",
	email: "email@ufba.br",
	funcao: "operacional",
	telefone: "(71) 99999-9999",
};
export const membro8: IMembro = {
	uid: "8",
	nome: "Membro de outro setor",
	email: "email@ufba.br",
	funcao: "operacional",
	telefone: "(71) 99999-9999",
};

export const setor1: ISetor = {
	uid: "11",
	nome: "Administrativo-Financeiro",
	membros: [membro1, membro2, membro3, membro4],
};
export const setor2: ISetor = {
	uid: "22",
	nome: "Operacional",
	membros: [membro5, membro6, membro7, membro8],
};

export const setores = [setor1, setor2];

export const info = {
	endereco: "Av. Araújo Pinho, 292 - Canela, Salvador - BA, 40110-150",
	email: "email@ufba.br",
	telefone: "71 1234-1234",
};

export const funcionario1: ICorpoTecnico = {
	uid: "1",
	nome: "Funcionario",
	funcao: "Administrativo",
	email: "ufba@ufba.com.br",
};
export const funcionario2: ICorpoTecnico = {
	uid: "2",
	nome: "Funcionario",
	funcao: "Administrativo",
	email: "ufba@ufba.com.br",
};
export const funcionario3: ICorpoTecnico = {
	uid: "3",
	nome: "Funcionario",
	funcao: "Administrativo",
	email: "ufba@ufba.com.br",
};
export const funcionario4: ICorpoTecnico = {
	uid: "4",
	nome: "Funcionario",
	funcao: "Administrativo",
	email: "ufba@ufba.com.br",
};
export const funcionario5: ICorpoTecnico = {
	uid: "5",
	nome: "Funcionario",
	funcao: "Administrativo",
	email: "ufba@ufba.com.br",
};
export const funcionario6: ICorpoTecnico = {
	uid: "6",
	nome: "Funcionario",
	funcao: "Administrativo",
	email: "ufba@ufba.com.br",
};
export const funcionario7: ICorpoTecnico = {
	uid: "7",
	nome: "Funcionario",
	funcao: "Administrativo",
	email: "ufba@ufba.com.br",
};

export const corpoTecnico: ICorpoTecnico[] = [
	funcionario1,
	funcionario2,
	funcionario3,
	funcionario4,
	funcionario5,
	funcionario6,
	funcionario7,
];

export const docente1 = {
	imagemAlt: "foto do docente",
	email: "ufba@ufba.com.br",
	imagemUrl:
		"https://images.pexels.com/photos/5473391/pexels-photo-5473391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	interesses: "lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum ",
	link: "https://www.google.com.br",
	nome: "Docente de nome gigantesco",
	uid: "1",
};
export const docente2 = {
	imagemAlt: "foto do docente",
	email: "ufba@ufba.com.br",
	imagemUrl:
		"https://images.pexels.com/photos/5473391/pexels-photo-5473391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	interesses: "lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum ",
	link: "https://www.google.com.br",
	nome: "Docente de nome gigantesco",
	uid: "2",
};
export const docente3 = {
	imagemAlt: "foto do docente",
	email: "ufba@ufba.com.br",
	imagemUrl:
		"https://images.pexels.com/photos/5473391/pexels-photo-5473391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	interesses: "lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum ",
	link: "https://www.google.com.br",
	nome: "Docente de nome gigantesco",
	uid: "3",
};
export const docente4 = {
	imagemAlt: "foto do docente",
	email: "ufba@ufba.com.br",
	imagemUrl:
		"https://images.pexels.com/photos/5473391/pexels-photo-5473391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	interesses: "lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum ",
	link: "https://www.google.com.br",
	nome: "Docente de nome gigantesco",
	uid: "4",
};
export const docente5 = {
	imagemAlt: "foto do docente",
	email: "ufba@ufba.com.br",
	imagemUrl:
		"https://images.pexels.com/photos/5473391/pexels-photo-5473391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	interesses: "lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum ",
	link: "https://www.google.com.br",
	nome: "Docente de nome gigantesco",
	uid: "5",
};
export const docente6 = {
	imagemAlt: "foto do docente",
	email: "ufba@ufba.com.br",
	imagemUrl:
		"https://images.pexels.com/photos/5473391/pexels-photo-5473391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	interesses: "lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum ",
	link: "https://www.google.com.br",
	nome: "Docente de nome gigantesco",
	uid: "6",
};
export const docente7 = {
	imagemAlt: "foto do docente",
	email: "ufba@ufba.com.br",
	imagemUrl:
		"https://images.pexels.com/photos/5473391/pexels-photo-5473391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	interesses: "lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum ",
	link: "https://www.google.com.br",
	nome: "Docente de nome gigantesco",
	uid: "7",
};
export const docente8 = {
	imagemAlt: "foto do docente",
	email: "ufba@ufba.com.br",
	imagemUrl:
		"https://images.pexels.com/photos/5473391/pexels-photo-5473391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	interesses: "lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum ",
	link: "https://www.google.com.br",
	nome: "Docente de nome gigantesco",
	uid: "8",
};
export const docente9 = {
	imagemAlt: "foto do docente",
	email: "ufba@ufba.com.br",
	imagemUrl:
		"https://images.pexels.com/photos/5473391/pexels-photo-5473391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	interesses: "lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum ",
	link: "https://www.google.com.br",
	nome: "Docente de nome gigantesco",
	uid: "9",
};
export const docente10 = {
	imagemAlt: "foto do docente",
	email: "ufba@ufba.com.br",
	imagemUrl:
		"https://images.pexels.com/photos/5473391/pexels-photo-5473391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	interesses: "lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum ",
	link: "https://www.google.com.br",
	nome: "Docente de nome gigantesco",
	uid: "10",
};
export const docente11 = {
	imagemAlt: "foto do docente",
	email: "ufba@ufba.com.br",
	imagemUrl:
		"https://images.pexels.com/photos/5473391/pexels-photo-5473391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	interesses: "lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum ",
	link: "https://www.google.com.br",
	nome: "Docente de nome gigantesco",
	uid: "11",
};

export const listaDocentes = [
	docente1,
	docente2,
	docente3,
	docente4,
	docente5,
	docente6,
	docente7,
	docente8,
	docente9,
	docente10,
	docente11,
];

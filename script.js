function copyPrompt(id) {
  const text = document.getElementById(id).innerText;
  navigator.clipboard.writeText(text).then(() => {
    alert("Prompt copiado!🚀");
  });
}

const iaData = {
  chatgpt: {
    title: "ChatGPT",
    description: "IA generativa focada em conversação, criação de textos, planejamento de aulas, atividades, avaliações e apoio à prática pedagógica.",
    link: "https://chat.openai.com"
  },
  gemini: {
    title: "Gemini",
    description: "IA do Google integrada ao ecossistema Workspace, ideal para planejamento, análise de documentos, criação de atividades e uso com Gems personalizados.",
    link: "https://gemini.google.com"
  },
  copilot: {
    title: "Copilot",
    description: "IA da Microsoft integrada ao Office, útil para apoio em documentos, apresentações, planilhas e organização do trabalho docente.",
    link: "https://copilot.microsoft.com"
  },
  perplexity: {
    title: "Perplexity",
    description: "IA focada em pesquisa, com respostas baseadas em fontes, ideal para investigação, levantamento de dados e aprofundamento teórico.",
    link: "https://www.perplexity.ai"
  },
  notebooklm: {
    title: "Notebook LM",
    description: "Ferramenta do Google para estudar documentos, PDFs e textos longos, permitindo resumos, perguntas e organização de ideias.",
    link: "https://notebooklm.google.com"
  },
  manus: {
    title: "Manus",
    description: "IA experimental focada em automação e execução de tarefas mais complexas, integrando múltiplas etapas em um único fluxo.",
    link: "https://manus.im/"
  },

  teachy: {
  title: "Teachy",
  description: "Plataforma de IA voltada para professores, com geração de planos de aula, atividades, avaliações e materiais didáticos.",
  link: "https://www.teachy.com.br"
  },
curipod: {
  title: "Curipod",
  description: "Ferramenta para criação de aulas interativas, com perguntas, enquetes e atividades em tempo real para engajar os estudantes.",
  link: "https://curipod.com"
  },
fliki: {
  title: "Fliki",
  description: "IA para transformar textos em vídeos e áudios, excelente para criar materiais multimodais e acessíveis.",
  link: "https://fliki.ai"
  }

};

const modal = document.getElementById("ia-modal");
const title = document.getElementById("modal-title");
const description = document.getElementById("modal-description");
const link = document.getElementById("modal-link");

document.querySelectorAll(".ia-buttons button").forEach(btn => {
  btn.addEventListener("click", () => {
    const ia = iaData[btn.dataset.ia];
    title.textContent = ia.title;
    description.textContent = ia.description;
    link.href = ia.link;
    modal.style.display = "flex";
  });
});

document.querySelector(".close").onclick = () => {
  modal.style.display = "none";
};

window.onclick = e => {
  if (e.target === modal) modal.style.display = "none";
};

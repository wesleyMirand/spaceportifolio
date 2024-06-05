import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Projetos recentes
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
                   src="/tela1.png"
          title="PerfilVip"
          description="Desenvolvimento de site para marketing, focado em aumentar engajamento em redes sociais."
        />
        <ProjectCard
  src="/tela2.png"
  title="Centro De Pesquisa USP"
  description="Criação do site inovador para centro de pesquisa da USP. "
        />
        <ProjectCard
          src="/tela3.png"
          title="Meu Portifolio"
          description="Você está aqui desfrutando das tecnologias mais recentes do mercado."
        />
      </div>
    </div>
  );
};

export default Projects;
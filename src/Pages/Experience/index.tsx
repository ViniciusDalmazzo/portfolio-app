import { useState } from 'react';
import { CompanyName, Container, ContainerMenus, ContentInfos, Contents, ContentTitle, Menu } from './styles';

function Experience() {
  const companys = [
    {
      id: 1,
      companyName: 'Neobpo',
      role: 'Desenvolvedor Full Stack',
      timeExperience: 'Setembro 2020 - Atual',
      jobDescription: 'Desenvolvimento de projetos utilizando micro serviço, DDD e Angular. Tecnologias utilizadas: .NET Core, Entity Framework Core, RabbitMQ, SQL Server, Angular, Electron, Typescript, Docker.'
    },
    {
      id: 2,
      companyName: 'New School',
      role: 'Desenvolvedor Front End',
      timeExperience: 'Dezembro 2019 - Março 2020',
      jobDescription: 'Participação voluntária no desenvolvimento de um aplicativo para web e mobile que tem o intuito de disponibilizar para pessoas de baixa renda cursos gratuitos sobre assuntos geralmente não abordados no ensino escolar comum. Tecnologias utilizadas: Vue.JS, Nuxt e Vuetify.'
    },
    {
      id: 3,
      companyName: 'Uppertools',
      role: 'Desenvolvedor Full Stack',
      timeExperience: 'Outubro 2017 - Setembro 2020',
      jobDescription: 'Desenvolver ou dar manutenção em projetos utilizando paradigmas do mundo da programação, tais como: API, WEB API, Windows Service, WEB Service, Páginas Web, Projetos de biblioteca para integração com Add-Ons. Tecnologias utilizadas: C#, SQL, HTML, CSS, JSON, XML, Javascript, SAP UI5, HANA, Service Layer. Sistema de Controle de Versionamento de Projetos: Git/GitLab e SVN. Desenvolvimento de aplicativos utilizando React Native em TypeScript.'
    },
  ];

  const [companySelected, setCompanySelected] = useState(companys[0]);

  function selectCompany(companyId: number) {
    const newCompany = companys.find(x => x.id === companyId);
    setCompanySelected(newCompany ?? companys[0]);
  }

  return (
    <Container id="exp">
      <h2>Experiência</h2>
      <Contents>
        <ContainerMenus>
          {companys.map((company) => (
            <Menu onClick={() => selectCompany(company.id)} selected={company.id === companySelected.id}>{company.companyName}</Menu>
          ))}
        </ContainerMenus>
        <ContentInfos>
          <ContentTitle>
            <span>{companySelected.role}</span>
            <span>{companySelected.timeExperience}</span>
          </ContentTitle>
          <CompanyName>{companySelected.companyName}</CompanyName>
          <p>{companySelected.jobDescription}</p>
        </ContentInfos>
      </Contents>
    </Container>
  );
};

export default Experience;

/* eslint-disable typescript-sort-keys/interface */
/* eslint-disable sonarjs/no-use-of-empty-return-value */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from "react";
import styled from "styled-components";

import { ArrowIcon } from "./icons";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #f7f6f5;
  border: 2px solid #e6e6ef;

  .header {
    padding: 1rem;
    display: flex;
    width: 100%;
    justify-content: space-between;
    cursor: pointer;
    align-items: center;

    h3 {
      font-family: "Merriweather";
      font-style: normal;
      font-weight: 700;
      font-size: 1.2rem;
      line-height: 120%;
      color: #2d2b78;
      text-align: left;
    }
  }

  .content {
    padding: 1.5rem;
    padding-top: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .contact p {
      font-size: 1rem;
    }

    div {
      display: flex;
      flex-direction: column;
      gap: 0.625rem;
      text-align: left;

      p {
        font-family: "Arial";
        font-style: normal;
        font-weight: 400;
        font-size: 0.9rem;
        line-height: 120%;
        color: #2b2b2b;
      }

      h3 {
        font-family: "Merriweather";
        font-style: normal;
        font-weight: 700;
        font-size: 1rem;
        line-height: 120%;
        color: #9a1a4b;
      }
    }
  }

  .disable {
    display: none;
  }
`;

type AccordionProps = {
  name: string;
  desc: string;
  leader: string;
  email: string;
  telephone: string;
  website: string;
};

function GrupoPesquisa(props: AccordionProps) {
  const { name, desc, leader, email, telephone, website } = props;
  const [Open, setOpen] = useState(false);

  return (
    <Container>
      <div
        className="header"
        onClick={() => (Open ? setOpen(false) : setOpen(true))}
      >
        <h3>{name}</h3>
        <ArrowIcon open={Open} />
      </div>
      <div className={Open ? "content" : "disable"}>
        {desc ? (
          <div className="desc">
            <h3>Descrição</h3>
            <p>{desc}</p>
          </div>
        ) : (
          ""
        )}
        {leader || email || telephone || website ? (
          <div className="contact">
            <h3>Contatos</h3>
            {leader ? <p>Líder: {leader}</p> : ""}
            {email ? <p>E-mail: {email}</p> : ""}
            {telephone ? <p>Telefone: {telephone}</p> : ""}
            {website ? <p>Website: {website}</p> : ""}
          </div>
        ) : (
          ""
        )}
      </div>
    </Container>
  );
}

export default GrupoPesquisa;

import styled from "@emotion/styled";
import React from "react";
import { mq } from "./responsive";
import { Button } from "./Button";
import { navigateNewPage } from "./navigateMock";
import { Body2, H2 } from "./TextComponents";

interface ISolutionCardProps {
  card: any;
}

const Card = styled("div")`
  gap: 24px;
  max-width: 362px;
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
`;

const Thumbnail = styled("img")`
  width: 343px;
  max-width: 100%;

  ${mq.medium} {
    width: 362px;
  }
`;

const Content = styled("div")`
  gap: 16px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const CTA = styled(Button)`
  width: 100%;

  ${mq.medium} {
    width: 152px;
  }
`;

const SolutionCard: React.FC<ISolutionCardProps> = ({ card }) => {
  return (
    <Card>
      <Thumbnail src={card.thumbnail} />
      <Content>
        <H2>{card.title}</H2>
        <Body2>{card.description}</Body2>
        {/* <CTA
          size="medium"
          onClick={() => navigateNewPage(card.cta)}
          label="Learn more"
        /> */}
      </Content>
    </Card>
  );
};

export default SolutionCard;

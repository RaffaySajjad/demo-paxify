import styled from "@emotion/styled";
import React from "react";
import "swiper/swiper-bundle.css";
import { Title } from "./TextComponents";
import { mq } from "./responsive";
import SolutionCard from "./Solution";

interface ISolutionGridProps {
  data: any;
}

const Container = styled("div")`
  display: flex;
  text-align: center;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1300px;
`;

const Grid = styled("div")`
  gap: 40px;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;

  ${mq.medium} {
    display: grid;
    grid-gap: 64px;
    align-items: flex-start;
    grid-template-rows: repeat(auto-fill, minmax(100px, 1fr));
    grid-template-columns: repeat(2, 1fr);
    grid-template-columns: repeat(auto-fill, minmax(40%, 1fr));
  }
`;

const Card = styled("div")`
  ${mq.medium} {
    &:nth-child(odd):last-child {
      grid-column: span 2;
    }
  }
`;

const Heading = styled(Title)`
  margin: 64px 0 40px;

  ${mq.medium} {
    margin: 80px 0 64px;
  }
`;

const CardGrid: React.FC<ISolutionGridProps> = ({ data }) => {
  return (
    <Container id={data.id}>
      <Heading>{data.title}</Heading>
      <Grid>
        {data?.cards?.map((card: any) => {
          return (
            <Card key={card.title}>
              <SolutionCard card={card} />
            </Card>
          );
        })}
      </Grid>
    </Container>
  );
};

export default CardGrid;

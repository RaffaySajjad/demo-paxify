import styled from "@emotion/styled";
import { mq } from "./responsive";
import { H3, Title } from "./TextComponents";
import { nativeColors } from "./colors";
import { navigateSSr } from "./navigateMock";
import { Button } from "./Button";

const Container = styled("div")`
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
  justify-content: flex-start;
  align-items: start;
  justify-content: center;
  background: linear-gradient(180.5deg, #fdfdfd -15.8%, #eeeeee 77.7%);
  padding: 0;
  ${mq.medium} {
    padding-top: 156px;
    align-items: center;
  }
`;

const Content = styled("div")`
  gap: 24px;
  position: relative;
  display: flex;
  flex-direction: column;
  color: #ffffff;
  text-align: center;
  align-items: stretch;
  justify-content: center;
  padding: 0 16px;
  padding-top: 38px;
  ${mq.medium} {
    gap: 32px;
    z-index: 3;
    padding-top: 0;

    max-width: 1380px;
    align-items: center;
  }
`;

const Heading = styled(Title)`
  font-size: 27px;
  line-height: 35.61px;

  ${mq.medium} {
    font-size: 47px;
    line-height: 61.99px;
  }
`;

const Body = styled(H3)`
  color: ${nativeColors.neutral10};

  ${mq.medium} {
    margin: unset;
  }
`;

const Buttons = styled("div")`
  gap: 16px;
  display: flex;
  flex-direction: column;

  ${mq.medium} {
    flex-direction: row;
  }
`;

const BannerImage = styled("img")<{
  image?: any;
}>`
  z-index: 2;
  max-width: 100%;
  bottom: ${(props) => props?.image?.bottom || "0"};

  ${mq.medium} {
    width: 100%;
    max-width: ${(props) => props?.image?.maxWidth || "100%"};
    max-height: ${(props) => props?.image?.maxHeight};
  }
`;

const Desktop = styled("div")`
  display: none;

  ${mq.medium} {
    gap: 48px;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

const Mobile = styled("div")`
  gap: 48px;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  padding-top: 80px;

  ${mq.medium} {
    display: none;
  }
`;

const HeroBanner = ({ image, heading, body, buttons = [] }) => {
  const _renderBodyContent = (activeDevice) => {
    return (
      <>
        <Content>
          <Heading>{heading}</Heading>
          <Body>{body}</Body>
          <Buttons>
            {buttons?.map((button) => (
              <Button
                key={button.text}
                primary={button.type === "primary"}
                label={button.text}
              />
            ))}
          </Buttons>
        </Content>
        <BannerImage
          image={image[activeDevice]}
          src={image[activeDevice]?.src}
        />
      </>
    );
  };

  return (
    <Container id="home">
      <Desktop>{_renderBodyContent("desktop")}</Desktop>
      <Mobile>{_renderBodyContent("mobile")}</Mobile>
    </Container>
  );
};

export default HeroBanner;

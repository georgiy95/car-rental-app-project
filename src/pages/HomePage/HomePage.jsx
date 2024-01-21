import {
  Background,
  ButtonLink,
  ContentWrap,
  Section,
  SubTitle,
  Title,
} from "./HomePage-styled";

export const HomePage = () => {
  return (
    <>
      <Background>
        <Section>
          <ContentWrap>
            <Title>
            Let's go look for a car!
            </Title>
            <ButtonLink to="/catalog">Get started</ButtonLink>
          </ContentWrap>
        </Section>
      </Background>
    </>
  );
};

import { MainPageWrapper, MainPageContainer } from "./styles";
import { Header } from "./Header";
import { MainSection } from "./MainSection";

export function MainPage() {
  return (
    <MainPageWrapper>
      <MainPageContainer>
        <Header />
        <MainSection />
      </MainPageContainer>
    </MainPageWrapper>
  );
}

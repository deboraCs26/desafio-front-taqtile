import { CarouselComponentization } from './components/carousel';
import { ProductorCard } from './components/product-card';
import { Heading1 } from './components/typography/h1/style';
import { Header } from './components/header';

export function App() {
  return (
    <div>
      <Header />
      <Heading1>Carrossel</Heading1>
      <CarouselComponentization>
        <ProductorCard
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed"
          description="Lorem ipsum dolor sit amet, consectetur"
          price={99.9}
          installment_quantity={12}
          installment_value={9.9}
        />

        <ProductorCard
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed"
          description="Lorem ipsum dolor sit amet, consectetur"
          price={99.9}
          installment_quantity={12}
          installment_value={9.9}
        />

        <ProductorCard
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed"
          description="Lorem ipsum dolor sit amet, consectetur"
          price={99.9}
          installment_quantity={12}
          installment_value={9.9}
        />

        <ProductorCard
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed"
          description="Lorem ipsum dolor sit amet, consectetur"
          price={99.9}
          installment_quantity={12}
          installment_value={9.9}
        />
      </CarouselComponentization>
    </div>
  );
}

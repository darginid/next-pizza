import { Container, Title, TopBar, Filters, ProductsGroupList } from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          <div className="w-[250px]">
            <Filters />
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList 
                categoryId={1}
                title="Пиццы" 
                items={[
                  {
                    id: 1,  
                    name: 'Чизбургер пицца',
                    imageUrl: 'hello',
                    price: 550,
                    items: [{ price: 500 }],
                  },
                  {
                    id: 2,  
                    name: 'Чизбургер пицца',
                    imageUrl: 'hello',
                    price: 550,
                    items: [{ price: 500 }],
                  },
                  {
                    id: 3,  
                    name: 'Чизбургер пицца',
                    imageUrl: 'hello',
                    price: 550,
                    items: [{ price: 500 }],
                  },
                  {
                    id: 4,  
                    name: 'Чизбургер пицца',
                    imageUrl: 'hello',
                    price: 550,
                    items: [{ price: 500 }],
                  },
                  {
                    id: 5,  
                    name: 'Чизбургер пицца',
                    imageUrl: 'hello',
                    price: 550,
                    items: [{ price: 500 }],
                  },
                  {
                    id: 6,  
                    name: 'Чизбургер пицца',
                    imageUrl: 'hello',
                    price: 550,
                    items: [{ price: 500 }],
                  },
                ]} 
               />
              <ProductsGroupList 
                categoryId={2}
                title="Комбо" 
                items={[
                  {
                    id: 1,  
                    name: 'Чизбургер пицца',
                    imageUrl: 'hello',
                    price: 550,
                    items: [{ price: 500 }],
                  },
                  {
                    id: 2,  
                    name: 'Чизбургер пицца',
                    imageUrl: 'hello',
                    price: 550,
                    items: [{ price: 500 }],
                  },
                  {
                    id: 3,  
                    name: 'Чизбургер пицца',
                    imageUrl: 'hello',
                    price: 550,
                    items: [{ price: 500 }],
                  },
                  {
                    id: 4,  
                    name: 'Чизбургер пицца',
                    imageUrl: 'hello',
                    price: 550,
                    items: [{ price: 500 }],
                  },
                  {
                    id: 5,  
                    name: 'Чизбургер пицца',
                    imageUrl: 'hello',
                    price: 550,
                    items: [{ price: 500 }],
                  },
                  {
                    id: 6,  
                    name: 'Чизбургер пицца',
                    imageUrl: 'hello',
                    price: 550,
                    items: [{ price: 500 }],
                  },
                ]} 
               />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

// price: valor numérico em reais. null = preço definido na montagem do pedido.
// priceFrom: true quando o valor é o mínimo ("a partir de").
export const menuCategories = [
  {
    id: "destaques",
    label: "Destaques",
    items: [
      {
        name: "Combo Família 1.0",
        description:
          "Aqui você pode escolher qualquer lanches dos nossos 1.0, fique à vontade e bom apetite! 4 Smash Burgers 1.0 + Coca-Cola 2L GRÁTIS.",
        price: 96,
        priceFrom: true,
        image: "/images/menu/combo-familia-1-0.jpg",
        badge: "GRÁTIS COCA 2L",
      },
      {
        name: "Combo Família 2.0",
        description:
          "Aqui você pode escolher qualquer lanches dos nossos 2.0, fique à vontade e bom apetite! Combos 4 Lanches 2.0 + Coca-Cola GRÁTIS.",
        price: 132,
        priceFrom: true,
        image: "/images/menu/combo-familia-2-0.jpg",
        badge: "GRÁTIS COCA 2L",
      },
    ],
  },
  {
    id: "combos",
    label: "Combos",
    items: [
      {
        name: "Combo Casal 2.0 com Desconto",
        description:
          "Todos os pedidos aqui acompanham: 2 fritas, 2 refrigerantes 350ml e 2 lanches 2.0, todos com desconto.",
        price: 91,
        priceFrom: true,
        image: "/images/menu/combo-casal-2-0-com-desconto.jpg",
      },
      {
        name: "Monte seu Combo 1.0 (1 Carne)",
        description:
          "Escolha qualquer Smash de 1 carne + batata + refrigerante 350ml. Diga o lanche no WhatsApp.",
        price: 39,
        priceFrom: true,
        image: "/images/menu/monte-seu-combo-1-0-1-carne.jpg",
      },
      {
        name: "Monte seu Combo 2.0 (2 Carnes)",
        description:
          "Escolha qualquer Smash de 2 carnes + batata + refrigerante 350ml. Diga o lanche no WhatsApp.",
        price: 49,
        priceFrom: true,
        image: "/images/menu/monte-seu-combo-2-0-2-carnes.jpg",
      },
      {
        name: "Combo Smash Cheese Egg",
        description: "1 Smash 100 gramas, queijo cheddar derretido, ovo, nossa maionese no pão brioche.",
        price: 39,
        image: "/images/menu/combo-smash-cheese-egg.jpg",
      },
      {
        name: "Combo Smash Salad",
        description:
          "1 Smash 100 gramas, queijo cheddar derretido, cebola roxa, alface, tomate e nossa maionese no pão brioche.",
        price: 40,
        image: "/images/menu/combo-smash-salad.jpg",
      },
      {
        name: "Combo Smash Bacon",
        description: "1 Smash 100 gramas, queijo cheddar derretido, muito bacon crocante, nossa maionese no pão brioche.",
        price: 41,
        image: "/images/menu/combo-smash-bacon.jpg",
      },
      {
        name: "Combo Smash Crispy",
        description:
          "1 Smash 100 gramas, queijo cheddar derretido, cebola crispy, catupiry original e nossa maionese no pão brioche.",
        price: 42,
        image: "/images/menu/combo-smash-crispy.jpg",
      },
      {
        name: "Combo Smash Onion",
        description:
          "1 Smash 100 gramas, queijo cheddar derretido, bacon crocante, cebola onion, catupiry original e nossa maionese no pão brioche.",
        price: 43,
        image: "/images/menu/combo-smash-onion.jpg",
      },
      {
        name: "Combo Smash Catupiry",
        description:
          "1 Smash 100 gramas, queijo cheddar derretido, muito catupiry original, bacon crocante e nossa maionese no pão brioche.",
        price: 45,
        image: "/images/menu/combo-smash-catupiry.jpg",
      },
    ],
  },
  {
    id: "lanches-smash",
    label: "Lanches Smash",
    items: [
      {
        name: "Smash Picles - Quarterão",
        description: "Smash Burger de 100gr, queijo cheddar, picles, cebola, ketchup, mostarda, no pão selado de brioche.",
        price: 26.9,
        image: "/images/menu/smash-picles-quarterao.jpg",
      },
      {
        name: "Smash BBQ",
        description: "Smash 100g, queijo cheddar derretido, bacon crocante, onion rings, barbecue Heinz no pão brioche.",
        price: 28.9,
        image: "/images/menu/smash-bbq-com-molho-de-churrasco-heinz.jpg",
        badge: "NOVIDADE",
      },
      {
        name: "Smash Cheese Egg",
        description: "1 Smash 100 gramas, queijo cheddar derretido, ovo, nossa maionese no pão brioche.",
        price: 24,
        image: "/images/menu/smash-cheese-egg.jpg",
      },
      {
        name: "Smash Salad",
        description:
          "1 Smash 100 gramas, queijo cheddar derretido, cebola roxa, alface, tomate e nossa maionese no pão brioche.",
        price: 26.9,
        image: "/images/menu/smash-salad.jpg",
      },
      {
        name: "Smash Bacon",
        description: "1 Smash 100 gramas, queijo cheddar derretido, muito bacon crocante, nossa maionese no pão brioche.",
        price: 27.9,
        image: "/images/menu/smash-bacon.jpg",
      },
      {
        name: "Smash Crispy",
        description:
          "1 Smash 100 gramas, queijo cheddar derretido, cebola crispy, catupiry original e nossa maionese no pão brioche.",
        price: 28.9,
        image: "/images/menu/smash-crispy.jpg",
      },
      {
        name: "Smash Onion",
        description:
          "1 Smash 100 gramas, queijo cheddar derretido, bacon crocante, cebola onion, catupiry original e nossa maionese no pão brioche.",
        price: 29.9,
        image: "/images/menu/smash-onion.jpg",
      },
      {
        name: "Smash Catupiry",
        description:
          "1 Smash 100 gramas, queijo cheddar derretido, muito catupiry original, bacon crocante e nossa maionese no pão brioche.",
        price: 31.9,
        image: "/images/menu/smash-catupiry.jpg",
      },
    ],
  },
  {
    id: "lanches-smash-2",
    label: "Lanches Smash 2.0",
    items: [
      {
        name: "Smash BBQ 2.0",
        description: "2 Smash 100gr, queijo cheddar derretido, bacon crocante, onion rings, barbecue Heinz no pão brioche.",
        price: 36.9,
        image: "/images/menu/smash-bbq-2-0-com-molho-de-churrasco-heinz.jpg",
        badge: "NOVIDADE",
      },
      {
        name: "Smash Salad 2.0",
        description:
          "2 Smash 100 gramas, queijo cheddar derretido, cebola roxa, alface, tomate e nossa maionese no pão brioche.",
        price: 35.9,
        image: "/images/menu/smash-salad-2-0.jpg",
      },
      {
        name: "Smash Bacon 2.0",
        description: "2 Smash 100 gramas, queijo cheddar derretido, muito bacon crocante, nossa maionese no pão brioche.",
        price: 37.9,
        image: "/images/menu/smash-bacon-2-0.jpg",
      },
      {
        name: "Smash Picles - Quarterão 2.0",
        description: "2 Smash Burger de 100gr, queijo cheddar, picles, cebola, ketchup, mostarda, no pão selado de brioche.",
        price: 36.9,
        image: "/images/menu/smash-picles-quarterao-2-0.jpg",
      },
      {
        name: "Smash Cheese Egg 2.0",
        description: "2 Smash 100 gramas, queijo cheddar derretido, ovo, nossa maionese no pão brioche.",
        price: 34,
        image: "/images/menu/smash-cheese-egg-2-0.jpg",
      },
      {
        name: "Smash Crispy 2.0",
        description:
          "2 Smash 100 gramas, queijo cheddar derretido, cebola crispy, catupiry original e nossa maionese no pão brioche.",
        price: 38.9,
        image: "/images/menu/smash-crispy-2-0.jpg",
      },
      {
        name: "Smash Onion 2.0",
        description:
          "2 Smash 100 gramas, queijo cheddar derretido, bacon crocante, cebola onion, catupiry no pão brioche.",
        price: 39.9,
        image: "/images/menu/smash-onion-2-0.jpg",
      },
      {
        name: "Smash Catupiry 2.0",
        description:
          "2 Smash 100 gramas, queijo cheddar derretido, muito catupiry original, bacon crocante e nossa maionese no pão brioche.",
        price: 43,
        image: "/images/menu/smash-catupiry-2-0.jpg",
      },
    ],
  },
  {
    id: "porcoes",
    label: "Porções",
    items: [
      {
        name: "Batata Individual",
        description:
          "Batata McCain individual, aproximadamente 150g, douradas e super crocantes, no ponto certo para garantir muito sabor.",
        price: 10.9,
        image: "/images/menu/batata-individual.jpg",
      },
      {
        name: "Batata Grande",
        description: "Batata McCain grande, aproximadamente 550g, douradas e super crocantes, perfeita para compartilhar.",
        price: 29.9,
        image: "/images/menu/batata-grande.jpg",
      },
      {
        name: "Batata c/ Catupiry e Bacon",
        description: "Aproximadamente 700g de batatas McCain cobertas com catupiry cremoso e finalizadas com bacon crocante.",
        price: 43.9,
        image: "/images/menu/batata-c-catupiry-e-bacon.jpg",
      },
      {
        name: "Batata c/ Cheddar e Bacon",
        description: "Aproximadamente 700g de batatas McCain cobertas com cheddar cremoso e finalizadas com bacon crocante.",
        price: 43.9,
        image: "/images/menu/batata-c-cheddar-e-bacon.jpg",
      },
    ],
  },
  {
    id: "bebidas",
    label: "Bebidas",
    items: [
      { name: "Coca-Cola Lata", description: "350ml, gelada.", price: 8, image: "/images/menu/coca-cola-lata.png" },
      { name: "Coca-Cola Zero Lata", description: "350ml, gelada.", price: 8, image: "/images/menu/coca-cola-zero-lata.png" },
      { name: "Fanta Laranja Lata", description: "350ml, gelada.", price: 8, image: "/images/menu/fanta-laranja-lata.png" },
      { name: "Fanta Uva Lata", description: "350ml, gelada.", price: 8, image: "/images/menu/fanta-uva-lata.jpg" },
      { name: "Guaraná Lata", description: "350ml, gelada.", price: 8, image: "/images/menu/guarana-lata.png" },
      { name: "Coca-Cola 2L", description: "Garrafa 2 litros.", price: 18, image: "/images/menu/coca-cola-2l.png" },
      { name: "Coca-Cola Zero 2L", description: "Garrafa 2 litros.", price: 18, image: "/images/menu/coca-cola-zero-2l.png" },
      { name: "Fanta Laranja 2L", description: "Garrafa 2 litros.", price: 17, image: "/images/menu/fanta-laranja-2l.jpg" },
      { name: "Fanta Uva 2L", description: "Garrafa 2 litros.", price: 17, image: "/images/menu/fanta-uva-2l.png" },
      { name: "Guaraná 2L", description: "Garrafa 2 litros.", price: 17, image: "/images/menu/guarana-2l.png" },
      { name: "Red Bull", description: "Energético.", price: 14.9, image: "/images/menu/red-bull.jpg" },
      { name: "Energético Monster", description: "Energético.", price: 14.9, image: "/images/menu/energetico-monster.jpg" },
      { name: "Suco de Uva Del Valle", description: "Suco pronto para beber.", price: 8, image: "/images/menu/suco-de-uva-del-valle.jpeg" },
      { name: "Suco de Goiaba Del Valle", description: "Suco pronto para beber.", price: 8, image: "/images/menu/suco-de-goiaba-del-valle.jpeg" },
    ],
  },
  {
    id: "sobremesas",
    label: "Sobremesas",
    items: [
      {
        name: "Chocolate Ao Leite Kit Kat",
        description: "Kit Kat ao leite 41,5g, um dos chocolates mais populares do mundo.",
        price: 7.9,
        image: "/images/menu/chocolate-ao-leite-kit-kat.png",
        badge: "NOVIDADE",
      },
      {
        name: "Chocolate KitKat Latte Macchiato",
        description: "KitKat Latte Macchiato Nestlé, une a crocância do wafer a uma saborosa cobertura de café com leite.",
        price: 7.9,
        image: "/images/menu/chocolate-kitkat-latte-macchiato.png",
        badge: "NOVIDADE",
      },
    ],
  },
];

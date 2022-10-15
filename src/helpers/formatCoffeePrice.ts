export function formatCoffeePrice(price: number) {
  const formattedUsingLib = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price)

  const [symbol, amount] = formattedUsingLib.split(' ')
  return amount
}

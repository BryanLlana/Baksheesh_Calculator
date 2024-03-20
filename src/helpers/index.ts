export const formatNumberToPen = (price: number) => {
  return price.toLocaleString('es-PE', {
    style: 'currency',
    currency: 'PEN'
  })
}
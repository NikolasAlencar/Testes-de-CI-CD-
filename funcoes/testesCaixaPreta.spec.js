const { ehTriangulo } = require('./EhTriangulo')

it('Validar se é um triângulo quando todos os lados são iguais', () => {
    expect(ehTriangulo(3, 3, 3)).toBe(true)
})

it('Validar se é um triangulo quando todos os lados  são diferentes', () => {
    expect(ehTriangulo(1, 2, 3)).toBe(true)
})

it('Validar se é triângulo quando dois lados a e b são iguais', () => {
    expect(ehTriangulo(1, 1, 3)).toBe(true)
})

it('Validar se é triângulo quando dois lados a e c são iguais', () => {
    expect(ehTriangulo(3, 0, 3)).toBe(true)
})

it('Validar se é triângulo quando dois lados b e c são iguais', () => {
    expect(ehTriangulo(1, 2, 2)).toBe(true)
})

it('Validar que não é triângulo quandos todos os lados são iguais a 0', () => {
    expect(ehTriangulo(0, 0, 0)).toBe(false)
})

it('Validar que não é triângulo quandos 2 lados são iguais a 0', () => {
    expect(ehTriangulo(0, 0, 1)).toBe(false)
})

it('Validar que não é triângulo quandos 1 lado é igual a 0', () => {
    expect(ehTriangulo(7, 1, 0)).toBe(false)
})


matriz1 = list()
matriz2 = list()

for linha in range(0, 4):
    aux = list() #criação de uma lista auxiliar
    for coluna in range(0, 2):
        aux.append(int(input(f"Insira um valor para a posição [{linha + 1}, {coluna + 1}] na matriz 1: ")))
    matriz1.append(aux[:]) #Após terminar uma linha inteira (percorreu de 0 até 3 colunas e entrando na identação de linhas), faz uma CÓPIA '[:]' de aux e coloca na matriz
    aux.clear() #Limpa aux

print()
print()

for linha in range(0, 4):
    aux = list()
    for coluna in range(0, 4):
        aux.append(int(input(f"Insira um valor para a posição [{linha + 1}, {coluna + 1}] na matriz 2: ")))
    matriz2.append(aux[:])
    aux.clear()

matriz3 = list()

for linha in range(0, 4):
    for coluna in range(0, 4):
        if matriz1[linha][coluna] > matriz2[linha][coluna]:
            matriz3.append(matriz1[linha][coluna])
        elif matriz2[linha][coluna] > matriz1[linha][coluna]:
            matriz3.append(matriz2[linha][coluna])
        else:
            matriz3.append(matriz1[linha][coluna])


# Documentação do Projeto Subwaze

## 1. Introdução

O projeto "Subwaze" busca melhorar a experiência dos passageiros de metrô, oferecendo informações sobre lotação dos vagões e instruções para acessar o vagão mais vazio, de maneira interativa e amigável.

---

## 2. Estrutura do HTML

O HTML do projeto é organizado com as seguintes principais seções:

### 2.1 Cabeçalho (Head)

Contém informações gerais da página, incluindo o título, ícone (favicon), metadados de responsividade e link para a folha de estilos.

### 2.2 Cabeçalho (Header)

O cabeçalho apresenta o título "Subwaze" e um menu móvel com um ícone de hambúrguer para dispositivos móveis. O menu contém links de navegação que são exibidos ou ocultados ao clicar no ícone.

### 2.3 Conteúdo Principal (Main)

Esta seção centraliza a funcionalidade do aplicativo, incluindo:

- **Formulário de Busca de Trajeto**: Permite que o usuário insira a localização atual e o destino desejado para iniciar a busca pelo trajeto ideal.
- **Mensagem de Status**: Mostra feedback ao usuário sobre o progresso da busca.
- **Seção de Etapas**: Exibe as etapas que o usuário precisa seguir para chegar ao vagão mais vazio, com textos e imagens explicativas.
- **Informações da Estação**: Mostra a estação atual, tempo para o próximo trem, etc.
- **Mapa de Trem**: Representa visualmente a linha do trem e estações.
- **Capacidade dos Vagões**: Indica a lotação dos diferentes vagões com cores para visualização rápida.

---

## 3. Estrutura de Arquivos

- **HTML**: Estrutura principal da página.
- **CSS**: Contém estilos aplicados à página para formatar elementos, como header, formulário, e seções interativas.
- **JavaScript**: Controla a interatividade da página, incluindo a lógica do menu, busca de trajetos e etapas para guiar o usuário.

---

## 4. Funcionalidades

### 4.1 Menu Mobile

- **Abrir/Fechar Menu**: O menu móvel é aberto e fechado ao clicar no ícone correspondente. Ele exibe as opções de navegação e volta ao estado inicial quando fechado.

### 4.2 Formulário de Busca

- **Entrada de Localização e Destino**: Os campos permitem que o usuário informe sua localização e o destino desejado. O botão "Buscar" inicia a busca pelo trajeto.

### 4.3 Etapas do Trajeto

- Uma série de instruções e imagens são exibidas ao usuário, orientando-o sobre como chegar ao vagão mais vazio.

### 4.4 Mapa Interativo

- Mostra as estações e destaca o percurso do usuário com base na busca realizada.

### 4.5 Capacidade dos Vagões

- Exibe a lotação dos vagões com cores (verde, amarelo, laranja, vermelho) para indicar a ocupação.

---

## 5. Instruções de Uso

1. **Abrir a Página**: Acesse o projeto pelo navegador.
2. **Menu Mobile**: Use o ícone de hambúrguer para abrir/fechar o menu.
3. **Formulário de Busca**: Preencha sua localização e destino e clique no botão "Buscar".
4. **Acompanhar Etapas**: Siga as instruções mostradas para encontrar o melhor trajeto.
5. **Consultar Mapa e Lotação**: Visualize as informações sobre estações e lotação dos vagões.

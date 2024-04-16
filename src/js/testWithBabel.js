const arrowFunc = (n1, n2, operator) => {
    switch (operator) {
        case '+':
            console.log(`Resultado da operação: ${n1 + n2}`);
            break;
        case '-':
            console.log(`Resultado da operação: ${n1 - n2}`);
            break;
        case '/':
            console.log(`Resultado da operação: ${n1 / n2}`);
            break;
        case '*':
            console.log(`Resultado da operação: ${n1 * n2}`);
            break;
        case '%':
            console.log(`Resultado da operação: ${n1 % n2}`);
            break;
        case '^':
            console.log(`Resultado da operação: ${n1 ^ n2}`);
            break;
        default:
            console.log('Opção inválida!');
            break;
    }
};

export {arrowFunc};
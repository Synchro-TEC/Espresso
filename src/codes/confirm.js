export default {
  confirmExample: `const options = {
    title: 'Confirmar operação',
    cancelButtonText: 'Cancelar',
    confirmButtonText: 'Confirmar',
  };
  Confirm(
    'Confirma o pagamento do valor de R$ 1.750,00, a ser debitado diretamente de sua conta corrente?',
    options
  ).then(
    result => {
      //callback a ser disparado quando usuário clicar no botão de confirm
      Hermes.setContext('success');
      Hermes.setTitle('Sucesso');
      Hermes.addMessage('Pagamento efetuado com sucesso.', true);
    },
    result => {
      //callback a ser disparado quando usuário clicar no botão de cancelar
      Hermes.setContext('error');
      Hermes.setTitle('Erro');
      Hermes.addMessage('O pagamento não foi realizado.', true);
    }
  );

`,
};

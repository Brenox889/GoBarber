import React from 'react';
import { FiAlertCircle } from 'react-icons/fi';

import { Container, Toast } from './styles';

const ToastContainer: React.FC = () => {
  return (
    <Container>
      <Toast>
        <FiAlertCircle />

        <div>
          <strong>Aconteceu um erro</strong>
          <p>Não foi possivel fazer </p>
        </div>
      </Toast>
    </Container>
  );
};

export default ToastContainer;

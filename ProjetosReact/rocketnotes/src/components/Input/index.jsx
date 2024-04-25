import PropTypes from 'prop-types';
import { Container } from './styles';

export function Input({ icon, ...rest }) {
  return (
    <Container>
      {icon && icon} {}
      <input {...rest} />
    </Container>
  );
}

Input.propTypes = {
  icon: PropTypes.element,
};

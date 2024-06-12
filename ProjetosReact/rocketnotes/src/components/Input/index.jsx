import PropTypes from 'prop-types';
import { Container } from './styles';

export default function Input({ icon, ...rest }) {
  return (
    <Container>
      {icon}
      <input {...rest} />
    </Container>
  );
}

Input.propTypes = {
  icon: PropTypes.element,
};

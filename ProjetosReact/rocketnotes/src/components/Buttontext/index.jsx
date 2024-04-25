import PropTypes from 'prop-types';
import { Container } from "./styles";

export function ButtonText({title, isActive, ...rest}){
    return(
        <Container type="button" 
        isactive={isActive}
        {...rest}>
            {title}
        </Container>
    )
}

ButtonText.propTypes = {
    title: PropTypes.string.isRequired,
    isActive: PropTypes.string.isRequired,
};
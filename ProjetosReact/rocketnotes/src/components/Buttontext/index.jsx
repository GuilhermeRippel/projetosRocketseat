import PropTypes from 'prop-types';
import { Container } from "./styles";

export function ButtonText({title, isActive, ...rest}){
    return(
        <Container type="button" 
        isActive={isActive}
        {...rest}>
            {title}
        </Container>
    )
}

ButtonText.propTypes = {
    title: PropTypes.string.isRequired,
    isActive: PropTypes.string,
};
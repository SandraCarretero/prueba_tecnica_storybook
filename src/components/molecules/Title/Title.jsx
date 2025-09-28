import { Button } from '../../atoms/Button/Button';
import { Typography } from '../../atoms/Typography/Typography';
import { StyledButtonContainer } from './title.styles';

const Title = () => {
  return (
    <>
      <Typography variant="title">Monstera Decorative</Typography>
      <Typography variant="info" color="grey">
        REF: 130834-270547
      </Typography>
      <StyledButtonContainer>
      <Button size="small" label={'🔥 HOT SALES'}/>
      <Button  variant="selector" size="small" label={'24h Delivery'}/>
      </StyledButtonContainer>
    </>
  );
};

export default Title;

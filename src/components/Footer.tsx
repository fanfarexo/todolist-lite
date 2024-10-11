import styled from 'styled-components';

const FooterContainer = styled.div`
  width: 100%;
  padding: 20px 0;
  color: #d0d0d0;
  border-radius: 0 0 10px 10px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <span>@Fanfarexo</span>
    </FooterContainer>
  );
};

export default Footer;

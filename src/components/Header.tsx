import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { Plus } from 'styled-icons/fa-solid';

const HeaderContainer = styled.div`
  width: 100%;
  height: 130px;
  padding: 0 30px;
  background-color: #ff1f5a;
  color: #fff;
  border-radius: 10px 10px 0 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FlexRow = styled.div`
  display: flex;
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const LargeText = styled.span`
  font-size: xxx-large;
  font-weight: bold;
`;

const AddButton = styled.button`
  width: 40px;
  height: 40px;
  color: #ff1f5a;
  background-color: #fff;
  border-radius: 50%;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const PlusIcon = styled(Plus)`
  width: 24px;
  height: 24px;
`;

const Header = () => {
  const navigate = useNavigate();
  const gotoAdd = () => navigate('/add');

  return (
    <HeaderContainer>
      <FlexRow>
        <LargeText>11</LargeText>
        <FlexColumn>
          <span>OCT</span>
          <span>2024</span>
        </FlexColumn>
      </FlexRow>
      <AddButton>
        <PlusIcon onClick={gotoAdd} />
      </AddButton>
    </HeaderContainer>
  );
};

export default Header;

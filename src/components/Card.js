import styled from "styled-components";
import img from "../images/image-equilibrium.jpg";
import EthIcon from "../images/icon-ethereum.svg";
import Clock from "../images/icon-clock.svg";
import Eye from "../images/icon-view.svg";
import AvatarImg from "../images/image-avatar.png";

const Card = () => {
  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: min(300px, fit-content);
    max-width: 350px;
    background: hsl(216, 50%, 16%);
    border-radius: 0px;
    padding: 24px;
    box-shadow: 0px 25px 50px rgba(0, 0, 0, 0.095);
    box-sizing: border-box;

    @media (min-width: 400px) {
      border-radius: 15px;
    }

    & h2 {
      color: #fff;
      margin-bottom: 0;
      cursor: pointer;
      font-size: calc(22 / 16 * 1rem);
      font-weight: 600;
      transition: color 0.2s ease-in-out;

      &:hover {
        color: hsl(178, 100%, 50%);
      }
    }

    & p {
      cursor: pointer;
      color: hsl(215, 51%, 70%);
      font-weight: 300;
    }
  `;

  const MainImgWrapper = styled.div`
    position: relative;
    cursor: pointer;
    width: 100%;
    max-width: 300px;
    align-self: center;

    & .background {
      position: absolute;
      background: hsl(178, 100%, 50%);
      height: 100%;
      width: 100%;
      opacity: 0;
      border-radius: 8px;
      transition: opacity 0.2s ease-in-out;

      &:hover {
        opacity: 0.5;
      }
    }

    &:hover .eyeIcon {
      opacity: 1;
    }
  `;

  const EyeIcon = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
  `;

  const Image = styled.img`
    width: 100%;
    align-self: center;
    justify-self: center;
    border-radius: 8px;
    display: block;
  `;

  const InfoWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    font-size: calc(16 / 16 * 1rem);

    & .cost {
      color: hsl(178, 100%, 50%);
      cursor: pointer;
      font-weight: 600;
    }

    & .time {
      color: hsl(215, 51%, 70%);
      cursor: pointer;
      font-weight: 400;
    }
  `;

  const IconWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  `;

  const Icon = styled.img`
    display: block;
    padding-right: 6px;
  `;

  const Divider = styled.hr`
    border: none;
    border-top: 1px solid hsl(215, 32%, 27%);
    width: 100%;
    opacity: 0.6;
    margin-top: 24px;
  `;

  const AvatarWrapper = styled.div`
    display: flex;
    align-items: center;
    font-weight: 400;
    font-size: calc(16 / 16 * 1rem);

    & p {
      color: hsl(215, 51%, 70%);
    }

    & a {
      text-decoration: none;
      color: #fff;
      transition: color 0.2s ease-in-out;

      &:hover {
        color: hsl(178, 100%, 50%);
      }
    }
  `;

  const Avatar = styled.img`
    width: 33px;
    height: 33px;
    border: 1px solid #fff;
    border-radius: 50%;
    margin-right: 16px;
  `;

  return (
    <Wrapper>
      <MainImgWrapper>
        <div className="background"></div>
        <EyeIcon className="eyeIcon" src={Eye} alt="eye" />
        <Image src={img} alt="equilibrium" />
      </MainImgWrapper>
      <h2>Equilibrium #3429</h2>
      <p>Our Equilibrium collection promotes balance and calm.</p>
      <InfoWrapper>
        <IconWrapper>
          <Icon src={EthIcon} alt="etherium" />
          <span class="cost">0.041 ETH</span>
        </IconWrapper>
        <IconWrapper>
          <Icon src={Clock} alt="clock icon" />
          <span class="time">3 days left</span>
        </IconWrapper>
      </InfoWrapper>
      <Divider />
      <AvatarWrapper>
        <Avatar src={AvatarImg} />
        <p>
          Creation of <a href="0">Jules Wyvern</a>
        </p>
      </AvatarWrapper>
    </Wrapper>
  );
};

export default Card;

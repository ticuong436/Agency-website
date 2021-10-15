// This is ScrollToTop component, To scroll from anywhere to top
import styled from "styled-components";
import arrow from "../../assets/arrow-up.svg"

const Up = styled.div`
cursor: pointer;
position: fixed;
right: 5rem;
bottom: 4rem;
@media only Screen and (max-width: 48rem){
  display: none;
}
img{
  width: 3rem;
  height: 3rem;
  background-color: var(--white);
  border-radius: 50%;
  border: 1px solid var(--white);
  transition: transform 0.3s;
  &:hover{
  transform: scale(1.2);
  }
  &:active{
  transform: scale(0.9);
  }
}`;

const ScrollToTop = () => {
  const ScrollUp = () => {
    const element = document.getElementById("home");
    element.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest"
    })
  }
  return <Up onClick={() => { ScrollUp() }}>
    <img src={arrow} lalt="to top" />
  </Up>;
};

export default ScrollToTop;

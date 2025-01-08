import React from "react";
import styled from "styled-components";

const Div = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.black};
`;

const Icons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  opacity: 0.8;
`;

const Icon = styled.img`
  height: 1.5rem;
  margin: 0.8rem;
  color: white;
  opacity: 0.8;
`;

const Footer: React.FC = () => {
  const data = [
    {
      src: "/images/social/youtube.png",
      link: "https://www.youtube.com/user/wreckplusdigitalbox",
    },
    {
      src: "/images/social/facebook.png",
      link: "https://www.facebook.com/wreckplus/",
    },
    {
      src: "/images/social/spotify.png",
      link: "https://open.spotify.com/artist/67O5W0HYQmZhcFq24Pew9q",
    },
    {
      src: "/images/social/twitter.png",
      link: "https://twitter.com/wreck_plus",
    },
  ];
  return (
    <Div>
      <div>© 2021 Wreck Plus. All rights reserved.</div>
      <Icons>
        {data.map((item, index) => (
          <a key={`social-icon${index}`} href={item.link}>
            <Icon src={item.src} alt="" />
          </a>
        ))}
      </Icons>
    </Div>
  );
};

export default Footer;

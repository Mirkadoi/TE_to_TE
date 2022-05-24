import { useState } from 'react';
////////////////
//Первый вариант
////////////////

const useBlockMouseEnter = (mouseEnterCallbak) => {
  const [isActive, setActive] = useState(false);

  const mouseEnterHandler = () => {
    setActive(true);
    mouseEnterCallbak();
  };

  return [isActive, mouseEnterHandler]
}

const Block1 = ({ mouseEnterCallbak, imgSrc, imgAlt }) => {
  const [isActive, mouseEnterHandler] = useBlockMouseEnter(mouseEnterCallbak);

  return (
    <div onMouseEnter={mouseEnterHandler} className={isActive ? "active" : ""}>
      <img src={imgSrc} alt={imgAlt} />
    </div>
  );
};

const Block2 = ({ mouseEnterCallbak, content }) => {
  const [isActive, mouseEnterHandler] = useBlockMouseEnter(mouseEnterCallbak);

  return (
    <div onMouseEnter={mouseEnterHandler} className={isActive ? "active" : ""}>
      <p>BLock2 content: {content}</p>
    </div>
  );
};

////////////////
//Второй вариант
////////////////

const Wrapper = ({children, mouseEnterCallbak}) => {
  const [isActive, setActive] = useState(false);

  const mouseEnterHandler = () => {
    setActive(true);
    mouseEnterCallbak();
  };

  return (
    <div onMouseEnter={mouseEnterHandler} className={isActive ? "active" : ""}>
      {children}
    </div>
  )
}

const Block1 = ({ mouseEnterCallbak, imgSrc, imgAlt }) => {
  return (
    <Wrapper mouseEnterCallbak={mouseEnterCallbak}>
      <img src={imgSrc} alt={imgAlt} />
    </Wrapper>
  );
};

const Block2 = ({ mouseEnterCallbak, content }) => {
  return (
    <Wrapper mouseEnterCallbak={mouseEnterCallbak}>
      <p>BLock2 content: {content}</p>
    </Wrapper>
  );
};

import styled from '@emotion/styled';
import { CSSProperties, useMemo } from 'react';
import { useModalContext } from './ModalProvider';
import closeButtonImage from './assets/close-button.png';

// ============================== Types ==============================

interface CloseButtonProps {
  style?: CSSProperties;
  className?: string;
}

// ============================== Component ==============================

function CloseButton({ style, className }: CloseButtonProps) {
  const { onClose } = useModalContext();
  const memoizedStyle = useMemo(() => {
    if (!style) return {};
    return { ...style };
  }, [style]);

  return (
    <StyledCloseButton
      type="button"
      aria-label="모달 닫기 버튼"
      style={memoizedStyle}
      className={className}
      onClick={onClose}
    >
      <img src={closeButtonImage} alt="모달 닫기 버튼" />
    </StyledCloseButton>
  );
}

// ============================== Styled Components ==============================

const StyledCloseButton = styled.button`
  border: none;
  background: none;

  cursor: pointer;
`;

export default CloseButton;

import { useModalContext } from './modal';
import Modal from './modal/Modal';

function App() {
  return (
    <Modal role="alert-modal">
      <Modal.OpenTrigger>
        <button>열기</button>
      </Modal.OpenTrigger>
      <Modal.Container title="모달" showCloseButton={false}>
        <div>컨텐츠</div>
        <Modal.PromptInput />
        <Modal.CloseTrigger>
          <Modal.WideButton>확인</Modal.WideButton>
        </Modal.CloseTrigger>
      </Modal.Container>
    </Modal>
  );
}

export default App;

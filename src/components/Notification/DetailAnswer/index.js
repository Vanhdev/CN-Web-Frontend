import { Form, Modal } from 'antd';
import './index.css';

function DetailAnswer(props) {

    const {open, handleClose} = props;

    return (
      <>
        <Modal
          className='modal-answer'
          title="I can't find the meeting point. What do I do?"
          centered
          open={open}
          onCancel={handleClose}
          footer={null}
          closable
          >
            <strong style={{color: 'var(--pink-color)'}}>Câu trả lời: </strong>
            <p style={{textAlign: 'justify', fontWeight: 300, margin: '10px 0'}}>
              If you want to create a website where questions and answers can be published, then the themes in this collection will provide you with everything you need.
              If you want to create a website where questions and answers can be published, then the themes in this collection will provide you with everything you need.
            </p>
        </Modal>
      </>
    );
};
export default DetailAnswer;
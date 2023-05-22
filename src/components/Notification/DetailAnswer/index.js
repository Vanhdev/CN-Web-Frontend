import { Form, Modal } from 'antd';

function DetailAnswer(props) {

    const {open, setOpen} = props;
    console.log({open});

    return (
      <>
        <Modal
          destroyOnClose={true}
          title="Vertically centered modal dialog"
          centered
          open={open}
          onCancel={() => setOpen(!open)}
          footer={null}
          
        >
          <Form preserve={false}>
            <p>some contents...</p>
            <p>some contents...</p>
            <p>some contents...</p>
          </Form>
        </Modal>
      </>
    );
};
export default DetailAnswer;